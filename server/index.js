import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static frontend when built
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'APEX-QA™ Server',
    auditor: 'Faik Bajsair, S.Kom., M.Kom.',
    prodi: 'Sistem Informasi',
    timestamp: new Date().toISOString()
  });
});

// Cache session cookies for InfinityFree / ByetHost domains to reuse across asset requests
const domainSessionCache = new Map();

function saveDomainSession(targetUrl, cookie, userAgent) {
  try {
    const host = new URL(targetUrl).hostname;
    domainSessionCache.set(host, {
      cookie,
      userAgent: userAgent || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 APEX-QA-Auditor/1.0 (Lecturer Evaluation Engine; Faik Bajsair, S.Kom., M.Kom.)',
      timestamp: Date.now()
    });
  } catch (e) {}
}

// Helper: Universal Fetcher with Auto-Fallback (HTTPS -> HTTP) and InfinityFree Anti-Bot Solver
async function fetchWithBypass(rawUrl, options = {}) {
  let targetUrl = rawUrl.trim();
  const timeoutMs = options.timeoutMs || 8000;
  
  const urlsToTry = [];
  if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
    urlsToTry.push(targetUrl);
    if (targetUrl.startsWith('https://') && (targetUrl.includes('.free.nf') || targetUrl.includes('.epizy.') || targetUrl.includes('.rf.gd') || targetUrl.includes('.gamer.gd') || targetUrl.includes('.page.gd') || targetUrl.includes('infinityfree'))) {
      urlsToTry.push(targetUrl.replace('https://', 'http://'));
    }
  } else {
    if (targetUrl.includes('.free.nf') || targetUrl.includes('.epizy.') || targetUrl.includes('.rf.gd') || targetUrl.includes('.gamer.gd') || targetUrl.includes('.page.gd') || targetUrl.includes('infinityfree')) {
      urlsToTry.push('http://' + targetUrl);
      urlsToTry.push('https://' + targetUrl);
    } else {
      urlsToTry.push('https://' + targetUrl);
      urlsToTry.push('http://' + targetUrl);
    }
  }

  let lastError = null;
  for (const url of urlsToTry) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);
      
      const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 APEX-QA-Auditor/1.0 (Lecturer Evaluation Engine; Faik Bajsair, S.Kom., M.Kom.)';
      
      const resp = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': userAgent,
          ...(options.headers || {})
        }
      });
      clearTimeout(timeout);

      let html = await resp.text();
      let finalUrl = resp.url || url;
      let finalHeaders = Object.fromEntries(resp.headers.entries());

      // Save cookie if available
      const setCookie = resp.headers.get('set-cookie');
      if (setCookie) {
        saveDomainSession(finalUrl, setCookie, userAgent);
      }

      // Check for InfinityFree / ByetHost AES anti-bot challenge
      if (html.includes('/aes.js') && html.includes('toNumbers(')) {
        const matches = [...html.matchAll(/toNumbers\(["']([a-f0-9]+)["']\)/g)];
        if (matches.length >= 3) {
          const keyHex = matches[0][1];
          const ivHex = matches[1][1];
          const cipherHex = matches[2][1];

          try {
            const key = Buffer.from(keyHex, 'hex');
            const iv = Buffer.from(ivHex, 'hex');
            const cipher = Buffer.from(cipherHex, 'hex');
            const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
            decipher.setAutoPadding(false);
            const decryptedHex = Buffer.concat([decipher.update(cipher), decipher.final()]).toString('hex');

            // Save solved __test cookie in domain session cache immediately!
            saveDomainSession(finalUrl, `__test=${decryptedHex}`, userAgent);

            const cleanBase = finalUrl.replace(/\/+$/, '');
            const nextUrl = finalUrl.includes('?') ? `${finalUrl}&i=1` : `${cleanBase}/?i=1`;
            const controller2 = new AbortController();
            const timeout2 = setTimeout(() => controller2.abort(), timeoutMs);
            const resp2 = await fetch(nextUrl, {
              signal: controller2.signal,
              headers: {
                'User-Agent': userAgent,
                'Cookie': `__test=${decryptedHex}`,
                ...(options.headers || {})
              }
            });
            clearTimeout(timeout2);

            html = await resp2.text();
            finalUrl = (resp2.url || nextUrl).replace(/([^:]\/)\/+/g, '$1');
            finalHeaders = Object.fromEntries(resp2.headers.entries());

            if (resp2.headers.get('set-cookie')) {
              saveDomainSession(finalUrl, `__test=${decryptedHex}; ${resp2.headers.get('set-cookie')}`, userAgent);
            }
          } catch (e) {
            console.warn('InfinityFree AES solve failed:', e.message);
          }
        }
      }

      return {
        ok: true,
        url: finalUrl,
        workingUrl: finalUrl,
        status: resp.status,
        headers: finalHeaders,
        html
      };
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error(`Gagal menghubungi ${rawUrl}`);
}

// Fetcher for subresources (CSS, JS, images) with domain session cookie support
async function fetchAssetWithBypass(assetUrl, referer = '') {
  let hostname = '';
  try {
    hostname = new URL(assetUrl).hostname;
  } catch (e) {
    throw new Error('Invalid URL');
  }

  const session = domainSessionCache.get(hostname);
  const defaultUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 APEX-QA-Auditor/1.0 (Lecturer Evaluation Engine; Faik Bajsair, S.Kom., M.Kom.)';
  const userAgent = session?.userAgent || defaultUA;

  const headers = {
    'User-Agent': userAgent,
    'Accept': '*/*',
    'Referer': referer || assetUrl,
  };
  if (session?.cookie) {
    headers['Cookie'] = session.cookie;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);
  try {
    const resp = await fetch(assetUrl, {
      signal: controller.signal,
      headers
    });
    clearTimeout(timeout);

    const contentType = resp.headers.get('content-type') || '';
    
    // Check if challenge HTML was returned instead of the real asset
    if (contentType.includes('text/html') || contentType.includes('application/xhtml+xml')) {
      const text = await resp.text();
      if (text.includes('/aes.js') && text.includes('toNumbers(')) {
        const solved = await fetchWithBypass(assetUrl, { timeoutMs: 6000 });
        return {
          status: solved.status,
          contentType: solved.headers['content-type'] || 'text/plain',
          data: Buffer.from(solved.html, 'utf-8'),
          text: solved.html,
          isHtmlChallenge: false
        };
      }
      return {
        status: resp.status,
        contentType,
        data: Buffer.from(text, 'utf-8'),
        text,
        isHtmlChallenge: text.includes('<html') || text.includes('<!DOCTYPE')
      };
    }

    const arrayBuffer = await resp.arrayBuffer();
    return {
      status: resp.status,
      contentType: contentType || 'application/octet-stream',
      data: Buffer.from(arrayBuffer),
      text: null,
      isHtmlChallenge: false
    };
  } finally {
    clearTimeout(timeout);
  }
}

// Helper to detect hosting platform from URL and response headers
function detectHostingPlatform(targetUrl, headers) {
  const urlLower = targetUrl.toLowerCase();
  const headerKeys = Object.keys(headers).map(k => k.toLowerCase());
  const serverHeader = (headers['server'] || '').toLowerCase();

  if (urlLower.includes('.free.nf') || urlLower.includes('.epizy.') || urlLower.includes('.rf.gd') || urlLower.includes('.gamer.gd') || urlLower.includes('.page.gd') || urlLower.includes('infinityfree')) {
    return {
      provider: 'InfinityFree / Free Web Hosting',
      badge: 'InfinityFree Web Server',
      icon: 'server',
      isModernCloud: false,
      description: 'Aplikasi di-hosting pada layanan gratis InfinityFree (ByetHost). Menggunakan protokol HTTP dan proteksi cookie anti-bot.'
    };
  }

  if (urlLower.includes('.vercel.app') || headerKeys.includes('x-vercel-id')) {
    return {
      provider: 'Vercel',
      badge: 'Vercel Edge Network',
      icon: 'vercel',
      isModernCloud: true,
      description: 'Aplikasi di-deploy pada infrastruktur serverless Vercel dengan Edge CDN global.'
    };
  }
  if (urlLower.includes('.github.io') || serverHeader.includes('github.com')) {
    return {
      provider: 'GitHub Pages',
      badge: 'GitHub Pages CDN',
      icon: 'github',
      isModernCloud: true,
      description: 'Aplikasi web statis / SPA di-hosting di GitHub Pages.'
    };
  }
  if (urlLower.includes('.netlify.app') || headerKeys.includes('x-nf-request-id')) {
    return {
      provider: 'Netlify',
      badge: 'Netlify Cloud CDN',
      icon: 'netlify',
      isModernCloud: true,
      description: 'Aplikasi di-hosting pada Netlify Jamstack CDN.'
    };
  }
  if (urlLower.includes('.railway.app') || urlLower.includes('.up.railway.app')) {
    return {
      provider: 'Railway',
      badge: 'Railway Cloud Container',
      icon: 'railway',
      isModernCloud: true,
      description: 'Aplikasi backend / fullstack berjalan dalam container cloud Railway.'
    };
  }
  if (urlLower.includes('.onrender.com') || headerKeys.includes('x-render-origin-server')) {
    return {
      provider: 'Render',
      badge: 'Render Cloud Web Service',
      icon: 'render',
      isModernCloud: true,
      description: 'Aplikasi di-hosting pada platform cloud Render.'
    };
  }
  if (headerKeys.includes('cf-ray') || serverHeader.includes('cloudflare')) {
    return {
      provider: 'Cloudflare Pages / Workers',
      badge: 'Cloudflare Edge',
      icon: 'cloudflare',
      isModernCloud: true,
      description: 'Aplikasi dilindungi dan di-cache oleh Cloudflare Global Edge.'
    };
  }
  if (urlLower.startsWith('https://')) {
    return {
      provider: 'HTTPS Cloud Server / VPS',
      badge: 'Cloud SSL Secured',
      icon: 'cloud',
      isModernCloud: true,
      description: 'Aplikasi di-hosting pada server cloud / VPS dengan enkripsi HTTPS aktif.'
    };
  }
  return {
    provider: 'Localhost / HTTP Server',
    badge: 'Local Development Server',
    icon: 'server',
    isModernCloud: false,
    description: 'Server development lokal.'
  };
}

// 1. URL Scanner endpoint (Cloud & Hosting Aware)
app.post('/api/scan-url', async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL target wajib diisi' });
  }

  const startTime = Date.now();
  const rawTargetUrl = url.trim();

  try {
    const fetchRes = await fetchWithBypass(rawTargetUrl, { timeoutMs: 9000 });
    const targetUrl = fetchRes.workingUrl;
    const html = fetchRes.html;
    const responseTime = Date.now() - startTime;
    const headers = fetchRes.headers;

    // Hosting Provider Detection
    const hosting = detectHostingPlatform(targetUrl, headers);
    const isHttps = targetUrl.startsWith('https://');

    // Basic DOM & Security Header Analysis
    const hasViewport = /<meta\s+name=["']viewport["']/i.test(html);
    const hasTitle = /<title>(.*?)<\/title>/i.test(html);
    const pageTitle = hasTitle ? html.match(/<title>(.*?)<\/title>/i)[1].trim() : 'Tidak ditemukan judul';
    const hasCharset = /charset=["']?utf-8["']?/i.test(html);
    
    // Security Header checks
    const securityHeaders = {
      xFrameOptions: !!headers['x-frame-options'],
      contentSecurityPolicy: !!headers['content-security-policy'],
      strictTransportSecurity: !!headers['strict-transport-security'],
      xContentTypeOptions: !!headers['x-content-type-options'],
      referrerPolicy: !!headers['referrer-policy']
    };

    // Button & Link Auditing
    const allButtons = (html.match(/<button\b[^>]*>([\s\S]*?)<\/button>/gi) || []);
    const deadButtons = allButtons.filter(b => !/onclick|type=["']submit["']|data-|wire:|@click|v-on/i.test(b));
    
    const allLinks = (html.match(/<a\b[^>]*href=["']([^"']*)["'][^>]*>/gi) || []);
    const hashLinks = (html.match(/href=["']#["']/gi) || []).length;
    const javascriptVoidLinks = (html.match(/href=["']javascript:void\(0\)["']/gi) || []).length;

    // Form & Input Auditing
    const allForms = (html.match(/<form\b[^>]*>([\s\S]*?)<\/form>/gi) || []);
    const formAudit = allForms.map((formHtml, idx) => {
      const hasCsrf = /csrf|token|_token/i.test(formHtml);
      const method = (formHtml.match(/method=["']([^"']+)["']/i) || [])[1] || 'GET';
      const inputs = (formHtml.match(/<input\b[^>]*>/gi) || []);
      const inputsWithoutName = inputs.filter(inp => !/name=["'][^"']+["']/i.test(inp)).length;
      const hasSubmitBtn = /type=["']submit["']|<button/i.test(formHtml);

      return {
        formId: idx + 1,
        method: method.toUpperCase(),
        inputCount: inputs.length,
        hasCsrf,
        inputsWithoutName,
        hasSubmitBtn
      };
    });

    // Detect navigation routes / syllabus pages presence
    const detectedKeywords = {
      beranda: /beranda|home|chicken|food|resto/i.test(html),
      tentangKami: /tentang kami|about us|visi.*misi|profil/i.test(html),
      kontak: /kontak|contact|hubungi|telepon|alamat/i.test(html),
      faq: /faq|frequently asked|tanya jawab/i.test(html),
      terms: /syarat.*ketentuan|terms.*condition|aturan/i.test(html),
      privacy: /kebijakan privasi|privacy policy/i.test(html),
      testimoni: /testimoni|review|ulasan|kata pelanggan/i.test(html),
      blog: /blog|artikel|berita|news/i.test(html),
      promo: /promo|diskon|voucher|coupon|hemat/i.test(html),
      wishlist: /wishlist|favorit|simpan/i.test(html),
      cart: /keranjang|cart|troli|pesanan/i.test(html),
      checkout: /checkout|bayar sekarang|pesan sekarang/i.test(html),
      account: /akun|profile|profil|pengaturan/i.test(html),
      login: /login|masuk|sign in/i.test(html),
      admin: /admin|dashboard|kelola|manajemen/i.test(html),
    };

    res.json({
      success: true,
      url: targetUrl,
      isHttps,
      hosting,
      status: fetchRes.status,
      statusText: fetchRes.status === 200 ? 'OK' : 'Active',
      responseTime: `${responseTime} ms`,
      pageTitle,
      hasViewport,
      hasCharset,
      securityHeaders,
      stats: {
        htmlSizeKb: (Buffer.byteLength(html, 'utf8') / 1024).toFixed(2),
        totalButtons: allButtons.length,
        deadButtonsCount: deadButtons.length,
        totalLinks: allLinks.length,
        deadLinksCount: hashLinks + javascriptVoidLinks,
        formsCount: allForms.length
      },
      formAudit,
      detectedKeywords
    });
  } catch (err) {
    res.json({
      success: false,
      url: rawTargetUrl,
      error: err.name === 'AbortError' ? 'Koneksi timeout (>9 detik ke hosting)' : err.message,
      note: 'Periksa kembali apakah URL hosting mahasiswa dapat diakses secara publik.'
    });
  }
});

// 2. Multi-Route Cloud Scanner (Pings all syllabus endpoints on student's live domain)
app.post('/api/scan-all-routes', async (req, res) => {
  const { baseUrl, routes } = req.body;
  if (!baseUrl) {
    return res.status(400).json({ error: 'Base URL hosting mahasiswa wajib diisi.' });
  }

  let base = baseUrl.trim().replace(/\/+$/, '');

  const routesToTest = routes || [
    { route: '/', name: 'Halaman Beranda', section: 'Frontend 1' },
    { route: '/about', name: 'Halaman Tentang Kami (Visi & Misi)', section: 'Frontend 1' },
    { route: '/contact', name: 'Halaman Kontak Kami & Maps', section: 'Frontend 1' },
    { route: '/faq', name: 'Halaman FAQ', section: 'Frontend 1' },
    { route: '/terms', name: 'Halaman Syarat & Ketentuan', section: 'Frontend 1' },
    { route: '/privacy', name: 'Halaman Kebijakan Privasi', section: 'Frontend 1' },
    { route: '/testimonials', name: 'Halaman Testimoni Pelanggan', section: 'Frontend 1' },
    { route: '/blog', name: 'Halaman Blog / Berita', section: 'Frontend 1' },
    { route: '/promo', name: 'Halaman Promo & Diskon', section: 'Frontend 1' },
    { route: '/wishlist', name: 'Halaman Wishlist', section: 'Frontend 1' },
    { route: '/products', name: 'Halaman Katalog Produk (Add to Cart)', section: 'Frontend 2' },
    { route: '/cart', name: 'Halaman Keranjang (Cart)', section: 'Frontend 2' },
    { route: '/checkout', name: 'Halaman Checkout Terpadu', section: 'Frontend 2' },
    { route: '/account/orders', name: 'Halaman Riwayat Pesanan', section: 'Frontend 2' },
    { route: '/track-order', name: 'Halaman Lacak Pesanan (Pengguna)', section: 'ERP Backend 2' },
    { route: '/admin/products', name: 'Manajemen Produk (CRUD)', section: 'ERP Backend 1' },
    { route: '/admin/customers', name: 'Manajemen Pelanggan', section: 'ERP Backend 1' },
    { route: '/admin/inventory', name: 'Manajemen Stok & Low Stock Alert', section: 'ERP Backend 1' },
    { route: '/admin/orders', name: 'Manajemen Pesanan (Workflow)', section: 'ERP Backend 1' },
    { route: '/admin/finance', name: 'Laporan Keuangan & Laba Rugi', section: 'ERP Backend 2' },
    { route: '/admin/crm', name: 'Modul CRM & Leads', section: 'ERP Backend 2' },
    { route: '/admin/analytics', name: 'Analitik & Statistik Penjualan', section: 'ERP Backend 2' }
  ];

  // Concurrently test batches of routes to be polite but fast
  const checkRoute = async (item) => {
    const fullUrl = `${base}${item.route}`;
    const start = Date.now();
    try {
      const fetchRes = await fetchWithBypass(fullUrl, { timeoutMs: 5000 });
      const duration = Date.now() - start;
      const htmlText = fetchRes.html;
      const hasTitle = /<title>(.*?)<\/title>/i.test(htmlText);
      const title = hasTitle ? htmlText.match(/<title>(.*?)<\/title>/i)[1].trim() : '';

      return {
        ...item,
        fullUrl: fetchRes.workingUrl,
        status: fetchRes.status,
        statusText: fetchRes.status === 200 ? 'OK' : 'Active',
        ok: fetchRes.status >= 200 && fetchRes.status < 400,
        duration: `${duration} ms`,
        pageTitle: title,
        sizeKb: (Buffer.byteLength(htmlText, 'utf8') / 1024).toFixed(1)
      };
    } catch (e) {
      return {
        ...item,
        fullUrl,
        status: 0,
        statusText: e.name === 'AbortError' ? 'Timeout' : 'Unreachable',
        ok: false,
        duration: '>5000 ms',
        pageTitle: '',
        error: e.message
      };
    }
  };

  const promises = routesToTest.map(r => checkRoute(r));
  const resolved = await Promise.all(promises);

  res.json({
    success: true,
    baseUrl: base,
    totalScanned: resolved.length,
    passedCount: resolved.filter(r => r.ok).length,
    failedCount: resolved.filter(r => !r.ok).length,
    results: resolved
  });
});

// 3. Reverse Proxy with Frame-Busting, Anti-Bot Bypass & Mixed-Content Inliner
app.get('/api/proxy-preview', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).send('Param ?url= wajib diisi');

  try {
    const result = await fetchWithBypass(targetUrl, { timeoutMs: 9000 });
    let html = result.html;
    const rawWorking = result.workingUrl || targetUrl;
    const workingUrl = rawWorking.replace(/([^:]\/)\/+/g, '$1');

    let targetOrigin = '';
    try {
      const u = new URL(workingUrl);
      targetOrigin = u.origin;
    } catch (e) {
      targetOrigin = targetUrl.startsWith('http') ? targetUrl : 'http://' + targetUrl;
    }

    // 0. Remove any frame-blocking or CSP meta tags and strip <base>
    html = html.replace(/<meta\b[^>]*http-equiv=["'](?:Content-Security-Policy|X-Frame-Options)["'][^>]*>/gi, '');
    html = html.replace(/<base\b[^>]*>/gi, '');

    // 1. Process and Inline Stylesheets (with relative URL rewriting to avoid Mixed Content)
    const linkMatches = [...html.matchAll(/<link\b([^>]*)\/?>/gi)];
    for (const match of linkMatches) {
      const fullTag = match[0];
      const attrs = match[1];
      const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
      const relMatch = attrs.match(/rel=["']([^"']+)["']/i);
      if (!hrefMatch) continue;

      const cssHref = hrefMatch[1];
      const isCss = cssHref.includes('.css') || (relMatch && relMatch[1].toLowerCase().includes('stylesheet'));
      if (!isCss) continue;

      let fullCssUrl = cssHref;
      try {
        fullCssUrl = new URL(cssHref, workingUrl).href.replace(/([^:]\/)\/+/g, '$1');
      } catch (e) {
        fullCssUrl = (cssHref.startsWith('http') ? cssHref : (targetOrigin + (cssHref.startsWith('/') ? '' : '/') + cssHref)).replace(/([^:]\/)\/+/g, '$1');
      }

      try {
        const cssRes = await fetchAssetWithBypass(fullCssUrl, workingUrl);
        if (cssRes.text && !cssRes.isHtmlChallenge && !cssRes.text.includes('/aes.js') && !cssRes.text.includes('<html')) {
          // Rewrite relative url(...) in the CSS to /api/proxy-asset?url=...
          let inlinedCss = cssRes.text.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (m, quote, innerUrl) => {
            innerUrl = innerUrl.trim();
            if (innerUrl.startsWith('data:') || innerUrl.startsWith('#')) return m;
            try {
              const absAssetUrl = new URL(innerUrl, fullCssUrl).href.replace(/([^:]\/)\/+/g, '$1');
              return `url('/api/proxy-asset?url=${encodeURIComponent(absAssetUrl)}')`;
            } catch (e) {
              return m;
            }
          });
          html = html.replace(fullTag, `<style data-source="${cssHref}">/* Inlined by APEX-QA */\n${inlinedCss}\n</style>`);
        } else {
          html = html.replace(fullTag, `<link rel="stylesheet" href="/api/proxy-asset?url=${encodeURIComponent(fullCssUrl)}">`);
        }
      } catch (e) {
        html = html.replace(fullTag, `<link rel="stylesheet" href="/api/proxy-asset?url=${encodeURIComponent(fullCssUrl)}">`);
      }
    }

    // 2. Process and Inline Scripts (Prevent Mixed-Content blocks on HTTP scripts)
    const scriptMatches = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
    for (const match of scriptMatches) {
      const fullTag = match[0];
      const attrs = match[1];
      const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
      if (!srcMatch) continue;

      const jsSrc = srcMatch[1];
      let fullJsUrl = jsSrc;
      try {
        fullJsUrl = new URL(jsSrc, workingUrl).href.replace(/([^:]\/)\/+/g, '$1');
      } catch (e) {
        fullJsUrl = (jsSrc.startsWith('http') ? jsSrc : (targetOrigin + (jsSrc.startsWith('/') ? '' : '/') + jsSrc)).replace(/([^:]\/)\/+/g, '$1');
      }

      try {
        const jsRes = await fetchAssetWithBypass(fullJsUrl, workingUrl);
        if (jsRes.text && !jsRes.isHtmlChallenge && !jsRes.text.includes('/aes.js') && !jsRes.text.includes('<html')) {
          html = html.replace(fullTag, `<script data-source="${jsSrc}">/* Inlined by APEX-QA */\n${jsRes.text}\n</script>`);
        } else {
          html = html.replace(fullTag, `<script src="/api/proxy-asset?url=${encodeURIComponent(fullJsUrl)}"></script>`);
        }
      } catch (e) {
        html = html.replace(fullTag, `<script src="/api/proxy-asset?url=${encodeURIComponent(fullJsUrl)}"></script>`);
      }
    }

    // 3. Rewrite Images (src & srcset) to Proxy-Asset
    html = html.replace(/(<img\b[^>]*?\bsrc=["'])([^"']+)(["'][^>]*>)/gi, (m, p1, srcVal, p3) => {
      if (srcVal.startsWith('data:')) return m;
      try {
        const absImgUrl = new URL(srcVal, workingUrl).href.replace(/([^:]\/)\/+/g, '$1');
        return `${p1}/api/proxy-asset?url=${encodeURIComponent(absImgUrl)}${p3}`;
      } catch (e) {
        return m;
      }
    });

    // 4. Rewrite Favicons
    html = html.replace(/(<link\b[^>]*?\bhref=["'])([^"']+)(["'][^>]*>)/gi, (m, p1, hrefVal, p3) => {
      if (hrefVal.startsWith('data:') || hrefVal.startsWith('#')) return m;
      if (m.toLowerCase().includes('icon')) {
        try {
          const abs = new URL(hrefVal, workingUrl).href.replace(/([^:]\/)\/+/g, '$1');
          return `${p1}/api/proxy-asset?url=${encodeURIComponent(abs)}${p3}`;
        } catch (e) {
          return m;
        }
      }
      return m;
    });

    // 5. Rewrite inline style background url(...)
    html = html.replace(/style=["']([^"']*background(?:-image)?\s*:\s*url\([^)]+\)[^"']*)["']/gi, (m, styleContent) => {
      const rewritten = styleContent.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (uMatch, quote, inner) => {
        if (inner.startsWith('data:') || inner.startsWith('#')) return uMatch;
        try {
          const abs = new URL(inner.trim(), workingUrl).href.replace(/([^:]\/)\/+/g, '$1');
          return `url('/api/proxy-asset?url=${encodeURIComponent(abs)}')`;
        } catch (e) {
          return uMatch;
        }
      });
      return `style="${rewritten}"`;
    });

    // 6. Rewrite <meta http-equiv="refresh"> tags to route through proxy-preview
    html = html.replace(/<meta\b[^>]*http-equiv=["']refresh["'][^>]*content=["']([^"']+)["'][^>]*>/gi, (match, content) => {
      const parts = content.split(/;\s*url=/i);
      if (parts.length === 2) {
        const delay = parts[0];
        const target = parts[1].trim().replace(/^['"]|['"]$/g, '');
        try {
          const abs = new URL(target, workingUrl).href;
          return `<meta http-equiv="refresh" content="${delay};url=/api/proxy-preview?url=${encodeURIComponent(abs)}">`;
        } catch (e) {
          return match;
        }
      }
      return match;
    });

    // 7. Rewrite Relative Links <a href="..."> and Forms <form action="...">
    html = html.replace(/(<a\b[^>]*?\bhref=["'])([^"']+)(["'][^>]*>)/gi, (m, p1, hrefVal, p3) => {
      const trimmed = hrefVal.trim();
      if (trimmed.startsWith('#') || trimmed.startsWith('javascript:') || trimmed.startsWith('mailto:') || trimmed.startsWith('tel:') || trimmed.startsWith('/api/proxy-preview')) return m;
      try {
        const absUrl = new URL(trimmed, workingUrl).href;
        return `${p1}/api/proxy-preview?url=${encodeURIComponent(absUrl)}${p3}`;
      } catch (e) {
        return m;
      }
    });

    html = html.replace(/(<form\b[^>]*?\baction=["'])([^"']+)(["'][^>]*>)/gi, (m, p1, actVal, p3) => {
      const trimmed = actVal.trim();
      if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('javascript:') || trimmed.startsWith('/api/proxy-preview')) return m;
      try {
        const absUrl = new URL(trimmed, workingUrl).href;
        return `${p1}/api/proxy-preview?url=${encodeURIComponent(absUrl)}${p3}`;
      } catch (e) {
        return m;
      }
    });

    // 8. Inject Security, Navigation Interception & Breakout Prevention Header
    const helperHeader = `
<meta name="referrer" content="no-referrer">
<script>
(function() {
  window.onbeforeunload = null;
  const baseUrl = ${JSON.stringify(workingUrl)};

  // Intercept all link clicks so relative links don't hit /api/
  document.addEventListener('click', function(e) {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (href.startsWith('/api/proxy-preview')) return;
    e.preventDefault();
    try {
      const abs = new URL(href, baseUrl).href;
      window.location.href = '/api/proxy-preview?url=' + encodeURIComponent(abs);
    } catch(err) {
      window.location.href = href;
    }
  }, true);

  // Intercept form submissions
  document.addEventListener('submit', function(e) {
    const form = e.target;
    const act = form.getAttribute('action') || '';
    if (act.startsWith('/api/proxy-preview')) return;
    const method = (form.method || 'GET').toUpperCase();
    if (method === 'GET') {
      e.preventDefault();
      try {
        const abs = new URL(act || window.location.href, baseUrl);
        const formData = new FormData(form);
        for (const [k, v] of formData.entries()) {
          abs.searchParams.set(k, v);
        }
        window.location.href = '/api/proxy-preview?url=' + encodeURIComponent(abs.href);
      } catch(err){}
    }
  }, true);
})();
</script>
`;
    if (html.includes('<head>')) {
      html = html.replace('<head>', `<head>${helperHeader}`);
    } else if (html.includes('<html>')) {
      html = html.replace('<html>', `<html><head>${helperHeader}</head>`);
    }

    // Strip frame-blocking and upgrade headers
    res.removeHeader('X-Frame-Options');
    res.removeHeader('Content-Security-Policy');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(html);
  } catch (err) {
    res.status(502).send(`
      <div style="font-family:sans-serif;padding:24px;background:#090d16;color:#f87171;min-height:100vh;">
        <h3 style="color:#ef4444;margin-bottom:8px;">⚠️ Preview Tidak Dapat Dimuat Lewat Iframe</h3>
        <p style="color:#cbd5e1;font-size:14px;line-height:1.6;">
          Target URL: <code style="background:#1e293b;padding:2px 6px;border-radius:4px;color:#38bdf8;">${targetUrl}</code>
        </p>
        <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-top:12px;">
          Penyebab: Hosting mahasiswa menggunakan proteksi khusus atau membatasi koneksi server-side.<br/>
          <strong>Solusi Terbaik:</strong> Klik tombol <strong>"Buka Web di Tab Sebelah ↗"</strong> di atas panel untuk melihat dan menguji web mahasiswa langsung di browser sambil mengisi nilai di sini.
        </p>
      </div>
    `);
  }
});

// 3b. Proxy Asset (Serves images, fonts, and subresources over HTTPS with session cookie)
app.get('/api/proxy-asset', async (req, res) => {
  const assetUrl = req.query.url;
  if (!assetUrl) return res.status(400).send('Param ?url= wajib diisi');

  try {
    const cleanUrl = assetUrl.replace(/([^:]\/)\/+/g, '$1');
    const assetResult = await fetchAssetWithBypass(cleanUrl);

    // Auto-detect correct MIME type based on file extension to avoid text/plain blocks
    const ext = cleanUrl.split('?')[0].split('.').pop().toLowerCase();
    let contentType = assetResult.contentType;
    if (ext === 'css') contentType = 'text/css; charset=utf-8';
    else if (ext === 'js') contentType = 'application/javascript; charset=utf-8';
    else if (['jpg', 'jpeg'].includes(ext)) contentType = 'image/jpeg';
    else if (ext === 'png') contentType = 'image/png';
    else if (ext === 'gif') contentType = 'image/gif';
    else if (ext === 'webp') contentType = 'image/webp';
    else if (ext === 'svg') contentType = 'image/svg+xml';
    else if (['woff', 'woff2', 'ttf', 'otf'].includes(ext)) contentType = `font/${ext}`;

    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(assetResult.data);
  } catch (err) {
    res.status(404).send('Asset not found');
  }
});

// 4. Remote GitHub Repository Scanner (Audits public student repo on github.com)
app.post('/api/scan-github-repo', async (req, res) => {
  const { repoUrl } = req.body;
  if (!repoUrl) {
    return res.status(400).json({ error: 'URL GitHub repository mahasiswa wajib diisi.' });
  }

  // Parse owner and repo name from GitHub URL
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) {
    return res.status(400).json({ error: 'Format URL GitHub tidak valid. Contoh: https://github.com/username/repository' });
  }

  const owner = match[1];
  const repo = match[2].replace(/\.git$/, '');

  try {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
    const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`;

    const repoResp = await fetch(apiUrl, {
      headers: { 'User-Agent': 'APEX-QA-Auditor (Faik Bajsair, S.Kom., M.Kom.)' }
    });
    
    if (!repoResp.ok) {
      return res.status(404).json({ error: `Repository GitHub "${owner}/${repo}" tidak ditemukan atau bersifat Private. Pastikan mahasiswa telah menyetel repositori ke Publik.` });
    }

    const repoInfo = await repoResp.json();

    // Fetch File Tree
    let treeResp = await fetch(treeUrl, {
      headers: { 'User-Agent': 'APEX-QA-Auditor' }
    });
    if (!treeResp.ok) {
      // Fallback branch master
      treeResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/master?recursive=1`, {
        headers: { 'User-Agent': 'APEX-QA-Auditor' }
      });
    }

    const treeData = await treeResp.json();
    const files = (treeData.tree || []).map(f => f.path);

    // Detect Framework from File Structure
    let framework = 'Web Application';
    if (files.some(f => f.includes('artisan') || f.includes('app/Http/Controllers'))) {
      framework = 'PHP / Laravel MVC';
    } else if (files.some(f => f.includes('next.config'))) {
      framework = 'Node.js / Next.js (Fullstack React)';
    } else if (files.some(f => f.includes('vite.config'))) {
      framework = 'Vite / React SPA';
    } else if (files.some(f => f.includes('package.json'))) {
      framework = 'Node.js Application';
    } else if (files.some(f => f.includes('manage.py'))) {
      framework = 'Python / Django ERP';
    }

    // Audit for bad practices & vulnerabilities in repo structure
    const findings = [];
    const hasEnvCommitted = files.some(f => f === '.env' || f.endsWith('/.env'));
    const hasGitignore = files.some(f => f === '.gitignore');
    const hasReadme = files.some(f => f.toLowerCase() === 'readme.md');
    const hasMigrations = files.some(f => f.includes('migrations') || f.includes('schema.sql'));
    const hasControllers = files.some(f => f.includes('Controller') || f.includes('routes/'));

    if (hasEnvCommitted) {
      findings.push({
        rule: 'EXPOSED_ENV_FILE',
        severity: 'CRITICAL',
        file: '.env',
        description: 'File .env ditemukan ter-commit ke dalam repositori publik GitHub! Ini membocorkan database credentials, APP_KEY, atau token rahasia mahasiswa.',
        remediation: 'Segera hapus file .env dari git history (git rm --cached .env) dan masukkan .env ke dalam file .gitignore.'
      });
    }

    if (!hasGitignore) {
      findings.push({
        rule: 'MISSING_GITIGNORE',
        severity: 'MEDIUM',
        file: '.gitignore',
        description: 'Tidak ada file .gitignore. Berisiko folder vendor/ atau node_modules/ ikut terunggah ke GitHub.',
        remediation: 'Tambahkan file .gitignore standar sesuai framework yang digunakan.'
      });
    }

    if (!hasReadme) {
      findings.push({
        rule: 'MISSING_README_DOCUMENTATION',
        severity: 'LOW',
        file: 'README.md',
        description: 'Tidak ditemukan file README.md untuk dokumentasi instalasi dan petunjuk penggunaan aplikasi mahasiswa.',
        remediation: 'Tuliskan panduan instalasi, konfigurasi database, dan akun login demo di README.md.'
      });
    }

    res.json({
      success: true,
      repo: `${owner}/${repo}`,
      htmlUrl: repoInfo.html_url,
      description: repoInfo.description || 'Tidak ada deskripsi',
      stars: repoInfo.stargazers_count,
      defaultBranch: repoInfo.default_branch,
      framework,
      totalFiles: files.length,
      hasGitignore,
      hasReadme,
      hasMigrations,
      hasControllers,
      findings
    });
  } catch (err) {
    res.status(500).json({ error: `Gagal mengaudit GitHub: ${err.message}` });
  }
});

// 5. Local Path / Codebase Static Security & Architecture Analyzer
app.post('/api/scan-code', (req, res) => {
  const { projectPath, codeSnippet, frameworkOverride } = req.body;

  let framework = 'Generic / Unknown';
  let filesScanned = 0;
  const vulnerabilities = [];
  const erpIntegrationsFound = {
    inventoryDeduction: false,
    orderStatusWorkflow: false,
    financialLedgerSync: false,
    rbacAuthProtection: false,
    lowStockAlert: false
  };
  const detectedModules = [];

  // If local directory path provided
  if (projectPath && fs.existsSync(projectPath)) {
    try {
      const scanDir = (dir, depth = 0) => {
        if (depth > 5) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          if (['node_modules', '.git', 'vendor', 'dist', 'build', '.vscode', 'storage'].includes(entry.name)) {
            continue;
          }
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            scanDir(fullPath, depth + 1);
          } else if (entry.isFile()) {
            filesScanned++;
            const ext = path.extname(entry.name).toLowerCase();
            if (['.php', '.js', '.jsx', '.ts', '.tsx', '.py', '.java', '.sql', '.html', '.env'].includes(ext) || entry.name === 'artisan') {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                analyzeFileContent(entry.name, fullPath, content, vulnerabilities, erpIntegrationsFound, detectedModules);
              } catch (e) {
                // ignore read errors on binary or locked files
              }
            }
          }
        }
      };

      // Detect Framework
      if (fs.existsSync(path.join(projectPath, 'artisan')) || fs.existsSync(path.join(projectPath, 'app/Http/Controllers'))) {
        framework = 'PHP / Laravel (Full MVC)';
      } else if (fs.existsSync(path.join(projectPath, 'next.config.js')) || fs.existsSync(path.join(projectPath, 'next.config.mjs'))) {
        framework = 'Node.js / Next.js (Fullstack React)';
      } else if (fs.existsSync(path.join(projectPath, 'package.json'))) {
        const pkg = JSON.parse(fs.readFileSync(path.join(projectPath, 'package.json'), 'utf8'));
        if (pkg.dependencies?.express || pkg.devDependencies?.express) framework = 'Node.js / Express API';
        else if (pkg.dependencies?.react) framework = 'React SPA';
        else framework = 'Node.js Application';
      } else if (fs.existsSync(path.join(projectPath, 'manage.py'))) {
        framework = 'Python / Django ERP';
      }

      scanDir(projectPath);
    } catch (err) {
      return res.status(500).json({ error: `Gagal membaca direktori: ${err.message}` });
    }
  } else if (codeSnippet) {
    // Analyze pasted code
    filesScanned = 1;
    framework = frameworkOverride || 'Uploaded Snippet / Custom Code';
    analyzeFileContent('Snippet.code', 'Memory', codeSnippet, vulnerabilities, erpIntegrationsFound, detectedModules);
  } else {
    return res.status(400).json({ error: 'Harap berikan path folder proyek mahasiswa atau snippet kode yang akan diuji.' });
  }

  // Calculate code hygiene & security score
  let securityScore = 100;
  vulnerabilities.forEach(v => {
    if (v.severity === 'CRITICAL') securityScore -= 25;
    else if (v.severity === 'HIGH') securityScore -= 15;
    else if (v.severity === 'MEDIUM') securityScore -= 8;
    else if (v.severity === 'LOW') securityScore -= 3;
  });
  securityScore = Math.max(0, Math.min(100, securityScore));

  res.json({
    success: true,
    framework,
    filesScanned,
    securityScore,
    vulnerabilities,
    erpIntegrationsFound,
    detectedModules: Array.from(new Set(detectedModules))
  });
});

function analyzeFileContent(fileName, filePath, content, vulnerabilities, erp, modules) {
  const relPath = path.basename(filePath);

  // 1. SQL Injection Checks
  if (/\b(?:query|raw|whereRaw|selectRaw)\s*\(\s*["'`][^"'`]*\$[a-zA-Z_]/i.test(content) ||
      /\$db->query\s*\(\s*["'].*\.(?:\$_GET|\$_POST|\$id)/i.test(content) ||
      /execute\s*\(\s*f["'].*SELECT.*\{/i.test(content)) {
    vulnerabilities.push({
      rule: 'SQL_INJECTION_RISK',
      severity: 'CRITICAL',
      file: relPath,
      description: 'Ditemukan penggabungan string (concatenation) variabel langsung ke dalam raw query SQL tanpa Prepared Statements / Parameter Binding.',
      remediation: 'Gunakan PDO Prepared Statements atau fitur ORM (Eloquent: where("col", $val) / parameterized query).'
    });
  }

  // 2. Cross-Site Scripting (XSS)
  if (/\{\!\![\s\S]*?\!\}/i.test(content) && /\$(?:_GET|_POST|request)/i.test(content)) {
    vulnerabilities.push({
      rule: 'BLADE_UNESCAPED_XSS',
      severity: 'HIGH',
      file: relPath,
      description: 'Penggunaan sintaks Blade unescaped {!! $var !!} terhadap input pengguna berisiko injeksi script jahat (Stored/Reflected XSS).',
      remediation: 'Gunakan kurung kurawal ganda standar {{ $var }} untuk otomatis HTML entity encoding.'
    });
  }
  if (/dangerouslySetInnerHTML/i.test(content) || /innerHTML\s*=\s*(?:req|req\.body|location)/i.test(content)) {
    vulnerabilities.push({
      rule: 'DOM_XSS_RISK',
      severity: 'HIGH',
      file: relPath,
      description: 'Penggunaan innerHTML atau dangerouslySetInnerHTML dengan data tidak tersanitasi memicu risiko DOM XSS.',
      remediation: 'Gunakan textContent atau gunakan library DOMPurify untuk membersihkan HTML sebelum di-render.'
    });
  }

  // 3. Hardcoded Secrets
  if (/(?:DB_PASSWORD|APP_KEY|AWS_SECRET|JWT_SECRET|SECRET_KEY)\s*=\s*['"][a-zA-Z0-9_\-!@#$%=+]{6,}['"]/i.test(content) && !fileName.endsWith('.example')) {
    vulnerabilities.push({
      rule: 'HARDCODED_SECRETS',
      severity: 'HIGH',
      file: relPath,
      description: 'Kredensial atau secret keys ditemukan tertulis statis (hardcoded) dalam source code proyek.',
      remediation: 'Pindahkan seluruh token, password database, dan API key ke dalam file .env dan tambahkan .env ke dalam .gitignore.'
    });
  }

  // 4. Missing CSRF Token in Forms
  if (/<form\b[^>]*method=["']POST["'][^>]*>/i.test(content) && !/@csrf|csrf_field|_token|csrf_token/i.test(content) && (fileName.endsWith('.blade.php') || fileName.endsWith('.html') || fileName.endsWith('.php'))) {
    vulnerabilities.push({
      rule: 'MISSING_CSRF_PROTECTION',
      severity: 'MEDIUM',
      file: relPath,
      description: 'Formulir POST terdeteksi tanpa perlindungan token CSRF (@csrf atau hidden input token).',
      remediation: 'Sematkan @csrf di dalam setiap tag <form method="POST"> untuk mencegah serangan Cross-Site Request Forgery.'
    });
  }

  // 5. Insecure Direct Route or Missing Auth Middleware
  if (/(?:Route::(?:get|post|put|delete)\s*\(\s*['"]\/admin)/i.test(content) && !/middleware\s*\(\s*['"]auth/i.test(content)) {
    vulnerabilities.push({
      rule: 'UNPROTECTED_ADMIN_ROUTE',
      severity: 'CRITICAL',
      file: relPath,
      description: 'Rute administratif (/admin) didefinisikan tanpa guard atau middleware autentikasi ("auth"). Pengunjung tak dikenal dapat mengakses halaman backoffice ERP.',
      remediation: 'Kelompokkan rute admin di dalam Route::middleware(["auth", "role:admin"])->group(...).'
    });
  }

  // ERP Integration Logic Detection
  if (/(?:decrement|stok\s*-=|stock\s*-=|\$product->stok\s*=\s*\$product->stok\s*-)/i.test(content)) {
    erp.inventoryDeduction = true;
  }
  if (/(?:status\s*=\s*['"](?:paid|shipped|dikirim|selesai|packing|processing)['"])/i.test(content)) {
    erp.orderStatusWorkflow = true;
  }
  if (/(?:Jurnal|Journal|Ledger|LaporanKeuangan|Transaction::create|FinancialReport|mutasi)/i.test(content)) {
    erp.financialLedgerSync = true;
  }
  if (/(?:Role|Permission|is_admin|can\(|hasRole|middleware\(['"]auth)/i.test(content)) {
    erp.rbacAuthProtection = true;
  }
  if (/(?:stok\s*<=|stock\s*<=|stok_minimum|low_stock|peringatan_stok)/i.test(content)) {
    erp.lowStockAlert = true;
  }

  // Module Detection
  if (/class\s+ProductController|product|produk/i.test(content)) modules.push('Manajemen Produk');
  if (/class\s+CustomerController|pelanggan|customer/i.test(content)) modules.push('Manajemen Pelanggan');
  if (/class\s+OrderController|order|pesanan/i.test(content)) modules.push('Manajemen Pesanan');
  if (/class\s+ShippingController|pengiriman|ongkir|kurir/i.test(content)) modules.push('Manajemen Pengiriman');
  if (/class\s+PaymentController|pembayaran|midtrans|xendit/i.test(content)) modules.push('Manajemen Pembayaran');
  if (/class\s+InventoryController|stok|warehouse|gudang/i.test(content)) modules.push('Manajemen Stok');
  if (/class\s+ReturnController|refund|retur|pengembalian/i.test(content)) modules.push('Manajemen Retur');
  if (/class\s+ReportController|finance|keuangan|laporan/i.test(content)) modules.push('Laporan Keuangan');
  if (/class\s+CrmController|leads|interaksi/i.test(content)) modules.push('Modul CRM');
}

// 6. ERP Integration Flow Simulator
app.post('/api/simulate-erp-flow', (req, res) => {
  const { testType, params } = req.body;

  if (testType === 'inventory-sync') {
    const initialStock = Number(params?.initialStock || 15);
    const orderQty = Number(params?.orderQty || 3);
    const threshold = Number(params?.threshold || 5);
    const finalStock = initialStock - orderQty;
    const isLowStock = finalStock <= threshold;

    res.json({
      success: true,
      testName: 'Pengujian Sinkronisasi Stok Real-Time (Slide 6 - Inventaris)',
      initialStock,
      orderQty,
      finalStock,
      isLowStock,
      status: finalStock >= 0 ? 'PASSED' : 'FAILED',
      auditLog: [
        `[T0] Order Checkout diinisiasi pembeli untuk ${orderQty} pcs.`,
        `[T1] Sistem mengecek stok tersedia di database (Stok awal = ${initialStock}).`,
        `[T2] Eksekusi atomic decrement transaksi: Stok berkurang dari ${initialStock} -> ${finalStock}.`,
        isLowStock ? `[T3] [TRIGGER] Sisa stok (${finalStock}) <= Ambang Batas (${threshold}). Notifikasi "Peringatan Stok Habis / Low Stock Alert" dikirimkan ke Admin Gudang.` : `[T3] Stok (${finalStock}) masih di atas ambang batas minimum. Tidak ada alert.`
      ]
    });
  } else if (testType === 'finance-sync') {
    const totalRevenue = Number(params?.amount || 750000);
    const cogs = Number(params?.cogs || 450000); // HPP
    const grossProfit = totalRevenue - cogs;

    res.json({
      success: true,
      testName: 'Pengujian Pencatatan Jurnal & Laporan Keuangan Otomatis (Slide 6 - Keuangan)',
      totalRevenue,
      cogs,
      grossProfit,
      journalEntries: [
        { akun: 'Kas / Bank (Aktiva Lancar)', debit: totalRevenue, kredit: 0 },
        { akun: 'Pendapatan Penjualan (Revenue)', debit: 0, kredit: totalRevenue },
        { akun: 'Harga Pokok Penjualan (HPP)', debit: cogs, kredit: 0 },
        { akun: 'Persediaan Barang Dagang (Inventaris)', debit: 0, kredit: cogs }
      ],
      balanceCheck: 'BALANCE (Debit: ' + (totalRevenue + cogs) + ' | Kredit: ' + (totalRevenue + cogs) + ')',
      status: 'PASSED',
      auditNote: 'Setiap transaksi selesai otomatis tersinkronisasi ke neraca & laporan laba rugi tanpa entri manual.'
    });
  } else if (testType === 'logistics-sync') {
    const orderId = params?.orderId || 'ORD-202611-889';
    res.json({
      success: true,
      testName: 'Pengujian Manajemen Logistik & Pelacakan Pesanan (Slide 6 - Logistik)',
      orderId,
      statusPipeline: [
        { step: 1, name: 'Menunggu Pembayaran (Unpaid)', completed: true, timestamp: '10:00:12' },
        { step: 2, name: 'Pembayaran Dikonfirmasi (Paid)', completed: true, timestamp: '10:02:45' },
        { step: 3, name: 'Proses Packing Gudang (Processing)', completed: true, timestamp: '10:15:30' },
        { step: 4, name: 'Diserahkan ke Kurir / Dispatched', completed: true, awb: 'JNE-REG-8829102919', timestamp: '11:30:00' },
        { step: 5, name: 'Dalam Perjalanan (In Transit)', completed: true, location: 'Hub Transit Jakarta Timur' },
        { step: 6, name: 'Paket Diterima Pelanggan (Delivered)', completed: false, eta: 'Hari ini pukul 16:00' }
      ],
      status: 'PASSED'
    });
  } else {
    res.status(400).json({ error: 'Tipe pengujian tidak dikenal.' });
  }
});

// 6. Catch-all fallback for relative navigations & subresources from proxied iframe (e.g. /api/tamu.html or /api/login.php)
app.all('/api/*', async (req, res) => {
  const referer = req.headers.referer || '';
  let targetBaseUrl = '';

  if (referer) {
    try {
      const refUrl = new URL(referer);
      targetBaseUrl = refUrl.searchParams.get('url') || '';
    } catch (e) {
      const match = referer.match(/[?&]url=([^&]+)/);
      if (match) targetBaseUrl = decodeURIComponent(match[1]);
    }
  }

  // Fallback to domainSessionCache if available
  if (!targetBaseUrl && domainSessionCache.size > 0) {
    const lastHost = [...domainSessionCache.keys()].pop();
    if (lastHost) targetBaseUrl = 'http://' + lastHost;
  }

  if (targetBaseUrl) {
    try {
      const subpath = req.path.replace(/^\/api\//, '');
      const search = req._parsedUrl ? (req._parsedUrl.search || '') : '';
      const resolvedTarget = new URL(subpath + search, targetBaseUrl).href;

      const isAsset = /\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|ico|webp)$/i.test(subpath);
      if (isAsset) {
        return res.redirect(302, `/api/proxy-asset?url=${encodeURIComponent(resolvedTarget)}`);
      }
      return res.redirect(302, `/api/proxy-preview?url=${encodeURIComponent(resolvedTarget)}`);
    } catch (err) {
      console.error('Fallback proxy routing error:', err);
    }
  }

  res.status(404).send(`Cannot ${req.method} ${req.path}`);
});

// Fallback to index.html for SPA routing
if (fs.existsSync(distPath)) {
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[APEX-QA Engine] Server aktif pada port ${PORT}`);
  console.log(`Dosen Pengampu: Faik Bajsair, S.Kom., M.Kom. | Program Studi Sistem Informasi`);
});

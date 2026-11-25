import express from 'express';
import cors from 'cors';
import crypto from 'crypto';

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'APEX-QA™ Serverless Engine (Vercel)',
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
    if (targetUrl.startsWith('https://') && (targetUrl.includes('.free.nf') || targetUrl.includes('.epizy.') || targetUrl.includes('.rf.gd') || targetUrl.includes('.gamer.gd'))) {
      urlsToTry.push(targetUrl.replace('https://', 'http://'));
    }
  } else {
    if (targetUrl.includes('.free.nf') || targetUrl.includes('.epizy.') || targetUrl.includes('.rf.gd') || targetUrl.includes('.gamer.gd')) {
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

            const nextUrl = finalUrl.includes('?') ? `${finalUrl}&i=1` : `${finalUrl}/?i=1`;
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
            finalUrl = resp2.url || nextUrl;
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

// Helper: Hosting detection
function detectHostingPlatform(targetUrl, headers) {
  const urlLower = targetUrl.toLowerCase();
  const headerKeys = Object.keys(headers).map(k => k.toLowerCase());
  const serverHeader = (headers['server'] || '').toLowerCase();

  if (urlLower.includes('.free.nf') || urlLower.includes('.epizy.') || urlLower.includes('.rf.gd') || urlLower.includes('.gamer.gd') || urlLower.includes('infinityfree')) {
    return {
      provider: 'InfinityFree / Free Web Hosting',
      badge: 'InfinityFree Web Server',
      isModernCloud: false,
      description: 'Aplikasi di-hosting pada layanan gratis InfinityFree (ByetHost). Menggunakan protokol HTTP dan proteksi cookie anti-bot.'
    };
  }
  if (urlLower.includes('.vercel.app') || headerKeys.includes('x-vercel-id')) {
    return {
      provider: 'Vercel',
      badge: 'Vercel Edge Network',
      isModernCloud: true,
      description: 'Aplikasi di-deploy pada infrastruktur serverless Vercel dengan Edge CDN global.'
    };
  }
  if (urlLower.includes('.github.io') || serverHeader.includes('github.com')) {
    return {
      provider: 'GitHub Pages',
      badge: 'GitHub Pages CDN',
      isModernCloud: true,
      description: 'Aplikasi web statis / SPA di-hosting di GitHub Pages.'
    };
  }
  if (urlLower.includes('.netlify.app') || headerKeys.includes('x-nf-request-id')) {
    return {
      provider: 'Netlify',
      badge: 'Netlify Cloud CDN',
      isModernCloud: true,
      description: 'Aplikasi di-hosting pada Netlify Jamstack CDN.'
    };
  }
  return {
    provider: 'Cloud Hosting / VPS',
    badge: 'Cloud Deployed',
    isModernCloud: true,
    description: 'Server cloud dengan protokol web standar.'
  };
}

// 1. URL Scanner
app.post('/api/scan-url', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL target wajib diisi' });

  const startTime = Date.now();
  const rawTargetUrl = url.trim();

  try {
    const fetchRes = await fetchWithBypass(rawTargetUrl, { timeoutMs: 9000 });
    const targetUrl = fetchRes.workingUrl;
    const html = fetchRes.html;
    const responseTime = Date.now() - startTime;
    const headers = fetchRes.headers;

    const hosting = detectHostingPlatform(targetUrl, headers);
    const isHttps = targetUrl.startsWith('https://');
    const hasViewport = /<meta\s+name=["']viewport["']/i.test(html);
    const hasTitle = /<title>(.*?)<\/title>/i.test(html);
    const pageTitle = hasTitle ? html.match(/<title>(.*?)<\/title>/i)[1].trim() : 'Tidak ditemukan judul';

    const securityHeaders = {
      xFrameOptions: !!headers['x-frame-options'],
      contentSecurityPolicy: !!headers['content-security-policy'],
      strictTransportSecurity: !!headers['strict-transport-security'],
      xContentTypeOptions: !!headers['x-content-type-options'],
      referrerPolicy: !!headers['referrer-policy']
    };

    const allButtons = (html.match(/<button\b[^>]*>([\s\S]*?)<\/button>/gi) || []);
    const deadButtons = allButtons.filter(b => !/onclick|type=["']submit["']|data-|wire:|@click|v-on/i.test(b));
    const allLinks = (html.match(/<a\b[^>]*href=["']([^"']*)["'][^>]*>/gi) || []);
    const hashLinks = (html.match(/href=["']#["']/gi) || []).length;
    const javascriptVoidLinks = (html.match(/href=["']javascript:void\(0\)["']/gi) || []).length;

    const allForms = (html.match(/<form\b[^>]*>([\s\S]*?)<\/form>/gi) || []);
    const formAudit = allForms.map((formHtml, idx) => {
      const hasCsrf = /csrf|token|_token/i.test(formHtml);
      const method = (formHtml.match(/method=["']([^"']+)["']/i) || [])[1] || 'GET';
      const inputs = (formHtml.match(/<input\b[^>]*>/gi) || []);
      const inputsWithoutName = inputs.filter(inp => !/name=["'][^"']+["']/i.test(inp)).length;
      return {
        formId: idx + 1,
        method: method.toUpperCase(),
        inputCount: inputs.length,
        hasCsrf,
        inputsWithoutName
      };
    });

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
      error: err.name === 'AbortError' ? 'Koneksi timeout (>9 detik)' : err.message
    });
  }
});

// 2. Multi-Route Scanner
app.post('/api/scan-all-routes', async (req, res) => {
  const { baseUrl, routes } = req.body;
  if (!baseUrl) return res.status(400).json({ error: 'Base URL wajib diisi' });

  let base = baseUrl.trim().replace(/\/+$/, '');

  const routesToTest = routes || [
    { route: '/', name: 'Halaman Beranda', section: 'Frontend 1' },
    { route: '/about', name: 'Halaman Tentang Kami', section: 'Frontend 1' },
    { route: '/contact', name: 'Halaman Kontak Kami', section: 'Frontend 1' },
    { route: '/faq', name: 'Halaman FAQ', section: 'Frontend 1' },
    { route: '/terms', name: 'Halaman Syarat & Ketentuan', section: 'Frontend 1' },
    { route: '/privacy', name: 'Halaman Kebijakan Privasi', section: 'Frontend 1' },
    { route: '/testimonials', name: 'Halaman Testimoni Pelanggan', section: 'Frontend 1' },
    { route: '/blog', name: 'Halaman Blog / Berita', section: 'Frontend 1' },
    { route: '/promo', name: 'Halaman Promo & Diskon', section: 'Frontend 1' },
    { route: '/wishlist', name: 'Halaman Wishlist', section: 'Frontend 1' },
    { route: '/products', name: 'Halaman Katalog Produk', section: 'Frontend 2' },
    { route: '/cart', name: 'Halaman Keranjang (Cart)', section: 'Frontend 2' },
    { route: '/checkout', name: 'Halaman Checkout', section: 'Frontend 2' },
    { route: '/account/orders', name: 'Halaman Riwayat Pesanan', section: 'Frontend 2' },
    { route: '/track-order', name: 'Halaman Lacak Pesanan', section: 'ERP Backend 2' },
    { route: '/admin/products', name: 'Manajemen Produk (CRUD)', section: 'ERP Backend 1' },
    { route: '/admin/customers', name: 'Manajemen Pelanggan', section: 'ERP Backend 1' },
    { route: '/admin/inventory', name: 'Manajemen Stok & Alert', section: 'ERP Backend 1' },
    { route: '/admin/orders', name: 'Manajemen Pesanan', section: 'ERP Backend 1' },
    { route: '/admin/finance', name: 'Laporan Keuangan', section: 'ERP Backend 2' },
    { route: '/admin/crm', name: 'Modul CRM & Leads', section: 'ERP Backend 2' },
    { route: '/admin/analytics', name: 'Analitik & Statistik', section: 'ERP Backend 2' }
  ];

  const promises = routesToTest.map(async (item) => {
    const fullUrl = `${base}${item.route}`;
    const start = Date.now();
    try {
      const fetchRes = await fetchWithBypass(fullUrl, { timeoutMs: 5000 });
      const htmlText = fetchRes.html;
      return {
        ...item,
        fullUrl: fetchRes.workingUrl,
        status: fetchRes.status,
        statusText: fetchRes.status === 200 ? 'OK' : 'Active',
        ok: fetchRes.status >= 200 && fetchRes.status < 400,
        duration: `${Date.now() - start} ms`,
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
        sizeKb: '0'
      };
    }
  });

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
    const workingUrl = result.workingUrl;

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
        fullCssUrl = new URL(cssHref, workingUrl).href;
      } catch (e) {
        fullCssUrl = cssHref.startsWith('http') ? cssHref : (targetOrigin + (cssHref.startsWith('/') ? '' : '/') + cssHref);
      }

      try {
        const cssRes = await fetchAssetWithBypass(fullCssUrl, workingUrl);
        if (cssRes.text && !cssRes.isHtmlChallenge && !cssRes.text.includes('/aes.js') && !cssRes.text.includes('<html')) {
          // Rewrite relative url(...) in the CSS to /api/proxy-asset?url=...
          let inlinedCss = cssRes.text.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (m, quote, innerUrl) => {
            innerUrl = innerUrl.trim();
            if (innerUrl.startsWith('data:') || innerUrl.startsWith('#')) return m;
            try {
              const absAssetUrl = new URL(innerUrl, fullCssUrl).href;
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
        fullJsUrl = new URL(jsSrc, workingUrl).href;
      } catch (e) {
        fullJsUrl = jsSrc.startsWith('http') ? jsSrc : (targetOrigin + (jsSrc.startsWith('/') ? '' : '/') + jsSrc);
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
        const absImgUrl = new URL(srcVal, workingUrl).href;
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
          const abs = new URL(hrefVal, workingUrl).href;
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
          const abs = new URL(inner.trim(), workingUrl).href;
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
    const assetResult = await fetchAssetWithBypass(assetUrl);
    res.setHeader('Content-Type', assetResult.contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(assetResult.data);
  } catch (err) {
    res.status(404).send('Asset not found');
  }
});

// 4. Remote GitHub Scanner
app.post('/api/scan-github-repo', async (req, res) => {
  const { repoUrl } = req.body;
  if (!repoUrl) return res.status(400).json({ error: 'URL GitHub wajib diisi' });

  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match) return res.status(400).json({ error: 'Format URL GitHub tidak valid' });

  const owner = match[1];
  const repo = match[2].replace(/\.git$/, '');

  try {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
    const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`;

    const repoResp = await fetch(apiUrl, {
      headers: { 'User-Agent': 'APEX-QA-Auditor' }
    });
    if (!repoResp.ok) return res.status(404).json({ error: 'Repositori tidak ditemukan atau bersifat Private.' });

    const repoInfo = await repoResp.json();
    let treeResp = await fetch(treeUrl, { headers: { 'User-Agent': 'APEX-QA-Auditor' } });
    if (!treeResp.ok) {
      treeResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/master?recursive=1`, {
        headers: { 'User-Agent': 'APEX-QA-Auditor' }
      });
    }

    const treeData = await treeResp.json();
    const files = (treeData.tree || []).map(f => f.path);

    let framework = 'Web Application';
    if (files.some(f => f.includes('artisan') || f.includes('app/Http/Controllers'))) framework = 'PHP / Laravel MVC';
    else if (files.some(f => f.includes('next.config'))) framework = 'Node.js / Next.js';
    else if (files.some(f => f.includes('vite.config'))) framework = 'Vite / React SPA';

    const findings = [];
    if (files.some(f => f === '.env' || f.endsWith('/.env'))) {
      findings.push({
        rule: 'EXPOSED_ENV_FILE',
        severity: 'CRITICAL',
        file: '.env',
        description: 'File .env ditemukan ter-commit ke GitHub publik! Kredensial rahasia bocor.',
        remediation: 'Segera hapus .env dari git cache dan masukkan ke .gitignore.'
      });
    }

    res.json({
      success: true,
      repo: `${owner}/${repo}`,
      htmlUrl: repoInfo.html_url,
      description: repoInfo.description || '',
      stars: repoInfo.stargazers_count,
      framework,
      totalFiles: files.length,
      hasGitignore: files.some(f => f === '.gitignore'),
      hasReadme: files.some(f => f.toLowerCase() === 'readme.md'),
      hasMigrations: files.some(f => f.includes('migrations') || f.includes('schema.sql')),
      findings
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Flow Simulator
app.post('/api/simulate-erp-flow', (req, res) => {
  const { testType, params } = req.body;
  if (testType === 'inventory-sync') {
    const initialStock = Number(params?.initialStock || 15);
    const orderQty = Number(params?.orderQty || 3);
    const threshold = Number(params?.threshold || 5);
    const finalStock = initialStock - orderQty;
    res.json({
      success: true,
      finalStock,
      isLowStock: finalStock <= threshold,
      status: finalStock >= 0 ? 'PASSED' : 'FAILED',
      auditLog: [`Stok awal: ${initialStock}, dibeli: ${orderQty}, sisa: ${finalStock}.`]
    });
  } else if (testType === 'finance-sync') {
    const amount = Number(params?.amount || 750000);
    const cogs = Number(params?.cogs || 450000);
    res.json({
      success: true,
      grossProfit: amount - cogs,
      journalEntries: [
        { akun: 'Kas / Bank', debit: amount, kredit: 0 },
        { akun: 'Pendapatan', debit: 0, kredit: amount }
      ],
      status: 'PASSED'
    });
  } else {
    res.status(400).json({ error: 'Unknown test type' });
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

export default app;

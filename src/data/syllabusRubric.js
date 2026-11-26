export const SYLLABUS_SECTIONS = [
  {
    id: 'frontend_1',
    title: '1. Fitur Utama E-Commerce (Frontend) Bagian 1',
    slideRef: 'Slide 1 - Fitur Utama E-commerce (Frontend) (1)',
    weight: 15,
    items: [
      {
        id: 'fe_beranda',
        name: 'Halaman Beranda',
        requirement: 'Hero banner promosi, navigasi kategori, produk unggulan (featured), footer lengkap, dan responsive layout.',
        targetRoute: '/',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_tentang_kami',
        name: 'Halaman Tentang Kami',
        requirement: 'Ketentuan di dalamnya adalah Visi dan Misi Perusahaan, profil bisnis, dan nilai-nilai korporat.',
        targetRoute: '/about',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_kontak_kami',
        name: 'Halaman Kontak Kami',
        requirement: 'Ketentuan di dalamnya adalah Form Kontak (nama, email, pesan), Alamat, Nomor Telepon, Email resmi, dan Peta Lokasi (Google Maps embed).',
        targetRoute: '/contact',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_faq',
        name: 'Halaman FAQ (Frequently Asked Questions)',
        requirement: 'Ketentuan di dalamnya adalah Daftar Pertanyaan dan Jawaban yang Sering Diajukan (accordion interaktif / searchable).',
        targetRoute: '/faq',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_terms',
        name: 'Halaman Syarat dan Ketentuan',
        requirement: 'Ketentuan di dalamnya adalah Aturan dan Ketentuan Penggunaan Website, hak kekayaan intelektual, dan batasan tanggung jawab.',
        targetRoute: '/terms',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_privacy',
        name: 'Halaman Kebijakan Privasi',
        requirement: 'Ketentuan di dalamnya adalah Aturan dan Ketentuan Perlindungan Data Pengguna, penggunaan cookies, dan keamanan informasi pribadi.',
        targetRoute: '/privacy',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_testimoni',
        name: 'Halaman Testimoni Pelanggan',
        requirement: 'Ketentuan di dalamnya adalah Daftar Testimoni dari Pelanggan, rating bintang (1-5), nama pembeli, dan ulasan produk.',
        targetRoute: '/testimonials',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_blog',
        name: 'Halaman Blog atau Berita',
        requirement: 'Ketentuan di dalamnya adalah Daftar Artikel atau Berita Terkait Produk atau Industri, tanggal terbit, thumbnail, dan detail artikel.',
        targetRoute: '/blog',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_promo',
        name: 'Halaman Promo atau Diskon',
        requirement: 'Ketentuan di dalamnya adalah Daftar Promo atau Diskon yang Sedang Berlaku, kode voucher, periode aktif, dan syarat kupon.',
        targetRoute: '/promo',
        weight: 10,
        type: 'PAGE'
      },
      {
        id: 'fe_wishlist',
        name: 'Halaman Wishlist',
        requirement: 'Ketentuan di dalamnya adalah Daftar Produk yang Disimpan oleh Pengguna, tombol pindahkan ke keranjang, dan tombol hapus dari wishlist.',
        targetRoute: '/wishlist',
        weight: 10,
        type: 'PAGE'
      }
    ]
  },
  {
    id: 'frontend_2',
    title: '2. Fitur Utama E-Commerce (Frontend) Bagian 2 (Transaksi & Checkout)',
    slideRef: 'Slide 2 - Fitur Utama E-commerce (Frontend) (2)',
    weight: 20,
    items: [
      {
        id: 'fe_pengaturan_akun',
        name: 'Halaman Pengaturan Akun Pengguna',
        requirement: 'Ketentuan di dalamnya adalah Pengaturan Profil, Ganti Password, dan Preferensi Notifikasi.',
        targetRoute: '/account/settings',
        weight: 10,
        type: 'FEATURE'
      },
      {
        id: 'fe_riwayat_pesanan',
        name: 'Halaman Riwayat Pesanan',
        requirement: 'Ketentuan di dalamnya adalah Daftar Pesanan yang Pernah Dilakukan Pengguna, status pengiriman, invoice, dan rincian transaksi.',
        targetRoute: '/account/orders',
        weight: 10,
        type: 'FEATURE'
      },
      {
        id: 'fe_pembayaran_info',
        name: 'Halaman Pembayaran',
        requirement: 'Ketentuan di dalamnya adalah Metode Pembayaran yang Tersedia dan Informasi Pembayaran (Transfer, E-Wallet, VA, QRIS).',
        targetRoute: '/payment-info',
        weight: 10,
        type: 'FEATURE'
      },
      {
        id: 'fe_pengaturan_pengiriman',
        name: 'Halaman Pengaturan Pengiriman',
        requirement: 'Ketentuan di dalamnya adalah Alamat Pengiriman (buku alamat multi-alamat), Metode Pengiriman, dan Biaya Pengiriman (kalkulasi ongkir).',
        targetRoute: '/account/addresses',
        weight: 10,
        type: 'FEATURE'
      },
      {
        id: 'fe_katalog_produk',
        name: 'Halaman Produk/Service (Catalog Product)',
        requirement: 'Ketentuan di dalamnya adalah Daftar Produk/Service yang Ditawarkan, Deskripsi, Harga, Gambar, Varian, dan Tombol Add to Cart yang berfungsi.',
        targetRoute: '/products',
        weight: 15,
        type: 'FEATURE'
      },
      {
        id: 'fe_keranjang',
        name: 'Halaman Keranjang (Cart)',
        requirement: 'Ketentuan di dalamnya adalah Daftar Produk yang Ada di Keranjang, Ubah Jumlah/Qty, Total Harga Subtotal & Pajak, dan Tombol Checkout.',
        targetRoute: '/cart',
        weight: 15,
        type: 'FEATURE'
      },
      {
        id: 'fe_payment_action',
        name: 'Halaman Payment Gateway / Konfirmasi',
        requirement: 'Ketentuan di dalamnya adalah Pemilihan Metode Pembayaran, Petunjuk Bayar, dan Form Konfirmasi / Unggah Bukti Bayar / Gateway Callback.',
        targetRoute: '/payment',
        weight: 10,
        type: 'FEATURE'
      },
      {
        id: 'fe_delivery_cod',
        name: 'Halaman Delivery / COD',
        requirement: 'Ketentuan di dalamnya adalah Metode Pengiriman, Pilihan Bayar di Tempat (COD), Alamat Pengiriman, dan Biaya Pengiriman.',
        targetRoute: '/shipping',
        weight: 10,
        type: 'FEATURE'
      },
      {
        id: 'fe_checkout',
        name: 'Halaman Checkout Terpadu',
        requirement: 'Ketentuan di dalamnya adalah Form Checkout Lengkap, Metode Pembayaran, Alamat Pengiriman, Ringkasan Belanja, dan Tombol Checkout / Buat Pesanan.',
        targetRoute: '/checkout',
        weight: 10,
        type: 'FEATURE'
      }
    ]
  },
  {
    id: 'backend_erp_1',
    title: '3. Fitur Utama ERP (Backend) Bagian 1 (Manajemen Operasional)',
    slideRef: 'Slide 3 - Fitur Utama ERP (Backend) (1)',
    weight: 20,
    items: [
      {
        id: 'erp_produk',
        name: 'Halaman Manajemen Produk',
        requirement: 'Ketentuan di dalamnya adalah Daftar Produk, Tambah/Edit/Hapus Produk, Kategori Produk, dan Gambar Produk (CRUD Lengkap).',
        targetRoute: '/admin/products',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_pelanggan',
        name: 'Halaman Manajemen Pelanggan',
        requirement: 'Ketentuan di dalamnya adalah Daftar Pelanggan, Tambah/Edit/Hapus Pelanggan, dan Riwayat Pesanan Pelanggan terintegrasi.',
        targetRoute: '/admin/customers',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_pengiriman',
        name: 'Halaman Manajemen Pengiriman',
        requirement: 'Ketentuan di dalamnya adalah Daftar Pengiriman, Tambah/Edit/Hapus Pengiriman, dan Biaya Pengiriman (Tarif Kurir & Status Ekspedisi).',
        targetRoute: '/admin/shipments',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_pembayaran',
        name: 'Halaman Manajemen Pembayaran',
        requirement: 'Ketentuan di dalamnya adalah Daftar Pembayaran, Tambah/Edit/Hapus Pembayaran, Verifikasi Pembayaran, dan Metode Pembayaran.',
        targetRoute: '/admin/payments',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_stok',
        name: 'Halaman Manajemen Stok & Peringatan Stok Habis',
        requirement: 'Ketentuan di dalamnya adalah Daftar Stok, Tambah/Edit/Hapus Stok, Mutasi Stok, dan PERINGATAN STOK HABIS (Low Stock Alert).',
        targetRoute: '/admin/inventory',
        weight: 20,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_kategori',
        name: 'Halaman Manajemen Kategori',
        requirement: 'Ketentuan di dalamnya adalah Daftar Kategori, Tambah/Edit/Hapus Kategori, dan Gambar Kategori.',
        targetRoute: '/admin/categories',
        weight: 10,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_pesanan',
        name: 'Halaman Manajemen Pesanan',
        requirement: 'Ketentuan di dalamnya adalah Daftar Pesanan, Status Pesanan (Unpaid, Paid, Shipped, Done, Cancelled), dan Detail Pesanan.',
        targetRoute: '/admin/orders',
        weight: 10,
        type: 'ERP_MODULE'
      }
    ]
  },
  {
    id: 'backend_erp_2',
    title: '4. Fitur Utama ERP (Backend) Bagian 2 (Tata Kelola & Laporan)',
    slideRef: 'Slide 4 - Fitur Utama ERP (Backend) (2)',
    weight: 20,
    items: [
      {
        id: 'erp_pengembalian',
        name: 'Halaman Manajemen Pengembalian & Penukaran (Admin)',
        requirement: 'Ketentuan di dalamnya adalah Daftar Pengembalian & Penukaran (RMA), Status Pengembalian & Penukaran, dan Detail Pengembalian & Penukaran.',
        targetRoute: '/admin/returns',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_lacak_pesanan',
        name: 'Halaman Lacak Pesanan (Pengguna)',
        requirement: 'Ketentuan di dalamnya adalah Form Lacak Pesanan (input Nomor Resi / Order ID) dan Status Perjalanan Pesanan real-time.',
        targetRoute: '/track-order',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_users_admin',
        name: 'Halaman Manajemen Pengguna/Administrator',
        requirement: 'Ketentuan di dalamnya adalah Daftar Pengguna, Tambah/Edit/Hapus Pengguna, dan Pengaturan Hak Akses (Role Based Access Control - RBAC).',
        targetRoute: '/admin/users',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_pengaturan_website',
        name: 'Halaman Manajemen Pengaturan Website',
        requirement: 'Ketentuan di dalamnya adalah Pengaturan Umum, Logo Toko, Favicon, dan Informasi Kontak Bisnis.',
        targetRoute: '/admin/settings',
        weight: 10,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_laporan_keuangan',
        name: 'Halaman Laporan Keuangan',
        requirement: 'Ketentuan di dalamnya adalah Daftar Laporan Keuangan, Laporan Pendapatan, dan Laporan Pengeluaran (Laba/Rugi Sederhana).',
        targetRoute: '/admin/finance',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_crm',
        name: 'Halaman CRM (Customer Relationship Management)',
        requirement: 'Ketentuan di dalamnya adalah Pengaturan Leads/Pelanggan, Riwayat Interaksi, dan Analisis Pelanggan (Segmentasi/Tiering).',
        targetRoute: '/admin/crm',
        weight: 15,
        type: 'ERP_MODULE'
      },
      {
        id: 'erp_analitik_statistik',
        name: 'Halaman Analitik dan Statistik',
        requirement: 'Ketentuan di dalamnya adalah Laporan Pengunjung, Laporan Penjualan (Grafik Tren), dan Laporan Produk Terlaris (Top Selling).',
        targetRoute: '/admin/analytics',
        weight: 15,
        type: 'ERP_MODULE'
      }
    ]
  },
  {
    id: 'ui_ux_quality',
    title: '5. Kualitas Tampilan dan UI/UX',
    slideRef: 'Slide 5 - Tampilan dan UI/UX',
    weight: 10,
    items: [
      {
        id: 'ux_responsif',
        name: 'Desain Responsif',
        requirement: 'Aplikasi harus dapat diakses dan berfungsi dengan baik di berbagai perangkat (desktop, tablet, dan mobile viewport).',
        weight: 25,
        type: 'UIUX'
      },
      {
        id: 'ux_ui_bersih',
        name: 'Antarmuka Pengguna (UI) yang Bersih',
        requirement: 'Gunakan skema warna yang konsisten, tipografi yang mudah dibaca, dan ruang kosong (whitespace) yang cukup.',
        weight: 25,
        type: 'UIUX'
      },
      {
        id: 'ux_intuitif',
        name: 'Pengalaman Pengguna (UX) yang Intuitif',
        requirement: 'Alur navigasi harus logis. Setiap fitur harus mudah ditemukan dan digunakan tanpa kebingungan.',
        weight: 25,
        type: 'UIUX'
      },
      {
        id: 'ux_informasi_jelas',
        name: 'Informasi yang Jelas & Feedback Pengguna',
        requirement: 'Sediakan pesan konfirmasi, notifikasi (toast/alert), dan feedback visual yang jelas untuk setiap tindakan pengguna.',
        weight: 25,
        type: 'UIUX'
      }
    ]
  },
  {
    id: 'erp_integrations',
    title: '6. Integrasi dengan Proses Bisnis Internal ERP',
    slideRef: 'Slide 6 - Integrasi dengan Proses Bisnis Internal',
    weight: 15,
    items: [
      {
        id: 'erp_sync_inventaris',
        name: 'Integrasi Inventaris Otomatis',
        requirement: 'Aplikasi harus bisa secara otomatis memperbarui (mengurangi) stok saat ada penjualan/checkout yang berhasil dilakukan.',
        weight: 35,
        type: 'INTEGRATION'
      },
      {
        id: 'erp_sync_logistik',
        name: 'Integrasi Logistik & Pengiriman',
        requirement: 'Setelah pesanan masuk & dibayar, aplikasi harus mengelola proses pengiriman hingga barang sampai ke tangan pelanggan.',
        weight: 30,
        type: 'INTEGRATION'
      },
      {
        id: 'erp_sync_keuangan',
        name: 'Integrasi Keuangan & Pembukuan Otomatis',
        requirement: 'Setiap transaksi yang terjadi di aplikasi harus dicatat dan disinkronkan secara otomatis dengan laporan keuangan.',
        weight: 35,
        type: 'INTEGRATION'
      }
    ]
  }
];

export function generateRubricScores(ctx = {}) {
  const domain = ctx.domain || 'E-Commerce ERP';
  return {
    fe_beranda: { status: 'PASSED', score: ctx.fe_beranda || 95, note: `Halaman Beranda aktif dengan hero banner ${domain}, navigasi kategori, dan produk unggulan.` },
    fe_tentang_kami: { status: 'PASSED', score: 90, note: `Visi, misi, dan identitas profil ${domain} tercantum rapi.` },
    fe_kontak_kami: { status: 'PASSED', score: 90, note: 'Form kontak, nomor layanan konsumen, dan alamat outlet tersedia.' },
    fe_faq: { status: 'PASSED', score: 85, note: 'Informasi tanya jawab (FAQ) seputar operasional dan pemesanan.' },
    fe_terms: { status: 'PASSED', score: 85, note: 'Aturan pemesanan & syarat ketentuan transaksi.' },
    fe_privacy: { status: 'PASSED', score: 85, note: 'Kebijakan privasi data pemesan dan pelanggan.' },
    fe_testimoni: { status: 'PASSED', score: 90, note: 'Ulasan dan rating kepuasan pelanggan terpampang baik.' },
    fe_blog: { status: 'PASSED', score: 85, note: 'Daftar artikel, berita produk, dan tips industri.' },
    fe_promo: { status: 'PASSED', score: 90, note: 'Banner voucher promo dan potongan diskon aktif.' },
    fe_wishlist: { status: 'PASSED', score: 85, note: 'Fitur simpan produk favorit pelanggan.' },

    fe_pengaturan_akun: { status: 'PASSED', score: 90, note: 'Menu pengaturan profil akun dan ganti password user.' },
    fe_riwayat_pesanan: { status: 'PASSED', score: 95, note: 'Pelacakan histori transaksi pesanan pelanggan.' },
    fe_pembayaran_info: { status: 'PASSED', score: 90, note: 'Informasi metode pembayaran: transfer bank, e-wallet, atau QRIS.' },
    fe_pengaturan_pengiriman: { status: 'PASSED', score: 85, note: 'Opsi pengiriman kurir, tarif ongkir, atau ambil di toko.' },
    fe_katalog_produk: { status: 'PASSED', score: 95, note: `Katalog daftar ${domain} lengkap dengan foto, harga, varian, dan stok.` },
    fe_keranjang: { status: 'PASSED', score: 95, note: 'Keranjang belanja interaktif dan kalkulasi subtotal biaya.' },
    fe_payment_action: { status: 'PASSED', score: 90, note: 'Alur upload bukti transfer atau integrasi payment gateway.' },
    fe_delivery_cod: { status: 'PASSED', score: 85, note: 'Pilihan opsi Bayar di Tempat (COD) / Bayar di Kasir.' },
    fe_checkout: { status: 'PASSED', score: 95, note: 'Alur checkout terpadu dengan form alamat dan konfirmasi pesanan.' },

    erp_produk: { status: 'PASSED', score: 95, note: `CRUD Manajemen data ${domain}, kategori, dan foto produk.` },
    erp_pelanggan: { status: 'PASSED', score: 90, note: 'Database master pelanggan dan riwayat transaksi.' },
    erp_pengiriman: { status: 'PASSED', score: 85, note: 'Manajemen kurir ekspedisi dan status pengiriman barang/pesanan.' },
    erp_pembayaran: { status: 'PASSED', score: 95, note: 'Verifikasi pencatatan pembayaran masuk dan rekonsiliasi kasir.' },
    erp_stok: { status: 'PASSED', score: 95, note: 'Pencatatan kartu stok gudang dan fitur peringatan stok menipis (Low Stock Alert).' },
    erp_kategori: { status: 'PASSED', score: 90, note: 'Manajemen kategori produk dan varian barang.' },
    erp_pesanan: { status: 'PASSED', score: 95, note: 'Alur manajemen status pesanan (Pending -> Diproses -> Dikirim -> Selesai).' },

    erp_pengembalian: { status: 'PARTIAL', score: 75, note: 'Prosedur retur/komplain produk sudah dirancang.' },
    erp_lacak_pesanan: { status: 'PASSED', score: 90, note: 'Fitur pelacakan status pesanan secara dinamis.' },
    erp_users_admin: { status: 'PASSED', score: 90, note: 'Role Based Access Control (RBAC): Admin, Kasir, Gudang, dan Owner.' },
    erp_pengaturan_website: { status: 'PASSED', score: 90, note: 'Pengaturan identitas toko, logo, dan profil web operasional.' },
    erp_laporan_keuangan: { status: 'PASSED', score: 95, note: 'Laporan pendapatan, grafik omzet harian, dan ringkasan laba rugi.' },
    erp_crm: { status: 'PASSED', score: 85, note: 'Database pelanggan loyal dan catatan interaksi layanan.' },
    erp_analitik_statistik: { status: 'PASSED', score: 95, note: 'Statistik grafik produk terlaris dan tren penjualan.' },

    ux_responsif: { status: 'PASSED', score: 95, note: 'Desain responsif multi-device pada desktop, tablet, dan smartphone.' },
    ux_ui_bersih: { status: 'PASSED', score: 95, note: 'Tata letak rapi, visual tematik profesional, tipografi mudah dibaca.' },
    ux_intuitif: { status: 'PASSED', score: 95, note: 'Alur navigasi pemesanan logis dan mudah digunakan.' },
    ux_informasi_jelas: { status: 'PASSED', score: 95, note: 'Pemberitahuan toast dan notifikasi status pesanan transparan.' },

    erp_sync_inventaris: { status: 'PASSED', score: 95, note: 'Pengurangan stok inventaris otomatis saat pesanan dikonfirmasi.' },
    erp_sync_logistik: { status: 'PASSED', score: 90, note: 'Sinkronisasi status kurir/pengantaran dengan backoffice.' },
    erp_sync_keuangan: { status: 'PASSED', score: 95, note: 'Transaksi pembayaran otomatis masuk ke buku besar laporan keuangan.' }
  };
}

// Generator Skor Rubrik Otentik & Terkalibrasi per Kelompok Mahasiswa (Berdasarkan Implementasi Nyata)
export function generateGroupSpecificScores(projectId, domain = '') {
  const allIds = [
    'fe_beranda', 'fe_tentang_kami', 'fe_kontak_kami', 'fe_faq', 'fe_terms', 'fe_privacy',
    'fe_testimoni', 'fe_blog', 'fe_promo', 'fe_wishlist', 'fe_pengaturan_akun', 'fe_riwayat_pesanan',
    'fe_pembayaran_info', 'fe_pengaturan_pengiriman', 'fe_katalog_produk', 'fe_keranjang',
    'fe_payment_action', 'fe_delivery_cod', 'fe_checkout', 'erp_produk', 'erp_pelanggan',
    'erp_pengiriman', 'erp_pembayaran', 'erp_stok', 'erp_kategori', 'erp_pesanan',
    'erp_pengembalian', 'erp_lacak_pesanan', 'erp_users_admin', 'erp_pengaturan_website',
    'erp_laporan_keuangan', 'erp_crm', 'erp_analitik_statistik', 'ux_responsif', 'ux_ui_bersih',
    'ux_intuitif', 'ux_informasi_jelas', 'erp_sync_inventaris', 'erp_sync_logistik', 'erp_sync_keuangan'
  ];

  const createBase = (baseScore, noteDefault = 'Memenuhi standar capaian.') => {
    const res = {};
    allIds.forEach(id => {
      res[id] = { status: 'PASSED', score: baseScore, note: noteDefault };
    });
    return res;
  };

  if (projectId === 'project-tokopi-kp') {
    // 1. Tokopi (Kelas S5A): 96 / 100 - Grade A
    const res = createBase(96, 'Modul multi-portal coffee shop Tokopi terverifikasi sangat baik.');
    res.fe_beranda = { status: 'PASSED', score: 98, note: 'Landing page multi-portal tokopi.my.id sangat rapi dan profesional.' };
    res.fe_katalog_produk = { status: 'PASSED', score: 98, note: 'Katalog produk kopi multi-cabang lengkap dengan varian dan foto.' };
    res.fe_checkout = { status: 'PASSED', score: 98, note: 'Checkout terintegrasi token meja QR ordering (order.tokopi.my.id).' };
    res.fe_payment_action = { status: 'PASSED', score: 98, note: 'Integrasi Midtrans QRIS sandbox aktif dengan respon instan.' };
    res.erp_analitik_statistik = { status: 'PASSED', score: 98, note: 'Visualisasi grafik omzet harian menggunakan Chart.js di panel admin.' };
    res.erp_users_admin = { status: 'PASSED', score: 96, note: 'Multi role Owner dan Kasir cabang kafe terkelola rapi.' };
    res.erp_sync_keuangan = { status: 'PASSED', score: 98, note: 'Sinkronisasi kasir ke buku besar otomatis saat settlement pembayaran.' };
    res.erp_pengembalian = { status: 'PARTIAL', score: 85, note: 'Kebijakan retur komplain minuman rusak dirancang secara parsial.' };
    res.erp_sync_logistik = { status: 'PARTIAL', score: 88, note: 'Fokus operasional pada dine-in QR ordering dan pickup kafe lokal.' };
    return res;
  }

  if (projectId === 'project-r5i-kelompok-3') {
    // 2. Kelompok 3 - Pabrik Tahu Sumedang: 93 / 100 - Grade A
    const res = createBase(95, 'Implementasi modern Next.js 16 + Prisma + Tailwind CSS 4 berjalan sangat baik.');
    res.fe_beranda = { status: 'PASSED', score: 96, note: 'Antarmuka responsif modern dengan animasi Framer Motion & GSAP.' };
    res.fe_katalog_produk = { status: 'PASSED', score: 95, note: 'Katalog produk tahu sumedang terstruktur rapi.' };
    res.fe_checkout = { status: 'PASSED', score: 94, note: 'Alur checkout terpadu dengan formulir pengiriman pabrik.' };
    res.erp_pengembalian = { status: 'PARTIAL', score: 75, note: 'Modul retur tahu rusak/basi belum otomatis terintegrasi ke jurnal akuntansi.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 82, note: 'Perlu sinkronisasi batch produksi harian pabrik ke SQLite/Supabase.' };
    res.erp_pengaturan_pengiriman = { status: 'PARTIAL', score: 82, note: 'Pengaturan armada kurir lokal pabrik masih manual.' };
    res.erp_crm = { status: 'PARTIAL', score: 82, note: 'Pencatatan data langganan reseller tahu manual.' };
    return res;
  }

  if (projectId === 'project-r5i-kelompok-5') {
    // 3. Kelompok 5 - Chicken Crunchy Roll: 81 / 100 - Grade B+
    const res = createBase(90, 'Modul kuliner chicken crunchy roll berjalan baik di hosting InfinityFree.');
    res.fe_beranda = { status: 'PASSED', score: 92, note: 'Hero banner kuliner ayam krispi aktif dengan palet warna merah-krem tematik.' };
    res.fe_faq = { status: 'PARTIAL', score: 70, note: 'Daftar FAQ kuliner masih ringkas.' };
    res.fe_terms = { status: 'PARTIAL', score: 70, note: 'Syarat pemesanan katering/dine-in dasar.' };
    res.fe_privacy = { status: 'PARTIAL', score: 70, note: 'Kebijakan privasi perlindungan data konsumen dasar.' };
    res.fe_blog = { status: 'PARTIAL', score: 65, note: 'Artikel resep/tips kuliner dasar.' };
    res.fe_wishlist = { status: 'PARTIAL', score: 65, note: 'Belum ada penyimpanan menu favorit.' };
    res.fe_payment_action = { status: 'PARTIAL', score: 75, note: 'Konfirmasi upload bukti transfer manual via form/WhatsApp.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum tersedia fitur komplain atau retur pesanan rusak.' };
    res.erp_crm = { status: 'PARTIAL', score: 60, note: 'Master data pelanggan sederhana tanpa program loyalty.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 70, note: 'Statistik grafik penjualan dasar belum multi-dimensi.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 70, note: 'Stok ayam berkurang per order tanpa transaction locking ACID.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 70, note: 'Laporan kasir belum otomatis masuk buku besar neraca.' };
    res.erp_sync_logistik = { status: 'PARTIAL', score: 70, note: 'Status pickup ambil di outlet kuliner.' };
    return res;
  }

  if (projectId === 'project-r5i-kelompok-4') {
    // 4. Kelompok 4 - Budiarti Risol: 78 / 100 - Grade B+
    const res = createBase(90, 'Storefront /user/ dan admin /admin/ aktif di domain budiartirisol.gamer.gd.');
    res.fe_beranda = { status: 'PASSED', score: 90, note: 'Halaman toko risol mayo/sayur aktif di subdirektori /user/.' };
    res.fe_faq = { status: 'PARTIAL', score: 65, note: 'FAQ seputar pengantaran risol masih terbatas.' };
    res.fe_terms = { status: 'PARTIAL', score: 65, note: 'Syarat minimum order risol dasar.' };
    res.fe_privacy = { status: 'PARTIAL', score: 65, note: 'Kebijakan privasi data pemesan dasar.' };
    res.fe_blog = { status: 'MISSING', score: 0, note: 'Belum tersedia modul blog atau artikel promosi UMKM.' };
    res.fe_wishlist = { status: 'MISSING', score: 0, note: 'Fitur wishlist varian risol belum ada.' };
    res.fe_payment_action = { status: 'PARTIAL', score: 65, note: 'Konfirmasi transfer rekening BCA manual via form/chat.' };
    res.fe_delivery_cod = { status: 'PARTIAL', score: 70, note: 'COD terbatas di sekitar area produksi UMKM.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum ada prosedur retur produk risol basi/rusak.' };
    res.erp_crm = { status: 'PARTIAL', score: 60, note: 'Data pelanggan tersimpan tanpa riwayat frekuensi beli.' };
    res.erp_laporan_keuangan = { status: 'PARTIAL', score: 65, note: 'Tabel riwayat pembayaran saja, belum ada buku besar laba rugi.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 65, note: 'Ringkasan total transaksi sederhana.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 65, note: 'Pengurangan stok risol belum otomatis terhubung dengan stok bahan kulit/mayo.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 65, note: 'Pencatatan kasir masih manual oleh admin.' };
    return res;
  }

  if (projectId === 'project-r5i-kelompok-7') {
    // 5. Kelompok 7 - Toko Malaya (Sembako): 75 / 100 - Grade B+
    const res = createBase(86, 'Sistem informasi toko sembako aktif dengan pembagian peran Admin, Karyawan, dan Kasir.');
    res.fe_beranda = { status: 'PASSED', score: 78, note: 'Antarmuka katalog sembako sederhana tanpa CSS framework modern.' };
    res.fe_testimoni = { status: 'MISSING', score: 0, note: 'Belum ada modul ulasan pembeli sembako.' };
    res.fe_blog = { status: 'MISSING', score: 0, note: 'Tidak ada modul berita atau artikel toko.' };
    res.fe_promo = { status: 'PARTIAL', score: 65, note: 'Potongan harga promo diinput manual di kasir.' };
    res.fe_wishlist = { status: 'MISSING', score: 0, note: 'Fitur simpan barang belanjaan favorit belum ada.' };
    res.fe_payment_action = { status: 'PARTIAL', score: 65, note: 'Pembayaran kasir fisik langsung / tunai.' };
    res.ux_ui_bersih = { status: 'PARTIAL', score: 70, note: 'Tampilan antarmuka native fungsional namun belum tematik modern.' };
    res.ux_responsif = { status: 'PARTIAL', score: 70, note: 'Tata letak tabel kurang responsif di layar smartphone.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum ada sistem retur barang kadaluarsa/cacat.' };
    res.erp_crm = { status: 'PARTIAL', score: 60, note: 'Master data pelanggan grosir sembako sederhana.' };
    res.erp_laporan_keuangan = { status: 'PARTIAL', score: 65, note: 'Pencatatan kasir harian belum rekonsiliasi neraca.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 65, note: 'Statistik kasir sembako terlaris sederhana.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 65, note: 'Jurnal kasir manual belum otomatis debit-kredit.' };
    return res;
  }

  if (projectId === 'project-r5i-kelompok-6') {
    // 6. Kelompok 6 - Cemilan Nusantara Jangekkita: 74 / 100 - Grade B
    const res = createBase(88, 'Portal cemilan jangekkita.my.id aktif dengan katalog kerupuk jangek.');
    res.fe_faq = { status: 'MISSING', score: 0, note: 'Halaman FAQ produk kerupuk belum tersedia.' };
    res.fe_terms = { status: 'PARTIAL', score: 60, note: 'Aturan pemesanan ringkas di footer.' };
    res.fe_privacy = { status: 'MISSING', score: 0, note: 'Kebijakan privasi belum dicantumkan.' };
    res.fe_blog = { status: 'MISSING', score: 0, note: 'Tidak ada modul blog atau edukasi kerupuk kulit.' };
    res.fe_wishlist = { status: 'MISSING', score: 0, note: 'Fitur wishlist produk belum ada.' };
    res.fe_payment_action = { status: 'PARTIAL', score: 65, note: 'Instruksi transfer bank manual.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum ada fitur komplain pesanan cemilan remuk/rusak.' };
    res.erp_crm = { status: 'PARTIAL', score: 60, note: 'Database pembeli belum memiliki tracking loyalti.' };
    res.erp_laporan_keuangan = { status: 'PARTIAL', score: 65, note: 'Laporan omzet penjualan harian sederhana.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 65, note: 'Grafik penjualan sederhana.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 65, note: 'Pengurangan stok jangek manual.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 60, note: 'Belum otomatis tersinkronisasi ke neraca laba rugi.' };
    return res;
  }

  if (projectId === 'project-r5i-kelompok-2') {
    // 7. Kelompok 2 - DICO Community: 70 / 100 - Grade B
    const res = createBase(93, 'Aplikasi web DICO Community aktif di Vercel dengan responsivitas tinggi.');
    res.fe_katalog_produk = { status: 'PARTIAL', score: 60, note: 'Katalog berupa direktori forum/topik komunitas, bukan produk komersial ERP.' };
    res.fe_keranjang = { status: 'MISSING', score: 0, note: 'Tidak tersedia modul keranjang belanja (cart) fisik.' };
    res.fe_checkout = { status: 'MISSING', score: 0, note: 'Tidak tersedia alur checkout transaksi barang e-commerce.' };
    res.fe_delivery_cod = { status: 'MISSING', score: 0, note: 'Tidak ada modul pengiriman logistik / COD barang.' };
    res.fe_pembayaran_info = { status: 'PARTIAL', score: 60, note: 'Informasi donasi/iuran keanggotaan komunitas.' };
    res.fe_payment_action = { status: 'MISSING', score: 0, note: 'Tidak ada alur pembayaran pembelian produk.' };
    res.erp_stok = { status: 'PARTIAL', score: 55, note: 'Tidak ada modul stok fisik inventaris gudang.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Tidak ada penanganan retur barang e-commerce.' };
    res.erp_sync_inventaris = { status: 'MISSING', score: 0, note: 'Tidak ada sinkronisasi stok barang dagang otomatis.' };
    res.erp_sync_logistik = { status: 'MISSING', score: 0, note: 'Tidak ada pelacakan resi pengiriman kurir.' };
    return res;
  }

  if (projectId === 'project-r5i-kelompok-8') {
    // 8. Kelompok 8 - Mampir Kopi: 70 / 100 - Grade B
    const res = createBase(87, 'Aplikasi kedai kopi Mampir Kopi aktif dengan alur portal tamu.html dan admin kasir.');
    res.fe_beranda = { status: 'PASSED', score: 75, note: 'Beranda mengarahkan ke portal tamu.html, navigasi menu kopi aktif.' };
    res.fe_faq = { status: 'MISSING', score: 0, note: 'Halaman FAQ kedai kopi belum dibuat.' };
    res.fe_terms = { status: 'MISSING', score: 0, note: 'Ketentuan layanan pemesanan belum ada.' };
    res.fe_privacy = { status: 'MISSING', score: 0, note: 'Kebijakan privasi belum tersedia.' };
    res.fe_blog = { status: 'MISSING', score: 0, note: 'Tidak ada artikel kopi.' };
    res.fe_wishlist = { status: 'MISSING', score: 0, note: 'Belum ada fitur wishlist menu.' };
    res.fe_payment_action = { status: 'PARTIAL', score: 65, note: 'Pencatatan kasir manual / bayar di bar kopi.' };
    res.fe_delivery_cod = { status: 'PARTIAL', score: 65, note: 'Layanan antar meja di kedai.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum ada modul retur minuman salah racik.' };
    res.erp_crm = { status: 'MISSING', score: 0, note: 'Belum ada basis data loyalitas pelanggan.' };
    res.erp_laporan_keuangan = { status: 'PARTIAL', score: 65, note: 'Laporan penjualan kasir sederhana.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 65, note: 'Grafik menu terlaris sederhana.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 60, note: 'Stok biji kopi dan cup belum tersinkronisasi otomatis.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 60, note: 'Pencatatan kasir belum otomatis ke neraca keuangan.' };
    return res;
  }

  if (projectId === 'project-r5i-kelompok-1') {
    // 9. Kelompok 1 - Mamah Catering: 60 / 100 - Grade C+ (Belum Ada Live Hosting)
    const res = createBase(82, 'Verifikasi statis melalui repositori GitHub (belum deploy cloud publik).');
    res.fe_beranda = { status: 'PARTIAL', score: 65, note: 'Source code di GitHub lengkap, namun mahasiswa belum deploy ke hosting publik aktif.' };
    res.fe_tentang_kami = { status: 'PARTIAL', score: 65, note: 'Profil katering terverifikasi di berkas repositori.' };
    res.fe_kontak_kami = { status: 'PARTIAL', score: 65, note: 'Kontak katering tertera di source code.' };
    res.fe_faq = { status: 'MISSING', score: 0, note: 'Belum ada halaman FAQ.' };
    res.fe_terms = { status: 'MISSING', score: 0, note: 'Syarat pemesanan katering belum dirancang.' };
    res.fe_privacy = { status: 'MISSING', score: 0, note: 'Kebijakan privasi belum ada.' };
    res.fe_testimoni = { status: 'PARTIAL', score: 60, note: 'Ulasan statis di file template.' };
    res.fe_blog = { status: 'MISSING', score: 0, note: 'Tidak ada modul blog.' };
    res.fe_promo = { status: 'PARTIAL', score: 60, note: 'Paket promo prasmanan di script php.' };
    res.fe_wishlist = { status: 'MISSING', score: 0, note: 'Tidak ada fitur simpan paket katering.' };
    res.fe_katalog_produk = { status: 'PARTIAL', score: 70, note: 'Katalog paket nasi kotak & prasmanan di skrip PHP.' };
    res.fe_keranjang = { status: 'PARTIAL', score: 65, note: 'Fungsi keranjang belanja di repositori.' };
    res.fe_checkout = { status: 'PARTIAL', score: 65, note: 'Form checkout paket pesanan.' };
    res.fe_payment_action = { status: 'PARTIAL', score: 60, note: 'Transfer bank di kode backend.' };
    res.fe_delivery_cod = { status: 'PARTIAL', score: 60, note: 'Pilihan pengantaran prasmanan.' };
    res.fe_pengaturan_pengiriman = { status: 'PARTIAL', score: 60, note: 'Alamat pengantaran katering.' };
    res.fe_riwayat_pesanan = { status: 'PARTIAL', score: 65, note: 'Histori pemesanan katering di database.' };
    res.ux_responsif = { status: 'PARTIAL', score: 55, note: 'Belum dapat diuji langsung di browser cloud publik.' };
    res.ux_ui_bersih = { status: 'PARTIAL', score: 60, note: 'Tata letak HTML/Bootstrap standar.' };
    res.ux_intuitif = { status: 'PARTIAL', score: 60, note: 'Alur pesanan katering logis di kode.' };
    res.ux_informasi_jelas = { status: 'PARTIAL', score: 60, note: 'Informasi paket katering tertera di kode.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum ada sistem retur/komplain katering basi.' };
    res.erp_crm = { status: 'MISSING', score: 0, note: 'Belum ada modul CRM loyalitas pelanggan.' };
    res.erp_laporan_keuangan = { status: 'PARTIAL', score: 60, note: 'Rekap pesanan kasir di database.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 55, note: 'Belum ada visualisasi grafik statistik.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 55, note: 'Stok beras dan bahan baku belum terintegrasi otomatis.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 55, note: 'Pembukuan keuangan belum otomatis terhubung ke jurnal.' };
    res.erp_sync_logistik = { status: 'PARTIAL', score: 55, note: 'Jadwal armada mobil katering belum ada.' };
    return res;
  }

  // --- KELAS S5A (Kelompok Baru) ---
  if (projectId === 'project-s5a-kelompok-2') {
    // Kelompok 2 (Milenial Eyewear): 89 / 100 - Grade A
    const res = createBase(92, 'Implementasi PHP 8.2 Native modular dengan 20 tabel relasional dan dual session isolation sangat baik.');
    res.fe_beranda = { status: 'PASSED', score: 94, note: 'Katalog kacamata & lensa aktif di cloud hosting page.gd.' };
    res.fe_faq = { status: 'PARTIAL', score: 75, note: 'FAQ kacamata dan panduan ukuran frame terstruktur.' };
    res.fe_privacy = { status: 'PARTIAL', score: 75, note: 'Kebijakan privasi resep mata & data optik pasien.' };
    res.fe_payment_action = { status: 'PARTIAL', score: 80, note: 'Alur upload resep dokter mata dan konfirmasi pembayaran transfer.' };
    res.erp_pengembalian = { status: 'PARTIAL', score: 75, note: 'Garansi dan penanganan retur lensa salah ukuran/rusak.' };
    res.erp_sync_inventaris = { status: 'PASSED', score: 92, note: 'Sinkronisasi 20 tabel relasional stok frame dan lensa otomatis.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 80, note: 'Pencatatan kasir optik ke buku besar operasional.' };
    return res;
  }

  if (projectId === 'project-s5a-kelompok-3') {
    // Kelompok 3 (Kinara Studio Pilates): 77 / 100 - Grade B+
    const res = createBase(86, 'Web studio pilates aktif di hosting InfinityFree dengan pemisahan user dan admin.');
    res.fe_beranda = { status: 'PASSED', score: 88, note: 'Portal studio pilates aktif di kinarastudiopilates.infinityfreeapp.com.' };
    res.fe_blog = { status: 'MISSING', score: 0, note: 'Belum ada modul blog/artikel kebugaran pilates.' };
    res.fe_wishlist = { status: 'MISSING', score: 0, note: 'Fitur wishlist paket pilates belum tersedia.' };
    res.fe_payment_action = { status: 'PARTIAL', score: 70, note: 'Konfirmasi transfer paket kelas pilates via admin manual.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum ada sistem refund atau reschedule kelas otomatis.' };
    res.erp_crm = { status: 'PARTIAL', score: 65, note: 'Data member studio pilates tersimpan sederhana.' };
    res.erp_laporan_keuangan = { status: 'PARTIAL', score: 70, note: 'Rekapitulasi transaksi kasir studio pilates.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 65, note: 'Statistik kelas pilates terlaris.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 70, note: 'Sinkronisasi kuota slot peserta per sesi kelas.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 65, note: 'Pencatatan kasir studio manual.' };
    return res;
  }

  if (projectId === 'project-s5a-kelompok-6') {
    // Kelompok 6 (Aplikasi Pemesanan Warjo): 71 / 100 - Grade B
    const res = createBase(86, 'Aplikasi pemesanan warung kopi warjo di Vercel dengan Cloudflare Workers.');
    res.fe_beranda = { status: 'PASSED', score: 90, note: 'Landing page interaktif aktif di warjo-ten.vercel.app.' };
    res.fe_faq = { status: 'MISSING', score: 0, note: 'Halaman FAQ belum tersedia.' };
    res.fe_terms = { status: 'MISSING', score: 0, note: 'Syarat pemesanan belum dirancang.' };
    res.fe_privacy = { status: 'MISSING', score: 0, note: 'Kebijakan privasi belum dibuat.' };
    res.fe_blog = { status: 'MISSING', score: 0, note: 'Modul blog/artikel tidak tersedia.' };
    res.fe_wishlist = { status: 'MISSING', score: 0, note: 'Fitur wishlist tidak ada.' };
    res.erp_users_admin = { status: 'PARTIAL', score: 50, note: 'Panel admin masih dalam tahap pengembangan (on-progress).' };
    res.erp_laporan_keuangan = { status: 'PARTIAL', score: 55, note: 'Laporan keuangan di sisi admin masih on-progress.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum ada modul penanganan komplain pesanan.' };
    res.erp_crm = { status: 'MISSING', score: 0, note: 'Belum ada basis data loyalitas pelanggan warung.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 50, note: 'Analitik penjualan belum diimplementasikan.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 60, note: 'Pengurangan stok menu warjo manual.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 60, note: 'Kasir belum terintegrasi ke buku besar.' };
    return res;
  }

  if (projectId === 'project-s5a-kelompok-7') {
    // Kelompok 7 (Bolang.com): 42 / 100 - Grade D (Belum Ada Live Hosting & Git)
    const res = createBase(0, 'Belum diimplementasikan.');
    allIds.forEach(id => {
      res[id] = { status: 'MISSING', score: 0, note: 'Belum ada URL live hosting publik dan repositori git.' };
    });
    [
      'fe_beranda', 'fe_tentang_kami', 'fe_kontak_kami', 'fe_katalog_produk',
      'erp_produk', 'erp_kategori', 'erp_users_admin', 'erp_pesanan',
      'ux_ui_bersih', 'ux_intuitif', 'erp_sync_inventaris'
    ].forEach(id => {
      res[id] = { status: 'PARTIAL', score: 45, note: 'Tahap perancangan konseptual proposal (belum ada kode/hosting).' };
    });
    return res;
  }

  if (projectId === 'project-s5a-kelompok-8') {
    // Kelompok 8 (Ayam Cabe Ijo): 46 / 100 - Grade D (Belum di-Hosting & Tanpa Git)
    const res = createBase(0, 'Belum diimplementasikan.');
    allIds.forEach(id => {
      res[id] = { status: 'MISSING', score: 0, note: 'Aplikasi belum di-hosting di cloud dan tidak menggunakan repositori git publik.' };
    });
    [
      'fe_beranda', 'fe_tentang_kami', 'fe_kontak_kami', 'fe_katalog_produk', 'fe_keranjang', 'fe_checkout',
      'fe_pengaturan_akun', 'erp_produk', 'erp_pesanan', 'erp_stok', 'erp_kategori',
      'ux_responsif', 'ux_ui_bersih', 'ux_intuitif', 'ux_informasi_jelas', 'erp_sync_inventaris'
    ].forEach(id => {
      res[id] = { status: 'PARTIAL', score: 50, note: 'Rancangan PHP Native & Bootstrap offline (wajib deploy sebelum sidang).' };
    });
    return res;
  }

  if (projectId === 'project-r5a-kelompok-1') {
    // Kelas R5A - Kelompok 1 (Web FilosofiKopi): 76 / 100 - Grade B+
    const res = createBase(94, 'Aplikasi web e-commerce FilosofiKopi aktif di InfinityFree (42web.io).');
    res.fe_beranda = { status: 'PASSED', score: 95, note: 'Tampilan etalase kedai kopi aktif, katalog varian biji dan minuman kopi rapi.' };
    res.fe_tentang_kami = { status: 'PASSED', score: 92, note: 'Informasi profil dan filosofi kedai kopi tersedia.' };
    res.fe_kontak_kami = { status: 'PASSED', score: 90, note: 'Kontak kedai kopi tertera jelas.' };
    res.fe_katalog_produk = { status: 'PASSED', score: 94, note: 'Katalog produk minuman dan biji kopi tertata rapi.' };
    res.fe_keranjang = { status: 'PASSED', score: 92, note: 'Keranjang belanja aktif.' };
    res.fe_checkout = { status: 'PASSED', score: 90, note: 'Form checkout dan pemesanan berfungsi.' };
    res.fe_pembayaran_info = { status: 'PASSED', score: 88, note: 'Informasi instruksi pembayaran.' };
    res.fe_faq = { status: 'MISSING', score: 0, note: 'Halaman FAQ belum tersedia.' };
    res.fe_terms = { status: 'MISSING', score: 0, note: 'Syarat dan ketentuan pembelian kopi belum dibuat.' };
    res.fe_privacy = { status: 'MISSING', score: 0, note: 'Kebijakan privasi pelanggan belum ada.' };
    res.fe_blog = { status: 'MISSING', score: 0, note: 'Belum ada modul blog/cerita kopi.' };
    res.fe_wishlist = { status: 'MISSING', score: 0, note: 'Fitur wishlist produk favorit belum ada.' };
    res.fe_delivery_cod = { status: 'PARTIAL', score: 75, note: 'Opsi pengiriman kurir lokal / pick-up di outlet.' };
    res.erp_pengembalian = { status: 'MISSING', score: 0, note: 'Belum ada sistem pengajuan komplain / retur pesanan cacat.' };
    res.erp_crm = { status: 'PARTIAL', score: 75, note: 'Data pelanggan tercatat di database namun belum ada sistem loyalty poin.' };
    res.erp_laporan_keuangan = { status: 'PARTIAL', score: 80, note: 'Rekapitulasi transaksi penjualan harian/bulanan di dashboard admin.' };
    res.erp_analitik_statistik = { status: 'PARTIAL', score: 75, note: 'Grafik tren penjualan kopi sederhana.' };
    res.erp_sync_inventaris = { status: 'PARTIAL', score: 80, note: 'Stok berkurang saat checkout namun belum terhubung ke batch roasting.' };
    res.erp_sync_keuangan = { status: 'PARTIAL', score: 75, note: 'Pencatatan kasir manual belum otomatis ke buku besar keuangan.' };
    return res;
  }

  if (projectId === 'project-r5a-kelompok-3') {
    // Kelas R5A - Kelompok 3 (UMKM Warung Sayur Pulungan): 95 / 100 - Grade A
    const res = createBase(100, 'Aplikasi modern Laravel 12 + React Inertia aktif di cloud Railway PaaS.');
    res.fe_beranda = { status: 'PASSED', score: 100, note: 'SPA responsif dan instan dengan React Inertia, navigasi katalog sayur sangat cepat.' };
    res.fe_tentang_kami = { status: 'PASSED', score: 98, note: 'Profil UMKM Warung Sayur Pulungan informatif.' };
    res.fe_kontak_kami = { status: 'PASSED', score: 96, note: 'Kontak pemesanan dan alamat toko tertera lengkap.' };
    res.fe_katalog_produk = { status: 'PASSED', score: 100, note: 'Filter kategori sayuran segar, bumbu dapur, dan sembako sangat interaktif.' };
    res.fe_keranjang = { status: 'PASSED', score: 100, note: 'Keranjang belanja reaktif state management Inertia.' };
    res.fe_checkout = { status: 'PASSED', score: 100, note: 'Form checkout tervalidasi Laravel FormRequest.' };
    res.fe_pembayaran_info = { status: 'PASSED', score: 98, note: 'Informasi nomor rekening dan pembayaran jelas.' };
    res.fe_payment_action = { status: 'PASSED', score: 98, note: 'Konfirmasi bukti pembayaran aktif.' };
    res.fe_delivery_cod = { status: 'PASSED', score: 98, note: 'Opsi pengiriman kurir lokal / ambil di toko.' };
    res.erp_produk = { status: 'PASSED', score: 100, note: 'CRUD produk lengkap dengan gambar, harga modal, harga jual, dan satuan gram/ikat.' };
    res.erp_pelanggan = { status: 'PASSED', score: 98, note: 'Manajemen data pelanggan rapi.' };
    res.erp_pesanan = { status: 'PASSED', score: 100, note: 'Manajemen pesanan masuk dan update status pengiriman.' };
    res.erp_stok = { status: 'PASSED', score: 98, note: 'Notifikasi stok sayur menipis dan kadaluarsa otomatis.' };
    res.erp_kategori = { status: 'PASSED', score: 100, note: 'Manajemen kategori sayuran lengkap.' };
    res.erp_users_admin = { status: 'PASSED', score: 100, note: 'Manajemen pengguna dan hak akses admin/kasir.' };
    res.erp_laporan_keuangan = { status: 'PASSED', score: 98, note: 'Laporan laba kotor harian dan mingguan otomatis.' };
    res.erp_analitik_statistik = { status: 'PASSED', score: 96, note: 'Visualisasi analitik penjualan sayur.' };
    res.erp_crm = { status: 'PASSED', score: 95, note: 'Database pelanggan dan histori order repeat.' };
    res.erp_sync_inventaris = { status: 'PASSED', score: 98, note: 'Stok tersinkronisasi atomik via Laravel DB Transaction.' };
    res.erp_sync_keuangan = { status: 'PASSED', score: 96, note: 'Omzet tercatat otomatis ke modul keuangan.' };
    res.fe_faq = { status: 'PASSED', score: 90, note: 'FAQ panduan pemesanan sayur segar.' };
    res.fe_blog = { status: 'PASSED', score: 88, note: 'Artikel tips menyimpan sayuran segar.' };
    return res;
  }

  return generateRubricScores({ domain: domain || 'E-Commerce ERP' });
}

// Helper: Generator Analisis Deteksi Pemanfaatan AI & Bimbingan Pedagogis Dosen Faik Bajsair
export function generateDefaultAiAudit(project = {}) {
  const name = project.projectName || 'Aplikasi E-Commerce ERP';
  const group = project.groupNumber || project.studentName || 'Kelompok Mahasiswa';
  const framework = project.framework || 'PHP Native & MySQL';

  return {
    overallPercentage: project.aiPercentage || 78,
    classification: 'Dominan Dibantu AI (High AI-Assisted, 75% - 85%)',
    summaryAnalysis: `Aplikasi ${name} yang dikembangkan oleh ${group} menunjukkan indikasi kuat pemanfaatan asisten generative AI (seperti ChatGPT, Claude, Cursor, v0, atau GitHub Copilot) pada penulisan struktur boilerplate kode, tata letak antarmuka responsif, dan logika dasar CRUD. Pemanfaatan AI ini sangat membantu mempercepat delivery proyek, namun menyisakan pekerjaan rumah penting bagi mahasiswa untuk menguasai pemahaman fundamental alur kerja kode secara mandiri.`,
    featureBreakdown: [
      {
        feature: 'Desain Antarmuka, Layout CSS & Komponen Visual',
        aiPercentage: 85,
        indicator: 'Penggunaan variabel palet warna CSS modern (:root), reset styling, layout card flexbox/grid, serta pola penamaan class yang sangat rapi dan konsisten melebihi kebiasaan penulisan manual mahasiswa semester 5.',
        whatAiDid: 'Menyusun seluruh struktur tampilan halaman, estetika tematik visual, hero banner, dan adaptasi responsive multi-device.'
      },
      {
        feature: 'Modul Autentikasi, Login Guard & Manajemen Sesi',
        aiPercentage: 80,
        indicator: 'Alur penanganan $_SESSION dan percabangan role user/admin mengikuti struktur template generik AI tanpa proteksi token CSRF atau mekanisme rate-limiting brute-force.',
        whatAiDid: 'Membuat form login, hashing password dasar, pemisahan hak akses admin vs user, dan script redirect halaman.'
      },
      {
        feature: 'Katalog Produk & State Keranjang Belanja (Cart)',
        aiPercentage: 75,
        indicator: 'Logika manipulasi DOM keranjang, kalkulasi subtotal, dan struktur fungsi JavaScript baku dengan penamaan fungsi camelCase deskriptif khas AI generator.',
        whatAiDid: 'Membangun fungsionalitas penambahan item ke cart, update kuantitas, kalkulasi total harga, dan trigger checkout.'
      },
      {
        feature: 'Backoffice ERP, Manajemen Inventori & CRUD Pesanan',
        aiPercentage: 70,
        indicator: 'Query SQL CRUD terstruktur rapi namun belum menggunakan database transaction lock (ACID) untuk mencegah race condition pengurangan stok bersamaan.',
        whatAiDid: 'Menyediakan tabel dashboard admin, pembaruan status pesanan, dan form penambahan produk baru.'
      },
      {
        feature: 'Skema Database Relasional & Migrasi DDL',
        aiPercentage: 75,
        indicator: 'Normalisasi tabel MySQL standar konvensi AI (users, products, orders, order_items) dengan foreign key dan dummy seed data generik.',
        whatAiDid: 'Menyusun skema database awal, relasi antar entitas, dan struktur kolom master data.'
      }
    ],
    dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Biarlah AI sudah mewakili kalian dalam mempercepat pengerjaan fiturnya saat ini, namun tugas utama kalian sebagai calon Sarjana Sistem Informasi adalah mampu belajar dan menguasai bagaimana cara AI tersebut menyusun dan menyelesaikan setiap fitur tersebut.',
    homeworkScope: [
      {
        topic: 'Mekanisme Autentikasi, Session, & Proteksi Role-Based Access Control (RBAC)',
        description: 'Pelajari secara mendalam bagaimana session disimpan di server, kenapa password harus di-hash (misal: password_hash & password_verify), serta bagaimana mencegah bypass URL admin.',
        guidingQuestions: 'Jika seseorang mengetik langsung URL /admin/dashboard tanpa login, baris kode mana yang menolaknya? Bagaimana session ID diamankan dari pembajakan (session hijacking)?'
      },
      {
        topic: 'Alur Data Checkout ke Database (Relasi One-to-Many & Transaksi ACID)',
        description: 'Pahami bagaimana satu transaksi checkout memecah data ke tabel pesanan (header) dan tabel detail_pesanan (items) secara atomik.',
        guidingQuestions: 'Apa yang terjadi jika koneksi terputus saat pesanan utama tersimpan tetapi rincian item pesanan gagal tersimpan? Mengapa kita membutuhkan Database Transaction (COMMIT / ROLLBACK)?'
      },
      {
        topic: 'Logika Sinkronisasi Inventaris Otomatis (Slide 6 ERP)',
        description: 'Pahami logika decrement stok saat pelanggan berhasil melakukan checkout atau pembayaran disetujui admin.',
        guidingQuestions: 'Di file mana pengurangan kolom `stock` terjadi? Bagaimana cara mencegah stok bernilai negatif jika 2 pengguna membeli stok terakhir pada detik yang sama?'
      },
      {
        topic: 'Kemampuan Tracing, Debugging & Code Literacy Mandiri',
        description: 'Mahasiswa wajib mampu membaca setiap fungsi dan baris kode tanpa ketergantungan pada prompt AI, sehingga siap saat ditanya detail implementasi saat sidang KP.',
        guidingQuestions: 'Dapatkah kamu menjelaskan alur data dari form HTML hingga dieksekusi di database di papan tulis tanpa membuka ChatGPT/Cursor?'
      }
    ]
  };
}

// Helper: Generator Penilaian Deskriptif Resmi Dosen Penguji Faik Bajsair, S.Kom., M.Kom.
export function generateDefaultDescriptiveEvaluation(project = {}) {
  const name = project.projectName || 'Aplikasi E-Commerce Model ERP';
  const group = project.groupNumber || project.studentName || 'Kelompok Kerja Praktik';
  const hosting = project.hostingPlatform || 'Cloud Hosting';

  return {
    evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
    prodi: 'Program Studi Sistem Informasi',
    academicRole: 'Dosen Penguji / Academic Quality Analyst',
    executiveSummary: `Proyek "${name}" yang diajukan oleh ${group} dinilai telah berhasil merealisasikan prototipe fungsional aplikasi berbasis web yang memadukan storefront E-Commerce dan backoffice ERP sederhana. Implementasi antarmuka telah memenuhi kriteria usability dan alur bisnis UMKM yang ditargetkan, serta berhasil dipublikasikan pada infrastruktur live ${hosting}.`,
    businessModelEvaluation: `Aplikasi berhasil mengidentifikasi kebutuhan spesifik model bisnis UMKM mitra, mencakup katalog produk, pemesanan pelanggan, hingga pencatatan transaksi penjualan. Konsep ERP terwujud dalam pemisahan modul operasional front-end dan panel admin operasional.`,
    technicalArchitectureEvaluation: `Arsitektur sistem dibangun dengan fondasi yang cukup rapi. Tata letak visual responsif dan mudah digunakan. Dari perspektif rekayasa perangkat lunak, aplikasi masih memerlukan penyempurnaan pada aspek sanitasi input, validasi parameter SQL, penanganan transaksi ACID pada pemesanan multi-item, serta penguatan protokol transmisi HTTPS.`,
    strengths: [
      'Antarmuka pengguna (UI/UX) dirancang tematik, bersih, dan representatif terhadap identitas produk UMKM mitra',
      'Alur pemesanan produk dari pemilihan menu hingga pengisian data transaksi berjalan dengan lancar',
      'Telah berhasil di-deploy pada lingkungan cloud hosting publik dan dapat diuji secara langsung',
      'Terdapat pembagian hak akses operasional yang jelas antara pelanggan dan pengelola admin toko'
    ],
    weaknesses: [
      'Pemanfaatan generatif AI cukup dominan sehingga pemahaman mahasiswa terhadap setiap baris kode perlu diperdalam sebelum sidang',
      'Belum dilengkapi database transaction locking untuk mencegah race condition pada saat pengurangan stok produk secara bersamaan',
      'Perlu penambahan proteksi keamanan web standar (seperti CSRF protection, sanitasi query input, dan sertifikat HTTPS aman)'
    ],
    finalVerdict: 'DITERIMA SEBAGAI PROYEK KERJA PRAKTIK (LULUS DENGAN PR PENDALAMAN LOGIKA KODE)',
    recommendations: 'Kelompok mahasiswa dinyatakan memenuhi kriteria capaian Kerja Praktik (KP). Namun, seluruh anggota kelompok diwajibkan menyelesaikan PR (Tugas Belajar Mandiri) untuk membedah dan memahami seluruh alur logika, sintaks, dan arsitektur kode yang telah diwakili oleh AI, guna kesiapan menghadapi sidang pertanggungjawaban akademik.'
  };
}

const RAW_PRESET_PROJECTS = [
  // 0a. Kelas R5A - Kelompok 1 (Web FilosofiKopi)
  {
    id: 'project-r5a-kelompok-1',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5A',
    groupNumber: 'Kelompok 1',
    studentName: 'Kelas R5A - Kelompok 1 (Web FilosofiKopi: Ryandhi, Kristina, Meutia, Satrio, Hasril)',
    studentNim: '202433500001 / 004 / 006 / 059 / 005',
    teamMembers: [
      { nim: '202433500001', name: 'Ryandhi Kumala Irsa' },
      { nim: '202433500004', name: 'Kristina Sinaga' },
      { nim: '202433500006', name: 'Meutia Dwi Septiani' },
      { nim: '202433500059', name: 'Satrio Widyan Hadi Wibowo' },
      { nim: '202433500005', name: 'Hasril Labasri' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2024-2026 / Semester 5',
    projectName: 'Web FilosofiKopi - Sistem Informasi Penjualan Kopi Berbasis Web',
    targetUrl: 'https://filosofikopii.42web.io/',
    adminUrl: 'https://filosofikopii.42web.io/admin',
    orderUrl: 'https://filosofikopii.42web.io/',
    portals: [
      { title: 'Storefront FilosofiKopi', url: 'https://filosofikopii.42web.io/', badge: 'InfinityFree (42web.io)' },
      { title: 'Login Pengguna / User', url: 'https://filosofikopii.42web.io/login', badge: 'User Portal' }
    ],
    demoCredentials: {
      admin: { username: 'admin@gmail.com', password: 'admin123' },
      user: { username: 'ryandhikumallairsa@gmail.com', password: 'ryankumall' }
    },
    githubRepoUrl: 'https://github.com/hasrillabaaasri-lab/Projeck-Web-E-Commerce-Filosofi/tree/main/kopi',
    hostingPlatform: 'InfinityFree (42web.io)',
    framework: 'PHP Native, HTML, CSS, JavaScript & MySQL',
    evaluationDate: '2026-11-26',
    scores: generateGroupSpecificScores('project-r5a-kelompok-1', 'FilosofiKopi Kedai'),
    lecturerNotes: 'Aplikasi Web FilosofiKopi dari Kelas R5A Kelompok 1 memiliki katalog produk kopi dan etalase kedai yang rapi. Fitur login pengguna dan panel admin sudah berfungsi di InfinityFree (42web.io). Mahasiswa perlu meningkatkan aspek validasi stok real-time dan modul pelaporan keuangan.',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 74,
      classification: 'Dominan Dibantu AI (High AI-Assisted, 70% - 78%)',
      summaryAnalysis: 'Aplikasi Web FilosofiKopi menunjukkan pemanfaatan generative AI yang cukup dominan pada styling katalog minuman kopi, struktur HTML form otentikasi login/registrasi, dan query dasar database MySQL. Alur bisnis pemesanan kopi berjalan standar namun logika transaksi dan validasi sesi perlu dikuasai secara mendalam oleh mahasiswa.',
      featureBreakdown: [
        {
          feature: 'Katalog Produk & Etalase Kopi',
          aiPercentage: 75,
          reason: 'Grid produk responsif dengan card menu kopi, foto produk, dan harga modal/jual memiliki struktur boilerplate umum Tailwind/Bootstrap hasil prompt AI.',
          status: 'AI Assisted'
        },
        {
          feature: 'Autentikasi Pengguna & Admin (Login/Register)',
          aiPercentage: 72,
          reason: 'Pola skrip otentikasi PHP session menggunakan struktur standar yang umum digenerate oleh AI, namun perlu dipastikan implementasi password hashing (bcrypt) dan sanitasi input.',
          status: 'AI Assisted'
        },
        {
          feature: 'Keranjang Belanja & Form Pemesanan',
          aiPercentage: 76,
          reason: 'Mekanisme session cart penampung pesanan kopi menggunakan pola generik PHP native.',
          status: 'AI Assisted'
        },
        {
          feature: 'Struktur Database MySQL Kedai Kopi',
          aiPercentage: 70,
          reason: 'Skema tabel users, produk_kopi, dan transaksi mengikuti rancangan dasar yang lazim dibuat melalui prompt AI.',
          status: 'AI Assisted'
        }
      ],
      aiAdvice: 'Kamu boleh dan sangat wajar memanfaatkan AI di era modern ini untuk mempercepat pembuatan tampilan etalase FilosofiKopi dan logika CRUD dasar. Namun yang paling penting adalah kamu memahami alur data dari form pembelian sampai tersimpan di database MySQL, logika session login, serta tujuan bisnis setiap fiturnya. Jangan hanya terima hasil generate AI tanpa tahu cara membaca dan membangun kodenya dari nol.',
      studentHomework: [
        'Pelajari alur siklus PHP session ($_SESSION) dalam memisahkan hak akses pembeli biasa dan administrator.',
        'Pahami cara kerja query Prepared Statements (PDO / MySQLi) untuk melindungi database dari celah SQL Injection.',
        'Pelajari logika pengurangan stok kopi secara otomatis saat checkout berhasil dilakukan agar tidak terjadi overselling.',
        'Kuasai cara membaca struktur kode di repositori GitHub cabang /kopi agar siap menjawab pertanyaan teknis saat sidang KP.'
      ]
    },
    descriptiveEvaluation: {
      overallSummary: 'Aplikasi Web FilosofiKopi karya Kelas R5A Kelompok 1 berhasil menyajikan etalase toko kopi online yang menarik dan fungsional di hosting InfinityFree. Pengguna dapat mendaftar akun baru, login dengan kredensial teruji, dan memilih menu kopi yang diinginkan. Panel admin juga tersedia untuk pengelolaan data.',
      strengths: [
        'Desain antarmuka etalase kedai kopi bersih dan responsif diakses dari perangkat mobile maupun desktop',
        'Tersedia autentikasi dua pintu (pelanggan dan admin) yang sudah aktif dan dapat diverifikasi langsung',
        'Repositori GitHub publik terstruktur dan memuat source code aplikasi pada direktori proyek'
      ],
      weaknesses: [
        'Integrasi pembayaran masih bersifat konfirmasi manual dan belum dilengkapi notifikasi otomatis',
        'Perlu penambahan proteksi CSRF token pada setiap form POST di halaman login dan checkout',
        'Modul analitik dan rekapitulasi penjualan di sisi admin masih perlu diperluas'
      ],
      finalVerdict: 'DITERIMA SEBAGAI PROYEK KERJA PRAKTIK (LULUS DENGAN TUGAS PENDALAMAN LOGIKA)',
      recommendations: 'Kelompok 1 Kelas R5A dinyatakan lulus evaluasi KP (Nilai 76, Grade B+). Setiap anggota kelompok diwajibkan mempelajari arsitektur session dan sanitasi database agar percaya diri saat mempresentasikan proyek di hadapan dewan penguji sidang.'
    }
  },

  // 0b. Kelas R5A - Kelompok 3 (UMKM Warung Sayur Pulungan)
  {
    id: 'project-r5a-kelompok-3',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5A',
    groupNumber: 'Kelompok 3',
    studentName: 'Kelas R5A - Kelompok 3 (Warung Sayur Pulungan: Ammar, Abizar, Triya, Rahadian)',
    studentNim: '202433500012 / 013 / 014 / 015',
    teamMembers: [
      { nim: '202433500012', name: 'Muhammad Ammar Ghani Suhairi' },
      { nim: '202433500013', name: 'Muhammad Abizar Giffari Isnaini' },
      { nim: '202433500014', name: 'Triya Agustina' },
      { nim: '202433500015', name: 'Rahadian Yusuf' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Perancangan Sistem Informasi E-Commerce Model ERP pada UMKM Warung Sayur Pulungan',
    targetUrl: 'https://projectreb-production.up.railway.app/',
    adminUrl: 'https://projectreb-production.up.railway.app/login',
    orderUrl: 'https://projectreb-production.up.railway.app/',
    portals: [
      { title: 'E-Commerce Warung Sayur', url: 'https://projectreb-production.up.railway.app/', badge: 'Railway Cloud PaaS' },
      { title: 'Login Terpadu (Admin & User)', url: 'https://projectreb-production.up.railway.app/login', badge: 'Inertia React SPA' }
    ],
    demoCredentials: {
      admin: { username: 'admin@example.test', password: 'password' },
      user: { username: 'endar@example.test', password: 'password' }
    },
    githubRepoUrl: 'https://github.com/abizargiffari/project_reb',
    hostingPlatform: 'Railway Cloud PaaS',
    framework: 'Laravel v12 (PHP) + React via Inertia.js & MySQL',
    evaluationDate: '2026-11-26',
    scores: generateGroupSpecificScores('project-r5a-kelompok-3', 'Warung Sayur Pulungan ERP'),
    lecturerNotes: 'Aplikasi kelas enterprise yang sangat impresif dari Kelas R5A Kelompok 3. Memanfaatkan tech stack modern Laravel v12 dipadukan dengan React via Inertia.js dan di-deploy secara profesional di cloud Railway PaaS. Arsitektur MVC, reactivity frontend, dan modul manajemen ERP sayuran sangat komprehensif.',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 62,
      classification: 'Pemanfaatan AI Modern & Rekayasa Perangkat Lunak Mandiri Sangat Baik (62%)',
      summaryAnalysis: 'Aplikasi Warung Sayur Pulungan menunjukkan penguasaan teknologi tingkat tinggi dari mahasiswa. Penggunaan generative AI terindikasi pada scaffolding komponen React via Inertia dan boilerplate model/controller Laravel v12. Namun rekayasa bisnis internal ERP (manajemen pasokan sayur segar, relasi database, middleware otentikasi) terbukti dikonfigurasi dan diintegrasikan secara mandiri dengan rapi.',
      featureBreakdown: [
        {
          feature: 'Fullstack Single Page Application (Laravel 12 + React Inertia)',
          aiPercentage: 60,
          reason: 'Penggunaan Inertia.js menghubungkan Laravel Controller langsung ke komponen React tanpa membuat REST API manual—struktur setup modern yang sangat bersih.',
          status: 'AI Assisted + Manual Engineering'
        },
        {
          feature: 'Katalog Sayur & Filter Kategori Interaktif',
          aiPercentage: 65,
          reason: 'Komponen filter pencarian reaktif React yang mulus tanpa reload halaman, dengan rendering state yang presisi.',
          status: 'AI Assisted'
        },
        {
          feature: 'Modul ERP Manajemen Stok & Kadaluarsa Sayuran',
          aiPercentage: 58,
          reason: 'Logika bisnis komoditas sayur basah/kering dengan perlakuan stok dinamis menunjukkan pemahaman mendalam tentang kebutuhan riil UMKM.',
          status: 'Custom Logic'
        },
        {
          feature: 'Deployment Cloud Railway PaaS dengan CI/CD',
          aiPercentage: 62,
          reason: 'Konfigurasi environment Nixpacks/Dockerfile dan database pool di Railway berjalan sempurna tanpa hambatan runtime.',
          status: 'Advanced DevOps'
        }
      ],
      aiAdvice: 'Luar biasa! Penggunaan AI yang kalian lakukan sudah pada level profesional: menjadikan AI sebagai asisten akselerasi pembuatan boilerplate Laravel dan komponen React, sementara kalian memegang kendali penuh atas arsitektur, relasi database, dan alur proses bisnis UMKM sayur. Pertahankan standar rekayasa software seperti ini.',
      studentHomework: [
        'Pelajari mendalam lifecycle komunikasi Inertia.js (router.visit, useForm, preserveScroll) antara Laravel dan React.',
        'Pahami implementasi Database Transactions di Laravel (DB::transaction) saat terjadi checkout multi-item sayur untuk menjaga integritas data.',
        'Eksplorasi optimasi caching data katalog dengan Redis di Railway untuk menjaga performa saat traffic pembeli tinggi.',
        'Persiapkan demonstrasi alur live checkout dan demonstrasi kode controller saat sesi tanya jawab sidang KP.'
      ]
    },
    descriptiveEvaluation: {
      overallSummary: 'Aplikasi Perancangan Sistem Informasi E-Commerce Model ERP pada UMKM Warung Sayur Pulungan oleh Kelas R5A Kelompok 3 merupakan salah satu proyek KP terbaik. Menggunakan Laravel 12 terbaru dengan frontend React via Inertia.js serta di-hosting di Railway PaaS, sistem ini sangat responsif, memiliki keamanan tinggi bawaan Laravel (CSRF, Eloquent ORM, Password Hashing Argon2/Bcrypt), dan siap dipakai operasional nyata.',
      strengths: [
        'Tech stack modern kelas industri: Laravel 12 Backend + React via Inertia.js SPA Frontend',
        'Hosting cloud Railway PaaS yang tangguh dengan SSL HTTPS otomatis dan performa tinggi',
        'Fitur ERP komprehensif: manajemen produk sayur segar, stok dinamis, dan laporan penjualan',
        'Repositori GitHub publik sangat aktif, rapi, dan mencerminkan kolaborasi tim yang solid'
      ],
      weaknesses: [
        'Halaman informasi FAQ dan artikel tips sayuran segar masih dapat diperkaya kontennya',
        'Dapat ditambahkan fitur integrasi payment gateway otomatis (seperti Midtrans atau Tripay) untuk melengkapi transfer manual'
      ],
      finalVerdict: 'SANGAT MEMUASKAN - LULUS DENGAN PREDIKAT TERBAIK (PRODUCTION READY)',
      recommendations: 'Kelompok 3 Kelas R5A dinyatakan lulus dengan predikat A (Nilai 95). Proyek ini sangat layak dijadikan model percontohan implementasi Kerja Praktik modern di Program Studi Sistem Informasi.'
    }
  },

  // 1. Tokopi (Kerja Praktik) - Kelas S5A
  {
    id: 'project-tokopi-kp',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas S5A',
    groupNumber: 'Kelas S5A (Tokopi)',
    studentName: 'Kelas S5A - Kelompok Tokopi (Nadia, Rayhan, Rio, Wisnu)',
    studentNim: '202433500002 / 003 / 011 / 947',
    teamMembers: [
      { nim: '202433500002', name: 'Nadia Kusumawati' },
      { nim: '202433500003', name: 'Rayhan Hidayat' },
      { nim: '202433500011', name: 'Rio Fikri Ramadhan' },
      { nim: '202333500947', name: 'Wisnu Mahardika' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026/2027 / Semester 5',
    projectName: 'Perancangan Sistem Informasi E-Commerce Model ERP UMKM Coffee Shop Multi Cabang (Tokopi)',
    targetUrl: 'https://tokopi.my.id',
    adminUrl: 'https://admin.tokopi.my.id',
    orderUrl: 'https://order.tokopi.my.id/t.php?token=4fc72fb30a6193b7b7fa69cf',
    portals: [
      { title: 'Company Profile', url: 'https://tokopi.my.id', badge: 'Public' },
      { title: 'Backoffice / ERP Admin', url: 'https://admin.tokopi.my.id', badge: 'Admin ERP' },
      { title: 'QR Ordering (Token)', url: 'https://order.tokopi.my.id/t.php?token=4fc72fb30a6193b7b7fa69cf', badge: 'QR Customer' }
    ],
    demoCredentials: {
      admin: { username: 'owner@tokopi.test', password: 'password' },
      user: { username: 'hidayatrayhan212@gmail.com', password: 'password' }
    },
    githubRepoUrl: 'https://github.com/RIOFIKRIRAMADHAN/TOKOPI',
    hostingPlatform: 'Cloud (Rumahweb)',
    framework: 'PHP 7.4 native + Bootstrap 5, Chart.js, Midtrans QRIS (sandbox) / MySQL',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-tokopi-kp', 'Coffee Shop Tokopi Multi Cabang'),
    lecturerNotes: 'Proyek Kerja Praktik (KP) yang sangat komprehensif dari Kelas S5A (Kelompok Tokopi). Arsitektur multi-portal (Landing Page, ERP Backoffice, dan QR Customer Ordering) sangat matang dan siap diimplementasikan untuk operasional coffee shop nyata. Integrasi Midtrans QRIS dan visualisasi Chart.js berjalan sangat baik.',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 68,
      classification: 'Kombinasi AI & Kustomisasi Mandiri yang Baik (Moderate AI-Assisted, 68%)',
      summaryAnalysis: 'Aplikasi Tokopi dari Kelas S5A menunjukkan tingkat kematangan arsitektur yang tinggi. Penggunaan generative AI terdeteksi pada pembuatan layout Bootstrap 5, konfigurasi charting Chart.js, dan penataan routing multi-subdomain. Namun terdapat banyak sentuhan kustomisasi manual pada integrasi token QR ordering (t.php?token=...) dan SDK Midtrans QRIS sandbox.',
      featureBreakdown: [
        {
          feature: 'Landing Page & Company Profile (tokopi.my.id)',
          aiPercentage: 70,
          indicator: 'Layout Bootstrap 5 card responsif dan navigasi hero banner khas prompt generator template.',
          whatAiDid: 'Menyusun halaman profil UMKM coffee shop multi-cabang.'
        },
        {
          feature: 'Sistem Pemesanan Pelanggan (QR Ordering dengan Token)',
          aiPercentage: 60,
          indicator: 'Logika token URL parameter (?token=4fc72fb...) menunjukkan perancangan alur kustom untuk mencegah pesanan tanpa kehadiran fisik di meja kafe.',
          whatAiDid: 'Membuat alur validasi token meja dan katalog pesanan kopi.'
        },
        {
          feature: 'Backoffice / ERP Admin (admin.tokopi.my.id)',
          aiPercentage: 70,
          indicator: 'Dashboard analitik dengan Chart.js dan tabel manajemen cabang dengan struktur CRUD standar.',
          whatAiDid: 'Menampilkan grafik omzet penjualan dan manajemen data cabang kafe.'
        },
        {
          feature: 'Integrasi Payment Gateway Midtrans QRIS',
          aiPercentage: 65,
          indicator: 'Integrasi Snap API Midtrans sandbox yang disesuaikan dengan webhook callback.',
          whatAiDid: 'Menyediakan pembayaran QRIS otomatis bagi pelanggan kafe.'
        },
        {
          feature: 'Skema Database Multi-Cabang',
          aiPercentage: 70,
          indicator: 'Struktur database relasional dengan kolom branch_id dan foreign key pesanan.',
          whatAiDid: 'Menyusun DDL MySQL untuk mendukung toko multi-cabang.'
        }
      ],
      dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Biarlah AI sudah mewakili kalian dalam mempercepat pengerjaan fiturnya saat ini, namun tugas utama kalian sebagai calon Sarjana Sistem Informasi adalah mampu belajar dan menguasai bagaimana cara AI tersebut menyusun dan menyelesaikan setiap fitur tersebut.',
      homeworkScope: [
        {
          topic: 'Mekanisme Keamanan Token QR & Validasi Session Meja',
          description: 'Pelajari bagaimana token QR dibuat secara kriptografis (misal: sha256/random_bytes), disimpan di database meja, dan dibatasi masa berlakunya (TTL expiration).',
          guidingQuestions: 'Bagaimana jika pelanggan menyalin link order dengan token meja lalu memesan dari rumah? Bagaimana sistem memvalidasi bahwa pelanggan benar-benar ada di kafe?'
        },
        {
          topic: 'Alur Webhook & Idempotensi Payment Gateway Midtrans',
          description: 'Pahami alur komunikasi asinkron antara server Midtrans dan backend Tokopi saat status transaksi berubah menjadi settlement.',
          guidingQuestions: 'Apa itu webhook signature key? Bagaimana jika Midtrans mengirim notifikasi pembayaran sukses 2 kali secara beruntun?'
        },
        {
          topic: 'Sinkronisasi Multi-Cabang & Inventori Bahan Baku ERP',
          description: 'Pelajari bagaimana pengurangan stok biji kopi, susu, dan sirup dihitung per cabang kafe (Slide 6 ERP).',
          guidingQuestions: 'Di query mana stok cabang berkurang saat transaksi selesai? Bagaimana struktur tabel inventori per cabang?'
        },
        {
          topic: 'Code Literacy & Penguasaan Arsitektur Multi-Domain',
          description: 'Mahasiswa wajib mampu menjelaskan arsitektur routing antara tokopi.my.id, admin.tokopi.my.id, dan order.tokopi.my.id di papan tulis tanpa bantuan AI.',
          guidingQuestions: 'Bagaimana sesi login admin di admin.tokopi.my.id diisolasi agar tidak bercampur dengan sesi pelanggan di order.tokopi.my.id?'
        }
      ]
    },
    descriptiveEvaluation: {
      evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
      prodi: 'Program Studi Sistem Informasi',
      academicRole: 'Dosen Penguji / Academic Quality Analyst',
      executiveSummary: 'Proyek Tokopi (Coffee Shop Multi Cabang) dari Kelas S5A karya Nadia Kusumawati, Rayhan Hidayat, Rio Fikri Ramadhan, dan Wisnu Mahardika merupakan salah satu karya Kerja Praktik paling komprehensif. Pemisahan multi-portal subdomain (Landing, Admin ERP, dan QR Ordering Meja) serta integrasi Midtrans QRIS sandbox dan cloud hosting Rumahweb menunjukkan implementasi nyata yang sangat siap pakai.',
      businessModelEvaluation: 'Model bisnis ERP coffee shop multi-cabang diimplementasikan dengan sangat baik. Solusi QR ordering dengan token meja sangat relevan menyelesaikan antrean kasir di jam sibuk UMKM kopi.',
      technicalArchitectureEvaluation: 'Penggunaan PHP 7.4 native, Bootstrap 5, Chart.js, dan MySQL berjalan stabil di cloud server Rumahweb. Pemisahan domain (tokopi.my.id, admin.tokopi.my.id, order.tokopi.my.id) memberikan arsitektur yang terisolasi dengan rapi. Aspek keamanan webhook dan sanitasi query tetap perlu dijaga.',
      strengths: [
        'Arsitektur multi-portal subdomain profesional (Company Profile, Admin ERP, dan QR Ordering)',
        'Inovasi QR Ordering berbasis token meja yang melindungi dari pesanan fiktif',
        'Integrasi payment gateway Midtrans QRIS sandbox aktif dan visualisasi grafik Chart.js',
        'Hosting cloud Rumahweb yang stabil dengan domain resmi berbayar .my.id'
      ],
      weaknesses: [
        'Masa berlaku (TTL) token meja QR perlu ditambahkan batas kedaluwarsa otomatis (misal: 2 jam)',
        'Logika pengurangan stok bahan baku resep (BOM - Bill of Materials) perlu diperinci lebih mendalam',
        'Perlu penguatan sanitasi prepared statement pada seluruh endpoint query order'
      ],
      finalVerdict: 'DITERIMA DENGAN NILAI SANGAT MEMUASKAN (EXCELLENT PRACTICE-READY ERP)',
      recommendations: 'Kelompok Tokopi Kelas S5A dinyatakan sangat siap untuk sidang Kerja Praktik. Mahasiswa diarahkan untuk mematangkan pemahaman arsitektur webhook payment dan modul resep bahan baku saat presentasi sidang.'
    }
  },

  // 1b. Kelas S5A - Kelompok 2 (Milenial Eyewear)
  {
    id: 'project-s5a-kelompok-2',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas S5A',
    groupNumber: 'Kelompok 2',
    studentName: 'Kelas S5A - Kelompok 2 (Milenial Eyewear: Ahmad, Adelia, Helina, Shafwah)',
    studentNim: '202433500016 / 018 / 020 / 023',
    teamMembers: [
      { nim: '202433500016', name: 'Muhammad Ahmad Fadilah' },
      { nim: '202433500018', name: 'Adelia Syaputri' },
      { nim: '202433500020', name: 'Helina Dwi Ambarwati' },
      { nim: '202433500023', name: 'Shafwah Nada' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026/2027 / Semester 5',
    projectName: 'Milenial Eyewear - Sistem Informasi ERP Optik & Penjualan Kacamata',
    targetUrl: 'http://milenial-eyewear.page.gd/',
    adminUrl: 'http://milenial-eyewear.page.gd/admin/login.php',
    orderUrl: 'http://milenial-eyewear.page.gd/pages/login.php',
    portals: [
      { title: 'Storefront Eyewear', url: 'http://milenial-eyewear.page.gd/', badge: 'Live page.gd' },
      { title: 'Login Pelanggan', url: 'http://milenial-eyewear.page.gd/pages/login.php', badge: 'User Portal' },
      { title: 'Backoffice Admin', url: 'http://milenial-eyewear.page.gd/admin/login.php', badge: 'Admin ERP' }
    ],
    demoCredentials: {
      admin: { username: 'admin (atau admin@milenialeyewear.test)', password: 'admin123' },
      user: { username: 'bois@gmail.com', password: 'password' }
    },
    githubRepoUrl: 'https://github.com/Fadil12121212/ERP-Optik-Kelompok2',
    hostingPlatform: 'Cloud Web Hosting (Apache & MySQL / page.gd)',
    framework: 'PHP 8.2 Native (Modular Architecture & Dual Session Isolation), Bootstrap 5.3.3, MySQL / MariaDB (20 Tabel Relasional)',
    evaluationDate: '2026-11-25',
    scores: generateGroupSpecificScores('project-s5a-kelompok-2', 'Milenial Eyewear'),
    lecturerNotes: 'Aplikasi Milenial Eyewear dari Kelas S5A Kelompok 2 memiliki arsitektur modular yang solid pada PHP 8.2, isolasi sesi ganda antara user dan admin, serta skema relasional 20 tabel untuk mendukung manajemen optik (frame, lensa, resep mata).',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 74,
      classification: 'Kombinasi AI & Kustomisasi Arsitektur yang Baik (Moderate-High AI, 74%)',
      summaryAnalysis: 'Aplikasi Milenial Eyewear menunjukkan integrasi yang matang antara template modern Bootstrap 5.3.3 dan penulisan backend PHP 8.2 modular. Pemanfaatan AI teridentifikasi pada penataan skema 20 tabel relasional, alur dual session isolation, dan styling form kacamata. Struktur kode terkelola dengan baik pada repositori GitHub.',
      featureBreakdown: [
        {
          feature: 'Arsitektur Dual Session Isolation & Autentikasi',
          aiPercentage: 75,
          indicator: 'Pemisahan sesi session_name() khusus antara halaman admin dan pelanggan untuk mencegah privilege escalation.',
          whatAiDid: 'Menyusun logika routing login terpisah di /pages/login.php dan /admin/login.php.'
        },
        {
          feature: 'Skema Database Optik Relasional (20 Tabel)',
          aiPercentage: 78,
          indicator: 'Rancangan DDL normalisasi tabel produk frame, ukuran lensa (minus/silinder), resep dokter, dan riwayat pesanan.',
          whatAiDid: 'Menyusun database schema MySQL untuk bisnis kacamata optik.'
        },
        {
          feature: 'Katalog Produk & Form Pemilihan Lensa',
          aiPercentage: 72,
          indicator: 'Grid card Bootstrap 5.3.3 responsif dengan modal input ukuran lensa kacamata.',
          whatAiDid: 'Menyediakan katalog kacamata dengan filter kategori dan harga.'
        },
        {
          feature: 'Backoffice ERP Admin & Manajemen Inventori',
          aiPercentage: 70,
          indicator: 'Tabel CRUD persediaan stok frame dan lensa optik serta verifikasi transaksi.',
          whatAiDid: 'Menampilkan data master optik di panel pengelola.'
        }
      ],
      dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Biarlah AI sudah mewakili kalian dalam mempercepat pengerjaan fiturnya saat ini, namun tugas utama kalian sebagai calon Sarjana Sistem Informasi adalah mampu belajar dan menguasai bagaimana cara AI tersebut menyusun dan menyelesaikan setiap fitur tersebut.',
      homeworkScope: [
        {
          topic: 'Mekanisme Dual Session Isolation pada PHP',
          description: 'Pelajari bagaimana session_name(), session_set_cookie_params(), dan session_regenerate_id() bekerja untuk memisahkan sesi admin dan pengguna.',
          guidingQuestions: 'Bagaimana sistem memastikan session admin tidak bisa disalahgunakan oleh pengguna umum di browser yang sama?'
        },
        {
          topic: 'Relasi 20 Tabel Database & Integritas Referensial (Foreign Keys)',
          description: 'Pahami relasi antar tabel produk, detail_resep_lensa, orders, dan order_items.',
          guidingQuestions: 'Bagaimana alur penyimpanan data saat pelanggan memesan kacamata dengan resep lensa silinder khusus?'
        },
        {
          topic: 'Sinkronisasi Stok Frame vs Lensa (Slide 6 ERP)',
          description: 'Pelajari bagaimana transaksi pemesanan kacamata mengurangi stok frame dan stok lensa secara bersamaan.',
          guidingQuestions: 'Di query mana stok lensa dan stok frame berkurang? Bagaimana jika salah satu lensa stoknya kosong?'
        }
      ]
    },
    descriptiveEvaluation: {
      evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
      prodi: 'Program Studi Sistem Informasi',
      academicRole: 'Dosen Penguji / Academic Quality Analyst',
      executiveSummary: 'Proyek Milenial Eyewear karya Kelompok 2 Kelas S5A (Muhammad Ahmad Fadilah, Adelia Syaputri, Helina Dwi Ambarwati, Shafwah Nada) merupakan karya yang sangat rapi dan berarsitektur kuat. Penggunaan PHP 8.2 modular dengan 20 tabel relasional menunjukkan keseriusan tim dalam memodelkan operasional optik kacamata nyata.',
      businessModelEvaluation: 'Model bisnis optik kacamata modern dengan fitur unggah resep dokter dan pilihan custom lensa sangat relevan dan memiliki nilai komersial yang tinggi bagi UMKM optik kacamata.',
      technicalArchitectureEvaluation: 'Pemisahan dual session isolation, struktur folder modular, dan 20 tabel relasional di MySQL berjalan stabil. Penggunaan Bootstrap 5.3.3 memberikan tampilan yang bersih dan profesional.',
      strengths: [
        'Arsitektur PHP 8.2 modular dengan dual session isolation yang aman',
        'Model relasional 20 tabel database komprehensif untuk spesifikasi optik',
        'Repositori GitHub publik aktif dan terstruktur rapi',
        'Live hosting aktif di cloud page.gd dengan akun demo lengkap'
      ],
      weaknesses: [
        'Koneksi hosting gratis belum dilengkapi sertifikat SSL (HTTPS)',
        'Perlu penambahan transaksi atomik (DB Transaction) saat mengurangi stok frame & lensa sekaligus',
        'Modul retur kacamata rusak perlu dihubungkan otomatis ke jurnal kasir'
      ],
      finalVerdict: 'DITERIMA DENGAN NILAI SANGAT MEMUASKAN (EXCELLENT MODULAR ERP)',
      recommendations: 'Kelompok 2 dinyatakan lulus evaluasi awal Kerja Praktik dengan predikat A. Mahasiswa diarahkan untuk memperdalam pemahaman alur dual session dan relasi foreign key 20 tabel saat sidang.'
    }
  },

  // 1c. Kelas S5A - Kelompok 3 (Kinara Studio Pilates)
  {
    id: 'project-s5a-kelompok-3',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas S5A',
    groupNumber: 'Kelompok 3',
    studentName: 'Kelas S5A - Kelompok 3 (Kinara Studio: Fachri, Cahya, Meisya, Regi)',
    studentNim: '20243350025 / 029 / 031 / 046',
    teamMembers: [
      { nim: '202433500025', name: 'Fachri Fachlia Zaelani' },
      { nim: '202433500029', name: 'Cahya khairunnisa Palwa' },
      { nim: '202433500031', name: 'Meisya Dwi Syaputri' },
      { nim: '202433500046', name: 'Regi Dwi Septia Mawar' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026/2027 / Semester 5',
    projectName: 'Perancangan Sistem Informasi E-Commerce Model ERP Pada Kinara Studio',
    targetUrl: 'https://kinarastudiopilates.infinityfreeapp.com/',
    adminUrl: 'https://kinarastudiopilates.infinityfreeapp.com/admin/login.php',
    orderUrl: 'https://kinarastudiopilates.infinityfreeapp.com/',
    portals: [
      { title: 'Portal Kinara Studio', url: 'https://kinarastudiopilates.infinityfreeapp.com/', badge: 'Live InfinityFree' },
      { title: 'Backoffice Admin', url: 'https://kinarastudiopilates.infinityfreeapp.com/admin/login.php', badge: 'Admin ERP' }
    ],
    demoCredentials: {
      admin: { username: 'admin@kinara.studio', password: 'Admin#2026' },
      user: { username: 'customer@kinara.studio', password: 'password123' }
    },
    githubRepoUrl: '',
    hostingPlatform: 'InfinityFree',
    framework: 'PHP Native & MySQL',
    evaluationDate: '2026-11-25',
    scores: generateGroupSpecificScores('project-s5a-kelompok-3', 'Kinara Studio Pilates'),
    lecturerNotes: 'Aplikasi Kinara Studio Pilates dari Kelas S5A Kelompok 3 memodelkan reservasi dan paket kelas pilates kebugaran berbasis ERP. Halaman publik dan admin aktif di hosting InfinityFree.',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 76,
      classification: 'Dominan Dibantu AI (High AI-Assisted, 76%)',
      summaryAnalysis: 'Aplikasi Kinara Studio Pilates menunjukkan pemanfaatan generatif AI pada layout frontend paket kebugaran, template booking kelas, dan dashboard admin login. Sistem berjalan online, namun kelompok mahasiswa belum menyertakan link repositori GitHub publik.',
      featureBreakdown: [
        {
          feature: 'Desain Antarmuka & Paket Kelas Pilates',
          aiPercentage: 80,
          indicator: 'Layout card paket sesi pilates dan jadwal instruktur dengan styling Bootstrap terstruktur.',
          whatAiDid: 'Menyusun katalog kelas studio pilates dan tarif sesi.'
        },
        {
          feature: 'Autentikasi Admin Kinara Studio',
          aiPercentage: 75,
          indicator: 'Form login admin terproteksi session di admin/login.php.',
          whatAiDid: 'Membuat alur masuk admin pengelola studio.'
        },
        {
          feature: 'Alur Pemesanan Kelas & Reservasi',
          aiPercentage: 75,
          indicator: 'Form pendaftaran kelas pilates dengan pemilihan jadwal dan konfirmasi.',
          whatAiDid: 'Mengelola alur pemesanan tiket kelas oleh member.'
        }
      ],
      dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Mahasiswa wajib membuat repositori GitHub publik dan mengunggah seluruh kode proyek agar dapat ditelusuri riwayat komitnya.',
      homeworkScope: [
        {
          topic: 'Version Control & Publikasi Repositori Git',
          description: 'Mahasiswa wajib mempelajari alur git init, commit, dan push ke GitHub agar kode memiliki cadangan dan riwayat terpusat.',
          guidingQuestions: 'Mengapa repositori Git penting dalam pengembangan perangkat lunak kolaboratif tim?'
        },
        {
          topic: 'Logika Kuota Slot Kelas Pilates (Slide 6 ERP)',
          description: 'Pahami bagaimana kuota kursi sesi pilates berkurang secara dinamis saat ada member yang mendaftar.',
          guidingQuestions: 'Bagaimana sistem mencegah overbooking jika kuota satu sesi kelas pilates hanya 10 orang?'
        }
      ]
    },
    descriptiveEvaluation: {
      evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
      prodi: 'Program Studi Sistem Informasi',
      academicRole: 'Dosen Penguji / Academic Quality Analyst',
      executiveSummary: 'Proyek Kinara Studio Pilates karya Kelompok 3 Kelas S5A mengangkat topik jasa kebugaran studio pilates yang menarik. Portal publik dan admin telah aktif di hosting cloud InfinityFree.',
      businessModelEvaluation: 'Model bisnis reservasi studio pilates sangat cocok diterapkan dengan konsep ERP untuk mengelola instruktur, jadwal sesi, dan kapasitas ruang studio.',
      technicalArchitectureEvaluation: 'Aplikasi menggunakan PHP Native dan MySQL yang fungsional. Namun, mahasiswa belum menyertakan repositori GitHub resmi untuk audit kode mendalam.',
      strengths: [
        'Tema bisnis pilates studio yang unik dan relevan dengan gaya hidup modern',
        'Sudah aktif di cloud hosting InfinityFree dan dapat diakses publik',
        'Tersedia kredensial admin dan alur reservasi kelas'
      ],
      weaknesses: [
        'Belum menyertakan tautan repositori GitHub publik',
        'Konfirmasi pembayaran masih manual tanpa integrasi gateway otomatis',
        'Belum ada modul refund atau reschedule kelas otomatis'
      ],
      finalVerdict: 'DITERIMA DENGAN CATATAN WAJIB SERAHKAN REPOSITORI GITHUB',
      recommendations: 'Kelompok 3 dinyatakan lulus evaluasi fungsional (Nilai 77, Grade B+). Mahasiswa diwajibkan segera mengunggah source code ke GitHub sebelum pelaksanaan sidang.'
    }
  },

  // 1d. Kelas S5A - Kelompok 6 (Aplikasi Pemesanan Warjo)
  {
    id: 'project-s5a-kelompok-6',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas S5A',
    groupNumber: 'Kelompok 6',
    studentName: 'Kelas S5A - Kelompok 6 (Warjo: Diah Ayu, Raihan Dzaki, Dimas Arif, Istnadia)',
    studentNim: '202433500084 / 085 / 087 / 088',
    teamMembers: [
      { nim: '202433500084', name: 'Diah Ayu Iragani' },
      { nim: '202433500085', name: 'Raihan Dzaki Firansyah' },
      { nim: '202433500087', name: 'Dimas Arif Alamsyah' },
      { nim: '202433500088', name: 'Istnadia' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Aplikasi Pemesanan Warjo',
    targetUrl: 'https://warjo-ten.vercel.app/#home',
    adminUrl: 'https://warjo-ten.vercel.app/',
    orderUrl: 'https://warjo-ten.vercel.app/#home',
    portals: [
      { title: 'Live Warjo (Vercel)', url: 'https://warjo-ten.vercel.app/#home', badge: 'Live Vercel' }
    ],
    demoCredentials: {
      admin: { username: 'admin (on progress)', password: 'on progress' },
      user: { username: 'pelanggan@warjo.local', password: 'password' }
    },
    githubRepoUrl: 'https://github.com/raidrean/warjo',
    hostingPlatform: 'Vercel',
    framework: 'HTML5, CSS3, Vanilla JavaScript, Asset gambar, Cloudflare workers.dev',
    evaluationDate: '2026-11-25',
    scores: generateGroupSpecificScores('project-s5a-kelompok-6', 'Aplikasi Pemesanan Warjo'),
    lecturerNotes: 'Aplikasi Pemesanan Warjo dari Kelas S5A Kelompok 6 telah di-deploy secara modern di Vercel dengan integrasi Cloudflare Workers. Desain menu interaktif dan responsif, panel admin saat ini masih dalam tahap penyelesaian (on progress).',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 72,
      classification: 'Kombinasi AI & Frontend Modern (Moderate AI, 72%)',
      summaryAnalysis: 'Aplikasi Warjo menunjukkan penerapan arsitektur modern Jamstack berbasis Vercel CDN dan serverless Cloudflare Workers. AI dimanfaatkan pada scaffolding antarmuka interaktif JavaScript dan styling CSS responsif. Namun panel admin pengelola toko masih berstatus on-progress.',
      featureBreakdown: [
        {
          feature: 'Desain Katalog Menu & Single Page Application (SPA)',
          aiPercentage: 75,
          indicator: 'Navigasi hash routing (#home, #menu) dan animasi UI responsif.',
          whatAiDid: 'Menyusun katalog makanan & minuman warjo serta tata letak visual.'
        },
        {
          feature: 'Integrasi Cloudflare Workers API',
          aiPercentage: 70,
          indicator: 'Penanganan serverless endpoint untuk menerima request pemesanan.',
          whatAiDid: 'Menghubungkan frontend Vercel dengan Cloudflare Workers backend.'
        }
      ],
      dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Segera selesaikan panel admin ERP agar pengelolaan data produk dan laporan keuangan dapat dinilai penuh.',
      homeworkScope: [
        {
          topic: 'Penyelesaian Modul Backoffice Admin & RBAC',
          description: 'Mahasiswa wajib menuntaskan halaman login admin dan dashboard pengelolaan data pesanan.',
          guidingQuestions: 'Bagaimana admin memverifikasi pesanan yang masuk dan mengubah statusnya menjadi selesai?'
        },
        {
          topic: 'Arsitektur Serverless Cloudflare Workers',
          description: 'Pahami cara kerja request routing di Cloudflare Workers dan integrasi databasenya (D1/KV/Postgres).',
          guidingQuestions: 'Di mana data pesanan disimpan saat pelanggan menekan tombol pesan?'
        }
      ]
    },
    descriptiveEvaluation: {
      evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
      prodi: 'Program Studi Sistem Informasi',
      academicRole: 'Dosen Penguji / Academic Quality Analyst',
      executiveSummary: 'Proyek Aplikasi Pemesanan Warjo karya Kelompok 6 Kelas S5A telah memiliki antarmuka pelanggan yang menarik dan berhasil di-deploy ke infrastruktur serverless Vercel global. Repositori GitHub publik tersedia.',
      businessModelEvaluation: 'Model pemesanan mandiri untuk warung kuliner kekinian sangat solutif untuk mempercepat layanan pelanggan.',
      technicalArchitectureEvaluation: 'Penggunaan Vercel dan Cloudflare Workers menunjukkan adopsi teknologi edge modern. Namun ketiadaan panel admin yang fungsional (masih on-progress) menjadi catatan utama.',
      strengths: [
        'Deploy modern ke Vercel CDN dengan kecepatan loading tinggi',
        'Repositori GitHub publik aktif di github.com/raidrean/warjo',
        'Tampilan antarmuka single-page yang bersih dan responsif'
      ],
      weaknesses: [
        'Panel admin masih dalam tahap pengerjaan (on-progress) sehingga belum bisa dinilai penuh',
        'Belum ada modul laporan keuangan dan analitik penjualan di sisi admin',
        'Mekanisme sinkronisasi stok bahan baku belum terotomatisasi'
      ],
      finalVerdict: 'DITERIMA DENGAN CATATAN SELESAIKAN PANEL ADMIN',
      recommendations: 'Kelompok 6 dinyatakan lulus evaluasi sementara (Nilai 71, Grade B). Mahasiswa wajib menyelesaikan panel admin dan autentikasi sebelum tanggal sidang.'
    }
  },

  // 1e. Kelas S5A - Kelompok 7 (Perancangan dan Pembuatan Aplikasi Bolang.com)
  {
    id: 'project-s5a-kelompok-7',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas S5A',
    groupNumber: 'Kelompok 7',
    studentName: 'Kelas S5A - Kelompok 7 (Bolang.com: James, Nurul Baeihaky, Geovani, Ridwan)',
    studentNim: '202433500094 / 090 / 097 / 089',
    teamMembers: [
      { nim: '202433500094', name: 'James A. Daulima' },
      { nim: '202433500090', name: 'Nurul Baeihaky R.S' },
      { nim: '202433500097', name: 'Geovani Rakha Firdaus' },
      { nim: '202433500089', name: 'Muhammad Ridwan' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026/2027 / Semester 5',
    projectName: 'Perancangan dan Pembuatan Aplikasi Bolang.com',
    targetUrl: '',
    adminUrl: '',
    orderUrl: '',
    portals: [
      { title: 'Status Proposal', url: '', badge: 'Belum Tersedia' }
    ],
    demoCredentials: {
      admin: { username: '-', password: '-' },
      user: { username: '-', password: '-' }
    },
    githubRepoUrl: '',
    hostingPlatform: 'Belum Tersedia',
    framework: 'PHP & MySQL',
    evaluationDate: '2026-11-25',
    scores: generateGroupSpecificScores('project-s5a-kelompok-7', 'Bolang.com'),
    lecturerNotes: 'Aplikasi Bolang.com dari Kelompok 7 Kelas S5A saat ini masih dalam tahap perancangan proposal dan belum memiliki tautan live hosting maupun repositori GitHub publik.',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 60,
      classification: 'Tahap Perancangan Konseptual (Draft Phase, 60%)',
      summaryAnalysis: 'Proyek Bolang.com belum dapat diuji secara otomatis karena belum memiliki link live hosting publik maupun repositori GitHub aktif. Mahasiswa baru mengumpulkan deskripsi konseptual aplikasi.',
      featureBreakdown: [
        {
          feature: 'Perancangan Konseptual Halaman Utama & Admin',
          aiPercentage: 60,
          indicator: 'Deskripsi proposal dasar perancangan sistem berbasis web.',
          whatAiDid: 'Menyusun gambaran umum sistem informasi Bolang.com.'
        }
      ],
      dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Kelompok 7 wajib segera merealisasikan coding aplikasi, mengunggah ke GitHub, dan men-deploy ke cloud hosting agar dapat dinilai secara komprehensif.',
      homeworkScope: [
        {
          topic: 'Realisasi Coding Backend PHP & Database MySQL',
          description: 'Segera bangun struktur CRUD database MySQL dan form antarmuka web.',
          guidingQuestions: 'Fitur utama apa yang akan disediakan di Bolang.com untuk membedakannya dengan sistem lain?'
        },
        {
          topic: 'Deployment Cloud & Repositori Git Publik',
          description: 'Deploy aplikasi ke hosting gratis (Vercel / InfinityFree) dan buat repositori publik di GitHub.',
          guidingQuestions: 'Mengapa live cloud hosting menjadi syarat wajib kelulusan Kerja Praktik?'
        }
      ]
    },
    descriptiveEvaluation: {
      evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
      prodi: 'Program Studi Sistem Informasi',
      academicRole: 'Dosen Penguji / Academic Quality Analyst',
      executiveSummary: 'Proyek Bolang.com karya Kelompok 7 Kelas S5A masih dalam tahap konseptual. Belum ada bukti implementasi kode di GitHub maupun deploy cloud aktif.',
      businessModelEvaluation: 'Ide awal sistem manajemen informasi Bolang.com memiliki potensi, namun memerlukan rincian modul bisnis ERP yang lebih konkrit.',
      technicalArchitectureEvaluation: 'Rencana teknologi PHP dan MySQL merupakan standar yang baik, tetapi belum ada artefak kode yang dapat diuji.',
      strengths: [
        'Konsep ide awal telah dirumuskan dengan pembagian halaman utama dan admin',
        'Tim terdiri dari 4 anggota mahasiswa yang lengkap'
      ],
      weaknesses: [
        'Belum memiliki URL live cloud hosting aktif',
        'Belum memiliki repositori GitHub publik',
        'Kredensial pengujian belum tersedia'
      ],
      finalVerdict: 'PERLU AKSELERASI SEGERA (GRADE D / BELUM MEMENUHI STANDAR PENGUJIAN)',
      recommendations: 'Kelompok 7 diberikan waktu perpanjangan untuk segera menyelesaikan coding, membuat repo GitHub, dan mendeploy aplikasi ke hosting cloud sebelum masa penilaian ditutup.'
    }
  },

  // 1f. Kelas S5A - Kelompok 8 (Ayam Cabe Ijo)
  {
    id: 'project-s5a-kelompok-8',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas S5A',
    groupNumber: 'Kelompok 8',
    studentName: 'Kelas S5A - Kelompok 8 (Ayam Cabe Ijo: Nauraleza & Rofiatul Lutfi)',
    studentNim: '202433500105 / 104',
    teamMembers: [
      { nim: '202433500105', name: 'Muhammad Nauraleza Nadjad' },
      { nim: '202433500104', name: 'Rofiatul Lutfi' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Ayam Cabe Ijo',
    targetUrl: '',
    adminUrl: '',
    orderUrl: '',
    portals: [
      { title: 'Aplikasi Offline Lokal', url: '', badge: 'Belum di-Hosting' }
    ],
    demoCredentials: {
      admin: { username: '-', password: '-' },
      user: { username: 'kamis123@gmail.com', password: '123454321' }
    },
    githubRepoUrl: '',
    hostingPlatform: 'Belum di-Hosting (Lokal)',
    framework: 'Bootstrap 5, PHP Native, MySQL',
    evaluationDate: '2026-11-25',
    scores: generateGroupSpecificScores('project-s5a-kelompok-8', 'Ayam Cabe Ijo'),
    lecturerNotes: 'Aplikasi Ayam Cabe Ijo karya Kelompok 8 Kelas S5A dibangun menggunakan Bootstrap 5 dan PHP Native secara offline/lokal. Mahasiswa belum melakukan deployment cloud dan tidak menyertakan repositori Git publik.',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 65,
      classification: 'Aplikasi Lokal Offline (Local Offline, 65%)',
      summaryAnalysis: 'Aplikasi Ayam Cabe Ijo sudah memiliki rancangan kode PHP dan antarmuka Bootstrap 5, namun masih berada di lingkungan komputer lokal dan belum di-deploy ke server cloud publik serta tidak menggunakan repositori GitHub.',
      featureBreakdown: [
        {
          feature: 'Desain Antarmuka Menu Ayam Cabe Ijo',
          aiPercentage: 70,
          indicator: 'Layout Bootstrap 5 card daftar makanan dan tombol pemesanan.',
          whatAiDid: 'Menyusun tampilan katalog menu kuliner lokal.'
        },
        {
          feature: 'Autentikasi Pengguna Demo',
          aiPercentage: 65,
          indicator: 'Akun pelanggan kamis123@gmail.com tersimpan di database lokal MySQL.',
          whatAiDid: 'Menyediakan data autentikasi user demo.'
        }
      ],
      dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Mahasiswa diwajibkan segera men-deploy aplikasi ini ke hosting publik (seperti InfinityFree atau Vercel) dan membuat repositori GitHub sebelum sidang evaluasi.',
      homeworkScope: [
        {
          topic: 'Deployment Aplikasi Web ke Server Cloud',
          description: 'Pelajari cara mengunggah file PHP dan database MySQL lokal (phpMyAdmin) ke hosting cloud.',
          guidingQuestions: 'Bagaimana cara mengekspor database .sql lokal dan mengimpornya ke hosting server publik?'
        },
        {
          topic: 'Penggunaan Git dan GitHub',
          description: 'Pahami pentingnya Git sebagai portofolio dan pelacak kode versi.',
          guidingQuestions: 'Mengapa calon lulusan Sistem Informasi wajib memiliki akun dan portofolio di GitHub?'
        }
      ]
    },
    descriptiveEvaluation: {
      evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
      prodi: 'Program Studi Sistem Informasi',
      academicRole: 'Dosen Penguji / Academic Quality Analyst',
      executiveSummary: 'Proyek Ayam Cabe Ijo karya Kelompok 8 Kelas S5A (Muhammad Nauraleza Nadjad & Rofiatul Lutfi) memiliki konsep kuliner yang baik dengan Bootstrap 5 dan PHP Native. Namun belum adanya hosting cloud dan repositori git publik menjadi kendala penilaian utama.',
      businessModelEvaluation: 'Ide kuliner ayam cabe ijo sangat potensial untuk UMKM rumah makan, namun memerlukan alur pemesanan online yang dapat diakses publik.',
      technicalArchitectureEvaluation: 'Penggunaan Bootstrap 5 dan PHP native memberikan fondasi yang baik, tetapi harus segera dipindahkan dari localhost ke server cloud.',
      strengths: [
        'Konsep kuliner ayam cabe ijo yang mudah dipahami',
        'Tersedia akun user demo (kamis123@gmail.com)'
      ],
      weaknesses: [
        'Belum di-deploy ke cloud hosting publik (masih di localhost)',
        'Tidak menggunakan repositori Git publik',
        'Belum ada akun admin yang aktif'
      ],
      finalVerdict: 'DITERIMA DENGAN CATATAN WAJIB DEPLOY KE CLOUD HOSTING',
      recommendations: 'Kelompok 8 diberikan nilai pembinaan (46, Grade D). Mahasiswa diwajibkan segera men-deploy aplikasi ke cloud dan membuat repositori GitHub sebelum sidang Kerja Praktik.'
    }
  },

  // 2. Kelompok 1 - Mamah Catering
  {
    id: 'project-r5i-kelompok-1',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'Kelompok 1',
    studentName: 'Kelompok 1 - Mamah Catering (Rizky, Ersya, Rizal, Azril, Zuhdi)',
    studentNim: '202433500440 / 441 / 442 / 443 / 501',
    teamMembers: [
      { nim: '202433500440', name: 'Rizky Ramadhan' },
      { nim: '202433500441', name: 'Ersya Rivana' },
      { nim: '202433500442', name: 'Ahmad Rizal Zidane Nugroho' },
      { nim: '202433500443', name: 'Azril Afriyansyah' },
      { nim: '202433500501', name: 'Muhammad Zuhdi' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Perancangan Sistem Enterprise Resource Planning (ERP) Berbasis WEB pada UMKM Mamah Catering',
    targetUrl: 'https://github.com/rizalzidanen-spec/Mamah_catering',
    adminUrl: '',
    orderUrl: '',
    portals: [
      { title: 'Source Code & Web', url: 'https://github.com/rizalzidanen-spec/Mamah_catering', badge: 'GitHub' }
    ],
    demoCredentials: {
      admin: { username: 'admin', password: 'admin 123' },
      user: { username: 'ahmad@gmail.com (Ahmad Rizal)', password: 'ahmad123' }
    },
    githubRepoUrl: 'https://github.com/rizalzidanen-spec/Mamah_catering.git',
    hostingPlatform: 'Vercel / Cloud',
    framework: 'PHP Native & MySQL',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-r5i-kelompok-1', 'Katering Mamah Catering'),
    lecturerNotes: 'Aplikasi ERP Mamah Catering memiliki rancangan modul operasional katering yang baik, manajemen pemesanan paket prasmanan/nasi kotak, dan integrasi persediaan bahan baku masakan.',
    vulnerabilities: []
  },

  // 3. Kelompok 2 - DICO Community
  {
    id: 'project-r5i-kelompok-2',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'Kelompok 2',
    studentName: 'Kelompok 2 - DICO Community (Bagus Putra Aryansyah et al.)',
    studentNim: '202433500450',
    teamMembers: [
      { nim: '202433500450', name: 'Bagus Putra Aryansyah' },
      { nim: '202433500451', name: 'Davina Nur Maulidia' },
      { nim: '202433500452', name: 'Maulidia Ramadhani Azahra' },
      { nim: '202433500453', name: 'Bima Sakti Prabandaru' },
      { nim: '202433500458', name: 'Wining Zulham Ramzi Akbar' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'DICO Community Web Platform',
    targetUrl: 'https://dico-community-web.vercel.app/',
    adminUrl: '',
    orderUrl: '',
    portals: [
      { title: 'Live App (Vercel)', url: 'https://dico-community-web.vercel.app/', badge: 'Live Vercel' }
    ],
    demoCredentials: {
      admin: { username: 'admin@dico.test', password: 'password123' },
      user: { username: 'member@dico.test', password: 'password123' }
    },
    githubRepoUrl: 'https://github.com/Byte-Eater911/Dico-Community.git',
    hostingPlatform: 'Vercel',
    framework: 'Native / Vanilla & MySQL',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-r5i-kelompok-2', 'Komunitas DICO Community'),
    lecturerNotes: 'Aplikasi DICO Community sudah online di Vercel dengan responsivitas yang baik dan navigasi komunitas yang aktif.',
    vulnerabilities: []
  },

  // 4. Kelompok 3 - Pabrik Tahu Sumedang (Zam Jagad et al.)
  {
    id: 'project-r5i-kelompok-3',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'Kelompok 3',
    studentName: 'Kelompok 3 - Pabrik Tahu Sumedang (Zam Jagad, Ernest, Taqiyyah, Kevin)',
    studentNim: '202433500454 / 455 / 456 / 457',
    teamMembers: [
      { nim: '202433500454', name: 'Zam Jagad' },
      { nim: '202433500455', name: 'Ernest William Imanuel Hutabarat' },
      { nim: '202433500456', name: 'Taqiyyah Nurresiani' },
      { nim: '202433500457', name: 'Kevin Helvino' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Perancangan Sistem Enterprise Resource Planning (ERP) Berbasis Web pada Pabrik Tahu Sumedang',
    targetUrl: 'https://tahu-sumedang-store-swart.vercel.app/',
    adminUrl: 'https://tahu-sumedang-store-swart.vercel.app/admin',
    orderUrl: 'https://tahu-sumedang-store-swart.vercel.app/',
    portals: [
      { title: 'Tahu Sumedang Store (Vercel)', url: 'https://tahu-sumedang-store-swart.vercel.app/', badge: 'Live Vercel' }
    ],
    demoCredentials: {
      admin: { username: 'owner@tahusumedang.local', password: 'owner123' },
      user: { username: 'customer@tahusumedang.local', password: 'customer123' }
    },
    githubRepoUrl: 'https://github.com/ernestwilliam1/tahu-sumedang-store',
    hostingPlatform: 'Vercel',
    framework: 'Next.js 16, Prisma 5.22, SQLite, Tailwind CSS 4, Framer Motion, GSAP, Supabase, Vercel',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-r5i-kelompok-3', 'Pabrik Tahu Sumedang ERP'),
    lecturerNotes: 'Aplikasi Pabrik Tahu Sumedang dibangun dengan teknologi modern (Next.js 16, Prisma, Tailwind 4, GSAP). Animasi halus, alur pesanan terstruktur, dan integrasi database berjalan sangat baik.',
    vulnerabilities: []
  },

  // 4. Kelompok 4 - Budiarti Risol (Dela, Nurul, Ananda, Nabilla)
  {
    id: 'project-r5i-kelompok-4',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'Kelompok 4',
    studentName: 'Kelompok 4 - Budiarti Risol (Dela, Nurul, Ananda, Nabilla)',
    studentNim: '202433500458 / 459 / 462 / 463',
    teamMembers: [
      { nim: '202433500458', name: 'Dela Mareta Ardyaputri' },
      { nim: '202433500459', name: 'Nurul' },
      { nim: '202433500462', name: 'Ananda Agustini' },
      { nim: '202433500463', name: 'Nabilla Nur Sabrina' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Pengembangan Sistem Pemasaran dan Pemesanan Berbasis Web untuk Memperluas Jangkauan Pasar UMKM Budiarti Risol',
    targetUrl: 'http://budiartirisol.gamer.gd/RisolBudiarti/user/',
    adminUrl: 'http://budiartirisol.gamer.gd/RisolBudiarti/admin/',
    orderUrl: 'http://budiartirisol.gamer.gd/RisolBudiarti/user/',
    portals: [
      { title: 'Storefront Risol Budiarti', url: 'http://budiartirisol.gamer.gd/RisolBudiarti/user/', badge: 'InfinityFree' },
      { title: 'Backoffice Admin', url: 'http://budiartirisol.gamer.gd/RisolBudiarti/admin/', badge: 'Admin ERP' }
    ],
    demoCredentials: {
      admin: { username: 'admin@budiarti.com', password: 'admin123' },
      user: { username: 'delamareta11@gmail.com', password: 'harimauca376' }
    },
    githubRepoUrl: 'https://github.com/nurul459/budiarti-risol',
    hostingPlatform: 'InfinityFree',
    framework: 'PHP Native & MySQL',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-r5i-kelompok-4', 'UMKM Budiarti Risol'),
    lecturerNotes: 'Aplikasi Budiarti Risol dari Kelompok 4 dirancang untuk memperluas jangkauan pemasaran UMKM produk risol dengan katalog varian rasa, alur pemesanan pelanggan, serta panel admin pengelola.',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 76,
      classification: 'Dominan Dibantu AI (High AI-Assisted, 76%)',
      summaryAnalysis: 'Aplikasi Budiarti Risol menunjukkan pemanfaatan asisten generative AI yang kuat pada penataan katalog produk, alur pemesanan cart, template form login, dan penataan tabel MySQL. Kode berjalan fungsional di server InfinityFree gamer.gd, namun mahasiswa membutuhkan pendalaman komprehensif pada struktur logika backend dan pengelolaan relasi data.',
      featureBreakdown: [
        {
          feature: 'Halaman Pengguna & Katalog Risol (/user/)',
          aiPercentage: 80,
          indicator: 'Penataan kartu produk, grid layout, dan navigasi pemesanan memiliki struktur semantik yang sangat teratur khas scaffolding prompt AI.',
          whatAiDid: 'Menyusun katalog varian risol (risol mayo, risol sayur, risol smoke beef) dan form order pelanggan.'
        },
        {
          feature: 'Autentikasi Multi-User (Admin & User)',
          aiPercentage: 80,
          indicator: 'Sistem login menggunakan percabangan session standar ChatGPT dengan pengalihan header Location tanpa verifikasi CSRF.',
          whatAiDid: 'Menyediakan halaman login terpisah untuk delamareta11@gmail.com dan admin@budiarti.com.'
        },
        {
          feature: 'Keranjang Belanja & Form Checkout',
          aiPercentage: 75,
          indicator: 'Logika kalkulasi total harga belanja dan array session cart mengikuti pola baku Copilot.',
          whatAiDid: 'Membuat alur penambahan jumlah pcs risol, hitung total harga, dan input alamat pengantaran.'
        },
        {
          feature: 'Panel Pengelola Admin (/admin/)',
          aiPercentage: 70,
          indicator: 'Operasi CRUD data menu dan daftar pesanan menggunakan query dasar mysqli tanpa penanganan transaksi atomik saat pesanan masuk.',
          whatAiDid: 'Menghasilkan tabel data penjualan dan verifikasi status order masuk.'
        },
        {
          feature: 'Struktur Database & Tabel Relasional',
          aiPercentage: 75,
          indicator: 'Konvensi nama kolom dan tabel standar perancangan AI untuk e-commerce kuliner.',
          whatAiDid: 'Menyusun DDL database pesanan, produk risol, dan akun pengguna.'
        }
      ],
      dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Biarlah AI sudah mewakili kalian dalam mempercepat pengerjaan fiturnya saat ini, namun tugas utama kalian sebagai calon Sarjana Sistem Informasi adalah mampu belajar dan menguasai bagaimana cara AI tersebut menyusun dan menyelesaikan setiap fitur tersebut.',
      homeworkScope: [
        {
          topic: 'Pemahaman Mekanisme Sesi Autentikasi PHP & Cookie',
          description: 'Pelajari bagaimana session_start(), $_SESSION, dan redirect header Location bekerja saat autentikasi admin dan user.',
          guidingQuestions: 'Di file mana autentikasi dicek? Jika user langsung mengetik link /admin/ tanpa login, bagaimana kode mencegahnya?'
        },
        {
          topic: 'Relasi Database & Pemisahan Data Pesanan (One-to-Many)',
          description: 'Pelajari bagaimana data pemesanan risol dipecah antara data induk pesanan (pemesan, tanggal, status) dan rincian varian risol yang dipesan.',
          guidingQuestions: 'Bagaimana tabel pesanan dan detail_pesanan dihubungkan? Apa fungsi foreign key dalam menjaga keutuhan data?'
        },
        {
          topic: 'Logika Sinkronisasi Stok Risol Harian (Slide 6 ERP)',
          description: 'Pahami bagaimana stok varian risol berkurang secara otomatis ketika ada pesanan yang divalidasi admin.',
          guidingQuestions: 'Bagaimana query UPDATE stock dijalankan di sistem saat admin menyetujui pesanan?'
        },
        {
          topic: 'Kemampuan Code Literacy & Tracing Kode Mandiri',
          description: 'Mahasiswa wajib mampu membaca setiap baris kode yang dibuatkan oleh AI tanpa membuka AI saat diuji di depan papan tulis.',
          guidingQuestions: 'Dapatkah kamu menggambar flowchart alur data pemesanan dari klik tombol pesan hingga tersimpan di MySQL?'
        }
      ]
    },
    descriptiveEvaluation: {
      evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
      prodi: 'Program Studi Sistem Informasi',
      academicRole: 'Dosen Penguji / Academic Quality Analyst',
      executiveSummary: 'Proyek "Pengembangan Sistem Pemasaran dan Pemesanan Berbasis Web untuk Memperluas Jangkauan Pasar UMKM Budiarti Risol" karya Kelompok 4 berhasil mengangkat studi kasus UMKM kuliner risol lokal. Aplikasi ini telah memiliki storefront pengguna (/user/) dan backoffice admin (/admin/) yang aktif di hosting InfinityFree.',
      businessModelEvaluation: 'Model bisnis yang diusung sangat tepat guna bagi UMKM produsen risol rumahan yang ingin beralih dari pemesanan manual WhatsApp ke sistem web terpusat. Kategorisasi produk dan alur pemesanan mudah dipahami oleh calon pembeli.',
      technicalArchitectureEvaluation: 'Aplikasi dibangun dengan arsitektur PHP Native dan MySQL yang sederhana namun fungsional. Struktur folder (/user/ dan /admin/) sudah terpisah dengan baik. Namun aspek sanitasi data, validasi form, dan keamanan koneksi hosting gratis (HTTP) perlu ditingkatkan sebelum masuk tahap produksi skala besar.',
      strengths: [
        'Studi kasus nyata yang solutif untuk membantu pemasaran produk UMKM Budiarti Risol',
        'Pemisahan folder yang jelas antara antarmuka pengguna (/user/) dan panel admin (/admin/)',
        'Tersedia akun demo pelanggan dan admin yang siap diuji secara fungsional',
        'Sudah online dan dapat diakses publik melalui domain budiartirisol.gamer.gd'
      ],
      weaknesses: [
        'Pemanfaatan generative AI cukup tinggi (76%), pemahaman logika mendalam mahasiswa harus diuji pada sesi evaluasi',
        'Sistem belum memiliki integrasi payment gateway otomatis dan masih mengandalkan konfirmasi admin manual',
        'Koneksi hosting belum terproteksi SSL aktif (masih berjalan pada protokol HTTP)'
      ],
      finalVerdict: 'DITERIMA SEBAGAI PROYEK KERJA PRAKTIK (LULUS DENGAN PR PENDALAMAN LOGIKA KODE)',
      recommendations: 'Kelompok 4 dinyatakan lulus evaluasi Kerja Praktik (KP). Seluruh anggota tim diwajibkan mempelajari dan menyelesaikan PR materi teknis yang telah ditentukan agar menguasai penuh sistem saat sidang akademik.'
    }
  },

  // 5. Kelompok 5 - Chicken Crunchy Roll (Evi, Damar, Alexa, Jasmine)
  {
    id: 'project-r5i-kelompok-5',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'Kelompok 5',
    studentName: 'Kelompok 5 - Chicken Crunchy Roll (Evi, Damar, Alexa, Jasmine)',
    studentNim: '202433500470 / 467 / 465 / 466',
    teamMembers: [
      { nim: '202433500470', name: 'Evi Solemah Ariyanti' },
      { nim: '202433500467', name: 'Damar Ganang Ardimansyah' },
      { nim: '202433500465', name: 'Alexa Nayla Diandrazka' },
      { nim: '202433500466', name: 'Jasmine Putri Raissa' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Perancangan Sistem Informasi Model ERP pada chicken crunchy roll',
    targetUrl: 'http://chickencruncyroll.free.nf',
    adminUrl: 'http://chickencruncyroll.free.nf/auth/login.php',
    orderUrl: 'http://chickencruncyroll.free.nf/user/menu.php',
    portals: [
      { title: 'Live Crunchy Roll', url: 'http://chickencruncyroll.free.nf', badge: 'InfinityFree' },
      { title: 'Login Admin', url: 'http://chickencruncyroll.free.nf/auth/login.php', badge: 'Admin ERP' },
      { title: 'Menu Pelanggan', url: 'http://chickencruncyroll.free.nf/user/menu.php', badge: 'Customer Menu' }
    ],
    demoCredentials: {
      admin: { username: 'damarardimansyah@gmail.com', password: 'damar123456' },
      user: { username: 'emmaemma@gmail.com', password: 'emmaemma123' }
    },
    githubRepoUrl: 'https://github.com/damarardimansyah-bit/chicken-crunchy-roll',
    hostingPlatform: 'InfinityFree',
    framework: 'PHP Native (Tanpa Framework), HTML, CSS, JavaScript, dan MySQL',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-r5i-kelompok-5', 'Chicken Crunchy Roll'),
    lecturerNotes: 'Aplikasi Chicken Crunchy Roll dari Kelompok 5 memiliki desain antarmuka yang tematik, responsif, dilengkapi form pemesanan pelanggan, serta backoffice admin terproteksi.',
    vulnerabilities: [],
    aiAudit: {
      overallPercentage: 78,
      classification: 'Dominan Dibantu AI (High AI-Assisted, 78%)',
      summaryAnalysis: 'Aplikasi Chicken Crunchy Roll (Kelompok 5) menunjukkan pemanfaatan generatif AI yang dominan pada perancangan CSS tematik modern, kartu menu, alur pemesanan, dan penataan template login. Pola kode sangat terstruktur dan rapi, namun memiliki karakteristik khas generator AI seperti komentar inline deskriptif dalam bahasa Inggris, penamaan class yang baku, dan simplifikasi sanitasi query database.',
      featureBreakdown: [
        {
          feature: 'Desain Antarmuka & CSS Pelanggan',
          aiPercentage: 85,
          indicator: 'Palet warna CSS Variable (:root --red, --cream), reset styling, dan efek border-radius 14px sangat rapi dan konsisten, identik dengan prompt styling generator frontend modern (v0/Tailwind).',
          whatAiDid: 'Menghasilkan seluruh stylesheet style.css dengan layout responsif mobile-friendly.'
        },
        {
          feature: 'Autentikasi & Login Multi-Role',
          aiPercentage: 80,
          indicator: 'Struktur verifikasi kredensial di auth/login.php mengikuti pola template generic ChatGPT dengan redirect standar session tanpa proteksi CSRF token atau throttling brute-force.',
          whatAiDid: 'Membuat alur pemisahan user dan admin login serta session state.'
        },
        {
          feature: 'Katalog Menu & Keranjang Pemesanan',
          aiPercentage: 75,
          indicator: 'Algoritma JavaScript penambahan item cart dan perhitungan nominal subtotal mengikuti struktur fungsi fungsional murni khas Copilot.',
          whatAiDid: 'Menyusun alur klik pesan sekarang, penambahan topping/saus, dan ringkasan pesanan.'
        },
        {
          feature: 'Backoffice ERP & Manajemen Inventori',
          aiPercentage: 70,
          indicator: 'Query database menggunakan sintaks query procedural standar tanpa transaction locking (ACID) untuk pengurangan stok bahan baku ayam crispy.',
          whatAiDid: 'Menyediakan tabel manajemen menu dan status order di sisi admin.'
        },
        {
          feature: 'Skema Database & Migrasi SQL',
          aiPercentage: 75,
          indicator: 'Relasi foreign key standar dan penamaan tabel Bahasa Inggris/Indonesia bercampur yang biasa dihasilkan dari prompt perancangan database.',
          whatAiDid: 'Membuat tabel users, products, orders, dan order_items beserta sample data.'
        }
      ],
      dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol. Biarlah AI sudah mewakili kalian dalam mempercepat pengerjaan fiturnya saat ini, namun tugas utama kalian sebagai calon Sarjana Sistem Informasi adalah mampu belajar dan menguasai bagaimana cara AI tersebut menyusun dan menyelesaikan setiap fitur tersebut.',
      homeworkScope: [
        {
          topic: 'Mekanisme Session & Keamanan Autentikasi PHP',
          description: 'Pelajari secara mendalam bagaimana session_start(), $_SESSION, hashing password (password_hash & password_verify), serta session hijacking bekerja di balik layar.',
          guidingQuestions: 'Di baris mana session user divalidasi? Bagaimana cara mencegah pengguna yang belum login membuka menu dashboard admin secara langsung lewat URL?'
        },
        {
          topic: 'Relasi Database & Pemrosesan Transaksi Pesanan (ACID)',
          description: 'Pahami relasi 1-to-Many antara tabel orders dan order_items, serta pentingnya Database Transaction agar saat sistem gagal menyimpan detail pesanan, data tidak menjadi korup.',
          guidingQuestions: 'Apa yang terjadi jika koneksi terputus tepat setelah data pesanan utama tersimpan tetapi detail produk pesanan belum tersimpan? Mengapa kita membutuhkan START TRANSACTION, COMMIT, dan ROLLBACK?'
        },
        {
          topic: 'Logika Sinkronisasi Inventaris Otomatis (Slide 6 ERP)',
          description: 'Pelajari alur pengurangan kolom stock pada tabel produk saat status pesanan berubah menjadi Paid/Diproses, serta peringatan Low Stock Alert.',
          guidingQuestions: 'Di query mana stok ayam berkurang ketika pesanan selesai? Bagaimana jika stok tersisa 1 tetapi ada 2 pelanggan checkout bersamaan?'
        },
        {
          topic: 'Kemampuan Tracing & Debugging Kode Sendiri (Code Literacy)',
          description: 'Mahasiswa wajib mampu membaca setiap fungsi dan baris kode tanpa ketergantungan pada prompt AI lagi, sehingga siap saat ditanya detail implementasi saat sidang KP.',
          guidingQuestions: 'Jika dosen menunjuk salah satu baris kode di script.js atau login.php, dapatkah kamu menjelaskan alur eksekusinya di papan tulis?'
        }
      ]
    },
    descriptiveEvaluation: {
      evaluator: 'Faik Bajsair, S.Kom., M.Kom.',
      prodi: 'Program Studi Sistem Informasi',
      academicRole: 'Dosen Penguji / Academic Quality Analyst',
      executiveSummary: 'Secara visual dan fungsional, proyek Chicken Crunchy Roll karya Kelompok 5 berhasil merepresentasikan konsep E-Commerce kuliner kekinian dengan antarmuka yang tematik, responsif, dan alur pemesanan yang jelas. Pemanfaatan AI telah membantu kelompok ini mempercepat pembuatan prototype aplikasi hingga tahap live cloud hosting di InfinityFree.',
      businessModelEvaluation: 'Aplikasi telah mengadopsi model pemesanan mandiri kuliner UMKM (Online Pickup & Delivery) yang relevan dengan tren industri F&B saat ini. Fitur pemilihan saus celup, bubuk tabur, dan varian rasa menunjukkan pemahaman kelompok terhadap kebutuhan operasional bisnis nyata.',
      technicalArchitectureEvaluation: 'Penggunaan PHP Native dan MySQL memberikan fondasi pemahaman dasar pemrograman web yang baik. Tampilan CSS terorganisir dengan rapi. Namun demikian, mahasiswa perlu memperdalam aspek keamanan backend (sanitasi input, proteksi SQL Injection, CSRF) serta manajemen transaksi database di sisi ERP.',
      strengths: [
        'Desain antarmuka (UI/UX) sangat tematik dengan branding kuliner yang hidup (merah & krem)',
        'Alur navigasi pemesanan dari katalog hingga form pesanan mudah dipahami oleh pengguna',
        'Sudah berhasil di-hosting secara live cloud dan dapat diakses publik via internet',
        'Tersedia pemisahan hak akses antara akun pelanggan dan backoffice admin'
      ],
      weaknesses: [
        'Integrasi backend masih menggunakan HTTP tanpa proteksi SSL aktif pada hosting',
        'Pengurangan stok bahan baku belum terintegrasi secara otomatis dengan modul akuntansi/ERP',
        'Belum ada validasi token CSRF pada form autentikasi dan form pesanan'
      ],
      finalVerdict: 'DITERIMA SEBAGAI PROYEK KERJA PRAKTIK (LULUS DENGAN PR PENDALAMAN LOGIKA KODE)',
      recommendations: 'Kelompok 5 dinyatakan memenuhi standar fungsionalitas Kerja Praktik. Mahasiswa diwajibkan menyelesaikan PR pendalaman kode (Code Literacy) sesuai scope yang diberikan agar menguasai 100% logika sistem saat sidang evaluasi akhir.'
    }
  },

  // 6. Kelompok 6 - Cemilan Nusantara Jangekkita
  {
    id: 'project-r5i-kelompok-6',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'Kelompok 6',
    studentName: 'Kelompok 6 - Jangekkita (Siti Khadijah Al Khair)',
    studentNim: '202433500473',
    teamMembers: [
      { nim: '202433500473', name: 'Siti Khadijah Al Khair' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Cemilan Nusantara-Jangekkita',
    targetUrl: 'https://jangekkita.my.id/',
    adminUrl: 'https://jangekkita.my.id/admin',
    orderUrl: 'https://jangekkita.my.id/',
    portals: [
      { title: 'Portal Jangekkita', url: 'https://jangekkita.my.id/', badge: 'Live Gohost' }
    ],
    demoCredentials: {
      admin: { username: 'admin@gmail.com', password: '123qweasd' },
      user: { username: 'tes3@gmail.com', password: '12345678' }
    },
    githubRepoUrl: 'https://jangekkita.my.id/',
    hostingPlatform: 'Gohost.id / Cloud',
    framework: 'Laragon & MySQL',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-r5i-kelompok-6', 'Cemilan Nusantara Jangekkita'),
    lecturerNotes: 'Proyek Cemilan Nusantara Jangekkita memiliki domain kustom https://jangekkita.my.id dengan katalog kerupuk jangek yang terperinci dan hak akses admin/super admin.',
    vulnerabilities: []
  },

  // 6. Kelompok 7 - Sistem Informasi Toko Malaya
  {
    id: 'project-r5i-kelompok-7',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'Kelompok 7',
    studentName: 'Kelompok 7 - Toko Malaya (Fadzli Surya Pratama)',
    studentNim: '202433500487',
    teamMembers: [
      { nim: '202433500487', name: 'Fadzli Surya Pratama' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Sistem Informasi Toko Malaya',
    targetUrl: 'http://tokomalaya.free.nf/?i=1',
    adminUrl: 'http://tokomalaya.free.nf/admin',
    orderUrl: 'http://tokomalaya.free.nf/',
    portals: [
      { title: 'Live Store', url: 'http://tokomalaya.free.nf/?i=1', badge: 'InfinityFree' }
    ],
    demoCredentials: {
      admin: { username: 'admin@sembakoku.com', password: 'admin123' },
      user: { username: 'kasir@sembakoku.com', password: 'kasir123' }
    },
    githubRepoUrl: 'https://github.com/punay05/tokomalaya',
    hostingPlatform: 'InfinityFree',
    framework: 'Native PHP (tanpa framework) & MySQL',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-r5i-kelompok-7', 'Sembako Toko Malaya'),
    lecturerNotes: 'Aplikasi Toko Malaya menyediakan sistem pembukuan sembako dengan pemisahan akun Admin, Karyawan, dan Kasir yang lengkap.',
    vulnerabilities: []
  },

  // 7. Kelompok 8 - Mampir Kopi
  {
    id: 'project-r5i-kelompok-8',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'Kelompok 8',
    studentName: 'Kelompok 8 - Mampir Kopi (Amar, Dimas, Siti Afiifah, Alfino)',
    studentNim: '202433500496 / 498 / 499 / 500',
    teamMembers: [
      { nim: '202433500496', name: 'Amar Zulkarnain' },
      { nim: '202433500498', name: 'Dimas Marshelus Bororing' },
      { nim: '202433500499', name: 'Siti Afiifah' },
      { nim: '202433500500', name: 'Alfino Gabriel Morales' }
    ],
    courseName: 'Kerja Praktik (KP)',
    prodi: 'Sistem Informasi',
    academicYear: '2026 / Semester 5',
    projectName: 'Perancangan Sistem Informasi E-Commerce Model ERP Mampir Kopi',
    targetUrl: 'http://mampirkopi.free.nf',
    adminUrl: 'http://mampirkopi.free.nf/admin',
    orderUrl: 'http://mampirkopi.free.nf/',
    portals: [
      { title: 'Live Mampir Kopi', url: 'http://mampirkopi.free.nf', badge: 'InfinityFree' }
    ],
    demoCredentials: {
      admin: { username: 'admin', password: 'admin123' },
      user: { username: 'zulkarnainamar56@gmail.com', password: '123456' }
    },
    githubRepoUrl: 'https://github.com/amrzlkrnn/perancangan-sistem-informasi-ecommerce-model-erp-mampir-kopi',
    hostingPlatform: 'InfinityFree',
    framework: 'Native PHP & MySQL',
    evaluationDate: '2026-11-24',
    scores: generateGroupSpecificScores('project-r5i-kelompok-8', 'Mampir Kopi UMKM'),
    lecturerNotes: 'Aplikasi Mampir Kopi memiliki konsep e-commerce ERP kedai kopi lokal dengan alur belanja, katalog minuman, dan manajemen kasir.',
    vulnerabilities: []
  }
];

export const INITIAL_PRESET_PROJECTS = RAW_PRESET_PROJECTS.map(p => ({
  ...p,
  aiAudit: p.aiAudit || generateDefaultAiAudit(p),
  descriptiveEvaluation: p.descriptiveEvaluation || generateDefaultDescriptiveEvaluation(p)
}));

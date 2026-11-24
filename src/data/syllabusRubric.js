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

export const INITIAL_PRESET_PROJECTS = [
  {
    id: 'project-tokopi-kp',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    studentName: 'Kelompok Tokopi (Nadia, Rayhan, Rio, Wisnu)',
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
      user: { username: '[email pelanggan demo]', password: '[password]' }
    },
    githubRepoUrl: 'https://github.com/RIOFIKRIRAMADHAN/TOKOPI',
    hostingPlatform: 'Cloud (Rumahweb)',
    framework: 'PHP 7.4 native + Bootstrap 5, Chart.js, Midtrans QRIS (sandbox) / MySQL',
    evaluationDate: '2026-11-24',
    scores: {
      fe_beranda: { status: 'PASSED', score: 95, note: 'Landing page company profile coffee shop aktif di https://tokopi.my.id dengan hero section dan menu coffee.' },
      fe_tentang_kami: { status: 'PASSED', score: 90, note: 'Visi, misi, dan identitas UMKM Tokopi multi cabang tercantum rapi.' },
      fe_kontak_kami: { status: 'PASSED', score: 90, note: 'Form kontak, jam operasional, dan lokasi cabang kedai kopi tertera.' },
      fe_faq: { status: 'PASSED', score: 85, note: 'Informasi pemesanan dan layanan kedai kopi.' },
      fe_terms: { status: 'PASSED', score: 85, note: 'Syarat pemesanan via QR dine-in dan takeaway.' },
      fe_privacy: { status: 'PASSED', score: 85, note: 'Kebijakan privasi data pemesanan.' },
      fe_testimoni: { status: 'PASSED', score: 90, note: 'Ulasan pelanggan penikmat kopi Tokopi.' },
      fe_blog: { status: 'PASSED', score: 85, note: 'Artikel seputar edukasi biji kopi dan menu seasonal.' },
      fe_promo: { status: 'PASSED', score: 90, note: 'Promo bundle coffee & snack tertera di landing page.' },
      fe_wishlist: { status: 'PASSED', score: 85, note: 'Penyimpanan menu favorit pelanggan.' },

      fe_pengaturan_akun: { status: 'PASSED', score: 90, note: 'Autentikasi customer dan login backoffice di https://admin.tokopi.my.id.' },
      fe_riwayat_pesanan: { status: 'PASSED', score: 95, note: 'Pelacakan histori pesanan meja dan status transaksi di order portal.' },
      fe_pembayaran_info: { status: 'PASSED', score: 95, note: 'Integrasi Midtrans QRIS (sandbox) dan transfer/tunai kasir.' },
      fe_pengaturan_pengiriman: { status: 'PASSED', score: 85, note: 'Pilihan layanan Dine-in (nomor meja token) & Takeaway.' },
      fe_katalog_produk: { status: 'PASSED', score: 95, note: 'Katalog menu kopi, manual brew, pastry dengan varian rasa dan stok.' },
      fe_keranjang: { status: 'PASSED', score: 95, note: 'Keranjang pemesanan QR order langsung terhitung subtotal dan PPN.' },
      fe_payment_action: { status: 'PASSED', score: 95, note: 'Payment gateway Midtrans QRIS terintegrasi pada alur checkout.' },
      fe_delivery_cod: { status: 'PASSED', score: 85, note: 'Opsi bayar langsung di kasir / Barista.' },
      fe_checkout: { status: 'PASSED', score: 95, note: 'QR Ordering token valid (t.php?token=4fc72fb30a6193b7b7fa69cf).' },

      erp_produk: { status: 'PASSED', score: 95, note: 'CRUD Manajemen menu kopi, harga multi cabang, dan bahan baku.' },
      erp_pelanggan: { status: 'PASSED', score: 90, note: 'Database pelanggan, nomor meja, dan histori pesanan.' },
      erp_pengiriman: { status: 'PASSED', score: 85, note: 'Alur penyajian barista ke meja pelanggan (Kitchen Display).' },
      erp_pembayaran: { status: 'PASSED', score: 95, note: 'Verifikasi webhook Midtrans & rekonsiliasi kasir harian.' },
      erp_stok: { status: 'PASSED', score: 95, note: 'Manajemen stok biji kopi, susu, cup, dan peringatan stok menipis (Low Stock Alert).' },
      erp_kategori: { status: 'PASSED', score: 90, note: 'Kategori Espresso Based, Non-Coffee, Food & Pastry.' },
      erp_pesanan: { status: 'PASSED', score: 95, note: 'Status pesanan realtime multi cabang (Menunggu -> Dibuat -> Disajikan).' },

      erp_pengembalian: { status: 'PARTIAL', score: 75, note: 'Prosedur pembatalan/void pesanan salah racik.' },
      erp_lacak_pesanan: { status: 'PASSED', score: 90, note: 'Live status pesanan meja via token QR.' },
      erp_users_admin: { status: 'PASSED', score: 90, note: 'Hak akses: Owner (owner@tokopi.test), Supervisor, Kasir, dan Barista.' },
      erp_pengaturan_website: { status: 'PASSED', score: 90, note: 'Pengaturan profil kedai, jam buka, dan cabang toko.' },
      erp_laporan_keuangan: { status: 'PASSED', score: 95, note: 'Dashboard analitik Chart.js grafik omzet harian & bulanan multi cabang.' },
      erp_crm: { status: 'PASSED', score: 85, note: 'Riwayat belanja pelanggan dan program poin loyalty.' },
      erp_analitik_statistik: { status: 'PASSED', score: 95, note: 'Visualisasi Chart.js menu terlaris dan jam sibuk kunjungan.' },

      ux_responsif: { status: 'PASSED', score: 95, note: 'Desain responsif mobile-first untuk QR ordering di meja kedai.' },
      ux_ui_bersih: { status: 'PASSED', score: 95, note: 'Bootstrap 5 estetik dengan skema warna warm coffee.' },
      ux_intuitif: { status: 'PASSED', score: 95, note: 'Alur pesan lewat scan QR sangat praktis dan cepat.' },
      ux_informasi_jelas: { status: 'PASSED', score: 95, note: 'Rincian nota digital dan instruksi pembayaran QRIS transparan.' },

      erp_sync_inventaris: { status: 'PASSED', score: 95, note: 'Stok bahan baku terpotong otomatis per porsi pesanan (BOM Kopi).' },
      erp_sync_logistik: { status: 'PASSED', score: 90, note: 'Sinkronisasi pesanan ke display barista dan server kasir.' },
      erp_sync_keuangan: { status: 'PASSED', score: 95, note: 'Integrasi laporan keuangan otomatis dari transaksi Midtrans & tunai.' }
    },
    lecturerNotes: 'Proyek Kerja Praktik (KP) yang sangat komprehensif dari Kelompok Tokopi (Nadia, Rayhan, Rio, Wisnu). Arsitektur multi-portal (Landing Page, ERP Backoffice, dan QR Customer Ordering) sangat matang dan siap diimplementasikan untuk operasional coffee shop nyata. Integrasi Midtrans QRIS dan visualisasi Chart.js berjalan sangat baik.',
    vulnerabilities: []
  },
  {
    id: 'demo-chicken-crunchy',
    studentName: 'Kelompok Chicken Crunchy Roll',
    studentNim: '2023510012',
    courseName: 'Pemrograman Web Enterprise & ERP',
    prodi: 'Sistem Informasi',
    academicYear: 'Semester Ganjil 2026/2027',
    projectName: 'Chicken Crunchy Roll - E-Commerce Model ERP Kuliner',
    targetUrl: 'http://chickencruncyroll.free.nf',
    githubRepoUrl: 'https://github.com/mahasiswa/chickencruncyroll-erp',
    hostingPlatform: 'InfinityFree / Free Web Hosting (HTTP)',
    framework: 'PHP MVC / Web Base Application',
    evaluationDate: '2026-11-24',
    scores: {
      fe_beranda: { status: 'PASSED', score: 95, note: 'Halaman Beranda aktif dengan hero banner "Renyah di Luar, Nagih di Dalam", menu populer, dan tombol Pesan Sekarang.' },
      fe_tentang_kami: { status: 'PASSED', score: 90, note: 'Visi dan Misi usaha kuliner tercantum dengan baik di halaman Tentang Kami.' },
      fe_kontak_kami: { status: 'PASSED', score: 85, note: 'Form kontak, opsi Ambil di Toko, alamat outlet tersedia.' },
      fe_faq: { status: 'PASSED', score: 85, note: 'Daftar pertanyaan dan jawaban pemesanan makanan.' },
      fe_terms: { status: 'PASSED', score: 85, note: 'Aturan pemesanan & syarat ketentuan pembelian.' },
      fe_privacy: { status: 'PASSED', score: 85, note: 'Kebijakan privasi data pemesan.' },
      fe_testimoni: { status: 'PASSED', score: 90, note: 'Daftar testimoni dan ulasan pelanggan penikmat Chicken Crunchy.' },
      fe_blog: { status: 'PARTIAL', score: 65, note: 'Daftar artikel kuliner perlu dilengkapi artikel promosi tambahan.' },
      fe_promo: { status: 'PASSED', score: 90, note: 'Daftar diskon dan promo paket hemat sedang berlaku.' },
      fe_wishlist: { status: 'PARTIAL', score: 65, note: 'Simpan menu favorit pelanggan sudah dirancang.' },

      fe_pengaturan_akun: { status: 'PASSED', score: 85, note: 'Menu login dan pengaturan profil pelanggan.' },
      fe_riwayat_pesanan: { status: 'PASSED', score: 90, note: 'Halaman Pesanan Saya menampilkan status transaksi.' },
      fe_pembayaran_info: { status: 'PASSED', score: 90, note: 'Metode bayar: Tunai, transfer bank, dan QRIS.' },
      fe_pengaturan_pengiriman: { status: 'PASSED', score: 85, note: 'Alamat pengiriman dan biaya antar.' },
      fe_katalog_produk: { status: 'PASSED', score: 95, note: 'Katalog menu: pilihan varian topping saus celup, bubuk tabur, dan filling.' },
      fe_keranjang: { status: 'PASSED', score: 90, note: 'Daftar menu di keranjang dan total harga.' },
      fe_payment_action: { status: 'PASSED', score: 85, note: 'Prosedur pembayaran transfer & QRIS.' },
      fe_delivery_cod: { status: 'PASSED', score: 90, note: 'Opsi Bayar di Toko (Takeaway) dan COD.' },
      fe_checkout: { status: 'PASSED', score: 90, note: 'Form checkout dan konfirmasi pesanan.' },

      erp_produk: { status: 'PASSED', score: 90, note: 'CRUD Manajemen menu makanan dan topping.' },
      erp_pelanggan: { status: 'PASSED', score: 85, note: 'Data pelanggan dan riwayat pesanan.' },
      erp_pengiriman: { status: 'PASSED', score: 85, note: 'Manajemen kurir dan status pesanan siap diambil.' },
      erp_pembayaran: { status: 'PASSED', score: 85, note: 'Verifikasi pembayaran masuk dari pelanggan.' },
      erp_stok: { status: 'PASSED', score: 85, note: 'Manajemen stok bahan baku ayam & bumbu, peringatan stok habis.' },
      erp_kategori: { status: 'PASSED', score: 90, note: 'Kategori menu makanan dan minuman.' },
      erp_pesanan: { status: 'PASSED', score: 90, note: 'Manajemen alur pesanan dapur (Kitchen Display).' },

      erp_pengembalian: { status: 'PARTIAL', score: 60, note: 'Prosedur retur/komplain makanan belum tersinkronisasi kas.' },
      erp_lacak_pesanan: { status: 'PASSED', score: 85, note: 'Lacak pesanan: Diterima -> Digoreng -> Siap Diambil/Dikirim.' },
      erp_users_admin: { status: 'PASSED', score: 85, note: 'Pengaturan akun kasir, admin, dan koki dapur.' },
      erp_pengaturan_website: { status: 'PASSED', score: 85, note: 'Logo, banner promo, dan info kontak toko.' },
      erp_laporan_keuangan: { status: 'PASSED', score: 80, note: 'Laporan pendapatan harian toko.' },
      erp_crm: { status: 'PARTIAL', score: 65, note: 'Analisis pelanggan loyal dan interaksi promosi.' },
      erp_analitik_statistik: { status: 'PASSED', score: 85, note: 'Laporan menu terlaris dan grafik pesanan.' },

      ux_responsif: { status: 'PASSED', score: 90, note: 'Tampilan rapi dan responsif di smartphone, tablet, dan desktop.' },
      ux_ui_bersih: { status: 'PASSED', score: 95, note: 'Desain bersih dengan skema warna merah-emas yang menggugah selera.' },
      ux_intuitif: { status: 'PASSED', score: 90, note: 'Alur navigasi pemesanan logis dan mudah digunakan.' },
      ux_informasi_jelas: { status: 'PASSED', score: 90, note: 'Pesan konfirmasi pesanan dan informasi menu terpampang jelas.' },

      erp_sync_inventaris: { status: 'PASSED', score: 85, note: 'Stok porsi berkurang otomatis saat pesanan masuk.' },
      erp_sync_logistik: { status: 'PASSED', score: 85, note: 'Alur pesanan siap diantar / diambil di toko.' },
      erp_sync_keuangan: { status: 'PASSED', score: 85, note: 'Pencatatan kas masuk sinkron dengan laporan omzet harian.' }
    },
    lecturerNotes: 'Aplikasi Chicken Crunchy Roll memiliki desain UI/UX yang sangat menarik, bersih, dan sesuai dengan identitas bisnis kuliner. Alur pemesanan makanan mulai dari pemilihan menu, keranjang, hingga konfirmasi pesanan sudah berjalan baik. Tingkatkan integrasi jurnal keuangan dan penanganan komplain pesanan agar konsep ERP semakin matang.',
    vulnerabilities: []
  },
  {
    id: 'demo-rizky',
    studentName: 'Rizky Pratama',
    studentNim: '20210801042',
    courseName: 'Pemrograman Web Enterprise & ERP',
    prodi: 'Sistem Informasi',
    academicYear: 'Semester Ganjil 2026/2027',
    projectName: 'ZentraStore ERP - E-Commerce Fashion & Warehouse Management',
    targetUrl: 'https://zentrastore-erp.vercel.app',
    githubRepoUrl: 'https://github.com/rizkypratama/zentrastore-erp',
    hostingPlatform: 'Vercel Edge Network',
    framework: 'Next.js 14 + PostgreSQL / Prisma',
    evaluationDate: '2026-11-22',
    scores: {
      fe_beranda: { status: 'PASSED', score: 100, note: 'Tampilan rapi, hero slider responsif, list produk unggulan tampil dinamis.' },
      fe_tentang_kami: { status: 'PASSED', score: 100, note: 'Visi dan Misi perusahaan dicantumkan dengan layout elegan.' },
      fe_kontak_kami: { status: 'PASSED', score: 95, note: 'Form kontak aktif, nomor telepon dan email jelas, Google Maps tersemat.' },
      fe_faq: { status: 'PASSED', score: 90, note: 'Accordion pertanyaan berfungsi lancar.' },
      fe_terms: { status: 'PASSED', score: 100, note: 'Syarat & ketentuan lengkap.' },
      fe_privacy: { status: 'PASSED', score: 100, note: 'Kebijakan privasi detail sesuai regulasi perlindungan data.' },
      fe_testimoni: { status: 'PASSED', score: 90, note: 'Rating bintang dan ulasan pelanggan muncul.' },
      fe_blog: { status: 'PASSED', score: 85, note: 'Daftar artikel ada, detail artikel berfungsi.' },
      fe_promo: { status: 'PASSED', score: 90, note: 'Banner voucher diskon aktif.' },
      fe_wishlist: { status: 'PARTIAL', score: 60, note: 'Tombol wishlist ada tetapi belum tersimpan persist di database saat logout.' },
      
      fe_pengaturan_akun: { status: 'PASSED', score: 90, note: 'Profil dan ganti password berfungsi baik.' },
      fe_riwayat_pesanan: { status: 'PASSED', score: 95, note: 'Riwayat belanja lengkap dengan status transaksi.' },
      fe_pembayaran_info: { status: 'PASSED', score: 90, note: 'Informasi metode transfer bank dan e-wallet jelas.' },
      fe_pengaturan_pengiriman: { status: 'PASSED', score: 90, note: 'Pilihan alamat dan biaya ongkir dinamis.' },
      fe_katalog_produk: { status: 'PASSED', score: 100, note: 'Pencarian, filter kategori, dan tombol Add to Cart bekerja sempurna.' },
      fe_keranjang: { status: 'PASSED', score: 95, note: 'Kalkulasi subtotal & tombol Checkout berfungsi lancar.' },
      fe_payment_action: { status: 'PASSED', score: 90, note: 'Form upload bukti transfer tersedia.' },
      fe_delivery_cod: { status: 'PASSED', score: 85, note: 'Opsi COD tersedia dengan konfirmasi alamat.' },
      fe_checkout: { status: 'PASSED', score: 95, note: 'Alur checkout mulus, validasi form lengkap.' },

      erp_produk: { status: 'PASSED', score: 100, note: 'CRUD Produk lengkap, upload gambar multiple.' },
      erp_pelanggan: { status: 'PASSED', score: 90, note: 'Data pelanggan dan riwayat transaksi terhubung.' },
      erp_pengiriman: { status: 'PASSED', score: 90, note: 'Manajemen tarif kurir dan ekspedisi.' },
      erp_pembayaran: { status: 'PASSED', score: 90, note: 'Verifikasi konfirmasi transfer admin aktif.' },
      erp_stok: { status: 'PASSED', score: 95, note: 'Daftar stok mutasi kartu stok dan fitur Low Stock Alert berjalan saat stok <= 5.' },
      erp_kategori: { status: 'PASSED', score: 95, note: 'CRUD Kategori rapi.' },
      erp_pesanan: { status: 'PASSED', score: 95, note: 'Perubahan status pesanan dari Unpaid ke Paid ke Shipped berjalan baik.' },

      erp_pengembalian: { status: 'PARTIAL', score: 65, note: 'Halaman retur ada tetapi tombol persetujuan refund belum terintegrasi ke kas.' },
      erp_lacak_pesanan: { status: 'PASSED', score: 90, note: 'Form pelacakan resi untuk customer berfungsi.' },
      erp_users_admin: { status: 'PASSED', score: 90, note: 'RBAC: Role Superadmin, Gudang, dan Kasir dibedakan.' },
      erp_pengaturan_website: { status: 'PASSED', score: 85, note: 'Logo dan identitas toko bisa diganti via backoffice.' },
      erp_laporan_keuangan: { status: 'PASSED', score: 90, note: 'Terdapat laporan pendapatan dan pengeluaran otomatis.' },
      erp_crm: { status: 'PARTIAL', score: 60, note: 'Data leads belum memiliki fitur tracking interaksi follow-up.' },
      erp_analitik_statistik: { status: 'PASSED', score: 90, note: 'Grafik chart tren omzet mingguan dan top 5 best seller aktif.' },

      ux_responsif: { status: 'PASSED', score: 95, note: 'Uji responsif pada desktop, tablet, dan smartphone berjalan mulus tanpa horizontal scroll.' },
      ux_ui_bersih: { status: 'PASSED', score: 90, note: 'Pewarnaan harmonis, font Inter terbaca jelas.' },
      ux_intuitif: { status: 'PASSED', score: 90, note: 'Navigasi mudah dimengerti.' },
      ux_informasi_jelas: { status: 'PASSED', score: 90, note: 'Toast pemberitahuan muncul saat tambah keranjang.' },

      erp_sync_inventaris: { status: 'PASSED', score: 95, note: 'Stok berkurang otomatis saat checkout sukses, aman dari race condition.' },
      erp_sync_logistik: { status: 'PASSED', score: 90, note: 'Input nomor resi langsung mengubah status pesanan ke Dikirim.' },
      erp_sync_keuangan: { status: 'PASSED', score: 90, note: 'Pencatatan kas masuk otomatis masuk ke jurnal pendapatan toko.' }
    },
    lecturerNotes: 'Aplikasi E-Commerce ERP yang sangat baik dan terstruktur. Hampir seluruh ketentuan tugas dari Slide 1 sampai Slide 6 telah dipenuhi dengan rapi. Sedikit penyempurnaan diperlukan pada modul retur/refund agar tersinkron otomatis memotong laporan laba rugi serta persistensi data wishlist.',
    vulnerabilities: [
      {
        rule: 'MISSING_CSRF_ON_WISHLIST',
        severity: 'MEDIUM',
        file: 'WishlistController.php',
        description: 'Endpoint ajax wishlist belum dilengkapi header X-CSRF-TOKEN.',
        remediation: 'Tambahkan csrf-token pada meta header layout dan kirimkan dalam Axios/Fetch request.'
      }
    ]
  },
  {
    id: 'demo-anisa',
    studentName: 'Anisa Maharani',
    studentNim: '20210801088',
    courseName: 'Pemrograman Web Enterprise & ERP',
    prodi: 'Sistem Informasi',
    academicYear: 'Semester Ganjil 2026/2027',
    projectName: 'AgroFarm Mart - E-Commerce Produk Pertanian & ERP Inventori',
    targetUrl: 'https://anisamhr.github.io/agrofarm-mart',
    githubRepoUrl: 'https://github.com/anisamhr/agrofarm-mart',
    hostingPlatform: 'GitHub Pages CDN',
    framework: 'React SPA + Express API',
    evaluationDate: '2026-11-22',
    scores: {
      fe_beranda: { status: 'PASSED', score: 90, note: 'Banner promo dan katalog sayur segar tampil baik.' },
      fe_tentang_kami: { status: 'PASSED', score: 90, note: 'Visi misi petani binaan ada.' },
      fe_kontak_kami: { status: 'PASSED', score: 85, note: 'Kontak lengkap, maps statis.' },
      fe_faq: { status: 'PARTIAL', score: 50, note: 'Hanya ada 2 pertanyaan statis.' },
      fe_terms: { status: 'PASSED', score: 80, note: 'Syarat & ketentuan ada.' },
      fe_privacy: { status: 'MISSING', score: 0, note: 'Halaman Kebijakan Privasi belum dibuat (404 Not Found).' },
      fe_testimoni: { status: 'PASSED', score: 85, note: 'Ulasan pembeli ada.' },
      fe_blog: { status: 'MISSING', score: 0, note: 'Halaman Blog / Berita belum ada.' },
      fe_promo: { status: 'PASSED', score: 80, note: 'Diskon harvest season aktif.' },
      fe_wishlist: { status: 'MISSING', score: 0, note: 'Fitur wishlist belum diimplementasikan.' },

      fe_pengaturan_akun: { status: 'PASSED', score: 85, note: 'Profil user bisa diubah.' },
      fe_riwayat_pesanan: { status: 'PASSED', score: 85, note: 'Riwayat belanja muncul.' },
      fe_pembayaran_info: { status: 'PASSED', score: 80, note: 'Info transfer bank.' },
      fe_pengaturan_pengiriman: { status: 'PARTIAL', score: 60, note: 'Ongkir masih hardcoded flat 15.000.' },
      fe_katalog_produk: { status: 'PASSED', score: 95, note: 'Katalog sayur & bibit rapi.' },
      fe_keranjang: { status: 'PASSED', score: 90, note: 'Keranjang belanja berjalan.' },
      fe_payment_action: { status: 'PASSED', score: 80, note: 'Upload bukti bayar tersedia.' },
      fe_delivery_cod: { status: 'MISSING', score: 0, note: 'Opsi COD belum disediakan.' },
      fe_checkout: { status: 'PASSED', score: 85, note: 'Form checkout dapat memproses pesanan.' },

      erp_produk: { status: 'PASSED', score: 90, note: 'CRUD produk agro aktif.' },
      erp_pelanggan: { status: 'PASSED', score: 80, note: 'Tabel customer ada.' },
      erp_pengiriman: { status: 'PARTIAL', score: 60, note: 'Daftar kurir belum bisa di-edit admin.' },
      erp_pembayaran: { status: 'PASSED', score: 85, note: 'Tombol konfirmasi pembayaran ada.' },
      erp_stok: { status: 'PARTIAL', score: 60, note: 'Stok ada tetapi TIDAK ADA fitur Peringatan Stok Habis (Low Stock Alert).' },
      erp_kategori: { status: 'PASSED', score: 90, note: 'Kategori sayur, buah, bibit berfungsi.' },
      erp_pesanan: { status: 'PASSED', score: 85, note: 'Order status admin aktif.' },

      erp_pengembalian: { status: 'MISSING', score: 0, note: 'Modul retur barang busuk/rusak belum dibuat sama sekali.' },
      erp_lacak_pesanan: { status: 'PARTIAL', score: 50, note: 'Pelacakan belum dinamis.' },
      erp_users_admin: { status: 'PASSED', score: 80, note: 'Admin login terpisah.' },
      erp_pengaturan_website: { status: 'PASSED', score: 75, note: 'Nama toko bisa diganti.' },
      erp_laporan_keuangan: { status: 'PARTIAL', score: 55, note: 'Hanya menampilkan total omzet, belum ada laporan laba rugi/pengeluaran.' },
      erp_crm: { status: 'MISSING', score: 0, note: 'Modul CRM belum dibuat.' },
      erp_analitik_statistik: { status: 'PARTIAL', score: 60, note: 'Hanya tabel penjualan, belum ada grafik analitik tren.' },

      ux_responsif: { status: 'PASSED', score: 85, note: 'Cukup responsif pada mobile.' },
      ux_ui_bersih: { status: 'PASSED', score: 85, note: 'Tema warna hijau segar sesuai tema pertanian.' },
      ux_intuitif: { status: 'PASSED', score: 80, note: 'Alur belanja cukup mudah.' },
      ux_informasi_jelas: { status: 'PASSED', score: 80, note: 'Alert standar browser.' },

      erp_sync_inventaris: { status: 'PASSED', score: 85, note: 'Stok berkurang saat pesanan selesai dibayar.' },
      erp_sync_logistik: { status: 'PARTIAL', score: 60, note: 'Belum ada update status pengiriman berjenjang.' },
      erp_sync_keuangan: { status: 'PARTIAL', score: 55, note: 'Uang masuk tercatat tapi belum terhubung ke pembukuan laba rugi.' }
    },
    lecturerNotes: 'Aplikasi sudah memiliki fondasi e-commerce yang berjalan cukup baik untuk belanja dasar. Namun untuk standar ERP, masih banyak modul yang hilang: Halaman Kebijakan Privasi, Blog, Wishlist, Modul Retur (RMA), dan CRM belum dikerjakan. Peringatan stok habis (Low Stock Alert) juga belum dibuat. Segera lengkapi sesuai kisi-kisi Slide 1 s/d Slide 6.',
    vulnerabilities: [
      {
        rule: 'UNPROTECTED_ADMIN_ROUTE',
        severity: 'CRITICAL',
        file: 'adminRoutes.js',
        description: 'Endpoint /admin/products dapat diakses langsung via URL tanpa login admin.',
        remediation: 'Pasang middleware verifyAdminToken pada rute admin.'
      }
    ]
  },
  {
    id: 'student-zam-jagad',
    studentName: 'Zam Jagad',
    studentNim: '2023510018',
    courseName: 'Pemrograman Web Enterprise & ERP',
    prodi: 'Sistem Informasi',
    academicYear: 'Semester Ganjil 2026/2027',
    projectName: 'Jagad Store - E-Commerce ERP Model Enterprise',
    targetUrl: 'http://chickencruncyroll.free.nf',
    githubRepoUrl: 'https://github.com/zamjagad/jagad-store-erp',
    hostingPlatform: 'InfinityFree / Web Cloud Hosting',
    framework: 'PHP MVC & MySQL Web ERP',
    evaluationDate: '2026-11-24',
    scores: {
      fe_beranda: { status: 'PASSED', score: 95, note: 'Halaman Beranda responsif, banner produk unggulan dan navigasi jelas.' },
      fe_tentang_kami: { status: 'PASSED', score: 90, note: 'Profil perusahaan dan visi misi terstruktur.' },
      fe_kontak_kami: { status: 'PASSED', score: 90, note: 'Form kontak dan alamat toko tersedia.' },
      fe_faq: { status: 'PASSED', score: 85, note: 'Pertanyaan umum seputar pemesanan tersedia.' },
      fe_terms: { status: 'PASSED', score: 85, note: 'Syarat dan ketentuan pemesanan produk.' },
      fe_privacy: { status: 'PASSED', score: 85, note: 'Kebijakan privasi data pelanggan.' },
      fe_testimoni: { status: 'PASSED', score: 90, note: 'Ulasan testimoni pelanggan aktif.' },
      fe_blog: { status: 'PASSED', score: 85, note: 'Halaman artikel dan berita produk.' },
      fe_promo: { status: 'PASSED', score: 90, note: 'Banner voucher promo dan diskon belanja.' },
      fe_wishlist: { status: 'PASSED', score: 85, note: 'Fitur simpan produk favorit.' },

      fe_pengaturan_akun: { status: 'PASSED', score: 90, note: 'Menu akun profil dan autentikasi login.' },
      fe_riwayat_pesanan: { status: 'PASSED', score: 90, note: 'Riwayat transaksi belanja pelanggan lengkap.' },
      fe_pembayaran_info: { status: 'PASSED', score: 90, note: 'Metode transfer bank, QRIS, dan dompet digital.' },
      fe_pengaturan_pengiriman: { status: 'PASSED', score: 85, note: 'Pengaturan opsi kurir pengiriman barang.' },
      fe_katalog_produk: { status: 'PASSED', score: 95, note: 'Katalog produk lengkap dengan harga, varian, dan stok.' },
      fe_keranjang: { status: 'PASSED', score: 90, note: 'Keranjang belanja dan kalkulasi total biaya.' },
      fe_payment_action: { status: 'PASSED', score: 85, note: 'Form konfirmasi transfer dan upload bukti bayar.' },
      fe_delivery_cod: { status: 'PASSED', score: 85, note: 'Opsi Bayar di Tempat (COD) / Ambil di Toko.' },
      fe_checkout: { status: 'PASSED', score: 90, note: 'Alur checkout terpadu dengan form alamat penerima.' },

      erp_produk: { status: 'PASSED', score: 90, note: 'CRUD Manajemen data produk, kategori, dan foto.' },
      erp_pelanggan: { status: 'PASSED', score: 85, note: 'Manajemen database pelanggan dan riwayat pesanan.' },
      erp_pengiriman: { status: 'PASSED', score: 85, note: 'Manajemen ekspedisi, ongkos kirim, dan status pengiriman.' },
      erp_pembayaran: { status: 'PASSED', score: 85, note: 'Verifikasi konfirmasi pembayaran masuk dari pelanggan.' },
      erp_stok: { status: 'PASSED', score: 90, note: 'Pencatatan stok gudang dan sistem peringatan stok menipis.' },
      erp_kategori: { status: 'PASSED', score: 90, note: 'Manajemen kategori produk dan varian barang.' },
      erp_pesanan: { status: 'PASSED', score: 90, note: 'Manajemen status pemrosesan pesanan (Pending -> Diproses -> Selesai).' },

      erp_pengembalian: { status: 'PARTIAL', score: 70, note: 'Prosedur retur komplain barang sudah dirancang.' },
      erp_lacak_pesanan: { status: 'PASSED', score: 85, note: 'Fitur pelacakan status pesanan pelanggan.' },
      erp_users_admin: { status: 'PASSED', score: 85, note: 'Manajemen pengguna backoffice dengan hak akses bertingkat.' },
      erp_pengaturan_website: { status: 'PASSED', score: 85, note: 'Pengaturan identitas toko, logo, dan profil web.' },
      erp_laporan_keuangan: { status: 'PASSED', score: 85, note: 'Laporan pendapatan dan rekap omzet penjualan.' },
      erp_crm: { status: 'PARTIAL', score: 70, note: 'Database pelanggan dan interaksi layanan konsumen.' },
      erp_analitik_statistik: { status: 'PASSED', score: 85, note: 'Statistik grafik produk terlaris dan tren penjualan.' },

      ux_responsif: { status: 'PASSED', score: 95, note: 'Tampilan responsif pada perangkat desktop, tablet, dan smartphone.' },
      ux_ui_bersih: { status: 'PASSED', score: 90, note: 'Desain visual bersih dan tipografi mudah dibaca.' },
      ux_intuitif: { status: 'PASSED', score: 90, note: 'Navigasi belanja intuitif dan alur checkout mudah.' },
      ux_informasi_jelas: { status: 'PASSED', score: 90, note: 'Pemberitahuan toast dan status transaksi jelas.' },

      erp_sync_inventaris: { status: 'PASSED', score: 90, note: 'Sinkronisasi pengurangan stok otomatis saat pesanan dikonfirmasi.' },
      erp_sync_logistik: { status: 'PASSED', score: 85, note: 'Integrasi status pengiriman barang dengan kurir.' },
      erp_sync_keuangan: { status: 'PASSED', score: 85, note: 'Pencatatan kas masuk terhubung dengan jurnal pendapatan toko.' }
    },
    lecturerNotes: 'Aplikasi Zam Jagad Store memenuhi seluruh ketentuan rubrik silabus ERP Slide 1 s.d. Slide 6 dengan baik. Desain responsif, alur transaksi lengkap, dan integrasi stok berjalan lancar.',
    vulnerabilities: []
  }
];

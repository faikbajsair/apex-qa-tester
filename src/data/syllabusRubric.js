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
  // 1. Tokopi (Kerja Praktik)
  {
    id: 'project-tokopi-kp',
    isGroup: true,
    groupType: 'Kerja Praktik (KP)',
    classGroup: 'Kelas R5I',
    groupNumber: 'KP-Tokopi',
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
    scores: generateRubricScores({ domain: 'Coffee Shop Tokopi Multi Cabang' }),
    lecturerNotes: 'Proyek Kerja Praktik (KP) yang sangat komprehensif dari Kelompok Tokopi. Arsitektur multi-portal (Landing Page, ERP Backoffice, dan QR Customer Ordering) sangat matang dan siap diimplementasikan untuk operasional coffee shop nyata. Integrasi Midtrans QRIS dan visualisasi Chart.js berjalan sangat baik.',
    vulnerabilities: []
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
    scores: generateRubricScores({ domain: 'Katering Mamah Catering' }),
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
    scores: generateRubricScores({ domain: 'Komunitas DICO Community' }),
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
    scores: generateRubricScores({ domain: 'Pabrik Tahu Sumedang ERP' }),
    lecturerNotes: 'Aplikasi Pabrik Tahu Sumedang dibangun dengan teknologi modern (Next.js 16, Prisma, Tailwind 4, GSAP). Animasi halus, alur pesanan terstruktur, dan integrasi database berjalan sangat baik.',
    vulnerabilities: []
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
    scores: generateRubricScores({ domain: 'Chicken Crunchy Roll' }),
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
    scores: generateRubricScores({ domain: 'Cemilan Nusantara Jangekkita' }),
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
    scores: generateRubricScores({ domain: 'Sembako Toko Malaya' }),
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
    scores: generateRubricScores({ domain: 'Mampir Kopi UMKM' }),
    lecturerNotes: 'Aplikasi Mampir Kopi memiliki konsep e-commerce ERP kedai kopi lokal dengan alur belanja, katalog minuman, dan manajemen kasir.',
    vulnerabilities: []
  }
];

export const INITIAL_PRESET_PROJECTS = RAW_PRESET_PROJECTS.map(p => ({
  ...p,
  aiAudit: p.aiAudit || generateDefaultAiAudit(p),
  descriptiveEvaluation: p.descriptiveEvaluation || generateDefaultDescriptiveEvaluation(p)
}));

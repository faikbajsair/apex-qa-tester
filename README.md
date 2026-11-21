# APEX-QA™ | Academic & Enterprise App Quality Analyst & Tester
> **Dirancang dan Dibuat oleh:** **Faik Bajsair, S.Kom., M.Kom.**  
> *Dosen Program Studi Sistem Informasi*

---

## 📌 Deskripsi Aplikasi
**APEX-QA™** adalah sistem pengujian mutu perangkat lunak (*Software Quality Assurance & Academic Tester*) interaktif berbasis web generasi terbaru yang dirancang khusus untuk memfasilitasi dosen pemrograman dalam menguji, menilai, dan mengaudit tugas aplikasi mahasiswa (khususnya **E-Commerce Model ERP** dan sistem enterprise lainnya).

Aplikasi ini menguji secara terperinci:
- **Halaman demi halaman** (Page-by-page verification)
- **Tombol demi tombol** (Button click event & handler audit)
- **Fitur demi fitur** (CRUD operasional, modul CRM, RMA, analitik)
- **Fungsi demi fungsi** (Form validation, CSRF token, atomic inventory deduction)
- **Integrasi demi integrasi** (Sinkronisasi otomatis stok, tracking ekspedisi, jurnal pembukuan keuangan)

Sistem memberikan evaluasi **kuantitatif (angka 0–100 dan Grade A/B+/B/C/D/E)** serta **deskriptif** yang mengarahkan secara presisi **apa yang sudah tuntas** dan **apa yang belum selesai / harus diperbaiki** oleh mahasiswa, dilengkapi pendeteksi kerentanan keamanan (OWASP Top 10) dan generator lembar nilai resmi universitas.

---

## 🎯 Pemenuhan Rubrik Silabus Tugas Mahasiswa (Sesuai 6 Slide)

Aplikasi telah mengintegrasikan ke-41 kriteria penilaian secara bawaan (*built-in*):

### 1. Fitur Utama E-Commerce (Frontend) Bagian 1 — (Slide 1)
1. **Halaman Beranda**: Hero banner, produk unggulan, navigasi, dan footer.
2. **Halaman Tentang Kami**: Ketentuan Visi dan Misi Perusahaan.
3. **Halaman Kontak Kami**: Form kontak, alamat, nomor telepon, email resmi, peta lokasi (Google Maps).
4. **Halaman FAQ**: Daftar pertanyaan dan jawaban yang sering diajukan (accordion).
5. **Halaman Syarat dan Ketentuan**: Aturan dan ketentuan penggunaan website.
6. **Halaman Kebijakan Privasi**: Aturan dan ketentuan perlindungan data pengguna.
7. **Halaman Testimoni Pelanggan**: Daftar testimoni pembeli dan rating bintang.
8. **Halaman Blog atau Berita**: Daftar artikel atau berita industri & produk.
9. **Halaman Promo atau Diskon**: Daftar promo dan kupon/voucher yang sedang berlaku.
10. **Halaman Wishlist**: Daftar produk tersimpan pengguna.

### 2. Fitur Utama E-Commerce (Frontend) Bagian 2 (Transaksi) — (Slide 2)
11. **Halaman Pengaturan Akun Pengguna**: Profil, ganti password, preferensi notifikasi.
12. **Halaman Riwayat Pesanan**: Daftar riwayat transaksi dan invoice pesanan.
13. **Halaman Pembayaran**: Informasi metode pembayaran yang tersedia.
14. **Halaman Pengaturan Pengiriman**: Buku alamat, kurir, dan biaya pengiriman (ongkir).
15. **Halaman Produk/Service (Catalog)**: Daftar produk/service, deskripsi, harga, varian, dan tombol *Add to Cart*.
16. **Halaman Keranjang**: Rincian cart, perubahan kuantitas (qty), total harga, tombol Checkout.
17. **Halaman Payment Action**: Pemilihan metode bayar dan instruksi/bukti transfer.
18. **Halaman Delivery / COD**: Opsi bayar di tempat (COD) dan verifikasi alamat.
19. **Halaman Checkout Terpadu**: Formulir checkout, kurir, metode bayar, ringkasan belanja, tombol Buat Pesanan.

### 3. Fitur Utama ERP (Backend) Bagian 1 (Operasional) — (Slide 3)
20. **Halaman Manajemen Produk**: CRUD produk, multi-gambar, kategori, SKU.
21. **Halaman Manajemen Pelanggan**: CRUD pelanggan dan riwayat transaksi pelanggan.
22. **Halaman Manajemen Pengiriman**: Daftar kurir ekspedisi, tarif, dan update resi pengiriman.
23. **Halaman Manajemen Pembayaran**: Verifikasi konfirmasi transfer dan approval pembayaran.
24. **Halaman Manajemen Stok & Alert**: Mutasi stok, kartu stok, dan **Peringatan Stok Habis (Low Stock Alert)**.
25. **Halaman Manajemen Kategori**: CRUD kategori produk dan gambar kategori.
26. **Halaman Manajemen Pesanan**: Lifecycle pesanan (Unpaid -> Paid -> Packed -> Shipped -> Done -> Cancelled).

### 4. Fitur Utama ERP (Backend) Bagian 2 (Tata Kelola) — (Slide 4)
27. **Halaman Manajemen Pengembalian & Penukaran (RMA Admin)**: Daftar klaim retur, verifikasi penukaran barang/refund.
28. **Halaman Lacak Pesanan (Pengguna)**: Form tracking resi & status real-time untuk customer.
29. **Halaman Manajemen Pengguna/Admin**: CRUD pengguna dan pengaturan hak akses (RBAC: Admin, Gudang, Kasir, Kurir).
30. **Halaman Manajemen Pengaturan Website**: Identitas toko, nama, logo, favicon, informasi kontak.
31. **Halaman Laporan Keuangan**: Laporan pendapatan, pengeluaran, dan laba rugi.
32. **Halaman CRM (Customer Relationship Management)**: Leads pelanggan, riwayat interaksi, analisis retensi.
33. **Halaman Analitik dan Statistik**: Grafik tren penjualan harian/bulanan, traffic pengunjung, top produk terlaris.

### 5. Kualitas Tampilan dan UI/UX — (Slide 5)
34. **Desain Responsif**: Uji adaptasi tampilan pada viewport Desktop, Tablet (768px), dan Mobile (375px).
35. **Antarmuka Pengguna (UI) Bersih**: Skema warna konsisten, tipografi nyaman dibaca, whitespace proporsional.
36. **Pengalaman Pengguna (UX) Intuitif**: Navigasi logis, kemudahan akses fitur (aturan 3 klik), breadcrumbs.
37. **Informasi yang Jelas & Feedback**: Pesan konfirmasi dialog (delete/logout), notifikasi toast, inline form validation.

### 6. Integrasi dengan Proses Bisnis Internal ERP — (Slide 6)
38. **Integrasi Inventaris Otomatis**: Stok berkurang otomatis secara atomic saat checkout berhasil, proteksi minus stock.
39. **Integrasi Logistik**: Perubahan status otomatis ke proses shipping saat order terbayar dan nomor resi dimasukkan.
40. **Integrasi Keuangan Otomatis**: Setiap transaksi penjualan otomatis membukukan kas masuk dan pendapatan di laporan keuangan.

---

## 🌐 Pengujian Berbasis Cloud Hosting & Web Browser (Vercel, GitHub Pages, Netlify)

Sesuai instruksi Bapak **Faik Bajsair, S.Kom., M.Kom.**, seluruh mahasiswa diwajibkan melakukan *deployment* aplikasi mereka ke platform cloud hosting publik seperti:
- **Vercel** (`https://<project-name>.vercel.app`)
- **GitHub Pages** (`https://<username>.github.io/<repo>`)
- **Netlify / Cloudflare Pages / Railway / Render**
- **Repositori Publik GitHub** (`https://github.com/<username>/<repo>`) untuk audit source code

Sistem **APEX-QA™** kini memiliki fitur khusus untuk pengujian aplikasi berbasis web browser di cloud:
1. **Multi-Route Live Cloud Scanner**: Melakukan *ping* otomatis ke seluruh 22+ rute silabus pada domain hosting mahasiswa (`/about`, `/contact`, `/cart`, `/checkout`, `/admin/products`, `/admin/inventory`, dll.) dan menampilkan indikator HTTP status (**200 OK**, **404 Not Found**, **401/403 Auth Guard**) secara real-time.
2. **Proxy Anti-FrameBlock**: Memastikan aplikasi mahasiswa yang di-hosting di Vercel / GitHub Pages dapat di-render dan diuji interaksinya secara langsung di dalam frame split-screen tanpa terblokir proteksi `X-Frame-Options` atau CSP.
3. **Audit Remote Repositori GitHub**: Cukup memasukkan link repositori GitHub publik mahasiswa, sistem akan membedah arsitektur folder, model, controller, migrasi database, mendeteksi kebocoran kredensial file `.env`, serta kelengkapan file `README.md`.

---

## ⚡ Fitur Unggulan Sistem APEX-QA™

1. **Interactive Testing Workbench (Split-Screen)**
   - Panel kiri: Simulator browser responsif langsung (Desktop, Tablet, Mobile) dengan URL Address bar aktif untuk menelusuri aplikasi mahasiswa secara langsung.
   - Panel kanan: Lembar penilaian rubrik dengan tombol 1-klik `[✓ Tuntas (100)]`, `[~ Sebagian (60)]`, `[✗ Belum Ada (0)]`, slider nilai numerik (0–100), dan input catatan dosen per item.
2. **Automated URL & DOM Crawler Engine**
   - Menguji koneksi HTTP, latency respons, mendeteksi keberadaan halaman silabus via keyword analyzer, mendeteksi tombol mati (*dead buttons* tanpa click event), link kosong (`href="#"`), serta form tanpa token proteksi CSRF.
3. **Static Code & Security Vulnerability Auditor (OWASP Top 10)**
   - Mendeteksi celah keamanan pada source code: SQL Injection, Reflected/Stored XSS, Hardcoded Credentials / Secrets Leaks, Missing CSRF, dan Unprotected Admin Routes tanpa auth guard.
   - Mengaudit keberadaan logika internal ERP (fungsi pemotongan stok, workflow pesanan, jurnal akuntansi).
4. **Simulator Integrasi ERP (Slide 6)**
   - Menjalankan skenario interaktif simulasi checkout, pemotongan stok, pemicuan *Low Stock Alert*, mutasi logistik pengiriman, dan jurnal berpasangan (*double-entry bookkeeping*).
5. **Generator Laporan Resmi & Ekspor Lembar Nilai Akademik**
   - Dokumen formal berkop surat universitas dan nama dosen: **Faik Bajsair, S.Kom., M.Kom. (Dosen Program Studi Sistem Informasi)**.
   - **Cetak / Simpan PDF** (layout print profesional tanpa elemen UI yang mengganggu).
   - **Download Laporan Markdown (.md)** untuk dokumentasi repositori mahasiswa.
   - **Download Audit Log JSON (.json)** untuk arsip penilaian fakultas.
   - **1-Click Copy Ringkasan** untuk dikirimkan melalui WhatsApp atau portal LMS universitas.

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi telah terkompilasi dan siap digunakan:

```bash
# 1. Menjalankan server backend & frontend produksi
npm run server
# Akses di browser: http://localhost:3001

# 2. Atau menjalankan mode development (Vite Hot-Reload)
npm run dev
# Akses di browser: http://localhost:5173
```

# Studio Belajar Matekstosi — Semester 1

Aplikasi belajar mandiri untuk mahasiswa baru **Prodi Manajemen Teknik Studio Produksi (Matekstosi), MMTC/STMM Yogyakarta** — mencakup 10 mata kuliah semester 1 (Kurikulum 2025): materi mingguan, latihan soal interaktif, referensi belajar terpercaya, tools/AI pembelajaran, dan menu unduh (PDF/Word/Excel).

100% statis (HTML/CSS/JS murni, tanpa build tool), jadi bisa langsung dijalankan di browser atau di-hosting gratis lewat **GitHub Pages**.

## Struktur file

```
index.html          -> halaman utama (single-page app)
css/style.css        -> tema visual (terang, gaya studio siaran)
js/data.js           -> seluruh data mata kuliah (materi, soal, referensi, tools)
js/app.js            -> logika aplikasi (routing, render, kuis interaktif, ekspor file)
README.md            -> panduan ini
```

## Cara menjalankan di komputer sendiri

Cukup buka `index.html` langsung di browser (Chrome/Edge/Firefox), atau jalankan server lokal sederhana:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000 di browser
```

## Cara deploy ke GitHub Pages (gratis, bisa diakses mahasiswa secara mandiri)

1. **Buat repository baru** di GitHub, misalnya `belajar-matekstosi`.
2. Unggah seluruh isi folder ini (`index.html`, folder `css/`, folder `js/`, `README.md`) ke repository tersebut — bisa lewat web GitHub (drag & drop) atau via git:
   ```bash
   git init
   git add .
   git commit -m "Aplikasi belajar mandiri semester 1 Matekstosi"
   git branch -M main
   git remote add origin https://github.com/USERNAME/belajar-matekstosi.git
   git push -u origin main
   ```
3. Di repository GitHub, buka **Settings → Pages**.
4. Pada bagian **Build and deployment**, pilih **Source: Deploy from a branch**, lalu pilih **Branch: main** dan folder **/ (root)**. Klik **Save**.
5. Tunggu 1–2 menit, GitHub akan menampilkan URL publik, biasanya berbentuk:
   ```
   https://USERNAME.github.io/belajar-matekstosi/
   ```
6. Bagikan link tersebut ke mahasiswa. Aplikasi bisa diakses dari HP maupun laptop tanpa perlu instalasi apa pun.

## Menambah atau mengedit materi

Semua konten (materi mingguan, soal latihan, referensi, tools) ada di **satu file**: `js/data.js`. Edit array `COURSES` — setiap mata kuliah adalah satu objek dengan struktur:

```js
{
  id: "kode-singkat",
  code: "13XXX225",
  ch: "CH 0X",
  name: "Nama Mata Kuliah",
  sks: 2, teori: 1, praktik: 1,
  ringkas: "Deskripsi singkat...",
  materi: [ {w:1, t:"Topik", a:"Aktivitas belajar"}, ... ],
  latihan: [ {q:"Pertanyaan", opt:["A","B","C","D"], ans:1}, ... ],
  esai: [ "Pertanyaan esai...", ... ],
  referensi: [ {t:"Judul", u:"https://...", d:"Deskripsi"}, ... ],
  tools: [ {t:"Nama tools", u:"https://...", d:"Deskripsi"}, ... ],
}
```

Setelah disunting, cukup commit & push perubahan — GitHub Pages akan otomatis memperbarui situs dalam waktu singkat.

## Catatan penting

Materi disusun ulang dari **deskripsi resmi mata kuliah** pada SK Ketua STMM No. 215 Tahun 2025 tentang Kurikulum 2025 Prodi Manajemen Teknik Studio Produksi, dipadukan referensi umum di bidang produksi siaran. Ini adalah **panduan belajar mandiri**, bukan RPS resmi — mahasiswa tetap perlu menyinkronkan dengan RPS/silabus yang dibagikan dosen pengampu masing-masing mata kuliah di awal semester.

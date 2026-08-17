/* =======================================================================
   DATA MATA KULIAH — SEMESTER 1
   Prodi Manajemen Teknik Studio Produksi (Matekstosi), MMTC/STMM Yogyakarta
   Berdasarkan SK Kurikulum 2025 (deskripsi resmi mata kuliah), disusun
   ulang menjadi rencana belajar mandiri mingguan.
   ======================================================================= */

const COURSES = [
{
  id: "iko", code: "13IKO225", ch: "CH 01",
  name: "Ilmu Komunikasi", sks: 2, teori: 1, praktik: 1,
  ringkas: "Teori & praktik dasar komunikasi: elemen, model, jenis komunikasi, hingga etika dan public speaking.",
  materi: [
    {w:1, t:"Sejarah & pentingnya ilmu komunikasi", a:"Baca bab pengantar; buat mind map perkembangan ilmu komunikasi"},
    {w:2, t:"Elemen proses komunikasi (sender, message, channel, receiver, feedback, noise)", a:"Gambar diagram proses komunikasi + contoh kasus siaran"},
    {w:3, t:"Model-model komunikasi (linear, interaksional, transaksional)", a:"Bandingkan ketiga model dalam tabel"},
    {w:4, t:"Komunikasi verbal & nonverbal", a:"Rekam video 2 menit, analisis bahasa tubuh sendiri"},
    {w:5, t:"Komunikasi intrapersonal", a:"Tulis jurnal refleksi diri 1 halaman"},
    {w:6, t:"Komunikasi interpersonal", a:"Praktik wawancara singkat dengan teman"},
    {w:7, t:"Komunikasi kelompok & organisasi", a:"Studi kasus rapat produksi/organisasi kampus"},
    {w:8, t:"UTS", a:"Review materi minggu 1–7", uts:true},
    {w:9, t:"Komunikasi massa", a:"Analisis satu program TV/radio nasional"},
    {w:10, t:"Komunikasi dan kebudayaan", a:"Bandingkan gaya komunikasi dua budaya berbeda"},
    {w:11, t:"Strategi komunikasi", a:"Susun strategi komunikasi sederhana untuk kampanye kampus"},
    {w:12, t:"Etika berkomunikasi", a:"Diskusikan satu kasus pelanggaran etika media"},
    {w:13, t:"Public speaking (dasar)", a:"Latihan pidato 3 menit, rekam & evaluasi diri"},
    {w:14, t:"Praktik public speaking terintegrasi", a:"Presentasi di depan kelompok kecil"},
    {w:15, t:"Review & simulasi", a:"Simulasi wawancara / presenter singkat"},
    {w:16, t:"UAS", a:"Ujian & portofolio praktik", uas:true},
  ],
  latihan: [
    {q:"Elemen yang mengembalikan respons penerima pesan ke pengirim disebut...", opt:["Noise","Feedback","Channel","Decoding"], ans:1},
    {q:"Model komunikasi yang memandang komunikasi sebagai proses dua arah yang berlangsung simultan disebut model...", opt:["Linear","Interaksional","Transaksional","Sirkular tunggal"], ans:2},
    {q:"Berikut yang termasuk contoh komunikasi nonverbal adalah...", opt:["Menulis surat","Bahasa tubuh","Menelepon","Mengirim pesan teks"], ans:1},
    {q:"Komunikasi yang terjadi dalam diri sendiri, misalnya berpikir atau merenung, disebut komunikasi...", opt:["Interpersonal","Intrapersonal","Massa","Kelompok"], ans:1},
    {q:"Salah satu prinsip etika komunikasi di media adalah...", opt:["Mengutamakan rating","Akurasi dan kejujuran informasi","Kecepatan tanpa verifikasi","Sensasionalisme"], ans:1},
  ],
  esai: [
    "Jelaskan perbedaan komunikasi interpersonal dan komunikasi kelompok. Berikan contoh masing-masing dalam konteks produksi siaran.",
    "Pilih satu program TV atau radio nasional, lalu analisis strategi komunikasi massanya (minimal 150 kata)."
  ],
  referensi: [
    {t:"Onong Uchjana Effendy — Ilmu Komunikasi: Teori dan Praktek", u:"https://www.google.com/search?q=Onong+Uchjana+Effendy+Ilmu+Komunikasi+Teori+dan+Praktek", d:"Referensi utama teori komunikasi berbahasa Indonesia"},
    {t:"Coursera — Kursus teori & keterampilan komunikasi", u:"https://www.coursera.org/search?query=communication%20theory", d:"Kursus daring dari berbagai universitas"},
    {t:"MIT OpenCourseWare — Comparative Media Studies", u:"https://ocw.mit.edu/search/?d=Comparative%20Media%20Studies", d:"Materi kuliah terbuka MIT terkait media & komunikasi"},
  ],
  tools: [
    {t:"ChatGPT", u:"https://chat.openai.com", d:"Latihan menyusun naskah, simulasi wawancara, brainstorming"},
    {t:"Claude", u:"https://claude.ai", d:"Diskusi & latihan analisis komunikasi"},
    {t:"Canva — Presentasi", u:"https://www.canva.com/presentations/", d:"Membuat slide presentasi public speaking"},
    {t:"Google NotebookLM", u:"https://notebooklm.google", d:"Meringkas & bertanya jawab dari materi bacaan"},
  ]
},

{
  id: "dps", code: "13DPS325", ch: "CH 02",
  name: "Dasar–Dasar Produksi Siaran", sks: 3, teori: 1, praktik: 2,
  ringkas: "Alur produksi program TV/radio dari praproduksi, produksi, hingga pascaproduksi.",
  materi: [
    {w:1, t:"Pengenalan industri penyiaran & alur produksi", a:"Tonton behind-the-scenes 1 program TV, catat tahapannya"},
    {w:2, t:"Praproduksi: ide & konsep program", a:"Susun 1 ide program sederhana (1 halaman)"},
    {w:3, t:"Penulisan naskah dasar (rundown, script)", a:"Buat rundown acara sederhana 5 menit"},
    {w:4, t:"Perencanaan produksi & anggaran dasar", a:"Susun budget plan sederhana"},
    {w:5, t:"Peran & fungsi kru produksi", a:"Buat struktur organisasi tim produksi fiktif"},
    {w:6, t:"Produksi: penataan gambar dasar", a:"Latihan framing dengan kamera HP"},
    {w:7, t:"Produksi: penataan suara dasar", a:"Rekam audio sederhana, evaluasi kualitas"},
    {w:8, t:"UTS", a:"Review + kuis konsep", uts:true},
    {w:9, t:"Pengelolaan teknis di studio", a:"Pelajari denah studio TV/radio dari video referensi"},
    {w:10, t:"Produksi lapangan (outdoor/ENG)", a:"Simulasi liputan sederhana di luar studio"},
    {w:11, t:"Pascaproduksi: editing dasar", a:"Edit video pendek 1 menit"},
    {w:12, t:"Standar kualitas konten siaran", a:"Evaluasi 1 tayangan berdasarkan checklist kualitas"},
    {w:13, t:"Proyek mini: produksi TV pendek", a:"Praproduksi proyek kelompok/mandiri"},
    {w:14, t:"Proyek mini: produksi radio pendek", a:"Rekam & susun program radio 3 menit"},
    {w:15, t:"Presentasi & evaluasi proyek", a:"Presentasikan hasil proyek"},
    {w:16, t:"UAS", a:"Ujian teori + penyerahan proyek", uas:true},
  ],
  latihan: [
    {q:"Tahap yang mencakup perencanaan ide, naskah, dan anggaran sebelum syuting disebut...", opt:["Produksi","Pascaproduksi","Praproduksi","Distribusi"], ans:2},
    {q:"Dokumen yang memuat urutan acara beserta durasi tiap segmen disebut...", opt:["Storyboard","Rundown","Budget plan","Shot list"], ans:1},
    {q:"Proses menyunting hasil rekaman menjadi tayangan akhir disebut...", opt:["Praproduksi","Produksi","Editing/pascaproduksi","Riset"], ans:2},
    {q:"Istilah ENG dalam produksi lapangan merujuk pada...", opt:["Electronic News Gathering","Editing News Graphic","Engine News Group","External Network Gateway"], ans:0},
    {q:"Yang bertanggung jawab mengarahkan jalannya produksi di lapangan/studio adalah...", opt:["Editor","Sutradara/Sutradara Program","Kameramen","Penulis naskah"], ans:1},
  ],
  esai: [
    "Susun rundown sederhana (5 menit) untuk sebuah program talkshow kampus, lengkap dengan segmen dan estimasi durasi.",
    "Jelaskan perbedaan alur kerja produksi TV dan produksi radio, sertakan minimal 3 perbedaan konkret."
  ],
  referensi: [
    {t:"Fred Wibowo — Teknik Produksi Program Televisi", u:"https://www.google.com/search?q=Fred+Wibowo+Teknik+Produksi+Program+Televisi", d:"Buku ajar produksi TV berbahasa Indonesia"},
    {t:"Herbert Zettl — Television Production Handbook", u:"https://www.google.com/search?q=Herbert+Zettl+Television+Production+Handbook", d:"Referensi standar produksi televisi internasional"},
    {t:"No Film School", u:"https://nofilmschool.com", d:"Artikel & tutorial produksi video/film"},
  ],
  tools: [
    {t:"OBS Studio", u:"https://obsproject.com", d:"Software gratis untuk rekaman & live streaming produksi"},
    {t:"Canva — Video", u:"https://www.canva.com/video-editor/", d:"Edit video pendek & buat rundown visual"},
    {t:"YouTube — pencarian tutorial produksi siaran", u:"https://www.youtube.com/results?search_query=tutorial+produksi+program+televisi", d:"Kumpulan tutorial praktik produksi"},
  ]
},

{
  id: "eis", code: "13EIS325", ch: "CH 03",
  name: "Elektronika Instrumentasi", sks: 3, teori: 1, praktik: 2,
  ringkas: "Dasar elektronika aktif/pasif serta pembacaan instrumen ukur (multitester, VEM, vectorscope, waveform monitor).",
  materi: [
    {w:1, t:"Konsep dasar listrik & besaran elektronika", a:"Latihan soal V, I, R, P"},
    {w:2, t:"Komponen pasif (resistor, kapasitor, induktor)", a:"Identifikasi komponen dari kode warna resistor"},
    {w:3, t:"Karakteristik komponen aktif (dioda, transistor)", a:"Baca datasheet dioda/transistor umum"},
    {w:4, t:"Rangkaian penyearah (rectifier)", a:"Gambar rangkaian half-wave & full-wave"},
    {w:5, t:"Transistor sebagai saklar", a:"Simulasi rangkaian saklar transistor (simulator daring)"},
    {w:6, t:"Transistor sebagai penguat", a:"Analisis rangkaian penguat sederhana"},
    {w:7, t:"Penguat operasional (Op-Amp) dasar", a:"Pelajari konfigurasi op-amp inverting/non-inverting"},
    {w:8, t:"UTS", a:"Review + latihan soal", uts:true},
    {w:9, t:"Rangkaian pembangkit gelombang (oscillator)", a:"Pelajari prinsip kerja oscillator sederhana"},
    {w:10, t:"Pengenalan alat ukur: multitester", a:"Praktik dasar pengukuran tegangan/arus/resistansi"},
    {w:11, t:"Video Engineering Monitor (VEM)", a:"Pelajari fungsi & cara pembacaan VEM"},
    {w:12, t:"Vectorscope", a:"Pelajari fungsi pembacaan warna sinyal video"},
    {w:13, t:"Waveform Monitor", a:"Pelajari fungsi pembacaan level sinyal video"},
    {w:14, t:"Integrasi instrumen dalam produksi siaran", a:"Studi kasus troubleshooting sinyal sederhana"},
    {w:15, t:"Review praktik alat ukur", a:"Latihan soal & simulasi pembacaan instrumen"},
    {w:16, t:"UAS", a:"Ujian teori + praktik alat ukur", uas:true},
  ],
  latihan: [
    {q:"Komponen yang menyimpan energi dalam bentuk medan listrik adalah...", opt:["Resistor","Kapasitor","Induktor","Transistor"], ans:1},
    {q:"Fungsi utama rangkaian penyearah (rectifier) adalah mengubah...", opt:["AC menjadi DC","DC menjadi AC","Tegangan tinggi menjadi rendah","Frekuensi rendah menjadi tinggi"], ans:0},
    {q:"Alat yang digunakan untuk membaca level sinyal video (brightness/kontras) adalah...", opt:["Vectorscope","Waveform Monitor","Multitester","Oscillator"], ans:1},
    {q:"Alat yang digunakan untuk membaca fase & saturasi warna sinyal video adalah...", opt:["Waveform Monitor","Vectorscope","VEM","Multitester"], ans:1},
    {q:"Multitester dapat digunakan untuk mengukur, kecuali...", opt:["Tegangan","Arus","Resistansi","Warna gambar"], ans:3},
  ],
  esai: [
    "Jelaskan perbedaan fungsi Waveform Monitor dan Vectorscope dalam konteks produksi siaran televisi.",
    "Gambarkan (secara deskriptif) langkah pengukuran tegangan DC sederhana menggunakan multitester."
  ],
  referensi: [
    {t:"All About Circuits — Dasar Elektronika", u:"https://www.allaboutcircuits.com", d:"Tutorial elektronika dasar hingga lanjut, gratis"},
    {t:"Khan Academy — Electrical Engineering", u:"https://www.khanacademy.org/science/electrical-engineering", d:"Kursus dasar rangkaian & elektronika"},
    {t:"Robert Boylestad — Electronic Devices and Circuit Theory", u:"https://www.google.com/search?q=Boylestad+Electronic+Devices+and+Circuit+Theory", d:"Buku teks standar elektronika"},
  ],
  tools: [
    {t:"Falstad Circuit Simulator", u:"https://www.falstad.com/circuit/", d:"Simulasi rangkaian elektronika interaktif di browser"},
    {t:"Tinkercad Circuits", u:"https://www.tinkercad.com/circuits", d:"Simulasi rangkaian & komponen elektronika gratis"},
    {t:"ChatGPT / Claude", u:"https://claude.ai", d:"Bantu jelaskan konsep rangkaian & bahas soal latihan"},
  ]
},

{
  id: "tmp", code: "13TMP225", ch: "CH 04",
  name: "Teknologi Multimedia & Penyiaran", sks: 2, teori: 1, praktik: 1,
  ringkas: "Gambaran menyeluruh teknologi audio-video, penyiaran analog-digital, OB Van, automation, streaming, dan AI dalam penyiaran.",
  materi: [
    {w:1, t:"Perkembangan teknologi multimedia & penyiaran", a:"Buat timeline sejarah broadcasting"},
    {w:2, t:"Konsep dasar teknik audio", a:"Identifikasi jenis-jenis mikrofon"},
    {w:3, t:"Konsep dasar teknik video", a:"Identifikasi format video umum (SD, HD, 4K)"},
    {w:4, t:"Teknik dasar penyiaran radio & TV", a:"Bandingkan alur siaran radio vs TV"},
    {w:5, t:"Penyiaran analog", a:"Pelajari prinsip modulasi AM/FM dasar"},
    {w:6, t:"Penyiaran TV digital", a:"Pelajari standar DVB-T2 yang dipakai di Indonesia"},
    {w:7, t:"Teori dasar kamera", a:"Pelajari bagian-bagian kamera broadcast"},
    {w:8, t:"UTS", a:"Review konsep dasar", uts:true},
    {w:9, t:"Teori dasar mikrofon & lighting", a:"Bandingkan jenis lighting studio"},
    {w:10, t:"Alat rekam & media penyimpanan", a:"Bandingkan format storage broadcast"},
    {w:11, t:"OB Van (Outside Broadcast Van)", a:"Tonton video kerja OB Van, catat komponennya"},
    {w:12, t:"Otomasi siaran (playout automation)", a:"Pelajari konsep automation system"},
    {w:13, t:"Teknologi streaming", a:"Coba setup streaming sederhana dengan OBS Studio"},
    {w:14, t:"Pengenalan AI dalam penyiaran & multimedia", a:"Cari 2 contoh aplikasi AI di industri broadcast"},
    {w:15, t:"Praktik pengenalan prinsip kerja teknologi", a:"Riset/kunjungan virtual studio TV lokal"},
    {w:16, t:"UAS", a:"Ujian teori + presentasi riset", uas:true},
  ],
  latihan: [
    {q:"Standar penyiaran TV digital terestrial yang digunakan di Indonesia adalah...", opt:["ATSC","ISDB-T","DVB-T2","DTMB"], ans:2},
    {q:"Kendaraan yang membawa peralatan siaran untuk produksi di luar studio disebut...", opt:["OB Van","Control Room","Studio Mobile","Transmisi Van"], ans:0},
    {q:"Sistem yang menjalankan jadwal siar secara otomatis tanpa operator manual disebut...", opt:["Switcher","Playout automation","Vectorscope","Multiplexer"], ans:1},
    {q:"Modulasi yang mengubah amplitudo sinyal pembawa sesuai sinyal informasi disebut...", opt:["FM","AM","PM","QAM"], ans:1},
    {q:"Contoh pemanfaatan AI dalam penyiaran modern adalah...", opt:["Transkripsi otomatis & subtitle otomatis","Mengganti seluruh kru produksi","Menghilangkan kebutuhan internet","Mengganti kamera fisik"], ans:0},
  ],
  esai: [
    "Jelaskan perbedaan utama antara penyiaran analog dan penyiaran digital, sertakan contoh keunggulan sistem digital.",
    "Cari satu contoh nyata pemanfaatan teknologi streaming dalam industri penyiaran Indonesia dan jelaskan cara kerjanya secara singkat."
  ],
  referensi: [
    {t:"Komisi Penyiaran Indonesia (KPI)", u:"https://www.kpi.go.id", d:"Regulasi & informasi resmi penyiaran Indonesia"},
    {t:"DVB Project — standar penyiaran digital", u:"https://www.dvb.org", d:"Dokumentasi resmi standar DVB-T2 dan turunannya"},
    {t:"Gerald Millerson — Television Production", u:"https://www.google.com/search?q=Gerald+Millerson+Television+Production", d:"Buku referensi teknologi & teknik produksi televisi"},
  ],
  tools: [
    {t:"OBS Studio", u:"https://obsproject.com", d:"Praktik langsung teknologi streaming"},
    {t:"YouTube — pencarian OB Van & studio TV", u:"https://www.youtube.com/results?search_query=behind+the+scenes+OB+Van+broadcast", d:"Video referensi peralatan siaran nyata"},
    {t:"Perplexity AI", u:"https://www.perplexity.ai", d:"Riset cepat & terverifikasi tentang tren teknologi penyiaran"},
  ]
},

{
  id: "ftg", code: "13FTG225", ch: "CH 05",
  name: "Fotografi", sks: 2, teori: 1, praktik: 1,
  ringkas: "Dasar teknis & estetika fotografi: exposure, komposisi, pencahayaan, hingga fotografi jurnalistik dan editing dasar.",
  materi: [
    {w:1, t:"Prinsip kerja kamera (still & DSLR/mirrorless)", a:"Kenali bagian kamera yang tersedia (HP/DSLR)"},
    {w:2, t:"Exposure triangle: aperture, shutter speed, ISO", a:"Latihan foto dengan variasi tiap elemen"},
    {w:3, t:"Komposisi visual dasar (rule of thirds, framing)", a:"Ambil 10 foto dengan aturan komposisi berbeda"},
    {w:4, t:"Pencahayaan dalam fotografi", a:"Foto objek sama dalam 3 kondisi cahaya berbeda"},
    {w:5, t:"Depth of field & fokus", a:"Latihan foto dengan DOF sempit vs lebar"},
    {w:6, t:"Jenis-jenis lensa & penggunaannya", a:"Riset karakteristik lensa wide, normal, tele"},
    {w:7, t:"Fotografi dokumentasi produksi", a:"Praktik dokumentasi kegiatan kampus"},
    {w:8, t:"UTS", a:"Kumpulkan portofolio 10 foto + analisis teknis", uts:true},
    {w:9, t:"Fotografi untuk konten digital & media sosial", a:"Buat satu seri foto untuk feed Instagram"},
    {w:10, t:"Fotografi promosi", a:"Buat satu foto produk/promosi sederhana"},
    {w:11, t:"Fotografi jurnalistik", a:"Foto storytelling satu kejadian sehari-hari"},
    {w:12, t:"Editing dasar foto", a:"Edit 5 foto dengan software olah foto"},
    {w:13, t:"Estetika visual & color grading dasar", a:"Terapkan gaya warna konsisten pada satu seri foto"},
    {w:14, t:"Proyek fotografi tematik", a:"Rencanakan & eksekusi satu tema foto"},
    {w:15, t:"Kurasi & presentasi portofolio", a:"Susun portofolio akhir"},
    {w:16, t:"UAS", a:"Presentasi & ujian praktik", uas:true},
  ],
  latihan: [
    {q:"Tiga elemen dalam exposure triangle adalah...", opt:["Aperture, Shutter Speed, ISO","Fokus, Zoom, Flash","White Balance, ISO, Filter","Lensa, Sensor, Body"], ans:0},
    {q:"Bukaan lensa yang lebih besar (angka f kecil) akan menghasilkan...", opt:["Depth of field lebih lebar","Depth of field lebih sempit","Gambar lebih gelap","Shutter speed otomatis lambat"], ans:1},
    {q:"Aturan komposisi yang membagi bingkai menjadi 9 bagian sama besar disebut...", opt:["Golden ratio","Rule of thirds","Leading lines","Framing"], ans:1},
    {q:"ISO yang tinggi pada kondisi cahaya rendah berisiko menghasilkan...", opt:["Gambar lebih tajam","Noise/grain pada gambar","Warna lebih akurat","Shutter speed lebih cepat"], ans:1},
    {q:"Fotografi yang menekankan penyampaian cerita/peristiwa nyata disebut fotografi...", opt:["Produk","Jurnalistik","Makro","Abstrak"], ans:1},
  ],
  esai: [
    "Jelaskan bagaimana ketiga elemen exposure triangle saling memengaruhi hasil foto, beri contoh kombinasi pengaturan untuk kondisi cahaya redup.",
    "Pilih 3 foto hasil latihan pribadi, jelaskan pilihan komposisi dan pencahayaan pada masing-masing foto."
  ],
  referensi: [
    {t:"Photography Life", u:"https://photographylife.com", d:"Artikel & tutorial fotografi dari dasar hingga lanjut"},
    {t:"Bryan Peterson — Understanding Exposure", u:"https://www.google.com/search?q=Bryan+Peterson+Understanding+Exposure", d:"Buku klasik memahami exposure fotografi"},
    {t:"Khan Academy — Photography basics", u:"https://www.khanacademy.org", d:"Materi dasar seni visual & fotografi"},
  ],
  tools: [
    {t:"Photopea", u:"https://www.photopea.com", d:"Editor foto gratis berbasis browser, mirip Photoshop"},
    {t:"Canva — Photo Editor", u:"https://www.canva.com/photo-editor/", d:"Edit & desain konten foto untuk media sosial"},
    {t:"YouTube — Peter McKinnon", u:"https://www.youtube.com/@PeterMcKinnon", d:"Channel tutorial fotografi & videografi populer"},
  ]
},

{
  id: "psd", code: "13PSD225", ch: "CH 06",
  name: "Praktikum Peralatan Studio Digital", sks: 2, teori: 0, praktik: 2,
  ringkas: "Pengenalan langsung peralatan dasar studio TV/radio (kamera, audio, lighting, switcher) dengan prinsip K3L.",
  materi: [
    {w:1, t:"Orientasi studio & prinsip K3L", a:"Pelajari SOP K3L studio (jika tersedia dari kampus)"},
    {w:2, t:"Pengenalan kamera studio", a:"Identifikasi bagian kamera studio dari video referensi"},
    {w:3, t:"Pengenalan sistem audio studio (mixer, mic)", a:"Pelajari fungsi tiap channel mixer"},
    {w:4, t:"Pengenalan sistem lighting studio", a:"Identifikasi jenis lampu studio umum"},
    {w:5, t:"Pengenalan switcher video", a:"Pelajari fungsi dasar video switcher"},
    {w:6, t:"Pengenalan sistem monitor & preview", a:"Pelajari alur sinyal preview-program"},
    {w:7, t:"Pengoperasian dasar peralatan (simulasi/observasi)", a:"Buat catatan SOP pengoperasian satu alat"},
    {w:8, t:"UTS", a:"Kuis identifikasi alat & fungsi", uts:true},
    {w:9, t:"Perawatan dasar peralatan studio", a:"Riset jadwal maintenance alat broadcast"},
    {w:10, t:"Konektivitas kabel & sinyal (audio/video)", a:"Identifikasi jenis konektor (XLR, BNC, HDMI, dll)"},
    {w:11, t:"Praktik setup sederhana peralatan", a:"Simulasi setup mini studio (jika ada akses alat)"},
    {w:12, t:"Troubleshooting dasar peralatan", a:"Studi kasus masalah teknis umum & solusinya"},
    {w:13, t:"Standar keselamatan kerja di studio", a:"Buat checklist K3L pribadi"},
    {w:14, t:"Simulasi praktik terintegrasi", a:"Latihan gabungan kamera-audio-lighting"},
    {w:15, t:"Review & evaluasi praktik", a:"Evaluasi diri berdasarkan checklist SOP"},
    {w:16, t:"UAS", a:"Ujian praktik", uas:true},
  ],
  latihan: [
    {q:"Konektor yang umum digunakan untuk sinyal video digital SDI adalah...", opt:["XLR","BNC","RCA","Jack 3.5mm"], ans:1},
    {q:"Konektor audio balanced yang umum dipakai pada mikrofon profesional adalah...", opt:["XLR","BNC","HDMI","USB-C"], ans:0},
    {q:"K3L dalam konteks studio produksi merujuk pada...", opt:["Kualitas, Konten, Layout","Keselamatan, Kesehatan Kerja, Lingkungan","Kamera, Kabel, Lighting","Kontrol, Kalibrasi, Level"], ans:1},
    {q:"Alat yang berfungsi memindahkan/mencampur sumber gambar dari beberapa kamera disebut...", opt:["Mixer audio","Video switcher","Vectorscope","Teleprompter"], ans:1},
    {q:"Langkah pertama sebelum mengoperasikan peralatan studio yang belum dikenal adalah...", opt:["Langsung menyalakan semua alat","Membaca SOP/manual alat terlebih dahulu","Meminjam alat orang lain","Mengabaikan petunjuk keselamatan"], ans:1},
  ],
  esai: [
    "Buat SOP sederhana (5 langkah) untuk menyalakan dan mematikan satu peralatan studio, misalnya kamera studio atau mixer audio.",
    "Jelaskan tiga risiko keselamatan kerja yang mungkin terjadi di studio produksi dan cara pencegahannya."
  ],
  referensi: [
    {t:"Blackmagic Design — dokumentasi peralatan broadcast", u:"https://www.blackmagicdesign.com", d:"Manual & spesifikasi peralatan produksi profesional"},
    {t:"Kementerian Ketenagakerjaan RI — regulasi K3", u:"https://kemnaker.go.id", d:"Referensi regulasi keselamatan & kesehatan kerja"},
    {t:"Sony Professional — panduan peralatan broadcast", u:"https://pro.sony", d:"Dokumentasi teknis peralatan siaran"},
  ],
  tools: [
    {t:"YouTube — tutorial studio setup", u:"https://www.youtube.com/results?search_query=studio+broadcast+equipment+setup+tutorial", d:"Video panduan visual peralatan studio"},
    {t:"ChatGPT / Claude", u:"https://claude.ai", d:"Tanya jawab fungsi & troubleshooting alat"},
  ]
},

{
  id: "kld", code: "13KLD225", ch: "CH 07",
  name: "Literasi Digital", sks: 2, teori: 1, praktik: 1,
  ringkas: "Kecakapan mengakses, mengevaluasi, dan menggunakan teknologi digital secara kritis, etis, dan produktif.",
  materi: [
    {w:1, t:"Konsep dasar literasi digital", a:"Baca modul literasi digital dari sumber resmi"},
    {w:2, t:"Mengakses & mengevaluasi informasi digital", a:"Latihan cek fakta 3 berita online"},
    {w:3, t:"Etika penggunaan media digital", a:"Diskusikan satu kasus etika media sosial"},
    {w:4, t:"Privasi & keamanan data", a:"Audit pengaturan privasi akun media sosial pribadi"},
    {w:5, t:"Jejak digital (digital footprint)", a:"Cek jejak digital diri sendiri lewat pencarian"},
    {w:6, t:"Digital mindset & kolaborasi daring", a:"Coba satu tools kolaborasi (mis. Google Workspace)"},
    {w:7, t:"Alat digital produktif untuk produksi media", a:"Eksplorasi cloud storage & project management tools"},
    {w:8, t:"UTS", a:"Review + kuis", uts:true},
    {w:9, t:"Manajemen proyek digital sederhana", a:"Susun papan proyek (kanban) untuk tugas kuliah"},
    {w:10, t:"Kolaborasi dokumen daring", a:"Latihan mengedit dokumen bersama secara real-time"},
    {w:11, t:"Keamanan siber dasar", a:"Aktifkan autentikasi 2 langkah pada akun penting"},
    {w:12, t:"Literasi algoritma & media sosial", a:"Amati & refleksikan rekomendasi konten yang muncul"},
    {w:13, t:"Proyek terapan: kampanye literasi digital mini", a:"Buat 1 konten edukasi literasi digital singkat"},
    {w:14, t:"Evaluasi tools digital produktif", a:"Bandingkan 3 tools produktivitas yang dicoba"},
    {w:15, t:"Presentasi proyek", a:"Presentasikan hasil eksplorasi tools & proyek"},
    {w:16, t:"UAS", a:"Ujian & portofolio", uas:true},
  ],
  latihan: [
    {q:"Jejak yang ditinggalkan seseorang saat beraktivitas di internet disebut...", opt:["Digital footprint","Digital native","Digital divide","Digital detox"], ans:0},
    {q:"Langkah pertama saat menerima informasi/berita di media sosial sebaiknya adalah...", opt:["Langsung membagikan","Memverifikasi sumber & faktanya","Mengabaikan sepenuhnya","Menghapus akun"], ans:1},
    {q:"Fitur keamanan yang menambah lapisan verifikasi login selain kata sandi disebut...", opt:["Autentikasi dua langkah (2FA)","Cookie browser","VPN","Firewall"], ans:0},
    {q:"Berikut termasuk contoh alat kolaborasi digital, kecuali...", opt:["Google Docs","Trello","Kamera analog","Google Drive"], ans:2},
    {q:"Sikap kritis terhadap algoritma media sosial penting karena...", opt:["Algoritma selalu netral","Algoritma dapat membentuk gelembung informasi (filter bubble)","Algoritma tidak memengaruhi konten yang dilihat","Algoritma hanya berlaku untuk iklan"], ans:1},
  ],
  esai: [
    "Jelaskan tiga langkah praktis untuk memverifikasi kebenaran sebuah berita yang tersebar di media sosial.",
    "Refleksikan jejak digital pribadi Anda: apa yang perlu dijaga dan apa yang perlu diperbaiki?"
  ],
  referensi: [
    {t:"Google Digital Garage / Learn Digital", u:"https://learndigital.withgoogle.com", d:"Kursus gratis keterampilan digital dari Google"},
    {t:"Siberkreasi — Gerakan Literasi Digital Nasional", u:"https://literasidigital.id", d:"Modul literasi digital resmi Kementerian Komunikasi dan Digital RI"},
    {t:"Douglas Belshaw — The Essential Elements of Digital Literacies", u:"https://www.google.com/search?q=Douglas+Belshaw+Essential+Elements+of+Digital+Literacies", d:"Kerangka akademik literasi digital"},
  ],
  tools: [
    {t:"Google Workspace", u:"https://workspace.google.com", d:"Kolaborasi dokumen, spreadsheet, dan slide daring"},
    {t:"Trello", u:"https://trello.com", d:"Manajemen proyek sederhana dengan papan kanban"},
    {t:"NotebookLM", u:"https://notebooklm.google", d:"Asisten AI untuk merangkum & memahami sumber bacaan"},
  ]
},

{
  id: "pka", code: "13PKA225", ch: "CH 08",
  name: "Pikiran Kreatif & Analitis", sks: 2, teori: 1, praktik: 1,
  ringkas: "Mengembangkan kemampuan berpikir kreatif dan analitis untuk merancang ide, memecahkan masalah, dan mengambil keputusan.",
  materi: [
    {w:1, t:"Pengenalan pola pikir kreatif vs analitis", a:"Refleksi gaya berpikir pribadi"},
    {w:2, t:"Teknik brainstorming", a:"Praktik brainstorming untuk 1 ide program media"},
    {w:3, t:"Design thinking dasar", a:"Pelajari 5 tahap design thinking"},
    {w:4, t:"Problem solving terstruktur", a:"Latihan studi kasus masalah produksi sederhana"},
    {w:5, t:"Analisis data & argumen dasar", a:"Latihan membaca & menafsirkan data sederhana"},
    {w:6, t:"Berpikir kritis dalam evaluasi proyek", a:"Evaluasi satu karya media dengan kerangka kritis"},
    {w:7, t:"Kolaborasi & pola pikir terbuka", a:"Diskusi kelompok pemecahan masalah"},
    {w:8, t:"UTS", a:"Review + presentasi ide", uts:true},
    {w:9, t:"Ideation lanjutan: mind mapping & SCAMPER", a:"Terapkan teknik SCAMPER pada satu ide produk media"},
    {w:10, t:"Validasi ide sederhana", a:"Uji ide ke 3 orang, catat masukan"},
    {w:11, t:"Penyusunan proposal ide", a:"Susun kerangka proposal 1 halaman"},
    {w:12, t:"Pengambilan keputusan berbasis data", a:"Latihan membuat keputusan dari data sederhana"},
    {w:13, t:"Proyek terapan: dari ide ke rencana teknis", a:"Kembangkan ide menjadi proposal produksi mini"},
    {w:14, t:"Lanjutan proyek terapan", a:"Perbaikan proposal berdasarkan umpan balik"},
    {w:15, t:"Presentasi proyek akhir", a:"Presentasikan proposal ke kelas"},
    {w:16, t:"UAS", a:"Ujian & penilaian proyek", uas:true},
  ],
  latihan: [
    {q:"Tahap pertama dalam proses design thinking umumnya adalah...", opt:["Prototype","Empathize","Test","Define"], ans:1},
    {q:"Teknik menghasilkan sebanyak mungkin ide tanpa menghakimi terlebih dahulu disebut...", opt:["Brainstorming","Debugging","Auditing","Benchmarking"], ans:0},
    {q:"SCAMPER adalah teknik untuk...", opt:["Menghitung anggaran","Memodifikasi & mengembangkan ide yang sudah ada","Mengukur sinyal video","Mengedit naskah"], ans:1},
    {q:"Berpikir kritis dalam evaluasi karya media penting untuk...", opt:["Menilai secara objektif berdasarkan kriteria yang jelas","Menolak semua karya orang lain","Menghindari diskusi","Mempercepat produksi tanpa evaluasi"], ans:0},
    {q:"Validasi ide sebelum dieksekusi bertujuan untuk...", opt:["Menghabiskan waktu","Mendapatkan umpan balik awal & mengurangi risiko kegagalan","Menunda proyek tanpa alasan","Menggantikan riset pasar"], ans:1},
  ],
  esai: [
    "Terapkan teknik SCAMPER pada satu ide program media yang sudah ada, jelaskan minimal 3 modifikasi yang dihasilkan.",
    "Ceritakan satu pengalaman pemecahan masalah sehari-hari menggunakan pendekatan berpikir analitis, jelaskan langkah-langkahnya."
  ],
  referensi: [
    {t:"IDEO U — Design Thinking", u:"https://www.ideou.com", d:"Sumber belajar design thinking dari IDEO"},
    {t:"Edward de Bono — Six Thinking Hats", u:"https://www.google.com/search?q=Edward+de+Bono+Six+Thinking+Hats", d:"Kerangka klasik berpikir dari berbagai perspektif"},
    {t:"Coursera — Creative thinking courses", u:"https://www.coursera.org/search?query=creative%20thinking", d:"Kursus daring berpikir kreatif dari berbagai universitas"},
  ],
  tools: [
    {t:"Canva — Mind Map", u:"https://www.canva.com/graphs/mind-maps/", d:"Membuat mind map & diagram ide secara visual"},
    {t:"Miro", u:"https://miro.com", d:"Papan kolaborasi visual untuk brainstorming tim"},
    {t:"ChatGPT / Claude", u:"https://claude.ai", d:"Sparring partner untuk mengembangkan & menguji ide"},
  ]
},

{
  id: "pnc", code: "13NPC225", ch: "CH 09",
  name: "Pancasila", sks: 2, teori: 2, praktik: 0,
  ringkas: "Falsafah Pancasila sebagai tata nilai dan norma kehidupan berbangsa, dengan penekanan relevansinya di bidang media.",
  materi: [
    {w:1, t:"Pancasila dalam sejarah bangsa Indonesia", a:"Ringkas sejarah lahirnya Pancasila"},
    {w:2, t:"Pancasila sebagai dasar negara & pandangan hidup", a:"Diskusikan makna tiap sila secara sederhana"},
    {w:3, t:"Pancasila dan ideologi dunia", a:"Bandingkan Pancasila dengan 1 ideologi lain"},
    {w:4, t:"Nilai-nilai Pancasila dalam kehidupan sosial", a:"Cari contoh penerapan nilai Pancasila di sekitar"},
    {w:5, t:"Pancasila dan hak asasi manusia", a:"Diskusikan kasus HAM sederhana"},
    {w:6, t:"Pancasila dalam demokrasi Indonesia", a:"Amati praktik demokrasi di lingkungan kampus"},
    {w:7, t:"Pancasila dan etika bermedia", a:"Analisis 1 konten media dari sudut nilai Pancasila"},
    {w:8, t:"UTS", a:"Review materi", uts:true},
    {w:9, t:"Pancasila dalam konteks era digital", a:"Diskusikan tantangan nilai Pancasila di media sosial"},
    {w:10, t:"Studi kasus penerapan nilai dalam industri kreatif", a:"Analisis 1 kasus konten kreatif & nilai Pancasila"},
    {w:11, t:"Toleransi & keberagaman dalam karya media", a:"Tinjau 1 karya media yang mengangkat keberagaman"},
    {w:12, t:"Tanggung jawab sosial pekerja media", a:"Diskusi kasus tanggung jawab sosial media"},
    {w:13, t:"Diskusi kelompok: nilai Pancasila & profesi broadcasting", a:"Susun refleksi kelompok singkat"},
    {w:14, t:"Penyusunan refleksi individu", a:"Tulis refleksi penerapan nilai Pancasila dalam profesi cita-cita"},
    {w:15, t:"Presentasi refleksi", a:"Presentasikan refleksi ke kelas"},
    {w:16, t:"UAS", a:"Ujian", uas:true},
  ],
  latihan: [
    {q:"Pancasila sebagai dasar negara Indonesia disahkan pada...", opt:["17 Agustus 1945","18 Agustus 1945","1 Juni 1945","28 Oktober 1928"], ans:1},
    {q:"Sila yang menekankan pentingnya keadilan bagi seluruh rakyat Indonesia adalah sila ke-...", opt:["Ke-2","Ke-3","Ke-4","Ke-5"], ans:3},
    {q:"Nilai Pancasila yang paling relevan dengan prinsip kebebasan pers yang bertanggung jawab adalah...", opt:["Persatuan Indonesia","Keadilan sosial","Kerakyatan yang dipimpin oleh hikmat kebijaksanaan","Semua sila saling terkait"], ans:3},
    {q:"Penerapan nilai Pancasila dalam industri media sangat penting untuk mencegah...", opt:["Konten berkualitas tinggi","Ujaran kebencian & konten yang memecah belah","Kreativitas dalam produksi","Kerja sama tim"], ans:1},
  ],
  esai: [
    "Analisis satu konten media (berita, iklan, atau tayangan hiburan) dari sudut pandang nilai-nilai Pancasila.",
    "Jelaskan bagaimana seorang praktisi media dapat menerapkan sila Persatuan Indonesia dalam pekerjaannya sehari-hari."
  ],
  referensi: [
    {t:"Badan Pembinaan Ideologi Pancasila (BPIP)", u:"https://bpip.go.id", d:"Sumber resmi materi & kajian Pancasila"},
    {t:"Perpustakaan Nasional RI — koleksi digital", u:"https://www.perpusnas.go.id", d:"Referensi buku & dokumen sejarah Pancasila"},
  ],
  tools: [
    {t:"Google Scholar", u:"https://scholar.google.com", d:"Mencari jurnal & artikel akademik terkait Pancasila"},
    {t:"ChatGPT / Claude", u:"https://claude.ai", d:"Diskusi & latihan analisis studi kasus"},
  ]
},

{
  id: "agm", code: "13NAG225", ch: "CH 10",
  name: "Agama", sks: 2, teori: 2, praktik: 0,
  ringkas: "Pembentukan pribadi mahasiswa yang beriman dan bertakwa, serta penerapan nilai keagamaan dalam kehidupan pribadi, sosial, dan profesional.",
  materi: [
    {w:1, t:"Pengantar & tujuan pendidikan agama di perguruan tinggi", a:"Refleksi tujuan belajar agama secara akademik"},
    {w:2, t:"Ajaran pokok agama masing-masing (dasar keimanan)", a:"Ringkas pokok ajaran agama masing-masing"},
    {w:3, t:"Sumber ajaran & kitab suci", a:"Baca & renungkan 1 bagian kitab suci/sumber ajaran"},
    {w:4, t:"Akhlak/etika dalam ajaran agama", a:"Identifikasi nilai etika dalam kehidupan sehari-hari"},
    {w:5, t:"Agama dan kehidupan sosial bermasyarakat", a:"Diskusikan peran agama dalam menjaga kerukunan"},
    {w:6, t:"Agama dan kehidupan berbangsa", a:"Diskusikan kontribusi nilai agama pada persatuan bangsa"},
    {w:7, t:"Toleransi antarumat beragama", a:"Wawancara singkat dengan teman berbeda keyakinan (dengan hormat)"},
    {w:8, t:"UTS", a:"Review materi", uts:true},
    {w:9, t:"Etika profesi dalam perspektif agama", a:"Refleksikan nilai agama dalam dunia kerja/media"},
    {w:10, t:"Agama & teknologi/media", a:"Diskusikan tantangan nilai agama di era digital"},
    {w:11, t:"Tanggung jawab moral pekerja kreatif/media", a:"Analisis 1 kasus etika media dari sudut pandang agama"},
    {w:12, t:"Spiritualitas & keseimbangan hidup mahasiswa", a:"Refleksi keseimbangan akademik-spiritual pribadi"},
    {w:13, t:"Studi kasus penerapan nilai agama dalam karya kreatif", a:"Tinjau 1 karya media bernuansa nilai keagamaan positif"},
    {w:14, t:"Penyusunan refleksi individu", a:"Tulis refleksi penerapan nilai agama dalam cita-cita profesi"},
    {w:15, t:"Presentasi refleksi", a:"Presentasikan refleksi ke kelas"},
    {w:16, t:"UAS", a:"Ujian", uas:true},
  ],
  latihan: [
    {q:"Tujuan utama pendidikan agama di perguruan tinggi adalah...", opt:["Menghafal ritual semata","Membentuk pribadi beriman, bertakwa, dan beretika dalam kehidupan profesional","Menggantikan pelajaran umum","Hanya sebagai syarat administratif"], ans:1},
    {q:"Sikap yang perlu dijaga dalam masyarakat yang beragam agama adalah...", opt:["Toleransi & saling menghormati","Memaksakan keyakinan pada orang lain","Mengabaikan perbedaan","Menghindari interaksi dengan yang berbeda"], ans:0},
    {q:"Penerapan nilai agama dalam profesi media dapat terlihat dari...", opt:["Menyebarkan informasi tanpa verifikasi","Menjunjung kejujuran & tanggung jawab dalam berkarya","Mengutamakan sensasi semata","Mengabaikan dampak sosial konten"], ans:1},
  ],
  esai: [
    "Jelaskan bagaimana nilai-nilai agama yang Anda yakini dapat diterapkan dalam etika kerja di industri media dan penyiaran.",
    "Refleksikan pentingnya toleransi antarumat beragama dalam lingkungan kerja yang beragam seperti industri kreatif."
  ],
  referensi: [
    {t:"Kementerian Agama Republik Indonesia", u:"https://kemenag.go.id", d:"Sumber resmi materi & kebijakan pendidikan agama"},
    {t:"Perpustakaan digital rumah ibadah/organisasi keagamaan resmi sesuai keyakinan masing-masing", u:"https://kemenag.go.id", d:"Rujukan tambahan sesuai agama masing-masing mahasiswa"},
  ],
  tools: [
    {t:"Google Scholar", u:"https://scholar.google.com", d:"Referensi kajian akademik lintas agama"},
    {t:"ChatGPT / Claude", u:"https://claude.ai", d:"Diskusi reflektif seputar etika & nilai (gunakan sebagai pendamping, bukan pengganti kajian dari sumber resmi/pembimbing agama)"},
  ]
},
];

const APP_META = {
  title: "Studio Belajar Matekstosi",
  subtitle: "Semester 1 · Kurikulum 2025 · Prodi Manajemen Teknik Studio Produksi, MMTC/STMM Yogyakarta",
  totalSks: COURSES.reduce((s,c)=>s+c.sks,0),
};

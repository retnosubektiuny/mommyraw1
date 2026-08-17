/* =======================================================================
   APP LOGIC — Studio Belajar Matekstosi
   ======================================================================= */

const state = { courseId: null, tab: "materi" };

function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

function initClock(){
  const el = $("#onairClock");
  function tick(){
    const d = new Date();
    const p = n => String(n).padStart(2,"0");
    el.textContent = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())} ON AIR`;
  }
  tick();
  setInterval(tick, 1000);
}

function renderSidebar(){
  const list = $("#channelList");
  list.innerHTML = COURSES.map(c => `
    <button class="channel-btn ${state.courseId===c.id?'active':''}" data-course="${c.id}">
      <span class="ch-dot"></span>
      <span style="flex:1; min-width:0;">
        <span class="ch-code">${c.ch} · ${c.code}</span>
        <span class="ch-name">${c.name}</span>
      </span>
      <span class="ch-sks">${c.sks} SKS</span>
    </button>
  `).join("");
  $all(".channel-btn", list).forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.courseId = btn.dataset.course;
      state.tab = "materi";
      closeMobileSidebar();
      render();
      window.scrollTo({top:0, behavior:"smooth"});
    });
  });
}

function closeMobileSidebar(){
  $("#sidebar").classList.remove("open");
}

function renderHome(){
  const main = $("#main");
  main.innerHTML = `
    <div class="home-hero">
      <div class="eyebrow"><span class="tally"></span> Kurikulum 2025 · Semester 1</div>
      <h1 class="page-title">${APP_META.title}</h1>
      <p>${APP_META.subtitle}. Pilih mata kuliah pada panel channel di sebelah kiri untuk mulai belajar mandiri: materi mingguan, latihan soal, referensi terpercaya, tools/AI pendukung, dan menu unduh.</p>
      <div class="stat-row">
        <div class="stat-card"><div class="num">${COURSES.length}</div><div class="lbl">Mata kuliah</div></div>
        <div class="stat-card"><div class="num">${APP_META.totalSks}</div><div class="lbl">Total SKS</div></div>
        <div class="stat-card"><div class="num">16</div><div class="lbl">Minggu / semester</div></div>
      </div>
    </div>
    <div class="sidebar-label" style="margin-left:0;">Semua channel mata kuliah</div>
    <div class="course-grid">
      ${COURSES.map(c=>`
        <button class="course-card" data-course="${c.id}">
          <span class="ch-code">${c.ch} · ${c.code}</span>
          <h3>${c.name}</h3>
          <p>${c.ringkas}</p>
          <span class="badge-sks">${c.sks} SKS (${c.teori} teori / ${c.praktik} praktik)</span>
        </button>
      `).join("")}
    </div>
    <div class="foot-note">
      Materi disusun ulang dari deskripsi resmi mata kuliah pada SK Kurikulum 2025 Prodi Manajemen Teknik Studio Produksi, MMTC/STMM Yogyakarta, dipadukan dengan referensi umum di bidang produksi siaran. Ini adalah panduan belajar mandiri — tetap sinkronkan dengan RPS resmi dari dosen pengampu.
    </div>
  `;
  $all(".course-card", main).forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.courseId = btn.dataset.course;
      state.tab = "materi";
      renderSidebar();
      render();
      window.scrollTo({top:0, behavior:"smooth"});
    });
  });
}

function courseById(id){ return COURSES.find(c=>c.id===id); }

function renderCourse(){
  const c = courseById(state.courseId);
  const main = $("#main");
  main.innerHTML = `
    <div class="course-header">
      <div class="eyebrow"><span class="tally"></span> ${c.ch} · ${c.code}</div>
      <h1 class="page-title">${c.name}</h1>
      <p style="color:var(--ink-soft); margin:.2rem 0 0; max-width:680px; line-height:1.55;">${c.ringkas}</p>
      <div class="meta-row">
        <span class="pill">${c.sks} SKS total</span>
        <span class="pill">${c.teori} SKS teori</span>
        <span class="pill">${c.praktik} SKS praktik</span>
        <span class="pill">16 minggu (UTS mgg 8 · UAS mgg 16)</span>
      </div>
    </div>
    <div class="tabs">
      <button class="tab-btn" data-tab="materi">Materi mingguan</button>
      <button class="tab-btn" data-tab="latihan">Latihan soal</button>
      <button class="tab-btn" data-tab="referensi">Referensi &amp; tools</button>
      <button class="tab-btn" data-tab="unduh">Unduh</button>
    </div>
    <div class="tab-panel" data-panel="materi">${tplMateri(c)}</div>
    <div class="tab-panel" data-panel="latihan">${tplLatihan(c)}</div>
    <div class="tab-panel" data-panel="referensi">${tplReferensi(c)}</div>
    <div class="tab-panel" data-panel="unduh">${tplUnduh(c)}</div>
    <div class="foot-note">Kembali ke <a href="#" id="backHome">beranda</a> untuk melihat seluruh mata kuliah semester 1.</div>
  `;
  $("#backHome").addEventListener("click",(e)=>{ e.preventDefault(); state.courseId=null; renderSidebar(); render(); window.scrollTo({top:0}); });

  $all(".tab-btn", main).forEach(b=>{
    b.addEventListener("click", ()=>{ state.tab = b.dataset.tab; applyTabState(); });
  });
  applyTabState();
  wireQuiz(c);
  wireDownloads(c);
}

function applyTabState(){
  $all(".tab-btn").forEach(b=> b.classList.toggle("active", b.dataset.tab===state.tab));
  $all(".tab-panel").forEach(p=> p.classList.toggle("active", p.dataset.panel===state.tab));
}

function tplMateri(c){
  return `
    <table class="week-table">
      <thead><tr><th style="width:70px;">Minggu</th><th style="width:34%;">Topik</th><th>Aktivitas belajar mandiri</th></tr></thead>
      <tbody>
        ${c.materi.map(m=>`
          <tr class="${m.uts?'uts':''} ${m.uas?'uas':''}">
            <td class="wk-num">${m.uts? 'UTS' : m.uas? 'UAS' : 'M'+m.w}</td>
            <td class="wk-topic">${m.t}</td>
            <td class="wk-act">${m.a}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function tplLatihan(c){
  const mc = c.latihan.map((q,i)=>`
    <div class="quiz-item" data-qi="${i}">
      <div class="quiz-q">${i+1}. ${q.q}</div>
      ${q.opt.map((o,oi)=>`
        <label class="quiz-opt" data-oi="${oi}">
          <input type="radio" name="q${i}" value="${oi}"> <span>${o}</span>
        </label>
      `).join("")}
      <div class="quiz-feedback" data-fb></div>
    </div>
  `).join("");
  const essay = c.esai.map((e,i)=>`<div class="essay-item"><b>Esai ${i+1}.</b>${e}</div>`).join("");
  return `
    <div class="sidebar-label" style="margin-left:0;">Pilihan ganda — klik jawaban untuk cek</div>
    ${mc}
    <div class="sidebar-label" style="margin-left:0; margin-top:1.2rem;">Esai singkat</div>
    ${essay}
  `;
}

function wireQuiz(c){
  $all(".quiz-item").forEach(item=>{
    const qi = Number(item.dataset.qi);
    const q = c.latihan[qi];
    $all(".quiz-opt", item).forEach(opt=>{
      opt.addEventListener("click", ()=>{
        const oi = Number(opt.dataset.oi);
        $all(".quiz-opt", item).forEach(o=>o.classList.remove("correct","wrong"));
        const fb = $("[data-fb]", item);
        if(oi === q.ans){
          opt.classList.add("correct");
          fb.textContent = "Benar! " + q.opt[q.ans];
          fb.className = "quiz-feedback ok";
        } else {
          opt.classList.add("wrong");
          $all(".quiz-opt", item)[q.ans].classList.add("correct");
          fb.textContent = "Belum tepat. Jawaban yang benar: " + q.opt[q.ans];
          fb.className = "quiz-feedback no";
        }
      });
    });
  });
}

function tplReferensi(c){
  const ref = c.referensi.map(r=>`
    <a class="res-link" href="${r.u}" target="_blank" rel="noopener">
      <span class="rl-title">${r.t}</span>
      <span class="rl-desc">${r.d}</span>
      <span class="rl-url">${r.u}</span>
    </a>
  `).join("");
  const tools = c.tools.map(r=>`
    <a class="res-link" href="${r.u}" target="_blank" rel="noopener">
      <span class="rl-title">${r.t}</span>
      <span class="rl-desc">${r.d}</span>
      <span class="rl-url">${r.u}</span>
    </a>
  `).join("");
  return `
    <div class="res-grid">
      <div class="res-col">
        <h4>Referensi belajar terpercaya</h4>
        ${ref}
      </div>
      <div class="res-col">
        <h4>Tools &amp; AI pembelajaran</h4>
        ${tools}
      </div>
    </div>
  `;
}

function tplUnduh(c){
  return `
    <div class="dl-grid">
      <div class="dl-card">
        <div class="dl-icon">&#128196;</div>
        <h5>Materi (PDF)</h5>
        <p>Rencana belajar mingguan lengkap dalam format PDF, siap cetak.</p>
        <button class="btn-dl" data-dl="pdf">Unduh PDF</button>
      </div>
      <div class="dl-card">
        <div class="dl-icon">&#128221;</div>
        <h5>Latihan Soal (Word)</h5>
        <p>Soal pilihan ganda &amp; esai beserta kunci jawaban, format .doc.</p>
        <button class="btn-dl" data-dl="word">Unduh Word</button>
      </div>
      <div class="dl-card">
        <div class="dl-icon">&#128202;</div>
        <h5>Rencana Mingguan (Excel)</h5>
        <p>Tabel minggu, topik, dan aktivitas dalam format .xlsx yang bisa diedit.</p>
        <button class="btn-dl" data-dl="excel">Unduh Excel</button>
      </div>
    </div>
  `;
}

function wireDownloads(c){
  $all("[data-dl]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const type = btn.dataset.dl;
      if(type==="pdf") exportPDF(c);
      if(type==="word") exportWord(c);
      if(type==="excel") exportExcel(c);
    });
  });
}

/* ---------- Export: PDF (materi) via jsPDF ---------- */
function exportPDF(c){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:"pt", format:"a4"});
  const marginX = 40; let y = 50;
  doc.setFont("helvetica","bold"); doc.setFontSize(15);
  doc.text(`${c.ch} · ${c.name}`, marginX, y); y+=18;
  doc.setFont("helvetica","normal"); doc.setFontSize(9.5);
  doc.text(`${c.code} · ${c.sks} SKS (${c.teori} teori / ${c.praktik} praktik)`, marginX, y); y+=14;
  doc.setFontSize(10);
  const splitRingkas = doc.splitTextToSize(c.ringkas, 515);
  doc.text(splitRingkas, marginX, y); y += splitRingkas.length*13 + 10;
  doc.setDrawColor(225,70,44); doc.setLineWidth(1.2); doc.line(marginX,y,marginX+515,y); y+=18;

  doc.setFont("helvetica","bold"); doc.setFontSize(12);
  doc.text("Rencana Belajar Mingguan", marginX, y); y+=16;

  c.materi.forEach(m=>{
    if(y > 760){ doc.addPage(); y = 50; }
    const label = m.uts? "UTS" : m.uas? "UAS" : `Minggu ${m.w}`;
    doc.setFont("helvetica","bold"); doc.setFontSize(9.5);
    doc.text(label, marginX, y);
    doc.setFont("helvetica","normal");
    const topicLines = doc.splitTextToSize(m.t, 420);
    doc.text(topicLines, marginX+70, y);
    y += topicLines.length*12;
    doc.setFontSize(8.7); doc.setTextColor(90,100,110);
    const actLines = doc.splitTextToSize("Aktivitas: " + m.a, 420);
    doc.text(actLines, marginX+70, y);
    doc.setTextColor(0,0,0);
    y += actLines.length*11 + 8;
  });

  doc.setFontSize(8); doc.setTextColor(140,140,140);
  doc.text("Dibuat dengan Studio Belajar Matekstosi — panduan belajar mandiri, sinkronkan dengan RPS resmi dosen pengampu.", marginX, 815);

  doc.save(`Materi_${c.code}_${c.name.replace(/\s+/g,'_')}.pdf`);
}

/* ---------- Export: Word (.doc) latihan soal ---------- */
function exportWord(c){
  let body = `<h1 style="font-family:Calibri;">${c.name} (${c.code})</h1>
  <p><i>Latihan soal &amp; esai — Studio Belajar Matekstosi, Semester 1</i></p><hr/>
  <h2>A. Pilihan Ganda</h2>`;
  c.latihan.forEach((q,i)=>{
    body += `<p><b>${i+1}. ${q.q}</b></p><ul>`;
    q.opt.forEach((o,oi)=>{
      const letter = String.fromCharCode(65+oi);
      body += `<li>${letter}. ${o}</li>`;
    });
    body += `</ul><p style="color:#0F8A72;"><b>Jawaban: ${String.fromCharCode(65+q.ans)}. ${q.opt[q.ans]}</b></p>`;
  });
  body += `<h2>B. Esai Singkat</h2><ol>`;
  c.esai.forEach(e=> body += `<li>${e}</li>`);
  body += `</ol>`;

  const html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
  <head><meta charset="utf-8"><title>Latihan Soal</title></head><body>${body}</body></html>`;
  const blob = new Blob(['\ufeff', html], {type:'application/msword'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `Latihan_Soal_${c.code}_${c.name.replace(/\s+/g,'_')}.doc`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ---------- Export: Excel (.xlsx) rencana mingguan ---------- */
function exportExcel(c){
  const rows = c.materi.map(m=>({
    Minggu: m.uts? "UTS" : m.uas? "UAS" : `Minggu ${m.w}`,
    Topik: m.t,
    "Aktivitas Belajar Mandiri": m.a
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [{wch:12},{wch:45},{wch:55}];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Rencana Mingguan");
  XLSX.writeFile(wb, `Rencana_${c.code}_${c.name.replace(/\s+/g,'_')}.xlsx`);
}

/* ---------- Export: rekap semua mata kuliah (Excel multi-sheet) ---------- */
function exportAllExcel(){
  const wb = XLSX.utils.book_new();
  const overview = COURSES.map(c=>({
    Channel: c.ch, Kode: c.code, "Mata Kuliah": c.name, SKS: c.sks,
    Teori: c.teori, Praktik: c.praktik
  }));
  const wsOverview = XLSX.utils.json_to_sheet(overview);
  wsOverview['!cols'] = [{wch:8},{wch:12},{wch:36},{wch:6},{wch:8},{wch:8}];
  XLSX.utils.book_append_sheet(wb, wsOverview, "Ringkasan");

  COURSES.forEach(c=>{
    const rows = c.materi.map(m=>({
      Minggu: m.uts? "UTS" : m.uas? "UAS" : `Minggu ${m.w}`,
      Topik: m.t,
      Aktivitas: m.a
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    ws['!cols'] = [{wch:10},{wch:42},{wch:50}];
    let sheetName = c.name.replace(/[\\/?*\[\]:]/g,'').slice(0,28);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
  });
  XLSX.writeFile(wb, "Rekap_Kurikulum_Semester1_Matekstosi.xlsx");
}

function render(){
  if(!state.courseId){ renderHome(); } else { renderCourse(); }
}

document.addEventListener("DOMContentLoaded", ()=>{
  initClock();
  renderSidebar();
  render();
  $("#menuToggle").addEventListener("click", ()=> $("#sidebar").classList.toggle("open"));
  $("#exportAllBtn").addEventListener("click", exportAllExcel);
});

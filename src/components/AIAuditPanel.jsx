import React, { useState } from 'react';
import { 
  Bot, 
  BrainCircuit, 
  GraduationCap, 
  HelpCircle, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Layers, 
  FileText, 
  Award, 
  Compass,
  Printer,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function AIAuditPanel({ currentProject, onOpenReport }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const aiAudit = currentProject.aiAudit || {
    overallPercentage: 78,
    classification: 'Dominan Dibantu AI (High AI-Assisted, 78%)',
    summaryAnalysis: 'Aplikasi menunjukkan indikasi kuat pemanfaatan asisten generative AI pada penulisan struktur boilerplate kode, tata letak antarmuka responsif, dan logika dasar CRUD.',
    featureBreakdown: [],
    dosenAdvice: 'Kamu boleh menggunakan AI, tapi yang paling penting kamu harus tahu Alur, Logika, Tujuan, Cara Membaca Coding-nya, dan Cara Membangun Coding-nya dari nol.',
    homeworkScope: []
  };

  const descriptive = currentProject.descriptiveEvaluation || {
    executiveSummary: 'Aplikasi telah berhasil merealisasikan prototipe fungsional berbasis web yang memadukan storefront E-Commerce dan backoffice ERP sederhana.',
    businessModelEvaluation: 'Konsep E-Commerce dan ERP terimplementasi pada pemisahan katalog dan panel admin.',
    technicalArchitectureEvaluation: 'Fondasi kode cukup terstruktur, namun mahasiswa perlu memperdalam pemahaman logika database dan keamanan.',
    strengths: ['Antarmuka responsif dan tematik', 'Alur pemesanan jelas', 'Berhasil live cloud'],
    weaknesses: ['Pemanfaatan AI sangat dominan', 'Pengurangan stok belum atomic ACID', 'Perlu penguatan keamanan web'],
    finalVerdict: 'DITERIMA SEBAGAI PROYEK KERJA PRAKTIK (LULUS DENGAN PR PENDALAMAN LOGIKA KODE)',
    recommendations: 'Mahasiswa diwajibkan menyelesaikan PR pendalaman kode sebelum sidang akhir.'
  };

  const getPercentageColor = (pct) => {
    if (pct >= 80) return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
    if (pct >= 60) return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Hero Card */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold">
              <BrainCircuit className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>AI-Assisted Code & Architecture Auditor</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Audit Deteksi AI & Bimbingan Pedagogis Dosen
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Analisis estimasi pemanfaatan Generative AI (ChatGPT, Claude, Cursor, v0, Copilot), pembongkaran indikator per modul fitur, arahan manusiawi Dosen Penguji, dan daftar PR belajar mandiri mahasiswa.
            </p>
          </div>

          {/* AI Score Badge Display */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 p-4 rounded-2xl shadow-inner shrink-0">
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Estimasi Kode AI
              </span>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 font-mono mt-0.5">
                {aiAudit.overallPercentage}%
              </div>
              <span className="text-[10px] font-semibold text-purple-300 block mt-0.5">
                AI-Assisted
              </span>
            </div>

            <div className="border-l border-slate-800 pl-4 text-xs space-y-1">
              <div className="text-slate-400 text-[11px]">Klasifikasi:</div>
              <span className="inline-block px-2 py-0.5 rounded-lg bg-purple-950/80 text-purple-300 border border-purple-800/60 font-semibold text-[11px]">
                {aiAudit.classification}
              </span>
              <div className="text-[10px] text-slate-500 mt-1">
                Proyek: <strong className="text-slate-300">{currentProject.projectName}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary of AI Detection */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/50">
          <span className="font-bold text-white flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Kesimpulan Audit Deteksi Pemanfaatan AI:
          </span>
          {aiAudit.summaryAnalysis}
        </div>
      </div>

      {/* 2. Dosen's Heartfelt Human Pedagogical Advice */}
      <div className="bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-900 border border-amber-500/30 p-6 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-2">
              <div>
                <h3 className="text-sm font-bold text-amber-300 flex items-center gap-1.5">
                  Nasihat Manusiawi Dosen Penguji & Pembimbing
                </h3>
                <span className="text-xs text-slate-400">
                  Faik Bajsair, S.Kom., M.Kom. • Dosen Program Studi Sistem Informasi
                </span>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Prinsip Academic AI Literacy
              </span>
            </div>

            <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-amber-500/20 shadow-inner">
              "{aiAudit.dosenAdvice}"
            </blockquote>

            <p className="text-[11px] text-slate-400 leading-normal">
              💡 <strong>Pesan untuk Mahasiswa:</strong> AI adalah akselerator perkakas modern yang sah di industri. Namun gelar Sarjana Sistem Informasi menuntut kalian memahami esensi logika bisnis, rancangan database, dan pemecahan masalah algoritma di balik kode tersebut.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Feature-by-Feature AI Detection Breakdown */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-400" />
              Penilaian Deteksi AI per Modul & Fitur Aplikasi
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Rincian mengapa masing-masing komponen diasumsikan dibangun dengan bantuan AI beserta fitur yang diwakilinya.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {aiAudit.featureBreakdown && aiAudit.featureBreakdown.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-white">{item.feature}</h4>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-24 sm:w-32 bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full"
                      style={{ width: `${item.aiPercentage}%` }}
                    />
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${getPercentageColor(item.aiPercentage)}`}>
                    {item.aiPercentage}% AI
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-xs">
                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800/80">
                  <span className="text-[10px] uppercase font-bold text-purple-400 block mb-1 flex items-center gap-1">
                    <HelpCircle className="w-3 h-3" />
                    Kenapa Diasumsikan Menggunakan AI?
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {item.indicator}
                  </p>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800/80">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1 flex items-center gap-1">
                    <Code2 className="w-3 h-3" />
                    Apa yang Diwakili / Dikerjakan oleh AI?
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {item.whatAiDid}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Homework Scope (PR Wajib Mahasiswa) */}
      <div className="bg-gradient-to-br from-indigo-950/20 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-bold mb-1">
              <BookOpen className="w-3 h-3" />
              <span>Tugas Belajar Mandiri Mahasiswa (PR Kuliah & Sidang)</span>
            </div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              Scope Materi yang Wajib Dipelajari Mahasiswa
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Karena AI telah mewakili pengerjaan fitur di atas, seluruh anggota kelompok memiliki PR untuk membedah dan memahami scope teknis berikut:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiAudit.homeworkScope && aiAudit.homeworkScope.map((hw, idx) => (
            <div 
              key={idx} 
              className="bg-slate-950/80 border border-indigo-500/20 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-500/40 transition"
            >
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0">
                    PR {idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-indigo-200 leading-tight">
                    {hw.topic}
                  </h4>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                  {hw.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-800/80 bg-slate-900/50 -mx-4 -mb-4 p-3 rounded-b-xl">
                <span className="text-[10px] font-bold text-amber-400 block mb-0.5 flex items-center gap-1">
                  <Compass className="w-3 h-3" />
                  Pertanyaan Kunci Penguji (Siapkan Jawabannya):
                </span>
                <p className="text-[11px] text-slate-300 italic font-mono">
                  "{hw.guidingQuestions}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Descriptive Academic Evaluation by Dosen Faik Bajsair */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold mb-1">
              <Award className="w-3 h-3" />
              <span>Evaluasi Deskriptif Resmi</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white">
              Penilaian Deskriptif Dosen Penguji (Faik Bajsair, S.Kom., M.Kom.)
            </h3>
            <p className="text-xs text-slate-400">
              Evaluasi holistik kelayakan Kerja Praktik (KP), kesesuaian model ERP UMKM, kualitas teknis, serta catatan kelebihan dan kekurangan.
            </p>
          </div>

          <button
            onClick={onOpenReport}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-md transition self-start sm:self-auto shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            Cetak Berita Acara (PDF)
          </button>
        </div>

        {/* Executive Summary */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2">
          <span className="font-bold text-brand-300 text-xs block">
            📋 Ringkasan Eksekutif Penilaian:
          </span>
          <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
            {descriptive.executiveSummary}
          </p>
        </div>

        {/* Business Model vs Technical Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
            <span className="font-bold text-blue-300 text-xs block flex items-center gap-1.5">
              🏢 Kesesuaian Model Bisnis ERP & UMKM:
            </span>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              {descriptive.businessModelEvaluation}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
            <span className="font-bold text-teal-300 text-xs block flex items-center gap-1.5">
              ⚙️ Evaluasi Kualitas Arsitektur Teknis:
            </span>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              {descriptive.technicalArchitectureEvaluation}
            </p>
          </div>
        </div>

        {/* Strengths & Weaknesses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <span className="font-bold text-emerald-400 text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Poin Kekuatan & Keunggulan Proyek:
            </span>
            <ul className="space-y-1.5 text-[11px] text-slate-300">
              {descriptive.strengths && descriptive.strengths.map((str, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
            <span className="font-bold text-amber-400 text-xs flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              Poin Celah & Kelemahan yang Perlu Diperbaiki:
            </span>
            <ul className="space-y-1.5 text-[11px] text-slate-300">
              {descriptive.weaknesses && descriptive.weaknesses.map((weak, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{weak}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final Verdict Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 via-indigo-950/50 to-slate-950 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
              Keputusan Sidang / Evaluasi Akhir:
            </span>
            <span className="text-sm font-extrabold text-white block mt-0.5">
              {descriptive.finalVerdict}
            </span>
            <p className="text-[11px] text-slate-300 mt-1 max-w-xl">
              {descriptive.recommendations}
            </p>
          </div>

          <div className="text-right text-[11px] text-slate-400 shrink-0 self-end sm:self-auto border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
            <span className="block text-slate-500">Dosen Penguji:</span>
            <span className="font-bold text-slate-200">Faik Bajsair, S.Kom., M.Kom.</span>
            <span className="block text-[10px] text-brand-400">Sistem Informasi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
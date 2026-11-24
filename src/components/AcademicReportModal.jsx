import React, { useState } from 'react';
import { 
  SYLLABUS_SECTIONS, 
  generateDefaultAiAudit, 
  generateDefaultDescriptiveEvaluation 
} from '../data/syllabusRubric';
import { 
  Printer, 
  Download, 
  Copy, 
  Check, 
  X, 
  ShieldCheck, 
  GraduationCap, 
  Award,
  AlertTriangle,
  CheckCircle2,
  FileText,
  BrainCircuit,
  Bot,
  Sparkles,
  BookOpen,
  Compass,
  HelpCircle,
  Code2
} from 'lucide-react';

export default function AcademicReportModal({ 
  isOpen, 
  onClose, 
  currentProject, 
  onUpdateProject 
}) {
  const [copied, setCopied] = useState(false);
  const [lecturerNotes, setLecturerNotes] = useState(currentProject.lecturerNotes || '');

  if (!isOpen) return null;

  const scores = currentProject.scores || {};
  const vulnerabilities = currentProject.vulnerabilities || [];
  const aiAudit = currentProject.aiAudit || generateDefaultAiAudit(currentProject);
  const descriptive = currentProject.descriptiveEvaluation || generateDefaultDescriptiveEvaluation(currentProject);

  // Calculate final score
  let totalWeightedScore = 0;
  let passedCount = 0;
  let partialCount = 0;
  let missingCount = 0;
  let totalItems = 0;

  SYLLABUS_SECTIONS.forEach((section) => {
    let sectionTotalItemScore = 0;
    let sectionMaxScore = 0;

    section.items.forEach((item) => {
      totalItems++;
      const itemScoreObj = scores[item.id] || { status: 'MISSING', score: 0 };
      const itemScore = Number(itemScoreObj.score || 0);

      if (itemScoreObj.status === 'PASSED') passedCount++;
      else if (itemScoreObj.status === 'PARTIAL') partialCount++;
      else missingCount++;

      sectionTotalItemScore += (itemScore * (item.weight || 10));
      sectionMaxScore += (100 * (item.weight || 10));
    });

    const sectionPercentage = sectionMaxScore > 0 ? (sectionTotalItemScore / sectionMaxScore) * 100 : 0;
    totalWeightedScore += (sectionPercentage * section.weight) / 100;
  });

  const finalScore = Math.min(100, Math.max(0, Math.round(totalWeightedScore)));

  let gradeLetter = 'E';
  let gradePredicate = 'Sangat Kurang / Tidak Memenuhi Standar Minimal';
  if (finalScore >= 85) { gradeLetter = 'A'; gradePredicate = 'Sangat Memuaskan (Production-Ready ERP)'; }
  else if (finalScore >= 75) { gradeLetter = 'B+'; gradePredicate = 'Baik Sekali (Minor Revision Needed)'; }
  else if (finalScore >= 65) { gradeLetter = 'B'; gradePredicate = 'Baik (Perlu Penyempurnaan Integrasi)'; }
  else if (finalScore >= 55) { gradeLetter = 'C'; gradePredicate = 'Cukup (Banyak Fitur Belum Tuntas)'; }
  else if (finalScore >= 40) { gradeLetter = 'D'; gradePredicate = 'Kurang (Tidak Memenuhi Standar)'; }

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    let teamMembersMd = '';
    if (currentProject.teamMembers && currentProject.teamMembers.length > 0) {
      teamMembersMd = '\n**Anggota Kelompok Kerja Praktik:**\n' + 
        currentProject.teamMembers.map((m, idx) => `${idx + 1}. ${m.nim} - ${m.name}`).join('\n') + '\n';
    }

    let extraUrlsMd = '';
    if (currentProject.adminUrl) extraUrlsMd += `- **URL Backoffice ERP:** ${currentProject.adminUrl}\n`;
    if (currentProject.orderUrl) extraUrlsMd += `- **URL QR Ordering:** ${currentProject.orderUrl}\n`;

    let aiBreakdownMd = '';
    if (aiAudit.featureBreakdown && aiAudit.featureBreakdown.length > 0) {
      aiBreakdownMd = aiAudit.featureBreakdown.map((f, i) => 
        `${i+1}. **${f.feature}** (Estimasi AI: ${f.aiPercentage}%)\n   - *Indikator Kenapa Diasumsikan AI:* ${f.indicator}\n   - *Yang Diwakili / Dibuat oleh AI:* ${f.whatAiDid}`
      ).join('\n\n');
    }

    let homeworkScopeMd = '';
    if (aiAudit.homeworkScope && aiAudit.homeworkScope.length > 0) {
      homeworkScopeMd = aiAudit.homeworkScope.map((hw, i) =>
        `${i+1}. **${hw.topic}**\n   - *Deskripsi PR:* ${hw.description}\n   - *Pertanyaan Kunci Sidang:* "${hw.guidingQuestions}"`
      ).join('\n\n');
    }

    const md = `# LEMBAR HASIL PENILAIAN & AUDIT KUALITAS APLIKASI
**Mata Kuliah:** ${currentProject.courseName}
**Dosen Pengampu / Quality Analyst:** Faik Bajsair, S.Kom., M.Kom.
**Program Studi:** Sistem Informasi

---
### I. IDENTITAS MAHASISWA & PROYEK
- **Nama Submisi:** ${currentProject.studentName}
- **NIM:** ${currentProject.studentNim}
${teamMembersMd}- **Judul Proyek:** ${currentProject.projectName}
- **Mata Kuliah / Program:** ${currentProject.courseName}
- **Tahun Akademik:** ${currentProject.academicYear}
- **Framework & Database:** ${currentProject.framework}
- **Target URL Uji:** ${currentProject.targetUrl}
${extraUrlsMd}- **Tanggal Penilaian:** ${currentProject.evaluationDate || new Date().toISOString().split('T')[0]}

---
### II. HASIL PENILAIAN AKHIR
- **Nilai Angka:** ${finalScore} / 100
- **Nilai Huruf (Grade):** ${gradeLetter} (${gradePredicate})
- **Rasio Capaian:** ${passedCount} Tuntas | ${partialCount} Sebagian | ${missingCount} Belum Ada dari ${totalItems} kriteria

---
### III. AUDIT & DETEKSI PEMANFAATAN AI (AI-ASSISTED DEVELOPMENT)
- **Estimasi Pemanfaatan AI Keseluruhan:** ${aiAudit.overallPercentage}%
- **Klasifikasi:** ${aiAudit.classification}
- **Ringkasan Deteksi:** ${aiAudit.summaryAnalysis}

#### Penilaian per Fitur / Modul (Indikator Deteksi AI):
${aiBreakdownMd}

#### Nasihat Manusiawi Dosen Penguji & Pembimbing (Faik Bajsair, S.Kom., M.Kom.):
> "${aiAudit.dosenAdvice}"

#### Daftar PR (Scope Materi yang Wajib Dipelajari Mahasiswa Sebelum Sidang):
${homeworkScopeMd}

---
### IV. PENILAIAN DESKRIPTIF RESMI DOSEN PENGUJI (Faik Bajsair, S.Kom., M.Kom.)
- **Ringkasan Eksekutif:** ${descriptive.executiveSummary}
- **Kesesuaian Model Bisnis ERP & UMKM:** ${descriptive.businessModelEvaluation}
- **Evaluasi Kualitas Arsitektur Teknis:** ${descriptive.technicalArchitectureEvaluation}

#### Poin Kekuatan & Keunggulan Proyek:
${(descriptive.strengths || []).map(s => `- ${s}`).join('\n')}

#### Poin Celah & Kelemahan yang Perlu Diperbaiki:
${(descriptive.weaknesses || []).map(w => `- ${w}`).join('\n')}

#### Keputusan Akhir Evaluasi:
**${descriptive.finalVerdict}**

#### Rekomendasi Tindak Lanjut:
${descriptive.recommendations}

---
### V. CATATAN & ARAHAN DOSEN
${lecturerNotes}

---
### VI. TEMUAN KERENTANAN KEAMANAN (OWASP)
${vulnerabilities.length === 0 ? '- Tidak ada kerentanan kritis yang terdeteksi.' : vulnerabilities.map((v, i) => `${i+1}. [${v.severity}] ${v.rule} (${v.file}): ${v.description}\n   Saran Perbaikan: ${v.remediation}`).join('\n\n')}

---
*Dokumen ini diterbitkan secara otomatis oleh APEX-QA™ Software Quality Assurance Engine.*
*Dosen Penilai: Faik Bajsair, S.Kom., M.Kom.*
`;

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const safeNim = (currentProject.studentNim || 'KP').replace(/[^a-zA-Z0-9]/g, '_');
    const safeName = (currentProject.studentName || 'Mahasiswa').replace(/[^a-zA-Z0-9]/g, '_');
    link.download = `Laporan_Nilai_QA_${safeNim}_${safeName}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadJson = () => {
    const reportData = {
      auditor: {
        name: 'Faik Bajsair, S.Kom., M.Kom.',
        prodi: 'Sistem Informasi',
        institution: 'Program Studi Sistem Informasi'
      },
      student: {
        name: currentProject.studentName,
        nim: currentProject.studentNim,
        project: currentProject.projectName,
        course: currentProject.courseName,
        year: currentProject.academicYear,
        url: currentProject.targetUrl,
        framework: currentProject.framework,
        evaluationDate: currentProject.evaluationDate
      },
      evaluation: {
        finalScore,
        gradeLetter,
        gradePredicate,
        passedCount,
        partialCount,
        missingCount,
        totalItems,
        lecturerNotes,
        vulnerabilities,
        detailedScores: scores
      }
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Audit_Log_${currentProject.studentNim}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyClipboard = () => {
    const text = `*LEMBAR HASIL PENILAIAN APLIKASI E-COMMERCE ERP*
Dosen: Faik Bajsair, S.Kom., M.Kom. (Prodi Sistem Informasi)

Nama: ${currentProject.studentName}
NIM: ${currentProject.studentNim}
Judul: ${currentProject.projectName}
Nilai Akhir: ${finalScore} / 100 (Grade ${gradeLetter})
Status Fitur: ${passedCount} Tuntas, ${partialCount} Sebagian, ${missingCount} Belum Ada

Catatan Dosen:
${lecturerNotes}

Silakan buka file laporan detail untuk melihat rincian modul yang harus diperbaiki.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const saveNotes = () => {
    onUpdateProject({
      ...currentProject,
      lecturerNotes
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Toolbar (Hidden on Print) */}
        <div className="no-print p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-white text-sm">
              Dokumen Resmi Laporan Penilaian Mahasiswa
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-xs font-semibold shadow-md transition"
              title="Cetak atau Simpan sebagai PDF via Browser Print"
            >
              <Printer className="w-3.5 h-3.5" />
              Cetak / Simpan PDF
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition"
              title="Unduh File Markdown (.md)"
            >
              <Download className="w-3.5 h-3.5" />
              Markdown
            </button>

            <button
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition"
              title="Unduh Audit Log JSON"
            >
              <FileText className="w-3.5 h-3.5" />
              JSON
            </button>

            <button
              onClick={handleCopyClipboard}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition"
              title="Salin Ringkasan untuk WhatsApp"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Tersalin!' : 'Salin Ringkasan'}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Academic Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 print-card font-sans">
          
          {/* Academic Header / Kop Surat */}
          <div className="border-b-2 border-slate-900 pb-4 mb-6 text-center relative">
            <h2 className="text-sm uppercase tracking-widest font-bold text-slate-600">
              PROGRAM STUDI SISTEM INFORMASI
            </h2>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mt-1 uppercase">
              Lembar Hasil Penilaian & Audit Kualitas Perangkat Lunak
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Standar Evaluasi E-Commerce ERP & Enterprise Application Architecture
            </p>

            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full border border-slate-300 text-xs font-semibold text-slate-800">
              <GraduationCap className="w-3.5 h-3.5 text-slate-700" />
              Dosen Penguji: Faik Bajsair, S.Kom., M.Kom.
            </div>
          </div>

          {/* Identity Table */}
          <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-4">
              <div>
                <span className="text-slate-500 block text-[11px]">Nama Mahasiswa:</span>
                <span className="font-bold text-slate-900 text-sm">{currentProject.studentName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">NIM Mahasiswa:</span>
                <span className="font-bold font-mono text-slate-900 text-sm">{currentProject.studentNim}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Mata Kuliah:</span>
                <span className="font-semibold text-slate-800">{currentProject.courseName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Tahun Akademik:</span>
                <span className="font-semibold text-slate-800">{currentProject.academicYear}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-500 block text-[11px]">Judul Proyek Aplikasi:</span>
                <span className="font-bold text-slate-900">{currentProject.projectName}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Framework / Stack:</span>
                <span className="font-semibold text-slate-800 font-mono">{currentProject.framework}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Tanggal Penilaian:</span>
                <span className="font-semibold text-slate-800">{currentProject.evaluationDate || '2026-11-22'}</span>
              </div>
            </div>

            {/* Tim Anggota Kelompok Kerja Praktik (Jika Ada) */}
            {currentProject.teamMembers && currentProject.teamMembers.length > 0 && (
              <div className="mt-3 pt-3 border-t border-slate-200">
                <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider mb-2">
                  Daftar Anggota Kelompok Kerja Praktik ({currentProject.teamMembers.length} Mahasiswa):
                </span>
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
                    <thead className="bg-slate-100 font-semibold text-slate-700">
                      <tr>
                        <th className="py-1.5 px-3 w-12 text-center">No</th>
                        <th className="py-1.5 px-3 w-36">NIM</th>
                        <th className="py-1.5 px-3">Nama Lengkap Mahasiswa</th>
                        <th className="py-1.5 px-3 w-40 text-center">Peran Tim</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {currentProject.teamMembers.map((m, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80">
                          <td className="py-1.5 px-3 text-center font-bold text-slate-500">{idx + 1}</td>
                          <td className="py-1.5 px-3 font-mono font-bold text-slate-900">{m.nim}</td>
                          <td className="py-1.5 px-3 font-medium text-slate-800">{m.name}</td>
                          <td className="py-1.5 px-3 text-center text-[11px] text-slate-600">
                            {idx === 0 ? 'Ketua / Lead Developer' : 'Anggota Pengembang'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Final Score Banner */}
          <div className="mb-6 p-4 rounded-xl border-2 border-slate-900 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-600 block">
                Hasil Penilaian Kumulatif
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold text-slate-900 font-mono">{finalScore}</span>
                <span className="text-base text-slate-500 font-semibold">/ 100</span>
                <span className="text-lg font-bold text-slate-800 ml-4">
                  Grade {gradeLetter}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Predikat: <strong>{gradePredicate}</strong>
              </p>
            </div>

            <div className="text-right text-xs space-y-1">
              <div className="font-medium text-emerald-700">✓ {passedCount} Fitur Tuntas (Passed)</div>
              <div className="font-medium text-amber-700">~ {partialCount} Fitur Sebagian (Partial)</div>
              <div className="font-medium text-rose-700">✗ {missingCount} Fitur Belum Ada (Missing)</div>
            </div>
          </div>

          {/* Section Matrix */}
          <div className="mb-6 space-y-4">
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300">
              Matriks Penilaian Detail Fitur & Integrasi
            </h3>

            {SYLLABUS_SECTIONS.map((section) => (
              <div key={section.id} className="text-xs border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-2.5 font-bold text-slate-900 flex justify-between border-b border-slate-200">
                  <span>{section.title}</span>
                  <span className="text-slate-600 font-normal">Bobot: {section.weight}%</span>
                </div>
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                      <th className="p-2 w-1/4">Nama Fitur</th>
                      <th className="p-2 w-1/2">Ketentuan Silabus</th>
                      <th className="p-2 w-1/12 text-center">Status</th>
                      <th className="p-2 w-1/12 text-center">Nilai</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.items.map((item) => {
                      const scoreObj = scores[item.id] || { status: 'MISSING', score: 0 };
                      return (
                        <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50/50">
                          <td className="p-2 font-semibold text-slate-800">{item.name}</td>
                          <td className="p-2 text-slate-600">
                            {item.requirement}
                            {scoreObj.note && (
                              <div className="text-slate-900 font-medium mt-0.5 italic">
                                Catatan: {scoreObj.note}
                              </div>
                            )}
                          </td>
                          <td className="p-2 text-center font-bold">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                              scoreObj.status === 'PASSED' ? 'bg-emerald-100 text-emerald-800' :
                              scoreObj.status === 'PARTIAL' ? 'bg-amber-100 text-amber-800' :
                              'bg-rose-100 text-rose-800'
                            }`}>
                              {scoreObj.status}
                            </span>
                          </td>
                          <td className="p-2 text-center font-mono font-bold text-slate-800">
                            {scoreObj.score}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Security & Vulnerability Findings */}
          {vulnerabilities.length > 0 && (
            <div className="mb-6 p-4 rounded-xl border border-rose-300 bg-rose-50 text-xs">
              <h4 className="font-bold text-rose-900 flex items-center gap-1.5 mb-2">
                <ShieldCheck className="w-4 h-4 text-rose-700" />
                Temuan Celah Keamanan & Kerentanan Kode (Wajib Diperbaiki)
              </h4>
              <div className="space-y-2">
                {vulnerabilities.map((v, i) => (
                  <div key={i} className="p-2 rounded bg-white border border-rose-200">
                    <span className="font-bold text-rose-800">[{v.severity}] {v.rule}</span>
                    <span className="text-slate-500 ml-2">File: {v.file}</span>
                    <p className="text-slate-700 mt-1">{v.description}</p>
                    <div className="text-emerald-800 font-mono text-[11px] mt-1">
                      Solusi: {v.remediation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Audit Deteksi Pemanfaatan AI & Bimbingan Pedagogis */}
          <div className="mb-6 p-4 rounded-xl border border-purple-200 bg-purple-50/50 text-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-200 pb-3">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-purple-700 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-purple-950">
                    Audit Deteksi Pemanfaatan Generative AI & Bimbingan Pedagogis
                  </h4>
                  <span className="text-[11px] text-purple-700">
                    Analisis Estimasi AI, Indikator per Modul, Nasihat Akademik, dan Scope PR Mahasiswa
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2.5 py-1 rounded-lg bg-purple-100 text-purple-900 font-mono font-bold text-xs border border-purple-300">
                  {aiAudit.overallPercentage}% AI-Assisted
                </span>
                <span className="text-[10px] font-semibold text-purple-800 bg-purple-200/60 px-2 py-0.5 rounded">
                  {aiAudit.classification}
                </span>
              </div>
            </div>

            <p className="text-slate-700 text-[11px] leading-relaxed">
              <strong>Ringkasan Deteksi:</strong> {aiAudit.summaryAnalysis}
            </p>

            {/* Feature Breakdown Table */}
            <div className="border border-purple-200 rounded-lg overflow-hidden bg-white">
              <div className="bg-purple-100/70 p-2 font-bold text-purple-950 text-[11px]">
                Tabel Rincian Fitur & Indikator Deteksi AI:
              </div>
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="bg-purple-50 text-purple-900 border-b border-purple-200 font-semibold">
                    <th className="p-2 w-1/4">Modul / Fitur</th>
                    <th className="p-2 w-1/12 text-center">Estimasi AI</th>
                    <th className="p-2 w-1/3">Kenapa Diasumsikan AI?</th>
                    <th className="p-2 w-1/3">Fitur yang Diwakili AI</th>
                  </tr>
                </thead>
                <tbody>
                  {aiAudit.featureBreakdown && aiAudit.featureBreakdown.map((f, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-purple-50/30">
                      <td className="p-2 font-semibold text-slate-900">{f.feature}</td>
                      <td className="p-2 text-center font-mono font-bold text-purple-800">{f.aiPercentage}%</td>
                      <td className="p-2 text-slate-700 text-[10px] leading-tight">{f.indicator}</td>
                      <td className="p-2 text-slate-700 text-[10px] leading-tight">{f.whatAiDid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Dosen Human Advice Box */}
            <div className="p-3.5 rounded-lg border border-amber-300 bg-amber-50/80 text-amber-950 space-y-1.5">
              <span className="font-bold text-xs text-amber-900 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-700" />
                Nasihat Manusiawi Dosen Penguji & Pembimbing (Faik Bajsair, S.Kom., M.Kom.):
              </span>
              <p className="italic text-[11px] leading-relaxed font-serif bg-white/70 p-2.5 rounded border border-amber-200">
                "{aiAudit.dosenAdvice}"
              </p>
            </div>

            {/* Homework PR Scope */}
            <div className="space-y-2">
              <span className="font-bold text-xs text-indigo-950 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-700" />
                Daftar PR (Scope Materi yang Wajib Dipelajari Mahasiswa Sebelum Sidang):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                {aiAudit.homeworkScope && aiAudit.homeworkScope.map((hw, i) => (
                  <div key={i} className="p-2.5 rounded-lg border border-indigo-200 bg-white">
                    <span className="font-bold text-indigo-900 block mb-0.5">
                      PR {i + 1}: {hw.topic}
                    </span>
                    <p className="text-slate-600 text-[10px] leading-tight mb-1.5">
                      {hw.description}
                    </p>
                    <div className="text-[10px] text-amber-900 bg-amber-50 p-1.5 rounded border border-amber-200 italic font-mono">
                      Pertanyaan Uji: "{hw.guidingQuestions}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Penilaian Deskriptif Resmi Dosen Penguji */}
          <div className="mb-6 p-4 rounded-xl border border-slate-300 bg-slate-50 text-xs space-y-3">
            <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-slate-900">
                  Penilaian Deskriptif Resmi Dosen Penguji (Faik Bajsair, S.Kom., M.Kom.)
                </h4>
                <span className="text-[11px] text-slate-600">
                  Evaluasi Holistik Capaian Kerja Praktik & Kesiapan Aplikasi
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold text-[10px]">
                {descriptive.academicRole}
              </span>
            </div>

            <p className="text-slate-800 leading-relaxed text-[11px]">
              <strong>Ringkasan Eksekutif:</strong> {descriptive.executiveSummary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <strong className="text-blue-900 block mb-1">🏢 Kesesuaian Bisnis ERP UMKM:</strong>
                <p className="text-slate-700 leading-tight text-[10px]">{descriptive.businessModelEvaluation}</p>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <strong className="text-teal-900 block mb-1">⚙️ Kualitas Arsitektur Teknis:</strong>
                <p className="text-slate-700 leading-tight text-[10px]">{descriptive.technicalArchitectureEvaluation}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200">
                <strong className="text-emerald-900 block mb-1">✓ Poin Keunggulan Proyek:</strong>
                <ul className="space-y-1 text-slate-700 text-[10px]">
                  {descriptive.strengths && descriptive.strengths.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
              <div className="p-2.5 rounded bg-amber-50 border border-amber-200">
                <strong className="text-amber-900 block mb-1">! Celah yang Perlu Diperbaiki:</strong>
                <ul className="space-y-1 text-slate-700 text-[10px]">
                  {descriptive.weaknesses && descriptive.weaknesses.map((w, i) => (
                    <li key={i}>• {w}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-indigo-50 border border-indigo-200 text-[11px]">
              <strong className="text-indigo-950 block">Keputusan Sidang / Evaluasi:</strong>
              <span className="font-bold text-indigo-900 text-xs block mt-0.5">
                {descriptive.finalVerdict}
              </span>
              <p className="text-slate-700 text-[10px] mt-1 leading-tight">
                {descriptive.recommendations}
              </p>
            </div>
          </div>

          {/* Lecturer Notes & Signature Section */}
          <div className="mb-6">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-2">
              Catatan & Arahan Pembinaan Dosen:
            </h4>
            <div className="no-print mb-2">
              <textarea
                rows={3}
                value={lecturerNotes}
                onChange={(e) => setLecturerNotes(e.target.value)}
                onBlur={saveNotes}
                placeholder="Tuliskan evaluasi, saran perbaikan, atau batas waktu revisi untuk mahasiswa..."
                className="w-full p-2.5 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-900"
              />
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 whitespace-pre-wrap leading-relaxed">
              {lecturerNotes || 'Aplikasi dinilai sesuai standar silabus pemrograman dan arsitektur enterprise.'}
            </div>
          </div>

          {/* Signature Box */}
          <div className="pt-6 border-t border-slate-300 flex justify-end">
            <div className="text-center text-xs min-w-[220px]">
              <span className="text-slate-500 block mb-12">
                Dosen Penguji / Quality Analyst,
              </span>
              <div className="font-bold text-slate-900 border-b border-slate-900 pb-1">
                Faik Bajsair, S.Kom., M.Kom.
              </div>
              <span className="text-slate-600 text-[11px] block mt-0.5">
                Dosen Program Studi Sistem Informasi
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { SYLLABUS_SECTIONS } from '../data/syllabusRubric';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ListTodo, 
  HelpCircle, 
  ArrowRight,
  ShieldAlert,
  FileCheck2,
  FileX
} from 'lucide-react';

export default function RemediationActionPlan({ currentProject }) {
  const scores = currentProject.scores || {};
  const vulnerabilities = currentProject.vulnerabilities || [];

  const completedItems = [];
  const incompleteItems = [];

  SYLLABUS_SECTIONS.forEach((section) => {
    section.items.forEach((item) => {
      const scoreObj = scores[item.id] || { status: 'MISSING', score: 0, note: '' };
      const status = scoreObj.status;
      const note = scoreObj.note || '';

      if (status === 'PASSED') {
        completedItems.push({
          ...item,
          sectionTitle: section.title,
          slideRef: section.slideRef,
          score: scoreObj.score,
          note
        });
      } else {
        incompleteItems.push({
          ...item,
          sectionTitle: section.title,
          slideRef: section.slideRef,
          status,
          score: scoreObj.score,
          note
        });
      }
    });
  });

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
            <ListTodo className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              Status Tuntas & Rencana Aksi Remediasi (Action Plan Mahasiswa)
            </h3>
            <p className="text-xs text-slate-400">
              Panduan terperinci yang memetakan apa yang sudah selesai dengan baik dan apa saja yang wajib dilengkapi/diperbaiki oleh mahasiswa.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
            <FileCheck2 className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <span className="text-2xl font-bold font-mono text-emerald-400">
                {completedItems.length} Fitur
              </span>
              <span className="text-xs text-slate-300 block">
                Sudah Tuntas & Memenuhi Ketentuan Silabus
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-rose-950/20 border border-rose-900/40">
            <FileX className="w-8 h-8 text-rose-400 shrink-0" />
            <div>
              <span className="text-2xl font-bold font-mono text-rose-400">
                {incompleteItems.length} Fitur
              </span>
              <span className="text-xs text-slate-300 block">
                Belum Tuntas / Harus Dilengkapi & Diperbaiki
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Incomplete / To-Do Items Section (High Priority) */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              Daftar Fitur yang BELUM TUNTAS & Wajib Dilengkapi Mahasiswa
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Mahasiswa harus menyelesaikan daftar berikut untuk menaikkan nilai ke Grade A.
            </p>
          </div>
          <span className="text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2.5 py-1 rounded-full">
            {incompleteItems.length} Agenda Revisi
          </span>
        </div>

        <div className="pt-4 space-y-3">
          {incompleteItems.length === 0 ? (
            <div className="text-center py-8 text-emerald-400 text-xs">
              Luar biasa! Seluruh 41 kriteria silabus telah tuntas 100%. Tidak ada tanggungan revisi.
            </div>
          ) : (
            incompleteItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950 border border-rose-900/40 text-xs space-y-2.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {item.status === 'PARTIAL' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        SEBAGIAN ({item.score}%)
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        BELUM DIBUAT (0%)
                      </span>
                    )}
                    <span className="font-bold text-white text-sm">
                      {item.name}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {item.slideRef}
                  </span>
                </div>

                <div className="pl-2 border-l-2 border-slate-700 space-y-1">
                  <div className="text-slate-300">
                    <span className="font-semibold text-slate-400">Ketentuan Wajib: </span>
                    {item.requirement}
                  </div>
                  {item.note && (
                    <div className="text-amber-300 text-[11px]">
                      <span className="font-semibold text-amber-400">Catatan Dosen: </span>
                      {item.note}
                    </div>
                  )}
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-brand-300 flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Arahan Solusi Teknis: </strong>
                    Buat controller, rute (<code className="text-amber-300">{item.targetRoute || 'modul ERP'}</code>), serta pastikan form dan tombol terhubung ke database.
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Completed Items Section */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Daftar Fitur yang SUDAH TUNTAS (Verified & Completed)
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Modul-modul yang telah lolos pengujian fungsional dan dinilai baik oleh dosen.
            </p>
          </div>
          <span className="text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full">
            {completedItems.length} Fitur Terpenuhi
          </span>
        </div>

        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {completedItems.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-950/60 border border-emerald-900/30 text-xs space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {item.name}
                </span>
                <span className="font-mono font-bold text-emerald-400">
                  {item.score} / 100
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate pl-5">
                {item.note || item.requirement}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

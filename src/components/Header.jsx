import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Printer, 
  PlusCircle, 
  Sparkles, 
  FileText,
  Layers,
  Code2,
  CheckCircle2,
  Lock,
  LogOut,
  BrainCircuit
} from 'lucide-react';

export default function Header({ 
  currentProject, 
  onNewProject, 
  onOpenReport, 
  activeTab, 
  setActiveTab,
  onLockSession
}) {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand & Lecturer Credentials */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 via-brand-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-brand-500/20 ring-1 ring-white/20">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  APEX-QA<span className="text-brand-400 font-extrabold text-xs px-1.5 py-0.5 rounded bg-brand-500/20 border border-brand-500/30">ENTERPRISE</span>
                </span>
                <span className="text-xs text-slate-400 border-l border-slate-700 pl-2 hidden sm:inline">
                  Quality Assurance & Academic Tester
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AES-256 ENCRYPTED
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-semibold text-brand-300 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                  Faik Bajsair, S.Kom., M.Kom.
                </span>
                <span className="text-slate-500 text-xs">•</span>
                <span className="text-xs text-slate-400">
                  Dosen Program Studi Sistem Informasi
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onNewProject}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors shadow-sm"
            >
              <PlusCircle className="w-3.5 h-3.5 text-brand-400" />
              <span className="hidden md:inline">Nilai</span> Mahasiswa Baru
            </button>

            <button
              onClick={onOpenReport}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-md shadow-brand-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5" />
              Cetak Nilai
            </button>

            <button
              onClick={onLockSession}
              className="p-2 text-xs font-medium rounded-lg bg-slate-900 hover:bg-rose-950/60 text-slate-400 hover:text-rose-300 border border-slate-800 hover:border-rose-900 transition shadow-sm"
              title="Kunci Dashboard (Enkripsi & Sembunyikan Data)"
            >
              <Lock className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 border-t border-slate-800/80 pt-1 -mb-px overflow-x-auto">
          {[
            { id: 'workbench', label: 'Workbench Pengujian Halaman & Tombol', icon: Layers },
            { id: 'ai_audit', label: 'Audit Deteksi AI & Bimbingan Dosen', icon: BrainCircuit },
            { id: 'crawler', label: 'Live Cloud & Multi-Route Deep Scanner', icon: Sparkles },
            { id: 'code_security', label: 'Audit GitHub & Kode (OWASP Top 10)', icon: Code2 },
            { id: 'erp_simulator', label: 'Simulator Integrasi ERP (Slide 6)', icon: CheckCircle2 },
            { id: 'remediation', label: 'Status Tuntas & Rencana Perbaikan', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-brand-500 text-brand-400 bg-brand-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-400' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

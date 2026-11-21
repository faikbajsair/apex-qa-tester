import React from 'react';
import { SYLLABUS_SECTIONS } from '../data/syllabusRubric';
import { Award, CheckCircle2, AlertTriangle, XCircle, TrendingUp, ShieldAlert } from 'lucide-react';

export default function ScoreOverviewCard({ currentProject }) {
  const scores = currentProject.scores || {};
  const vulnerabilities = currentProject.vulnerabilities || [];

  // Calculate statistics & scores
  let totalWeightedScore = 0;
  let totalWeight = 0;
  let passedCount = 0;
  let partialCount = 0;
  let missingCount = 0;
  let totalItems = 0;

  const sectionSummaries = SYLLABUS_SECTIONS.map((section) => {
    let sectionTotalItemScore = 0;
    let sectionMaxScore = 0;

    section.items.forEach((item) => {
      totalItems++;
      const itemScoreObj = scores[item.id];
      const itemScore = itemScoreObj ? Number(itemScoreObj.score || 0) : 0;
      const itemStatus = itemScoreObj ? itemScoreObj.status : 'MISSING';

      if (itemStatus === 'PASSED') passedCount++;
      else if (itemStatus === 'PARTIAL') partialCount++;
      else missingCount++;

      sectionTotalItemScore += (itemScore * (item.weight || 10));
      sectionMaxScore += (100 * (item.weight || 10));
    });

    const sectionPercentage = sectionMaxScore > 0 ? (sectionTotalItemScore / sectionMaxScore) * 100 : 0;
    const weightedContribution = (sectionPercentage * section.weight) / 100;
    
    totalWeightedScore += weightedContribution;
    totalWeight += section.weight;

    return {
      id: section.id,
      title: section.title,
      weight: section.weight,
      percentage: Math.round(sectionPercentage),
      itemsCount: section.items.length
    };
  });

  const finalScore = Math.min(100, Math.max(0, Math.round(totalWeightedScore)));

  // Determine Letter Grade & predicate
  let gradeLetter = 'E';
  let gradeBadgeColor = 'from-red-600 to-rose-700 text-white border-red-500';
  let gradePredicate = 'Sangat Kurang / Tidak Memenuhi Standar ERP';

  if (finalScore >= 85) {
    gradeLetter = 'A';
    gradeBadgeColor = 'from-emerald-500 to-teal-700 text-white border-emerald-400';
    gradePredicate = 'Sangat Memuaskan (Production-Ready ERP)';
  } else if (finalScore >= 75) {
    gradeLetter = 'B+';
    gradeBadgeColor = 'from-cyan-500 to-blue-700 text-white border-cyan-400';
    gradePredicate = 'Baik Sekali (Minor Revision Needed)';
  } else if (finalScore >= 65) {
    gradeLetter = 'B';
    gradeBadgeColor = 'from-blue-600 to-indigo-700 text-white border-blue-400';
    gradePredicate = 'Baik (Perlu Penyempurnaan Integrasi)';
  } else if (finalScore >= 55) {
    gradeLetter = 'C';
    gradeBadgeColor = 'from-amber-500 to-orange-700 text-white border-amber-400';
    gradePredicate = 'Cukup (Banyak Fitur Belum Tuntas)';
  } else if (finalScore >= 40) {
    gradeLetter = 'D';
    gradeBadgeColor = 'from-orange-600 to-red-700 text-white border-orange-400';
    gradePredicate = 'Kurang (Tidak Memenuhi Standar Minimal)';
  }

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Main Score Display */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/70 border border-slate-800 text-center relative">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Nilai Akhir Uji Kualitas
            </span>
          </div>

          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-extrabold tracking-tight text-white font-mono">
              {finalScore}
            </span>
            <span className="text-xl text-slate-500 font-medium">/ 100</span>
          </div>

          {/* Letter Grade Pill */}
          <div className={`mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm bg-gradient-to-r ${gradeBadgeColor} shadow-lg border`}>
            <span>GRADE {gradeLetter}</span>
            <span className="text-xs opacity-90 font-normal">({gradePredicate})</span>
          </div>

          <p className="mt-3 text-[11px] text-slate-400 max-w-xs">
            Dihitung dari 41 kriteria rubrik silabus, pengujian halaman, tombol, dan integrasi backend ERP.
          </p>
        </div>

        {/* Feature Completion Metrics */}
        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span>Tuntas (Passed)</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-emerald-400 font-mono">
                {passedCount}
                <span className="text-xs text-slate-500 font-normal ml-1">/ {totalItems}</span>
              </div>
              <span className="text-[11px] text-slate-400">
                {Math.round((passedCount / totalItems) * 100)}% fitur sempurna
              </span>
            </div>

            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span>Sebagian (Partial)</span>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-amber-400 font-mono">
                {partialCount}
                <span className="text-xs text-slate-500 font-normal ml-1">/ {totalItems}</span>
              </div>
              <span className="text-[11px] text-slate-400">
                Perlu revisi minor
              </span>
            </div>

            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span>Belum Ada (Missing)</span>
                <XCircle className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-2xl font-bold text-rose-400 font-mono">
                {missingCount}
                <span className="text-xs text-slate-500 font-normal ml-1">/ {totalItems}</span>
              </div>
              <span className="text-[11px] text-slate-400">
                Kekurangan mayor
              </span>
            </div>

            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span>Kerentanan Keamanan</span>
                <ShieldAlert className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-purple-400 font-mono">
                {vulnerabilities.length}
                <span className="text-xs text-slate-500 font-normal ml-1">isu</span>
              </div>
              <span className="text-[11px] text-slate-400">
                Audit OWASP
              </span>
            </div>
          </div>

          {/* Section Progress Bars */}
          <div className="space-y-2 pt-1">
            <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Distribusi Capaian per Modul Silabus:</span>
              <span className="text-slate-400 text-[11px]">Bobot Tertimbang</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {sectionSummaries.map((sec) => (
                <div key={sec.id} className="text-xs">
                  <div className="flex justify-between text-slate-300 mb-1">
                    <span className="truncate max-w-[240px] text-slate-300" title={sec.title}>
                      {sec.title}
                    </span>
                    <span className="font-mono font-medium text-slate-200">
                      {sec.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        sec.percentage >= 80 ? 'bg-emerald-500' :
                        sec.percentage >= 60 ? 'bg-brand-500' :
                        sec.percentage >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${sec.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

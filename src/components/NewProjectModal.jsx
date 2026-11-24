import React, { useState } from 'react';
import { X, UserPlus, Sparkles, Cloud } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SYLLABUS_SECTIONS } from '../data/syllabusRubric';

export default function NewProjectModal({ isOpen, onClose, onCreateProject }) {
  const [formData, setFormData] = useState({
    studentName: '',
    studentNim: '',
    projectName: '',
    courseName: 'Pemrograman Web Enterprise & ERP',
    academicYear: 'Semester Ganjil 2026/2027',
    targetUrl: 'http://',
    githubRepoUrl: 'https://github.com/',
    hostingPlatform: 'Cloud / Web Hosting',
    framework: 'PHP / Web Fullstack',
    prodi: 'Sistem Informasi'
  });
  const [autoBaselineGrade, setAutoBaselineGrade] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.studentNim) {
      alert('Nama dan NIM mahasiswa wajib diisi!');
      return;
    }

    const initialScores = {};
    SYLLABUS_SECTIONS.forEach((sec) => {
      sec.items.forEach((item) => {
        initialScores[item.id] = {
          status: autoBaselineGrade ? 'PASSED' : 'MISSING',
          score: autoBaselineGrade ? 88 : 0,
          note: autoBaselineGrade 
            ? 'Fitur awal terdaftar untuk pengujian aplikasi mahasiswa. Siap dinilai & disesuaikan.' 
            : 'Belum dinilai.'
        };
      });
    });

    const newProject = {
      id: `student-${Date.now()}`,
      ...formData,
      evaluationDate: new Date().toISOString().split('T')[0],
      scores: initialScores,
      vulnerabilities: [],
      lecturerNotes: `Aplikasi ${formData.projectName || 'Mahasiswa'} terdaftar untuk evaluasi silabus ERP Dosen Faik Bajsair, S.Kom., M.Kom.`
    };

    onCreateProject(newProject);
    alert(`✓ Data Mahasiswa "${formData.studentName}" berhasil didaftarkan dan tersimpan permanen!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl p-6 text-xs">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <UserPlus className="w-5 h-5 text-emerald-400" />
            <span>Mulai Uji Submisi Cloud Mahasiswa Baru</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <label className="text-slate-300 block mb-1 font-semibold">Nama Lengkap Mahasiswa:</label>
            <input
              type="text"
              required
              placeholder="Contoh: Muhammad Farhan"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-slate-300 block mb-1 font-semibold">NIM Mahasiswa:</label>
              <input
                type="text"
                required
                placeholder="20210801099"
                value={formData.studentNim}
                onChange={(e) => setFormData({ ...formData, studentNim: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-semibold">Tahun / Semester:</label>
              <input
                type="text"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="text-slate-300 block mb-1 font-semibold">Judul Proyek Aplikasi:</label>
            <input
              type="text"
              required
              placeholder="Contoh: Optima ERP - Sistem E-Commerce Elektronik"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-slate-300 block mb-1 font-semibold flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5 text-emerald-400" />
              URL Live Hosting (Vercel / GitHub Pages / Netlify):
            </label>
            <input
              type="text"
              required
              placeholder="https://proyek-mahasiswa.vercel.app"
              value={formData.targetUrl}
              onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-emerald-300 font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-slate-300 block mb-1 font-semibold flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
              URL Repositori GitHub (Source Code Publik):
            </label>
            <input
              type="text"
              placeholder="https://github.com/username/repository"
              value={formData.githubRepoUrl}
              onChange={(e) => setFormData({ ...formData, githubRepoUrl: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-indigo-300 font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-slate-300 block mb-1 font-semibold">Platform Hosting:</label>
              <input
                type="text"
                placeholder="Vercel / GitHub Pages"
                value={formData.hostingPlatform}
                onChange={(e) => setFormData({ ...formData, hostingPlatform: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-semibold">Framework & Database:</label>
              <input
                type="text"
                placeholder="Next.js 14, Laravel, React"
                value={formData.framework}
                onChange={(e) => setFormData({ ...formData, framework: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl flex items-center gap-2.5">
            <input
              type="checkbox"
              id="autoBaselineGrade"
              checked={autoBaselineGrade}
              onChange={(e) => setAutoBaselineGrade(e.target.checked)}
              className="w-4 h-4 rounded text-emerald-500 bg-slate-950 border-slate-700 focus:ring-emerald-500"
            />
            <label htmlFor="autoBaselineGrade" className="text-xs text-emerald-200 cursor-pointer">
              <strong>Otomatis berikan nilai awal (Grade A / B+)</strong> berbasis kesiapan cloud agar langsung ternilai & tersimpan.
            </label>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md transition"
            >
              Daftarkan Submisi Cloud Mahasiswa
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

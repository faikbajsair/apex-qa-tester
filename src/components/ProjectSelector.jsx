import React, { useState, useEffect } from 'react';
import { UserCheck, Globe, Laptop, Calendar, Edit3, Trash2, Check, X, Cloud, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectSelector({ 
  projects, 
  currentProject, 
  onSelectProject, 
  onSaveProject, 
  onDeleteProject 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    studentName: currentProject.studentName,
    studentNim: currentProject.studentNim,
    projectName: currentProject.projectName,
    courseName: currentProject.courseName,
    academicYear: currentProject.academicYear,
    targetUrl: currentProject.targetUrl,
    githubRepoUrl: currentProject.githubRepoUrl || '',
    hostingPlatform: currentProject.hostingPlatform || 'Vercel / Cloud',
    framework: currentProject.framework,
  });

  useEffect(() => {
    setFormData({
      studentName: currentProject.studentName,
      studentNim: currentProject.studentNim,
      projectName: currentProject.projectName,
      courseName: currentProject.courseName,
      academicYear: currentProject.academicYear,
      targetUrl: currentProject.targetUrl,
      githubRepoUrl: currentProject.githubRepoUrl || '',
      hostingPlatform: currentProject.hostingPlatform || 'Vercel / Cloud',
      framework: currentProject.framework,
    });
  }, [currentProject]);

  const handleSave = () => {
    onSaveProject({
      ...currentProject,
      ...formData
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        
        {/* Project Dropdown / Switcher */}
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Submisi Mahasiswa:
          </label>
          <select
            value={currentProject.id}
            onChange={(e) => onSelectProject(e.target.value)}
            className="bg-slate-800 text-white font-medium text-sm rounded-lg px-3 py-1.5 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 max-w-md truncate"
          >
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.studentName} ({p.studentNim}) — {p.projectName}
              </option>
            ))}
          </select>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {!isEditing ? (
            <button
              onClick={() => {
                setFormData({
                  studentName: currentProject.studentName,
                  studentNim: currentProject.studentNim,
                  projectName: currentProject.projectName,
                  courseName: currentProject.courseName,
                  academicYear: currentProject.academicYear,
                  targetUrl: currentProject.targetUrl,
                  githubRepoUrl: currentProject.githubRepoUrl || '',
                  hostingPlatform: currentProject.hostingPlatform || 'Vercel / Cloud',
                  framework: currentProject.framework,
                });
                setIsEditing(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
            >
              <Edit3 className="w-3.5 h-3.5" />
              Edit Data Mahasiswa
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition"
              >
                <Check className="w-3.5 h-3.5" />
                Simpan
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800 rounded-lg transition"
              >
                <X className="w-3.5 h-3.5" />
                Batal
              </button>
            </>
          )}

          {projects.length > 1 && (
            <button
              onClick={() => onDeleteProject(currentProject.id)}
              className="inline-flex items-center p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-lg border border-rose-900/50 transition"
              title="Hapus Submisi Ini"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Metadata Detail or Edit Form */}
      {!isEditing ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Nama Mahasiswa</span>
            <span className="font-semibold text-white text-sm flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-brand-400" />
              {currentProject.studentName}
            </span>
            <span className="font-mono text-slate-400 text-[11px] block mt-0.5">
              NIM: {currentProject.studentNim}
            </span>
          </div>

          <div>
            <span className="text-slate-400 block mb-0.5">Mata Kuliah & Semester</span>
            <span className="text-slate-200 font-medium truncate block" title={currentProject.courseName}>
              {currentProject.courseName}
            </span>
            <span className="text-slate-400 text-[11px] block">{currentProject.academicYear}</span>
          </div>

          <div>
            <span className="text-slate-400 block mb-0.5">Judul Aplikasi</span>
            <span className="text-slate-200 font-semibold truncate block" title={currentProject.projectName}>
              {currentProject.projectName}
            </span>
            <span className="text-brand-300 text-[11px] font-mono block truncate">
              {currentProject.framework}
            </span>
          </div>

          <div>
            <span className="text-slate-400 block mb-0.5">Cloud Hosting Web</span>
            <a 
              href={currentProject.targetUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-mono text-[11px] flex items-center gap-1 hover:underline truncate"
              title="Buka website aplikasi yang di-hosting"
            >
              <Cloud className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{currentProject.targetUrl}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
            <span className="inline-block mt-1 px-1.5 py-0.2 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-900/50 text-[10px] font-medium">
              {currentProject.hostingPlatform || 'Cloud Deployed'}
            </span>
          </div>

          <div>
            <span className="text-slate-400 block mb-0.5">GitHub Repository</span>
            {currentProject.githubRepoUrl ? (
              <a 
                href={currentProject.githubRepoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-mono text-[11px] flex items-center gap-1 hover:underline truncate"
                title="Buka repositori source code di GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{currentProject.githubRepoUrl.replace('https://github.com/', '')}</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            ) : (
              <span className="text-slate-500 font-mono text-[11px]">- Belum ada link -</span>
            )}
            <span className="text-[10px] text-slate-500 block mt-0.5">Source code audit</span>
          </div>

          <div>
            <span className="text-slate-400 block mb-0.5">Status Pengujian</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-950/60 border border-brand-800 text-brand-300 font-medium">
              <Globe className="w-3 h-3" />
              Web / Browser Active
            </span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Audit: {currentProject.evaluationDate || '2026-11-22'}</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 text-xs">
          <div>
            <label className="text-slate-400 block mb-1">Nama Mahasiswa</label>
            <input
              type="text"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">NIM Mahasiswa</label>
            <input
              type="text"
              value={formData.studentNim}
              onChange={(e) => setFormData({ ...formData, studentNim: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500 font-mono"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Judul Proyek Aplikasi</label>
            <input
              type="text"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">URL Cloud Hosting (Vercel / GitHub Pages)</label>
            <input
              type="text"
              value={formData.targetUrl}
              onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
              placeholder="https://proyek-mahasiswa.vercel.app"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500 font-mono"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">URL Repositori GitHub</label>
            <input
              type="text"
              value={formData.githubRepoUrl}
              onChange={(e) => setFormData({ ...formData, githubRepoUrl: e.target.value })}
              placeholder="https://github.com/mahasiswa/proyek-erp"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500 font-mono"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Platform Hosting</label>
            <input
              type="text"
              value={formData.hostingPlatform}
              onChange={(e) => setFormData({ ...formData, hostingPlatform: e.target.value })}
              placeholder="Vercel / GitHub Pages / Netlify"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Mata Kuliah</label>
            <input
              type="text"
              value={formData.courseName}
              onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Framework & Database</label>
            <input
              type="text"
              value={formData.framework}
              onChange={(e) => setFormData({ ...formData, framework: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500"
              placeholder="Next.js 14, Laravel, React + Supabase"
            />
          </div>
        </div>
      )}
    </div>
  );
}

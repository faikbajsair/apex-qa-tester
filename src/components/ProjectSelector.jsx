import React, { useState, useEffect } from 'react';
import { UserCheck, Users, Globe, Laptop, Calendar, Edit3, Trash2, Check, X, Cloud, ExternalLink, Key, Copy, Shield, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectSelector({ 
  projects, 
  currentProject, 
  onSelectProject, 
  onSaveProject, 
  onDeleteProject 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const [formData, setFormData] = useState({
    studentName: currentProject.studentName,
    studentNim: currentProject.studentNim,
    projectName: currentProject.projectName,
    courseName: currentProject.courseName,
    academicYear: currentProject.academicYear,
    targetUrl: currentProject.targetUrl,
    adminUrl: currentProject.adminUrl || '',
    orderUrl: currentProject.orderUrl || '',
    githubRepoUrl: currentProject.githubRepoUrl || '',
    hostingPlatform: currentProject.hostingPlatform || 'Cloud Hosting',
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
      adminUrl: currentProject.adminUrl || '',
      orderUrl: currentProject.orderUrl || '',
      githubRepoUrl: currentProject.githubRepoUrl || '',
      hostingPlatform: currentProject.hostingPlatform || 'Cloud Hosting',
      framework: currentProject.framework,
    });
  }, [currentProject]);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSave = () => {
    const updatedPortals = [
      { title: 'Company Profile', url: formData.targetUrl, badge: 'Public' }
    ];
    if (formData.adminUrl && formData.adminUrl !== 'https://' && formData.adminUrl !== 'http://') {
      updatedPortals.push({ title: 'Backoffice / ERP Admin', url: formData.adminUrl, badge: 'Admin ERP' });
    }
    if (formData.orderUrl && formData.orderUrl !== 'https://' && formData.orderUrl !== 'http://') {
      updatedPortals.push({ title: 'QR Ordering (Pelanggan)', url: formData.orderUrl, badge: 'QR Customer' });
    }

    onSaveProject({
      ...currentProject,
      ...formData,
      portals: updatedPortals
    });
    setIsEditing(false);
  };

  const teamMembers = currentProject.teamMembers || [];

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl space-y-4">
      {/* Top Bar: Selector & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        
        {/* Project Dropdown / Switcher */}
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
            {teamMembers.length > 0 ? <Users className="w-3.5 h-3.5 text-brand-400" /> : <UserCheck className="w-3.5 h-3.5 text-brand-400" />}
            Submisi Mahasiswa:
          </label>
          <select
            value={currentProject.id}
            onChange={(e) => onSelectProject(e.target.value)}
            className="bg-slate-800 text-white font-medium text-sm rounded-lg px-3 py-1.5 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 max-w-lg truncate"
          >
            {projects.map((p) => {
              const prefix = p.classGroup ? `[${p.classGroup} - ${p.groupNumber || 'KP'}] ` : (p.teamMembers?.length > 0 ? `[KP ${p.teamMembers.length} Anggota] ` : '');
              const membersShort = p.teamMembers && p.teamMembers.length > 0 
                ? ` (${p.teamMembers.map(m => m.name.split(' ')[0]).join(', ')})`
                : ` (${p.studentName})`;
              return (
                <option key={p.id} value={p.id}>
                  {prefix}{p.projectName}{membersShort}
                </option>
              );
            })}
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
                  adminUrl: currentProject.adminUrl || '',
                  orderUrl: currentProject.orderUrl || '',
                  githubRepoUrl: currentProject.githubRepoUrl || '',
                  hostingPlatform: currentProject.hostingPlatform || 'Cloud Hosting',
                  framework: currentProject.framework,
                });
                setIsEditing(true);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
            >
              <Edit3 className="w-3.5 h-3.5" />
              Edit Data Submisi
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
        <div className="space-y-3.5">
          {/* Main 6-card grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">
                {teamMembers.length > 0 ? 'Tipe Submisi & Tim' : 'Nama Mahasiswa'}
              </span>
              <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                {teamMembers.length > 0 ? <Users className="w-4 h-4 text-brand-400" /> : <UserCheck className="w-4 h-4 text-brand-400" />}
                {teamMembers.length > 0 ? `Kelompok (${teamMembers.length} Orang)` : currentProject.studentName}
              </span>
              <span className="font-mono text-slate-400 text-[11px] block mt-0.5 truncate">
                {currentProject.studentNim}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block mb-0.5">Mata Kuliah & Semester</span>
              <span className="text-slate-200 font-medium truncate block" title={currentProject.courseName}>
                {currentProject.courseName}
              </span>
              <span className="text-slate-400 text-[11px] block">{currentProject.academicYear}</span>
            </div>

            <div className="lg:col-span-2">
              <span className="text-slate-400 block mb-0.5">Judul Proyek Aplikasi</span>
              <span className="text-slate-200 font-semibold truncate block" title={currentProject.projectName}>
                {currentProject.projectName}
              </span>
              <span className="text-brand-300 text-[11px] font-mono block truncate" title={currentProject.framework}>
                {currentProject.framework}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block mb-0.5">Hosting & Repositori</span>
              <a 
                href={currentProject.targetUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-mono text-[11px] flex items-center gap-1 hover:underline truncate"
                title={currentProject.targetUrl}
              >
                <Cloud className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{currentProject.targetUrl.replace(/^https?:\/\//, '')}</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              {currentProject.githubRepoUrl && (
                <a 
                  href={currentProject.githubRepoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 font-mono text-[11px] flex items-center gap-1 hover:underline truncate mt-1"
                >
                  <GithubIcon className="w-3 h-3 shrink-0" />
                  <span className="truncate">{currentProject.githubRepoUrl.replace('https://github.com/', '')}</span>
                </a>
              )}
            </div>

            <div>
              <span className="text-slate-400 block mb-0.5">Platform & Audit</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-950/60 border border-brand-800 text-brand-300 font-medium">
                <Globe className="w-3 h-3" />
                {currentProject.hostingPlatform || 'Cloud Server'}
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">Audit: {currentProject.evaluationDate || '2026-11-24'}</span>
            </div>
          </div>

          {/* Anggota Kelompok Kerja Praktik (KP) */}
          {teamMembers.length > 0 && (
            <div className="pt-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-3.5 h-3.5 text-brand-400" />
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Anggota Mahasiswa Kelompok Kerja Praktik ({teamMembers.length} Orang):
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {teamMembers.map((m, idx) => (
                  <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-xl p-2.5 flex items-center gap-2.5 hover:border-slate-700 transition">
                    <span className="w-7 h-7 rounded-lg bg-brand-500/20 border border-brand-500/30 text-brand-300 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="font-semibold text-white text-xs block truncate" title={m.name}>
                        {m.name}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px] block">
                        {m.nim}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Multi-Portal & Credentials Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 pt-3 border-t border-slate-800/80">
            {/* Multi-Portal Links */}
            <div className="lg:col-span-7 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold text-[11px] mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-brand-400" />
                Portal URL Uji:
              </span>
              
              {/* Company profile */}
              <a
                href={currentProject.targetUrl}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 hover:text-white hover:bg-emerald-900 transition flex items-center gap-1.5"
                title="Company Profile / Landing"
              >
                <span>🌐 Landing / Profile</span>
                <ExternalLink className="w-3 h-3 text-emerald-400" />
              </a>

              {/* Admin ERP */}
              {(currentProject.adminUrl || currentProject.portals?.find(p => p.url.includes('admin'))) && (
                <a
                  href={currentProject.adminUrl || currentProject.portals?.find(p => p.url.includes('admin'))?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-blue-950/80 border border-blue-800/80 text-blue-300 hover:text-white hover:bg-blue-900 transition flex items-center gap-1.5"
                  title="Backoffice / ERP Admin"
                >
                  <span>🏢 Backoffice / ERP</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
              )}

              {/* QR Order */}
              {(currentProject.orderUrl || currentProject.portals?.find(p => p.url.includes('order'))) && (
                <a
                  href={currentProject.orderUrl || currentProject.portals?.find(p => p.url.includes('order'))?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-amber-950/80 border border-amber-800/80 text-amber-300 hover:text-white hover:bg-amber-900 transition flex items-center gap-1.5"
                  title="Pemesanan Pelanggan (QR Order Token)"
                >
                  <span>📱 QR Ordering (Token)</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              )}
            </div>

            {/* Quick Demo Credentials */}
            {currentProject.demoCredentials && (
              <div className="lg:col-span-5 flex flex-wrap items-center justify-start lg:justify-end gap-2 text-[11px]">
                <div className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 flex items-center gap-2">
                  <span className="text-slate-400 font-semibold">Admin:</span>
                  <code className="text-amber-300 font-mono text-[10px]">
                    {currentProject.demoCredentials.admin?.username || 'owner@tokopi.test'}
                  </code>
                  <button
                    onClick={() => handleCopy(`${currentProject.demoCredentials.admin?.username} | ${currentProject.demoCredentials.admin?.password}`, 'admin')}
                    className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-slate-800 transition"
                    title="Salin Kredensial Admin"
                  >
                    {copiedKey === 'admin' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 flex items-center gap-2">
                  <span className="text-slate-400 font-semibold">Pass:</span>
                  <code className="text-slate-200 font-mono text-[10px]">
                    {currentProject.demoCredentials.admin?.password || 'password'}
                  </code>
                  <button
                    onClick={() => handleCopy(currentProject.demoCredentials.admin?.password || 'password', 'pass')}
                    className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-slate-800 transition"
                    title="Salin Password Admin"
                  >
                    {copiedKey === 'pass' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Edit Form */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs">
          <div>
            <label className="text-slate-400 block mb-1">Nama Mahasiswa / Kelompok</label>
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
            <label className="text-slate-400 block mb-1">URL Landing / Company Profile</label>
            <input
              type="text"
              value={formData.targetUrl}
              onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
              placeholder="https://tokopi.my.id"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500 font-mono"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">URL Backoffice / ERP Admin</label>
            <input
              type="text"
              value={formData.adminUrl}
              onChange={(e) => setFormData({ ...formData, adminUrl: e.target.value })}
              placeholder="https://admin.tokopi.my.id"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500 font-mono"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">URL Pemesanan Pelanggan (QR Order)</label>
            <input
              type="text"
              value={formData.orderUrl}
              onChange={(e) => setFormData({ ...formData, orderUrl: e.target.value })}
              placeholder="https://order.tokopi.my.id/t.php?token=..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500 font-mono"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">URL Repositori GitHub</label>
            <input
              type="text"
              value={formData.githubRepoUrl}
              onChange={(e) => setFormData({ ...formData, githubRepoUrl: e.target.value })}
              placeholder="https://github.com/RIOFIKRIRAMADHAN/TOKOPI"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500 font-mono"
            />
          </div>

          <div>
            <label className="text-slate-400 block mb-1">Platform Hosting</label>
            <input
              type="text"
              value={formData.hostingPlatform}
              onChange={(e) => setFormData({ ...formData, hostingPlatform: e.target.value })}
              placeholder="Cloud (Rumahweb) / Vercel"
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
              placeholder="PHP 7.4 native + Bootstrap 5, Chart.js, Midtrans QRIS / MySQL"
            />
          </div>
        </div>
      )}
    </div>
  );
}

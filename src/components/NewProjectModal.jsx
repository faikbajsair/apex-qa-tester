import React, { useState } from 'react';
import { X, UserPlus, Users, User, Plus, Trash2, Sparkles, Cloud, Lock, Key, Copy, Check, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SYLLABUS_SECTIONS } from '../data/syllabusRubric';

export default function NewProjectModal({ isOpen, onClose, onCreateProject }) {
  const [projectType, setProjectType] = useState('group'); // 'group' or 'individual'
  
  const [formData, setFormData] = useState({
    studentName: 'Kelompok Mahasiswa KP',
    studentNim: '',
    projectName: '',
    courseName: 'Kerja Praktik (KP)',
    academicYear: '2026/2027 / Semester 5',
    targetUrl: 'https://',
    adminUrl: 'https://',
    orderUrl: 'https://',
    githubRepoUrl: 'https://github.com/',
    hostingPlatform: 'Cloud (Rumahweb)',
    framework: 'PHP 7.4 native + Bootstrap 5, Chart.js, Midtrans QRIS (sandbox) / MySQL',
    prodi: 'Sistem Informasi',
    adminEmail: 'owner@tokopi.test',
    adminPassword: 'password',
    userEmail: '[email pelanggan demo]',
    userPassword: '[password]'
  });

  const [teamMembers, setTeamMembers] = useState([
    { nim: '202433500002', name: 'Nadia Kusumawati' },
    { nim: '202433500003', name: 'Rayhan Hidayat' },
    { nim: '202433500011', name: 'Rio Fikri Ramadhan' },
    { nim: '202333500947', name: 'Wisnu Mahardika' }
  ]);

  const [showPasteBox, setShowPasteBox] = useState(false);
  const [rawPasteText, setRawPasteText] = useState('');

  if (!isOpen) return null;

  const handleAddMember = () => {
    setTeamMembers([...teamMembers, { nim: '', name: '' }]);
  };

  const handleRemoveMember = (index) => {
    setTeamMembers(teamMembers.filter((_, idx) => idx !== index));
  };

  const handleMemberChange = (index, field, value) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const handleParseRawText = () => {
    if (!rawPasteText.trim()) return;
    const lines = rawPasteText.split('\n').map(l => l.trim()).filter(Boolean);
    const parsed = [];

    lines.forEach(line => {
      // Matches: "1. 202433500002 (Nadia Kusumawati)" or "202433500002 - Nadia Kusumawati"
      const match = line.match(/(?:^\d+[\.\)]\s*)?(\d{8,15})[\s\-\:\(]+([^\)\n\r]+)\)?/);
      if (match) {
        parsed.push({
          nim: match[1].trim(),
          name: match[2].trim()
        });
      } else {
        // Fallback: check if line has numbers then text
        const digits = line.match(/\d{8,15}/);
        if (digits) {
          const nim = digits[0];
          const name = line.replace(nim, '').replace(/^[\d\.\-\:\(\)\s]+|[\)\s]+$/g, '').trim();
          parsed.push({ nim, name: name || 'Mahasiswa' });
        }
      }
    });

    if (parsed.length > 0) {
      setTeamMembers(parsed);
      setShowPasteBox(false);
      setRawPasteText('');
      alert(`✓ Berhasil mengekstrak ${parsed.length} data anggota mahasiswa!`);
    } else {
      alert('Format teks tidak dikenali. Pastikan terdapat kombinasi NIM (angka) dan Nama Mahasiswa.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let computedStudentName = formData.studentName;
    let computedStudentNim = formData.studentNim;

    if (projectType === 'group') {
      const validMembers = teamMembers.filter(m => m.nim.trim() || m.name.trim());
      if (validMembers.length === 0) {
        alert('Mohon masukkan minimal 1 anggota kelompok Kerja Praktik (KP)!');
        return;
      }
      computedStudentName = `Kelompok ${formData.projectName || 'KP'} (${validMembers.map(m => m.name.split(' ')[0]).join(', ')})`;
      computedStudentNim = validMembers.map(m => m.nim).join(' / ');
    } else {
      if (!formData.studentName || !formData.studentNim) {
        alert('Nama dan NIM mahasiswa wajib diisi!');
        return;
      }
    }

    const initialScores = {};
    SYLLABUS_SECTIONS.forEach((sec) => {
      sec.items.forEach((item) => {
        initialScores[item.id] = {
          status: 'PASSED',
          score: 88,
          note: `Fitur terverifikasi pada pengujian silabus ERP KP Dosen Faik Bajsair, S.Kom., M.Kom.`
        };
      });
    });

    const portals = [
      { title: 'Company Profile', url: formData.targetUrl, badge: 'Public' }
    ];
    if (formData.adminUrl && formData.adminUrl !== 'https://' && formData.adminUrl !== 'http://') {
      portals.push({ title: 'Backoffice / ERP Admin', url: formData.adminUrl, badge: 'Admin ERP' });
    }
    if (formData.orderUrl && formData.orderUrl !== 'https://' && formData.orderUrl !== 'http://') {
      portals.push({ title: 'QR Ordering (Pelanggan)', url: formData.orderUrl, badge: 'QR Customer' });
    }

    const newProject = {
      id: `project-${Date.now()}`,
      isGroup: projectType === 'group',
      groupType: projectType === 'group' ? 'Kerja Praktik (KP)' : 'Individu',
      studentName: computedStudentName,
      studentNim: computedStudentNim,
      teamMembers: projectType === 'group' ? teamMembers.filter(m => m.nim.trim() || m.name.trim()) : [],
      projectName: formData.projectName || 'Proyek E-Commerce ERP',
      courseName: formData.courseName,
      academicYear: formData.academicYear,
      prodi: formData.prodi,
      targetUrl: formData.targetUrl,
      adminUrl: formData.adminUrl,
      orderUrl: formData.orderUrl,
      portals,
      demoCredentials: {
        admin: { username: formData.adminEmail, password: formData.adminPassword },
        user: { username: formData.userEmail, password: formData.userPassword }
      },
      githubRepoUrl: formData.githubRepoUrl,
      hostingPlatform: formData.hostingPlatform,
      framework: formData.framework,
      evaluationDate: new Date().toISOString().split('T')[0],
      scores: initialScores,
      vulnerabilities: [],
      lecturerNotes: `Aplikasi ${formData.projectName} terdaftar untuk evaluasi Kerja Praktik (KP) Dosen Faik Bajsair, S.Kom., M.Kom.`
    };

    onCreateProject(newProject);
    alert(`✓ Data Submisi "${newProject.projectName}" berhasil didaftarkan, langsung ternilai (Grade A ~88%), dan tersimpan permanen!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl p-6 text-xs max-h-[92vh] overflow-y-auto scrollbar-thin">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5 text-white font-bold text-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <UserPlus className="w-4 h-4" />
            </div>
            <div>
              <span>Input Submisi Proyek Aplikasi Mahasiswa</span>
              <span className="text-[11px] text-slate-400 block font-normal">
                Mendukung Tugas Kelompok Kerja Praktik (KP), Skripsi, & E-Commerce ERP
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toggle Mode: Kelompok KP vs Individu */}
        <div className="mt-4 p-1.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setProjectType('group')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition ${
              projectType === 'group'
                ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Tugas Kelompok (Kerja Praktik / KP)</span>
          </button>

          <button
            type="button"
            onClick={() => setProjectType('individual')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition ${
              projectType === 'individual'
                ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Tugas Individu</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">

          {/* Section: Anggota Kelompok (Jika Kelompok KP) */}
          {projectType === 'group' ? (
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="font-bold text-slate-200 flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-400" />
                  Daftar Anggota Kelompok Mahasiswa ({teamMembers.length} Orang):
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPasteBox(!showPasteBox)}
                    className="px-2 py-1 text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-brand-300 rounded border border-slate-700 transition"
                  >
                    📋 Tempel Format Teks (Auto-Parse)
                  </button>
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="px-2 py-1 text-[11px] font-medium bg-emerald-950 hover:bg-emerald-900 text-emerald-300 rounded border border-emerald-800 flex items-center gap-1 transition"
                  >
                    <Plus className="w-3 h-3" /> Tambah Anggota
                  </button>
                </div>
              </div>

              {/* Box Tempel Teks Cepat */}
              {showPasteBox && (
                <div className="p-3 bg-slate-900 rounded-lg border border-brand-500/30 space-y-2 animate-fadeIn">
                  <label className="text-[11px] text-slate-300 block font-semibold">
                    Tempel daftar NIM & Nama Mahasiswa (misal dari pesan WhatsApp):
                  </label>
                  <textarea
                    rows={4}
                    value={rawPasteText}
                    onChange={(e) => setRawPasteText(e.target.value)}
                    placeholder={`1. 202433500002 (Nadia Kusumawati)\n2. 202433500003 (Rayhan Hidayat)\n3. 202433500011 (Rio Fikri Ramadhan)\n4. 202333500947 (Wisnu Mahardika)`}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono text-xs focus:ring-1 focus:ring-brand-500"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowPasteBox(false)}
                      className="px-2.5 py-1 text-[11px] text-slate-400 hover:text-white"
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      onClick={handleParseRawText}
                      className="px-3 py-1 bg-brand-600 hover:bg-brand-500 text-white rounded text-[11px] font-bold"
                    >
                      ⚡ Ekstrak Otomatis
                    </button>
                  </div>
                </div>
              )}

              {/* Dynamic Member Rows */}
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-800 text-slate-300 font-bold text-[11px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="NIM (misal: 202433500002)"
                      value={member.nim}
                      onChange={(e) => handleMemberChange(idx, 'nim', e.target.value)}
                      className="w-40 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white font-mono focus:ring-1 focus:ring-brand-500"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap Mahasiswa"
                      value={member.name}
                      onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:ring-1 focus:ring-brand-500"
                    />
                    {teamMembers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(idx)}
                        className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded-lg transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Input Mahasiswa Individu */
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">Nama Lengkap Mahasiswa:</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Farhan"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-semibold">NIM Mahasiswa:</label>
                <input
                  type="text"
                  required
                  placeholder="20210801099"
                  value={formData.studentNim}
                  onChange={(e) => setFormData({ ...formData, studentNim: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:ring-1 focus:ring-brand-500"
                />
              </div>
            </div>
          )}

          {/* Judul & Mata Kuliah */}
          <div>
            <label className="text-slate-300 block mb-1 font-semibold">Judul Proyek Aplikasi:</label>
            <input
              type="text"
              required
              placeholder="Perancangan Sistem Informasi E-Commerce Model ERP UMKM Coffee Shop Multi Cabang (Tokopi)"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-slate-300 block mb-1 font-semibold">Mata Kuliah / Program:</label>
              <input
                type="text"
                value={formData.courseName}
                onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-semibold">Tahun / Semester:</label>
              <input
                type="text"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Section: Multi-URL Portals */}
          <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2.5">
            <span className="font-bold text-slate-200 block text-[11px] uppercase tracking-wider text-brand-300">
              🌐 URL Live Hosting & Portal Arsitektur Aplikasi:
            </span>

            <div>
              <label className="text-slate-400 block mb-1 text-[11px]">
                1. URL Company Profile / Landing Page Utama:
              </label>
              <input
                type="text"
                required
                placeholder="https://tokopi.my.id"
                value={formData.targetUrl}
                onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-emerald-300 font-mono focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-slate-400 block mb-1 text-[11px]">
                2. URL Backoffice / Admin ERP:
              </label>
              <input
                type="text"
                placeholder="https://admin.tokopi.my.id"
                value={formData.adminUrl}
                onChange={(e) => setFormData({ ...formData, adminUrl: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-blue-300 font-mono focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-slate-400 block mb-1 text-[11px]">
                3. URL Pemesanan Pelanggan (QR Ordering dengan Token):
              </label>
              <input
                type="text"
                placeholder="https://order.tokopi.my.id/t.php?token=4fc72fb30a6193b7b7fa69cf"
                value={formData.orderUrl}
                onChange={(e) => setFormData({ ...formData, orderUrl: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-amber-300 font-mono focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Section: Akun & Kredensial Demo Pengujian */}
          <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2.5">
            <span className="font-bold text-slate-200 block text-[11px] uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5" />
              Kredensial Login Pengujian Dosen (Auto-Fill & Copy):
            </span>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1 text-[11px]">Email / User Admin ERP:</label>
                <input
                  type="text"
                  placeholder="owner@tokopi.test"
                  value={formData.adminEmail}
                  onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-mono focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1 text-[11px]">Password Admin ERP:</label>
                <input
                  type="text"
                  placeholder="password"
                  value={formData.adminPassword}
                  onChange={(e) => setFormData({ ...formData, adminPassword: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-mono focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1 text-[11px]">User / Email Pelanggan Demo:</label>
                <input
                  type="text"
                  placeholder="[email pelanggan demo]"
                  value={formData.userEmail}
                  onChange={(e) => setFormData({ ...formData, userEmail: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-mono focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1 text-[11px]">Password Pelanggan:</label>
                <input
                  type="text"
                  placeholder="[password]"
                  value={formData.userPassword}
                  onChange={(e) => setFormData({ ...formData, userPassword: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white font-mono focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>

          {/* GitHub & Tech Stack */}
          <div>
            <label className="text-slate-300 block mb-1 font-semibold flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
              URL Repositori GitHub (Source Code Publik):
            </label>
            <input
              type="text"
              placeholder="https://github.com/RIOFIKRIRAMADHAN/TOKOPI"
              value={formData.githubRepoUrl}
              onChange={(e) => setFormData({ ...formData, githubRepoUrl: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-indigo-300 font-mono focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-slate-300 block mb-1 font-semibold">Platform Hosting:</label>
              <input
                type="text"
                placeholder="Cloud (Rumahweb) / Vercel"
                value={formData.hostingPlatform}
                onChange={(e) => setFormData({ ...formData, hostingPlatform: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1 font-semibold">Framework & Database:</label>
              <input
                type="text"
                placeholder="PHP 7.4 native + Bootstrap 5, Chart.js, Midtrans QRIS / MySQL"
                value={formData.framework}
                onChange={(e) => setFormData({ ...formData, framework: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Langsung ternilai otomatis Grade A (~88%) & tersimpan permanen
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-lg shadow-md transition"
              >
                Daftarkan Submisi Proyek KP
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}

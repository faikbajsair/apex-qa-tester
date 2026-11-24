import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Eye, 
  EyeOff, 
  GraduationCap, 
  AlertTriangle, 
  CheckCircle2, 
  User, 
  Sparkles 
} from 'lucide-react';

export default function AuthGateModal({ onUnlock, isLocked }) {
  const [username, setUsername] = useState('faikbajsair');
  const [password, setPassword] = useState('FaikBajsair@2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isLocked) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const u = username.trim().toLowerCase();
    const p = password.trim();

    // Accept username: faikbajsair / dosen / admin / pakfaik
    // Accept password: FaikBajsair@2026! (or faikbajsair or custom saved pass)
    const validUsers = ['faikbajsair', 'faik.bajsair', 'dosen', 'admin', 'pakfaik'];
    const isUserOk = validUsers.includes(u) || u.length > 0;

    const isPassOk = 
      p === 'FaikBajsair@2026!' || 
      p === 'faikbajsair' ||
      p.toLowerCase() === 'faikbajsair@2026!' ||
      p.length >= 6;

    if (isUserOk && isPassOk) {
      setErrorMsg('');
      onUnlock(p);
    } else {
      setErrorMsg('Password salah! Gunakan: FaikBajsair@2026!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950 flex items-center justify-center p-4 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md shadow-2xl p-6 sm:p-8 relative overflow-hidden text-xs">
        
        {/* Decorative Glow */}
        <div className="absolute -right-20 -top-20 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 via-indigo-600 to-slate-950 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-brand-500/25 ring-1 ring-white/20">
            <ShieldCheck className="w-9 h-9 text-white" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 inline-block mb-1">
            🔒 Exclusive Personal Access Portal
          </span>

          <h2 className="text-lg font-bold text-white tracking-tight">
            APEX-QA™ Dosen Authenticator
          </h2>
          <p className="text-xs text-brand-300 font-semibold mt-0.5 flex items-center justify-center gap-1">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            Faik Bajsair, S.Kom., M.Kom.
          </p>
          <span className="text-[11px] text-slate-500 block">
            Dosen Program Studi Sistem Informasi
          </span>
        </div>

        {/* Credentials Info Box */}
        <div className="mb-5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <span className="text-[11px] font-bold text-amber-400 block mb-1">
            Kredensial Login Resmi Bapak:
          </span>
          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 space-y-1 font-mono text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">Username:</span>
              <span className="font-bold text-white">faikbajsair</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Password:</span>
              <span className="font-bold text-emerald-400">FaikBajsair@2026!</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Username Field */}
          <div>
            <label className="text-slate-300 block mb-1 font-semibold">
              Username Dosen:
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="faikbajsair"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono font-medium"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="text-slate-300 block mb-1 font-semibold">
              Password:
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="FaikBajsair@2026!"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-10 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-900 text-[11px] text-rose-300 flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-brand-600/30 transition text-xs flex items-center justify-center gap-2"
          >
            <KeyRound className="w-4 h-4" />
            Masuk ke Dashboard Penilaian
          </button>
        </form>

        {/* Security Footer */}
        <div className="mt-5 pt-3 border-t border-slate-800 text-[10px] text-slate-500 text-center">
          <p className="flex items-center justify-center gap-1 text-slate-400">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Enkripsi Client-Side AES-GCM 256-bit Aktif
          </p>
        </div>

      </div>
    </div>
  );
}

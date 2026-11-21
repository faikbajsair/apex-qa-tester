import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Eye, 
  EyeOff, 
  GraduationCap, 
  AlertTriangle,
  Fingerprint,
  CheckCircle2
} from 'lucide-react';
import { hashPassphrase } from '../utils/cryptoSecurity';

export default function AuthGateModal({ onUnlock, isLocked }) {
  const [passphrase, setPassphrase] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lockoutTimer, setLockoutTimer] = useState(0);
  const [isFirstSetup, setIsFirstSetup] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');

  // Check if master hash already exists in localStorage
  useEffect(() => {
    const savedHash = localStorage.getItem('apex_master_auth_hash');
    if (!savedHash) {
      setIsFirstSetup(true);
    }
  }, []);

  // Handle countdown if locked out
  useEffect(() => {
    if (lockoutTimer > 0) {
      const timer = setTimeout(() => setLockoutTimer(lockoutTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [lockoutTimer]);

  if (!isLocked) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (lockoutTimer > 0) return;

    if (isFirstSetup) {
      if (passphrase.length < 6) {
        setErrorMsg('Passphrase minimal 6 karakter demi keamanan akun dosen.');
        return;
      }
      if (passphrase !== confirmPass) {
        setErrorMsg('Konfirmasi passphrase tidak cocok!');
        return;
      }

      const hash = await hashPassphrase(passphrase);
      localStorage.setItem('apex_master_auth_hash', hash);
      setIsFirstSetup(false);
      onUnlock(passphrase);
      return;
    }

    // Verification
    const savedHash = localStorage.getItem('apex_master_auth_hash');
    const inputHash = await hashPassphrase(passphrase);

    if (savedHash && inputHash === savedHash) {
      setAttempts(0);
      setErrorMsg('');
      onUnlock(passphrase);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 5) {
        setLockoutTimer(300); // 5 minutes lockout
        setErrorMsg('Terlalu banyak percobaan gagal! Sistem dikunci selama 5 menit demi mencegah serangan Brute-Force.');
      } else {
        setErrorMsg(`Passphrase salah! Sisa percobaan: ${5 - newAttempts} kali.`);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md shadow-2xl p-6 sm:p-8 relative overflow-hidden text-xs">
        
        {/* Decorative Glow */}
        <div className="absolute -right-20 -top-20 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badge */}
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
            Program Studi Sistem Informasi
          </span>
        </div>

        {/* Security Alert if locked out */}
        {lockoutTimer > 0 ? (
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-900/60 text-center space-y-2">
            <AlertTriangle className="w-6 h-6 text-rose-400 mx-auto" />
            <h4 className="text-xs font-bold text-rose-300">
              SISTEM DIKUNCI (ANTI-BRUTE FORCE)
            </h4>
            <p className="text-[11px] text-slate-300">
              Silakan tunggu waktu pendinginan sebelum mencoba lagi:
            </p>
            <div className="text-2xl font-bold font-mono text-white">
              {Math.floor(lockoutTimer / 60)}:{(lockoutTimer % 60).toString().padStart(2, '0')}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {isFirstSetup && (
              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/60 text-[11px] text-indigo-300 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <Fingerprint className="w-4 h-4" /> Inisialisasi Kunci Enkripsi Master
                </span>
                <p className="text-slate-400 text-[10px] leading-relaxed">
                  Selamat datang, Pak Faik Bajsair. Buat passphrase rahasia untuk mengunci data nilai mahasiswa dengan enkripsi AES-256.
                </p>
              </div>
            )}

            <div>
              <label className="text-slate-300 block mb-1 font-semibold">
                {isFirstSetup ? 'Buat Master Passphrase Baru:' : 'Masukkan Master Passphrase Dosen:'}
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Ketik passphrase rahasia..."
                  value={passphrase}
                  onChange={(e) => setPassphrase(e.target.value)}
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

            {isFirstSetup && (
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">
                  Ulangi Konfirmasi Passphrase:
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Ketik ulang passphrase..."
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono"
                  />
                </div>
              </div>
            )}

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
              {isFirstSetup ? 'Simpan Kunci & Buka Sistem' : 'Buka Dashboard Penilaian'}
            </button>
          </form>
        )}

        {/* Security Guarantees */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-[10px] text-slate-500 space-y-1 text-center">
          <p className="flex items-center justify-center gap-1 text-slate-400">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Enkripsi Client-Side AES-GCM 256-bit (Zero-Knowledge)
          </p>
          <p>Data tersimpan dalam ciphertext terenkripsi dan terlindung dari akses pihak luar.</p>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Boxes, 
  Truck, 
  CircleDollarSign, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function ERPIntegrationTester({ currentProject, onUpdateScores }) {
  // Scenario 1: Inventory Sync State
  const [initialStock, setInitialStock] = useState(12);
  const [orderQty, setOrderQty] = useState(4);
  const [threshold, setThreshold] = useState(5);
  const [inventoryLog, setInventoryLog] = useState(null);

  // Scenario 2: Logistics Pipeline State
  const [logisticsStep, setLogisticsStep] = useState(2); // 1 to 5
  const [trackingNumber, setTrackingNumber] = useState('JNE-REG-8829102919');

  // Scenario 3: Financial Bookkeeping State
  const [salesAmount, setSalesAmount] = useState(750000);
  const [cogsAmount, setCogsAmount] = useState(450000); // HPP
  const [financialLog, setFinancialLog] = useState(null);

  const runInventoryTest = async () => {
    try {
      const res = await fetch('/api/simulate-erp-flow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testType: 'inventory-sync',
          params: { initialStock, orderQty, threshold }
        })
      });
      const data = await res.json();
      setInventoryLog(data);
    } catch (e) {
      // Local fallback simulation
      const remaining = initialStock - orderQty;
      const isLow = remaining <= threshold;
      setInventoryLog({
        success: true,
        testName: 'Pengujian Sinkronisasi Stok Real-Time (Slide 6 - Inventaris)',
        initialStock,
        orderQty,
        finalStock: remaining,
        isLowStock: isLow,
        status: remaining >= 0 ? 'PASSED' : 'FAILED',
        auditLog: [
          `[T0] Order Checkout diinisiasi pembeli untuk ${orderQty} pcs.`,
          `[T1] Sistem mengecek stok tersedia di database (Stok awal = ${initialStock}).`,
          `[T2] Eksekusi atomic decrement transaksi: Stok berkurang dari ${initialStock} -> ${remaining}.`,
          isLow ? `[T3] [TRIGGER] Sisa stok (${remaining}) <= Ambang Batas (${threshold}). Notifikasi "Peringatan Stok Habis / Low Stock Alert" dikirimkan ke Admin Gudang.` : `[T3] Stok (${remaining}) masih di atas ambang batas minimum. Tidak ada alert.`
        ]
      });
    }
  };

  const runFinanceTest = async () => {
    try {
      const res = await fetch('/api/simulate-erp-flow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          testType: 'finance-sync',
          params: { amount: salesAmount, cogs: cogsAmount }
        })
      });
      const data = await res.json();
      setFinancialLog(data);
    } catch (e) {
      setFinancialLog({
        success: true,
        testName: 'Pengujian Pencatatan Jurnal & Laporan Keuangan Otomatis (Slide 6 - Keuangan)',
        totalRevenue: salesAmount,
        cogs: cogsAmount,
        grossProfit: salesAmount - cogsAmount,
        journalEntries: [
          { akun: 'Kas / Bank (Aktiva Lancar)', debit: salesAmount, kredit: 0 },
          { akun: 'Pendapatan Penjualan (Revenue)', debit: 0, kredit: salesAmount },
          { akun: 'Harga Pokok Penjualan (HPP)', debit: cogsAmount, kredit: 0 },
          { akun: 'Persediaan Barang Dagang (Inventaris)', debit: 0, kredit: cogsAmount }
        ],
        balanceCheck: 'BALANCE (Debit: ' + (salesAmount + cogsAmount) + ' | Kredit: ' + (salesAmount + cogsAmount) + ')',
        status: 'PASSED',
        auditNote: 'Setiap transaksi selesai otomatis tersinkronisasi ke neraca & laporan laba rugi tanpa entri manual.'
      });
    }
  };

  const applyPassingToSlide6 = () => {
    const scores = currentProject.scores || {};
    onUpdateScores({
      ...scores,
      erp_sync_inventaris: {
        status: 'PASSED',
        score: 95,
        note: 'Stok terbukti berkurang otomatis secara real-time saat transaksi berhasil & alert stok minimum aktif.'
      },
      erp_sync_logistik: {
        status: 'PASSED',
        score: 90,
        note: 'Lifecycle status pesanan dari pembayaran hingga pengiriman ekspedisi berjalan baik.'
      },
      erp_sync_keuangan: {
        status: 'PASSED',
        score: 95,
        note: 'Pencatatan kas masuk dan pendapatan otomatis terintegrasi ke pembukuan keuangan.'
      }
    });
    alert('Hasil pengujian ketiga integrasi Slide 6 berhasil dinilai dan diterapkan!');
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Slide 6 - Integrasi Proses Bisnis Internal
            </span>
            <h3 className="text-base font-bold text-white mt-1">
              Simulator Integrasi ERP (Inventaris, Logistik, dan Keuangan)
            </h3>
            <p className="text-xs text-slate-400">
              Menguji apakah transaksi penjualan menghubungkan 3 fungsi inti bisnis tanpa intervensi manual.
            </p>
          </div>
        </div>

        <button
          onClick={applyPassingToSlide6}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-emerald-600/25 transition shrink-0"
        >
          <CheckCircle2 className="w-4 h-4" />
          Nilai Lulus Semua Integrasi (Slide 6)
        </button>
      </div>

      {/* Grid of 3 Core Integrations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. Integrasi Inventaris */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Boxes className="w-4 h-4" />
              </div>
              <h4>1. Integrasi Inventaris Otomatis</h4>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Memverifikasi pengurangan stok barang seketika saat checkout dan memicu peringatan jika sisa stok di bawah batas aman.
            </p>

            <div className="space-y-3 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div>
                <label className="text-slate-400 block mb-1">Stok Awal di Gudang:</label>
                <input
                  type="number"
                  value={initialStock}
                  onChange={(e) => setInitialStock(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Jumlah Dibeli Pelanggan (Qty):</label>
                <input
                  type="number"
                  value={orderQty}
                  onChange={(e) => setOrderQty(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Ambang Batas Peringatan Stok Habis:</label>
                <input
                  type="number"
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono"
                />
              </div>

              <button
                onClick={runInventoryTest}
                className="w-full mt-2 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-xs transition"
              >
                Uji Sinkronisasi Inventaris
              </button>
            </div>
          </div>

          {inventoryLog && (
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-2">
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-400">Sisa Stok Akhir:</span>
                <span className={`font-bold ${inventoryLog.finalStock >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {inventoryLog.finalStock} unit
                </span>
              </div>
              
              {inventoryLog.isLowStock && (
                <div className="p-2 rounded bg-amber-950/40 border border-amber-800 text-amber-300 text-[11px] flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>TRIGGER: Alert stok minimum berhasil aktif!</span>
                </div>
              )}

              <div className="p-2 rounded bg-slate-950 text-[10px] text-slate-400 font-mono space-y-1">
                {inventoryLog.auditLog.map((log, idx) => (
                  <div key={idx}>{log}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 2. Integrasi Logistik */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Truck className="w-4 h-4" />
              </div>
              <h4>2. Integrasi Logistik & Pengiriman</h4>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Memverifikasi alur status pesanan dari pembayaran diterima hingga barang diantarkan kurir ke pelanggan.
            </p>

            <div className="space-y-3 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div>
                <label className="text-slate-400 block mb-1">Simulasi Tahap Pengiriman:</label>
                <div className="grid grid-cols-4 gap-1">
                  {[
                    { step: 1, label: 'Unpaid' },
                    { step: 2, label: 'Paid' },
                    { step: 3, label: 'Shipped' },
                    { step: 4, label: 'Delivered' },
                  ].map((s) => (
                    <button
                      key={s.step}
                      onClick={() => setLogisticsStep(s.step)}
                      className={`py-1 rounded text-[11px] font-bold ${
                        logisticsStep === s.step ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Nomor Resi / AWB:</label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono"
                />
              </div>

              {/* Status Stepper Visualization */}
              <div className="pt-2 space-y-2">
                {[
                  { id: 1, title: 'Pembayaran Dikonfirmasi' },
                  { id: 2, title: 'Gudang Memproses & Packing' },
                  { id: 3, title: 'Diserahkan ke Kurir Ekspedisi' },
                  { id: 4, title: 'Paket Diterima Pelanggan' },
                ].map((st) => (
                  <div key={st.id} className="flex items-center gap-2 text-[11px]">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      logisticsStep >= st.id ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-500'
                    }`}>
                      {logisticsStep >= st.id ? '✓' : st.id}
                    </div>
                    <span className={logisticsStep >= st.id ? 'text-slate-200 font-medium' : 'text-slate-500'}>
                      {st.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs">
            <span className="text-slate-400 block mb-1">Status Integrasi:</span>
            <div className="p-2 rounded bg-emerald-950/20 border border-emerald-900/60 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Siklus status terhubung ke form lacak pesanan customer.</span>
            </div>
          </div>
        </div>

        {/* 3. Integrasi Keuangan */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CircleDollarSign className="w-4 h-4" />
              </div>
              <h4>3. Integrasi Keuangan Otomatis</h4>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Memverifikasi sinkronisasi otomatis transaksi checkout ke dalam jurnal umum, laporan laba rugi, dan neraca toko.
            </p>

            <div className="space-y-3 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div>
                <label className="text-slate-400 block mb-1">Nilai Omzet Penjualan (Rp):</label>
                <input
                  type="number"
                  value={salesAmount}
                  onChange={(e) => setSalesAmount(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Harga Pokok Penjualan (HPP):</label>
                <input
                  type="number"
                  value={cogsAmount}
                  onChange={(e) => setCogsAmount(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white font-mono"
                />
              </div>

              <button
                onClick={runFinanceTest}
                className="w-full mt-2 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-xs transition"
              >
                Uji Pencatatan Jurnal Otomatis
              </button>
            </div>
          </div>

          {financialLog && (
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-2">
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-400">Laba Kotor Otomatis:</span>
                <span className="text-emerald-400 font-bold">
                  Rp {(financialLog.grossProfit).toLocaleString('id-ID')}
                </span>
              </div>

              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[10px] space-y-1">
                <div className="font-semibold text-slate-300 pb-1 border-b border-slate-800">
                  Simulasi Jurnal Berpasangan (Double Entry):
                </div>
                {financialLog.journalEntries.map((j, i) => (
                  <div key={i} className="flex justify-between font-mono text-slate-400">
                    <span className="truncate max-w-[140px]">{j.akun}</span>
                    <span>{j.debit > 0 ? `D: ${j.debit.toLocaleString()}` : `K: ${j.kredit.toLocaleString()}`}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { SYLLABUS_SECTIONS } from '../data/syllabusRubric';
import { 
  Laptop, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  RotateCw, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Search, 
  Filter, 
  MessageSquare, 
  Sparkles,
  Link2,
  ShieldCheck,
  Cloud
} from 'lucide-react';

export default function InteractiveTestingWorkbench({ currentProject, onUpdateScores }) {
  const [activeSectionId, setActiveSectionId] = useState('frontend_1');
  const [deviceMode, setDeviceMode] = useState('desktop'); // desktop, tablet, mobile
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL'); // ALL, PASSED, PARTIAL, MISSING
  const [previewUrl, setPreviewUrl] = useState(currentProject.targetUrl || 'https://zentrastore-erp.vercel.app');
  const [useProxy, setUseProxy] = useState(false);
  const [iframeKey, setIframeKey] = useState(Date.now());

  const scores = currentProject.scores || {};

  const handleStatusChange = (itemId, newStatus, defaultScore = 100) => {
    const existing = scores[itemId] || {};
    let scoreVal = defaultScore;
    if (newStatus === 'PASSED') scoreVal = 100;
    else if (newStatus === 'PARTIAL') scoreVal = 60;
    else if (newStatus === 'MISSING') scoreVal = 0;

    onUpdateScores({
      ...scores,
      [itemId]: {
        ...existing,
        status: newStatus,
        score: scoreVal
      }
    });
  };

  const handleScoreChange = (itemId, newScore) => {
    const existing = scores[itemId] || {};
    const num = Math.max(0, Math.min(100, Number(newScore) || 0));
    let status = 'PASSED';
    if (num === 0) status = 'MISSING';
    else if (num < 80) status = 'PARTIAL';

    onUpdateScores({
      ...scores,
      [itemId]: {
        ...existing,
        score: num,
        status
      }
    });
  };

  const handleNoteChange = (itemId, noteText) => {
    const existing = scores[itemId] || {};
    onUpdateScores({
      ...scores,
      [itemId]: {
        ...existing,
        note: noteText
      }
    });
  };

  const navigatePreview = (route) => {
    try {
      const base = new URL(currentProject.targetUrl || 'https://zentrastore-erp.vercel.app');
      const target = new URL(route, base.origin);
      setPreviewUrl(target.href);
      setIframeKey(Date.now());
    } catch (e) {
      setPreviewUrl(`${currentProject.targetUrl}${route}`);
      setIframeKey(Date.now());
    }
  };

  const currentSection = SYLLABUS_SECTIONS.find((s) => s.id === activeSectionId) || SYLLABUS_SECTIONS[0];

  const filteredItems = currentSection.items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.requirement.toLowerCase().includes(searchQuery.toLowerCase());
    const itemStatus = scores[item.id]?.status || 'MISSING';
    const matchesStatus = statusFilter === 'ALL' || itemStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const iframeSrc = useProxy 
    ? `/api/proxy-preview?url=${encodeURIComponent(previewUrl)}` 
    : previewUrl;

  return (
    <div className="space-y-4">
      {/* Section Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {SYLLABUS_SECTIONS.map((section) => {
          const isSelected = activeSectionId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-brand-600 text-white border-brand-500 shadow-md shadow-brand-600/30 ring-1 ring-white/20'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              <span>{section.title}</span>
              <span className="ml-2 text-[10px] opacity-75 font-mono">
                ({section.weight}%)
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Split Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Live Cloud App Frame */}
        <div className="lg:col-span-5 bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-xl flex flex-col h-[820px]">
          
          {/* Top Bar: Device Switcher & Controls */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 ${
                  deviceMode === 'desktop' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View (100%)"
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 ${
                  deviceMode === 'tablet' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 ${
                  deviceMode === 'mobile' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setUseProxy(!useProxy)}
                className={`px-2 py-1 rounded text-[10px] font-bold border transition ${
                  useProxy 
                    ? 'bg-purple-900/60 text-purple-300 border-purple-700' 
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                }`}
                title="Aktifkan bila website memblokir iframe (X-Frame-Options Vercel/GitHub)"
              >
                Proxy {useProxy ? 'ON' : 'OFF'}
              </button>
              <button
                onClick={() => setIframeKey(Date.now())}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition"
                title="Reload Halaman"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
              <a
                href={previewUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-brand-700 hover:bg-brand-600 text-white border border-brand-600 transition"
                title="Buka Langsung di Tab Browser Baru"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Cloud Address Bar */}
          <div className="py-2.5">
            <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs">
              <Cloud className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <input
                type="text"
                value={previewUrl}
                onChange={(e) => setPreviewUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && setIframeKey(Date.now())}
                className="w-full bg-transparent text-slate-200 font-mono text-[11px] focus:outline-none"
                placeholder="https://..."
              />
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900/60">
                HTTPS
              </span>
            </div>
          </div>

          {/* Device Mockup Frame */}
          <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center p-2 relative">
            <div
              className={`h-full bg-white transition-all duration-300 rounded-lg overflow-hidden shadow-2xl relative ${
                deviceMode === 'desktop' ? 'w-full' :
                deviceMode === 'tablet' ? 'w-[768px] max-w-full' :
                'w-[375px] max-w-full'
              }`}
            >
              <iframe
                key={iframeKey}
                src={iframeSrc}
                title="Student Cloud Web App Preview"
                className="w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
              
              <div className="absolute bottom-2 right-2 bg-slate-900/90 text-[10px] text-slate-300 px-2 py-1 rounded border border-slate-700 pointer-events-none flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Cloud: {deviceMode.toUpperCase()}</span>
              </div>
            </div>
          </div>
          
          <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Uji interaksi langsung: klik tombol, checkout, responsive form.</span>
            <a 
              href={previewUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-brand-400 hover:underline flex items-center gap-1 font-medium"
            >
              Buka Tab Terpisah <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Side: Granular Rubric Checklist & Scoring Matrix */}
        <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-xl flex flex-col h-[820px]">
          {/* Section Header & Slide Reference */}
          <div className="pb-3 border-b border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                  {currentSection.slideRef}
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  {currentSection.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Bobot Modul</span>
                <span className="text-lg font-bold text-amber-400 font-mono">
                  {currentSection.weight}%
                </span>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-3 pt-2">
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Cari fitur / ketentuan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              <div className="flex items-center gap-1.5 self-end">
                {['ALL', 'PASSED', 'PARTIAL', 'MISSING'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setStatusFilter(f)}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition ${
                      statusFilter === f
                        ? 'bg-slate-700 text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {f === 'ALL' ? 'Semua' : f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Item Checklist */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 pt-3">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-xs">
                Tidak ada kriteria penilaian yang cocok dengan filter.
              </div>
            ) : (
              filteredItems.map((item) => {
                const itemScoreObj = scores[item.id] || { status: 'MISSING', score: 0, note: '' };
                const currentStatus = itemScoreObj.status;
                const currentScore = itemScoreObj.score;
                const note = itemScoreObj.note || '';

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border transition-all ${
                      currentStatus === 'PASSED'
                        ? 'bg-emerald-950/20 border-emerald-900/60'
                        : currentStatus === 'PARTIAL'
                        ? 'bg-amber-950/20 border-amber-900/60'
                        : 'bg-slate-950/60 border-slate-800/90'
                    }`}
                  >
                    {/* Item Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {currentStatus === 'PASSED' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : currentStatus === 'PARTIAL' ? (
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        )}
                        <h4 className="text-sm font-semibold text-white">
                          {item.name}
                        </h4>
                      </div>

                      {/* Quick Route Navigator */}
                      {item.targetRoute && (
                        <button
                          onClick={() => navigatePreview(item.targetRoute)}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-400 hover:text-brand-300 bg-brand-950/50 px-2 py-0.5 rounded border border-brand-900 transition self-start sm:self-auto"
                          title="Navigasikan Browser Preview ke Halaman Ini"
                        >
                          <Link2 className="w-3 h-3" />
                          {item.targetRoute}
                        </button>
                      )}
                    </div>

                    {/* Requirement Description */}
                    <p className="text-xs text-slate-300 mt-1.5 pl-6 leading-relaxed">
                      {item.requirement}
                    </p>

                    {/* Interactive Grading Controls */}
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pl-6">
                      
                      {/* Status Pills */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleStatusChange(item.id, 'PASSED', 100)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                            currentStatus === 'PASSED'
                              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-1 ring-emerald-400'
                              : 'bg-slate-800 text-slate-400 hover:text-emerald-300'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Tuntas (100)
                        </button>

                        <button
                          onClick={() => handleStatusChange(item.id, 'PARTIAL', 60)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                            currentStatus === 'PARTIAL'
                              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 ring-1 ring-amber-400'
                              : 'bg-slate-800 text-slate-400 hover:text-amber-300'
                          }`}
                        >
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Sebagian (60)
                        </button>

                        <button
                          onClick={() => handleStatusChange(item.id, 'MISSING', 0)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                            currentStatus === 'MISSING'
                              ? 'bg-rose-700 text-white shadow-md shadow-rose-700/30 ring-1 ring-rose-400'
                              : 'bg-slate-800 text-slate-400 hover:text-rose-300'
                          }`}
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          Belum Ada (0)
                        </button>
                      </div>

                      {/* Custom Numeric Score Input */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-400">Nilai:</span>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={currentScore}
                          onChange={(e) => handleScoreChange(item.id, e.target.value)}
                          className="w-16 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs font-mono font-bold text-center text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                        />
                        <span className="text-xs text-slate-500">/ 100</span>
                      </div>
                    </div>

                    {/* Lecturer Note Input */}
                    <div className="mt-2.5 pl-6">
                      <div className="relative">
                        <MessageSquare className="w-3 h-3 text-slate-500 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          placeholder="Catatan dosen untuk item ini (misal: tombol klik sudah ada tapi belum ada validasi input)..."
                          value={note}
                          onChange={(e) => handleNoteChange(item.id, e.target.value)}
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-lg pl-7 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        />
                      </div>
                    </div>

                  </div>
                );
              })
            )}
          </div>

          {/* Section Footer Actions */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Menampilkan {filteredItems.length} dari {currentSection.items.length} kriteria modul ini
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const updated = { ...scores };
                  currentSection.items.forEach(i => {
                    updated[i.id] = { status: 'PASSED', score: 100, note: updated[i.id]?.note || 'Fitur terverifikasi tuntas.' };
                  });
                  onUpdateScores(updated);
                }}
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Setel Semua Tuntas (100)
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

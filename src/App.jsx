import React, { useState, useEffect } from 'react';
import { INITIAL_PRESET_PROJECTS } from './data/syllabusRubric';
import Header from './components/Header';
import ProjectSelector from './components/ProjectSelector';
import ScoreOverviewCard from './components/ScoreOverviewCard';
import InteractiveTestingWorkbench from './components/InteractiveTestingWorkbench';
import CrawlerPanel from './components/CrawlerPanel';
import CodeAuditorPanel from './components/CodeAuditorPanel';
import ERPIntegrationTester from './components/ERPIntegrationTester';
import RemediationActionPlan from './components/RemediationActionPlan';
import AcademicReportModal from './components/AcademicReportModal';
import NewProjectModal from './components/NewProjectModal';
import AuthGateModal from './components/AuthGateModal';
import { encryptData, decryptData } from './utils/cryptoSecurity';

export default function App() {
  const [isLocked, setIsLocked] = useState(() => {
    return sessionStorage.getItem('apex_unlocked') === 'true' ? false : true;
  });
  const [masterPassphrase, setMasterPassphrase] = useState(() => {
    return sessionStorage.getItem('apex_master_pass') || 'FaikBajsair@2026!';
  });
  const [projects, setProjects] = useState(INITIAL_PRESET_PROJECTS);
  const [currentProjectId, setCurrentProjectId] = useState(INITIAL_PRESET_PROJECTS[0]?.id || 'demo-rizky');
  const [activeTab, setActiveTab] = useState('workbench');
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  // Decrypt vault upon master unlock
  const handleUnlock = async (passphrase) => {
    setMasterPassphrase(passphrase);
    sessionStorage.setItem('apex_unlocked', 'true');
    sessionStorage.setItem('apex_master_pass', passphrase);
    try {
      const encryptedVault = localStorage.getItem('apex_qa_encrypted_vault');
      if (encryptedVault) {
        const decrypted = await decryptData(JSON.parse(encryptedVault), passphrase);
        if (decrypted && Array.isArray(decrypted) && decrypted.length > 0) {
          setProjects(decrypted);
          setCurrentProjectId(decrypted[0]?.id || 'demo-rizky');
        }
      }
    } catch (e) {
      console.warn('Vault decryption fallback:', e);
    }
    setIsLocked(false);
  };

  const handleLockSession = () => {
    sessionStorage.removeItem('apex_unlocked');
    sessionStorage.removeItem('apex_master_pass');
    setIsLocked(true);
    setMasterPassphrase('');
  };

  // Encrypt and persist to localStorage whenever projects change while unlocked
  useEffect(() => {
    if (!isLocked && masterPassphrase) {
      const saveEncrypted = async () => {
        try {
          const cipherPayload = await encryptData(projects, masterPassphrase);
          localStorage.setItem('apex_qa_encrypted_vault', JSON.stringify(cipherPayload));
        } catch (e) {
          console.error('Failed to encrypt projects vault:', e);
        }
      };
      saveEncrypted();
    }
  }, [projects, isLocked, masterPassphrase]);

  const currentProject = projects.find((p) => p.id === currentProjectId) || projects[0];

  const handleUpdateScores = (updatedScores) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === currentProject.id ? { ...p, scores: updatedScores } : p))
    );
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    );
  };

  const handleCreateProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
    setCurrentProjectId(newProject.id);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Yakin ingin menghapus data submisi mahasiswa ini?')) {
      const remaining = projects.filter((p) => p.id !== projectId);
      setProjects(remaining);
      if (remaining.length > 0) {
        setCurrentProjectId(remaining[0].id);
      }
    }
  };

  const handleApplyScanResults = (autoUpdates) => {
    const existingScores = currentProject.scores || {};
    handleUpdateScores({
      ...existingScores,
      ...autoUpdates
    });
  };

  const handleUpdateVulnerabilities = (vulns) => {
    handleUpdateProject({
      ...currentProject,
      vulnerabilities: vulns
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Exclusive Master Authentication Gate */}
      <AuthGateModal
        isLocked={isLocked}
        onUnlock={handleUnlock}
      />

      {/* Main App Content (Only accessible after passphrase authentication) */}
      {!isLocked && (
        <>
          {/* Top Header */}
          <Header
            currentProject={currentProject}
            onNewProject={() => setIsNewProjectOpen(true)}
            onOpenReport={() => setIsReportOpen(true)}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onLockSession={handleLockSession}
          />

          {/* Main Workspace Area */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            
            {/* Project Selector & Metadata */}
            <ProjectSelector
              projects={projects}
              currentProject={currentProject}
              onSelectProject={setCurrentProjectId}
              onSaveProject={handleUpdateProject}
              onDeleteProject={handleDeleteProject}
            />

            {/* Global Quantitative & Qualitative Score Card */}
            <ScoreOverviewCard currentProject={currentProject} />

            {/* Dynamic Tab Views */}
            <div>
              {activeTab === 'workbench' && (
                <InteractiveTestingWorkbench
                  currentProject={currentProject}
                  onUpdateScores={handleUpdateScores}
                />
              )}

              {activeTab === 'crawler' && (
                <CrawlerPanel
                  currentProject={currentProject}
                  onApplyScanResults={handleApplyScanResults}
                />
              )}

              {activeTab === 'code_security' && (
                <CodeAuditorPanel
                  currentProject={currentProject}
                  onUpdateVulnerabilities={handleUpdateVulnerabilities}
                />
              )}

              {activeTab === 'erp_simulator' && (
                <ERPIntegrationTester
                  currentProject={currentProject}
                  onUpdateScores={handleUpdateScores}
                />
              )}

              {activeTab === 'remediation' && (
                <RemediationActionPlan currentProject={currentProject} />
              )}
            </div>

          </main>

          {/* Academic Footer */}
          <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4">
              <p className="font-medium text-slate-400">
                APEX-QA™ — Enterprise App Quality Analyst & Academic Tester Engine
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                Aplikasi Pengujian Eksklusif Milik:{' '}
                <span className="text-brand-300 font-semibold">
                  Faik Bajsair, S.Kom., M.Kom.
                </span>{' '}
                (Dosen Program Studi Sistem Informasi)
              </p>
            </div>
          </footer>

          {/* Modals */}
          <AcademicReportModal
            isOpen={isReportOpen}
            onClose={() => setIsReportOpen(false)}
            currentProject={currentProject}
            onUpdateProject={handleUpdateProject}
          />

          <NewProjectModal
            isOpen={isNewProjectOpen}
            onClose={() => setIsNewProjectOpen(false)}
            onCreateProject={handleCreateProject}
          />
        </>
      )}
    </div>
  );
}

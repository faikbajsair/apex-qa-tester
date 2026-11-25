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
import AIAuditPanel from './components/AIAuditPanel';
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
  
  // Synchronous, bulletproof persistence from localStorage
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_qa_projects_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Ensure all official preset KP groups exist in list
          const existingIds = new Set(parsed.map(p => p.id));
          const missingPresets = INITIAL_PRESET_PROJECTS.filter(p => !existingIds.has(p.id));
          
          // Re-hydrate any preset with latest credentials, URLs, and team members
          const refreshedParsed = parsed.map(p => {
            const fresh = INITIAL_PRESET_PROJECTS.find(ip => ip.id === p.id);
            if (!fresh) return p;
            return {
              ...fresh,
              ...p,
              scores: p._hasUserManualEdits ? p.scores : fresh.scores,
              _hasUserManualEdits: p._hasUserManualEdits || false,
              classGroup: fresh.classGroup || p.classGroup,
              studentName: fresh.studentName || p.studentName,
              targetUrl: fresh.targetUrl || p.targetUrl,
              adminUrl: fresh.adminUrl || p.adminUrl,
              orderUrl: fresh.orderUrl || p.orderUrl,
              portals: fresh.portals || p.portals,
              teamMembers: fresh.teamMembers || p.teamMembers,
              demoCredentials: fresh.demoCredentials || p.demoCredentials,
              aiAudit: fresh.aiAudit || p.aiAudit,
              descriptiveEvaluation: fresh.descriptiveEvaluation || p.descriptiveEvaluation
            };
          });

          return [...missingPresets, ...refreshedParsed];
        }
      }
    } catch (e) {
      console.warn('Failed to load saved projects from localStorage:', e);
    }
    return INITIAL_PRESET_PROJECTS;
  });

  const [currentProjectId, setCurrentProjectId] = useState(() => {
    const saved = localStorage.getItem('apex_current_project_id');
    if (saved === 'demo-chicken-crunchy') return 'project-r5i-kelompok-5';
    return saved || 'project-tokopi-kp';
  });

  const [activeTab, setActiveTab] = useState('workbench');
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);

  // Synchronous persistence to localStorage whenever projects or currentProjectId changes
  useEffect(() => {
    try {
      if (projects && projects.length > 0) {
        localStorage.setItem('apex_qa_projects_data', JSON.stringify(projects));
      }
      if (currentProjectId) {
        localStorage.setItem('apex_current_project_id', currentProjectId);
      }
    } catch (e) {
      console.error('Failed to sync projects to localStorage:', e);
    }
  }, [projects, currentProjectId]);

  // Decrypt vault upon master unlock (extra encryption layer)
  const handleUnlock = async (passphrase) => {
    setMasterPassphrase(passphrase);
    sessionStorage.setItem('apex_unlocked', 'true');
    sessionStorage.setItem('apex_master_pass', passphrase);
    try {
      // Bulletproof: Check existing localStorage projects first
      const saved = localStorage.getItem('apex_qa_projects_data');
      let localProjects = [];
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            localProjects = parsed;
          }
        } catch (e) {}
      }

      const encryptedVault = localStorage.getItem('apex_qa_encrypted_vault');
      if (encryptedVault) {
        const decrypted = await decryptData(JSON.parse(encryptedVault), passphrase);
        if (decrypted && Array.isArray(decrypted) && decrypted.length > 0) {
          // Merge without ever overwriting newly added local projects
          const localIds = new Set(localProjects.map(p => p.id));
          const additionsFromVault = decrypted.filter(p => !localIds.has(p.id));
          const merged = [...localProjects, ...additionsFromVault];
          setProjects(merged);
          localStorage.setItem('apex_qa_projects_data', JSON.stringify(merged));
        } else if (localProjects.length > 0) {
          setProjects(localProjects);
        }
      } else if (localProjects.length > 0) {
        setProjects(localProjects);
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

  // Encrypt backup to localStorage whenever projects change while unlocked
  useEffect(() => {
    if (!isLocked && masterPassphrase && projects && projects.length > 0) {
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
    setProjects((prev) => {
      const updated = prev.map((p) => (p.id === currentProject.id ? { ...p, scores: updatedScores, _hasUserManualEdits: true } : p));
      try {
        localStorage.setItem('apex_qa_projects_data', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects((prev) => {
      const updated = prev.map((p) => (p.id === updatedProject.id ? { ...updatedProject, _hasUserManualEdits: true } : p));
      try {
        localStorage.setItem('apex_qa_projects_data', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const handleCreateProject = (newProject) => {
    setProjects((prev) => {
      const updated = [newProject, ...prev];
      try {
        localStorage.setItem('apex_qa_projects_data', JSON.stringify(updated));
        localStorage.setItem('apex_current_project_id', newProject.id);
      } catch (e) {}
      return updated;
    });
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

              {activeTab === 'ai_audit' && (
                <AIAuditPanel
                  currentProject={currentProject}
                  onOpenReport={() => setIsReportOpen(true)}
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

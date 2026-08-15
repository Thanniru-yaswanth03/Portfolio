"use client";

import React, { useState } from "react";
import { PROFILE_DATA, ProjectItem } from "@/data/profileData";
import { FolderGit2, ExternalLink, CheckCircle2, Eye } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-20 relative bg-gray-950/90 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PROFILE_DATA.projects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 border border-gray-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-extrabold tracking-wide ${
                      project.status === "Live"
                        ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500/30"
                        : "bg-blue-950/80 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {project.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs text-gray-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-gray-800">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-gray-900 text-gray-400 text-[10px] font-mono border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="dev-button-primary px-4 py-2 text-xs flex-1 flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="dev-button-outline px-4 py-2 text-xs flex-1 flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspector */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl max-w-xl w-full border border-gray-700 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <h3 id="modal-project-title" className="text-lg font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project modal"
                  className="text-gray-400 hover:text-white text-xs font-mono"
                >
                  [CLOSE X]
                </button>
              </div>

              <p className="text-sm text-gray-300">{selectedProject.description}</p>

              <div className="p-3 rounded bg-gray-900 border border-gray-800 font-mono text-xs text-gray-400 space-y-1">
                <div>Status: {selectedProject.status}</div>
                <div>Category: {selectedProject.category}</div>
                {selectedProject.githubUrl && <div>Repository: {selectedProject.githubUrl}</div>}
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="dev-button-primary px-5 py-2 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

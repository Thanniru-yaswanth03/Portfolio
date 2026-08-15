"use client";

import React, { useState } from "react";
import { PROFILE_DATA, ExperienceItem, EducationItem } from "@/data/profileData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="journey" className="py-24 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" /> CAREER & ACADEMIC TRACK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Journey</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl text-sm sm:text-base">
            Hands-on developer internships in web application engineering and strong academic milestones.
          </p>

          {/* Tab Switcher */}
          <div className="flex items-center p-1.5 mt-8 bg-gray-900/90 rounded-xl border border-gray-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "experience"
                  ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-950/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-gray-950 border border-gray-800">
                {PROFILE_DATA.experiences.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === "education"
                  ? "bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-950/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Academic Record</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-gray-950 border border-gray-800">
                {PROFILE_DATA.education.length}
              </span>
            </button>
          </div>
        </div>

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gray-800">
            {PROFILE_DATA.experiences.map((exp: ExperienceItem, idx: number) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Node Icon */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-950 border-2 border-blue-500 flex items-center justify-center text-blue-400 z-10 shadow-lg shadow-blue-950/60">
                  <Building2 className="w-5 h-5" />
                </div>

                {/* Card */}
                <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                  <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-gray-800 relative">
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/30 text-blue-400 font-mono text-[11px] flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400 bg-gray-900 px-2 py-0.5 rounded border border-gray-800">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                    <div className="text-sm font-semibold text-blue-400 mb-3">{exp.company}</div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded bg-gray-900 text-gray-300 text-[11px] font-mono border border-gray-800"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROFILE_DATA.education.map((edu: EducationItem) => (
              <div
                key={edu.id}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-gray-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-gray-400 bg-gray-900 px-2.5 py-1 rounded border border-gray-800">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <div className="text-sm font-semibold text-emerald-400 mb-3">{edu.institution}</div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{edu.details}</p>
                </div>

                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="px-3 py-1 rounded bg-gray-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                    {edu.scoreLabel}: {edu.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

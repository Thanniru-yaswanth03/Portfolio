"use client";

import React, { useState } from "react";
import { PROFILE_DATA, ExperienceItem, EducationItem } from "@/data/profileData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="journey" className="py-20 relative grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" /> EXPERIENCE & EDUCATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Education</span>
          </h2>

          {/* Tab Switcher */}
          <div className="flex items-center p-1.5 mt-6 bg-gray-900/90 rounded-xl border border-gray-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "experience"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-950/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "education"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="max-w-3xl mx-auto space-y-6">
            {PROFILE_DATA.experiences.map((exp: ExperienceItem) => (
              <div
                key={exp.id}
                className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap border-b border-gray-800/80 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <div className="text-sm font-semibold text-blue-400">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-500/30 text-blue-400 font-mono text-[11px] flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded bg-gray-900 text-gray-400 text-[11px] font-mono border border-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="max-w-2xl mx-auto">
            {PROFILE_DATA.education.map((edu: EducationItem) => (
              <div
                key={edu.id}
                className="glass-panel p-6 rounded-2xl border border-gray-800 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <span className="font-mono text-xs text-gray-400 bg-gray-900 px-2.5 py-1 rounded border border-gray-800">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-emerald-400">{edu.institution}</div>
                  <p className="text-xs text-gray-400 leading-relaxed pt-1">{edu.details}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 pt-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span>{edu.location}</span>
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

"use client";

import React from "react";
import { Layout, Server, Code } from "lucide-react";

export const SkillsMatrix: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      skills: ["Node.js", "Express.js", "MongoDB", "Python", "Django", "REST APIs"],
    },
    {
      title: "Languages & CS",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      skills: ["Java", "C++", "Python", "SQL", "Data Structures", "Algorithms", "Git"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-gray-950/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Technologies</span>
          </h2>
        </div>

        {/* Clean 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-slate-700 transition-colors space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

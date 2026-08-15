"use client";

import React, { useState } from "react";
import { PROFILE_DATA, SkillCategory } from "@/data/profileData";
import { Code, Layout, Server, Terminal, Zap, Check } from "lucide-react";

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-blue-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-gray-950/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" /> TECHNICAL SKILLS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Tech Stack</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl text-sm sm:text-base">
            Comprehensive proficiency breakdown across MERN stack development, Python/Django backend APIs, and core computer science fundamentals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {PROFILE_DATA.skills.map((cat: SkillCategory, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === idx
                  ? "bg-gray-900 border-blue-500 text-blue-400 shadow-lg scale-105"
                  : "bg-gray-950/60 border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700"
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Active Category Skill Progress */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-6">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {getCategoryIcon(PROFILE_DATA.skills[activeCategory].iconName)}
                <span>{PROFILE_DATA.skills[activeCategory].title}</span>
              </h3>
              <span className="text-xs font-mono text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-500/30">
                ACTIVE DOMAIN
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFILE_DATA.skills[activeCategory].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-2 hover:border-indigo-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-slate-100 font-semibold text-sm">
                    <Terminal className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{skill.name}</span>
                  </div>
                  {skill.tag && (
                    <div className="text-[11px] font-mono text-indigo-300 bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-500/20 w-fit">
                      {skill.tag}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Summary Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-gray-900 to-gray-950">
              <div className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">
                CORE STACK OVERVIEW
              </div>
              <h4 className="text-lg font-bold text-white mb-2">MERN + Python & Django</h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Proven track record in building full-stack web applications with responsive UIs, clean REST API endpoints, and efficient backend query handling.
              </p>

              <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div className="p-2 rounded bg-gray-950 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-400" /> React.js & Next.js
                </div>
                <div className="p-2 rounded bg-gray-950 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-400" /> Node & Express
                </div>
                <div className="p-2 rounded bg-gray-950 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-400" /> Python & Django
                </div>
                <div className="p-2 rounded bg-gray-950 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-emerald-400" /> Java & C/C++
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-gray-800">
              <div className="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">
                PROGRAMMING LANGUAGES
              </div>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "JavaScript (ES6+)", "C", "C++", "SQL", "HTML5", "CSS3"].map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-200 text-xs font-mono hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

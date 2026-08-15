"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profileData";
import { Code2, Server, Cpu, Terminal, UserCheck, Languages, Gamepad2, Sparkles, BookOpen } from "lucide-react";

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case "Server":
        return <Server className="w-6 h-6 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <Terminal className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-ambient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full modern-badge text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Web Apps & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Clean Solutions</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Final-year Computer Science Engineering student passionate about full-stack development, modern web frameworks, algorithms, and real-world application architecture.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROFILE_DATA.aboutCards.map((card, i) => (
            <div
              key={i}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 shadow-inner">
                  {getIcon(card.icon)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{card.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>PILLAR // 0{i + 1}</span>
                <span className="text-indigo-400 font-semibold">CORE FOCUS</span>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Details Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-indigo-400" />
              <span>Background & Developer Mindset</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Based in Hyderabad, Telangana, I blend academic discipline at Parul University with hands-on full-stack internship experience. I focus on writing clean, modular code, designing intuitive UI components, and building reliable REST APIs.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-sans text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-slate-500 font-mono text-[10px]">LOCATION</div>
                <div className="text-slate-200 font-semibold mt-1">Hyderabad, Telangana</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-slate-500 font-mono text-[10px]">DEGREE</div>
                <div className="text-blue-400 font-semibold mt-1">B.Tech CSE (2022-2026)</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-slate-500 font-mono text-[10px]">PRIMARY ROLE</div>
                <div className="text-emerald-400 font-semibold mt-1">Full Stack Developer</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
            {/* Languages */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Languages className="w-4 h-4 text-blue-400" /> Languages Spoken
              </h4>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.personalDetails.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-xs font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-purple-400" /> Hobbies & Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {PROFILE_DATA.personalDetails.hobbies.map((hobby, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-xs flex items-center gap-1.5 font-medium"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    {hobby}
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

"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profileData";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ArrowRight, ExternalLink, Code2, Server, CheckCircle2, Layers, Sparkles, User, Briefcase, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";

export const Hero: React.FC = () => {
  const typedText = useTypewriter(PROFILE_DATA.typewriterText);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-ambient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full modern-badge text-xs font-semibold tracking-wide shadow-lg shadow-indigo-950/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PROFILE_DATA.statusTag}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">HYDERABAD, INDIA</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block text-slate-100">{PROFILE_DATA.name}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 font-extrabold text-2xl sm:text-4xl mt-2">
                  Full Stack Software Developer
                </span>
              </h1>
            </div>

            {/* Dynamic Subtitle */}
            <div className="h-12 flex items-center">
              <p className="text-slate-300 font-mono text-sm sm:text-base border-l-2 border-indigo-500 pl-3">
                {typedText}
                <span className="inline-block w-2 h-4 bg-indigo-400 ml-1 animate-pulse" />
              </p>
            </div>

            {/* Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PROFILE_DATA.summary}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="modern-button-primary px-7 py-3.5 text-sm flex items-center gap-2.5 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PROFILE_DATA.resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="modern-button-outline px-6 py-3.5 text-sm flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={PROFILE_DATA.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  title="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-800/80">
              {PROFILE_DATA.heroStats.map((stat, i) => (
                <div key={i} className="glass-panel p-4 rounded-2xl border border-slate-800">
                  <div className="text-xl font-extrabold text-white font-mono flex items-center gap-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{stat.value}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{stat.subtext}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column - Sleek Human Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-700/60 shadow-2xl shadow-indigo-950/30 space-y-5">
              
              {/* Card Top Banner */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    TY
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {PROFILE_DATA.name}
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    </h3>
                    <p className="text-[11px] text-slate-400">Full Stack Software Developer</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-semibold">
                  MERN + Python
                </span>
              </div>

              {/* Profile Details List */}
              <div className="space-y-3 font-sans text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2 text-slate-400">
                      <GraduationCap className="w-4 h-4 text-blue-400" /> Education
                    </span>
                    <span className="font-semibold text-white">B.Tech CSE (2022-2026)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Briefcase className="w-4 h-4 text-emerald-400" /> Current Internship
                    </span>
                    <span className="font-semibold text-white">Paithacs Software Solutions</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2 text-slate-400">
                      <User className="w-4 h-4 text-purple-400" /> Academic Score
                    </span>
                    <span className="font-semibold text-indigo-300 font-mono">CGPA 7.71 / 10</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-200">React & Next.js</div>
                      <div className="text-[10px] text-slate-400">Frontend Apps</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-2.5">
                    <Server className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-200">Node & Django</div>
                      <div className="text-[10px] text-slate-400">REST Backend</div>
                    </div>
                  </div>
                </div>

                {/* Featured Project Banner */}
                <a
                  href="#portfolio"
                  className="block p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/70 via-indigo-950/60 to-slate-900 border border-indigo-500/30 hover:border-indigo-400 transition-colors group"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-indigo-300 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Featured ML App
                    </span>
                    <span className="text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
                      View Demo <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="text-white text-xs font-bold mt-1">
                    Fake News Detection System
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    Real-time ML Classifier built with Python & Django
                  </div>
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

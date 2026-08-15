"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profileData";
import { ArrowRight, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-ambient-mesh">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center space-y-6">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full modern-badge text-xs font-semibold tracking-wide shadow-lg shadow-indigo-950/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{PROFILE_DATA.statusTag}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">HYDERABAD, INDIA</span>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            <span className="block text-slate-100">{PROFILE_DATA.name}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 text-3xl sm:text-5xl mt-2 font-bold">
              Full-Stack Developer
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-slate-300 font-mono text-base sm:text-lg max-w-xl">
          I build web applications and backend systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
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

      </div>
    </section>
  );
};

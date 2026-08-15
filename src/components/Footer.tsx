"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profileData";
import { Code2, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070A11] border-t border-slate-800/80 py-12 relative font-sans text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-white text-sm">
                THANNIRU YASWANTH <span className="text-indigo-400 font-mono text-xs font-normal">{"// DEV"}</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Full Stack Software Developer
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#journey" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#console" className="hover:text-indigo-400 transition-colors">Console</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode Profile"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-2.5 rounded-full modern-button-primary text-white ml-2 cursor-pointer shadow-md"
              title="Scroll To Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Thanniru Yaswanth. Full Stack Software Developer Portfolio. Built with Next.js, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

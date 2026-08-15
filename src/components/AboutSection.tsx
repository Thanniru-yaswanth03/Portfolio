"use client";

import React from "react";
import { UserCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-ambient-mesh border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full modern-badge text-xs font-semibold mb-3">
            <UserCheck className="w-3.5 h-3.5 text-indigo-400" /> ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Web Apps & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Backend Systems</span>
          </h2>
        </div>

        {/* Concise Introduction */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-sans max-w-3xl mx-auto">
          <p>
            I&apos;m a final-year Computer Science student focused on full-stack development and backend engineering.
          </p>
          <p className="text-slate-400 text-sm sm:text-base">
            I enjoy building practical web applications, working with APIs and databases, and solving problems with data structures and algorithms.
          </p>
        </div>

      </div>
    </section>
  );
};

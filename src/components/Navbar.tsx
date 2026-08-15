"use client";

import React, { useState, useEffect } from "react";
import { PROFILE_DATA } from "@/data/profileData";
import { Code2, FileText, Menu, X, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ["#3B82F6", "#6366F1", "#8B5CF6", "#10B981"],
    });
    window.open(PROFILE_DATA.resumePdfUrl, "_blank");
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#portfolio" },
    { label: "Experience", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Console", href: "#console" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0E1A]/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-indigo-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-all">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-base flex items-center gap-1">
                YASWANTH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 text-xs font-mono font-normal">DEV</span>
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Resume & LinkedIn Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleDownloadResume}
              className="modern-button-outline px-5 py-2 text-xs flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Resume PDF</span>
            </button>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              title="LinkedIn Profile"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-5 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-semibold text-slate-200 hover:text-indigo-400 hover:bg-slate-900 rounded-xl"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  handleDownloadResume();
                  setMobileMenuOpen(false);
                }}
                className="modern-button-primary px-4 py-3 text-xs flex items-center gap-2 w-full justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

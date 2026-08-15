"use client";

import React, { useState } from "react";
import { PROFILE_DATA } from "@/data/profileData";
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, ExternalLink, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok && !data.success) {
        setErrorMessage(data.error || "Failed to dispatch email. Please try using the direct mailto button.");
      } else {
        setFormSent(true);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.8 },
          colors: ["#3B82F6", "#6366F1", "#10B981"],
        });
      }
    } catch (err: unknown) {
      setErrorMessage("Network connection error. Please try sending via your email app.");
    } finally {
      setLoading(false);
    }
  };

  const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || "Visitor"}`
  )}&body=${encodeURIComponent(formData.message || "")}`;

  return (
    <section id="contact" className="py-24 relative bg-ambient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full modern-badge text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" /> GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Build Together</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Open for Full Stack Developer roles, software engineering opportunities, and project collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-3xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">PRIMARY EMAIL</div>
                  <div className="text-sm font-bold text-white">{PROFILE_DATA.email}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PROFILE_DATA.email, "email")}
                aria-label="Copy primary email address"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-indigo-400 border border-slate-800"
                title="Copy Email"
              >
                {copiedField === "email" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-3xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">PHONE NUMBER</div>
                  <div className="text-sm font-bold text-white">{PROFILE_DATA.phone}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PROFILE_DATA.phone, "phone")}
                aria-label="Copy phone number"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-indigo-400 border border-slate-800"
                title="Copy Phone"
              >
                {copiedField === "phone" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-3xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">LOCATION</div>
                <div className="text-sm font-bold text-white">{PROFILE_DATA.location}</div>
                <div className="text-[11px] text-slate-400">{PROFILE_DATA.fullAddress}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-indigo-500/50 flex flex-col items-center justify-center gap-1.5 group transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                <span className="text-[11px] font-mono text-slate-400">LinkedIn</span>
              </a>

              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-indigo-500/50 flex flex-col items-center justify-center gap-1.5 group transition-colors"
              >
                <GithubIcon className="w-5 h-5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                <span className="text-[11px] font-mono text-slate-400">GitHub</span>
              </a>

              <a
                href={PROFILE_DATA.leetcode}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-indigo-500/50 flex flex-col items-center justify-center gap-1.5 group transition-colors"
              >
                <LeetCodeIcon className="w-5 h-5 text-slate-300 group-hover:text-emerald-400 transition-colors" />
                <span className="text-[11px] font-mono text-slate-400">LeetCode</span>
              </a>
            </div>

          </div>

          {/* Right Column: Real Email Contact Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Send Direct Email to Yaswanth</span>
              </h3>
              <a
                href={mailtoUrl}
                className="text-xs font-mono text-indigo-400 hover:underline flex items-center gap-1"
                title="Open in default mail app"
              >
                Open Mail App <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Submitting this form sends a real email directly to <span className="text-indigo-300 font-semibold">{PROFILE_DATA.email}</span>.
            </p>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-indigo-950/80 border border-indigo-500/50 text-indigo-200 text-center space-y-3 animate-in fade-in">
                <div className="text-lg font-extrabold text-white">✓ Email Sent Successfully!</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Your message has been sent to <span className="font-mono text-indigo-300">{PROFILE_DATA.email}</span>. Yaswanth will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="modern-button-outline px-5 py-2 text-xs mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your inquiry or job opportunity message..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="modern-button-primary px-6 py-3.5 text-xs flex-1 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer font-bold"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Transmitting Email..." : "Send Email to Yaswanth"}</span>
                  </button>

                  <a
                    href={mailtoUrl}
                    className="modern-button-outline px-5 py-3.5 text-xs flex items-center justify-center gap-1.5"
                    title="Open in Email App"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Mail App</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

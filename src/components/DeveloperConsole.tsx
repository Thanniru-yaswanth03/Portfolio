"use client";

import React, { useState, useRef, useEffect } from "react";
import { PROFILE_DATA } from "@/data/profileData";
import { Play, RotateCcw, Copy, Check, Code2 } from "lucide-react";

interface ConsoleLine {
  id: string;
  type: "input" | "output" | "system" | "error";
  text: string | React.ReactNode;
}

export const DeveloperConsole: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<ConsoleLine[]>([
    {
      id: "1",
      type: "system",
      text: "DEVELOPER EXPLORER v2.026 - Click any preset button below or type a query.",
    },
    {
      id: "2",
      type: "output",
      text: "Welcome! Explore Thanniru Yaswanth's developer profile, skills, and projects interactively.",
    },
  ]);

  const consoleEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollTop = consoleEndRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const inputId = `in-${history.length + 1}`;
    const outputId = `out-${history.length + 2}`;

    const newHistory: ConsoleLine[] = [
      ...history,
      { id: inputId, type: "input", text: `explore > ${cmdStr}` },
    ];

    switch (trimmed) {
      case "help":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="space-y-1.5 text-slate-300 font-sans text-xs">
              <div className="text-indigo-400 font-bold font-mono">AVAILABLE EXPLORER COMMANDS:</div>
              <div><span className="text-emerald-400 font-bold font-mono">about</span> — Summary & background overview</div>
              <div><span className="text-emerald-400 font-bold font-mono">stack</span> — MERN stack, Python/Django & core languages</div>
              <div><span className="text-emerald-400 font-bold font-mono">projects</span> — Live web applications & GitHub repos</div>
              <div><span className="text-emerald-400 font-bold font-mono">experience</span> — Internship roles @ Paithacs & Oasis</div>
              <div><span className="text-emerald-400 font-bold font-mono">contact</span> — Email, phone, LinkedIn & GitHub details</div>
              <div><span className="text-emerald-400 font-bold font-mono">whoami</span> — Developer identity summary</div>
              <div><span className="text-emerald-400 font-bold font-mono">clear</span> — Reset console output</div>
            </div>
          ),
        });
        break;

      case "about":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="space-y-1.5 font-sans text-xs text-slate-300">
              <div className="text-indigo-400 font-bold">{PROFILE_DATA.name}</div>
              <div>Title: {PROFILE_DATA.title}</div>
              <div>Education: B.Tech CSE at Parul University (2022-2026) | CGPA: 7.71 / 10</div>
              <div>Location: {PROFILE_DATA.location}</div>
              <div className="text-slate-400 mt-1">{PROFILE_DATA.summary}</div>
            </div>
          ),
        });
        break;

      case "stack":
      case "skills":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="space-y-1.5 font-sans text-xs text-slate-300">
              <div className="text-blue-400 font-bold">[Frontend]: React.js, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript ES6+</div>
              <div className="text-emerald-400 font-bold">[Backend]: Node.js, Express.js, Python, Django, REST APIs</div>
              <div className="text-purple-400 font-bold">[Databases]: MongoDB, SQL</div>
              <div className="text-amber-400 font-bold">[Languages & Core]: Java, Python, C, C++, Data Structures & Algorithms, Git</div>
            </div>
          ),
        });
        break;

      case "projects":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="space-y-1.5 font-sans text-xs text-slate-300">
              <div className="text-indigo-400 font-bold">1. Fake News Detection System [LIVE DEMO]</div>
              <div>   Real-time ML Classifier with Python & Django backend + responsive UI</div>
              <div>   URL: https://fakenewsdetectionsystem.pythonanywhere.com/</div>
              <div className="text-emerald-400 font-bold mt-1">2. Enterprise MERN Task & Analytics Hub</div>
              <div>   Full-stack React + Node + Express + MongoDB application</div>
            </div>
          ),
        });
        break;

      case "experience":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="space-y-1.5 font-sans text-xs text-slate-300">
              <div className="text-blue-400 font-bold">• Full Stack Developer Intern @ Paithacs Software Solutions (Jan 2026 - Apr 2026)</div>
              <div>  Engineered real-world web apps, backend APIs, and database schemas.</div>
              <div className="text-emerald-400 font-bold mt-1">• Frontend Developer Intern @ Oasis Infobyte (Dec 2024 - Jan 2025)</div>
              <div>  Built responsive web projects using HTML, CSS, and JavaScript.</div>
            </div>
          ),
        });
        break;

      case "whoami":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="font-sans text-xs text-indigo-300 font-semibold">
              Thanniru Yaswanth | Full Stack Software Developer | B.Tech CSE @ Parul University
            </div>
          ),
        });
        break;

      case "contact":
      case "hire":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="space-y-1 font-sans text-xs text-slate-300 bg-indigo-950/40 p-3 rounded-xl border border-indigo-500/30">
              <div className="text-indigo-300 font-bold">CONTACT INFO:</div>
              <div>Email: <a href={`mailto:${PROFILE_DATA.email}`} className="underline text-white font-bold">{PROFILE_DATA.email}</a></div>
              <div>Phone: {PROFILE_DATA.phone}</div>
              <div>LinkedIn: {PROFILE_DATA.linkedin}</div>
              <div>GitHub: {PROFILE_DATA.github}</div>
              <div>LeetCode: {PROFILE_DATA.leetcode}</div>
            </div>
          ),
        });
        break;

      case "github":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="font-sans text-xs text-indigo-300">
              GitHub Profile: <a href={PROFILE_DATA.github} target="_blank" rel="noreferrer" className="underline font-bold text-white">{PROFILE_DATA.github}</a>
            </div>
          ),
        });
        break;

      case "resume":
        newHistory.push({
          id: outputId,
          type: "output",
          text: (
            <div className="font-sans text-xs text-emerald-300">
              Resume PDF: <a href={PROFILE_DATA.resumePdfUrl} target="_blank" rel="noreferrer" className="underline font-bold text-white">Download Resume</a>
            </div>
          ),
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newHistory.push({
          id: outputId,
          type: "error",
          text: (
            <div className="font-sans text-xs text-rose-400">
              Query &apos;{cmdStr}&apos; not recognized. Click any shortcut button above or type &apos;help&apos;.
            </div>
          ),
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const handleCopyCLI = () => {
    const textToCopy = history.map((h) => (typeof h.text === "string" ? h.text : "")).join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="console" className="py-20 relative bg-ambient-mesh">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full modern-badge text-xs font-semibold mb-3">
            <Code2 className="w-3.5 h-3.5" /> INTERACTIVE PROFILE EXPLORER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Showcase Explorer</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-xl">
            Click any shortcut pill below to instantly inspect Yaswanth&apos;s background, skills, and projects.
          </p>
        </div>

        {/* Quick Command Preset Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {[
            { label: "about", cmd: "about" },
            { label: "stack", cmd: "stack" },
            { label: "projects", cmd: "projects" },
            { label: "experience", cmd: "experience" },
            { label: "contact", cmd: "contact" },
            { label: "github", cmd: "github" },
            { label: "resume", cmd: "resume" },
            { label: "clear", cmd: "clear" },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleCommand(item.cmd);
              }}
              className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all shadow-sm cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Console Box Container */}
        <div className="glass-panel rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-xs font-sans">
          
          {/* Top Bar */}
          <div className="bg-slate-900/90 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <span className="text-slate-400 text-xs ml-2 font-mono">yaswanth_profile_explorer</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyCLI}
                aria-label="Copy terminal output"
                className="text-slate-400 hover:text-indigo-400 text-xs flex items-center gap-1 cursor-pointer"
                title="Copy Output"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-indigo-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
              <button
                type="button"
                onClick={() => setHistory([])}
                aria-label="Reset terminal output"
                className="text-slate-400 hover:text-rose-400 text-xs flex items-center gap-1 cursor-pointer"
                title="Clear Output"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Inner Output Screen */}
          <div
            ref={consoleEndRef}
            onClick={() => inputRef.current?.focus()}
            className="p-5 bg-slate-950/95 min-h-[260px] max-h-[400px] overflow-y-auto space-y-3 cursor-text"
          >
            {history.map((line) => (
              <div key={line.id} className="leading-relaxed">
                {line.type === "system" && (
                  <div className="text-indigo-400 font-semibold">{line.text}</div>
                )}
                {line.type === "input" && (
                  <div className="text-slate-200 font-semibold">{line.text}</div>
                )}
                {line.type === "output" && (
                  <div className="text-slate-300 pl-3 border-l-2 border-slate-800">{line.text}</div>
                )}
                {line.type === "error" && (
                  <div className="text-rose-400">{line.text}</div>
                )}
              </div>
            ))}
          </div>

          {/* Form Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCommand(inputVal);
            }}
            className="bg-slate-900/90 p-3.5 border-t border-slate-800 flex items-center gap-3"
          >
            <span className="text-indigo-400 font-bold font-mono pl-2 shrink-0">explore &gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'about', 'stack', 'projects', 'contact'..."
              aria-label="Interactive developer console command input"
              className="flex-1 bg-transparent text-slate-100 font-sans text-xs focus:outline-none placeholder-slate-500 min-w-0"
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCommand(inputVal);
              }}
              aria-label="Run command"
              className="modern-button-primary px-4 py-2 text-xs flex items-center gap-1.5 shrink-0 cursor-pointer font-bold"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Inspect</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

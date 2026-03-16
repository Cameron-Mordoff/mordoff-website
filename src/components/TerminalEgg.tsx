"use client";

import { useEffect, useState, useRef } from "react";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami       — who is this guy?",
    "  skills       — technical skill set",
    "  ls           — list pages",
    "  contact      — get in touch",
    "  sudo         — nice try",
    "  clear        — clear terminal",
    "  exit         — close terminal",
  ],
  whoami: [
    "Cameron Mordoff",
    "Senior Systems Administrator @ Restaurant365",
    "Orange County, CA",
    "Homelab operator. Tuna fisherman. Automation nerd.",
  ],
  skills: [
    "Endpoint & Identity:    Intune, Jamf, Entra ID, Autopilot",
    "Automation & Security:  PowerShell, Python, Azure Automation",
    "Networking:             Cisco Meraki, FortiGate, DNS, DHCP",
    "AI Platforms:           Glean, ChatGPT Enterprise, Claude",
  ],
  ls: [
    "drwxr-xr-x  /",
    "drwxr-xr-x  /about",
    "drwxr-xr-x  /resume",
    "drwxr-xr-x  /projects",
    "drwxr-xr-x  /dashboard",
    "drwxr-xr-x  /contact",
  ],
  contact: [
    "Email:    cameronmordoff@gmail.com",
    "LinkedIn: linkedin.com/in/cameron-mordoff",
    "GitHub:   github.com/Cameron-Mordoff",
  ],
  sudo: [
    "sudo: permission denied.",
    "This incident will be reported.",
  ],
};

export default function TerminalEgg() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "cameron@mordoff.com ~ % — type 'help' to list commands",
    "",
  ]);
  const buffer = useRef("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Listen for "sudo" typed anywhere outside inputs
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (open) return;

      buffer.current += e.key;
      if (buffer.current.length > 5) buffer.current = buffer.current.slice(-5);
      if (buffer.current === "/help") {
        setOpen(true);
        buffer.current = "";
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  // Focus input when terminal opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Scroll to bottom on new lines
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function runCommand(cmd: string) {
    const trimmed = cmd.trim().toLowerCase();
    const prompt = `$ ${cmd}`;

    if (trimmed === "exit") {
      setOpen(false);
      setLines(["cameron@mordoff.com ~ % — type 'help' for commands", ""]);
      return;
    }

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    const output = COMMANDS[trimmed];
    if (output) {
      setLines((prev) => [...prev, prompt, ...output, ""]);
    } else if (trimmed === "") {
      setLines((prev) => [...prev, prompt]);
    } else {
      setLines((prev) => [...prev, prompt, `command not found: ${trimmed}`, ""]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    runCommand(input);
    setInput("");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
          <button
            onClick={() => setOpen(false)}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
            aria-label="Close"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-slate-400 font-mono">cameron@mordoff.com</span>
        </div>

        {/* Terminal body */}
        <div
          className="bg-slate-900 p-4 font-mono text-sm h-80 overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div key={i} className="text-green-400 leading-relaxed whitespace-pre">
              {line}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-cyan-400 shrink-0">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-green-400 outline-none caret-green-400"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal input"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}

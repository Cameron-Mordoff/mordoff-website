"use client";

import { useEffect, useState } from "react";

const TITLES = [
  "Systems Administrator",
  "Homelab Enthusiast",
  "Automation Engineer",
  "PowerShell Scripter",
];

export default function TypewriterBadge() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  useEffect(() => {
    const current = TITLES[titleIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("waiting"), 2200);
        return () => clearTimeout(t);
      }
    }

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("deleting"), 300);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setTitleIndex((i) => (i + 1) % TITLES.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, titleIndex]);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm mb-6">
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
      <span>
        {displayed}
        <span className="cursor-blink">|</span>
      </span>
    </div>
  );
}

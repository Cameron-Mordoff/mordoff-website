import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Cameron Mordoff",
  description: "Projects and homelab work by Cameron Mordoff.",
};

const PROJECTS = [
  {
    title: "mordoff-website",
    description:
      "Personal portfolio and homelab dashboard built with Next.js, TypeScript, and Tailwind CSS. Statically exported and self-hosted on my homelab server.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Cameron-Mordoff/mordoff-website",
    internal: null,
  },
  {
    title: "Homelab — Andromeda",
    description:
      "Self-hosted infrastructure running Unraid OS with 20+ TB of storage, Docker containers, VMs, and a full Grafana/Prometheus monitoring stack. Live metrics available on the Dashboard.",
    tags: ["Unraid", "Docker", "Grafana", "Prometheus", "Nginx"],
    github: null,
    internal: "/dashboard",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Projects</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Things I&apos;ve built and maintain</p>
        </div>

        <div className="flex flex-col gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-base font-semibold text-slate-900 dark:text-white font-mono">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3 shrink-0">
                  {project.internal && (
                    <Link
                      href={project.internal}
                      className="text-xs text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      View Dashboard →
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

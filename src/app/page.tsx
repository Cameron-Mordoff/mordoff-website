import type { Metadata } from "next";
import Link from "next/link";
import TypewriterBadge from "@/components/TypewriterBadge";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Cameron Mordoff — Systems Administrator",
  description: "Senior Systems Administrator with 7+ years of experience in endpoint management, automation, and infrastructure.",
};

const SKILL_GROUPS = [
  {
    category: "Endpoint & Identity",
    skills: ["Microsoft Intune", "Windows Autopilot", "Jamf", "Entra ID (Azure AD)", "Microsoft 365", "Exchange Online", "Group Policy (GPO)"],
  },
  {
    category: "Automation & Security",
    skills: ["PowerShell", "Azure Automation", "Microsoft Defender", "BitLocker", "SSO Integrations"],
  },
  {
    category: "Networking & Infrastructure",
    skills: ["Cisco Meraki", "Fortinet FortiGate", "Windows Server", "TCP/IP", "DNS", "DHCP"],
  },
];

const QUICK_LINKS = [
  {
    label: "Resume",
    href: "/resume",
    description: "Work history & skills",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Automation & infrastructure work",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    description: "Personal dashboard",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero — always dark because of the image overlay */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/server-rack.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        {/* Bottom fade matches page background in each mode */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-[#0f1117] to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-2xl">
            <TypewriterBadge />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hey, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                Cameron
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
              I keep systems running, infrastructure humming, and home labs thriving.
              Passionate about self-hosted solutions, automation, and making things
              work the way they should.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                View Resume
              </Link>
              <a
                href="https://www.linkedin.com/in/cameron-mordoff"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Cameron-Mordoff"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="mailto:cameronmordoff@gmail.com"
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105 backdrop-blur-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="dot-grid max-w-full px-0 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-8">
              What I work with
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group, i) => (
              <FadeIn key={group.category} delay={i * 100}>
              <div
                className="p-5 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-t border-slate-200 dark:border-slate-800" />
      </div>

      {/* Explore */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <FadeIn>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-6">
            Explore
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {QUICK_LINKS.map((link, i) => (
            <FadeIn key={link.href} delay={i * 120}>
            <Link
              href={link.href}
              className="block group relative p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/60 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/5 group-hover:to-teal-500/5 transition-all rounded-2xl" />
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                  {link.icon}
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {link.label}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{link.description}</div>
                <div className="mt-4 text-cyan-600 dark:text-cyan-400 text-sm font-medium flex items-center gap-1 opacity-30 group-hover:opacity-100 transition-opacity">
                  Visit <span>→</span>
                </div>
              </div>
            </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-t border-slate-200 dark:border-slate-800" />
      </div>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
              Get in Touch
            </h2>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Want to connect or work together?
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
              I&apos;m always open to new opportunities, collaborations, or just a good conversation about infrastructure and homelab setups.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:cameronmordoff@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/cameron-mordoff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Cameron-Mordoff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}

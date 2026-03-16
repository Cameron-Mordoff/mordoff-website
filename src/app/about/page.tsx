import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Cameron Mordoff",
  description: "A bit about Cameron Mordoff — Senior Systems Administrator, homelab tinkerer, and deep sea fisherman based in Orange County, CA.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">About</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">The person behind the terminal</p>
        </div>

        {/* Intro card */}
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40">
          <div className="shrink-0 mx-auto sm:mx-0">
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <Image
                src="/images/cameron-1.JPG"
                alt="Cameron Mordoff"
                width={128}
                height={128}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Cameron Mordoff</h2>
            <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-3">Senior Systems Administrator · Orange County, CA</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              IT professional with 7+ years of experience keeping systems running, endpoints managed,
              and workflows automated. I care about building things that work reliably and understanding
              exactly why they work.
            </p>
          </div>
        </div>

        {/* Story sections */}
        <div className="space-y-8">

          <section className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
              How I Got Here
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              I&apos;ve been around computers my whole life, but it didn&apos;t really click as a career path until
              I took my first IT class in junior college. Something about learning how computers actually work,
              how they talk to each other, how networks are structured, how security fits into all of it,
              just made sense to me.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              From there I worked my way up through desktop support and helpdesk roles, picking up
              infrastructure and automation along the way. Today I focus on endpoint management, identity,
              and building systems that reduce manual work. The kind of problems where a well-written
              PowerShell script or an Azure Automation runbook saves hours every week.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
              What Drives Me
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              I genuinely enjoy figuring out how things work, and more importantly, how to make them work
              better. Whether it&apos;s troubleshooting a weird network behavior, building a new automation
              workflow, or evaluating a new piece of technology, I like being the person who digs in and
              finds the answer.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Security is something I care about deeply too. Keeping systems locked down, audited, and
              compliant isn&apos;t just a job requirement. It&apos;s the right way to build infrastructure.
              And with AI platforms becoming a standard part of the enterprise toolkit, staying current
              on how those tools work (and how to govern them) has become a big part of what I do.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
              Outside of Work
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              When I&apos;m not at a keyboard, I&apos;m spending time with my wife and kid or out on the water.
              Deep sea fishing off the California coast is my escape. There&apos;s something about being
              miles offshore chasing tuna that completely clears your head.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              The homelab keeps me busy too. It started in 2018 as a way to run Plex and a few services,
              and has grown into a full infrastructure stack I genuinely rely on and keep learning from.
              You can see the live metrics on the{" "}
              <Link href="/dashboard" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                Dashboard
              </Link>.
            </p>
          </section>

          <section className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
              Where I&apos;m Headed
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m committed to staying in IT administration and automation for the long haul —
              continuing to deepen my expertise in endpoint management, cloud infrastructure, and
              identity systems. I&apos;m currently working toward my Azure AI Fundamentals certification
              and keep a close eye on where AI tooling is heading in the enterprise space. The field
              moves fast, and I like it that way.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

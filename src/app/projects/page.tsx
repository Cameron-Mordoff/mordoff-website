const PROJECTS = [
  {
    title: "Intune Proactive Remediation — Windows Update Health",
    description:
      "Designed and deployed a Proactive Remediation solution in Microsoft Intune to automatically detect and repair unhealthy Windows Update states across the endpoint fleet. Reduced manual troubleshooting tickets and improved patch compliance rates company-wide.",
    tags: ["PowerShell", "Microsoft Intune", "Windows Autopilot", "Endpoint Management"],
    github: null,
  },
  {
    title: "Exchange Online Offboarding Automation",
    description:
      "Built an automated offboarding pipeline using Torii and Azure Automation runbooks to standardize mailbox termination, license revocation, and access removal. Eliminated manual steps, reduced risk of lingering access, and cut average offboarding time significantly.",
    tags: ["Azure Automation", "PowerShell", "Exchange Online", "Torii", "Entra ID"],
    github: null,
  },
  {
    title: "Windows Autopilot Deployment Framework",
    description:
      "Architected and maintained a zero-touch Windows deployment framework using Intune + Windows Autopilot supporting 625+ endpoints. Standardized provisioning, policy enforcement, and secure configuration across hybrid and remote workforce.",
    tags: ["Windows Autopilot", "Microsoft Intune", "Group Policy", "Microsoft 365"],
    github: null,
  },
  {
    title: "Asset Lifecycle & Compliance Workflows (Bluetally)",
    description:
      "Built Bluetally workflows to automate asset tracking, compliance reporting, and lifecycle visibility across the organization. Improved accuracy of inventory data and reduced time spent on manual asset audits.",
    tags: ["Bluetally", "Asset Management", "Automation", "Compliance"],
    github: null,
  },
  {
    title: "Email Deliverability & Security Hardening",
    description:
      "Led SPF/DMARC remediation and Mimecast configuration cleanup to resolve business-impacting email delivery failures. Implemented monitoring and documented policies to prevent recurrence.",
    tags: ["SPF", "DMARC", "Mimecast", "Exchange Online", "Email Security"],
    github: null,
  },
  {
    title: "macOS Fleet Management with Jamf",
    description:
      "Deployed and maintained Jamf MDM for 180+ macOS devices, ensuring consistent configuration, compliance enforcement, and automated software deployment across a distributed workforce.",
    tags: ["Jamf", "macOS", "MDM", "Endpoint Management"],
    github: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Projects</h1>
          <p className="text-slate-600 dark:text-slate-400">
            A selection of automation, infrastructure, and endpoint management work.
            Additional scripts and tools on{" "}
            <a
              href="https://github.com/Cameron-Mordoff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="text-base font-semibold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h2>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    aria-label="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs"
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

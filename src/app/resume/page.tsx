import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume — Cameron Mordoff",
  description: "Resume of Cameron Mordoff, Senior Systems Administrator specializing in Microsoft Intune, Jamf, PowerShell, Entra ID, and enterprise endpoint management.",
};

const EXPERIENCE = [
  {
    title: "Senior Systems Administrator",
    company: "Restaurant365",
    location: "Irvine, CA",
    period: "Dec 2023 – Present",
    bullets: [
      "Manage endpoint lifecycle operations across ~800 corporate endpoints (625+ Windows via Intune, 180+ macOS via Jamf), ensuring compliance, reliability, and standardized provisioning.",
      "Support enterprise onboarding/offboarding volume averaging ~35–40 onboardings/month and ~15 offboardings/month through automation-first workflows.",
      "Built and maintained Windows endpoint management foundation using Intune + Windows Autopilot, supporting standardized deployment, policy enforcement, and secure configurations.",
      "Developed and deployed Intune Proactive Remediation solution (Windows Update Health & Repair) to detect and repair unhealthy Windows Update states, improving patch reliability and reducing manual troubleshooting.",
      "Designed and extended Exchange Online offboarding automation in Torii, building HTTP request workflow steps that trigger Azure Automation runbooks to assign mail forwarding, convert mailboxes to shared, and delegate manager access — reducing manual termination steps and access risk.",
      "Led improvements to email deliverability and security (SPF/DMARC troubleshooting and Mimecast cleanup), resolving business-impacting delivery failures.",
      "Led Admin By Request rollout and endpoint privilege hardening across Windows and macOS fleets, including company-wide change communications, vendor coordination, and Intune/Jamf deployment tuning.",
      "Served as primary technical owner for Lanai AI monitoring platform, leading deployment via Intune and Jamf, adapting vendor scripts for the R365 environment, and collaborating weekly with the Lanai team to resolve integration challenges.",
      "Built a custom Python integration between Bluetally and Glean hosted as an Azure Function App, automating real-time asset data sync into the enterprise AI search platform.",
      "Implemented SSO and SCIM provisioning across multiple enterprise SaaS platforms, improving identity governance and eliminating manual access management overhead.",
      "Built an automated Entra ID security auditing stack using PowerShell and Azure Automation runbooks with a System-Assigned Managed Identity, exporting results to SharePoint and surfacing insights through a Power BI dashboard.",
      "Led onboarding and administration of enterprise AI platforms including Glean, ChatGPT Enterprise, and Claude, managing access, integrations, and user provisioning.",
      "Led a SharePoint permissions cleanup initiative prior to Glean rollout, removing global sharing links and auditing site permissions to ensure data governance compliance.",
      "Support core network/security infrastructure including Cisco Meraki devices and Fortinet FortiGate firewalls.",
    ],
  },
  {
    title: "Systems Administrator",
    company: "Restaurant365",
    location: "Irvine, CA",
    period: "May 2022 – Dec 2023",
    bullets: [
      "Resolved 1,500+ tickets in Freshservice while maintaining a 98% satisfaction rating across hybrid and remote teams supporting onboarding/offboarding volume of ~35–40 onboardings/month.",
      "Implemented Microsoft Intune and Windows Autopilot from the ground up, establishing the device provisioning and lifecycle management foundation still in use today.",
      "Introduced Bluetally as the organization's asset tracking platform, building initial workflows for compliance reporting and lifecycle visibility.",
      "Reduced average ticket resolution time by 25% through automation, SOP documentation, and repeatable support processes.",
    ],
  },
  {
    title: "IT Support Engineer, Level 2",
    company: "Element Materials Technology",
    location: "Huntington Beach, CA",
    period: "Nov 2021 – May 2022",
    bullets: [
      "Delivered Tier 2 support for Windows OS, Microsoft Office, Teams, and Exchange Online.",
      "Supported IT system transitions during lab acquisitions with minimal downtime and zero data loss.",
      "Managed user provisioning and access using Entra ID, Active Directory, and Microsoft 365.",
    ],
  },
  {
    title: "IT Support Specialist II",
    company: "Neudesic",
    location: "Irvine, CA",
    period: "Jul 2020 – Nov 2021",
    bullets: [
      "Supported 300+ remote and on-site endpoints, resolving escalated support issues and improving service reliability.",
      "Supported deployment of Microsoft Intune and Windows Autopilot to streamline device provisioning.",
      "Authored internal knowledge base articles to drive self-service and reduce repeat ticket volume.",
    ],
  },
  {
    title: "IT Support Specialist I",
    company: "Neudesic",
    location: "Irvine, CA",
    period: "Apr 2019 – Jul 2020",
    bullets: [
      "Supported onboarding/offboarding across departments and locations, ensuring accurate provisioning and secure access changes.",
      "Configured and deployed Windows and macOS devices and supported ticketing workflows.",
    ],
  },
  {
    title: "IT Desktop Support",
    company: "Lexxiom",
    location: "Rancho Cucamonga, CA",
    period: "Sep 2017 – Apr 2019",
    bullets: [
      "Delivered desktop support in a 50+ user office environment including device deployment and troubleshooting.",
      "Authored SOP documentation to improve consistency and reduce time-to-resolution for common issues.",
    ],
  },
];

const SKILLS_GROUPS = [
  {
    category: "Endpoint & Identity",
    items: ["Intune", "Windows Autopilot", "Jamf", "Entra ID (Azure AD)", "Microsoft 365", "Exchange Online", "Mimecast", "Freshservice", "Admin By Request", "Patch My PC", "Bluetally"],
  },
  {
    category: "Automation & Security",
    items: ["PowerShell", "Python", "Azure Automation", "Azure Functions", "Torii", "Git / GitHub", "Microsoft Defender", "BitLocker", "SSO / SCIM", "VPN / Remote Access"],
  },
  {
    category: "Networking & Infrastructure",
    items: ["Cisco Meraki", "Fortinet FortiGate", "Windows Server", "TCP/IP", "DNS", "DHCP"],
  },
  {
    category: "AI & Productivity Platforms",
    items: ["Glean", "ChatGPT Enterprise", "Claude", "Lanai", "Confluence", "SharePoint", "Power BI"],
  },
];

const EDUCATION = [
  {
    degree: "B.S., Management Information Systems",
    institution: "California State University, Long Beach",
  },
  {
    degree: "A.A., Business Administration and Management",
    institution: "Citrus College",
  },
];

const CERTIFICATIONS = [
  {
    label: "Microsoft Certified: Azure Fundamentals (Jan 2025)",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/Cameron-Mordoff/48974F380370D2E4?sharingId=594E2B6298055279",
  },
  {
    label: "Microsoft 365 Certified: Fundamentals (Jan 2025)",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/Cameron-Mordoff/8CB0593091AD06AF?sharingId=594E2B6298055279",
  },
  {
    label: "Microsoft Certified: Azure AI Fundamentals — In Progress",
    url: null,
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 print:py-4 print:px-0 print:max-w-none">

        {/* Header */}
        <div className="mb-8 pb-8 border-b border-slate-200 dark:border-slate-700 print:border-slate-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white print:text-black mb-1">Cameron Mordoff</h1>
              <p className="text-xl text-cyan-600 dark:text-cyan-400 print:text-slate-600 font-medium">Senior Systems Administrator</p>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <PrintButton />
              <div className="text-sm text-slate-500 dark:text-slate-400 print:text-slate-600 space-y-1 sm:text-right">
                <p>cameronmordoff@gmail.com</p>
                <a
                  href="https://www.linkedin.com/in/cameron-mordoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 print:text-slate-600 transition-colors"
                >
                  linkedin.com/in/cameron-mordoff
                </a>
                <p>Irvine, CA</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 print:text-slate-700 leading-relaxed max-w-3xl text-sm">
            Senior Systems Administrator with 7+ years of experience supporting and scaling enterprise IT environments.
            Strong focus on automation, endpoint management, identity systems, and security operations. Skilled in
            Microsoft Intune, Windows Autopilot, Jamf, Entra ID (Azure AD), Microsoft 365, and Exchange Online. Known
            for building reliable, repeatable workflows through PowerShell, Python, and Azure Automation — improving
            compliance, reducing manual IT workload, and leading the onboarding and administration of enterprise AI
            platforms including Glean, ChatGPT Enterprise, and Claude.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:gap-6">

          {/* Main column */}
          <div className="lg:col-span-2 space-y-10 print:space-y-6">
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 print:text-slate-500 mb-4">
                Experience
              </h2>
              <div className="space-y-0 print:space-y-0">
                {EXPERIENCE.map((job, i) => (
                  <div
                    key={i}
                    className={`pl-4 border-l-2 border-slate-200 dark:border-slate-700 hover:border-cyan-500 print:border-slate-300 transition-colors py-6 print:py-4 ${
                      i > 0 ? "border-t border-t-slate-100 dark:border-t-slate-800 print:border-t-slate-200" : ""
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white print:text-black">{job.title}</h3>
                        <p className="text-cyan-600 dark:text-cyan-300 print:text-slate-600 text-sm">{job.company} — {job.location}</p>
                      </div>
                      <span className="text-sm text-slate-400 dark:text-slate-500 shrink-0">{job.period}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {job.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2 text-slate-600 dark:text-slate-400 print:text-slate-700 text-sm leading-relaxed">
                          <span className="text-cyan-500 print:text-slate-400 mt-0.5 shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 print:text-slate-500 mb-4">
                Education
              </h2>
              <div className="space-y-3">
                {EDUCATION.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-slate-900 dark:text-white print:text-black text-sm">{edu.degree}</h3>
                    <p className="text-cyan-600 dark:text-cyan-300 print:text-slate-600 text-sm">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 print:space-y-6">
            <section className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 print:bg-transparent print:border-0 print:p-0">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 print:text-slate-500 mb-4">
                Technical Skills
              </h2>
              <div className="space-y-5 print:space-y-3">
                {SKILLS_GROUPS.map((group) => (
                  <div key={group.category}>
                    <p className="text-slate-700 dark:text-slate-300 print:text-slate-700 text-sm font-medium mb-2">{group.category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 rounded bg-white dark:bg-slate-700/60 print:bg-slate-100 border border-slate-200 dark:border-slate-600 print:border-slate-300 text-slate-600 dark:text-slate-300 print:text-slate-700 text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 print:bg-transparent print:border-0 print:p-0">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 print:text-slate-500 mb-4">
                Certifications
              </h2>
              <ul className="space-y-2">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} className="flex gap-2 text-slate-600 dark:text-slate-300 print:text-slate-700 text-sm">
                    <span className="text-cyan-500 print:text-slate-400 shrink-0">▸</span>
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors underline underline-offset-2 decoration-slate-300 dark:decoration-slate-600 hover:decoration-cyan-500"
                      >
                        {cert.label}
                      </a>
                    ) : (
                      <span className="italic text-slate-400 dark:text-slate-500">{cert.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

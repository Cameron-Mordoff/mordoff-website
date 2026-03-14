import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Cameron Mordoff",
  description: "Live homelab metrics and server stats for Cameron Mordoff's home server.",
};

const GRAFANA_URL = "https://grafana.mordoff.com";

const GRAFANA_BASE = "https://grafana.mordoff.com/d-solo/ad995jn/unraid-overview?orgId=1&from=now-1h&to=now&timezone=browser&var-ds_prometheus=bfcspkzyrfchsb&var-job=unraid&var-nodename=Andromeda&var-node=192.168.1.10:9100&refresh=1m&theme=dark";

const GRAFANA_STATS: { title: string; url: string }[] = [
  { title: "CPU Busy", url: `${GRAFANA_BASE}&panelId=panel-20&kiosk` },
  { title: "RAM Used", url: `${GRAFANA_BASE}&panelId=panel-16&kiosk` },
  { title: "Uptime",   url: `${GRAFANA_BASE}&panelId=panel-15&kiosk` },
];

const GRAFANA_SECTIONS: { heading: string; panels: { title: string; url: string }[] }[] = [
  {
    heading: "Performance",
    panels: [
      { title: "CPU Usage",    url: `${GRAFANA_BASE}&panelId=panel-77&kiosk` },
      { title: "Memory Usage", url: `${GRAFANA_BASE}&panelId=panel-78&kiosk` },
    ],
  },
  {
    heading: "Network",
    panels: [
      { title: "Network Traffic", url: `${GRAFANA_BASE}&panelId=panel-74&kiosk` },
    ],
  },
  {
    heading: "Storage",
    panels: [
      { title: "Disk Read/Write IOps", url: `${GRAFANA_BASE}&panelId=panel-9&kiosk` },
      { title: "Disk Read/Write Data", url: `${GRAFANA_BASE}&panelId=panel-33&kiosk` },
    ],
  },
  {
    heading: "Hardware",
    panels: [
      { title: "Temperature Monitor", url: `${GRAFANA_BASE}&panelId=panel-158&kiosk` },
    ],
  },
];

const SERVER_SPECS = [
  { label: "OS",    value: "Unraid OS Plus" },
  { label: "CPU",   value: "Intel Core i5-8500T @ 2.10GHz" },
  { label: "Cores", value: "6 cores / 6 threads" },
  { label: "RAM",   value: "32 GiB DDR4" },
  { label: "Array", value: "24 TB (2 data + parity)" },
  { label: "Cache", value: "1 TB SSD" },
  { label: "Board", value: "Supermicro X11SCA-F" },
];

function SectionHeading({ label }: { label: string }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
      {label}
    </h3>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Live metrics from Andromeda</p>
        </div>

        {/* About */}
        <section className="mb-10 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
            About This Lab
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            I built my first homelab in 2018, just before graduating university, using used enterprise server parts sourced off eBay.
            What started as a way to self-host Plex, Radarr, and Sonarr on a few terabytes of storage has grown into a setup
            I rely on daily — now running over 20 TB of data and a variety of services, VMs, and Docker containers.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The hardware has gone through four generations: an old laptop, used single-CPU server hardware, a dual-Xeon
            machine with 256 GB of RAM, and now a more power-efficient Intel Core i5 with 32 GB DDR4 running Unraid.
            It&apos;s been a hands-on playground for learning infrastructure, networking, and self-hosted tooling — much of
            which has directly shaped how I approach systems work professionally.
          </p>
        </section>

        {/* Top section label + Grafana link */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Homelab Live Metrics
          </h2>
          <a
            href={GRAFANA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Open Grafana →
          </a>
        </div>

        {/* Stat gauges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {GRAFANA_STATS.map((panel) => (
            <div key={panel.title} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <iframe
                src={panel.url}
                className="w-full"
                style={{ height: "160px", border: "none" }}
                title={panel.title}
              />
            </div>
          ))}
        </div>

        {/* Grouped graph sections */}
        <div className="flex flex-col gap-8 mb-10">
          {GRAFANA_SECTIONS.map((section) => (
            <div key={section.heading}>
              <SectionHeading label={section.heading} />
              <div className="flex flex-col gap-4">
                {section.panels.map((panel) => (
                  <div key={panel.title} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <iframe
                      src={panel.url}
                      className="w-full"
                      style={{ height: "220px", border: "none" }}
                      title={panel.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Server specs */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-4">
            Server Specs
          </h2>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/40 divide-y divide-slate-100 dark:divide-slate-700/60">
            {SERVER_SPECS.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between px-5 py-3">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide w-28 shrink-0">{spec.label}</span>
                <span className="text-sm text-slate-800 dark:text-slate-200 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

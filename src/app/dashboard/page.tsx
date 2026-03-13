// ─── Update these URLs to your actual services ───────────────────────────────
const GRAFANA_URL = "https://grafana.mordoff.com";

// Grafana panel embeds — get these from any panel: Share → Embed → Copy URL
// Format: https://grafana.mordoff.com/d-solo/DASHBOARD_UID/name?orgId=1&panelId=N&theme=dark
// Requires allow_embedding = true in grafana.ini
const GRAFANA_BASE = "https://grafana.mordoff.com/d-solo/ad995jn/unraid-overview?orgId=1&from=now-24h&to=now&timezone=browser&var-ds_prometheus=bfcspkzyrfchsb&var-job=unraid&var-nodename=Andromeda&var-node=192.168.1.10:9100&refresh=1m&theme=dark";

const GRAFANA_STATS: { title: string; url: string }[] = [
  { title: "CPU Busy", url: `${GRAFANA_BASE}&panelId=panel-20` },
  { title: "RAM Used", url: `${GRAFANA_BASE}&panelId=panel-16` },
  { title: "Uptime",   url: `${GRAFANA_BASE}&panelId=panel-15` },
];

const GRAFANA_GRAPHS: { title: string; url: string }[] = [
  { title: "CPU Usage",       url: `${GRAFANA_BASE}&panelId=panel-77` },
  { title: "Memory Usage",    url: `${GRAFANA_BASE}&panelId=panel-78&kiosk` },
  { title: "Network Traffic", url: `${GRAFANA_BASE}&panelId=panel-74` },
];

const SERVER_SPECS = [
  { label: "OS",        value: "Unraid OS Plus" },
  { label: "CPU",       value: "Intel Core i5-8500T @ 2.10GHz" },
  { label: "Cores",     value: "6 cores / 6 threads" },
  { label: "RAM",       value: "32 GiB DDR4" },
  { label: "Array",     value: "24 TB (2 data + parity)" },
  { label: "Cache",     value: "1 TB SSD" },
  { label: "Board",     value: "Supermicro X11SCA-F" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Your homelab at a glance</p>
        </div>

        {/* Grafana panels */}
        <section className="mb-10">
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

          {/* Stat gauges — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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

          {/* Graphs — full width, one per row */}
          <div className="flex flex-col gap-4">
            {GRAFANA_GRAPHS.map((panel) => (
              <div key={panel.title} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <iframe
                  src={panel.url}
                  className="w-full"
                  style={{ height: "200px", border: "none" }}
                  title={panel.title}
                />
              </div>
            ))}
          </div>
        </section>

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

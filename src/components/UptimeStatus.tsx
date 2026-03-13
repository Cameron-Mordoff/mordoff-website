"use client";

import { useEffect, useState } from "react";

interface Monitor {
  id: number;
  name: string;
}

interface Heartbeat {
  status: number; // 1 = up, 0 = down
}

interface StatusData {
  monitors: Monitor[];
  heartbeats: Record<string, Heartbeat[]>;
  uptimes: Record<string, number>;
}

export default function UptimeStatus({
  slug,
  apiBase,
}: {
  slug: string;
  apiBase: string;
}) {
  const [data, setData] = useState<StatusData | null>(null);
  const [error, setError] = useState(false);

  const fetchStatus = async () => {
    try {
      const [pageRes, hbRes] = await Promise.all([
        fetch(`${apiBase}/api/status-page/${slug}`),
        fetch(`${apiBase}/api/status-page/heartbeat/${slug}`),
      ]);
      const page = await pageRes.json();
      const hb = await hbRes.json();

      const monitors: Monitor[] =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        page.publicGroupList?.flatMap((g: any) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          g.monitorList.map((m: any) => ({ id: m.id, name: m.name }))
        ) ?? [];

      setData({
        monitors,
        heartbeats: hb.heartbeatList ?? {},
        uptimes: hb.uptimeList ?? {},
      });
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 60_000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <p className="text-sm text-slate-400 dark:text-slate-500 text-center py-6">
        Unable to reach status API.
      </p>
    );
  }

  if (!data) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-20 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {data.monitors.map((monitor) => {
        const latest = data.heartbeats[monitor.id]?.at(-1);
        const uptime24 = data.uptimes[`${monitor.id}_24`];
        const isUp = latest?.status === 1;

        return (
          <div
            key={monitor.id}
            className="p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  isUp ? "bg-green-400" : "bg-red-400"
                }`}
              />
              <span className="text-sm font-medium text-slate-900 dark:text-white truncate">
                {monitor.name}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-medium ${
                  isUp ? "text-green-500" : "text-red-500"
                }`}
              >
                {isUp ? "Online" : "Offline"}
              </span>
              {uptime24 !== undefined && (
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {(uptime24 * 100).toFixed(1)}%
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

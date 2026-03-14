# cameron.mordoff.com

Personal website and homelab dashboard for Cameron Mordoff — Senior Systems Administrator.

**Live site:** [cameron.mordoff.com](https://cameron.mordoff.com)

## Pages

- **Home** — Intro, skills overview, and quick navigation
- **Resume** — Work history, certifications, and technical skills
- **Projects** — Automation and infrastructure projects
- **Dashboard** — Live Grafana metrics from my self-hosted Unraid homelab server

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, static export (`output: "export"`)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Grafana](https://grafana.com) — Embedded iframe panels via `d-solo` endpoints
- Served via nginx on self-hosted infrastructure

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory and served directly by nginx.

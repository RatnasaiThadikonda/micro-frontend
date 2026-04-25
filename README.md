# Frontend MS

Angular learning project that models a real micro-frontend workspace with Native Federation.

## Workspace Shape

| App | Type | Port | Responsibility |
| --- | --- | --- | --- |
| `shell` | Dynamic host | `4200` | Owns layout, navigation, and remote loading |
| `orders` | Remote | `4201` | Order orchestration |
| `catalog` | Remote | `4202` | Product inventory |
| `customers` | Remote | `4203` | Customer profiles |
| `billing` | Remote | `4204` | Invoices and payments |
| `shared-ui` | Library | n/a | Reusable UI components shared by all apps |

The shell reads remote URLs from `projects/shell/public/federation.manifest.json` and loads remotes from `projects/shell/src/app/app.routes.ts`.

## Production-Oriented Features

- Responsive shell layout with mobile horizontal navigation and desktop sidebar.
- Shell dashboard for remote registry and operational overview.
- Remote loading fallback so the shell stays usable if a remote is offline.
- Shared UI library used across shell and remotes for buttons, badges, metrics, panels, tables, toolbars, and live indicators.
- Each remote owns its own page, metrics, operations toolbar, table, realtime activity section, and readiness checks.
- Tailwind design tokens are shared across all apps through the root Tailwind config.

## UI Foundation

The project uses Tailwind CSS 3 with Angular SCSS entry styles. Tailwind is configured in:

- `tailwind.config.js`
- `postcss.config.js`
- `projects/*/src/styles.scss`

Tailwind 3 is intentionally used because the current local runtime is Node 18, while the latest Tailwind 4 oxide package expects Node 20 or newer.

This workspace also has a small `postinstall` compatibility patch for Native Federation packages so Angular CLI can resolve the package builder with an explicit `.js` extension and avoid an ESM-only Chalk logger issue in this local Node 18 environment.

Reusable UI components live in `projects/shared-ui/src/lib`:

| Component | Purpose |
| --- | --- |
| Component | Purpose |
| --- | --- |
| `ui-page-header` | Consistent module headers with optional status badges |
| `ui-metric-card` | Dashboard KPI cards |
| `ui-panel` | Standard page/panel container |
| `ui-data-table` | Reusable table for module-owned rows |
| `ui-status-badge` | Shared status/health badge |
| `ui-live-indicator` | Standard realtime connection state indicator |
| `ui-button` | Shared action button |
| `ui-toolbar` | Shared command/action toolbar |

## Run Locally

Start each app in a separate terminal:

```bash
npm start
npm run start:orders
npm run start:catalog
npm run start:customers
npm run start:billing
```

Open the shell at `http://localhost:4200/`.

## Build

```bash
npm run build
```

The build compiles `shared-ui`, all four remotes, and then the shell.

## Full Setup Guide

See [Angular Micro-Frontend Setup Guide](docs/micro-frontend-setup-guide.md) for requirements, architecture, setup steps, run commands, build commands, and troubleshooting.

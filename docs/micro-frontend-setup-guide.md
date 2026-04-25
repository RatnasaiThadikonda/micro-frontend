# Angular Micro-Frontend Setup Guide

This project is an Angular micro-frontend workspace using Native Federation.

It has one host application, called the shell, and four remote Angular applications. Each remote can run independently, but the shell loads them at runtime through federation.

## Architecture

| Project | Type | Local URL | Purpose |
| --- | --- | --- | --- |
| `shell` | Host | `http://localhost:4200` | Main layout, navigation, dashboard, remote loading |
| `orders` | Remote | `http://localhost:4201` | Orders domain |
| `catalog` | Remote | `http://localhost:4202` | Catalog domain |
| `customers` | Remote | `http://localhost:4203` | Customers domain |
| `billing` | Remote | `http://localhost:4204` | Billing domain |
| `shared-ui` | Angular library | n/a | Reusable UI components used by all apps |

The shell loads remote apps from:

```text
projects/shell/public/federation.manifest.json
```

Shell routes are configured in:

```text
projects/shell/src/app/app.routes.ts
```

## Requirements

Install these before running the project:

- Node.js 18.x or newer
- npm
- Angular CLI, optional globally

Check versions:

```bash
node --version
npm --version
npx ng version
```

This workspace currently uses:

- Angular 19
- Native Federation
- Tailwind CSS 3
- npm package manager

Tailwind CSS 3 is used because this machine is on Node 18. Tailwind 4 expects Node 20+ in many setups.

## Install Dependencies

From the project root:

```bash
npm install
```

The project has a `postinstall` script:

```bash
node tools/patch-native-federation-builder.cjs
```

This applies a small compatibility patch for Native Federation in this local Node/Angular CLI environment.

## Run The Project Locally

Open five terminals at the project root:

```text
d:\learning 2025\frontend-ms
```

Run one command in each terminal:

```bash
npm run start:shell
```

```bash
npm run start:orders
```

```bash
npm run start:catalog
```

```bash
npm run start:customers
```

```bash
npm run start:billing
```

Then open:

```text
http://localhost:4200
```

The shell needs the remote apps running if you want the full composed experience.

## Run Individual Apps

Each remote can also be opened directly:

```text
http://localhost:4201
http://localhost:4202
http://localhost:4203
http://localhost:4204
```

This is useful when developing one domain independently.

## Build

Build everything:

```bash
npm run build
```

Build one project:

```bash
npm run build:shared
npm run build:shell
npm run build:orders
npm run build:catalog
npm run build:customers
npm run build:billing
```

## Shared UI Library

Reusable components live here:

```text
projects/shared-ui/src/lib
```

The library exports components from:

```text
projects/shared-ui/src/public-api.ts
```

Current shared components include:

- `ui-button`
- `ui-toolbar`
- `ui-panel`
- `ui-page-header`
- `ui-metric-card`
- `ui-data-table`
- `ui-status-badge`
- `ui-live-indicator`

All apps should use these shared components instead of creating duplicate UI patterns.

## Important TypeScript Path Mapping

The workspace maps `shared-ui` in `tsconfig.json`:

```json
"paths": {
  "shared-ui": [
    "./projects/shared-ui/src/public-api.ts",
    "./dist/shared-ui"
  ]
}
```

The source path is important during development. Without it, a remote may show:

```text
TS2307: Cannot find module 'shared-ui'
```

That happens when the remote starts before `shared-ui` has been built.

## Adding A New Remote App

Example for a future `reports` remote:

```bash
npx ng generate application reports --routing --style=scss --skip-tests
npx ng generate @angular-architects/native-federation:init --project reports --port 4205 --type remote
```

Then add it to the shell manifest:

```json
{
  "reports": "http://localhost:4205/remoteEntry.json"
}
```

And add a shell route using `loadRemoteModule`.

## Production Notes

For production, each app can be built and deployed independently:

- Deploy `shell` to the main frontend URL.
- Deploy each remote to its own URL or CDN path.
- Update `federation.manifest.json` to point to production remote URLs.
- Keep shared contracts stable between shell and remotes.
- Add real authentication, API services, environment configs, logging, monitoring, and error tracking.

The shell already has a remote fallback page, so if one remote is unavailable, the shell can still render a useful error screen.

## Troubleshooting

If a remote does not load inside the shell:

1. Check the remote server is running.
2. Open the remote entry URL directly, for example:

```text
http://localhost:4201/remoteEntry.json
```

3. Check `projects/shell/public/federation.manifest.json`.
4. Restart the shell after changing federation config.

If Tailwind classes do not apply, check:

```text
tailwind.config.js
```

It must include:

```js
content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}']
```


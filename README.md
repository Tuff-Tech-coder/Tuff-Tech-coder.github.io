# Tuff Tech — service website

A focused, business-facing static service website for agency automation subcontracting and indie game-development contracting. It replaces the previous GitProfile/React implementation with Astro and TypeScript.

## Architecture

- **Astro + TypeScript:** every route is statically generated at build time.
- **Shared layout and components:** the header, footer, contact callout, and case-study cards are reusable Astro components.
- **Typed content data:** case-study content lives in `src/data/site.ts` and drives both the selected-work cards and static detail routes.
- **Plain CSS:** responsive layout, typography, focus states, and color tokens are defined in `src/styles/global.css`. There is no client-side framework or animation library.
- **GitHub Pages:** `astro.config.mjs` uses the user-site URL and root base path. The deployment workflow uploads `dist/` to GitHub Pages.

## Pages

- `/` — positioning, two service paths, and selected work
- `/automation/` — white-label agency automation and the Technical Overflow Trial
- `/game-development/` — gameplay prototype and systems contracting
- `/work/` — selected case studies
- `/work/[slug]/` — statically generated case-study details
- `/process/` — milestone and handoff process
- `/contact/` — direct contact options and inquiry guidance

## Local development

Requirements: Node.js 24 or newer with Corepack enabled (or pnpm installed).

```bash
corepack enable
pnpm install
pnpm dev
```

Astro prints the local preview URL, normally `http://localhost:4321`.

## Validation and production build

```bash
pnpm check
pnpm build
pnpm preview
```

The production output is written to `dist/`. The site uses static generation only; it has no backend, database, authentication, or required paid service.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys pushes to `main`. It can also be run manually from the Actions tab.

Before the first deployment, open **Repository settings → Pages → Build and deployment** and select **GitHub Actions** as the source. Pull requests run the build job but do not deploy.

Because this repository is `Tuff-Tech-coder.github.io`, Astro is configured for `https://tuff-tech-coder.github.io/`. If the repository name changes, update `site` and add the appropriate `base` value in `astro.config.mjs`.

## Content placeholders to replace

Every content placeholder is visibly marked with `PLACEHOLDER` on the relevant page. Before treating the site as final marketing content, supply:

- preferred Technical Overflow Trial budget range and typical turnaround;
- primary game engine and supported version(s);
- game-development languages and relevant tools;
- current game-contracting availability;
- gameplay reel URL or media;
- playable build URLs, controls, target platforms, and accurate project status;
- exact contribution notes and technical breakdowns for each game project;
- timezone, normal inquiry response window, preferred meeting method, and contracting region.

The three initial case studies are explicitly presented as independently developed public projects. Update that status only when there is permission and evidence to describe a real client engagement.

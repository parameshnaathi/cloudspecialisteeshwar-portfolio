# Paramesh Nathi — Engineering Portfolio

A responsive, static portfolio for SRE, DevOps, Platform Engineering, cloud, Kubernetes, observability and AI-driven operations. Built with React, TypeScript, Vite, Tailwind CSS and Lucide icons; no server, database, API keys or paid service is required to host the site.

## Architecture

- `src/data/portfolio.ts` contains the editable profile, skills, projects, experience and credentials.
- `src/App.tsx` provides the single-page sections, navigation, project filters and resume/contact actions.
- `src/styles.css` contains the responsive theme and layout.
- `public/` contains static SEO files, favicon and the optional resume location.
- `.github/workflows/deploy.yml` runs lint, type-check and build, then deploys the `main` branch to GitHub Pages.

## Technology

React · TypeScript · Vite · Tailwind CSS · Lucide React · GitHub Actions

## Local setup

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

## Build and validation

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

## GitHub Pages and the custom domain

The portfolio is configured for `https://cloudspecialisteeshwar.shop/`. It uses a root Vite base path, includes `public/CNAME`, and updates its canonical URL, sitemap and robots metadata for the domain.

1. Publish the contents of this folder at the root of a separate portfolio repository. The Pages workflow must be at `.github/workflows/deploy.yml` in that repository.
2. In the portfolio repository, open **Settings → Pages** and set the source to **GitHub Actions**. The first successful workflow deployment publishes the site.
3. In **Settings → Pages → Custom domain**, set `cloudspecialisteeshwar.shop`. GitHub Actions also publishes the `CNAME` file from `public/`.
4. In GoDaddy DNS management, create these records:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `parameshnaathi.github.io` |

   Optional IPv6 records for `@` (AAAA): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and `2606:50c0:8003::153`. GitHub's [custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) has current DNS and verification guidance.

5. Remove conflicting existing `@` or `www` web records only after reviewing them. Preserve MX, TXT and other records used for email or domain verification.
6. Wait for DNS propagation and GitHub's domain check. Then enable **Enforce HTTPS** in Pages settings once GitHub makes it available.
7. Push to `main`; pull requests run lint, type-check and build without deploying. The workflow deploys only `main`.

The DNS records above point the domain to GitHub Pages; they do not themselves deploy the site or configure GoDaddy for you. DNS propagation and certificate issuance can take time.

No deployment credentials are stored in this repository; the workflow uses GitHub's Pages artifact and deployment permissions.

## Vercel

Import the repository, select the Vite preset, set the build command to `npm run build`, and the output directory to `dist`. Leave `VITE_BASE_PATH` unset for a root-domain deployment.

## Netlify

Connect the repository, set the build command to `npm run build`, and publish directory to `dist`. Leave `VITE_BASE_PATH` unset for a root-domain deployment.

## Cloudflare Pages

Connect the repository, set the build command to `npm run build`, and build output directory to `dist`. Leave `VITE_BASE_PATH` unset for a root-domain deployment.

## Updating portfolio content

Edit `src/data/portfolio.ts`:

- Add verified contact information to `profile.email` and `profile.linkedin`.
- Update `metrics` only when the figures and their context are approved.
- Add project repository URLs to `projects`; cards without a supplied URL intentionally do not show a fabricated link.
- Replace the experience placeholder with verified employers, role dates and outcome-focused achievements.
- Add official certification, training and award details to `credentials`.
- Replace `public/resume/Paramesh-Nathi-Resume.pdf` with the approved version when it changes, and keep `profile.resumeAvailable` enabled.

The supplied resume PDF is included in `public/resume/` for the preview and download actions.

## Screenshots

No screenshots were supplied. Capture desktop and mobile screenshots after adding final profile details and place them in `docs/screenshots/` if you want to include them in the project documentation.

## Deployment checklist

- [x] Responsive single-page navigation with a mobile menu
- [x] Dark theme by default and optional light theme
- [x] Skills, cloud platforms, Kubernetes, IaC, observability, automation and AI sections
- [x] Filterable project cards and experience/credential placeholders
- [x] Resume preview and download actions
- [x] SEO metadata, favicon, `robots.txt` and sitemap
- [x] GitHub Actions validation and Pages deployment workflow
- [ ] Add verified career timeline, contact details and credentials
- [ ] Configure the repository's Pages source and verify the published URL

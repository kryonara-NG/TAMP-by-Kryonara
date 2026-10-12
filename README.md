# TAMP by Kryonara — React/Vercel migration shell

This repository combines the supplied TAMP student-site prototype and admin prototype under one origin, with a React + Vite entry point and a Vercel-ready build. The existing interface files, stylesheets, and browser-side scripts are preserved as supplied to avoid changing the design system or prototype behavior.

## Routes

- `/` — React entry point; forwards to the student landing page.
- `/site/` or `/site/index.html` — student/marketing site and learner dashboard.
- `/admin/` or `/admin/index.html` — admin panel.

Both applications use the same browser origin, so their existing `localStorage` bridge can see shared demo data when opened in the same browser/profile. They remain separate pages, not separate domains.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the URL printed by Vite. The root forwards to `/site/index.html`; open `/admin/index.html` to access the admin prototype.

## Deploy on Vercel

1. Push the contents of this folder to the `kryonara-NG/TAMP-by-Kryonara` repository.
2. In Vercel, import that repository.
3. Use the project root as the Root Directory.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy. Vercel serves the static student/admin prototype files alongside the React build.

## Important prototype limitations

This migration intentionally preserves the submitted prototype settings and behavior. It is **deployable as a prototype, not production-secure yet**:

- Student accounts, progress, admin records, and the student/admin bridge use browser storage. Data is per browser and is not a shared server database.
- The admin configuration still has demo mode enabled and contains a demo password in the supplied source. Do not use it to protect real student or payment data.
- The API routes described in the handoff documents are not implemented by these static files. Production auth, authorization, database persistence, payment verification/webhooks, email delivery, and AI provider secrets require a backend.
- Never put private API keys in client-side JavaScript or Vite `VITE_*` variables.

## Preserved source

- `public/site/` — original `tamp-site.zip` contents.
- `public/admin/` — original `tamp-admin.zip` contents.
- `src/` — minimal React gateway, leaving the original visual design untouched.

This is a compatibility-first migration. Individual prototype screens can be moved into native React components later, one at a time, after the desired design is locked.

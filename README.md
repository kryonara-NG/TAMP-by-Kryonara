# TAMP by Kryonara — React/Vercel migration shell

This repository contains the combined TAMP student-site and admin prototype with a React + Vite entry point and Vercel-ready build. The original HTML, CSS, and browser-side scripts are preserved under `public/site/` and `public/admin/`.

## Routes
- `/` — React gateway that forwards to the student site.
- `/site/` — student and marketing site.
- `/admin/` — admin prototype.

## Run locally
Requires Node.js 20 or newer.

```bash
npm install
npm run dev
npm run build
```

## Deploy on Vercel
Set the project root to the repository root, build command to `npm run build`, and output directory to `dist`.

## Prototype warning
This is a demo, not production-secure. Student/admin data is stored in browser storage, demo mode is enabled, and `public/admin/config.js` contains a demo-only password (`admin123`). Do not use this prototype for real student, account, or payment data until server-side authentication, authorization, persistence, and payment verification are implemented.

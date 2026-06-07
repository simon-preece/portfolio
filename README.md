# Simon Preece Portfolio

This repository contains a React + TypeScript portfolio website built with Vite.

The site is designed as a personal portfolio for Simon Preece, with:

- professional hero, about, featured projects, experience, and contact sections
- responsive design and modern layout
- light/dark theme switching
- GitHub Pages deployment via `gh-pages`

## Getting started

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

This project uses the `gh-pages` package to deploy the generated `dist` folder to the `gh-pages` branch.

Deploy with:

```bash
npm run deploy
```

Make sure the repository is configured to serve GitHub Pages from the `gh-pages` branch.

## Project structure

- `src/` — React application source code
- `public/` — static assets copied into the production build
- `dist/` — generated site output after `npm run build`
- `vite.config.ts` — Vite configuration including base path for GitHub Pages

## Notes

A `README.md` file is also included in `public/` so the gh-pages deployment branch contains a project reference file as well.

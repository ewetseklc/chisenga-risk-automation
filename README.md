# Periwynk

Website for **Periwynk LLC** (formerly Chisenga Risk & Automation), run by Ewetse Chisenga in St. Louis, Missouri. Ewetse helps owners of small service businesses spend less time on admin, working one to one and setting up the fixes with them.

## How the site works

- Plain static HTML, one `styles.css` and one small script (`assets/site.js`). No build step and no framework.
- Hosted on **GitHub Pages** from the repo root. `CNAME` currently points at `cra.software`.
- GitHub Pages has no server redirects, so `how-it-works.html` is a small stub that sends visitors to the homepage.

## Layout

- `index.html` homepage; `privacy.html`, `terms.html` legal pages
- `blog/index.html` blog list, `blog/<slug>/index.html` posts, `blog/rss.xml` feed
- `blog/_template.html` post template (GitHub Pages skips files starting with `_`, so it is never published)
- `assets/brand/` Periwynk flower mark and wordmark; `assets/og/` social sharing image
- Favicons and `site.webmanifest` in the root; `robots.txt` and `sitemap.xml` in the root
- `Fonts/` Basique Pro; labels use IBM Plex Mono

## Adding a blog post

1. Copy `blog/_template.html` to `blog/<your-slug>/index.html` and fill it in.
2. Add it to the top of `blog/index.html`, `blog/rss.xml` and `sitemap.xml`.
3. When it's ready, remove the DRAFT banner and set robots to `index, follow`.

## Deploy

Push to `main`; GitHub Pages serves the root folder. See `CHANGES.md` for the Periwynk changes and open TODOs.

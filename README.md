# Baleya Welding — Website

Static portfolio website for Baleya Welding, deployed free on **GitHub Pages**.

Live site: https://baleyawelding.com

## What's here

```
baleyawelding/
├── index.html          Home (hero, services, featured projects, contact)
├── portfolio.html      Full project gallery with filters + lightbox
├── services.html       Service descriptions
├── about.html          Company story + notable projects
├── css/style.css       All styles (CSS variables, mobile-first)
├── js/main.js          Navigation, filter, lightbox, scroll animations
├── images/             Real project photos
├── CNAME               Custom domain config (baleyawelding.com)
├── sitemap.xml         SEO sitemap
├── robots.txt          Crawler rules
└── README.md           This file
```

## How to update the site

1. Edit the HTML / CSS / images locally.
2. Preview by opening `index.html` in a browser (or run `python -m http.server 8000`).
3. Commit + push to GitHub → live in 1–2 minutes.

## Pending manual steps

- [ ] **Formspree form ID** — replace `YOUR_FORM_ID` in `index.html`.
  Create a free account at https://formspree.io, make a form, copy the ID.
- [ ] **Social links** — update the href in the social section of `index.html`
  with your actual Facebook / Instagram / TikTok URLs.

## Deploy

```bash
git add .
git commit -m "Your message"
git push
```

GitHub Pages rebuilds automatically on every push to `main`.

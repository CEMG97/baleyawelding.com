# Baleya Welding Website — Project Context for Claude

> **Load this file automatically on every session.** It is the source of truth
> about this project's state, history, and conventions.

## Live status

- **Domain**: https://baleyawelding.com (HTTPS active, custom domain via GitHub Pages)
- **Repo**: https://github.com/CEMG97/baleyawelding.com (public, `main` branch)
- **Hosting**: GitHub Pages — FREE
- **Form backend**: Formspree (form ID `xyklazza`, free tier 50 submissions/month)
- **Form recipient email**: `cemgproducts@gmail.com`

## Owner

Carlos Miranda — owner of Baleya Welding (custom welding & metal fabrication).
- Prefers Spanish in conversation
- Not a developer — explain things accessibly, no jargon
- CEO of company (welder): Esdreny Baleya
- Business email shown on site: baleyawelding@yahoo.com
- Phone: (786) 327-0445 (also WhatsApp)
- Address: 1743 Huntington Ln #109, Rockledge, FL 32955

## Repo structure

```
baleyawelding/
├── index.html          Home (hero, services, featured projects, contact form)
├── portfolio.html      Full gallery with category filters + lightbox
├── services.html       Service descriptions (3D Modeling featured at top)
├── about.html          Company story + CEO Esdreny Baleya + notable projects
├── css/style.css       All styles (mobile-first, CSS variables)
├── js/main.js          Nav toggle, filter, lightbox, scroll animations
├── images/             63 real project photos organized by category
├── CNAME               Contains "baleyawelding.com" (custom domain)
├── sitemap.xml
├── robots.txt
├── .gitignore
└── README.md
```

## Photo naming convention

- `hero-1.jpg` — main hero image (currently ST5 from Venue Townhomes — modern stair with horizontal black railings)
- `logo.png` (black, used as favicon) and `logo-white.png` (white, used in header/footer)
- `featured-{project}-{n}.jpg` — featured commercial projects on home
- `railings-{n}.jpg`, `stairs-{n}.jpg`, `gates-{n}.jpg`, `canopies-{n}.jpg`, `commercial-{n}.jpg`, `custom-{n}.jpg` — portfolio gallery
- `about-midtown.jpg` — about page hero (MIDTOWN pergolas)

## Design system

- Palette: black `#1a1a1a`, charcoal `#2a2a2a`, **molten orange `#FF6B00`** (primary accent), silver `#C0C0C0`
- Fonts: Oswald (headings), Open Sans (body) — Google Fonts
- Mobile-first responsive, breakpoints at 768px and 1024px
- Cache buster `?v=3` on CSS/JS — bump to `?v=4` if making major CSS/JS changes that need to invalidate mobile cache

## Decisions and conventions (do NOT revisit unless user asks)

- **No fake testimonials.** Customer wanted real ones; he doesn't have any → section removed in favor of Featured Projects with real commercial work (Camping World Stadium, MIDTOWN, WaterSide, Venue Townhomes).
- **Don't lean on "based in Rockledge"** in marketing copy. Customer prefers "Serving All of Florida" framing. Rockledge address only appears in physical contact info and schema.org JSON-LD (required for local SEO).
- **3D Design & Modeling is a key differentiator** — featured prominently on services.html with an "INCLUDED" badge.
- **Logo**: white version in header/footer; on hover it tints orange.
- **Hero**: simplified to one short headline + one-line subtitle. No long paragraphs, no trust badges.
- **Form action** points to `https://formspree.io/f/xyklazza`. Do NOT change unless user asks.

## Active social links

- Facebook: facebook.com/baleya.welding
- Instagram: instagram.com/baleya.welding_
- TikTok: tiktok.com/@baleya.welding

## How to deploy a change

```bash
cd "c:/Users/miran/OneDrive/Escritorio/Claude Test/baleyawelding"
git add .
git commit -m "describe what changed"
git push
```

GitHub Pages rebuilds in 1-2 minutes. No build step (pure static).

## Future considerations (not urgent)

- Consider transferring domain from Hostinger ($19.99/yr) → Cloudflare Registrar (~$9.77/yr at cost) when renewal approaches. Transfer takes 5-7 days.
- Hostinger web hosting plan can be canceled (only domain registration is needed there now).

## DNS setup (already configured at Hostinger, do not change unless requested)

Apex (baleyawelding.com):
- A `@` → 185.199.108.153
- A `@` → 185.199.109.153
- A `@` → 185.199.110.153
- A `@` → 185.199.111.153

WWW:
- CNAME `www` → CEMG97.github.io

Email records (intact, untouched): MX → mx1/mx2.hostinger.com, SPF, DKIM (3 records), DMARC, autoconfig, autodiscover.

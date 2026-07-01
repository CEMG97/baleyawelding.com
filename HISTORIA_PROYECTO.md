# 📖 Historia del Proyecto — Baleya Welding Website

> **Manual maestro del proyecto.** Léelo primero cuando quieras retomar el trabajo.
> Contiene TODO lo hecho, todas las decisiones, servicios activos y cómo hacer cambios.

---

## 🎯 Resumen ejecutivo

**Antes:** Sitio en Hostinger (Zyro) pagando ~$15/mes, con fotos genéricas de stock y testimonios falsos.

**Ahora:** Sitio profesional propio en **https://baleyawelding.com** hospedado gratis en GitHub Pages, con fotos reales del portafolio del negocio, formulario de contacto funcional, HTTPS activo y estructura totalmente controlada por Carlos.

**Ahorro anual:** ~$160/año (solo se paga el dominio ~$20/año).

---

## 🌐 Estado actual del sitio (URLs y servicios)

| Servicio | URL / Detalle | Estado |
|---|---|---|
| Sitio en vivo | https://baleyawelding.com | ✅ Activo con HTTPS |
| Sitio en vivo (www) | https://www.baleyawelding.com | ✅ Redirige a apex |
| Repo GitHub | https://github.com/CEMG97/baleyawelding.com | ✅ Público, branch `main` |
| Hosting | GitHub Pages | ✅ Gratis, sin límites de tráfico razonables |
| Dominio | Hostinger (registrar) | ✅ Pagado ~$20/año |
| Formulario de contacto | Formspree (form ID: `xyklazza`) | ✅ Envía a cemgproducts@gmail.com |
| Emails del negocio | baleyawelding@yahoo.com (mostrado en sitio) | ✅ Sin cambios |

---

## 👤 Datos del negocio (canonical)

- **Nombre:** Baleya Welding
- **CEO / Master Welder:** Esdreny Baleya
- **Dueño / operador:** Carlos Miranda (mirandacarlos0905@gmail.com)
- **Email formulario:** cemgproducts@gmail.com
- **Email negocio:** baleyawelding@yahoo.com
- **Teléfono / WhatsApp:** (786) 327-0445
- **Dirección física:** 175 N Cleary Rd Unit-A5, West Palm Beach, FL 33413
- **Horario:** Mon–Fri 8am–5pm
- **Área servida:** Toda Florida (no enfatizar la ciudad de origen en marketing)

### Redes sociales activas en el sitio

- Facebook: facebook.com/baleya.welding
- Instagram: instagram.com/baleya.welding_
- TikTok: tiktok.com/@baleya.welding

---

## 📁 Estructura del proyecto

Todo vive en: `c:\Users\miran\OneDrive\Escritorio\Claude Test\baleyawelding\`

```
baleyawelding/
├── index.html          → Home (hero, servicios, proyectos destacados, contacto)
├── portfolio.html      → Galería completa con filtros y lightbox
├── services.html       → Servicios (con 3D Modeling destacado)
├── about.html          → Historia + CEO Esdreny Baleya + proyectos notables
├── css/style.css       → Estilos (mobile-first, variables CSS)
├── js/main.js          → Menú, filtros, lightbox, animaciones
├── images/             → 63+ fotos reales del negocio
├── CNAME               → Contiene "baleyawelding.com"
├── sitemap.xml         → SEO
├── robots.txt          → SEO
├── .gitignore
├── README.md
├── CLAUDE.md           → Contexto técnico para Claude
└── HISTORIA_PROYECTO.md → ESTE archivo
```

### Convención de nombres de fotos

- `hero-1.jpg` → foto principal del home (actualmente ST5.jpg de Venue Townhomes)
- `logo.png` → logo negro (favicon del navegador)
- `logo-white.png` → logo blanco (header y footer)
- `featured-{proyecto}-{n}.jpg` → proyectos destacados en home (camping, midtown, waterside, venue, horsestall)
- `railings-{n}.jpg` → galería de barandillas
- `stairs-{n}.jpg` → galería de escaleras
- `gates-{n}.jpg` → galería de portones
- `canopies-{n}.jpg` → galería de canopies/pérgolas
- `commercial-{n}.jpg` → proyectos comerciales
- `custom-{n}.jpg` → proyectos custom (horse stalls, etc.)
- `about-midtown.jpg` → foto del about (pérgolas de MIDTOWN)

---

## 🎨 Sistema de diseño (paleta y estilo)

**Colores** (definidos como variables CSS en `css/style.css`):

| Color | Hex | Uso |
|---|---|---|
| Negro | `#1a1a1a` | Fondo principal |
| Carbón | `#2a2a2a` | Cards, secciones alternas |
| **Naranja molten** | **`#FF6B00`** | Acento primario (botones, hover, badges) |
| Naranja claro | `#ff8533` | Hover de acentos |
| Plata | `#C0C0C0` | Texto secundario |
| Blanco | `#F5F5F5` | Texto principal |
| Muted | `#9a9a9a` | Captions |

**Tipografías** (Google Fonts, gratis):
- **Oswald** — títulos (condensada, industrial)
- **Open Sans** — cuerpo (legible)

**Breakpoints responsive:**
- Móvil (default): < 768px
- Tablet/desktop: ≥ 768px
- Desktop grande: ≥ 1024px

---

## 📅 Cronología completa del proyecto

### Fase 1 — Análisis y arranque
- Revisamos el sitio en Hostinger — usaba fotos de stock (Unsplash) y testimonios falsos.
- Encontré tu carpeta `Portafolio/` con 130+ fotos reales de proyectos y un logo profesional.
- Decidimos: NO usar testimonios falsos, priorizar proyectos comerciales reales (Camping World, MIDTOWN, WaterSide, Venue Townhomes).

### Fase 2 — Construcción del sitio
- Estructura de 4 páginas: Home, Portfolio, Services, About.
- Copiamos y organizamos 63 fotos reales en `images/` con nombres consistentes.
- Home rediseñado sin testimonios falsos → reemplazado por sección "Featured Projects" con proyectos comerciales reales.
- Portfolio con filtros por categoría + lightbox.
- Formulario de contacto con placeholder para Formspree.
- Botón WhatsApp flotante, teléfono directo.
- Schema.org LocalBusiness JSON-LD para SEO local.

### Fase 3 — Iteraciones de diseño
- Cambios de logo: usé el logo blanco transparente en header/footer (más grande, con hover naranja); logo negro como favicon.
- Se eliminó el texto "Baleya Welding" al lado del logo (redundante).
- Cambié la foto principal (hero) varias veces hasta llegar a **ST5.jpg** de Venue Townhomes (escalera moderna con railings horizontales negros).
- Simplifiqué el texto del hero: `"Mastering Metalwork Across Florida"` + una línea de subtítulo.
- Reescribí la página About con el texto que me diste, sin mencionar la ciudad de origen (foco: toda Florida).
- Añadí "3D Design & Modeling — INCLUDED" como servicio destacado con badge naranja.
- Foto del About: pérgolas del proyecto MIDTOWN.

### Fase 4 — Optimización móvil
- Detecté bug: hamburguesa del menú invisible en iOS Safari → arreglado con `-webkit-appearance: none`.
- Detecté bug: portfolio invisible en móvil (imágenes con lazy loading no triggeaban el observer) → arreglado con CSS defensivo `!important` en `.gallery-item`.
- Añadí cache-buster `?v=3` en CSS y JS para forzar recarga en móviles con caché viejo.

### Fase 5 — Deploy
1. Configuré git localmente (nombre, email, branch main).
2. Creamos repo en GitHub: `CEMG97/baleyawelding.com` (público).
3. `git push` inicial subió todo el proyecto.
4. Activaste GitHub Pages en Settings → Pages → Source: main branch.
5. GitHub Pages detectó el archivo CNAME y configuró el custom domain automáticamente.

### Fase 6 — DNS
- Configuraste en Hostinger los DNS:
  - Borraste: `ALIAS @ → connect.hostinger.com` y `CNAME www → connect.hostinger.com`
  - Añadiste: 4 A records `@` a las IPs de GitHub Pages + CNAME `www` → CEMG97.github.io
- DNS propagó en menos de 2 minutos.
- HTTPS se activó automáticamente (Enforce HTTPS marcado).

### Fase 7 — Formulario de contacto
- Creaste cuenta en Formspree con `cemgproducts@gmail.com`.
- Obtuviste form ID: `xyklazza`.
- Reemplacé `YOUR_FORM_ID` en `index.html` por `xyklazza`.
- Verificado con envío de prueba: los correos llegan correctamente.

### 🚨 Incidente (resuelto) — Hostinger auto-restauró los DNS
- Días después del deploy, el sitio volvió a mostrar Hostinger.
- Causa: Hostinger tiene un sistema automático que sobrescribe DNS a su propia CDN cuando detecta un sitio activo en su panel.
- Solución permanente aplicada: eliminaste el sitio Zyro/Builder viejo dentro del panel de Hostinger.
- Re-configuraste los DNS (4 A records + CNAME www → CEMG97.github.io).
- Los TXT records de SPF y DMARC (email) se perdieron en el proceso — no importa porque no se usa email @baleyawelding.com.

---

## 🔧 Cómo hacer cambios en el futuro

### Workflow básico

1. Abrir Claude Code en la carpeta `c:\Users\miran\OneDrive\Escritorio\Claude Test\baleyawelding`
2. Decir "lee `HISTORIA_PROYECTO.md`" y pedir el cambio
3. Claude edita los archivos
4. Publicar con git:

```bash
cd "c:/Users/miran/OneDrive/Escritorio/Claude Test/baleyawelding"
git add .
git commit -m "descripción del cambio"
git push
```

5. GitHub Pages redeploya en 1-2 minutos automáticamente.

### Cambios comunes

**Agregar una foto nueva a Portfolio:**
1. Poner la foto en `images/` con nombre siguiendo la convención (ej: `railings-19.jpg`).
2. En `portfolio.html`, encontrar la sección de la categoría y añadir un bloque `<figure class="gallery-item" data-category="railings">...`
3. Commit y push.

**Cambiar el texto del hero:**
1. Editar `index.html` → sección `<div class="hero-content container">`.
2. Cambiar `<h1>` y `<p class="hero-sub">`.
3. Mantener el texto corto y potente.

**Cambiar la foto principal (hero):**
1. Poner la nueva foto en `images/hero-1.jpg` (mismo nombre).
2. Si necesitas ajustar cómo se ve en móvil/desktop, editar `css/style.css` sección `.hero-bg { object-position: ... }`.

**Actualizar información de contacto (teléfono, email, dirección):**
1. Buscar en `index.html` la sección `<div class="contact-info">`.
2. Actualizar todos los `<a href="tel:...">` y `mailto:` si cambia el número/email.
3. Recordar actualizar también:
   - Schema.org JSON-LD arriba del `<head>` de index.html
   - Botón WhatsApp flotante (busca `wa.me/17863270445`)
   - `README.md` y este `HISTORIA_PROYECTO.md`

**Cambiar la paleta de colores:**
1. En `css/style.css`, top de la clase `:root { --orange: ...; --charcoal: ...; }`.
2. Todo el sitio usa las variables → cambia solo las variables, no cientos de líneas.

### Cuando hacer un "cache-buster bump"

Si haces cambios grandes al CSS o JS y quieres asegurarte que los visitantes con caché viejo vean la actualización:
1. En los 4 HTMLs, buscar `?v=3` y cambiar a `?v=4` (o el siguiente número).
2. Commit y push.

---

## 🛠️ Comandos de emergencia (troubleshooting)

### Verificar que el sitio responde
```bash
curl -sI https://baleyawelding.com/
```
Debe devolver `HTTP/1.1 200 OK`.

### Verificar DNS
```bash
nslookup baleyawelding.com 8.8.8.8
```
Debe mostrar las 4 IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.

**Si muestra otras IPs (ej: `212.1.x.x`, `195.35.x.x`, `*.hstgr.net`):** Hostinger volvió a auto-restaurar los DNS. Ver sección "Incidente" arriba y aplicar la solución.

### Verificar servidor
Los servidores devuelven `Server: GitHub.com` si el sitio se sirve desde GitHub Pages.
Si dice `Server: hostinger`, algo se rompió y hay que revisar DNS.

---

## 💼 Servicios externos y accesos

⚠️ **Nunca guardo contraseñas.** Estas son solo referencias a dónde están las cuentas.

| Servicio | Cuenta / User | Login URL |
|---|---|---|
| GitHub | CEMG97 | https://github.com/login |
| Formspree | cemgproducts@gmail.com | https://formspree.io/login |
| Hostinger | (tu usuario) | https://hpanel.hostinger.com/login |
| Gmail (recibe forms) | cemgproducts@gmail.com | (Google) |
| Yahoo (email del negocio) | baleyawelding@yahoo.com | (Yahoo) |

---

## 📊 Configuración DNS actual en Hostinger

Total: **12 records**

| # | Type | Name | Content | Propósito |
|---|---|---|---|---|
| 1 | CNAME | hostingermail-c._domainkey | hostingermail-c.dkim.mail.hostinger.com | Email DKIM (mantener) |
| 2 | CNAME | hostingermail-b._domainkey | hostingermail-b.dkim.mail.hostinger.com | Email DKIM (mantener) |
| 3 | CNAME | hostingermail-a._domainkey | hostingermail-a.dkim.mail.hostinger.com | Email DKIM (mantener) |
| 4 | CNAME | www | CEMG97.github.io | ⭐ Sitio web |
| 5 | CNAME | autodiscover | autodiscover.mail.hostinger.com | Email auto-config |
| 6 | CNAME | autoconfig | autoconfig.mail.hostinger.com | Email auto-config |
| 7 | MX | @ (priority 10) | mx2.hostinger.com | Email entrante |
| 8 | MX | @ (priority 5) | mx1.hostinger.com | Email entrante |
| 9 | A | @ | 185.199.108.153 | ⭐ Sitio web (GitHub) |
| 10 | A | @ | 185.199.109.153 | ⭐ Sitio web (GitHub) |
| 11 | A | @ | 185.199.110.153 | ⭐ Sitio web (GitHub) |
| 12 | A | @ | 185.199.111.153 | ⭐ Sitio web (GitHub) |

---

## 🎯 Decisiones importantes (no revisar sin razón)

1. **No hay testimonios en el sitio.** Carlos no tiene testimonios reales y no queremos inventar. En su lugar: sección "Featured Projects" con obras reales.

2. **No enfatizar la ciudad de origen** en marketing. Preferencia: "Serving All of Florida". La dirección física de West Palm Beach solo aparece en la sección de contacto (necesaria para SEO local en Google).

3. **3D Modeling es diferenciador clave.** Destacado con badge naranja "INCLUDED" en services.html.

4. **Logo blanco en header/footer** (con hover naranja). Logo negro solo como favicon.

5. **Hero simplificado.** Un título potente + una línea de subtítulo. Sin trust badges, sin kicker, sin párrafos largos.

6. **Precio y URLs de Formspree fijos.** `https://formspree.io/f/xyklazza` — no cambiar sin razón.

7. **Diseño mobile-first.** Toda decisión de UI parte de móvil primero.

---

## 🔮 Ideas / Pendientes futuros (opcional)

- [ ] Considerar transferir dominio de Hostinger ($20/año) a **Cloudflare Registrar** (~$10/año al costo) o **Porkbun**. Al renovar. Cloudflare tiene la ventaja de no tocar DNS automáticamente como Hostinger.
- [ ] Cancelar plan de Web Hosting de Hostinger si aún se está pagando (solo mantener el registrar del dominio).
- [ ] Añadir Google Analytics si Carlos quiere ver tráfico del sitio.
- [ ] Añadir más fotos al portafolio conforme se hagan proyectos nuevos.
- [ ] Considerar añadir una página de "Reviews / Google Reviews" cuando tenga reseñas reales.
- [ ] Si en el futuro se usa email @baleyawelding.com, restaurar TXT records SPF y DMARC en Hostinger.

---

## 📞 Contacto interno del proyecto

Si Carlos vuelve para hacer cambios:
1. Abre Claude Code en la carpeta del proyecto.
2. Di: **"Lee `HISTORIA_PROYECTO.md` y quiero [hacer X]"**.
3. Claude tendrá todo el contexto al instante.

Alternativa: comando `/resume` en Claude Code para retomar la conversación literal del último trabajo.

---

*Última actualización: al terminar el fix del incidente DNS de Hostinger (mayo 2026).*

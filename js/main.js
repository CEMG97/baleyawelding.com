/* ==================================================================
   Baleya Welding — main.js
   Mobile nav, portfolio filter, lightbox, scroll effects, year.
   ================================================================== */

(function () {
  'use strict';

  /* -------- Mobile nav toggle -------- */
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav   = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    // close menu when a nav link is tapped (improves mobile UX)
    siteNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -------- Sticky header shadow on scroll -------- */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* -------- Footer year -------- */
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* -------- Portfolio filter -------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryItems.forEach(function (item) {
          const match = (filter === 'all') || (item.dataset.category === filter);
          item.classList.toggle('hide', !match);
        });
      });
    });
  }

  /* -------- Lightbox -------- */
  const lightbox  = document.getElementById('lightbox');
  const lightImg  = document.getElementById('lightbox-img');
  const lightCap  = document.getElementById('lightbox-caption');
  if (lightbox && lightImg) {
    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        const img = item.querySelector('img');
        const cap = item.querySelector('figcaption');
        if (!img) return;
        lightImg.src = img.src;
        lightImg.alt = img.alt;
        if (lightCap) lightCap.textContent = cap ? cap.textContent : '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });
    const closeLightbox = function () {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightImg.src = '';
    };
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* -------- Fade-in on scroll (IntersectionObserver) --------
     Excluye .gallery-item: con loading="lazy" las imagenes inician
     con altura 0 y el observer no triggea visible en mobile, dejando
     la galeria invisible. Las gallery items se ven siempre. */
  const animatedEls = document.querySelectorAll('.section, .hero-content, .card, .service-row');
  animatedEls.forEach(function (el) { el.classList.add('fade-in'); });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    animatedEls.forEach(function (el) { io.observe(el); });

    // Safety fallback: si en 1.5s algun elemento sigue oculto, hacerlo visible.
    setTimeout(function () {
      animatedEls.forEach(function (el) { el.classList.add('visible'); });
    }, 1500);
  } else {
    animatedEls.forEach(function (el) { el.classList.add('visible'); });
  }

})();

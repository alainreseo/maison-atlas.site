/* === NAV SCROLL === */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const scrolled = window.scrollY > 60;
  nav.classList.toggle('scrolled', scrolled);
  if (nav.dataset.transparent === 'true') {
    if (scrolled) nav.classList.remove('nav-transparent');
    else nav.classList.add('nav-transparent');
  }
});

/* === FAQ TOGGLE === */
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
});

/* === BLOG CAT FILTER === */
document.querySelectorAll('.blog-cat').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.blog-cat').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
  });
});

/* === PARALLAX HERO IMAGE ON SCROLL === */
(function() {
  const heroImg = document.querySelector('.hero-bg img');
  if (!heroImg) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroH = document.querySelector('.hero').offsetHeight;
        if (scrollY < heroH) {
          heroImg.style.transform = `scale(${1 + scrollY * 0.0002}) translateY(${scrollY * 0.15}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();

/* === SCROLL REVEAL FOR SECTIONS === */
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.card, .testimonial, .stat, .step, .service-item, .value-item, .city-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });
})();
// ── NAVBAR shrink on scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('small', window.scrollY > 60);
}, { passive: true });

// ── Mobile menu ──
function toggleMenu() { document.getElementById('mob-menu').classList.toggle('open'); }
function closeMenu() { document.getElementById('mob-menu').classList.remove('open'); }

// Close mobile menu on nav link click
document.querySelectorAll('#mob-menu a').forEach(a => a.addEventListener('click', closeMenu));

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Smooth active nav highlight ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) cur = s.id;
  });
  document.querySelectorAll('.nav-links a:not(.nav-apply)').forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + cur) a.style.color = '#e8d8b8';
  });
}, { passive: true });

// ── Counter animation ──
function animateCounters() {
  document.querySelectorAll('.big-n, .h-stat-num').forEach(el => {
    const raw = el.innerText.replace(/[^0-9]/g, '');
    if (!raw) return;
    const target = parseInt(raw, 10);
    const suffix = el.innerText.replace(/[0-9]/g, '');
    let current = 0;
    const increment = target / 55;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      el.innerText = Math.floor(current) + suffix;
      if (current >= target) clearInterval(timer);
    }, 22);
  });
}
const statsSection = document.querySelector('#achievements');
if (statsSection) {
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { animateCounters(); }
  }, { threshold: 0.3 }).observe(statsSection);
}

// ── Tooltip for placeholders (dev helper) ──
document.querySelectorAll('.ph').forEach(el => {
  el.setAttribute('title', el.title || 'FILL: update this before publishing');
});

// theme.js — Light/Dark mode + Star canvas

(function() {
  // Apply theme immediately before paint
  const saved = localStorage.getItem('mcm-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('mcm-theme', t);
    // Toggle icon visibility via data attribute
    toggle.setAttribute('data-theme', t);
  }

  const current = localStorage.getItem('mcm-theme') || 'dark';
  applyTheme(current);

  toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
}

function initStars() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random(),
        speed: Math.random() * 0.3 + 0.05,
        dir: Math.random() > 0.5 ? 1 : -1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a += s.speed * 0.01 * s.dir;
      if (s.a > 1 || s.a < 0) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a * 0.7})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createStars(180);
  draw();
  window.addEventListener('resize', () => { resize(); createStars(180); });
}

function initNav() {
  // Active link highlighting
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    const hrefFile = href.split('/').pop();
    if (hrefFile === current || (current === '' && hrefFile === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Mobile drawer navigation
  const burger = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.mobile-nav-close');
  
  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  
  if (burger && drawer) {
    burger.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    
    // Close on link click
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeDrawer);
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }
}

function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-in').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initStars();
  initNav();
  initScrollReveal();
});

// nav-template.js — Injects shared navigation into every page
// Auto-detects path depth for correct relative links

function injectNav() {
  const path = window.location.pathname;
  const inSubdir = path.includes('/dc-phases/') || path.includes('/marvel-phases/');
  const prefix = inSubdir ? '../' : '';

  const NAV_HTML = `
<nav>
  <a href="${prefix}index.html" class="nav-logo">
    <span class="nav-logo-full">Miclass Cosmic Multiverse</span>
    <span class="nav-logo-short">MCM</span>
  </a>
  
  <ul class="nav-links">
    <li><a href="${prefix}index.html">Home</a></li>
    <li><a href="${prefix}dc.html" class="dc-link">DC</a></li>
    <li><a href="${prefix}marvel.html" class="mv-link">Marvel</a></li>
    <li><a href="${prefix}essentials.html">Essentials</a></li>
    <li><a href="${prefix}roster.html">Roster</a></li>
    <li><a href="${prefix}elseworlds.html">Elseworlds</a></li>
    <li><a href="${prefix}instructions.html">Guide</a></li>
  </ul>
  
  <div class="nav-actions">
    <button class="theme-toggle" title="Toggle light/dark mode" aria-label="Toggle theme">
      <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </button>
    
    <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

<div class="mobile-nav-overlay"></div>
<div class="mobile-nav-drawer">
  <div class="mobile-nav-header">
    <span class="mobile-nav-title">Menu</span>
    <button class="mobile-nav-close" aria-label="Close menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <ul class="mobile-nav-links">
    <li><a href="${prefix}index.html">Home</a></li>
    <li><a href="${prefix}dc.html" class="dc-link">DC Universe</a></li>
    <li><a href="${prefix}marvel.html" class="mv-link">Marvel Universe</a></li>
    <li class="mobile-nav-divider"></li>
    <li><a href="${prefix}essentials.html">Essentials</a></li>
    <li><a href="${prefix}roster.html">Character Roster</a></li>
    <li><a href="${prefix}elseworlds.html">Elseworlds</a></li>
    <li class="mobile-nav-divider"></li>
    <li><a href="${prefix}instructions.html">How It Works</a></li>
  </ul>
</div>
`;
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectNav);
} else {
  injectNav();
}

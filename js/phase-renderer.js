// phase-renderer.js — Renders content on individual phase detail pages

function renderPhasePage(phaseData, universe) {
  if (!phaseData) return;

  const color = universe === 'dc' ? 'var(--dc-secondary)' : 'var(--mv-secondary)';
  const glow = universe === 'dc' ? 'var(--dc-glow)' : 'var(--mv-glow)';
  const backUrl = universe === 'dc' ? '../dc.html' : '../marvel.html';
  const tagClass = universe === 'dc' ? 'active-dc' : 'active-mv';

  // Set page title
  document.title = `Phase ${phaseData.id}: ${phaseData.title} — Miklas Cosmic Multiverse`;

  // Render phase detail hero
  const heroEl = document.getElementById('phase-detail-hero');
  if (heroEl) {
    heroEl.innerHTML = `
      <a href="${backUrl}" class="phase-back-btn">← Back to ${universe === 'dc' ? 'DC' : 'Marvel'}</a>
      <div class="phase-detail-number">${phaseData.id}</div>
      <p style="font-family:var(--font-heading);font-size:0.65rem;letter-spacing:0.3em;text-transform:uppercase;color:${color};margin-bottom:0.75rem;position:relative;z-index:1;">Phase ${phaseData.id}</p>
      <h1 class="phase-detail-title" style="color:${color};">${phaseData.title}</h1>
      <p class="phase-detail-era">${phaseData.era}</p>
      <p class="phase-detail-desc">${phaseData.desc || ''}</p>
    `;
  }

  // Event Pause banner
  const eventEl = document.getElementById('event-pause-container');
  if (eventEl && phaseData.eventPause) {
    eventEl.innerHTML = `
      <div class="event-pause">
        <p class="event-pause-label">⛔ Event Pause — Read First</p>
        <p class="event-pause-title">${phaseData.eventPause.title}</p>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.4rem;">${phaseData.eventPause.issues}</p>
        <p class="event-pause-desc">${phaseData.eventPause.desc}</p>
      </div>
    `;
  } else if (eventEl) {
    eventEl.style.display = 'none';
  }

  // Collect all unique track icons/titles for filter bar
  const tracks = phaseData.tracks || [];
  const filterBar = document.getElementById('phase-filter-bar');
  if (filterBar && tracks.length > 0) {
    const filterHTML = tracks.map(t => `
      <button class="filter-btn" data-filter="${t.title}" onclick="toggleTrackFilter(this, '${t.title}')">
        ${t.icon} ${t.title}
      </button>
    `).join('');
    filterBar.innerHTML = `
      <span class="filter-label">Filter:</span>
      <button class="filter-btn active" id="filter-all-btn" onclick="clearFilters()">All</button>
      ${filterHTML}
    `;
  }

  // Search
  const searchEl = document.getElementById('phase-search');
  if (searchEl) {
    searchEl.addEventListener('input', (e) => filterBySearch(e.target.value));
  }

  // Render tracks
  const tracksContainer = document.getElementById('tracks-container');
  if (tracksContainer) {
    tracksContainer.innerHTML = tracks.map((track, ti) => `
      <div class="track-section animate-in" id="track-${ti}" data-track="${track.title}" style="animation-delay:${ti*0.08}s;">
        <div class="track-header">
          <span class="track-icon">${track.icon}</span>
          <h3 class="track-title">${track.title}</h3>
          <span class="track-subtitle">${track.items.length} titles</span>
        </div>
        <div class="glass-card comic-list">
          ${track.items.map((item, ii) => `
            <div class="comic-item" data-tags="${(item.tags || []).join(',')}" data-title="${item.title.toLowerCase()}">
              <span class="comic-item-num">${String(ii + 1).padStart(2,'0')}</span>
              <div class="comic-item-body">
                <div class="comic-item-title">${item.title}</div>
                <div class="comic-item-meta">
                  <span>${item.issues || ''}</span>
                  ${(item.tags || []).map(tag => `<span class="tag-${tag}" data-tag="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`).join('')}
                </div>
                ${item.note ? `<div class="comic-item-note">${item.note}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    // Trigger reveal
    setTimeout(() => {
      tracksContainer.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
    }, 100);
  }

  // Render navigation arrows
  renderPhaseNav(phaseData.id, universe);
}

// Track filter
let activeTrackFilters = new Set();

function toggleTrackFilter(btn, trackName) {
  const allBtn = document.getElementById('filter-all-btn');
  if (activeTrackFilters.has(trackName)) {
    activeTrackFilters.delete(trackName);
    btn.classList.remove('active-dc', 'active-mv', 'active');
  } else {
    activeTrackFilters.add(trackName);
    btn.classList.add(document.body.closest('[data-universe]')?.dataset.universe === 'dc' ? 'active-dc' : 'active-mv');
  }
  if (allBtn) allBtn.classList.toggle('active', activeTrackFilters.size === 0);
  applyTrackFilters();
}

function clearFilters() {
  activeTrackFilters.clear();
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active-dc','active-mv','active'));
  const allBtn = document.getElementById('filter-all-btn');
  if (allBtn) allBtn.classList.add('active');
  applyTrackFilters();
}

let currentSearch = '';

function filterBySearch(q) {
  currentSearch = q.toLowerCase();
  applyTrackFilters();
}

function applyTrackFilters() {
  document.querySelectorAll('.track-section').forEach(section => {
    const trackName = section.dataset.track;
    const matchesTrack = activeTrackFilters.size === 0 || activeTrackFilters.has(trackName);
    const matchesSearch = !currentSearch || section.textContent.toLowerCase().includes(currentSearch);
    section.style.display = (matchesTrack && matchesSearch) ? '' : 'none';
  });

  // Also filter individual comic items by search
  if (currentSearch) {
    document.querySelectorAll('.comic-item').forEach(item => {
      const title = item.dataset.title || '';
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(currentSearch) ? '' : 'none';
    });
  } else {
    document.querySelectorAll('.comic-item').forEach(item => {
      item.style.display = '';
    });
  }
}

function renderPhaseNav(currentId, universe) {
  const navEl = document.getElementById('phase-nav');
  if (!navEl) return;

  const phases = universe === 'dc' ? (typeof DC_PHASES !== 'undefined' ? DC_PHASES : []) 
                                   : (typeof MARVEL_PHASES !== 'undefined' ? MARVEL_PHASES : []);
  const currentIndex = phases.findIndex(p => p.id === currentId);
  const prev = phases[currentIndex - 1];
  const next = phases[currentIndex + 1];

  navEl.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;">
      ${prev ? `<a href="phase${prev.id}.html" class="btn btn-ghost" style="font-size:0.7rem;">← Phase ${prev.id}: ${prev.title}</a>` : '<span></span>'}
      <a href="${universe === 'dc' ? '../dc.html' : '../marvel.html'}" class="btn btn-ghost" style="font-size:0.7rem;">All Phases</a>
      ${next ? `<a href="phase${next.id}.html" class="btn btn-ghost" style="font-size:0.7rem;">Phase ${next.id}: ${next.title} →</a>` : '<span></span>'}
    </div>
  `;
}

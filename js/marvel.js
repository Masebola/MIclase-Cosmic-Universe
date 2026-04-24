// marvel.js — Renders Marvel phase grid

const MV_PHASE_COLORS = [
  '#60a5fa','#fb923c','#f87171','#facc15','#4ade80',
  '#3498db','#e74c3c','#e67e22','#f1c40f','#2ecc71',
  '#9b59b6','#8e44ad'
];

document.addEventListener('DOMContentLoaded', () => {
  renderMVPhaseGrid();
  renderMVStandalones();
});

function renderMVPhaseGrid() {
  const grid = document.getElementById('mv-phase-grid');
  if (!grid || typeof MARVEL_PHASES === 'undefined') return;

  grid.innerHTML = MARVEL_PHASES.map((phase, i) => {
    const totalItems = phase.tracks ? phase.tracks.reduce((sum, t) => sum + t.items.length, 0) : 0;
    const color = MV_PHASE_COLORS[i] || 'var(--mv-secondary)';
    return `
      <a href="marvel-phases/phase${phase.id}.html" class="glass-card phase-card mv-phase animate-in" style="animation-delay:${i*0.06}s;">
        <span class="phase-number">${phase.id}</span>
        <p class="phase-label" style="color:${color};">Phase ${phase.id}</p>
        <h3 class="phase-title">${phase.title}</h3>
        <p class="phase-era">${phase.era}</p>
        <p class="phase-count">${totalItems} titles across ${phase.tracks ? phase.tracks.length : 0} tracks</p>
        ${phase.eventPause ? `<p style="margin-top:0.5rem;font-size:0.72rem;color:var(--mv-secondary);">⛔ Event: ${phase.eventPause.title}</p>` : ''}
        <span class="phase-arrow">→</span>
      </a>
    `;
  }).join('');

  setTimeout(() => {
    grid.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 100);
}

function renderMVStandalones() {
  const grid = document.getElementById('mv-standalones-grid');
  if (!grid || typeof MARVEL_STANDALONES === 'undefined') return;

  grid.innerHTML = MARVEL_STANDALONES.map((s, i) => `
    <div class="glass-card animate-in" style="padding:1.5rem;animation-delay:${i*0.04}s;">
      <p style="font-family:var(--font-heading);font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--mv-secondary);margin-bottom:0.4rem;">${s.year}</p>
      <h4 style="font-family:var(--font-heading);font-size:0.92rem;font-weight:700;margin-bottom:0.5rem;">${s.title}</h4>
      <p style="font-size:0.8rem;color:var(--text-secondary);line-height:1.6;">${s.desc}</p>
    </div>
  `).join('');

  setTimeout(() => {
    grid.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 150);
}

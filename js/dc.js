// dc.js — Renders DC phase grid and handles dc.html

const PHASE_COLORS = [
  '#60a5fa','#a78bfa','#f87171','#c084fc','#34d399',
  '#1abc9c','#3498db','#8e44ad','#f39c12','#c9a227'
];

document.addEventListener('DOMContentLoaded', () => {
  renderDCPhaseGrid();
});

function renderDCPhaseGrid() {
  const grid = document.getElementById('dc-phase-grid');
  if (!grid || typeof DC_PHASES === 'undefined') return;

  grid.innerHTML = DC_PHASES.map((phase, i) => {
    const totalItems = phase.tracks ? phase.tracks.reduce((sum, t) => sum + t.items.length, 0) : 0;
    const color = PHASE_COLORS[i] || 'var(--dc-secondary)';
    return `
      <a href="dc-phases/phase${phase.id}.html" class="glass-card phase-card dc-phase animate-in" style="--phase-color:${color};animation-delay:${i*0.06}s;">
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

  // Trigger scroll reveal
  setTimeout(() => {
    grid.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 100);
}

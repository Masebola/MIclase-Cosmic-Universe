// elseworlds.js

let allEW = [];
let currentFilter = 'all';

function renderEWGrid(data) {
  const grid = document.getElementById('dc-ew-grid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = `<div class="no-results" style="grid-column:1/-1;"><h3>No results found</h3><p>Try a different filter or search term.</p></div>`;
    return;
  }

  const typeColors = {
    'Elseworlds': 'var(--dc-secondary)',
    'Black Label': '#aaa',
    'Absolute Universe': 'var(--gold)',
    'Standalone': 'var(--mv-secondary)'
  };

  grid.innerHTML = data.map((item, i) => {
    const color = typeColors[item.type] || 'var(--text-muted)';
    return `
      <div class="glass-card elseworlds-card animate-in" data-type="${item.type}" style="animation-delay:${i*0.04}s;">
        <span class="ew-badge ew-badge-dc" style="color:${color};border-color:${color}33;background:${color}15;">${item.type}</span>
        <p class="ew-title">${item.title}</p>
        <p class="ew-meta">${item.year} · ${item.phase}</p>
        <p class="ew-desc">${item.desc}</p>
      </div>
    `;
  }).join('');

  setTimeout(() => {
    grid.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 80);
}

function filterEW(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'active-dc', 'active-mv'));
  btn.classList.add('active');

  applyEWFilters();
}

let ewSearch = '';

function applyEWFilters() {
  let filtered = allEW;
  if (currentFilter !== 'all') {
    filtered = filtered.filter(e => e.type === currentFilter);
  }
  if (ewSearch) {
    filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(ewSearch) ||
      e.desc.toLowerCase().includes(ewSearch) ||
      e.year.includes(ewSearch)
    );
  }
  renderEWGrid(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof DC_ELSEWORLDS !== 'undefined') {
    allEW = DC_ELSEWORLDS;
    renderEWGrid(allEW);
  }

  const search = document.getElementById('ew-search');
  if (search) {
    search.addEventListener('input', (e) => {
      ewSearch = e.target.value.toLowerCase();
      applyEWFilters();
    });
  }
});

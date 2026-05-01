// essentials.js — Starter Pack Catalog

function switchEssUniverse(u) {
  document.getElementById('ess-dc-panel').style.display = u === 'dc' ? '' : 'none';
  document.getElementById('ess-mv-panel').style.display = u === 'mv' ? '' : 'none';
  document.getElementById('ess-dc-btn').className = `universe-btn ${u === 'dc' ? 'dc-active' : ''}`;
  document.getElementById('ess-mv-btn').className = `universe-btn ${u === 'mv' ? 'mv-active' : ''}`;
}

function renderStarterCatalog(containerId, starters, universe) {
  const container = document.getElementById(containerId);
  if (!container || !starters) return;

  const colorClass = universe === 'dc' ? 'dc-char' : 'mv-char';
  const accentColor = universe === 'dc' ? 'var(--dc-secondary)' : 'var(--mv-secondary)';

  container.innerHTML = `
    <div class="starter-grid">
      ${starters.map((char, i) => `
        <button class="starter-card animate-in" onclick="openStarterModal('${universe}', '${char.id}')" style="animation-delay:${i * 0.03}s;">
          <div class="starter-card-initial" style="background:${char.color || accentColor};">${char.initial}</div>
          <div class="starter-card-info">
            <h3 class="starter-card-name">${char.name}</h3>
            <p class="starter-card-alias">${char.alias || ''}</p>
          </div>
        </button>
      `).join('')}
    </div>
  `;

  setTimeout(() => {
    container.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 50);
}

function openStarterModal(universe, charId) {
  const starters = universe === 'dc' ? DC_STARTER_PACKS : MARVEL_STARTER_PACKS;
  const char = starters.find(c => c.id === charId);
  if (!char) return;

  const modal = document.getElementById('starter-modal');
  const body = document.getElementById('starter-modal-body');
  const accentColor = universe === 'dc' ? 'var(--dc-secondary)' : 'var(--mv-secondary)';

  // Get all categories
  const categories = char.categories || [];

  body.innerHTML = `
    <div class="starter-modal-header">
      <div class="starter-modal-initial" style="background:${char.color || accentColor};">${char.initial}</div>
      <div class="starter-modal-title-group">
        <h2 class="starter-modal-title" id="starter-modal-title">${char.name}</h2>
        <p class="starter-modal-alias">${char.alias || ''}</p>
      </div>
      <button class="starter-modal-close" onclick="closeStarterModal()" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="starter-modal-categories">
      ${categories.length > 0 ? categories.map(cat => `
        <div class="starter-category">
          <h3 class="starter-category-title" style="color:${accentColor};">${cat.title}</h3>
          <div class="starter-category-items">
            ${cat.items.map((item, idx) => {
              const hasEssential = item.tags && item.tags.includes('essential');
              const hasClassic = item.tags && item.tags.includes('classic');
              const tagLabel = hasEssential ? 'Essential' : (hasClassic ? 'Classic' : '');
              return `
              <div class="starter-item">
                <span class="starter-item-number" style="color:${accentColor};">${String(idx + 1).padStart(2, '0')}</span>
                <div class="starter-item-content">
                  <span class="starter-item-title">${item.title}</span>
                  ${item.issues ? `<span class="starter-item-year">${item.issues}</span>` : ''}
                  ${tagLabel ? `<span class="starter-item-tag" style="border-color:${accentColor}33;color:${accentColor};">${tagLabel}</span>` : ''}
                  ${item.note ? `<span class="starter-item-note">${item.note}</span>` : ''}
                </div>
              </div>
            `}).join('')}
          </div>
        </div>
      `).join('') : '<p style="color:var(--text-muted);text-align:center;padding:2rem;">No reading list available yet.</p>'}
    </div>
  `;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Scroll modal categories to top
  const categoriesEl = body.querySelector('.starter-modal-categories');
  if (categoriesEl) categoriesEl.scrollTop = 0;
}

function closeStarterModal() {
  const modal = document.getElementById('starter-modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeStarterModal();
});

document.addEventListener('DOMContentLoaded', () => {
  // Render DC catalog
  if (typeof DC_STARTER_PACKS !== 'undefined') {
    renderStarterCatalog('dc-starter-catalog', DC_STARTER_PACKS, 'dc');
  }

  // Render Marvel catalog
  if (typeof MARVEL_STARTER_PACKS !== 'undefined') {
    renderStarterCatalog('mv-starter-catalog', MARVEL_STARTER_PACKS, 'mv');
  }

  // Check URL param for preselected universe
  const params = new URLSearchParams(window.location.search);
  const u = params.get('u');
  if (u === 'mv') switchEssUniverse('mv');
});

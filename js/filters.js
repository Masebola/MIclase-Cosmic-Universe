// filters.js — Shared filter & search functionality for phase pages

function initFilters(containerId, filterBarId, universe) {
  const container = document.getElementById(containerId);
  const filterBar = document.getElementById(filterBarId);
  if (!container || !filterBar) return;

  const activeFilters = new Set();
  let searchQuery = '';

  function applyFilters() {
    const items = container.querySelectorAll('.comic-item, .track-section');
    items.forEach(item => {
      const tags = Array.from(item.querySelectorAll('[data-tag]')).map(t => t.dataset.tag);
      const text = item.textContent.toLowerCase();
      const matchesSearch = !searchQuery || text.includes(searchQuery);
      const matchesFilter = activeFilters.size === 0 || [...activeFilters].some(f => tags.includes(f) || text.includes(f.toLowerCase()));
      item.style.display = (matchesSearch && matchesFilter) ? '' : 'none';
    });
  }

  // Filter buttons
  filterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (activeFilters.has(filter)) {
        activeFilters.delete(filter);
        btn.classList.remove(universe === 'dc' ? 'active-dc' : 'active-mv', 'active');
      } else {
        activeFilters.add(filter);
        btn.classList.add(universe === 'dc' ? 'active-dc' : universe === 'mv' ? 'active-mv' : 'active');
      }
      applyFilters();
    });
  });

  // Search
  const searchInput = document.getElementById(`${containerId}-search`);
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      applyFilters();
    });
  }
}

function initScrollRevealForCards() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.animate-in').forEach(el => obs.observe(el));
}

// essentials.js

const CURATED_PATHS = [
  {
    universe: 'dc',
    title: "The Batman Starter Pack",
    color: 'var(--dc-secondary)',
    steps: [
      "Batman: Year One (Batman #404-407)",
      "Batman: The Long Halloween",
      "Batman: The Killing Joke",
      "Batman: Knightfall Vol. 1 (Broken Bat)",
      "Batman: Hush",
      "Batman: The Court of Owls"
    ],
    note: "6 stories. Covers origin through modern era. Zero prior knowledge needed."
  },
  {
    universe: 'mv',
    title: "The Spider-Man Starter Pack",
    color: 'var(--mv-secondary)',
    steps: [
      "Amazing Spider-Man by Lee/Ditko (#1-38)",
      "Spider-Man: Kraven's Last Hunt",
      "Daredevil: Born Again (context for Peter's world)",
      "Spider-Man: The Alien Costume Saga",
      "Superior Spider-Man",
      "Hawkeye by Matt Fraction (bonus: best of the era)"
    ],
    note: "6 stories. From origin to modern Spidey. Great standalone reads."
  },
  {
    universe: 'dc',
    title: "Green Lantern: The Johns Era",
    color: '#4ade80',
    steps: [
      "Green Lantern: Rebirth",
      "Green Lantern: No Fear",
      "Sinestro Corps War",
      "Green Lantern: Secret Origin",
      "Blackest Night",
      "Brightest Day"
    ],
    note: "Geoff Johns' complete GL saga. Self-contained epic."
  },
  {
    universe: 'mv',
    title: "The X-Men Essentials",
    color: '#f87171',
    steps: [
      "X-Men: Dark Phoenix Saga (Uncanny #129-137)",
      "X-Men: Days of Future Past (#141-142)",
      "Wolverine (1982) by Frank Miller",
      "New X-Men by Grant Morrison",
      "Astonishing X-Men by Whedon",
      "House of X / Powers of X by Hickman"
    ],
    note: "The definitive X-Men reading path across 4 decades."
  },
  {
    universe: 'dc',
    title: "The Flash: Legacy of Speed",
    color: '#facc15',
    steps: [
      "The Flash: Born to Run (Wally's origin)",
      "The Flash by Mark Waid Book 1-3",
      "The Flash: Terminal Velocity",
      "DC Universe: Rebirth #1",
      "The Flash (Rebirth) by Joshua Williamson",
      "Titans: The Return of Wally West"
    ],
    note: "Follows Wally West from sidekick to legend."
  },
  {
    universe: 'mv',
    title: "The Avengers: Big Three",
    color: '#60a5fa',
    steps: [
      "Avengers: The Kree-Skrull War",
      "Avengers: Disassembled",
      "House of M",
      "Civil War",
      "Secret Invasion",
      "Avengers by Jonathan Hickman → Secret Wars"
    ],
    note: "From Bronze Age to Secret Wars. The spine of Avengers history."
  },
  {
    universe: 'dc',
    title: "Superman: Man of Tomorrow",
    color: '#f87171',
    steps: [
      "Superman: The Man of Steel by John Byrne",
      "Death and Return of Superman",
      "Superman: Brainiac by Geoff Johns",
      "All-Star Superman (Elseworlds — but essential)",
      "Superman: Rebirth by Peter Tomasi",
      "Superman: The Warworld Saga"
    ],
    note: "Superman across every era. Ends with his greatest modern story."
  },
  {
    universe: 'mv',
    title: "The Cosmic Marvel Path",
    color: '#c084fc',
    steps: [
      "Fantastic Four: The Galactus Trilogy (FF #48-50)",
      "Thanos Quest + Infinity Gauntlet",
      "Annihilation + Annihilation Conquest",
      "Guardians of the Galaxy (2008) by DnA",
      "Thanos Imperative",
      "Guardians of the Galaxy (2020) by Al Ewing"
    ],
    note: "Marvel's cosmic landscape from Galactus to the modern Guardians."
  }
];

function switchEssUniverse(u) {
  document.getElementById('ess-dc-panel').style.display = u === 'dc' ? '' : 'none';
  document.getElementById('ess-mv-panel').style.display = u === 'mv' ? '' : 'none';
  document.getElementById('ess-dc-btn').className = `universe-btn ${u === 'dc' ? 'dc-active' : ''}`;
  document.getElementById('ess-mv-btn').className = `universe-btn ${u === 'mv' ? 'mv-active' : ''}`;
}

let selectedDC = null;
let selectedMV = null;

function selectChar(charObj, universe) {
  const resultId = universe === 'dc' ? 'dc-essentials-result' : 'mv-essentials-result';
  const resultEl = document.getElementById(resultId);
  const color = universe === 'dc' ? 'var(--dc-secondary)' : 'var(--mv-secondary)';
  const colorClass = universe === 'dc' ? 'dc-char' : 'mv-char';

  // Update button selection styling
  const btnContainer = universe === 'dc' ? 'dc-char-buttons' : 'mv-char-buttons';
  document.querySelectorAll(`#${btnContainer} .essentials-char-btn`).forEach(b => {
    b.classList.remove('selected-dc', 'selected-mv');
  });
  const clickedBtn = Array.from(document.querySelectorAll(`#${btnContainer} .essentials-char-btn`))
    .find(b => b.textContent.trim() === charObj.name);
  if (clickedBtn) clickedBtn.classList.add(universe === 'dc' ? 'selected-dc' : 'selected-mv');

  const essentials = charObj.essentials || [];
  const phases = charObj.phases || [];

  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:1.25rem;margin-bottom:1.5rem;flex-wrap:wrap;">
      <div class="character-initial ${colorClass}" style="width:56px;height:56px;font-size:1.3rem;">${charObj.initial}</div>
      <div>
        <h3 style="font-family:var(--font-heading);font-size:1.2rem;font-weight:700;margin-bottom:0.2rem;">${charObj.name}</h3>
        <p style="color:var(--text-secondary);font-size:0.82rem;">${charObj.alias}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.4rem;">
          ${charObj.tags.map(t => `<span class="character-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
    <p style="font-family:var(--font-heading);font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;color:${color};margin-bottom:1rem;">Essential Reading — ${essentials.length} stories</p>
    <div style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1.5rem;">
      ${essentials.map((e, i) => `
        <div style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.75rem 1rem;background:var(--bg-glass);border:1px solid var(--border-glass);border-radius:8px;">
          <span style="font-family:var(--font-heading);font-size:0.7rem;color:${color};min-width:1.5rem;padding-top:0.1rem;">${String(i+1).padStart(2,'0')}</span>
          <span style="font-size:0.87rem;color:var(--text-primary);">${e}</span>
        </div>
      `).join('')}
    </div>
    ${phases.length > 0 ? `
      <p style="font-size:0.78rem;color:var(--text-muted);">
        Appears in phases: ${phases.map(p => `<a href="${universe === 'dc' ? 'dc-phases' : 'marvel-phases'}/phase${p}.html" style="color:${color};text-decoration:none;">Phase ${p}</a>`).join(' · ')}
      </p>
    ` : ''}
  `;

  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderCuratedPaths() {
  const grid = document.getElementById('curated-paths');
  if (!grid) return;
  grid.innerHTML = CURATED_PATHS.map((path, i) => `
    <div class="glass-card animate-in" style="padding:2rem;border-top:3px solid ${path.color};animation-delay:${i*0.07}s;">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem;">
        <span style="font-size:0.65rem;font-family:var(--font-heading);letter-spacing:0.15em;text-transform:uppercase;color:${path.color};padding:0.2rem 0.6rem;border:1px solid ${path.color}33;border-radius:3px;">${path.universe.toUpperCase()}</span>
      </div>
      <h3 style="font-family:var(--font-heading);font-size:1rem;font-weight:700;margin-bottom:0.75rem;">${path.title}</h3>
      <ol style="list-style:none;display:flex;flex-direction:column;gap:0.4rem;margin-bottom:1rem;">
        ${path.steps.map((s, si) => `
          <li style="display:flex;gap:0.6rem;font-size:0.8rem;color:var(--text-secondary);">
            <span style="color:${path.color};font-family:var(--font-heading);font-size:0.7rem;min-width:1.2rem;">${si+1}.</span>
            <span>${s}</span>
          </li>
        `).join('')}
      </ol>
      <p style="font-size:0.75rem;color:var(--text-muted);font-style:italic;">${path.note}</p>
    </div>
  `).join('');

  setTimeout(() => {
    grid.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
  // Render DC character buttons
  const dcBtns = document.getElementById('dc-char-buttons');
  if (dcBtns && typeof DC_CHARACTERS !== 'undefined') {
    dcBtns.innerHTML = DC_CHARACTERS.map(c => `
      <button class="essentials-char-btn" onclick='selectChar(${JSON.stringify(c)}, "dc")'>${c.name}</button>
    `).join('');
  }

  // Render Marvel character buttons
  const mvBtns = document.getElementById('mv-char-buttons');
  if (mvBtns && typeof MARVEL_CHARACTERS !== 'undefined') {
    mvBtns.innerHTML = MARVEL_CHARACTERS.map(c => `
      <button class="essentials-char-btn" onclick='selectChar(${JSON.stringify(c).replace(/'/g, "&#39;")}, "mv")'>${c.name}</button>
    `).join('');
  }

  renderCuratedPaths();

  // Check URL param for preselected universe
  const params = new URLSearchParams(window.location.search);
  const u = params.get('u');
  if (u === 'mv') switchEssUniverse('mv');
});

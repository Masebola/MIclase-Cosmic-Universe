// essentials.js

const CURATED_PATHS = [
  {
    universe: 'dc',
    title: "The Batman Starter Pack",
    color: 'var(--dc-secondary)',
    steps: [
      "Batman: Year One (Batman #404–407) — Frank Miller",
      "Batman: The Man Who Laughs — Ed Brubaker",
      "Batman: The Long Halloween — Jeph Loeb & Tim Sale",
      "Batman: A Death in the Family — Jim Starlin",
      "Batman: Knightfall Saga (1993–1994)",
      "Batman: No Man's Land (1999)",
      "Batman: Hush — Loeb & Jim Lee",
      "Batman: The Court of Owls — Scott Snyder & Greg Capullo"
    ],
    note: "8 stories. Covers origin through modern era. Zero prior knowledge needed."
  },
  {
    universe: 'dc',
    title: "Superman: Man of Tomorrow",
    color: '#f87171',
    steps: [
      "Superman: The Man of Steel — John Byrne",
      "Superman: Birthright — Mark Waid",
      "Superman: For All Seasons — Loeb & Sale",
      "Superman: For Tomorrow — Azzarello & Jim Lee",
      "All-Star Superman — Grant Morrison",
      "Superman: Brainiac — Geoff Johns",
      "Superman: Rebirth by Peter Tomasi",
      "Superman: The Warworld Saga"
    ],
    note: "Superman across every era. Ends with his greatest modern story."
  },
  {
    universe: 'dc',
    title: "Green Lantern: The Johns Era",
    color: '#4ade80',
    steps: [
      "Green Lantern: Emerald Dawn I & II",
      "Green Lantern: Rebirth — Geoff Johns",
      "Green Lantern: No Fear",
      "Green Lantern: Secret Origin",
      "Sinestro Corps War",
      "Blackest Night",
      "Brightest Day"
    ],
    note: "Geoff Johns' complete GL saga. Self-contained epic spanning 6 years."
  },
  {
    universe: 'dc',
    title: "The Flash: Legacy of Speed",
    color: '#facc15',
    steps: [
      "The Flash: Born to Run — Mark Waid (Wally's origin)",
      "The Flash by Mark Waid: Books 1–3",
      "The Flash: Terminal Velocity",
      "Flash: Rebirth (2009) — Geoff Johns",
      "Flashpoint (2011)",
      "DC Universe: Rebirth #1",
      "The Flash (Rebirth) by Joshua Williamson",
      "Titans: The Return of Wally West"
    ],
    note: "Follows both Barry Allen and Wally West across the Speed Force legacy."
  },
  {
    universe: 'dc',
    title: "Wonder Woman: From Pérez to Rucka",
    color: '#c084fc',
    steps: [
      "Wonder Woman (1987) #1–24 — George Pérez",
      "Wonder Woman: The Hiketeia — Greg Rucka",
      "Wonder Woman (2003) by Greg Rucka",
      "Wonder Woman (2011) #1–35 — Brian Azzarello",
      "Wonder Woman: Rebirth (2016) — Rucka",
      "Wonder Woman by Gail Simone (2007–2010)"
    ],
    note: "Three decades of essential Diana Prince — myth, war, and diplomacy."
  },
  {
    universe: 'dc',
    title: "The Bat-Family Expanded",
    color: '#60a5fa',
    steps: [
      "Batman: Year One — Frank Miller (foundation)",
      "Batgirl: Year One (Barbara's origin)",
      "New Teen Titans: The Judas Contract — Dick Grayson era",
      "Robin (1993) full run — Tim Drake",
      "Batman: Under the Hood — Jason Todd returns",
      "Batgirl (2000) by Kelley Puckett — Cassandra Cain",
      "Batgirl Rising (2009) — Stephanie Brown",
      "Nightwing: Leaping Into the Light — Tom Taylor"
    ],
    note: "Every major Robin and Batgirl — a comprehensive guide to the Bat-Family tree."
  },
  {
    universe: 'dc',
    title: "DC Cosmic & New Gods",
    color: '#f59e0b',
    steps: [
      "Jack Kirby's Fourth World Omnibus",
      "New Gods (1971) — Jack Kirby",
      "Mister Miracle (1971) — Kirby",
      "Final Crisis — Grant Morrison",
      "Justice League: The Darkseid War",
      "The Sandman: Preludes & Nocturnes — Neil Gaiman",
      "Hellblazer: Dangerous Habits — Garth Ennis"
    ],
    note: "The mythic foundations of the DC Universe — from Kirby to Gaiman."
  },
  {
    universe: 'mv',
    title: "The Spider-Man Starter Pack",
    color: 'var(--mv-secondary)',
    steps: [
      "Amazing Spider-Man by Lee/Ditko (#1–38)",
      "The Night Gwen Stacy Died (ASM #121–122)",
      "Spider-Man: Kraven's Last Hunt",
      "Spider-Man: The Alien Costume Saga (Birth of Venom)",
      "Spider-Man: Blue (2002)",
      "Superior Spider-Man",
      "Hawkeye by Matt Fraction (bonus: best of the era)"
    ],
    note: "7 stories. From origin to modern Spidey. Great standalone reads."
  },
  {
    universe: 'mv',
    title: "The X-Men Essentials",
    color: '#f87171',
    steps: [
      "X-Men: Dark Phoenix Saga (Uncanny #129–137)",
      "X-Men: Days of Future Past (#141–142)",
      "Wolverine (1982) — Frank Miller & Claremont",
      "X-Men: God Loves, Man Kills",
      "New X-Men by Grant Morrison",
      "Astonishing X-Men by Joss Whedon",
      "House of X / Powers of X by Jonathan Hickman"
    ],
    note: "The definitive X-Men reading path across 4 decades."
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
      "Avengers by Jonathan Hickman → Secret Wars (2015)"
    ],
    note: "From Bronze Age to Secret Wars. The spine of Avengers history."
  },
  {
    universe: 'mv',
    title: "The Cosmic Marvel Path",
    color: '#c084fc',
    steps: [
      "Fantastic Four: The Galactus Trilogy (FF #48–50)",
      "Thanos Quest + The Infinity Gauntlet",
      "Annihilation + Annihilation: Conquest",
      "Guardians of the Galaxy (2008) by Abnett & Lanning",
      "Thanos Imperative",
      "Guardians of the Galaxy (2020) by Al Ewing"
    ],
    note: "Marvel's cosmic landscape from Galactus to the modern Guardians."
  },
  {
    universe: 'mv',
    title: "Daredevil: The Hell's Kitchen Trilogy",
    color: '#fb923c',
    steps: [
      "Daredevil: The Man Without Fear (1993) — Frank Miller",
      "Daredevil: Born Again (#227–233, 1986)",
      "Daredevil Vol. 2 #26–50, #56–81 — Bendis & Maleev",
      "Daredevil by Mark Waid #1–36 (2011–2014)"
    ],
    note: "The four pillars of Daredevil — Miller, Bendis, and Waid define Hell's Kitchen."
  },
  {
    universe: 'mv',
    title: "Iron Man: Tech & Fall",
    color: '#facc15',
    steps: [
      "Iron Man: Demon in a Bottle (#120–128, 1979)",
      "Iron Man: Armor Wars (1987–1988)",
      "Iron Man: Extremis (#1–6, 2005)",
      "Iron Man: The Five Nightmares (#1–7, 2008)",
      "Invincible Iron Man by Matt Fraction",
      "Civil War"
    ],
    note: "Tony Stark's defining arcs — addiction, legacy, responsibility, and Civil War."
  },
  {
    universe: 'mv',
    title: "Captain America: Soldier & Symbol",
    color: '#60a5fa',
    steps: [
      "Captain America: Winter Soldier — Ed Brubaker",
      "Captain America: Death of Captain America — Brubaker",
      "Captain America: Man Out of Time (2010)",
      "Civil War",
      "Secret Invasion",
      "The Ultimates (2002–2004) — Mark Millar"
    ],
    note: "From the Winter Soldier to Civil War — Steve Rogers' modern renaissance."
  },
  {
    universe: 'mv',
    title: "Street Level Marvel",
    color: '#4ade80',
    steps: [
      "Alias #1–28 — Brian Michael Bendis (Jessica Jones)",
      "Hawkeye by Matt Fraction & David Aja",
      "Daredevil: Born Again — Frank Miller",
      "Punisher (2000) — Garth Ennis & Dillon",
      "Moon Knight by Jeff Lemire",
      "She-Hulk by Dan Slott"
    ],
    note: "The best of Marvel's street-level heroes — no capes required."
  },
  {
    universe: 'mv',
    title: "Doctor Doom: Villain to Icon",
    color: '#9b59b6',
    steps: [
      "Fantastic Four by Lee/Kirby (debut)",
      "Books of Doom (2005)",
      "Fantastic Four #570–588 — Jonathan Hickman",
      "FF #1–23 — Jonathan Hickman",
      "Infamous Iron Man (2016) — Brian Michael Bendis",
      "Doctor Doom and the Masters of Evil"
    ],
    note: "Victor Von Doom — from Silver Age villain to one of Marvel's greatest characters."
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
      <button class="essentials-char-btn" onclick='selectChar(${JSON.stringify(c).replace(/'/g, "&#39;")}, "dc")'>${c.name}</button>
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

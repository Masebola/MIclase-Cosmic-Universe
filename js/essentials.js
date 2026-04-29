// js/essentials.js

const DC_CHARACTERS = [
  {
    name: "Batman",
    initial: "B",
    alias: "Bruce Wayne",
    tags: ["Gotham", "Justice League"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Foundations: Year One (Batman #404–407) — Miller & Mazzucchelli",
      "Foundations: The Man Who Laughs — Ed Brubaker",
      "Foundations: The Long Halloween — Loeb & Sale",
      "Foundations: Dark Victory — Loeb & Sale",
      "Core: A Death in the Family (Batman #426–429)",
      "Core: Knightfall Saga",
      "Core: No Man’s Land",
      "Gotham Collapse: Bruce Wayne: Murderer? / Fugitive",
      "Gotham Collapse: War Games",
      "Modern: Hush — Loeb & Lee",
      "Modern: Resurrection of Ra’s al Ghul"
    ]
  },
  {
    name: "Superman",
    initial: "S",
    alias: "Clark Kent",
    tags: ["Metropolis", "Justice League"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Birthright — Mark Waid",
      "Man of Steel — John Byrne",
      "For All Seasons — Loeb & Sale",
      "All-Star Superman — Grant Morrison",
      "For Tomorrow — Azzarello & Lee",
      "Up, Up and Away! — Johns & Busiek"
    ]
  },
  {
    name: "Wonder Woman",
    initial: "W",
    alias: "Diana Prince",
    tags: ["Themyscira", "Justice League"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Wonder Woman (1987) #1–62 — George Pérez",
      "Wonder Woman (2003) — Greg Rucka",
      "The Hiketeia",
      "Wonder Woman (2011) #1–35 — Brian Azzarello",
      "Wonder Woman Rebirth — Rucka",
      "Wonder Woman (2007–2010) — Gail Simone"
    ]
  },
  {
    name: "Green Lantern (Hal Jordan)",
    initial: "H",
    alias: "Hal Jordan",
    tags: ["Cosmic", "Justice League"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Emerald Dawn I & II",
      "Rebirth — Geoff Johns",
      "Secret Origin",
      "Sinestro Corps War",
      "Blackest Night",
      "Green Lantern by Geoff Johns #1–67"
    ]
  },
  {
    name: "Green Lantern (Kyle Rayner)",
    initial: "K",
    alias: "Kyle Rayner",
    tags: ["Cosmic", "Justice League"],
    phases: [2, 3, 4, 5],
    essentials: [
      "Green Lantern (1994) #48–125",
      "The Final Night",
      "Circle of Fire",
      "The Power of Ion",
      "Ion (2006–2007)",
      "Omega Men — Tom King"
    ]
  },
  {
    name: "The Flash (Wally West)",
    initial: "W",
    alias: "Wally West",
    tags: ["Central City", "Titans"],
    phases: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    essentials: [
      "Born to Run — Mark Waid",
      "Terminal Velocity",
      "The Return of Barry Allen",
      "Into the Abyss (The Flash 1987 Issue #58)",
      "Linda and Wally's Mission (The Flash #103–104 - Wally finds Linda, they battle a wolf)",
      "Blitz"
    ]
  },
  {
    name: "The Flash (Barry Allen)",
    initial: "B",
    alias: "Barry Allen",
    tags: ["Central City", "Justice League"],
    phases: [4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Flash: Rebirth — Geoff Johns",
      "Flashpoint",
      "The Dastardly Death of the Rogues",
      "Lightning Strikes Twice"
    ]
  },
  {
    name: "Aquaman",
    initial: "A",
    alias: "Arthur Curry",
    tags: ["Atlantis", "Justice League"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Aquaman (1994) by Peter David",
      "Aquaman (2011) #1–25 — Geoff Johns",
      "Throne of Atlantis",
      "Aquaman Rebirth — Dan Abnett",
      "Aquaman (2015) — Jeff Parker"
    ]
  },
  {
    name: "Green Arrow & Black Canary",
    initial: "G",
    alias: "Oliver Queen & Dinah Lance",
    tags: ["Star City", "Birds of Prey"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "The Longbow Hunters — Mike Grell",
      "Green Arrow (1988) #1–80",
      "Green Arrow (2001) — Kevin Smith",
      "Green Arrow (2003–2007) — Judd Winick",
      "Green Arrow Rebirth",
      "Birds of Prey (Oracle & Canary era)"
    ]
  },
  {
    name: "Shazam / Black Adam",
    initial: "S",
    alias: "Billy Batson / Teth-Adam",
    tags: ["Magic", "JSA"],
    phases: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Power of Shazam (1994) — Jerry Ordway",
      "JSA by Geoff Johns",
      "52 (Weekly Series)",
      "Shazam! (2013)",
      "Black Adam: The Dark Age"
    ]
  },
  {
    name: "Justice League",
    initial: "J",
    alias: "JLA",
    tags: ["Team", "Core"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "JLA #1–41 — Grant Morrison",
      "Tower of Babel — Mark Waid",
      "Justice League (2011) #1–50 — Geoff Johns",
      "Justice League International",
      "Justice League Dark (2011)",
      "Justice League Rebirth"
    ]
  },
  {
    name: "Justice Society of America",
    initial: "J",
    alias: "JSA",
    tags: ["Team", "Legacy"],
    phases: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "JSA (1999) — Geoff Johns",
      "JSA: The Golden Age — James Robinson",
      "Justice Society of America: The Next Age"
    ]
  },
  {
    name: "Nightwing",
    initial: "N",
    alias: "Dick Grayson",
    tags: ["Blüdhaven", "Bat-Family"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "A Knight in Blüdhaven (Nightwing #1–8)",
      "The Judas Contract",
      "The Black Mirror (Detective Comics #871–881)",
      "Batman & Robin (Dick as Batman) — Grant Morrison",
      "Grayson",
      "Leaping Into the Light (Nightwing #78–83)"
    ]
  },
  {
    name: "Barbara Gordon",
    initial: "B",
    alias: "Batgirl / Oracle",
    tags: ["Gotham", "Birds of Prey"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Batgirl: Year One",
      "The Killing Joke",
      "Birds of Prey (Oracle/Black Canary era)",
      "Birds of Prey: Manhunt",
      "Black Canary/Oracle: Birds of Prey"
    ]
  },
  {
    name: "Bat-Family (Tim, Cass, Steph)",
    initial: "B",
    alias: "Robin / Batgirl",
    tags: ["Gotham", "Legacy"],
    phases: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Cassandra: Batgirl #1–6: Silent Knight",
      "Cassandra: Batgirl #25–37: A Knight Alone",
      "Cassandra: Shadow of the Batgirl",
      "Stephanie: Batgirl Rising (#1–7)",
      "Stephanie: The Flood (#9–14)",
      "Stephanie: The Lesson (#15–24)",
      "Tim: Robin (1993) full run",
      "Tim: Young Justice (1998–2003)",
      "Tim: Teen Titans (2003)",
      "Tim: Red Robin (2009)"
    ]
  },
  {
    name: "Richard Dragon & Lady Shiva",
    initial: "R",
    alias: "Martial Artists",
    tags: ["Street Level"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Richard Dragon, Kung Fu Fighter #1–18",
      "The Question (1987) #1–36",
      "Birds of Prey #56–67",
      "Batgirl #73",
      "Batman: Brotherhood of the Fist"
    ]
  },
  {
    name: "Teen Titans",
    initial: "T",
    alias: "Titans / Young Justice",
    tags: ["Team", "Legacy"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Original: New Teen Titans (1980) — Wolfman & Pérez",
      "Original: The Judas Contract",
      "Original: Teen Titans: Year One",
      "Original: Titans (1999–2003)",
      "Legacy: Young Justice #1–55 — Peter David",
      "Legacy: Teen Titans (2003) #1–100 — Geoff Johns"
    ]
  },
  {
    name: "Sandman",
    initial: "S",
    alias: "Dream / Morpheus",
    tags: ["Vertigo", "Magic"],
    phases: [1, 2, 3, 4],
    essentials: [
      "Preludes & Nocturnes (#1–8)",
      "The Doll’s House (#9–16)",
      "Season of Mists (#21–28)",
      "Brief Lives (#41–49)"
    ]
  },
  {
    name: "John Constantine",
    initial: "J",
    alias: "Hellblazer",
    tags: ["Vertigo", "Magic"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "Hellblazer #1–300",
      "Original Sins (#1–9)",
      "Dangerous Habits (#41–46)",
      "Hard Time (#146–150)"
    ]
  },
  {
    name: "New Gods",
    initial: "N",
    alias: "Fourth World",
    tags: ["Cosmic"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    essentials: [
      "New Gods (1971) — Jack Kirby",
      "Mister Miracle (1971)",
      "Orion (2000–2002) — Walt Simonson",
      "The Fourth World Omnibus",
      "Death of the New Gods",
      "Final Crisis"
    ]
  }
];

const MARVEL_CHARACTERS = [
  {
    name: "Avengers",
    initial: "A",
    alias: "Earth's Mightiest",
    tags: ["Team", "Core"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Avengers Disassembled",
      "New Avengers: Breakout",
      "The Ultimates",
      "Avengers by Kurt Busiek",
      "Avengers by Jonathan Hickman",
      "Secret Wars"
    ]
  },
  {
    name: "X-Men",
    initial: "X",
    alias: "Mutants",
    tags: ["Team", "Mutants"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Dark Phoenix Saga (Uncanny #129–137)",
      "Days of Future Past (Uncanny #141–142)",
      "New X-Men — Grant Morrison",
      "Astonishing X-Men",
      "House of X / Powers of X"
    ]
  },
  {
    name: "Spider-Man",
    initial: "S",
    alias: "Peter Parker",
    tags: ["Street Level", "Avengers"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "The Night Gwen Stacy Died (ASM #121–122)",
      "Kraven’s Last Hunt",
      "The Clone Saga",
      "Big Time (ASM #648–656)",
      "Spider-Man: Blue"
    ]
  },
  {
    name: "Fantastic Four",
    initial: "F",
    alias: "First Family",
    tags: ["Team", "Cosmic"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Fantastic Four #1–10",
      "The Galactus Trilogy (FF #48–50)",
      "Fantastic Four by Mark Waid",
      "Fantastic Four by Jonathan Hickman"
    ]
  },
  {
    name: "Thor",
    initial: "T",
    alias: "God of Thunder",
    tags: ["Asgard", "Avengers"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Thor #337–382 — Walt Simonson",
      "Thor (2007) #1–12",
      "Thor: God of Thunder #1–25 — Jason Aaron"
    ]
  },
  {
    name: "Captain America",
    initial: "C",
    alias: "Steve Rogers",
    tags: ["Avengers", "Espionage"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Winter Soldier",
      "Man Out of Time",
      "Death of Captain America",
      "The Ultimates"
    ]
  },
  {
    name: "Iron Man",
    initial: "I",
    alias: "Tony Stark",
    tags: ["Avengers", "Tech"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Demon in a Bottle (#120–128)",
      "Armor Wars",
      "Extremis (#1–6)",
      "The Five Nightmares (#1–7)"
    ]
  },
  {
    name: "Daredevil",
    initial: "D",
    alias: "Matt Murdock",
    tags: ["Street Level", "Defenders"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "The Man Without Fear",
      "Born Again (#227–233)",
      "Daredevil Vol. 2 #26–50, #56–81",
      "Daredevil by Mark Waid #1–36"
    ]
  },
  {
    name: "Wolverine",
    initial: "W",
    alias: "Logan",
    tags: ["Mutants", "X-Men"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Wolverine (1982) #1–4",
      "Weapon X (Marvel Comics Presents #72–84)",
      "Old Man Logan",
      "Wolverine and the X-Men"
    ]
  },
  {
    name: "Black Panther",
    initial: "B",
    alias: "T'Challa",
    tags: ["Wakanda", "Avengers"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Black Panther (1998) #1–33 — Christopher Priest",
      "A Nation Under Our Feet — Ta-Nehisi Coates",
      "Black Panther (2016) #1–18"
    ]
  },
  {
    name: "Venom",
    initial: "V",
    alias: "Eddie Brock",
    tags: ["Spider-Verse", "Cosmic"],
    phases: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Birth of Venom (ASM #298–300)",
      "Lethal Protector",
      "Venom by Donny Cates #1–35"
    ]
  },
  {
    name: "Nova",
    initial: "N",
    alias: "Richard Rider",
    tags: ["Cosmic"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Nova (1976) #1–25",
      "Annihilation: Nova #1–4",
      "Nova (2007) #1–25"
    ]
  },
  {
    name: "Jessica Jones",
    initial: "J",
    alias: "Jewel",
    tags: ["Street Level", "Defenders"],
    phases: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Alias #1–28",
      "The Pulse #1–14",
      "Jessica Jones (2016) #1–18"
    ]
  },
  {
    name: "Doctor Doom",
    initial: "D",
    alias: "Victor Von Doom",
    tags: ["Villain", "Latveria"],
    phases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    essentials: [
      "Books of Doom",
      "Fantastic Four #570–588 — Jonathan Hickman",
      "FF #1–23",
      "Doctor Doom and the Masters of Evil"
    ]
  }
];

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

// roster.js — Character data for DC and Marvel

const DC_CHARACTERS = [
  { name: "Batman", alias: "Bruce Wayne", initial: "B", tags: ["Bat-Family", "Gotham", "Detective"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["Batman: Year One", "Batman: The Long Halloween", "Batman: Hush", "Batman: The Court of Owls", "Batman: The Killing Joke"] },
  { name: "Superman", alias: "Clark Kent / Kal-El", initial: "S", tags: ["Super-Family", "Metropolis", "Kryptonian"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["Superman: The Man of Steel", "Death and Return of Superman", "Superman: Brainiac", "Superman: Rebirth"] },
  { name: "Wonder Woman", alias: "Diana Prince", initial: "W", tags: ["Justice League", "Amazon", "Mythic"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["Wonder Woman: Gods and Mortals", "Wonder Woman: The Hiketeia", "Wonder Woman: The Lies by Rucka"] },
  { name: "The Flash (Barry Allen)", alias: "Barry Allen", initial: "F", tags: ["Flash Family", "Speed Force", "Justice League"], phases: [0,1,4,5,6,7,8,9], essentials: ["The Flash: Rebirth", "Blackest Night: The Flash", "DC Universe: Rebirth"] },
  { name: "The Flash (Wally West)", alias: "Wally West", initial: "W", tags: ["Flash Family", "Speed Force", "Legacy"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["The Flash by Mark Waid", "Flash: Terminal Velocity", "DC Universe: Rebirth #1"] },
  { name: "Green Lantern (Hal Jordan)", alias: "Hal Jordan", initial: "H", tags: ["Green Lantern Corps", "Cosmic", "Justice League"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["Green Lantern: Emerald Dawn", "Green Lantern: Rebirth", "Blackest Night"] },
  { name: "Green Lantern (Kyle Rayner)", alias: "Kyle Rayner", initial: "K", tags: ["Green Lantern Corps", "Cosmic"], phases: [2,3,4,5,6], essentials: ["Green Lantern: A New Dawn", "Green Lantern: New Guardians"] },
  { name: "Nightwing", alias: "Dick Grayson", initial: "N", tags: ["Bat-Family", "Titans", "Blüdhaven"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["Judas Contract", "Nightwing Vol. 2 by Dixon", "Nightwing Vol. 4 by Tom Taylor"] },
  { name: "Robin / Red Robin", alias: "Tim Drake", initial: "T", tags: ["Bat-Family", "Detectives", "Young Justice"], phases: [1,2,3,4,5,6,7,8], essentials: ["Batman: A Lonely Place of Dying", "Robin Vol. 4", "Detective Comics #934-981"] },
  { name: "Red Hood", alias: "Jason Todd", initial: "J", tags: ["Bat-Family", "Anti-Hero", "Outlaws"], phases: [1,3,4,5,6,7,8,9], essentials: ["Batman: A Death in the Family", "Batman: Under the Hood", "Red Hood: The Lost Days"] },
  { name: "Batgirl (Barbara Gordon)", alias: "Barbara Gordon / Oracle", initial: "B", tags: ["Bat-Family", "Birds of Prey", "Oracle"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["The Killing Joke", "Birds of Prey by Gail Simone", "Batgirl Vol. 4 by Gail Simone"] },
  { name: "Batgirl (Cassandra Cain)", alias: "Cassandra Cain", initial: "C", tags: ["Bat-Family", "Martial Arts", "No Man's Land"], phases: [2,3,4,5,6,7,8], essentials: ["Batman: No Man's Land", "Batgirl Vol. 1 by Kelley Puckett", "Detective Comics #934-981"] },
  { name: "Batgirl (Stephanie Brown)", alias: "Stephanie Brown", initial: "S", tags: ["Bat-Family", "Spoiler", "Rebirth"], phases: [2,3,4,5,6,7,8], essentials: ["Batman: War Games", "Batgirl Vol. 3 by Bryan Q. Miller", "Batgirls (2021)"] },
  { name: "Damian Wayne", alias: "Robin / Son of Batman", initial: "D", tags: ["Bat-Family", "League of Assassins", "Robin"], phases: [3,4,5,6,7,8,9], essentials: ["Batman & Son", "Batman & Robin by Morrison", "Robin Vol. 5"] },
  { name: "Catwoman", alias: "Selina Kyle", initial: "S", tags: ["Gotham", "Anti-Hero", "Bat-Family"], phases: [0,2,3,4,5,6,7,8,9], essentials: ["Catwoman Vol. 3 by Brubaker", "Batman: Hush", "Batman: The Wedding"] },
  { name: "Batwoman", alias: "Kate Kane", initial: "K", tags: ["Bat-Family", "Gotham", "LGBT+"], phases: [5,6,7,8,9], essentials: ["Batwoman by J.H. Williams III", "Detective Comics #934-981"] },
  { name: "Green Arrow", alias: "Oliver Queen", initial: "O", tags: ["Archers", "Street Level", "Star City"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["Green Arrow: The Longbow Hunters", "Green Arrow: Quiver by Kevin Smith", "Green Arrow: Rebirth by Percy"] },
  { name: "Black Canary", alias: "Dinah Lance", initial: "D", tags: ["Birds of Prey", "Martial Arts", "Justice League"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["Birds of Prey by Gail Simone", "Green Arrow/Black Canary"] },
  { name: "Aquaman", alias: "Arthur Curry", initial: "A", tags: ["Atlantis", "Justice League", "Cosmic"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["Aquaman by Peter David", "Aquaman: The Trench (New 52)", "Brightest Day"] },
  { name: "Harley Quinn", alias: "Harleen Quinzel", initial: "H", tags: ["Gotham", "Anti-Hero", "Villain"], phases: [2,3,4,5,6,7,8,9], essentials: ["Gotham City Sirens", "Harley Quinn Vol. 2 (New 52)", "Harley Quinn Vol. 3 (Rebirth)"] },
  { name: "Poison Ivy", alias: "Pamela Isley", initial: "P", tags: ["Gotham", "Eco-Terrorism", "Villain"], phases: [2,5,6,7,8,9], essentials: ["Gotham City Sirens", "Batman: One Bad Day – Poison Ivy"] },
  { name: "Lex Luthor", alias: "Alexander Luthor", initial: "L", tags: ["Villain", "Metropolis", "Genius"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["Superman: Birthright", "Forever Evil", "Justice League: The Totality"] },
  { name: "Joker", alias: "The Joker", initial: "J", tags: ["Villain", "Gotham", "Batman"], phases: [0,1,2,3,4,5,6,7,8,9], essentials: ["Batman: The Killing Joke", "Batman: Death of the Family", "Batman: The Joker War"] },
  { name: "Deathstroke", alias: "Slade Wilson", initial: "S", tags: ["Villain", "Mercenary", "Titans"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["Judas Contract", "Identity Crisis", "Deathstroke Vol. 4 by Christopher Priest"] },
  { name: "Supergirl", alias: "Kara Zor-El", initial: "K", tags: ["Super-Family", "Kryptonian", "Legacy"], phases: [3,4,5,6,7,8,9], essentials: ["Supergirl by Sterling Gates", "Supergirl: Woman of Tomorrow"] },
  { name: "Cyborg", alias: "Victor Stone", initial: "V", tags: ["Teen Titans", "Technology", "Justice League"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["Teen Titans Vol. 3 by Geoff Johns", "Justice League: Origin (New 52)"] },
  { name: "Raven", alias: "Rachel Roth", initial: "R", tags: ["Teen Titans", "Magic", "Trigon"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["Teen Titans by Wolfman/Pérez", "Teen Titans Vol. 3 by Geoff Johns"] },
  { name: "Starfire", alias: "Koriand'r", initial: "K", tags: ["Teen Titans", "Alien", "Tamaranean"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["New Teen Titans by Wolfman/Pérez", "Red Hood and the Outlaws"] },
  { name: "Beast Boy", alias: "Garfield Logan", initial: "G", tags: ["Teen Titans", "Shapeshifter"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["New Teen Titans by Wolfman/Pérez", "Doom Patrol"] },
  { name: "Booster Gold", alias: "Michael Jon Carter", initial: "B", tags: ["Time Travel", "JLI", "52"], phases: [1,2,3,4,5,6], essentials: ["Justice League International", "52", "Blue and Gold"] },
  { name: "Blue Beetle (Ted Kord)", alias: "Ted Kord", initial: "T", tags: ["JLI", "Inventor", "Legacy"], phases: [1,2,3], essentials: ["Justice League International", "Countdown to Infinite Crisis"] },
  { name: "Blue Beetle (Jaime Reyes)", alias: "Jaime Reyes", initial: "J", tags: ["Legacy", "Scarab", "El Paso"], phases: [3,4,5,6,7,8,9], essentials: ["Blue Beetle (2006) by John Rogers", "Teen Titans Vol. 3"] },
  { name: "Donna Troy", alias: "Donna Troy / Troia", initial: "D", tags: ["Titans", "Wonder Woman Legacy"], phases: [0,1,2,3,4,5,6,7,8], essentials: ["New Teen Titans by Wolfman/Pérez", "Titans (2016) by Dan Abnett"] },
  { name: "Wally West (Kid Flash)", alias: "Wally West", initial: "W", tags: ["Young Justice", "Flash Family", "Legacy"], phases: [7,8,9], essentials: ["DC Universe: Rebirth #1", "Titans Vol. 3 by Dan Abnett"] },
  { name: "Darkseid", alias: "Uxas", initial: "D", tags: ["Villain", "New Gods", "Cosmic"], phases: [0,2,3,4,5,6,7,8,9], essentials: ["Jack Kirby's Fourth World Omnibus", "Final Crisis", "Justice League: The Darkseid War"] },
  { name: "The Sandman (Dream)", alias: "Morpheus / Daniel Hall", initial: "M", tags: ["Vertigo", "Endless", "Cosmic"], phases: [1,2,3,4], essentials: ["The Sandman Vol. 1-10 by Neil Gaiman"] },
  { name: "John Constantine", alias: "John Constantine", initial: "J", tags: ["Magic", "Vertigo", "Anti-Hero"], phases: [1,2,3,4,5,6,7,8,9], essentials: ["Swamp Thing by Alan Moore", "Hellblazer by Jamie Delano", "Justice League Dark"] },
  { name: "Zatanna", alias: "Zatanna Zatara", initial: "Z", tags: ["Magic", "Justice League Dark"], phases: [2,4,5,6,7,8,9], essentials: ["Justice League Dark Vol. 2", "Zatanna by Paul Dini"] },
  { name: "Black Lightning", alias: "Jefferson Pierce", initial: "J", tags: ["Justice League", "Street Level"], phases: [4,5,6,7,8,9], essentials: ["Justice League: Cry for Justice", "DC: Infinite Frontier"] },
  { name: "Shazam", alias: "Billy Batson / Captain Marvel", initial: "S", tags: ["Magic", "Legacy", "Justice League"], phases: [1,5,6,7,8,9], essentials: ["Legends (1986)", "Shazam! by Geoff Johns (New 52)"] },
];

const MARVEL_CHARACTERS = [
  { name: "Spider-Man", alias: "Peter Parker", initial: "P", tags: ["Street Level", "New York", "Avengers"], phases: [0,1,2,3,4,5,6,7,8,9,10], essentials: ["Amazing Spider-Man by Lee/Ditko", "Spider-Man: Kraven's Last Hunt", "Daredevil by Bendis & Maleev"] },
  { name: "Iron Man", alias: "Tony Stark", initial: "T", tags: ["Avengers", "Technology", "Billionaire"], phases: [0,1,2,3,4,5,6,7,8,9,10], essentials: ["Iron Man: Demon in a Bottle", "Iron Man: Armor Wars", "Civil War", "Invincible Iron Man by Fraction"] },
  { name: "Captain America", alias: "Steve Rogers", initial: "S", tags: ["Avengers", "WWII", "Super-Soldier"], phases: [0,2,3,4,5,6,7,8,9,10], essentials: ["Captain America by Brubaker", "Civil War", "Secret Invasion"] },
  { name: "Thor", alias: "Thor Odinson", initial: "T", tags: ["Avengers", "Asgard", "Cosmic"], phases: [0,1,2,3,4,5,6,7,8,9,10], essentials: ["Thor: God of Thunder by Aaron", "The Mighty Thor", "Thor by Donny Cates", "Immortal Thor by Ewing"] },
  { name: "Hulk", alias: "Bruce Banner", initial: "B", tags: ["Avengers", "Gamma", "Monster"], phases: [0,1,2,3,4,5,6,7,8,9,10], essentials: ["Planet Hulk", "World War Hulk", "Immortal Hulk by Al Ewing"] },
  { name: "Black Widow", alias: "Natasha Romanoff", initial: "N", tags: ["Avengers", "Spy", "S.H.I.E.L.D."], phases: [4,5,6,7,8,9,10], essentials: ["Alias by Brian Michael Bendis", "New Avengers by Bendis"] },
  { name: "Hawkeye", alias: "Clint Barton", initial: "C", tags: ["Avengers", "Archer", "Street Level"], phases: [4,5,6,7,8,9,10], essentials: ["Hawkeye by Matt Fraction & David Aja"] },
  { name: "Wolverine", alias: "Logan / James Howlett", initial: "L", tags: ["X-Men", "Berserker", "Immortal"], phases: [2,3,4,5,6,7,8,9,10], essentials: ["Wolverine (1982) by Frank Miller", "Old Man Logan", "Wolverine by Percy"] },
  { name: "Cyclops", alias: "Scott Summers", initial: "S", tags: ["X-Men", "Mutant", "X-Leader"], phases: [0,2,3,4,5,6,7,8,9,10], essentials: ["X-Men: Dark Phoenix Saga", "X-Men: Days of Future Past", "House of X / Powers of X"] },
  { name: "Jean Grey", alias: "Jean Grey / Phoenix", initial: "J", tags: ["X-Men", "Telepath", "Phoenix Force"], phases: [0,2,3,4,5,6,7,8,9,10], essentials: ["X-Men: Dark Phoenix Saga", "Phoenix Endsong", "House of X"] },
  { name: "Professor X", alias: "Charles Xavier", initial: "C", tags: ["X-Men", "Telepath", "Mutant Leader"], phases: [0,2,3,4,5,6,7,8,9,10], essentials: ["X-Men: Dark Phoenix Saga", "New X-Men by Morrison", "House of X / Powers of X"] },
  { name: "Magneto", alias: "Max Eisenhardt", initial: "M", tags: ["X-Men", "Villain", "Mutant Leader"], phases: [0,2,3,4,5,6,7,8,9,10], essentials: ["X-Men: God Loves, Man Kills", "House of M", "House of X"] },
  { name: "Storm", alias: "Ororo Munroe", initial: "O", tags: ["X-Men", "Weather", "Wakanda"], phases: [2,3,4,5,6,7,8,9,10], essentials: ["X-Men: Dark Phoenix Saga", "House of X", "Storm by Warren Ellis"] },
  { name: "Daredevil", alias: "Matt Murdock", initial: "M", tags: ["Street Level", "Lawyer", "New York"], phases: [2,4,5,6,7,8,9,10], essentials: ["Daredevil: Born Again", "Daredevil by Bendis & Maleev", "Daredevil by Mark Waid"] },
  { name: "Doctor Strange", alias: "Stephen Strange", initial: "S", tags: ["Magic", "Sorcerer Supreme", "Cosmic"], phases: [0,4,5,6,7,8,9,10], essentials: ["Strange Tales (Lee/Ditko)", "Doctor Strange by Jason Aaron", "Strange (2022) by MacKay"] },
  { name: "Black Panther", alias: "T'Challa", initial: "T", tags: ["Avengers", "Wakanda", "Royalty"], phases: [4,5,6,7,8,9,10], essentials: ["Black Panther by Christopher Priest", "Black Panther by Ta-Nehisi Coates"] },
  { name: "Captain Marvel", alias: "Carol Danvers", initial: "C", tags: ["Avengers", "Cosmic", "Air Force"], phases: [5,6,7,8,9,10], essentials: ["Captain Marvel by Kelly Sue DeConnick", "Captain Marvel by Kelly Thompson"] },
  { name: "Silver Surfer", alias: "Norrin Radd", initial: "N", tags: ["Cosmic", "Power Cosmic", "Heralds"], phases: [0,1,2,3,7,8,9,10], essentials: ["Silver Surfer #1-18 (1968)", "Silver Surfer: Rebirth of Thanos", "Silver Surfer: Black by Cates"] },
  { name: "Thanos", alias: "Thanos of Titan", initial: "T", tags: ["Villain", "Cosmic", "Infinity Gems"], phases: [0,2,3,4,7,8,9,10], essentials: ["Thanos Quest", "The Infinity Gauntlet", "Thanos Imperative", "Donny Cates' Thanos"] },
  { name: "Galactus", alias: "Galactus / Galan", initial: "G", tags: ["Cosmic", "World Devourer", "Herald"], phases: [0,2,6,8,9,10], essentials: ["Fantastic Four: Galactus Trilogy", "Silver Surfer (1968)", "Ultimates by Al Ewing"] },
  { name: "Scarlet Witch", alias: "Wanda Maximoff", initial: "W", tags: ["Avengers", "Magic", "Reality"], phases: [1,2,3,4,6,7,8,9,10], essentials: ["House of M", "Avengers: Disassembled", "The Vision by Tom King"] },
  { name: "The Vision", alias: "Victor Shade", initial: "V", tags: ["Avengers", "Synthezoid", "Robot"], phases: [1,2,6,7,8,9,10], essentials: ["The Vision (2015) by Tom King", "Avengers: The Korvac Saga"] },
  { name: "Punisher", alias: "Frank Castle", initial: "F", tags: ["Street Level", "Anti-Hero", "Vigilante"], phases: [2,4,5,6,9,10], essentials: ["Punisher (2000) by Ennis & Dillon", "Punisher MAX by Garth Ennis"] },
  { name: "Moon Knight", alias: "Marc Spector", initial: "M", tags: ["Anti-Hero", "Mental Health", "Khonshu"], phases: [2,4,9,10], essentials: ["Moon Knight (1980) by Moench", "Moon Knight by Jeff Lemire", "Moon Knight by Mackay"] },
  { name: "She-Hulk", alias: "Jennifer Walters", initial: "J", tags: ["Avengers", "Lawyer", "Gamma"], phases: [4,6,7,8,9,10], essentials: ["She-Hulk by Dan Slott", "She-Hulk by Charles Soule"] },
  { name: "Guardians of the Galaxy", alias: "Star-Lord / Gamora / Drax / Rocket / Groot", initial: "G", tags: ["Cosmic", "Space", "Team"], phases: [4,5,6,9,10], essentials: ["Annihilation", "Guardians (2008) by Abnett & Lanning", "Guardians (2020) by Al Ewing"] },
  { name: "Nova", alias: "Richard Rider", initial: "R", tags: ["Cosmic", "Nova Corps"], phases: [4,5,9,10], essentials: ["Nova (2007) by Abnett & Lanning", "Annihilation"] },
  { name: "Venom", alias: "Eddie Brock / Symbiote", initial: "E", tags: ["Anti-Hero", "Symbiote", "Spider-Man"], phases: [2,4,9,10], essentials: ["Alien Costume Saga", "Venom by Donny Cates", "King in Black"] },
  { name: "Jessica Jones", alias: "Jessica Jones", initial: "J", tags: ["Street Level", "P.I.", "Avengers"], phases: [4,5,6,7,8,9,10], essentials: ["Alias by Brian Michael Bendis", "New Avengers"] },
  { name: "Mr. Fantastic", alias: "Reed Richards", initial: "R", tags: ["Fantastic Four", "Science", "Intellect"], phases: [0,1,2,3,4,5,6,7,8,9,10], essentials: ["Fantastic Four by Lee/Kirby", "Fantastic Four by Jonathan Hickman"] },
  { name: "Invisible Woman", alias: "Susan Storm Richards", initial: "S", tags: ["Fantastic Four", "Force Fields"], phases: [0,1,2,3,4,5,6,7,8,9,10], essentials: ["Fantastic Four by Lee/Kirby", "Fantastic Four by Jonathan Hickman"] },
  { name: "Doctor Doom", alias: "Victor Von Doom", initial: "V", tags: ["Villain", "Latveria", "Science & Magic"], phases: [0,1,2,3,4,5,6,7,8,9,10], essentials: ["Fantastic Four by Lee/Kirby", "Infamous Iron Man (2016)", "Hickman's FF"] },
];

// Render functions
function renderRosterPage() {
  let currentUniverse = 'dc';

  function getPageEl(id) { return document.getElementById(id); }

  const dcBtn = getPageEl('btn-dc-universe');
  const mvBtn = getPageEl('btn-mv-universe');
  const dcPanel = getPageEl('dc-roster-panel');
  const mvPanel = getPageEl('mv-roster-panel');
  const searchInput = getPageEl('roster-search');

  function switchUniverse(u) {
    if (currentUniverse === u) return;
    currentUniverse = u;
    dcBtn.className = 'universe-btn' + (u === 'dc' ? ' dc-active' : '');
    mvBtn.className = 'universe-btn' + (u === 'mv' ? ' mv-active' : '');
    if (typeof flipToUniverse === 'function') {
      flipToUniverse(u);
    } else {
      dcPanel.classList.toggle('hidden', u !== 'dc');
      mvPanel.classList.toggle('hidden', u !== 'mv');
    }
    const searchInput = document.getElementById('roster-search');
    if (searchInput) { searchInput.value = ''; }
    
    // Scroll to top of roster section smoothly
    const switchBar = document.querySelector('.universe-switch-bar');
    if (switchBar) {
      switchBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  dcBtn.addEventListener('click', () => switchUniverse('dc'));
  mvBtn.addEventListener('click', () => switchUniverse('mv'));

  // Render DC
  renderCharacterGrid('dc-roster-panel', DC_CHARACTERS, 'dc');
  renderCharacterGrid('mv-roster-panel', MARVEL_CHARACTERS, 'mv');

  // Switch bar default
  switchUniverse('dc');

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const chars = currentUniverse === 'dc' ? DC_CHARACTERS : MARVEL_CHARACTERS;
      filterCharacters(currentUniverse, chars, q);
    });
  }

  // Modal
  setupCharacterModal();
}

function renderCharacterGrid(containerId, chars, universe) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = chars.map((c, i) => `
    <div class="glass-card character-card animate-in" data-char="${i}" data-universe="${universe}" style="animation-delay:${i*0.03}s">
      <div class="character-initial ${universe}-char">${c.initial}</div>
      <div class="character-name">${c.name}</div>
      <div class="character-alias">${c.alias}</div>
      <div class="character-tags">
        ${c.tags.map(t => `<span class="character-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Attach click events
  el.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.char);
      const universe = card.dataset.universe;
      const charData = universe === 'dc' ? DC_CHARACTERS[idx] : MARVEL_CHARACTERS[idx];
      openCharacterModal(charData, universe);
    });
  });

  // Trigger scroll reveal
  setTimeout(() => {
    el.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 100);
}

function filterCharacters(universe, chars, query) {
  const containerId = universe === 'dc' ? 'dc-roster-panel' : 'mv-roster-panel';
  const filtered = query ? chars.filter(c =>
    c.name.toLowerCase().includes(query) ||
    c.alias.toLowerCase().includes(query) ||
    c.tags.some(t => t.toLowerCase().includes(query))
  ) : chars;
  renderCharacterGrid(containerId, filtered, universe);
}

function openCharacterModal(char, universe) {
  const modal = document.getElementById('character-modal');
  const color = universe === 'dc' ? 'var(--dc-secondary)' : 'var(--mv-secondary)';
  const colorClass = universe === 'dc' ? 'dc-char' : 'mv-char';

  document.getElementById('modal-char-initial').className = `character-initial ${colorClass}`;
  document.getElementById('modal-char-initial').textContent = char.initial;
  document.getElementById('modal-char-name').textContent = char.name;
  document.getElementById('modal-char-alias').textContent = char.alias;
  document.getElementById('modal-char-tags').innerHTML = char.tags.map(t => `<span class="character-tag">${t}</span>`).join('');
  document.getElementById('modal-char-essentials').innerHTML = char.essentials ?
    `<h4 style="font-family:var(--font-heading);font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:${color};margin-bottom:0.75rem;">Essential Reading</h4>
     <ul style="list-style:none;display:flex;flex-direction:column;gap:0.4rem;">
       ${char.essentials.map(e => `<li style="font-size:0.85rem;color:var(--text-secondary);padding:0.4rem 0.75rem;background:var(--bg-glass);border-radius:6px;border:1px solid var(--border-glass);">📖 ${e}</li>`).join('')}
     </ul>` : '';

  document.getElementById('modal-char-phases').innerHTML = char.phases ?
    `<p style="margin-top:1rem;font-size:0.8rem;color:var(--text-muted);">Appears in: ${char.phases.map(p => `Phase ${p}`).join(' · ')}</p>` : '';

  modal.classList.add('open');
}

function setupCharacterModal() {
  const modal = document.getElementById('character-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!modal) return;

  closeBtn?.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('open'); });
}

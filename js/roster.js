// roster.js — Character data for DC and Marvel

const DC_CHARACTERS = [
  {
    name: "Batman", alias: "Bruce Wayne", initial: "B",
    tags: ["Bat-Family", "Gotham", "Detective"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Batman: Year One (Batman #404–407) — Frank Miller & David Mazzucchelli",
      "Batman: The Man Who Laughs — Ed Brubaker",
      "Batman: The Long Halloween — Jeph Loeb & Tim Sale",
      "Batman: Dark Victory — Loeb & Sale",
      "Batman: A Death in the Family (Batman #426–429) — Jim Starlin",
      "Batman: Knightfall Saga (1993–1994)",
      "Batman: No Man's Land (1999)",
      "Batman: Bruce Wayne — Murderer? / Fugitive — Brubaker & Rucka",
      "Batman: War Games (2004)",
      "Batman: Hush — Loeb & Jim Lee",
      "Batman: Resurrection of Ra's al Ghul (2007)",
      "Batman: The Killing Joke — Alan Moore",
      "Batman: The Court of Owls — Scott Snyder & Greg Capullo",
      "Batman: Death of the Family",
      "Batman: The Joker War",
      "Batman: The Wedding (Tom King)"
    ]
  },
  {
    name: "Superman", alias: "Clark Kent / Kal-El", initial: "S",
    tags: ["Super-Family", "Metropolis", "Kryptonian"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Superman: Birthright — Mark Waid",
      "Superman: The Man of Steel — John Byrne",
      "Superman: For All Seasons — Loeb & Sale",
      "All-Star Superman — Grant Morrison",
      "Superman: For Tomorrow — Brian Azzarello & Jim Lee",
      "Superman: Up, Up and Away! — Geoff Johns & Kurt Busiek",
      "Death and Return of Superman",
      "Superman: Brainiac — Geoff Johns",
      "Superman: Rebirth by Peter Tomasi",
      "Superman: The Warworld Saga"
    ]
  },
  {
    name: "Wonder Woman", alias: "Diana Prince", initial: "W",
    tags: ["Justice League", "Amazon", "Mythic"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Wonder Woman (1987) #1–62 — George Pérez",
      "Wonder Woman: The Hiketeia — Greg Rucka",
      "Wonder Woman (2003) by Greg Rucka",
      "Wonder Woman (2011) #1–35 — Brian Azzarello",
      "Wonder Woman: Rebirth (2016) — Rucka",
      "Wonder Woman by Gail Simone (2007–2010)",
      "Wonder Woman: The Lies by Rucka"
    ]
  },
  {
    name: "The Flash (Barry Allen)", alias: "Barry Allen", initial: "F",
    tags: ["Flash Family", "Speed Force", "Justice League"],
    phases: [0,1,4,5,6,7,8,9],
    essentials: [
      "Flash: Rebirth (2009) — Geoff Johns",
      "Flashpoint (2011)",
      "The Dastardly Death of the Rogues (2011)",
      "Flash: Lightning Strikes Twice (2016)",
      "DC Universe: Rebirth"
    ]
  },
  {
    name: "The Flash (Wally West)", alias: "Wally West", initial: "W",
    tags: ["Flash Family", "Speed Force", "Legacy"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "The Flash: Born to Run — Mark Waid",
      "The Flash: Terminal Velocity (1995)",
      "The Flash: The Return of Barry Allen (1996)",
      "The Flash: Blitz (2003)",
      "DC Universe: Rebirth #1",
      "The Flash (Rebirth) by Joshua Williamson",
      "Titans: The Return of Wally West"
    ]
  },
  {
    name: "Green Lantern (Hal Jordan)", alias: "Hal Jordan", initial: "H",
    tags: ["Green Lantern Corps", "Cosmic", "Justice League"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Green Lantern: Emerald Dawn I & II (1989–1991)",
      "Green Lantern: Rebirth (2004) — Geoff Johns",
      "Green Lantern: Secret Origin (2008)",
      "Green Lantern: Sinestro Corps War (2007)",
      "Blackest Night (2009–2010)",
      "Green Lantern by Geoff Johns #1–67 (2005–2011)"
    ]
  },
  {
    name: "Green Lantern (Kyle Rayner)", alias: "Kyle Rayner", initial: "K",
    tags: ["Green Lantern Corps", "Cosmic"],
    phases: [2,3,4,5,6],
    essentials: [
      "Green Lantern (1994) #48–125",
      "The Final Night (1996)",
      "Circle of Fire (2000)",
      "The Power of Ion (2003)",
      "Ion (2006–2007)",
      "Green Lantern: New Guardians",
      "Omega Men (2015) — Tom King"
    ]
  },
  {
    name: "Nightwing", alias: "Dick Grayson", initial: "N",
    tags: ["Bat-Family", "Titans", "Blüdhaven"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "New Teen Titans: The Judas Contract (1984)",
      "Nightwing: A Knight in Blüdhaven (#1–8, 1996)",
      "Batman: The Black Mirror (Detective Comics #871–881) — Scott Snyder",
      "Batman & Robin (Dick as Batman, 2009–2011) — Grant Morrison",
      "Grayson (2014–2016)",
      "Nightwing: Leaping Into the Light (#78–83, 2021) — Tom Taylor",
      "Nightwing Vol. 4 by Tom Taylor"
    ]
  },
  {
    name: "Robin / Red Robin", alias: "Tim Drake", initial: "T",
    tags: ["Bat-Family", "Detectives", "Young Justice"],
    phases: [1,2,3,4,5,6,7,8],
    essentials: [
      "Batman: A Lonely Place of Dying",
      "Robin (1993) full run",
      "Young Justice (1998–2003) — Peter David",
      "Teen Titans (2003) — Geoff Johns",
      "Red Robin (2009)",
      "Detective Comics #934–981"
    ]
  },
  {
    name: "Red Hood", alias: "Jason Todd", initial: "J",
    tags: ["Bat-Family", "Anti-Hero", "Outlaws"],
    phases: [1,3,4,5,6,7,8,9],
    essentials: [
      "Batman: A Death in the Family",
      "Batman: Under the Hood",
      "Red Hood: The Lost Days",
      "Red Hood and the Outlaws"
    ]
  },
  {
    name: "Batgirl (Barbara Gordon)", alias: "Barbara Gordon / Oracle", initial: "B",
    tags: ["Bat-Family", "Birds of Prey", "Oracle"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Batgirl: Year One (2003)",
      "Batman: The Killing Joke — Alan Moore",
      "Birds of Prey (Oracle/Black Canary era) — Chuck Dixon",
      "Birds of Prey: Manhunt",
      "Black Canary/Oracle: Birds of Prey",
      "Birds of Prey by Gail Simone",
      "Batgirl Vol. 4 by Gail Simone"
    ]
  },
  {
    name: "Batgirl (Cassandra Cain)", alias: "Cassandra Cain", initial: "C",
    tags: ["Bat-Family", "Martial Arts", "No Man's Land"],
    phases: [2,3,4,5,6,7,8],
    essentials: [
      "Batman: No Man's Land",
      "Batgirl #1–6: Silent Knight (2000) — Kelley Puckett",
      "Batgirl #25–37: A Knight Alone",
      "Shadow of the Batgirl (Graphic Novel, 2020)",
      "Detective Comics #934–981"
    ]
  },
  {
    name: "Batgirl (Stephanie Brown)", alias: "Stephanie Brown", initial: "S",
    tags: ["Bat-Family", "Spoiler", "Rebirth"],
    phases: [2,3,4,5,6,7,8],
    essentials: [
      "Batman: War Games (2004)",
      "Batgirl Rising (#1–7, 2009) — Bryan Q. Miller",
      "Batgirl: The Flood (#9–14)",
      "Batgirl: The Lesson (#15–24)",
      "Batgirls (2021)"
    ]
  },
  {
    name: "Damian Wayne", alias: "Robin / Son of Batman", initial: "D",
    tags: ["Bat-Family", "League of Assassins", "Robin"],
    phases: [3,4,5,6,7,8,9],
    essentials: [
      "Batman & Son — Grant Morrison",
      "Batman & Robin by Grant Morrison",
      "Robin Vol. 5"
    ]
  },
  {
    name: "Catwoman", alias: "Selina Kyle", initial: "S",
    tags: ["Gotham", "Anti-Hero", "Bat-Family"],
    phases: [0,2,3,4,5,6,7,8,9],
    essentials: [
      "Catwoman Vol. 3 by Ed Brubaker",
      "Batman: Hush",
      "Gotham City Sirens",
      "Batman: The Wedding (Tom King)"
    ]
  },
  {
    name: "Batwoman", alias: "Kate Kane", initial: "K",
    tags: ["Bat-Family", "Gotham", "LGBT+"],
    phases: [5,6,7,8,9],
    essentials: [
      "Batwoman by J.H. Williams III",
      "Detective Comics #934–981"
    ]
  },
  {
    name: "Green Arrow", alias: "Oliver Queen", initial: "O",
    tags: ["Archers", "Street Level", "Star City"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Green Arrow: The Longbow Hunters (1987) — Mike Grell",
      "Green Arrow (1988) #1–80",
      "Green Arrow by Kevin Smith (2001)",
      "Green Arrow by Judd Winick (2003–2007)",
      "Green Arrow: Rebirth (2016) — Benjamin Percy"
    ]
  },
  {
    name: "Black Canary", alias: "Dinah Lance", initial: "D",
    tags: ["Birds of Prey", "Martial Arts", "Justice League"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "Birds of Prey by Gail Simone",
      "Green Arrow/Black Canary",
      "Black Canary/Oracle: Birds of Prey"
    ]
  },
  {
    name: "Aquaman", alias: "Arthur Curry", initial: "A",
    tags: ["Atlantis", "Justice League", "Cosmic"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Aquaman (1994) by Peter David",
      "Aquaman (2011) #1–25 — Geoff Johns",
      "Aquaman: Throne of Atlantis (2012–2013)",
      "Aquaman Rebirth (2016) — Dan Abnett",
      "Aquaman by Jeff Parker (2015)",
      "Brightest Day"
    ]
  },
  {
    name: "Harley Quinn", alias: "Harleen Quinzel", initial: "H",
    tags: ["Gotham", "Anti-Hero", "Villain"],
    phases: [2,3,4,5,6,7,8,9],
    essentials: [
      "Gotham City Sirens",
      "Harley Quinn Vol. 2 (New 52)",
      "Harley Quinn Vol. 3 (Rebirth)"
    ]
  },
  {
    name: "Poison Ivy", alias: "Pamela Isley", initial: "P",
    tags: ["Gotham", "Eco-Terrorism", "Villain"],
    phases: [2,5,6,7,8,9],
    essentials: [
      "Gotham City Sirens",
      "Batman: One Bad Day – Poison Ivy"
    ]
  },
  {
    name: "Lex Luthor", alias: "Alexander Luthor", initial: "L",
    tags: ["Villain", "Metropolis", "Genius"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Superman: Birthright",
      "Forever Evil",
      "Justice League: The Totality"
    ]
  },
  {
    name: "Joker", alias: "The Joker", initial: "J",
    tags: ["Villain", "Gotham", "Batman"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "Batman: The Killing Joke",
      "Batman: Death of the Family",
      "Batman: The Joker War"
    ]
  },
  {
    name: "Deathstroke", alias: "Slade Wilson", initial: "S",
    tags: ["Villain", "Mercenary", "Titans"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "New Teen Titans: The Judas Contract",
      "Identity Crisis",
      "Deathstroke Vol. 4 by Christopher Priest"
    ]
  },
  {
    name: "Supergirl", alias: "Kara Zor-El", initial: "K",
    tags: ["Super-Family", "Kryptonian", "Legacy"],
    phases: [3,4,5,6,7,8,9],
    essentials: [
      "Supergirl by Sterling Gates",
      "Supergirl: Woman of Tomorrow"
    ]
  },
  {
    name: "Cyborg", alias: "Victor Stone", initial: "V",
    tags: ["Teen Titans", "Technology", "Justice League"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "Teen Titans Vol. 3 by Geoff Johns",
      "Justice League: Origin (New 52)"
    ]
  },
  {
    name: "Raven", alias: "Rachel Roth", initial: "R",
    tags: ["Teen Titans", "Magic", "Trigon"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "New Teen Titans by Wolfman & Pérez",
      "Teen Titans Vol. 3 by Geoff Johns"
    ]
  },
  {
    name: "Starfire", alias: "Koriand'r", initial: "K",
    tags: ["Teen Titans", "Alien", "Tamaranean"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "New Teen Titans by Wolfman & Pérez",
      "Red Hood and the Outlaws"
    ]
  },
  {
    name: "Beast Boy", alias: "Garfield Logan", initial: "G",
    tags: ["Teen Titans", "Shapeshifter"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "New Teen Titans by Wolfman & Pérez",
      "Doom Patrol"
    ]
  },
  {
    name: "Booster Gold", alias: "Michael Jon Carter", initial: "B",
    tags: ["Time Travel", "JLI", "52"],
    phases: [1,2,3,4,5,6],
    essentials: [
      "Justice League International",
      "52 (Weekly Series, 2006–2007)",
      "Blue and Gold"
    ]
  },
  {
    name: "Blue Beetle (Ted Kord)", alias: "Ted Kord", initial: "T",
    tags: ["JLI", "Inventor", "Legacy"],
    phases: [1,2,3],
    essentials: [
      "Justice League International",
      "Countdown to Infinite Crisis"
    ]
  },
  {
    name: "Blue Beetle (Jaime Reyes)", alias: "Jaime Reyes", initial: "J",
    tags: ["Legacy", "Scarab", "El Paso"],
    phases: [3,4,5,6,7,8,9],
    essentials: [
      "Blue Beetle (2006) by John Rogers",
      "Teen Titans Vol. 3"
    ]
  },
  {
    name: "Donna Troy", alias: "Donna Troy / Troia", initial: "D",
    tags: ["Titans", "Wonder Woman Legacy"],
    phases: [0,1,2,3,4,5,6,7,8],
    essentials: [
      "New Teen Titans by Wolfman & Pérez",
      "Titans (2016) by Dan Abnett"
    ]
  },
  {
    name: "Wally West (Kid Flash)", alias: "Wally West", initial: "W",
    tags: ["Young Justice", "Flash Family", "Legacy"],
    phases: [7,8,9],
    essentials: [
      "DC Universe: Rebirth #1",
      "Titans Vol. 3 by Dan Abnett"
    ]
  },
  {
    name: "Darkseid", alias: "Uxas", initial: "D",
    tags: ["Villain", "New Gods", "Cosmic"],
    phases: [0,2,3,4,5,6,7,8,9],
    essentials: [
      "Jack Kirby's Fourth World Omnibus",
      "Final Crisis",
      "Justice League: The Darkseid War"
    ]
  },
  {
    name: "The Sandman (Dream)", alias: "Morpheus / Daniel Hall", initial: "M",
    tags: ["Vertigo", "Endless", "Cosmic"],
    phases: [1,2,3,4],
    essentials: [
      "The Sandman: Preludes & Nocturnes (#1–8) — Neil Gaiman",
      "The Sandman: The Doll's House (#9–16)",
      "The Sandman: Season of Mists (#21–28)",
      "The Sandman: Brief Lives (#41–49)",
      "The Sandman Vol. 1–10 by Neil Gaiman"
    ]
  },
  {
    name: "John Constantine", alias: "John Constantine", initial: "J",
    tags: ["Magic", "Vertigo", "Anti-Hero"],
    phases: [1,2,3,4,5,6,7,8,9],
    essentials: [
      "Swamp Thing by Alan Moore",
      "Hellblazer #1–300 (1988–2013) — Jamie Delano",
      "Hellblazer: Original Sins (#1–9)",
      "Hellblazer: Dangerous Habits (#41–46)",
      "Hellblazer: Hard Time (#146–150)",
      "Justice League Dark"
    ]
  },
  {
    name: "Zatanna", alias: "Zatanna Zatara", initial: "Z",
    tags: ["Magic", "Justice League Dark"],
    phases: [2,4,5,6,7,8,9],
    essentials: [
      "Justice League Dark Vol. 2",
      "Zatanna by Paul Dini"
    ]
  },
  {
    name: "Black Lightning", alias: "Jefferson Pierce", initial: "J",
    tags: ["Justice League", "Street Level"],
    phases: [4,5,6,7,8,9],
    essentials: [
      "Justice League: Cry for Justice",
      "DC: Infinite Frontier"
    ]
  },
  {
    name: "Shazam", alias: "Billy Batson / Captain Marvel", initial: "S",
    tags: ["Magic", "Legacy", "Justice League"],
    phases: [1,5,6,7,8,9],
    essentials: [
      "Power of Shazam (1994) — Jerry Ordway",
      "JSA by Geoff Johns",
      "52 (Weekly Series, 2006–2007)",
      "Shazam! by Geoff Johns (New 52, 2013)",
      "Black Adam: The Dark Age (2007)",
      "Legends (1986)"
    ]
  },
  {
    name: "Richard Dragon & Lady Shiva", alias: "Richard Dragon / Sandra Woosan", initial: "R",
    tags: ["Martial Arts", "Bat-Family Adjacent", "Street Level"],
    phases: [0,1,2,3,4],
    essentials: [
      "Richard Dragon, Kung Fu Fighter #1–18 (1975–1977)",
      "The Question (1987) #1–36 — Dennis O'Neil",
      "Birds of Prey #56–67",
      "Batgirl #73",
      "Batman: Brotherhood of the Fist (2005)"
    ]
  },
  {
    name: "Justice Society of America", alias: "JSA — Golden Age Heroes", initial: "J",
    tags: ["JSA", "Golden Age", "Legacy"],
    phases: [0,1,2,3,4,5],
    essentials: [
      "JSA: The Golden Age (1993–1994) — James Robinson",
      "JSA (1999) by Geoff Johns",
      "Justice Society of America: The Next Age (2007)"
    ]
  },
  {
    name: "New Gods", alias: "Orion / Mister Miracle / Big Barda", initial: "O",
    tags: ["New Gods", "Cosmic", "Kirby"],
    phases: [0,1,2,3,4,5,6,7,8,9],
    essentials: [
      "New Gods (1971) — Jack Kirby",
      "Mister Miracle (1971) — Jack Kirby",
      "The Fourth World Omnibus",
      "Orion (2000–2002) — Walt Simonson",
      "Death of the New Gods (2007)",
      "Final Crisis (2008)"
    ]
  },
];

const MARVEL_CHARACTERS = [
  {
    name: "Spider-Man", alias: "Peter Parker", initial: "P",
    tags: ["Street Level", "New York", "Avengers"],
    phases: [0,1,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Amazing Spider-Man by Lee/Ditko (#1–38)",
      "The Night Gwen Stacy Died (ASM #121–122, 1973)",
      "Spider-Man: Kraven's Last Hunt (1987)",
      "Spider-Man: The Alien Costume Saga (Birth of Venom)",
      "The Clone Saga (1990s)",
      "Spider-Man: Blue (2002)",
      "Superior Spider-Man",
      "Big Time (ASM #648–656)"
    ]
  },
  {
    name: "Iron Man", alias: "Tony Stark", initial: "T",
    tags: ["Avengers", "Technology", "Billionaire"],
    phases: [0,1,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Iron Man: Demon in a Bottle (#120–128, 1979)",
      "Iron Man: Armor Wars (1987–1988)",
      "Iron Man: Extremis (#1–6, 2005)",
      "Iron Man: The Five Nightmares (#1–7, 2008)",
      "Civil War",
      "Invincible Iron Man by Matt Fraction"
    ]
  },
  {
    name: "Captain America", alias: "Steve Rogers", initial: "S",
    tags: ["Avengers", "WWII", "Super-Soldier"],
    phases: [0,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Captain America: Winter Soldier (2005–2006) — Ed Brubaker",
      "Captain America: Man Out of Time (2010)",
      "Captain America: Death of Captain America (2007)",
      "Civil War",
      "Secret Invasion",
      "The Ultimates (2002–2004)"
    ]
  },
  {
    name: "Thor", alias: "Thor Odinson", initial: "T",
    tags: ["Avengers", "Asgard", "Cosmic"],
    phases: [0,1,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Thor #337–382 — Walt Simonson",
      "Thor (2007) #1–12 — J. Michael Straczynski",
      "Thor: God of Thunder #1–25 — Jason Aaron",
      "The Mighty Thor (Jane Foster) — Jason Aaron",
      "Thor by Donny Cates",
      "Immortal Thor by Al Ewing"
    ]
  },
  {
    name: "Hulk", alias: "Bruce Banner", initial: "B",
    tags: ["Avengers", "Gamma", "Monster"],
    phases: [0,1,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Planet Hulk",
      "World War Hulk",
      "Immortal Hulk by Al Ewing"
    ]
  },
  {
    name: "Black Widow", alias: "Natasha Romanoff", initial: "N",
    tags: ["Avengers", "Spy", "S.H.I.E.L.D."],
    phases: [4,5,6,7,8,9,10],
    essentials: [
      "Alias by Brian Michael Bendis",
      "New Avengers by Bendis"
    ]
  },
  {
    name: "Hawkeye", alias: "Clint Barton", initial: "C",
    tags: ["Avengers", "Archer", "Street Level"],
    phases: [4,5,6,7,8,9,10],
    essentials: [
      "Hawkeye by Matt Fraction & David Aja (#1–22)"
    ]
  },
  {
    name: "Wolverine", alias: "Logan / James Howlett", initial: "L",
    tags: ["X-Men", "Berserker", "Immortal"],
    phases: [2,3,4,5,6,7,8,9,10],
    essentials: [
      "Wolverine (1982) #1–4 — Chris Claremont & Frank Miller",
      "Weapon X (Marvel Comics Presents #72–84)",
      "Old Man Logan (2008–2009)",
      "Wolverine and the X-Men (2011)",
      "Wolverine by Percy"
    ]
  },
  {
    name: "Cyclops", alias: "Scott Summers", initial: "S",
    tags: ["X-Men", "Mutant", "X-Leader"],
    phases: [0,2,3,4,5,6,7,8,9,10],
    essentials: [
      "X-Men: Dark Phoenix Saga (#129–137, 1980)",
      "X-Men: Days of Future Past (#141–142, 1981)",
      "New X-Men by Grant Morrison",
      "Astonishing X-Men by Joss Whedon",
      "House of X / Powers of X — Jonathan Hickman"
    ]
  },
  {
    name: "Jean Grey", alias: "Jean Grey / Phoenix", initial: "J",
    tags: ["X-Men", "Telepath", "Phoenix Force"],
    phases: [0,2,3,4,5,6,7,8,9,10],
    essentials: [
      "X-Men: Dark Phoenix Saga",
      "Phoenix Endsong",
      "House of X — Jonathan Hickman"
    ]
  },
  {
    name: "Professor X", alias: "Charles Xavier", initial: "C",
    tags: ["X-Men", "Telepath", "Mutant Leader"],
    phases: [0,2,3,4,5,6,7,8,9,10],
    essentials: [
      "X-Men: Dark Phoenix Saga",
      "X-Men: God Loves, Man Kills",
      "New X-Men by Grant Morrison",
      "House of X / Powers of X"
    ]
  },
  {
    name: "Magneto", alias: "Max Eisenhardt", initial: "M",
    tags: ["X-Men", "Villain", "Mutant Leader"],
    phases: [0,2,3,4,5,6,7,8,9,10],
    essentials: [
      "X-Men: God Loves, Man Kills",
      "House of M",
      "House of X — Jonathan Hickman"
    ]
  },
  {
    name: "Storm", alias: "Ororo Munroe", initial: "O",
    tags: ["X-Men", "Weather", "Wakanda"],
    phases: [2,3,4,5,6,7,8,9,10],
    essentials: [
      "X-Men: Dark Phoenix Saga",
      "House of X",
      "Storm by Warren Ellis"
    ]
  },
  {
    name: "Daredevil", alias: "Matt Murdock", initial: "M",
    tags: ["Street Level", "Lawyer", "New York"],
    phases: [2,4,5,6,7,8,9,10],
    essentials: [
      "Daredevil: The Man Without Fear (1993)",
      "Daredevil: Born Again (#227–233, 1986)",
      "Daredevil Vol. 2 #26–50, #56–81 — Bendis & Maleev",
      "Daredevil by Mark Waid #1–36 (2011–2014)"
    ]
  },
  {
    name: "Doctor Strange", alias: "Stephen Strange", initial: "S",
    tags: ["Magic", "Sorcerer Supreme", "Cosmic"],
    phases: [0,4,5,6,7,8,9,10],
    essentials: [
      "Strange Tales (Lee/Ditko)",
      "Doctor Strange by Jason Aaron",
      "Strange (2022) by Jed MacKay"
    ]
  },
  {
    name: "Black Panther", alias: "T'Challa", initial: "T",
    tags: ["Avengers", "Wakanda", "Royalty"],
    phases: [4,5,6,7,8,9,10],
    essentials: [
      "Black Panther (1998) #1–33 — Christopher Priest",
      "Black Panther: A Nation Under Our Feet (2016) — Ta-Nehisi Coates",
      "Black Panther (2016) #1–18 — Ta-Nehisi Coates"
    ]
  },
  {
    name: "Captain Marvel", alias: "Carol Danvers", initial: "C",
    tags: ["Avengers", "Cosmic", "Air Force"],
    phases: [5,6,7,8,9,10],
    essentials: [
      "Captain Marvel by Kelly Sue DeConnick",
      "Captain Marvel by Kelly Thompson"
    ]
  },
  {
    name: "Silver Surfer", alias: "Norrin Radd", initial: "N",
    tags: ["Cosmic", "Power Cosmic", "Heralds"],
    phases: [0,1,2,3,7,8,9,10],
    essentials: [
      "Fantastic Four: The Galactus Trilogy (FF #48–50)",
      "Silver Surfer #1–18 (1968)",
      "Silver Surfer: Rebirth of Thanos",
      "Silver Surfer: Black by Donny Cates"
    ]
  },
  {
    name: "Thanos", alias: "Thanos of Titan", initial: "T",
    tags: ["Villain", "Cosmic", "Infinity Gems"],
    phases: [0,2,3,4,7,8,9,10],
    essentials: [
      "Thanos Quest",
      "The Infinity Gauntlet",
      "Thanos Imperative",
      "Thanos by Donny Cates"
    ]
  },
  {
    name: "Galactus", alias: "Galactus / Galan", initial: "G",
    tags: ["Cosmic", "World Devourer", "Herald"],
    phases: [0,2,6,8,9,10],
    essentials: [
      "Fantastic Four: Galactus Trilogy (FF #48–50)",
      "Silver Surfer (1968)",
      "Ultimates by Al Ewing"
    ]
  },
  {
    name: "Scarlet Witch", alias: "Wanda Maximoff", initial: "W",
    tags: ["Avengers", "Magic", "Reality"],
    phases: [1,2,3,4,6,7,8,9,10],
    essentials: [
      "Avengers: Disassembled (2004)",
      "House of M",
      "The Vision by Tom King"
    ]
  },
  {
    name: "The Vision", alias: "Victor Shade", initial: "V",
    tags: ["Avengers", "Synthezoid", "Robot"],
    phases: [1,2,6,7,8,9,10],
    essentials: [
      "Avengers: The Korvac Saga",
      "The Vision (2015) by Tom King"
    ]
  },
  {
    name: "Punisher", alias: "Frank Castle", initial: "F",
    tags: ["Street Level", "Anti-Hero", "Vigilante"],
    phases: [2,4,5,6,9,10],
    essentials: [
      "Punisher (2000) by Garth Ennis & Steve Dillon",
      "Punisher MAX by Garth Ennis"
    ]
  },
  {
    name: "Moon Knight", alias: "Marc Spector", initial: "M",
    tags: ["Anti-Hero", "Mental Health", "Khonshu"],
    phases: [2,4,9,10],
    essentials: [
      "Moon Knight (1980) by Doug Moench",
      "Moon Knight by Jeff Lemire",
      "Moon Knight by Jed MacKay"
    ]
  },
  {
    name: "She-Hulk", alias: "Jennifer Walters", initial: "J",
    tags: ["Avengers", "Lawyer", "Gamma"],
    phases: [4,6,7,8,9,10],
    essentials: [
      "She-Hulk by Dan Slott",
      "She-Hulk by Charles Soule"
    ]
  },
  {
    name: "Guardians of the Galaxy", alias: "Star-Lord / Gamora / Drax / Rocket / Groot", initial: "G",
    tags: ["Cosmic", "Space", "Team"],
    phases: [4,5,6,9,10],
    essentials: [
      "Annihilation (2006)",
      "Annihilation: Conquest",
      "Guardians of the Galaxy (2008) by Abnett & Lanning",
      "The Thanos Imperative",
      "Guardians of the Galaxy (2020) by Al Ewing"
    ]
  },
  {
    name: "Nova", alias: "Richard Rider", initial: "R",
    tags: ["Cosmic", "Nova Corps"],
    phases: [4,5,9,10],
    essentials: [
      "Nova (1976) #1–25 — Marv Wolfman",
      "Annihilation: Nova #1–4 (2006)",
      "Nova (2007) #1–25 — Abnett & Lanning"
    ]
  },
  {
    name: "Venom", alias: "Eddie Brock / Symbiote", initial: "E",
    tags: ["Anti-Hero", "Symbiote", "Spider-Man"],
    phases: [2,4,9,10],
    essentials: [
      "Spider-Man: Alien Costume Saga / Birth of Venom (ASM #298–300)",
      "Venom: Lethal Protector (1993)",
      "Venom by Donny Cates #1–35 (2018–2021)",
      "King in Black"
    ]
  },
  {
    name: "Jessica Jones", alias: "Jessica Jones", initial: "J",
    tags: ["Street Level", "P.I.", "Avengers"],
    phases: [4,5,6,7,8,9,10],
    essentials: [
      "Alias #1–28 (2001–2004) — Brian Michael Bendis",
      "The Pulse #1–14",
      "Jessica Jones (2016) #1–18"
    ]
  },
  {
    name: "Mr. Fantastic", alias: "Reed Richards", initial: "R",
    tags: ["Fantastic Four", "Science", "Intellect"],
    phases: [0,1,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Fantastic Four by Lee/Kirby (#1–10, 1961–1962)",
      "Fantastic Four: Galactus Trilogy (#48–50)",
      "Fantastic Four by Mark Waid",
      "Fantastic Four by Jonathan Hickman",
      "FF #1–23 — Jonathan Hickman"
    ]
  },
  {
    name: "Invisible Woman", alias: "Susan Storm Richards", initial: "S",
    tags: ["Fantastic Four", "Force Fields"],
    phases: [0,1,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Fantastic Four by Lee/Kirby",
      "Fantastic Four by Jonathan Hickman"
    ]
  },
  {
    name: "Doctor Doom", alias: "Victor Von Doom", initial: "V",
    tags: ["Villain", "Latveria", "Science & Magic"],
    phases: [0,1,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Fantastic Four by Lee/Kirby",
      "Books of Doom (2005)",
      "Fantastic Four #570–588 — Jonathan Hickman",
      "FF #1–23 — Jonathan Hickman",
      "Infamous Iron Man (2016) — Brian Michael Bendis",
      "Doctor Doom and the Masters of Evil"
    ]
  },
  {
    name: "Avengers (Team)", alias: "Earth's Mightiest Heroes", initial: "A",
    tags: ["Avengers", "Team", "Event"],
    phases: [0,1,2,3,4,5,6,7,8,9,10],
    essentials: [
      "Avengers: The Kree-Skrull War",
      "Avengers: Disassembled (2004) — Brian Michael Bendis",
      "New Avengers: Breakout (2005) — Bendis",
      "House of M",
      "Civil War",
      "Secret Invasion",
      "Avengers by Kurt Busiek",
      "Avengers by Jonathan Hickman (2012–2015)",
      "Secret Wars (2015) — Jonathan Hickman",
      "The Ultimates (2002–2004)"
    ]
  },
  {
    name: "X-Men (Team)", alias: "Mutant Super-Team", initial: "X",
    tags: ["X-Men", "Mutants", "Team"],
    phases: [0,2,3,4,5,6,7,8,9,10],
    essentials: [
      "X-Men: Dark Phoenix Saga (Uncanny #129–137, 1980)",
      "X-Men: Days of Future Past (#141–142, 1981)",
      "Wolverine (1982) by Frank Miller",
      "New X-Men by Grant Morrison",
      "Astonishing X-Men by Joss Whedon",
      "House of X / Powers of X by Jonathan Hickman"
    ]
  },
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

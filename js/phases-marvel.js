// phases-marvel.js — All Marvel Comics reading roadmap data

const MARVEL_PHASES = [
  {
    id: 0,
    title: "Silver Age Foundations",
    era: "1961–1970",
    color: "#3498db",
    desc: "The birth of the Marvel Universe. Read these in order.",
    tracks: [
      {
        icon: "🌌",
        title: "Core Titles",
        items: [
          { title: "Fantastic Four (1961) #1–102", issues: "FF #1-102 by Lee/Kirby", tags: ["essential"], note: "Includes Galactus Trilogy (#48-50), first Inhumans (#45-48)." },
          { title: "Amazing Spider-Man (1963) #1–38", issues: "ASM #1-38 by Lee/Ditko", tags: ["essential"], note: "The definitive Lee/Ditko run establishing Spider-Man." },
          { title: "Journey Into Mystery (Thor) #83–125", issues: "JiM #83-125", tags: ["essential"], note: "Thor's debut and early adventures." },
          { title: "Avengers (1963) #1–16", issues: "Avengers #1-16 by Lee/Kirby", tags: ["essential"], note: "The Avengers form. Classic Lee/Kirby." },
          { title: "Strange Tales #110–150", issues: "Strange Tales #110-150", note: "Doctor Strange's origin and early adventures (Lee/Ditko)." },
          { title: "Iron Man: Tales of Suspense #39–99, then Iron Man #1–25", issues: "Tales of Suspense #39-99, Iron Man #1-25", note: "Early Iron Man epic collections." },
          { title: "Silver Surfer (1968) #1–18", issues: "Silver Surfer #1-18", note: "The classic Silver Surfer series." },
          { title: "Captain Marvel (1968) #25–34 & Marvel Feature #12", issues: "Captain Marvel #25-34, Marvel Feature #12", note: "First Thanos appearances (Thanos War)." },
          { title: "The Death of Captain Marvel (1982 GN)", issues: "Marvel Graphic Novel #1", note: "Read after Thanos War (thematic placement)." },
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Bronze Age & 1970s Epics",
    era: "1970–1979",
    color: "#e67e22",
    desc: "The Bronze Age expands the Marvel Universe with cosmic stories and darker themes.",
    tracks: [
      {
        icon: "⚡",
        title: "Avengers",
        items: [
          { title: "Avengers: The Kree-Skrull War", issues: "Avengers #89-97", tags: ["essential"], note: "One of Marvel's greatest cosmic wars." },
          { title: "Avengers: The Celestial Madonna Saga", issues: "Avengers #129-135 + Giant-Size #2-4", note: "The Celestial Madonna and the Mantis storyline." },
          { title: "Avengers: The Korvac Saga", issues: "Avengers #167-168, 170-177", tags: ["essential"], note: "A cosmic villain who nearly becomes a god." },
          { title: "Avengers: Under Siege", issues: "Avengers #270-277", note: "The Masters of Evil take Avengers Mansion." },
        ]
      },
      {
        icon: "🦾",
        title: "Iron Man",
        items: [
          { title: "Iron Man: Demon in a Bottle", issues: "Iron Man #116-128", tags: ["essential"], note: "Tony Stark's battle with alcoholism. A landmark story." },
          { title: "Iron Man: Doomquest", issues: "Iron Man #149-150", note: "Iron Man and Doctor Doom travel through time." },
        ]
      },
      {
        icon: "👻",
        title: "Solo Heroes",
        items: [
          { title: "Ghost Rider (1973) #1–20 (classic)", issues: "Ghost Rider #1-20", tags: ["optional"], note: "The 70s original Ghost Rider. Fun, if optional." },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The 1980s — Darker Stories & Masterworks",
    era: "1980–1989",
    color: "#e74c3c",
    desc: "Daredevil, Punisher, and Moon Knight get their first major stories. Marvel's darkest and most acclaimed era begins.",
    tracks: [
      {
        icon: "🧬",
        title: "X-Men",
        items: [
          { title: "X-Men: Dark Phoenix Saga", issues: "Uncanny X-Men #129-137", tags: ["essential"], note: "The greatest X-Men story ever told." },
          { title: "X-Men: Days of Future Past", issues: "Uncanny X-Men #141-142", tags: ["essential"], note: "Dystopian future where mutants are hunted to near-extinction." },
          { title: "Wolverine (1982) by Frank Miller", issues: "Wolverine #1-4 (1982)", tags: ["essential"], note: "The defining Wolverine mini. Japan, honor, and fury." },
        ]
      },
      {
        icon: "😈",
        title: "Street-Level Heroes",
        items: [
          { title: "Daredevil: Born Again", issues: "Daredevil #227-233 by Frank Miller", tags: ["essential"], note: "The Kingpin destroys Matt Murdock's life. The greatest Daredevil story." },
          { title: "Spider-Man: The Alien Costume Saga", issues: "Amazing Spider-Man #252-263, Spectacular #90-100", tags: ["essential"], note: "The symbiote bonds with Peter Parker." },
          { title: "Moon Knight (1980) #1–15 by Moench/Sienkiewicz", issues: "Moon Knight #1-15", note: "Classic Moon Knight. Moench's defining run." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic",
        items: [
          { title: "Silver Surfer (1987) #1–50 by Englehart/Starlin", issues: "Silver Surfer #1-50", note: "Includes Rebirth of Thanos (#34-38). Essential cosmic." },
          { title: "Fantastic Four by John Byrne (#232–293)", issues: "FF #232-293", note: "The definitive 1980s FF run." },
          { title: "Avengers: Under Siege", issues: "Avengers #270-277", note: "The Masters of Evil destroy Avengers Mansion." },
          { title: "Iron Man: Armor Wars", issues: "Iron Man #225-232", tags: ["essential"], note: "Stark discovers his tech has been stolen and wars against everyone using it." },
          { title: "Thanos Quest (1990) #1-2", issues: "Thanos Quest #1-2", tags: ["essential"], note: "Thanos collects the Infinity Gems." },
          { title: "The Infinity Gauntlet (1991) #1-6", issues: "Infinity Gauntlet #1-6", tags: ["essential"], note: "Thanos snaps half the universe out of existence." },
          { title: "Infinity War (1992) & Infinity Crusade (1993)", issues: "Infinity War #1-6, Infinity Crusade #1-6", tags: ["optional"], note: "Sequels to Infinity Gauntlet. Optional." },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "The 1990s — Expansion & Alternative Realities",
    era: "1990–1999",
    color: "#f1c40f",
    desc: "Marvel expands with crossovers, new characters, and alternate realities. A mixed but important decade.",
    tracks: [
      {
        icon: "⚡",
        title: "Avengers",
        items: [
          { title: "Avengers: Operation: Galactic Storm", issues: "Various titles (1992)", note: "A cosmic war between the Kree and Shi'ar Empires." },
          { title: "Kurt Busiek & George Pérez's Avengers (1998-2002)", issues: "Avengers (Vol. 3) #1-56, Avengers Forever", tags: ["essential"], note: "The definitive modern Avengers run." },
        ]
      },
      {
        icon: "🧬",
        title: "X-Men",
        items: [
          { title: "X-Men: Age of Apocalypse (1995)", issues: "Various X-Men titles (1995)", tags: ["essential"], note: "An alternate timeline where Legion kills Professor X. The X-Men never formed." },
          { title: "Heroes Reborn / Return (1996-1998)", issues: "Various", tags: ["optional"], note: "Franklin Richards creates a pocket universe. Controversial but notable." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic / Standalone",
        items: [
          { title: "Fantastic Four (1990s) by Simonson", issues: "FF #334-354", note: "Walt Simonson's run. Worth reading." },
          { title: "Silver Surfer (1990s) by Starlin", issues: "Various Silver Surfer titles", note: "Continues after Infinity Gauntlet." },
          { title: "Inhumans (1998) by Paul Jenkins & Jae Lee", issues: "Inhumans (Vol. 2) #1-12", tags: ["essential"], note: "The definitive modern Inhumans story." },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "The Modern Revolution",
    era: "2001–2007",
    color: "#2ecc71",
    desc: "Daredevil, Punisher, Moon Knight, and She-Hulk get their definitive modern runs. The Marvel Renaissance begins.",
    tracks: [
      {
        icon: "🧬",
        title: "X-Men",
        items: [
          { title: "New X-Men by Grant Morrison (2001)", issues: "New X-Men #114-156", tags: ["essential"], note: "Morrison reinvents the X-Men. Cassandra Nova. Genosha. E Is for Extinction." },
          { title: "Astonishing X-Men by Whedon #1–24", issues: "Astonishing X-Men #1-24", tags: ["essential"], note: "Joss Whedon's love letter to the classic team." },
          { title: "X-Men: Messiah Complex (2007-2008)", issues: "X-Men: Messiah Complex crossover", tags: ["essential"], note: "The first mutant born since M-Day." },
        ]
      },
      {
        icon: "😈",
        title: "Street-Level",
        items: [
          { title: "Alias (2001) by Bendis", issues: "Alias #1-28", tags: ["essential"], note: "Jessica Jones' origin. Marvel MAX. Brutal and brilliant." },
          { title: "Daredevil (1998) #16–81 by Bendis & Maleev", issues: "Daredevil (Vol. 2) #16-81", tags: ["essential"], note: "The definitive modern Daredevil run. Read after Born Again." },
          { title: "The Punisher (2000) #1–12 by Ennis & Dillon", issues: "The Punisher (2000) #1-12", tags: ["essential"], note: "'Welcome Back, Frank.' The definitive Punisher story." },
          { title: "Moon Knight (2006) #1–30 by Huston & Finch", issues: "Moon Knight #1-30", note: "The modern Moon Knight revival." },
          { title: "She-Hulk (2004) #1–12 by Dan Slott", issues: "She-Hulk #1-12", note: "'Single Green Female.' Delightful legal comedy." },
        ]
      },
      {
        icon: "⚡",
        title: "Avengers",
        items: [
          { title: "Avengers: Disassembled (2004)", issues: "Avengers #500-503, Avengers Finale", tags: ["essential"], note: "The Avengers are torn apart by the Scarlet Witch." },
          { title: "New Avengers (2005) by Bendis #1–64", issues: "New Avengers #1-64", tags: ["essential"], note: "The post-Disassembled League of extraordinary heroes." },
          { title: "House of M (2005)", issues: "House of M #1-8", tags: ["essential"], note: "'No more mutants.' The Scarlet Witch rewrites reality." },
          { title: "Civil War (2006)", issues: "Civil War #1-7", tags: ["essential"], note: "Iron Man vs. Captain America. The Superhero Registration Act tears the Marvel Universe apart." },
          { title: "Planet Hulk & World War Hulk (2007-2008)", issues: "Planet Hulk, World War Hulk #1-5", tags: ["essential"], note: "Hulk is exiled to a gladiator planet, returns for revenge." },
        ]
      },
      {
        icon: "🛡",
        title: "Captain America / Iron Man",
        items: [
          { title: "Captain America (2005) by Brubaker #1–25", issues: "Captain America (Vol. 5) #1-25", tags: ["essential"], note: "Brubaker's masterpiece. Bucky Barnes returns." },
          { title: "Invincible Iron Man (2008) by Fraction", issues: "Invincible Iron Man #1-33", tags: ["essential"], note: "The definitive modern Iron Man run. Starts here, continues into Phase 5." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic",
        items: [
          { title: "Annihilation (2006) & Annihilation Conquest", issues: "Annihilation #1-6 + tie-ins, Annihilation: Conquest #1-6", tags: ["essential"], note: "Read before GotG/Nova. The Annihilation Wave destroys the cosmic Marvel landscape." },
          { title: "Black Panther (1998) by Christopher Priest", issues: "Black Panther (Vol. 3) #1-62", note: "The definitive Black Panther run. Fits thematically after Civil War." },
          { title: "Fantastic Four (2003-2005) by Waid & Wieringo", issues: "FF #60-70, #500-524", note: "Beloved, heartfelt FF run." },
        ]
      },
      {
        icon: "👻",
        title: "Ghost Rider",
        items: [
          { title: "Ghost Rider (2006) by Jason Aaron", issues: "Ghost Rider (Vol. 6) #1-35", note: "The best modern Ghost Rider run." },
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Secret Invasion & Dark Reign",
    era: "2008–2010",
    color: "#3498db",
    desc: "Guardians of the Galaxy and Nova debut. Captain Marvel gets her modern origin. The Marvel Universe goes dark.",
    eventPause: {
      title: "Secret Invasion → Dark Reign → Siege",
      issues: "Secret Invasion #1-8; Dark Avengers #1-16; Siege #1-4",
      desc: "The Skrulls have infiltrated Earth's heroes. Norman Osborn takes power. Asgard falls. Read in order."
    },
    tracks: [
      {
        icon: "🌌",
        title: "Core Events",
        items: [
          { title: "Secret Invasion (2008)", issues: "Secret Invasion #1-8", tags: ["essential"], note: "The Skrulls have replaced key Marvel heroes. Who can you trust?" },
          { title: "Dark Avengers (2009)", issues: "Dark Avengers #1-16", note: "Norman Osborn forms a villainous team of fake Avengers." },
          { title: "Siege (2010)", issues: "Siege #1-4", tags: ["essential"], note: "The conclusion of the Dark Reign era. Asgard falls." },
          { title: "X-Men: Second Coming (2010)", issues: "X-Men: Second Coming crossover", tags: ["essential"], note: "Hope Summers returns. The future of mutants is decided." },
        ]
      },
      {
        icon: "🚀",
        title: "Cosmic",
        items: [
          { title: "Guardians of the Galaxy (2008) #1–25 by Abnett & Lanning", issues: "GotG #1-25", tags: ["essential"], note: "The definitive GotG. Essential cosmic Marvel." },
          { title: "Nova (2007) #1–36 by Abnett & Lanning", issues: "Nova #1-36", tags: ["essential"], note: "Runs parallel to GotG. Richard Rider at his best." },
          { title: "Thanos Imperative (2010)", issues: "Thanos Imperative #1-6", tags: ["essential"], note: "Read after GotG/Nova. The Cancerverse threatens the Marvel Universe." },
        ]
      },
      {
        icon: "🛡",
        title: "Avengers / Heroes",
        items: [
          { title: "Invincible Iron Man (2008) by Fraction #1-33", issues: "Invincible Iron Man #1-33", note: "Continue through #33 (finishes here)." },
          { title: "Spider-Man: The Gauntlet & Grim Hunt", issues: "Amazing Spider-Man #617-637", note: "The Kravinoffs hunt Spider-Man. Brutal." },
          { title: "Thor by JMS & Gillen (2007-2010)", issues: "Thor (Vol. 3) #1-12, Journey Into Mystery", note: "Asgard rebuilt in Oklahoma. Beautiful." },
          { title: "X-Factor (2006) by Peter David #1–20", issues: "X-Factor #1-20", note: "Jamie Madrox's detective agency in mutant-depowered world." },
        ]
      },
      {
        icon: "🌟",
        title: "Captain Marvel / Ms. Marvel",
        items: [
          { title: "Captain Marvel (2012) #1–17 by Kelly Sue DeConnick", issues: "Captain Marvel #1-17", tags: ["essential"], note: "Carol Danvers becomes Captain Marvel. Thematically placed here." },
        ]
      }
    ]
  },
  {
    id: 6,
    title: "The Heroic Age & Fear Itself",
    era: "2010–2012",
    color: "#9b59b6",
    desc: "A new era of hope after Dark Reign. Daredevil and Spider-Man reach new heights.",
    tracks: [
      {
        icon: "🕷",
        title: "Spider-Man",
        items: [
          { title: "Spider-Man: Big Time Complete Collection", issues: "Amazing Spider-Man #648-673", tags: ["essential"], note: "Dan Slott's era begins. Peter Parker gets a real job." },
        ]
      },
      {
        icon: "😈",
        title: "Street-Level",
        items: [
          { title: "Hawkeye (2012) by Fraction", issues: "Hawkeye #1-22 by Matt Fraction & David Aja", tags: ["essential"], note: "What Clint Barton does when he's not being an Avenger. A masterpiece." },
          { title: "Daredevil (2011) #1–36 by Mark Waid & Chris Samnee", issues: "Daredevil #1-36", tags: ["essential"], note: "Read after Bendis. Waid makes Matt Murdock smile again." },
          { title: "She-Hulk (2014) #1–12 by Charles Soule", issues: "She-Hulk #1-12", note: "Read here. Legal superhero comedy perfected." },
        ]
      },
      {
        icon: "⚡",
        title: "Avengers",
        items: [
          { title: "Avengers & New Avengers (2012-2015) by Jonathan Hickman", issues: "Avengers #1-44, New Avengers #1-33", tags: ["essential"], note: "Read interleaved. Hickman's epic build to Secret Wars." },
          { title: "Avengers vs. X-Men (2012)", issues: "AvX #1-12 + Versus", tags: ["essential"], note: "The Phoenix Force returns. Avengers and X-Men go to war." },
        ]
      },
      {
        icon: "⚡",
        title: "Thor / Iron Man",
        items: [
          { title: "Thor: God of Thunder (2012) by Jason Aaron #1–25", issues: "Thor: God of Thunder #1-25", tags: ["essential"], note: "Three different Thors across time fight the God-Butcher. A towering achievement." },
          { title: "Iron Man (2013) by Kieron Gillen #1–28", issues: "Iron Man (Vol. 5) #1-28", note: "Tony Stark in space. Gillen's cosmic take." },
        ]
      },
      {
        icon: "🌌",
        title: "Fantastic Four / Cosmic",
        items: [
          { title: "Fantastic Four & FF (2009-2012) by Jonathan Hickman", issues: "Fantastic Four #570-611, FF #1-23", tags: ["essential"], note: "Read interwoven. Hickman's magnum opus of ideas." },
          { title: "Black Panther (1998) by Christopher Priest", issues: "Read here if not in Phase 4", note: "Thematically fits after Civil War." },
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Marvel NOW! & Infinity",
    era: "2013–2015",
    color: "#e74c3c",
    desc: "Captain Marvel continues. Doctor Strange gets a modern run. Secret Wars reshapes everything.",
    eventPause: {
      title: "Secret Wars (2015)",
      issues: "Secret Wars #1-9 by Jonathan Hickman",
      desc: "The culmination of Hickman's entire Avengers run. All of reality collapses into Battleworld. The entire Marvel Universe is remade."
    },
    tracks: [
      {
        icon: "🕷",
        title: "Spider-Man",
        items: [
          { title: "Superior Spider-Man", issues: "Superior Spider-Man #1-31", tags: ["essential"], note: "Doctor Octopus takes Peter Parker's body and life. Brilliantly controversial." },
          { title: "Amazing Spider-Man (2014) #1–20.1 (Spider-Verse)", issues: "Amazing Spider-Man (Vol. 3) #1-20.1", tags: ["essential"], note: "Spider-Verse: Every Spider-Man ever vs. the Inheritors." },
          { title: "Amazing Spider-Man (2015) Vol. 4 #1–32 + #789–801", issues: "ASM (Vol. 4) #1-32, #789-801", note: "The post-Secret Wars run." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic / Events",
        items: [
          { title: "Infinity (2013) event", issues: "Infinity #1-6 by Jonathan Hickman", tags: ["essential"], note: "Thanos strikes Earth while the Avengers fight the Builders in space." },
          { title: "Original Sin (2014)", issues: "Original Sin #1-8", tags: ["optional"], note: "Uatu the Watcher is murdered. His eye reveals everyone's darkest secrets." },
          { title: "Secret Wars (2015) — 9-issue main series", issues: "Secret Wars #1-9", tags: ["essential"], note: "The end and beginning of the Marvel Universe." },
          { title: "Silver Surfer (2014) by Slott & Allred #1–15", issues: "Silver Surfer (Vol. 7) #1-15", note: "Silver Surfer meets an ordinary Earth woman. A love story across the cosmos." },
          { title: "Thanos: The Infinity Revelation / Relativity / Finale (2014-2016)", issues: "Various Starlin graphic novels", note: "Starlin's later Thanos epics." },
          { title: "Captain Marvel (2014) #1–15 by Kelly Sue DeConnick", issues: "Captain Marvel (Vol. 8) #1-15", note: "Continues from Phase 5." },
          { title: "Doctor Strange (2015) by Jason Aaron #1–20", issues: "Doctor Strange (Vol. 4) #1-20", tags: ["essential"], note: "The definitive modern Doctor Strange run." },
        ]
      }
    ]
  },
  {
    id: 8,
    title: "All-New, All-Different & Legacy",
    era: "2015–2018",
    color: "#e67e22",
    desc: "New legacy heroes step up. The Vision is a masterpiece. The Marvel Universe changes permanently.",
    tracks: [
      {
        icon: "⚡",
        title: "Thor / Avengers",
        items: [
          { title: "The Mighty Thor (2015) by Jason Aaron #1–23", issues: "The Mighty Thor #1-23", tags: ["essential"], note: "Jane Foster wields Mjolnir. Jason Aaron's run reaches its peak." },
          { title: "Civil War 2 (2016)", issues: "Civil War II #1-8", note: "Predictive justice divides the heroes again. Less beloved than the original." },
          { title: "Ultimates (2015) by Al Ewing #1–12", issues: "Ultimates #1-12", tags: ["essential"], note: "Cosmic team with Galactus, Silver Surfer. Ewing's brilliant ideas begin." },
          { title: "Invincible Iron Man (2015) by Bendis #1–14", issues: "Invincible Iron Man (Vol. 3) #1-14", note: "Tony Stark's mother is revealed. Riri Williams introduced." },
        ]
      },
      {
        icon: "🌑",
        title: "Standalone Masterpieces",
        items: [
          { title: "The Vision (2015) #1–12 by Tom King", issues: "The Vision #1-12", tags: ["essential"], note: "A masterpiece. The Vision builds a synthezoid family in the suburbs. Horror and tragedy." },
          { title: "The Life of Captain Marvel (2018) #1–5", issues: "The Life of Captain Marvel #1-5", tags: ["essential"], note: "Carol's true Kree heritage revealed." },
          { title: "Death of Doctor Strange (2021)", issues: "Death of Doctor Strange #1-5", tags: ["optional"], note: "Can read here or later." },
        ]
      },
      {
        icon: "😈",
        title: "Street-Level",
        items: [
          { title: "Black Panther (2016) #1–18 by Ta-Nehisi Coates", issues: "Black Panther (Vol. 7) #1-18", tags: ["essential"], note: "Coates brings literary weight to T'Challa." },
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Fresh Start & King in Black",
    era: "2018–2021",
    color: "#f1c40f",
    desc: "Venom, Immortal Hulk, and House of X redefine their respective characters. The Knull saga concludes.",
    eventPause: {
      title: "King in Black (2020)",
      issues: "King in Black #1-5 by Donny Cates",
      desc: "Knull, the god of the symbiotes, invades Earth. Read Venom (2018) #1-12 and Silver Surfer: Black first."
    },
    tracks: [
      {
        icon: "🕷",
        title: "Spider-Man / Venom",
        items: [
          { title: "Amazing Spider-Man (2018) by Spencer", issues: "Amazing Spider-Man #1-74 by Nick Spencer", tags: ["essential"], note: "The definitive post-Secret Wars Spider-Man run." },
          { title: "Venom (2018) by Cates #1–34 + #200", issues: "Venom #1-34, #200", tags: ["essential"], note: "Donny Cates redefines Venom and the symbiotes. Essential for King in Black." },
          { title: "Absolute Carnage (2019)", issues: "Absolute Carnage #1-5", note: "Carnage collects codex from every symbiote host." },
          { title: "King in Black (2020)", issues: "King in Black #1-5", tags: ["essential"], note: "Knull invades Earth. The culmination of the Cates Venom run." },
        ]
      },
      {
        icon: "🧬",
        title: "X-Men",
        items: [
          { title: "House of X / Powers of X (2019)", issues: "HoX #1-6, PoX #1-6 by Jonathan Hickman", tags: ["essential"], note: "The greatest X-Men event since Days of Future Past. Mutants form their own nation." },
          { title: "X-Men (2019) by Hickman #1–21", issues: "X-Men (Vol. 5) #1-21", tags: ["essential"], note: "The Krakoan age begins." },
          { title: "Wolverine (2020) by Percy", issues: "Wolverine (Vol. 7) #1-ongoing", tags: ["optional"], note: "Consider adding for completeness." },
        ]
      },
      {
        icon: "💚",
        title: "Solo Heroes",
        items: [
          { title: "Immortal Hulk (2018) by Al Ewing", issues: "Immortal Hulk #1-50", tags: ["essential"], note: "The greatest Hulk story ever told. Horror and mythology fused." },
          { title: "Thor (2018) by Aaron #1–16, then King Thor", issues: "Thor (Vol. 6) #1-16, King Thor #1-4", tags: ["essential"], note: "The conclusion of Jason Aaron's decade-long Thor saga." },
          { title: "Fantastic Four (2018-2023) by Dan Slott", issues: "Fantastic Four (Vol. 6) #1-ongoing", note: "Dan Slott's warm, celebratory FF run." },
          { title: "Iron Man (2020) by Cantwell #1–25", issues: "Iron Man (Vol. 6) #1-25", note: "Christopher Cantwell's existential Iron Man." },
          { title: "Silver Surfer: Black (2019) by Cates", issues: "Silver Surfer: Black #1-5", note: "Read after Venom #1-12. Knull's origin." },
        ]
      },
      {
        icon: "🎭",
        title: "Moon Knight / Punisher MAX",
        items: [
          { title: "Punisher MAX (2004) by Garth Ennis", issues: "Punisher MAX #1-60 by Ennis", tags: ["essential"], note: "The greatest Punisher story. Read anytime after Phase 4." },
          { title: "Moon Knight (2016) by Lemire #1–14", issues: "Moon Knight #1-14", tags: ["essential"], note: "A surreal, psychological masterpiece." },
          { title: "Moon Knight (2021) by MacKay #1–30", issues: "Moon Knight #1-30", tags: ["essential"], note: "Read after Lemire. The best ongoing Moon Knight run." },
        ]
      },
      {
        icon: "🚀",
        title: "Cosmic",
        items: [
          { title: "Guardians of the Galaxy (2020) by Al Ewing #1–18", issues: "GotG #1-18", tags: ["essential"], note: "Sequel to the 2008 run. Ewing's galaxy-brain cosmic ideas." },
          { title: "Black Panther (2021) #1–15 by John Ridley", issues: "Black Panther #1-15", note: "Read here." },
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Recent Events & The Present",
    era: "2022–2026",
    color: "#2ecc71",
    desc: "Current runs for Daredevil, Doctor Strange, Captain Marvel, and more. Plus the Ultimate Universe relaunches.",
    tracks: [
      {
        icon: "🧬",
        title: "X-Men",
        items: [
          { title: "X-Men (2024) by Jed MacKay", issues: "X-Men (Vol. 6) #1-ongoing", tags: ["essential"], note: "Post-Krakoa X-Men." },
          { title: "Wolverine (2024)", issues: "Wolverine (Vol. 7) #1-ongoing", note: "Current Wolverine run." },
        ]
      },
      {
        icon: "🧛",
        title: "Blood Hunt",
        items: [
          { title: "Blade (2023)", issues: "Blade (Vol. 4) #1-12", note: "Eric Brooks' current solo series." },
          { title: "Blood Hunt (2024)", issues: "Blood Hunt #1-5", tags: ["essential"], note: "Blade-focused event. Vampires invade the Marvel Universe." },
          { title: "Blood Hunters (2024)", issues: "Blood Hunters #1-5", note: "Tie-in to Blood Hunt." },
        ]
      },
      {
        icon: "😈",
        title: "Street-Level / Daredevil",
        items: [
          { title: "Daredevil (2023) by Saladin Ahmed", issues: "Daredevil (Vol. 7) #1-ongoing", tags: ["essential"], note: "The current Daredevil run." },
        ]
      },
      {
        icon: "💀",
        title: "Doom",
        items: [
          { title: "One World Under Doom", issues: "One World Under Doom #1-6", note: "Doctor Doom conquers the world. Current event." },
        ]
      },
      {
        icon: "🌟",
        title: "Magic / Cosmic",
        items: [
          { title: "Scarlet Witch (2023)", issues: "Scarlet Witch #1-10", note: "Wanda opens a magic shop. A cozy supernatural series." },
          { title: "Strange (2022) #1–10 by Jed MacKay", issues: "Strange #1-10", tags: ["essential"], note: "Clea Strange as Sorcerer Supreme after Death of Doctor Strange." },
          { title: "Doctor Strange (2023) by Jed MacKay", issues: "Doctor Strange (Vol. 7) #1-ongoing", note: "Current. Consider adding." },
        ]
      },
      {
        icon: "⚡",
        title: "Avengers / Thor",
        items: [
          { title: "Avengers (2023) by Jed MacKay", issues: "Avengers (Vol. 9) #1-ongoing", tags: ["essential"], note: "The current Avengers run." },
          { title: "Thor (2020) by Donny Cates #1–28", issues: "Thor (Vol. 6) #1-28", tags: ["essential"], note: "Thor becomes All-Father. Donald Blake goes insane." },
          { title: "The Immortal Thor (2023) by Al Ewing", issues: "Immortal Thor #1-ongoing", tags: ["essential"], note: "Ewing's mythology-rich Thor ongoing." },
          { title: "Thanos (2023) by Christopher Cantwell", issues: "Thanos (Vol. 4) #1-6", tags: ["optional"], note: "Optional but excellent." },
        ]
      },
      {
        icon: "🦾",
        title: "Iron Man",
        items: [
          { title: "Invincible Iron Man (2022) by Gerry Duggan", issues: "Invincible Iron Man (Vol. 4) #1-ongoing", note: "Tony's current book. Riri Williams / Ironheart concurrent." },
        ]
      },
      {
        icon: "🌟",
        title: "Captain Marvel",
        items: [
          { title: "Captain Marvel (2019) #1–26 by Kelly Thompson", issues: "Captain Marvel (Vol. 10) #1-26", tags: ["essential"], note: "The definitive modern Captain Marvel run." },
        ]
      },
      {
        icon: "🌌",
        title: "Ultimate Universe",
        items: [
          { title: "Ultimate Spider-Man (2000) #1–133", issues: "USM #1-133", tags: ["essential"], note: "Brian Michael Bendis & Mark Bagley. The greatest Ultimate Universe story." },
          { title: "Ultimate X-Men (2001) #1–100", issues: "Ultimate X-Men #1-100", note: "Modern reinterpretation of the X-Men." },
          { title: "Ultimate Fantastic Four (2004) #1–60", issues: "UFF #1-60", note: "College-age Reed Richards." },
          { title: "The Ultimates (2002) & Ultimates 2 (2005)", issues: "Ultimates #1-13, Ultimates 2 #1-13", tags: ["essential"], note: "Mark Millar & Bryan Hitch. Hyper-real Avengers." },
          { title: "Ultimatum (2008)", issues: "Ultimatum #1-5", note: "The controversial event that decimated the Ultimate Universe." },
          { title: "Ultimate Spider-Man (2024) — New universe", issues: "Ultimate Spider-Man #1-ongoing by Hickman", tags: ["essential"], note: "A brand new Ultimate Universe begins. Peter Parker is 35." },
          { title: "Ultimate Black Panther (2024)", issues: "Ultimate Black Panther #1-ongoing", tags: ["essential"], note: "T'Challa in the new Ultimate Universe." },
          { title: "Ultimates (2024)", issues: "Ultimate Avengers by Hickman", tags: ["essential"], note: "The new Ultimate Avengers team." },
        ]
      }
    ]
  },
  {
    id: 11,
    title: "The Ultimate Universe",
    era: "Separate — read anytime after Phase 4",
    color: "#9b59b6",
    desc: "An alternate universe that ran parallel to the main Marvel line. Self-contained stories with modern reinterpretations.",
    tracks: [
      {
        icon: "🕷",
        title: "Ultimate Spider-Man",
        items: [
          { title: "Ultimate Spider-Man (2000) #1–133", issues: "USM #1-133 by Bendis & Bagley", tags: ["essential"], note: "The crown jewel of the Ultimate Universe." },
          { title: "Ultimate Comics Spider-Man (2009) #1–15 + #150–160", issues: "UCSM #1-15, #150-160", note: "Miles Morales makes his debut." },
          { title: "Ultimate Spider-Man (2024) — New universe", issues: "USM 2024 #1-ongoing by Hickman", tags: ["essential"], note: "Peter Parker is 35 and just becoming Spider-Man." },
        ]
      },
      {
        icon: "🧬",
        title: "Ultimate X-Men / FF",
        items: [
          { title: "Ultimate X-Men (2001) #1–100", issues: "UXM #1-100", note: "Modern, grounded X-Men." },
          { title: "Ultimate Fantastic Four (2004) #1–60", issues: "UFF #1-60", note: "College-age Reed Richards and team." },
        ]
      },
      {
        icon: "⚡",
        title: "Ultimates",
        items: [
          { title: "The Ultimates (2002) & Ultimates 2 (2005)", issues: "Ultimates #1-13, Ultimates 2 #1-13", tags: ["essential"], note: "Hyper-real, cinematic Avengers." },
          { title: "Ultimate Comics Ultimates (2011) by Hickman", issues: "UCU #1-30", note: "Hickman's big ideas in the Ultimate Universe." },
          { title: "Ultimate Galactus Trilogy", issues: "Ultimate Nightmare, Secret, Extinction", note: "Galactus reimagined as a swarm of robots." },
          { title: "Ultimates (2024)", issues: "Ultimate Avengers by Hickman", tags: ["essential"], note: "The new Ultimate Universe team book." },
        ]
      },
      {
        icon: "🌑",
        title: "End of the Ultimate Universe",
        items: [
          { title: "Ultimatum (2008)", issues: "Ultimatum #1-5", note: "Magneto drowns Manhattan. Controversial but pivotal." },
          { title: "Ultimate Black Panther (2024)", issues: "Ultimate Black Panther #1-ongoing", tags: ["essential"], note: "New Ultimate Universe." },
        ]
      }
    ]
  }
];

// Marvel Standalone Classics
const MARVEL_STANDALONES = [
  { title: "Marvels (1994)", year: "1994", desc: "Alex Ross and Kurt Busiek. The entire Marvel history seen through a photographer's eyes." },
  { title: "Spider-Man: Life Story (2019)", year: "2019", desc: "What if Peter Parker aged in real time? Each issue set in a different decade." },
  { title: "Silver Surfer: Parable (1988)", year: "1988", desc: "Stan Lee and Moebius. Galactus returns, disguised as a god." },
  { title: "Doctor Strange: Fall Sunrise (2022)", year: "2022", desc: "Tradd Moore's psychedelic masterpiece. Strange's final journey." },
  { title: "Old Man Logan (2008)", year: "2008", desc: "A future where the villains won. The greatest Wolverine Elseworlds story." },
  { title: "Fantastic Four: Life Story (2021)", year: "2021", desc: "Mark Russell's poignant take on the FF aging in real time." },
  { title: "Thor: The Mighty Avenger (2010)", year: "2010", desc: "Roger Langridge's all-ages masterpiece. Warm and joyful." },
  { title: "Loki: Agent of Asgard (2014)", year: "2014", desc: "Young Loki tries to rewrite his story. Genre-bending fun." },
  { title: "Nextwave: Agents of H.A.T.E. (2006)", year: "2006", desc: "Warren Ellis breaks the Marvel Universe for laughs. Pure chaos." },
  { title: "Runaways (2003)", year: "2003", desc: "Teenagers discover their parents are supervillains. The Pride." },
  { title: "Young Avengers (2005)", year: "2005", desc: "Allan Heinberg's debut. Teenage heroes inspired by the Avengers." },
  { title: "Marvel 1602 (2003)", year: "2003", desc: "Neil Gaiman. Marvel heroes in Elizabethan England." },
  { title: "X-Statix (2002)", year: "2002", desc: "Peter Milligan and Mike Allred. Celebrity mutant superheroes who die for ratings." },
  { title: "JLA/Avengers (2003)", year: "2003", desc: "The DC/Marvel crossover that shouldn't exist but does. A triumph." },
];

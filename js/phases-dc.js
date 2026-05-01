// phases-dc.js — All DC Comics reading roadmap data

const DC_PHASES = [
  {
    id: 0,
    title: "Golden & Silver Age Foundation",
    era: "1938–1985",
    color: "var(--dc-secondary)",
    desc: "Foundational stories that established DC's greatest heroes and the original multiverse.",
    tracks: [
      {
        icon: "⚡",
        title: "The Flash",
        items: [
          { title: "The Flash: The Silver Age Vol. 1-2", issues: "Showcase #4, 8, 13-14, The Flash #105-132", tags: ["essential"], note: "Barry Allen's debut and early adventures." },
          { title: "The Flash: Flash of Two Worlds", issues: "The Flash #123 (1961)", tags: ["essential"], note: "Jay Garrick meets Barry Allen. The Multiverse is introduced." },
          { title: "The Flash: The Death of Iris West", issues: "The Flash #275-284 (1979-1980)", note: "Professor Zoom murders Iris West. A pivotal tragedy in Barry's life." },
        ]
      },
      {
        icon: "🏛",
        title: "Justice League / JSA",
        items: [
          { title: "Justice League of America: The Silver Age Vol. 1-2", issues: "The Brave and the Bold #28-30, JLA #1-16", tags: ["essential"], note: "The team's formation. Establishes the classic League." },
          { title: "Justice League of America: Origin of the Justice League", issues: "Justice League of America #9 (1962)", note: "The official retelling of how the League formed against Starro." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman",
        items: [
          { title: "Superman: The Greatest Stories Ever Told", issues: "Various issues", note: "Sampler of Golden/Silver Age Superman." },
          { title: "Superman Annual #11: For the Man Who Has Everything", issues: "Superman Annual #11 (1985)", tags: ["essential"], note: "Alan Moore's masterpiece. Mongul traps Superman in a dream of Krypton." },
          { title: "Whatever Happened to the Man of Tomorrow?", issues: "Superman #423 & Action Comics #583 (1986)", tags: ["essential"], note: "Alan Moore's farewell to the Silver Age Superman. An ending before Crisis." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman",
        items: [
          { title: "Batman: The Joker's Five-Way Revenge", issues: "Batman #251 (1973)", note: "Denny O'Neil and Neal Adams return Joker to his murderous roots." },
          { title: "Batman: Strange Apparitions (The Englehart-Rogers Run)", issues: "Detective Comics #469-476 (1977-1978)", tags: ["essential"], note: "The definitive Bronze Age Batman. Introduces Hugo Strange's obsession." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: The Silver Age Vol. 1-2", issues: "Showcase #22-24, Green Lantern #1-9", note: "Hal Jordan's debut and early adventures." },
          { title: "Green Lantern/Green Arrow: Hard Traveling Heroes", issues: "Green Lantern #76-89 (1970-1972)", tags: ["essential"], note: "Denny O'Neil and Neal Adams confront social issues. Speedy's addiction. A turning point." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman: The Golden Age Omnibus", issues: "All-Star Comics #8, Sensation Comics #1-24, Wonder Woman #1-7", note: "Her earliest adventures." },
          { title: "Wonder Woman: The Twelve Labors", issues: "Wonder Woman #212-222 (1974-1976)", note: "Diana must prove herself to return to the Justice League. Guest-stars from across DC." },
        ]
      },
      {
        icon: "🌌",
        title: "Jack Kirby's Fourth World",
        items: [
          { title: "Superman's Pal Jimmy Olsen #133-148", issues: "Jimmy Olsen #133-148 (1970-1972)", note: "Kirby's entry point into the Fourth World. Introduces the DNA Project and Intergang." },
          { title: "The New Gods #1-11", issues: "New Gods #1-11 (1971-1972)", tags: ["essential"], note: "The war between New Genesis and Apokolips. Orion, Lightray, Highfather, and Darkseid's full mythology." },
          { title: "The Forever People #1-11", issues: "Forever People #1-11 (1971-1972)", note: "Young New Gods on Earth. The Super-Cycle. Infinity Man. The Anti-Life Equation hunt begins." },
          { title: "Mister Miracle #1-18", issues: "Mister Miracle #1-18 (1971-1974)", tags: ["essential"], note: "Scott Free escapes Apokolips and becomes the world's greatest escape artist. Big Barda debuts." },
        ]
      },
      {
        icon: "👥",
        title: "Team Foundations",
        items: [
          { title: "Teen Titans #1-43", issues: "Teen Titans #1-43 (1966-1973)", note: "The original Titans run. Robin, Kid Flash, Aqualad, Wonder Girl, Speedy." },
          { title: "Doom Patrol (Original)", issues: "My Greatest Adventure #80-85, Doom Patrol #86-121", note: "Original Doom Patrol debuts: Robotman, Negative Man, Elasti-Girl, The Chief." },
        ]
      },
      {
        icon: "🦇",
        title: "Bat-Family Foundations",
        items: [
          { title: "Detective Comics #38 (1940)", issues: "Detective Comics #38", note: "Dick Grayson debuts as Robin. The first sidekick." },
          { title: "Batman #1 (1940)", issues: "Batman #1", note: "Catwoman debuts (as 'The Cat'). Joker debuts." },
          { title: "Batman: A Death in the Family", issues: "Batman #426-429", tags: ["essential"], note: "Jason Todd dies. The Joker murders him." },
          { title: "Batman: A Lonely Place of Dying", issues: "Batman #440-442, New Titans #60-61", note: "Tim Drake deduces Batman's identity and becomes Robin." },
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Post-Crisis Foundation",
    era: "1985–1999",
    color: "#7b68ee",
    desc: "Crisis on Infinite Earths reshapes the DC Universe into a single timeline, with new origins and beginnings.",
    eventPause: {
      title: "Crisis on Infinite Earths",
      issues: "Crisis on Infinite Earths #1-12 by Marv Wolfman & George Pérez",
      desc: "The Anti-Monitor destroys countless Earths. Barry Allen dies. Supergirl dies. The multiverse becomes a single universe."
    },
    tracks: [
      {
        icon: "🦇",
        title: "Batman",
        items: [
          { title: "Batman: Year One", issues: "Batman #404-407 (1987)", tags: ["essential"], note: "The definitive modern origin. Bruce becomes Batman, Gordon arrives in Gotham." },
          { title: "Batman: The Long Halloween", issues: "Batman: The Long Halloween #1-13 (1996-1997)", tags: ["essential"], note: "A 13-issue mystery spanning Batman's early career. Two-Face's origin." },
          { title: "Batman: Dark Victory", issues: "Batman: Dark Victory #0-13 (1999-2000)", note: "Direct sequel to Long Halloween. Dick Grayson becomes Robin in the modern era." },
          { title: "Arkham Asylum: A Serious House on Serious Earth", issues: "Arkham Asylum (1989)", tags: ["essential"], note: "Grant Morrison and Dave McKean's psychological horror masterpiece." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman",
        items: [
          { title: "Superman: The Man of Steel", issues: "Man of Steel #1-6 by John Byrne (1986)", tags: ["essential"], note: "The post-Crisis rebooted origin." },
          { title: "Superman: For All Seasons", issues: "Superman: For All Seasons #1-4 (1998)", note: "Jeph Loeb and Tim Sale's poetic look at Clark's first year in Metropolis." },
        ]
      },
      {
        icon: "⚡",
        title: "The Flash (Full Order)",
        items: [
          { title: "The Flash Vol. 2 #1-50", issues: "The Flash (Vol. 2) #1-50 (1987-1991)", tags: ["essential"], note: "Wally West takes over as The Flash. Barry is dead. Wally's early struggles." },
          { title: "The Flash: Born to Run", issues: "The Flash #62-65 (1992)", note: "Wally West's origin retold. The definitive Kid Flash backstory." },
          { title: "The Flash: Terminal Velocity", issues: "The Flash #95-100 (1994)", tags: ["essential"], note: "Wally becomes one with the Speed Force. The Speed Force is fully introduced." },
          { title: "The Flash: Dead Heat", issues: "The Flash Annual #6, The Flash #108-111 (1993-1995)", note: "Savitar appears. The first major Speed Force conflict." },
          { title: "The Flash: Race Against Time", issues: "The Flash #108-111 (1995)", note: "Wally races through time to save Linda." },
          { title: "The Flash: The Return of Barry Allen", issues: "The Flash #74-79 (1992-1993)", tags: ["essential"], note: "Barry Allen returns... but all is not what it seems. Professor Zoom's masterplan." },
          { title: "The Flash: Rogues - Leadership", issues: "Rogues Special (2001)", note: "The Rogues and their code of honor." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: Emerald Dawn", issues: "Green Lantern: Emerald Dawn #1-6", note: "Hal Jordan's post-Crisis origin." },
          { title: "Green Lantern: Emerald Dawn II", issues: "Green Lantern: Emerald Dawn II #1-6", note: "Continuation. Sinestro's first betrayal." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman: Gods and Mortals", issues: "Wonder Woman (Vol. 2) #1-7 by George Pérez", tags: ["essential"], note: "The post-Crisis rebooted origin. Diana leaves Themyscira." },
          { title: "Wonder Woman: Challenge of the Gods", issues: "Wonder Woman (Vol. 2) #8-14", note: "Continues Pérez's run." },
        ]
      },
      {
        icon: "⚡",
        title: "Justice League",
        items: [
          { title: "Legends", issues: "Legends #1-6 by John Ostrander & Len Wein", note: "Darkseid manipulates humanity against heroes. The Justice League reforms." },
          { title: "Justice League International Vol. 1-2", issues: "Justice League #1-6, JLI #7-25", tags: ["essential"], note: "The funny, beloved League era. Booster Gold and Blue Beetle join." },
        ]
      },
      {
        icon: "🧨",
        title: "Villain Track",
        items: [
          { title: "Lex Luthor: The Unauthorized Biography", issues: "Lex Luthor: The Unauthorized Biography (1989)", note: "The definitive post-Crisis Lex. A businessman, not a mad scientist." },
          { title: "The Joker", issues: "The Joker #1-9 (1975 series)", note: "The Joker's original solo series. Essential for understanding his twisted worldview." },
          { title: "Deathstroke the Terminator #1-20", issues: "Deathstroke the Terminator #1-20 (1991-1993)", note: "Slade Wilson's definitive solo series. The mercenary's code." },
          { title: "Secret Society of Super-Villains", issues: "Secret Society of Super-Villains (1976 series)", note: "The original villain team-up. Seeds for Identity Crisis." },
        ]
      },
      {
        icon: "🏹",
        title: "Street-Level Track",
        items: [
          { title: "Green Arrow: Year One", issues: "Green Arrow: Year One #1-6 (2007)", note: "Oliver Queen's origin on the island. Essential standalone." },
          { title: "Green Arrow: The Longbow Hunters", issues: "Green Arrow: The Longbow Hunters #1-3 (1987)", tags: ["essential"], note: "Mike Grell's mature reinvention. Dark, realistic, street-level." },
          { title: "Green Arrow Vol. 2 #1-80", issues: "Green Arrow Vol. 2 #1-80 (1988-1993)", note: "Grell's ongoing run. Seattle-based street-level heroism." },
          { title: "The Question by Dennis O'Neil", issues: "The Question #1-36 (1987-1990)", tags: ["essential"], note: "Vic Sage's philosophical journey in Hub City. Noir masterpiece." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic",
        items: [
          { title: "Cosmic Odyssey", issues: "Cosmic Odyssey #1-4 by Jim Starlin & Mike Mignola", note: "The Justice League and New Gods team up with Darkseid to stop the Anti-Life Entity." },
          { title: "The Sandman Vol. 1: Preludes & Nocturnes", issues: "The Sandman #1-8 by Neil Gaiman", tags: ["essential"], note: "The Endless begin. Dream escapes imprisonment." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "The New Teen Titans: The Judas Contract", issues: "Tales of the Teen Titans #42-44, Teen Titans #45-48, Annual #3", tags: ["essential"], note: "Dick Grayson becomes Nightwing. Terra's betrayal. Deathstroke's origin." },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Dark Age & Rise of Legacy",
    era: "1990–1999",
    color: "var(--mv-primary)",
    desc: "A darker, more mature era featuring the Death of Superman, Knightfall, and the emergence of a new generation of heroes.",
    tracks: [
      {
        icon: "🧨",
        title: "Main Events",
        items: [
          { title: "Zero Hour: Crisis in Time!", issues: "Zero Hour #4-0 (1994)", tags: ["essential"], note: "Hal Jordan as Parallax attempts to reset reality. Timeline is cleaned up." },
          { title: "The Final Night", issues: "The Final Night #1-4 (1996)", tags: ["essential"], note: "The Sun-Eater threatens Earth. Hal Jordan sacrifices himself to reignite the sun." },
          { title: "Day of Judgment", issues: "Day of Judgment #1-5 (1999)", note: "The Spectre is unbound. Hal Jordan becomes the new Spectre." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman",
        items: [
          { title: "Batman: Knightfall", issues: "Batman #491-510, Detective Comics #659-677 (1993-1994)", tags: ["essential"], note: "Bane breaks Batman. Azrael temporarily assumes the mantle." },
          { title: "Batman: Contagion", issues: "Various (1996)", note: "A deadly virus spreads through Gotham. Prelude to Legacy." },
          { title: "Batman: Legacy", issues: "Various (1996-1997)", note: "Ra's al Ghul unleashes a plague. Bane returns." },
          { title: "Batman: No Man's Land", issues: "Batman #563-574, Detective Comics #730-741 (1999)", tags: ["essential"], note: "Gotham faces devastation. Cassandra Cain debuts as Batgirl." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman",
        items: [
          { title: "The Death and Return of Superman", issues: "Superman #73-82, Action Comics #683-691 (1992-1993)", tags: ["essential"], note: "Superman dies fighting Doomsday. Four new Supermen appear. Superman returns." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern Vol. 3 #51-183 (Kyle Rayner Era)", issues: "Green Lantern Vol. 3 #51-183 (1994-2004)", tags: ["essential"], note: "Kyle Rayner becomes the last Green Lantern. Defines a generation." },
          { title: "Green Lantern: Circle of Fire", issues: "Green Lantern: Circle of Fire #1-2 + tie-ins (2000)", note: "Kyle's constructs become sentient. Features multiple Lanterns." },
          { title: "Green Lantern: The New Corps", issues: "Green Lantern: The New Corps #1-2 (2000)", note: "Kyle attempts to rebuild the Corps." },
        ]
      },
      {
        icon: "🦇",
        title: "Side Titles",
        items: [
          { title: "Nightwing Vol. 2 #1-70", issues: "Nightwing #1-70 (1996-2002)", tags: ["essential"], note: "Chuck Dixon's definitive run. Dick moves to Bludhaven." },
          { title: "Robin Vol. 2 #1-100", issues: "Robin #1-100 (1993-2004)", note: "Tim Drake's definitive solo run. Chuck Dixon." },
          { title: "Birds of Prey #56-70", issues: "Birds of Prey #56-70 (2003-2004)", note: "Gail Simone's Birds. Oracle, Black Canary, Huntress." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "Young Justice #1-55", issues: "Young Justice #1-55 by Peter David (1998-2003)", tags: ["essential"], note: "Tim Drake, Superboy, Impulse, Wonder Girl. Definitive Young Justice run." },
          { title: "Impulse #1-89", issues: "Impulse #1-89 by Mark Waid", note: "Bart Allen's definitive solo run." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic / Vertigo",
        items: [
          { title: "The Sandman Vol. 2-10", issues: "The Sandman #9-75 by Neil Gaiman", tags: ["essential"], note: "Complete Sandman saga." },
          { title: "Lucifer Vol. 1-4", issues: "Lucifer #1-75 by Mike Carey", note: "Definitive Lucifer saga." },
          { title: "Death: The High Cost of Living", issues: "Death #1-3", note: "Death's solo story." },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Infinite Crisis Build-Up",
    era: "2000–2006",
    color: "#9b59b6",
    desc: "Building toward the next major Crisis with stories exploring trust, identity, and the fracturing of the superhero community.",
    eventPause: {
      title: "Infinite Crisis",
      issues: "Infinite Crisis #1-7 by Geoff Johns & Phil Jimenez (2005-2006)",
      desc: "The sequel to the original Crisis. The Multiverse returns. Superboy dies. READ LAST after all lead-in miniseries."
    },
    tracks: [
      {
        icon: "🦇",
        title: "Batman",
        items: [
          { title: "Batman: Officer Down", issues: "Various (2001)", note: "Commissioner Gordon is shot. A major Bat-Family crossover." },
          { title: "Batman: Bruce Wayne - Murderer? / Fugitive", issues: "Various (2002-2003)", tags: ["essential"], note: "Bruce is framed for murder. The Bat-Family fractures." },
          { title: "Batman: Hush", issues: "Batman #608-619 (2002-2003)", tags: ["essential"], note: "Jeph Loeb and Jim Lee. A mystery involving the entire rogues gallery." },
          { title: "Batman: War Games", issues: "Various (2004)", note: "A massive crossover. Stephanie Brown's fate. Black Mask rises." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman",
        items: [
          { title: "Superman: Our Worlds at War", issues: "Various (2001)", tags: ["essential"], note: "Imperiex threatens reality. Massive casualties. Lex Luthor is president." },
          { title: "Superman: Ending Battle", issues: "Various (2002)", note: "Manchester Black's final scheme against Superman." },
          { title: "Superman: Birthright", issues: "Superman: Birthright #1-12 (2003-2004)", note: "Mark Waid retells Superman's origin for the modern era." },
          { title: "Superman: Sacrifice", issues: "Various (2005)", tags: ["essential"], note: "Maxwell Lord controls Superman. Wonder Woman kills Maxwell Lord." },
        ]
      },
      {
        icon: "🔗",
        title: "Shared",
        items: [
          { title: "Superman/Batman #1-25", issues: "Superman/Batman #1-25 (2003-2005)", tags: ["essential"], note: "Jeph Loeb's run. Supergirl returns. President Luthor falls." },
        ]
      },
      {
        icon: "⚡",
        title: "The Flash",
        items: [
          { title: "The Flash Vol. 2 #151-230 (Geoff Johns Run)", issues: "The Flash #151-230 (2000-2006)", tags: ["essential"], note: "Geoff Johns defines the Rogues. Wally's legacy. Hunter Zolomon as Zoom." },
        ]
      },
      {
        icon: "🧬",
        title: "Titans / Legacy",
        items: [
          { title: "Young Justice #1-55", issues: "Young Justice #1-55 (1998-2003)", tags: ["essential"], note: "Tim, Kon, Bart, Cassie. Peter David's classic run." },
          { title: "Titans #1-50", issues: "Titans #1-50 (1999-2003)", note: "The adult Titans team: Nightwing, Donna, Wally, Roy, Garth." },
          { title: "Titans/Young Justice: Graduation Day", issues: "Titans/YJ: Graduation Day #1-3 (2003)", tags: ["essential"], note: "Donna Troy dies. Both teams disband. Sets up Teen Titans Vol. 3." },
          { title: "Teen Titans Vol. 3 #1-33", issues: "Teen Titans #1-33 (2003-2006)", tags: ["essential"], note: "Geoff Johns. Robin, Superboy, Kid Flash, Wonder Girl, Raven, Beast Boy, Starfire." },
        ]
      },
      {
        icon: "🕶️",
        title: "Outsiders",
        items: [
          { title: "Outsiders Vol. 3 #1-33", issues: "Outsiders #1-33 (2003-2006)", note: "Nightwing leads a black ops team. Arsenal, Starfire, Jade, Thunder, Grace." },
        ]
      },
      {
        icon: "🏛",
        title: "JSA / JLA",
        items: [
          { title: "JSA #1-83", issues: "JSA #1-83 (1999-2006)", tags: ["essential"], note: "Geoff Johns and David Goyer. The definitive JSA run." },
          { title: "JLA #70-125", issues: "JLA #70-125 (2002-2006)", note: "Various writers. The League through the Crisis era." },
        ]
      },
      {
        icon: "🧨",
        title: "Core Events Order",
        items: [
          { title: "Titans/Young Justice: Graduation Day", issues: "Graduation Day #1-3 (2003)", note: "Donna Troy dies. Both teams end." },
          { title: "Identity Crisis", issues: "Identity Crisis #1-7 (2004)", tags: ["essential"], note: "Sue Dibny is murdered. The League's mind-wiping secrets exposed." },
          { title: "Countdown to Infinite Crisis", issues: "Countdown to Infinite Crisis #1 (2005)", tags: ["essential"], note: "Ted Kord (Blue Beetle) dies. The path to Infinite Crisis begins." },
          { title: "Rann-Thanagar War", issues: "Rann-Thanagar War #1-6 (2005)", note: "Adam Strange caught between two warring planets." },
          { title: "Day of Vengeance", issues: "Day of Vengeance #1-6 (2005)", note: "The Spectre destroys magic. Doctor Fate dies." },
          { title: "Villains United", issues: "Villains United #1-6 (2005)", note: "The Secret Six resist the Secret Society." },
          { title: "The OMAC Project", issues: "The OMAC Project #1-6 (2005)", tags: ["essential"], note: "Brother Eye goes rogue. Wonder Woman kills Maxwell Lord." },
          { title: "The Return of Donna Troy", issues: "The Return of Donna Troy #1-4 (2005)", note: "Donna returns from the dead as a cosmic being." },
          { title: "Infinite Crisis", issues: "Infinite Crisis #1-7 (2005-2006)", tags: ["essential"], note: "The Multiverse returns. Superboy dies. Earth is reborn." },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Cosmic Saga",
    era: "2006–2011",
    color: "#e67e22",
    desc: "52, Final Crisis, Blackest Night, and Flashpoint. The scope expands to cosmic and multiversal threats. Structured in two complete layers.",
    eventPause: {
      title: "Flashpoint",
      issues: "Flashpoint #1-5 by Geoff Johns & Andy Kubert (2011)",
      desc: "Barry Allen wakes up in a twisted timeline. The event that resets everything into the New 52."
    },
    tracks: [
      {
        icon: "🔥",
        title: "LAYER 1: 52 → Final Crisis",
        items: [
          { title: "52 #1-52 (ENTRY POINT)", issues: "52 #1-52 (2006-2007)", tags: ["essential"], note: "The missing year after Infinite Crisis. Booster Gold, The Question, Ralph Dibny, Black Adam. Four writers, 52 weeks." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman Track",
        items: [
          { title: "Batman: Face the Face", issues: "Batman #651-654 (2006)", note: "One Year Later. Harvey Dent as Gotham's protector goes wrong." },
          { title: "Batman and Son", issues: "Batman #655-658 (2006)", tags: ["essential"], note: "Grant Morrison begins. Damian Wayne debuts." },
          { title: "Batman: The Resurrection of Ra's al Ghul", issues: "Batman, Detective, Nightwing, Robin crossover (2007)", note: "Ra's returns. Spans multiple titles." },
          { title: "Batman: The Black Glove", issues: "Batman #667-669 (2007)", note: "The Club of Heroes debuts. Black Glove's first appearance." },
          { title: "Detective Comics #821-834", issues: "Detective Comics #821-834 (2006-2007)", note: "Paul Dini's run. Standalone mysteries." },
          { title: "Nightwing Vol. 2 #118-138", issues: "Nightwing #118-138 (2006-2007)", note: "Dick's solo title during this period." },
          { title: "Robin Vol. 2 #148-167", issues: "Robin #148-167 (2006-2007)", note: "Tim Drake as Robin." },
          { title: "Batman and the Outsiders Vol. 2 #1-10", issues: "Batman and the Outsiders #1-10 (2007)", note: "The team with Black Lightning." },
          { title: "Gotham Underground #1-9", issues: "Gotham Underground #1-9 (2007-2008)", note: "The criminal underworld of Gotham." },
          { title: "Detective Comics #834-850", issues: "Detective Comics #834-850 (2007-2008)", note: "Continued Gotham stories." },
          { title: "Batman R.I.P.", issues: "Batman #676-681 (2008)", tags: ["essential"], note: "Morrison's final Batman arc before Final Crisis. Black Glove's endgame." },
          { title: "Batman and the Outsiders #11-13", issues: "Batman and the Outsiders #11-13 (2008)", note: "Outsiders final issues before FC." },
          { title: "Robin #175-183", issues: "Robin #175-183 (2008-2009)", note: "Tim's final issues before searching for Bruce." },
          { title: "Nightwing #147-153", issues: "Nightwing #147-153 (2008-2009)", note: "Dick's solo title through Final Crisis." },
          { title: "Batman #682-683: Last Rites", issues: "Batman #682-683 (2008)", tags: ["essential"], note: "Batman's life during Final Crisis #5-6. Essential context." },
        ]
      },
      {
        icon: "🧬",
        title: "Titans/Legacy/Street Track",
        items: [
          { title: "Teen Titans Vol. 3 #34-57", issues: "Teen Titans #34-57 (2006-2008)", note: "Robin, Superboy, Kid Flash, Wonder Girl, Raven, Beast Boy, Starfire." },
          { title: "Titans (2008) #1-6", issues: "Titans #1-6 (2008)", note: "Adult Titans team." },
          { title: "Outsiders Vol. 3 #34-49", issues: "Outsiders #34-49 (2006-2007)", note: "Nightwing's team. Grace, Jade, Thunder." },
          { title: "Outsiders: Five of a Kind", issues: "2007 crossover", note: "Outsiders spotlight mini-series." },
        ]
      },
      {
        icon: "🕵️",
        title: "Villains/Intelligence Layer",
        items: [
          { title: "Checkmate Vol. 2 #1-31", issues: "Checkmate #1-31 (2006-2008)", note: "The spy organization. Sasha Bordeaux and Maxwell Lord." },
          { title: "Secret Six: Six Degrees of Devastation", issues: "2008 mini-series", note: "The team's origin and first story." },
          { title: "Secret Six Vol. 3 #1-14", issues: "Secret Six #1-14 (2008-2009)", note: "Gail Simone's definitive run begins." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman Track",
        items: [
          { title: "Superman: Up, Up and Away", issues: "Superman #650-653 & Action Comics #837-840 (2006)", note: "Superman's powers return after Infinite Crisis." },
          { title: "Superman #654-675", issues: "Superman #654-675 (2006-2008)", note: "The Superman title during this era." },
          { title: "Action Comics #841-871", issues: "Action Comics #841-871 (2006-2008)", note: "Action Comics run through Final Crisis." },
          { title: "Supergirl Vol. 5 #10-30", issues: "Supergirl #10-30 (2006-2008)", note: "Kara Zor-El's solo series." },
          { title: "Supergirl and the Legion of Super-Heroes #16-37", issues: "#16-37 (2006-2008)", note: "Legion integration." },
          { title: "Legion of Super-Heroes Vol. 5 #38-50", issues: "#38-50 (2008)", note: "The Legion title." },
        ]
      },
      {
        icon: "🦸‍♀️",
        title: "Wonder Woman Track",
        items: [
          { title: "Wonder Woman Vol. 3 #1-13", issues: "#1-13 (2006-2007)", note: "Jodi Picoult's run." },
          { title: "Amazons Attack! #1-6", issues: "#1-6 (2007)", note: "The controversial crossover event." },
          { title: "Wonder Girl (2007) #1-6", issues: "#1-6 (2007)", note: "Cassie Sandsmark's solo series." },
          { title: "Wonder Woman #14-24", issues: "#14-24 (2007-2008)", note: "Gail Simone takes over." },
          { title: "Trinity #1-17", issues: "#1-17 (2008)", note: "Superman, Batman, Wonder Woman in weekly series." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern & Corps Track",
        items: [
          { title: "Green Lantern Vol. 4 #13-20", issues: "#13-20 (2006-2007)", note: "Hal Jordan's title." },
          { title: "Green Lantern Corps Vol. 2 #1-13", issues: "#1-13 (2006-2007)", note: "The Corps title launches." },
          { title: "Sinestro Corps War (Crossover)", issues: "2007", note: "Epic GL event." },
          { title: "Green Lantern: Sinestro Corps Special #1", issues: "(2007)", tags: ["essential"], note: "The Sinestro Corps attacks." },
          { title: "Green Lantern #21-25", issues: "#21-25 (2007)", note: "War escalates." },
          { title: "Green Lantern Corps #14-19", issues: "#14-19 (2007)", note: "Corps in the war." },
          { title: "Tales of the Sinestro Corps", issues: "(2007)", note: "Character spotlight minis." },
          { title: "Green Lantern #26-28", issues: "#26-28 (2007-2008)", note: "War aftermath." },
          { title: "Green Lantern Corps #20-24", issues: "#20-24 (2007-2008)", note: "Corps aftermath." },
          { title: "Rage of the Red Lanterns", issues: "(2007-2008)", note: "Red Lanterns emerge." },
        ]
      },
      {
        icon: "🏛",
        title: "JLA/JSA Track",
        items: [
          { title: "JSA #83-87", issues: "#83-87 (2006)", note: "Conclusion of original JSA series." },
          { title: "Justice League of America Vol. 2 #0-12", issues: "#0-12 (2006-2007)", note: "The new JLA era begins." },
          { title: "Justice Society of America Vol. 3 #1-4", issues: "#1-4 (2007)", note: "The new JSA series." },
          { title: "Justice League of America #8-12", issues: "#8-12 (2007)", note: "JLA continues." },
          { title: "Justice Society of America #5-6", issues: "#5-6 (2007)", note: "JSA continues." },
          { title: "Justice League of America #13-21", issues: "#13-21 (2007-2008)", note: "JLA toward Final Crisis." },
          { title: "Justice Society of America #7-22", issues: "#7-22 (2007-2009)", note: "JSA toward Final Crisis." },
          { title: "Justice Society of America #23-26", issues: "#23-26 (2009)", note: "JSA aftermath." },
          { title: "Power Girl (2009) #1-27", issues: "#1-27 (2009)", note: "Karen Starr's solo series." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic/Multiverse Track",
        items: [
          { title: "Seven Soldiers by Grant Morrison (Full Series)", issues: "(2005-2006)", tags: ["essential"], note: "Shining Knight, Guardian, Zatanna, Klarion, Mister Miracle, Bulleteer, Frankenstein." },
          { title: "Death of the New Gods", issues: "(2007-2008)", note: "The Fourth World faces apocalypse." },
          { title: "Blue Beetle Vol. 7 #1-26", issues: "#1-26 (2006-2008)", note: "Jaime Reyes as Blue Beetle." },
          { title: "Booster Gold Vol. 2 #1-10", issues: "#1-10 (2007-2008)", note: "Michael Jon Carter's new solo series." },
        ]
      },
      {
        icon: "🧭",
        title: "Countdown to Final Crisis",
        items: [
          { title: "Countdown to Final Crisis #51-0", issues: "#51-0 (2007-2008)", tags: ["essential"], note: "Weekly series. Mary Marvel's fall. The Monitors. Context for FC." },
          { title: "Countdown: The Search for Ray Palmer #1-4", issues: "#1-4 (2007)", note: "Multiverse exploration. Donna, Jason, Kyle, Monitor Bob." },
          { title: "Countdown to Adventure #1-8", issues: "#1-8 (2007-2008)", note: "Adam Strange, Animal Man, Starfire." },
          { title: "Countdown to Mystery #1-8", issues: "#1-8 (2007-2008)", note: "Doctor Fate and Eclipso stories." },
          { title: "Salvation Run #1-7", issues: "#1-7 (2007-2008)", note: "Villains exiled to a prison planet." },
          { title: "DC Universe #0", issues: "(2008)", tags: ["essential"], note: "Direct FC setup. Barry Allen returns. READ BEFORE FC." },
        ]
      },
      {
        icon: "🧨",
        title: "Final Crisis Event (Read in Order)",
        items: [
          { title: "Final Crisis #1-7", issues: "#1-7 (2008)", tags: ["essential"], note: "Darkseid wins. Anti-Life Equation enslaves Earth. Batman shot." },
          { title: "Final Crisis: Superman Beyond #1-2", issues: "3D #1-2 (2008)", tags: ["essential"], note: "Read after FC #3. Superman in Multiverse. The Thought Robot." },
          { title: "Final Crisis: Submit #1", issues: "(2008)", note: "Read after FC #3. Black Lightning and Tattooed Man." },
          { title: "Batman #682-683: Last Rites", issues: "(2008)", tags: ["essential"], note: "Batman's fate during FC #5-6. Critical." },
          { title: "Final Crisis: Revelations #1-5", issues: "#1-5 (2008)", note: "The Spectre vs. Libra. Renee Montoya as The Question." },
          { title: "Final Crisis: Legion of Three Worlds #1-5", issues: "#1-5 (2008-2009)", note: "Superboy-Prime vs. three Legions. Connor Kent and Bart Allen." },
          { title: "Final Crisis: Rogues' Revenge #1-3", issues: "#1-3 (2008)", tags: ["essential"], note: "The Rogues hunt Inertia. Essential Flash context." },
          { title: "Terror Titans #1-6", issues: "#1-6 (2008-2009)", note: "Dark Side Club. Teen heroes in death matches." },
        ]
      },
      {
        icon: "☠️",
        title: "LAYER 2: Blackest Night → Flashpoint",
        items: [
          { title: "Blackest Night #0-8", issues: "#0-8 (2009-2010)", tags: ["essential"], note: "The dead rise. Nekron unleashes Black Lantern rings." },
        ]
      },
      {
        icon: "☠️",
        title: "Blackest Night: Full Tie-Ins",
        items: [
          { title: "Blackest Night: Batman #1-3", issues: "#1-3 (2009)", note: "Dick Grayson vs. Black Lantern Graysons." },
          { title: "Blackest Night: Superman #1-3", issues: "#1-3 (2009)", note: "Black Lantern Kal-L and Earth-2 Lois." },
          { title: "Blackest Night: Titans #1-3", issues: "#1-3 (2009)", note: "Terra and other dead Titans return." },
          { title: "Blackest Night: The Flash #1-3", issues: "#1-3 (2009-2010)", note: "Barry confronts the Rogues' victims." },
          { title: "Blackest Night: Justice Society of America #1-3", issues: "#1-3 (2009-2010)", note: "The JSA faces Black Lanterns." },
          { title: "Blackest Night: Wonder Woman #1-3", issues: "#1-3 (2009-2010)", note: "Diana becomes a Star Sapphire." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman Track (Layer 2)",
        items: [
          { title: "Batman: Battle for the Cowl #1-3", issues: "#1-3 (2009)", tags: ["essential"], note: "Bruce 'dead'. Dick becomes Batman. Jason claims cowl." },
          { title: "Gotham Gazette: Batman Dead? #1", issues: "#1 (2009)", note: "Gotham's reaction to Batman's disappearance." },
          { title: "Azrael: Death's Dark Knight #1-3", issues: "#1-3 (2009)", note: "Jean-Paul Valley's return." },
          { title: "Oracle: The Cure #1-3", issues: "#1-3 (2009)", note: "Barbara Gordon's story." },
          { title: "Batman #687-691: Long Shadows", issues: "#687-691 (2009)", note: "Dick as Batman begins." },
          { title: "Detective Comics #852-865", issues: "#852-865 (2009-2010)", note: "Gotham detective stories." },
          { title: "Batman: Streets of Gotham #1-21", issues: "#1-21 (2009-2010)", note: "Street-level Gotham stories." },
          { title: "Batman #692-699: Life After Death", issues: "#692-699 (2009-2010)", note: "Dick's Batman era." },
          { title: "Batman: Arkham Reborn #1-3", issues: "#1-3 (2009)", note: "Arkham Asylum rebuilt." },
          { title: "Red Robin #1-26", issues: "#1-26 (2009-2011)", note: "Tim Drake searches for Bruce." },
          { title: "Batgirl (2009) #1-24", issues: "#1-24 (2009-2011)", tags: ["essential"], note: "Stephanie Brown as Batgirl. Bryan Q. Miller masterpiece." },
          { title: "Birds of Prey (2010) #1-15", issues: "#1-15 (2010-2011)", note: "Gail Simone returns. Oracle's team." },
          { title: "Gotham City Sirens #1-26", issues: "#1-26 (2009-2011)", note: "Catwoman, Ivy, Harley." },
          { title: "Batman and Robin #1-16", issues: "#1-16 (2009-2010)", tags: ["essential"], note: "Morrison's masterpiece. Dick and Damian." },
          { title: "Batman #700", issues: "#700 (2010)", note: "Anniversary issue." },
          { title: "Batman #701-702", issues: "#701-702 (2010-2011)", note: "Dick Batman continues." },
          { title: "Batman: The Return of Bruce Wayne #1-6", issues: "#1-6 (2010)", note: "Bruce travels through time home." },
          { title: "Batman: The Return (one-shot)", issues: "(2010)", note: "Bruce's return setup." },
          { title: "Batman Incorporated #1-8", issues: "#1-8 (2011)", note: "Bruce franchises Batman globally." },
          { title: "Batman Inc.: Leviathan Strikes", issues: "(2011)", note: "Leviathan arc." },
          { title: "Detective Comics #871-881: The Black Mirror", issues: "#871-881 (2011)", tags: ["essential"], note: "Scott Snyder masterpiece. Dick vs. Gordon Jr." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman Track (Layer 2)",
        items: [
          { title: "Superman: New Krypton Special", issues: "(2008)", note: "Kandor becomes a planet." },
          { title: "Superman #681-690", issues: "#681-690 (2008-2009)", note: "Superman title during New Krypton." },
          { title: "Action Comics #871-879", issues: "#871-879 (2008-2009)", note: "Action Comics." },
          { title: "Supergirl #35-43", issues: "#35-43 (2008-2009)", note: "Kara during New Krypton." },
          { title: "Superman: World of New Krypton #1-12", issues: "#1-12 (2009-2010)", note: "The New Krypton saga continues." },
          { title: "Action Comics #880-889", issues: "#880-889 (2009-2010)", note: "Superman on New Krypton." },
          { title: "Supergirl #45-52", issues: "#45-52 (2009-2010)", note: "Kara on New Krypton." },
          { title: "Superman: Last Stand of New Krypton #1-3", issues: "#1-3 (2010)", note: "War of the Supermen begins." },
          { title: "Superman: War of the Supermen #0-4", issues: "#0-4 (2010)", tags: ["essential"], note: "The New Krypton saga concludes." },
          { title: "Superman #700", issues: "#700 (2010)", note: "Anniversary issue." },
          { title: "Action Comics #890-900", issues: "#890-900 (2010-2011)", note: "Superman returns to Earth." },
          { title: "Superman #701-714", issues: "#701-714 (2010-2011)", note: "Superman title toward Flashpoint." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern Track (Layer 2)",
        items: [
          { title: "Green Lantern #43-52", issues: "#43-52 (2009-2010)", note: "GL title through Blackest Night." },
          { title: "Green Lantern Corps #39-47", issues: "#39-47 (2009-2010)", note: "Corps through Blackest Night." },
          { title: "Brightest Day #0-24", issues: "#0-24 (2010-2011)", tags: ["essential"], note: "Resurrection and aftermath." },
          { title: "Green Lantern #53-62", issues: "#53-62 (2010-2011)", note: "GL continues post-Blackest Night." },
          { title: "Green Lantern Corps #48-57", issues: "#48-57 (2010-2011)", note: "Corps continues." },
          { title: "War of the Green Lanterns", issues: "(2010)", note: "Event story." },
          { title: "Green Lantern #63-67", issues: "#63-67 (2011)", note: "GL toward Flashpoint." },
          { title: "Green Lantern Corps #58-60", issues: "#58-60 (2011)", note: "Corps toward Flashpoint." },
          { title: "Green Lantern: Emerald Warriors #8-10", issues: "#8-10 (2011)", note: "Guy Gardner's series." },
          { title: "War of the Green Lanterns: Aftermath #1-2", issues: "#1-2 (2011)", note: "War aftermath." },
          { title: "Green Lantern: Emerald Warriors #1-7", issues: "#1-7 (2010-2011)", note: "Guy Gardner solo series." },
        ]
      },
      {
        icon: "🏛",
        title: "Justice League/JSA (Layer 2)",
        items: [
          { title: "Justice League of America #38-43", issues: "#38-43 (2009-2010)", note: "JLA title." },
          { title: "Justice League: Cry for Justice #1-7", issues: "#1-7 (2009-2010)", note: "Arsenal leads a team." },
          { title: "Justice League of America #44-60", issues: "#44-60 (2010-2011)", note: "JLA continues." },
          { title: "Justice Society of America #41-57", issues: "#41-57 (2010-2011)", note: "JSA continues." },
          { title: "Justice League: Generation Lost #1-24", issues: "#1-24 (2010-2011)", note: "Blue Beetle and Booster Gold hunt Maxwell Lord." },
          { title: "Power Girl #1-27", issues: "#1-27 (2009-2011)", note: "Karen Starr solo series." },
        ]
      },
      {
        icon: "🧬",
        title: "Titans Track (Layer 2)",
        items: [
          { title: "Teen Titans #71-100", issues: "#71-100 (2009-2011)", note: "Teen Titans final issues." },
          { title: "Titans (2008) #7-38", issues: "#7-38 (2008-2010)", note: "Adult Titans team." },
        ]
      },
      {
        icon: "🦸‍♀️",
        title: "Wonder Woman Track (Layer 2)",
        items: [
          { title: "Wonder Woman #25-44", issues: "#25-44 (2009-2010)", note: "WW title Layer 2." },
          { title: "Blackest Night: Wonder Woman #1-3", issues: "#1-3 (2009-2010)", note: "Diana in Blackest Night." },
        ]
      },
      {
        icon: "🌌",
        title: "Magic/Cosmic Track (Layer 2)",
        items: [
          { title: "Zatanna (2010) #1-16", issues: "#1-16 (2010-2011)", note: "Zatanna solo series." },
          { title: "Mister Miracle (2010) #1-8", issues: "#1-8 (2010-2011)", note: "Shilo Norman as Mister Miracle." },
        ]
      },
      {
        icon: "⚡",
        title: "The Flash (Placed Last)",
        items: [
          { title: "The Flash: Rebirth #1-6", issues: "#1-6 (2009-2010)", tags: ["essential"], note: "Barry Allen returns. Speed Force redefined." },
          { title: "The Flash Vol. 3 #1-12", issues: "#1-12 (2010-2011)", note: "Barry's new series. Road to Flashpoint." },
        ]
      },
      {
        icon: "💥",
        title: "Flashpoint Event (Bottom of Phase 4)",
        items: [
          { title: "Flashpoint #1-5", issues: "#1-5 (2011)", tags: ["essential"], note: "Barry wakes in twisted timeline. Thomas Wayne is Batman." },
          { title: "Flashpoint: Batman – Knight of Vengeance #1-3", issues: "#1-3 (2011)", tags: ["essential"], note: "Thomas Wayne's brutal Batman. Best Flashpoint tie-in." },
          { title: "Flashpoint: Wonder Woman and the Furies #1-3", issues: "#1-3 (2011)", note: "Diana and Aquaman's war for Europe." },
          { title: "Flashpoint: Emperor Aquaman #1-3", issues: "#1-3 (2011)", note: "Arthur sinks Europe. Authoritarian vision." },
          { title: "Flashpoint: Project Superman #1-3", issues: "#1-3 (2011)", note: "Kal-El raised in government bunker." },
          { title: "Flashpoint: Citizen Cold #1-3", issues: "#1-3 (2011)", note: "Captain Cold as Central City's hero." },
        ]
      }
    ]
  },
  {
    id: 5,
    title: "The New 52",
    era: "2011–2015",
    color: "#1abc9c",
    desc: "A bold reboot that modernizes the DC Universe with fresh origins and streamlined continuity.",
    eventPause: {
      title: "Flashpoint",
      issues: "Flashpoint #1-5 by Geoff Johns & Andy Kubert",
      desc: "Barry Allen wakes up in a twisted timeline. The event that resets everything into the New 52."
    },
    tracks: [
      {
        icon: "⚡",
        title: "Core Events",
        items: [
          { title: "Trinity War", issues: "JL #22-23, JL Dark #22-23, JLA #6-7", note: "The prelude to Forever Evil. Three Justice Leagues clash." },
          { title: "Forever Evil", issues: "Forever Evil #1-7 by Geoff Johns & David Finch", tags: ["essential"], note: "The Crime Syndicate takes over. Villains become heroes." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman: The Court of Owls", issues: "Batman #1-7 by Scott Snyder & Greg Capullo", tags: ["essential"], note: "The defining Batman run of the 2010s." },
          { title: "Batman: The City of Owls", issues: "Batman #8-12", note: "The Court's attack on Gotham." },
          { title: "Batman: Death of the Family", issues: "Batman #13-17", tags: ["essential"], note: "The Joker returns, targeting the Bat-Family." },
          { title: "Batman: Zero Year", issues: "Batman #21-27", note: "The New 52 origin." },
          { title: "Batman: Endgame", issues: "Batman #35-40", tags: ["essential"], note: "The Joker's final battle." },
          { title: "Batman & Robin (Vol. 2) #1-40", issues: "Batman & Robin #1-40 by Peter Tomasi & Patrick Gleason", tags: ["essential"], note: "The definitive New 52 Bat-Family book. Bruce and Damian's relationship." },
          { title: "Grayson #1-20", issues: "Grayson #1-20 by Tim Seeley & Tom King", tags: ["essential"], note: "Dick Grayson becomes a spy for Spyral after faking his death." },
          { title: "Batgirl (Vol. 4) #1-34 by Gail Simone", issues: "Batgirl #1-34", note: "Barbara Gordon returns as Batgirl." },
          { title: "Red Hood and the Outlaws (Vol. 1) #1-40", issues: "Red Hood and the Outlaws #1-40 by Scott Lobdell", note: "Jason Todd, Arsenal, and Starfire as a team of anti-heroes." },
          { title: "Batwoman #1-40 by J.H. Williams III", issues: "Batwoman #1-40", tags: ["essential"], note: "Kate Kane's definitive solo run." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "Action Comics (Vol. 2) #1-18 by Grant Morrison", issues: "Action Comics #1-18", note: "Young Superman in Metropolis." },
          { title: "Superman: Unchained", issues: "Superman: Unchained #1-9 by Scott Snyder", note: "A standalone masterpiece." },
          { title: "Supergirl (Vol. 6) #1-40", issues: "Supergirl #1-40", note: "Kara's New 52 solo series." },
        ]
      },
      {
        icon: "⚡",
        title: "Justice League",
        items: [
          { title: "Justice League: Origin", issues: "Justice League #1-6 by Geoff Johns & Jim Lee", note: "The New 52 reboot of the League." },
          { title: "Justice League: The Darkseid War Saga", issues: "Justice League #40-50", tags: ["essential"], note: "The conclusion of the New 52 League. Darkseid dies. The Anti-Monitor returns." },
        ]
      },
      {
        icon: "⚡",
        title: "Flash",
        items: [
          { title: "The Flash: Move Forward", issues: "The Flash (Vol. 4) #1-8 by Francis Manapul", note: "Barry Allen's New 52 origin." },
          { title: "The Flash: Rogues Revolution", issues: "The Flash (Vol. 4) #9-17", note: "The Rogues get powers." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: Sinestro", issues: "GL (Vol. 5) #1-6 by Geoff Johns", note: "Sinestro becomes a Green Lantern again." },
          { title: "Green Lantern: Wrath of the First Lantern", issues: "GL #17-20", note: "Volthoom, the First Lantern, escapes." },
          { title: "Green Lantern: New Guardians #1-40", issues: "GL: New Guardians #1-40", note: "Kyle Rayner becomes a White Lantern." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "Titans Hunt #1-8 by Dan Abnett", issues: "Titans Hunt #1-8", tags: ["essential"], note: "A pre-Rebirth mystery revealing the original Titans' memories were erased. Essential bridge to Rebirth." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic / Vertigo",
        items: [
          { title: "The Multiversity", issues: "The Multiversity #1-2, various one-shots by Grant Morrison", tags: ["essential"], note: "A tour of the Multiverse." },
          { title: "Earth 2 #1-32 by James Robinson", issues: "Earth 2 #1-32", note: "The new Justice Society on Earth-2." },
          { title: "Swamp Thing (Vol. 5) #1-40 by Scott Snyder", issues: "Swamp Thing #1-40", note: "The New 52 Swamp Thing saga." },
          { title: "Justice League Dark #1-40", issues: "JL Dark #1-40 by Peter Milligan, Jeff Lemire", note: "The magical team forms." },
        ]
      }
    ]
  },
  {
    id: 6,
    title: "DC Rebirth & Return of Legacy",
    era: "2016–2018",
    color: "#3498db",
    desc: "Restoring hope and legacy to the DC Universe while uncovering the mystery behind the missing years.",
    eventPause: {
      title: "DC Universe: Rebirth #1",
      issues: "DC Universe: Rebirth #1 by Geoff Johns",
      desc: "The essential one-shot. Wally West returns. Dr. Manhattan's manipulation is revealed. Read before starting any Rebirth titles."
    },
    tracks: [
      {
        icon: "⚡",
        title: "Core Events / Mystery",
        items: [
          { title: "DC Universe: Rebirth #1", issues: "DC Universe: Rebirth #1", tags: ["essential"], note: "The essential one-shot. Wally West returns. The timeline was stolen." },
          { title: "The Button", issues: "Batman #21-22, The Flash #21-22", note: "Batman and Flash investigate the Comedian's button." },
          { title: "Doomsday Clock", issues: "Doomsday Clock #1-12 by Geoff Johns & Gary Frank", tags: ["essential"], note: "Dr. Manhattan confronts Superman. The Justice Society returns." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman: I Am Gotham by Tom King", issues: "Batman #1-6", note: "The beginning of King's run." },
          { title: "Batman: The War of Jokes and Riddles", issues: "Batman #25-32", tags: ["essential"], note: "Joker vs. Riddler. A gang war that tears Gotham apart." },
          { title: "Batman: The Wedding", issues: "Batman #44-50", tags: ["essential"], note: "Bruce and Selina almost marry." },
          { title: "Batman: City of Bane", issues: "Batman #64-69, 71-75", tags: ["essential"], note: "The conclusion of Tom King's run. Bane conquers Gotham." },
          { title: "Detective Comics (Vol. 1) #934-981 by James Tynion IV", issues: "Detective Comics #934-981", tags: ["essential"], note: "The Bat-Family team book. Batman forms an army: Batwoman, Tim Drake, Stephanie Brown, Cassandra Cain, Clayface." },
          { title: "Nightwing (Vol. 4) #1-50 by Tim Seeley", issues: "Nightwing #1-50", note: "Dick's Rebirth run." },
          { title: "Red Hood and the Outlaws (Vol. 2) #1-50", issues: "Red Hood and the Outlaws #1-50", note: "Jason Todd teams with Artemis and Bizarro — the 'Dark Trinity.'" },
          { title: "Batgirl (Vol. 5) #1-50", issues: "Batgirl #1-50 by Hope Larson", note: "Barbara's Rebirth run." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "Superman: Rebirth by Peter Tomasi & Gleason", issues: "Superman #1-25, Annual #1", tags: ["essential"], note: "The definitive 'Superman as father' run. Clark and Lois raise their son, Jonathan Kent." },
          { title: "Super Sons #1-16 by Peter Tomasi", issues: "Super Sons #1-16", tags: ["essential"], note: "Jon Kent and Damian Wayne's adventures." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman: The Lies by Greg Rucka", issues: "Wonder Woman #1-6, 8, 10", tags: ["essential"], note: "The first Rebirth arc." },
          { title: "Wonder Woman: Year One by Greg Rucka", issues: "Wonder Woman #2, 4, 6, 8, 10", tags: ["essential"], note: "The Rebirth origin." },
        ]
      },
      {
        icon: "⚡",
        title: "Flash",
        items: [
          { title: "The Flash (Vol. 5) #1-50 by Joshua Williamson", issues: "The Flash #1-50", tags: ["essential"], note: "The definitive Rebirth Flash run." },
          { title: "Titans: The Return of Wally West", issues: "Titans: Rebirth #1, Titans #1-6", tags: ["essential"], note: "Wally West returns. The classic Titans reunite." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Hal Jordan and the GL Corps: Sinestro's Law", issues: "HJGLC #1-7 by Robert Venditti", note: "The Rebirth Green Lantern series." },
          { title: "Green Lanterns #1-57 by Sam Humphries", issues: "Green Lanterns #1-57", note: "Jessica Cruz and Simon Baz." },
        ]
      },
      {
        icon: "🏹",
        title: "Green Arrow",
        items: [
          { title: "Green Arrow (Vol. 6) #1-50 by Benjamin Percy", issues: "Green Arrow #1-50", note: "The Rebirth Green Arrow run." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "Titans (Vol. 3) #1-36 by Dan Abnett", issues: "Titans #1-36", note: "Wally West returns. The classic Titans reunite: Nightwing, Donna Troy, Wally, Roy Harper." },
          { title: "Teen Titans (Vol. 6) #1-47 by Benjamin Percy", issues: "Teen Titans #1-47", note: "Damian Wayne leads a new team of Teen Titans." },
          { title: "Deathstroke (Vol. 4) #1-50 by Christopher Priest", issues: "Deathstroke #1-50", tags: ["essential"], note: "The definitive modern Deathstroke. Essential for Titans lore." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic / Dark",
        items: [
          { title: "Justice League Dark (Vol. 2) #1-29 by James Tynion IV & Ram V", issues: "JL Dark #1-29", tags: ["essential"], note: "The definitive modern Justice League Dark run." },
          { title: "The Sandman Universe #1 + The Dreaming #1-20", issues: "Various Sandman Universe titles", note: "The revival of Gaiman's universe begins." },
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Dark Knights & the Dark Multiverse",
    era: "2018–2020",
    color: "#8e44ad",
    desc: "The Dark Multiverse emerges as a major threat, featuring Dark Nights: Metal and its aftermath.",
    eventPause: {
      title: "Dark Nights: Metal",
      issues: "Dark Nights: Metal #1-6 by Scott Snyder & Greg Capullo",
      desc: "The Dark Multiverse invades. The Batman Who Laughs leads seven dark Batmen. Read Dark Days: The Forge & The Casting first as preludes."
    },
    tracks: [
      {
        icon: "🌑",
        title: "Core Events",
        items: [
          { title: "Dark Days: The Forge + The Casting", issues: "Dark Days: The Forge #1, Dark Days: The Casting #1", note: "Preludes to Metal." },
          { title: "Dark Nights: Metal", issues: "Dark Nights: Metal #1-6", tags: ["essential"], note: "The Dark Multiverse invades. Seven dark Batmen attack." },
          { title: "Dark Nights: Metal — Dark Knights Rising", issues: "Various one-shots", note: "Origins of the dark Batmen." },
          { title: "Justice League: No Justice", issues: "JL: No Justice #1-4", note: "The aftermath of Metal. New cosmic teams form." },
          { title: "Justice League (Vol. 4) #1-39 by Scott Snyder", issues: "JL #1-39", tags: ["essential"], note: "The run that reveals Perpetua — the Mother of the Universe." },
          { title: "Dark Nights: Death Metal", issues: "Dark Nights: Death Metal #1-7", tags: ["essential"], note: "The conclusion. Perpetua's plan culminates. The multiverse is restored to infinite." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman: Their Dark Designs by James Tynion IV", issues: "Batman #86-94", note: "The beginning of Tynion's run." },
          { title: "Batman: The Joker War", issues: "Batman #95-100", tags: ["essential"], note: "The Joker's final assault on Gotham. He steals Bruce Wayne's fortune." },
          { title: "Batman: Fear State Saga", issues: "Batman #112-117", note: "The conclusion of Tynion's run. Scarecrow's fear pandemic." },
          { title: "Nightwing (Vol. 4) #51-77", issues: "Nightwing #51-77", note: "Dick's series continues." },
          { title: "Batman: Urban Legends #1-24", issues: "Batman: Urban Legends #1-24", note: "Anthology series with important Bat-Family stories." },
          { title: "Catwoman (Vol. 5) #1-50 by Joëlle Jones", issues: "Catwoman #1-50", note: "Selina's Rebirth run." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "Superman (Vol. 5) #1-28 by Brian Michael Bendis", issues: "Superman #1-28", note: "The Bendis era begins." },
          { title: "Action Comics #1001-1028 by Bendis", issues: "Action Comics #1001-1028", note: "The companion series." },
          { title: "Supergirl: Woman of Tomorrow by Tom King", issues: "Supergirl: Woman of Tomorrow #1-8", tags: ["essential"], note: "A standalone masterpiece. Kara's cosmic journey." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "The Green Lantern #1-12 by Grant Morrison", issues: "The Green Lantern #1-12", tags: ["essential"], note: "Morrison's cosmic GL run. Hal Jordan as a space cop. Cosmic noir." },
          { title: "Green Lantern: Season Two", issues: "Green Lantern Season Two #1-12", note: "Morrison's conclusion." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman (Vol. 5) #51-83", issues: "Various runs", note: "Various runs post-Rebirth." },
        ]
      },
      {
        icon: "⚡",
        title: "Flash",
        items: [
          { title: "The Flash (Vol. 5) #50-88 by Joshua Williamson", issues: "The Flash #50-88", note: "Williamson's run concludes." },
          { title: "The Flash: Flash War", issues: "The Flash #47-51", tags: ["essential"], note: "Wally West vs. Barry Allen over the Speed Force." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "Young Justice (Vol. 3) #1-20 by Bendis", issues: "Young Justice #1-20", note: "The original team returns." },
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Infinite Frontier & the New Golden Age",
    era: "2021–2023",
    color: "#f39c12",
    desc: "The Omniverse expands as DC embraces infinite possibilities and celebrates its legacy.",
    eventPause: {
      title: "Dark Crisis on Infinite Earths",
      issues: "Dark Crisis on Infinite Earths #1-7 by Joshua Williamson",
      desc: "The Justice League dies (trapped by Pariah). The legacy heroes must save reality. The Great Darkness is defeated. The stage is set for Dawn of DC."
    },
    tracks: [
      {
        icon: "🌌",
        title: "Core Events",
        items: [
          { title: "Infinite Frontier #0-6 by Joshua Williamson", issues: "Infinite Frontier #0-6", tags: ["essential"], note: "The new status quo. Legacy characters are front and center." },
          { title: "Justice League Incarnate #1-5", issues: "JL Incarnate #1-5", note: "The multiversal Justice League." },
          { title: "Shadow War: Alpha + Omega", issues: "Shadow War: Alpha #1, Shadow War: Omega #1", note: "Deathstroke, Robin, and the League of Assassins." },
          { title: "Dark Crisis on Infinite Earths #1-7", issues: "Dark Crisis #1-7", tags: ["essential"], note: "The Justice League dies. Nightwing leads the remaining heroes." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman: The Abyss by Joshua Williamson", issues: "Batman #118-121", note: "The beginning of Williamson's run." },
          { title: "Batman: The Gotham War", issues: "Batman #137-140, Catwoman #57-60", tags: ["essential"], note: "Batman vs. Catwoman." },
          { title: "Batman: Failsafe", issues: "Batman #125-130", note: "A Batman contingency protocol goes rogue." },
          { title: "Nightwing (Vol. 4) #78-100 by Tom Taylor", issues: "Nightwing #78-100", tags: ["essential"], note: "The definitive modern Nightwing run. Dick inherits Alfred's fortune and saves Bludhaven." },
          { title: "Batgirls #1-19 by Becky Cloonan & Michael Conrad", issues: "Batgirls #1-19", note: "Cassandra Cain and Stephanie Brown as Batgirls." },
          { title: "Robin (Vol. 5) #1-20 by Joshua Williamson", issues: "Robin #1-20", note: "Damian Wayne enters the Lazarus Tournament." },
          { title: "Batman and Robin by Joshua Williamson", issues: "Batman and Robin #1-ongoing", note: "Bruce and Damian's father-son dynamic." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "Superman: The Warworld Saga", issues: "Superman #29-39, Action Comics #1036-1045", tags: ["essential"], note: "Clark leads a revolution on Warworld. A gladiator-king epic." },
          { title: "Superman: Son of Kal-El #1-18 by Tom Taylor", issues: "Superman: Son of Kal-El #1-18", note: "Jon Kent takes over as Superman." },
          { title: "Supergirl: Woman of Tomorrow by Tom King", issues: "Supergirl: WoT #1-8", tags: ["essential"], note: "A standalone masterpiece. Read here if not already." },
        ]
      },
      {
        icon: "⚡",
        title: "Flash",
        items: [
          { title: "The Flash (Vol. 6) #1-15 by Jeremy Adams", issues: "The Flash #1-15", tags: ["essential"], note: "A beloved, fun Flash run." },
          { title: "The Flash: One-Minute War", issues: "The Flash #795-800", note: "The speedster event." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern (Vol. 6) #1-12 by Geoffrey Thorne", issues: "Green Lantern #1-12", note: "The post-Morrison era." },
          { title: "Green Lantern: War Journal by Phillip Kennedy Johnson", issues: "GL: War Journal #1-12", note: "John Stewart's solo series." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman: Trial of the Amazons", issues: "WW #784-788, etc.", note: "A crossover event." },
          { title: "Wonder Woman (Vol. 5) #770-800", issues: "Various runs", note: "Various runs." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "Titans (Vol. 4) #1-12 by Tom Taylor & Nicola Scott", issues: "Titans #1-12", tags: ["essential"], note: "The current Titans era. The team operates from Titans Tower in Bludhaven." },
          { title: "Titans: Beast World #1-6", issues: "Titans: Beast World #1-6", tags: ["essential"], note: "The major event. Amanda Waller weaponizes Starro." },
          { title: "World's Finest: Teen Titans #1-6 by Mark Waid", issues: "WF: Teen Titans #1-6", note: "Flashback series with the classic Wolfman/Pérez lineup." },
          { title: "The New Golden Age #1 by Geoff Johns", issues: "The New Golden Age #1", note: "The Justice Society returns." },
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Dawn of DC & All-In",
    era: "2023–Present",
    color: "var(--gold)",
    desc: "A new era begins with fresh creative directions and the ambitious All-In initiative. The Absolute Universe is born.",
    eventPause: {
      title: "DC All-In / Absolute Power",
      issues: "Absolute Power #1-4 (2024), DC All-In Special #1 (2024)",
      desc: "Amanda Waller steals all superpowers. The heroes must fight as mortals. The Absolute Universe launches — darker versions of Batman, Superman, and Wonder Woman."
    },
    tracks: [
      {
        icon: "🌌",
        title: "Core / Absolute Universe",
        items: [
          { title: "Absolute Power", issues: "Absolute Power #1-4 (2024)", tags: ["essential"], note: "Amanda Waller's ultimate victory. The heroes are powerless." },
          { title: "DC All-In Special #1", issues: "DC All-In Special #1", note: "The launchpad for the current era." },
          { title: "Justice League Unlimited #1-ongoing by Mark Waid & Dan Mora", issues: "JLU #1-ongoing", tags: ["essential"], note: "The flagship team book of the current era." },
          { title: "Absolute Batman by Scott Snyder", issues: "Absolute Batman #1-ongoing", tags: ["essential"], note: "Batman with no money, no manor. A giant armored Batman." },
          { title: "Absolute Superman by Jason Aaron", issues: "Absolute Superman #1-ongoing", tags: ["essential"], note: "Kal-El witnessed Krypton's destruction." },
          { title: "Absolute Wonder Woman by Kelly Thompson", issues: "Absolute Wonder Woman #1-ongoing", tags: ["essential"], note: "Diana raised in Hell by Circe." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman: The Bat-Man of Gotham (Batman #131-139)", issues: "Batman #131-139", note: "Zur-En-Arrh Batman. Bruce fights his own psyche." },
          { title: "Batman by Chip Zdarsky (Batman #125-present)", issues: "Batman #125-ongoing", tags: ["essential"], note: "The current Batman run." },
          { title: "Batman by Matt Fraction & Jorge Jimenez (2025-present)", issues: "Batman #150-ongoing", tags: ["essential"], note: "The current bestselling run." },
          { title: "Nightwing by Tom Taylor (ongoing)", issues: "Nightwing #78-118", tags: ["essential"], note: "Dick Grayson as the heart of the DCU." },
          { title: "Batman/Superman: World's Finest by Mark Waid", issues: "Batman/Superman: World's Finest #1-ongoing", tags: ["essential"], note: "A modern classic set in the past." },
          { title: "The Penguin #1-12 by Tom King", issues: "The Penguin #1-12", note: "Oswald Cobblepot's rise to power. A villain-focused crime epic." },
          { title: "Robin & Batman #1-3 by Jeff Lemire", issues: "Robin & Batman #1-3", note: "Damian's origin retold." },
          { title: "Catwoman by Tini Howard (ongoing)", issues: "Catwoman #50-ongoing", note: "The current Catwoman run." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "Superman by Joshua Williamson (Vol. 6) #1-ongoing", issues: "Superman #1-ongoing", tags: ["essential"], note: "The current Superman run." },
          { title: "Action Comics by Phillip Kennedy Johnson #1051-ongoing", issues: "Action Comics #1051-ongoing", note: "The post-Warworld era." },
          { title: "Superman: House of Brainiac (2024)", issues: "Superman: House of Brainiac crossover", note: "Brainiac returns. He collects cities again." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman by Tom King (Vol. 6) #1-ongoing", issues: "Wonder Woman #1-ongoing", tags: ["essential"], note: "Diana faces the Sovereign. A villain who claims to be her dark mirror." },
        ]
      },
      {
        icon: "⚡",
        title: "Flash",
        items: [
          { title: "The Flash by Si Spurrier (Vol. 7) #1-ongoing", issues: "The Flash #1-ongoing", note: "The current Flash run." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: Fearsome by Jeremy Adams (2025-present)", issues: "Green Lantern (Vol. 8) #1-ongoing", note: "The current Green Lantern run." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "Titans (Vol. 4) #13-ongoing", issues: "Titans #13-ongoing", note: "Continues after Beast World." },
          { title: "World's Finest: Teen Titans #7-ongoing by Mark Waid", issues: "WF: Teen Titans #7-ongoing", note: "The flashback series continues." },
        ]
      }
    ]
  }
];

// Elseworlds data for DC
const DC_ELSEWORLDS = [
  { title: "Batman: Gotham by Gaslight", year: "1989", type: "Elseworlds", desc: "The first official Elseworlds. Batman in a Victorian-era Gotham hunting Jack the Ripper.", phase: "Phase 1" },
  { title: "Superman: Speeding Bullets", year: "1993", type: "Elseworlds", desc: "Kal-El is raised by the Waynes and becomes both Superman and a dark vigilante.", phase: "Phase 1" },
  { title: "Superman: Red Son", year: "2003", type: "Elseworlds", desc: "What if Superman's rocket had landed in the Soviet Union? A communist Superman defines the alternate-timeline template.", phase: "Phase 3" },
  { title: "Batman: The Doom That Came to Gotham", year: "2000", type: "Elseworlds", desc: "Lovecraftian horror meets Batman in this terrifying alternate reality.", phase: "Phase 2" },
  { title: "Kingdom Come", year: "1996", type: "Elseworlds", desc: "A possible future where the classic heroes reckon with a world that has moved past them. Essential for understanding DC's mythology.", phase: "Phase 2" },
  { title: "All-Star Superman", year: "2005-2008", type: "Elseworlds", desc: "The definitive Superman story. Grant Morrison and Frank Quitely create an eternal masterpiece.", phase: "Phase 3" },
  { title: "Batman: Whatever Happened to the Caped Crusader?", year: "2009", type: "Elseworlds", desc: "Neil Gaiman's elegy for Batman. Every version of his death told at once.", phase: "Phase 4" },
  { title: "Superman: Secret Origin", year: "2009", type: "Elseworlds", desc: "Geoff Johns' definitive modern origin retelling.", phase: "Phase 4" },
  { title: "Injustice: Gods Among Us (Year 1-5)", year: "2013-2016", type: "Elseworlds", desc: "The definitive Elseworlds of the New 52 era. Superman becomes a dictator. A brutal alternate reality.", phase: "Phase 5" },
  { title: "Batman: White Knight", year: "2017", type: "Elseworlds", desc: "Joker is cured and becomes a hero. Batman is the villain.", phase: "Phase 6" },
  { title: "Batman: Creature of the Night", year: "2017", type: "Elseworlds", desc: "A young boy believes he is Batman in a realistic world.", phase: "Phase 6" },
  { title: "Mister Miracle by Tom King", year: "2017", type: "Elseworlds", desc: "Scott Free escapes death traps and depression. A masterpiece about grief and war.", phase: "Phase 6" },
  { title: "Batman: Last Knight on Earth", year: "2019", type: "Elseworlds", desc: "Snyder/Capullo. Batman's final story in a post-apocalypse.", phase: "Phase 7" },
  { title: "Wonder Woman: Dead Earth", year: "2019", type: "Elseworlds", desc: "Diana wakes in a future where she failed. A dark, haunting masterpiece.", phase: "Phase 7" },
  { title: "Batman/Catwoman by Tom King", year: "2021", type: "Black Label", desc: "Tom King's alternate-timeline conclusion to his Batman run.", phase: "Phase 7" },
  { title: "Supergirl: Woman of Tomorrow", year: "2021", type: "Standalone", desc: "Tom King & Bilquis Evely's definitive Supergirl story. A cosmic journey.", phase: "Phase 8" },
  { title: "The Human Target #1-12 by Tom King", year: "2021", type: "Black Label", desc: "A 12-issue masterpiece featuring the Justice League International.", phase: "Phase 8" },
  { title: "Catwoman: Lonely City by Cliff Chiang", year: "2021", type: "Black Label", desc: "A future story. Older Selina Kyle in a changed Gotham.", phase: "Phase 8" },
  { title: "Superman: Space Age", year: "2022", type: "Elseworlds", desc: "A standalone Silver Age reimagining of Superman's story.", phase: "Phase 8" },
  { title: "Batman: The Knight by Chip Zdarsky", year: "2022", type: "Elseworlds", desc: "Bruce Wayne's training years before becoming Batman.", phase: "Phase 8" },
  { title: "Absolute Batman #1-ongoing", year: "2024", type: "Absolute Universe", desc: "Scott Snyder & Nick Dragotta. A Batman with no money, no manor — a giant armored figure from Gotham's worst neighborhoods.", phase: "Phase 9" },
  { title: "Absolute Superman #1-ongoing", year: "2024", type: "Absolute Universe", desc: "Jason Aaron & Rafa Sandoval. Kal-El witnessed Krypton's destruction firsthand.", phase: "Phase 9" },
  { title: "Absolute Wonder Woman #1-ongoing", year: "2024", type: "Absolute Universe", desc: "Kelly Thompson & Hayden Sherman. Diana raised in Hell by Circe — a horror-fantasy take.", phase: "Phase 9" },
];

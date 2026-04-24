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
        title: "Justice League",
        items: [
          { title: "Justice League of America: The Silver Age Vol. 1-2", issues: "The Brave and the Bold #28-30, JLA #1-16", tags: ["essential"], note: "The team's formation. Establishes the classic League." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman",
        items: [
          { title: "Batman: The Greatest Stories Ever Told", issues: "Various issues", note: "Sampler of Golden/Silver Age Batman." },
          { title: "Batman: Strange Apparitions", issues: "Detective Comics #469-476, 478-479", note: "The late Bronze Age run that modernized Batman." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman",
        items: [
          { title: "Superman: The Greatest Stories Ever Told", issues: "Various issues", note: "Sampler of Golden/Silver Age Superman." },
          { title: "Superman: Kryptonite Nevermore", issues: "Superman #233-238, 240-242", note: "The Bronze Age story where Kryptonite's effects change." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman: The Golden Age Omnibus Vol. 1", issues: "All-Star Comics #8, Sensation Comics #1-24, Wonder Woman #1-7", note: "Her earliest adventures." },
        ]
      },
      {
        icon: "⚡",
        title: "Flash",
        items: [
          { title: "The Flash: The Silver Age Vol. 1-2", issues: "Showcase #4, 8, 13-14, The Flash #105-132", note: "Barry Allen's debut and early adventures.", tags: ["essential"] },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: The Silver Age Vol. 1-2", issues: "Showcase #22-24, Green Lantern #1-9", note: "Hal Jordan's debut and early adventures." },
        ]
      },
      {
        icon: "🏹",
        title: "Green Arrow",
        items: [
          { title: "Green Arrow: The Golden Age Vol. 1", issues: "More Fun Comics #73-107, Adventure Comics #103-117", note: "His earliest appearances." },
        ]
      },
      {
        icon: "🌌",
        title: "Cosmic Foundations",
        items: [
          { title: "Jack Kirby's Fourth World Omnibus", issues: "New Gods #1-11, Forever People #1-11, Mister Miracle #1-18, Jimmy Olsen #133-148", note: "The original New Gods saga. Introduces Darkseid, Orion, the Anti-Life Equation.", tags: ["essential"] },
        ]
      },
      {
        icon: "👥",
        title: "Team Foundations",
        items: [
          { title: "Teen Titans #1-43", issues: "Teen Titans #1-43 (1966-1973)", note: "The original Titans run." },
          { title: "Doom Patrol (Original)", issues: "My Greatest Adventure #80-85, Doom Patrol #86-121", note: "Original Doom Patrol debuts: Robotman, Negative Man, Elasti-Girl, The Chief." },
        ]
      },
      {
        icon: "🦇",
        title: "Bat-Family Foundations",
        items: [
          { title: "Detective Comics #38 (1940)", issues: "Detective Comics #38", note: "Dick Grayson debuts as Robin. The first sidekick." },
          { title: "Batman #1 (1940)", issues: "Batman #1", note: "Catwoman debuts (as 'The Cat'). Joker debuts." },
          { title: "Batman: A Death in the Family", issues: "Batman #426-429", note: "Jason Todd dies. The Joker murders him.", tags: ["essential"] },
          { title: "Batman: A Lonely Place of Dying", issues: "Batman #440-442, New Titans #60-61", note: "Tim Drake deduces Batman's identity and becomes Robin." },
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Crisis Era",
    era: "1985–1989",
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
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman: Year One", issues: "Batman #404-407", tags: ["essential"], note: "The definitive modern origin. Bruce becomes Batman, Gordon arrives in Gotham." },
          { title: "Batman: The Man Who Laughs", issues: "Batman: The Man Who Laughs #1", note: "Batman's first encounter with the Joker." },
          { title: "Batman: Second Chances", issues: "Batman #402-403, 408-416", note: "Jason Todd becomes the second Robin." },
          { title: "Batman: The Killing Joke", issues: "Batman: The Killing Joke #1 by Alan Moore", tags: ["essential"], note: "The Joker shoots Barbara Gordon, paralyzing her." },
          { title: "Batman: A Death in the Family", issues: "Batman #426-429", tags: ["essential"], note: "Jason Todd dies. The Joker murders him." },
          { title: "Batman: A Lonely Place of Dying", issues: "Batman #440-442, New Titans #60-61", note: "Tim Drake debuts." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "Superman: The Man of Steel", issues: "Man of Steel #1-6 by John Byrne", tags: ["essential"], note: "The post-Crisis rebooted origin." },
          { title: "Superman: The Exile", issues: "Superman #22-36, Action Comics #601-615", note: "Superman exiles himself after nearly killing the Kryptonite Man." },
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
        title: "Flash",
        items: [
          { title: "The Flash (Vol. 2) #1-14 by Mike Baron", issues: "The Flash (Vol. 2) #1-14", note: "Wally West takes over as The Flash. Barry is dead.", tags: ["essential"] },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: Emerald Dawn", issues: "Green Lantern: Emerald Dawn #1-6", note: "Hal Jordan's post-Crisis origin." },
          { title: "Green Lantern: Emerald Dawn II", issues: "Green Lantern: Emerald Dawn II #1-6", note: "Continuation." },
        ]
      },
      {
        icon: "⚡",
        title: "Justice League",
        items: [
          { title: "Legends", issues: "Legends #1-6 by John Ostrander & Len Wein", note: "Darkseid manipulates humanity. The Justice League reforms." },
          { title: "Justice League International Vol. 1-2", issues: "Justice League #1-6, JLI #7-25", note: "The funny, beloved League era. Booster Gold and Blue Beetle join." },
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
    eventPause: {
      title: "Identity Crisis",
      issues: "Identity Crisis #1-7 by Brad Meltzer & Rags Morales",
      desc: "A murder mystery that changes how you view the League. Sue Dibny is murdered. The League's secrets (mind-wiping) are exposed."
    },
    tracks: [
      {
        icon: "⚡",
        title: "Justice League",
        items: [
          { title: "JLA: Year One", issues: "JLA: Year One #1-12 by Mark Waid", note: "The post-Crisis origin of the Justice League." },
          { title: "JLA by Grant Morrison Vol. 1-4", issues: "JLA #1-41", tags: ["essential"], note: "The definitive modern League run." },
          { title: "JLA: Tower of Babel", issues: "JLA #43-46 by Mark Waid", tags: ["essential"], note: "Batman's contingency plans against the League are stolen and used." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman: The Long Halloween", issues: "Batman: The Long Halloween #1-13 by Jeph Loeb & Tim Sale", tags: ["essential"], note: "A 13-issue mystery spanning Batman's early career." },
          { title: "Batman: Dark Victory", issues: "Batman: Dark Victory #0-13 by Jeph Loeb & Tim Sale", note: "Direct sequel. Introduces Dick Grayson as Robin in the modern era." },
          { title: "Batman: Knightfall Omnibus Vol. 1-3", issues: "Batman #491-510, Detective Comics #659-677", tags: ["essential"], note: "Bane breaks Batman. Azrael temporarily assumes the mantle." },
          { title: "Batman: No Man's Land Vol. 1-2", issues: "Batman #563-574, Detective Comics #730-741", tags: ["essential"], note: "Gotham faces devastation. Cassandra Cain debuts as Batgirl." },
          { title: "Nightwing (Vol. 2) #1-70", issues: "Nightwing #1-70 by Chuck Dixon", note: "Definitive Nightwing solo run. Dick moves to Blüdhaven." },
          { title: "Robin (Vol. 4) #1-100", issues: "Robin #1-100 by Chuck Dixon", note: "Definitive Tim Drake solo run." },
          { title: "Birds of Prey #56-108 by Gail Simone", issues: "Birds of Prey #56-108", tags: ["essential"], note: "The definitive Birds of Prey run. Oracle, Black Canary, Huntress, Lady Blackhawk." },
          { title: "Catwoman (Vol. 3) #1-37 by Ed Brubaker", issues: "Catwoman #1-37", note: "The definitive modern Catwoman run." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "The Death and Return of Superman Omnibus", issues: "Superman #73-82, Action Comics #683-691, etc.", tags: ["essential"], note: "Complete saga. Superman dies fighting Doomsday. Four new Supermen appear. Superman eventually returns." },
          { title: "Superman: The Wedding and Beyond", issues: "Various including Superman: The Wedding Album #1", note: "Superman marries Lois Lane." },
          { title: "Steel (Vol. 1) #1-52", issues: "Steel #1-52", note: "John Henry Irons' solo series." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman (Vol. 2) #46-100", issues: "Various issues", note: "Various stories following Pérez's run." },
        ]
      },
      {
        icon: "⚡",
        title: "Flash",
        items: [
          { title: "The Flash by Mark Waid Book 1-5", issues: "The Flash (Vol. 2) #62-118, Annual #4-5", tags: ["essential"], note: "Definitive Wally West run. Introduces the Speed Force." },
          { title: "The Flash: Dead Heat", issues: "The Flash (Vol. 2) #108-111", note: "First major Speed Force story. Savitar appears." },
          { title: "The Flash: Terminal Velocity", issues: "The Flash (Vol. 2) #95-100", note: "Wally becomes one with the Speed Force." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: Emerald Twilight", issues: "Green Lantern (Vol. 3) #48-50", tags: ["essential"], note: "Hal Jordan becomes Parallax, dismantles the Green Lantern Corps." },
          { title: "Green Lantern: A New Dawn", issues: "Green Lantern (Vol. 3) #51-55", note: "Kyle Rayner becomes the last Green Lantern." },
          { title: "Zero Hour: Crisis in Time", issues: "Zero Hour #4-0", note: "Hal Jordan as Parallax attempts to reset reality." },
          { title: "The Final Night", issues: "The Final Night #1-4", note: "Hal Jordan sacrifices himself to reignite the sun." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "Young Justice #1-55", issues: "Young Justice #1-55 by Peter David", tags: ["essential"], note: "Definitive Young Justice run. Tim Drake, Superboy, Impulse, Wonder Girl." },
          { title: "Impulse #1-89", issues: "Impulse #1-89 by Mark Waid", note: "Bart Allen's definitive solo run." },
          { title: "Nightwing (Vol. 2) #1-70", issues: "Nightwing #1-70 by Chuck Dixon", note: "Dick moves to Blüdhaven." },
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
    title: "Road to Infinite Crisis",
    era: "2000–2005",
    color: "#9b59b6",
    desc: "Building toward the next major Crisis with stories exploring trust, identity, and the fracturing of the superhero community.",
    eventPause: {
      title: "Infinite Crisis",
      issues: "Infinite Crisis #1-7 by Geoff Johns & Phil Jimenez",
      desc: "The sequel to the original Crisis. The Multiverse returns. Superboy dies. Read after Countdown to Infinite Crisis and its four lead-in miniseries."
    },
    tracks: [
      {
        icon: "⚡",
        title: "Core Events",
        items: [
          { title: "Identity Crisis", issues: "Identity Crisis #1-7 by Brad Meltzer", tags: ["essential"], note: "A murder mystery. Sue Dibny is murdered. The League's secrets are exposed." },
          { title: "Countdown to Infinite Crisis", issues: "Countdown to Infinite Crisis #1", note: "Ted Kord (Blue Beetle) dies. The event that kicks off the miniseries." },
          { title: "The OMAC Project", issues: "The OMAC Project #1-6 by Greg Rucka", note: "Batman's Brother Eye satellite goes rogue. Wonder Woman kills Maxwell Lord." },
          { title: "Villains United", issues: "Villains United #1-6 by Gail Simone", note: "The Secret Six form to resist the Secret Society." },
          { title: "Day of Vengeance", issues: "Day of Vengeance #1-6 by Bill Willingham", note: "The Spectre destroys magic. Doctor Fate dies." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman: Hush", issues: "Batman #608-619 by Jeph Loeb & Jim Lee", tags: ["essential"], note: "A mystery involving the entire rogues gallery. Jason Todd appears (fake-out)." },
          { title: "Batman: Under the Hood", issues: "Batman #635-641, 645-650, Annual #25", tags: ["essential"], note: "Jason Todd returns as Red Hood. The true resurrection." },
          { title: "Red Hood: The Lost Days", issues: "Red Hood: The Lost Days #1-6 by Judd Winick", note: "What Jason did between resurrection and confronting Batman." },
          { title: "Batman & Son", issues: "Batman #655-658, 663-675 by Grant Morrison", tags: ["essential"], note: "Damian Wayne debuts." },
          { title: "Batman: R.I.P.", issues: "Batman #676-683 by Grant Morrison", note: "The Black Glove finally seems to break Batman." },
          { title: "Birds of Prey #56-108 by Gail Simone", issues: "Birds of Prey #56-108", note: "The definitive Birds of Prey run." },
          { title: "Batgirl (Vol. 1) #1-37 by Kelley Puckett", issues: "Batgirl #1-37", note: "Cassandra Cain's definitive solo run." },
          { title: "Batman: War Games", issues: "Batman: War Games, various tie-ins", note: "A massive crossover. Stephanie Brown's fate." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "Superman: For Tomorrow", issues: "Superman #204-215 by Brian Azzarello & Jim Lee", note: "A 12-issue arc." },
          { title: "Superman: Up, Up, and Away!", issues: "Superman #650-653, Action Comics #837-840", note: "After Infinite Crisis, Superman's powers return." },
          { title: "Superman: Brainiac", issues: "Action Comics #866-870 by Geoff Johns & Gary Frank", tags: ["essential"], note: "Brainiac's origin and the bottle city of Kandor." },
          { title: "Supergirl (Vol. 5) #1-19 by Jeph Loeb", issues: "Supergirl #1-19", note: "Kara Zor-El returns in the modern era." },
        ]
      },
      {
        icon: "👑",
        title: "Wonder Woman",
        items: [
          { title: "Wonder Woman: The Hiketeia", issues: "Wonder Woman: The Hiketeia #1 by Greg Rucka", tags: ["essential"], note: "A standalone masterpiece. Wonder Woman vs. Batman over a fugitive." },
          { title: "Wonder Woman (Vol. 2) #188-200 by Greg Rucka", issues: "Wonder Woman #188-200", note: "Greg Rucka's run." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: Rebirth", issues: "Green Lantern: Rebirth #1-6 by Geoff Johns", tags: ["essential"], note: "Hal Jordan returns. The Spectre/Hal entity is resolved." },
          { title: "Green Lantern: No Fear", issues: "Green Lantern (Vol. 4) #1-6", note: "Hal's new status quo." },
          { title: "Green Lantern Corps: Recharge", issues: "Green Lantern Corps: Recharge #1-5", note: "The Corps is rebuilt." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "Teen Titans (Vol. 3) #1-50 by Geoff Johns", issues: "Teen Titans #1-50", tags: ["essential"], note: "The definitive modern Titans run. Tim Drake's Robin, Conner Kent's Superboy, Cassie's Wonder Girl, Bart's Kid Flash." },
          { title: "Nightwing (Vol. 2) #71-100", issues: "Various", note: "Dick's series continues." },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Cosmic Saga",
    era: "2006–2010",
    color: "#e67e22",
    desc: "52, Final Crisis, and Blackest Night expand the scope to cosmic and multiversal threats.",
    eventPause: {
      title: "Final Crisis → Blackest Night",
      issues: "Final Crisis #1-7; Blackest Night #0-8",
      desc: "Darkseid wins. The Anti-Life Equation takes over. Batman 'dies.' Then: The dead rise. Nekron unleashes Black Lantern rings. The emotional spectrum culminates."
    },
    tracks: [
      {
        icon: "🌌",
        title: "Core Events",
        items: [
          { title: "52 #1-52", issues: "52 #1-52 by Johns, Morrison, Rucka, Waid", tags: ["essential"], note: "The missing year after Infinite Crisis. Booster Gold, The Question, Ralph Dibny." },
          { title: "Sinestro Corps War", issues: "GL: Sinestro Corps Special #1, GL #21-25, GLC #14-18", tags: ["essential"], note: "Sinestro returns with his fear-powered Corps. The war of light begins." },
          { title: "Final Crisis", issues: "Final Crisis #1-7, Final Crisis: Submit, Superman Beyond 3D #1-2, Batman #682-683", tags: ["essential"], note: "Darkseid wins. The Anti-Life Equation takes over. Batman is shot by Darkseid." },
          { title: "Blackest Night", issues: "Blackest Night #0-8, GL #43-52, GLC #39-47", tags: ["essential"], note: "The dead rise. Nekron unleashes Black Lantern rings." },
          { title: "Brightest Day", issues: "Brightest Day #0-24", note: "Twelve heroes and villains are resurrected. The aftermath of Blackest Night." },
        ]
      },
      {
        icon: "🦇",
        title: "Batman & Bat-Family",
        items: [
          { title: "Batman & Robin by Grant Morrison Vol. 1-3", issues: "Batman & Robin #1-16", tags: ["essential"], note: "Dick Grayson as Batman, Damian Wayne as Robin. The definitive era." },
          { title: "Batman: The Return of Bruce Wayne", issues: "Batman: The Return of Bruce Wayne #1-6", note: "Bruce travels through time to return." },
          { title: "Batman Incorporated Vol. 1", issues: "Batman Incorporated #1-8", note: "Bruce's vision of franchising Batman globally." },
          { title: "Batman: The Black Mirror", issues: "Detective Comics #871-881 by Scott Snyder", tags: ["essential"], note: "Dick Batman vs. a villain who knows Gotham's secrets. A masterpiece." },
          { title: "Red Robin #1-26", issues: "Red Robin #1-26 by Chris Yost", note: "Tim Drake becomes Red Robin and searches for Bruce." },
          { title: "Batgirl (Vol. 3) #1-24 by Bryan Q. Miller", issues: "Batgirl #1-24", tags: ["essential"], note: "Stephanie Brown becomes Batgirl. A beloved, heartfelt run." },
          { title: "Gotham City Sirens #1-26", issues: "Gotham City Sirens #1-26", note: "Catwoman, Poison Ivy, and Harley Quinn." },
        ]
      },
      {
        icon: "🦸",
        title: "Superman & Super-Family",
        items: [
          { title: "Superman: New Krypton", issues: "Action Comics #871-877, Superman #681-683, etc.", tags: ["essential"], note: "The massive saga where Kandor becomes a new planet." },
          { title: "Superman: War of the Supermen", issues: "War of the Supermen #1-4", note: "The finale of the New Krypton saga." },
        ]
      },
      {
        icon: "⚡",
        title: "Flash",
        items: [
          { title: "The Flash: Rebirth", issues: "The Flash: Rebirth #1-6 by Geoff Johns", tags: ["essential"], note: "Barry Allen returns from the dead." },
          { title: "The Flash (Vol. 3) #1-12", issues: "The Flash (Vol. 3) #1-12", note: "Barry's new series." },
        ]
      },
      {
        icon: "💚",
        title: "Green Lantern",
        items: [
          { title: "Green Lantern: Secret Origin", issues: "Green Lantern #29-35 by Geoff Johns", note: "Hal's origin retold." },
          { title: "Green Lantern (Vol. 4) #26-52", issues: "Various", note: "The rest of Geoff Johns' run." },
          { title: "Green Lantern Corps (Vol. 2) #1-63", issues: "Various", note: "The Corps' ongoing adventures." },
        ]
      },
      {
        icon: "👥",
        title: "Titans & Legacy",
        items: [
          { title: "The Titans #1-50", issues: "The Titans #1-50", note: "Adult Titans reunite: Nightwing, Flash (Wally), Donna Troy, Roy Harper." },
          { title: "Teen Titans (Vol. 3) #51-100", issues: "Various", note: "The post-Johns era." },
          { title: "Robin #175-183", issues: "Robin #175-183", note: "Tim's final issues as Robin." },
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

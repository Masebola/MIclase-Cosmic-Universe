/**
 * DC Character Starter Packs
 * Comprehensive reading libraries for DC Universe characters
 */

const DC_STARTER_PACKS = [
  {
    id: "batman",
    name: "Batman",
    alias: "Bruce Wayne",
    initial: "B",
    color: "#1a1a2e",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Batman: Year One", issues: "Batman #404-407 (1987)", tags: ["essential"], note: "Frank Miller & David Mazzucchelli. The definitive modern origin." },
          { title: "Batman: The Long Halloween", issues: "#1-13 (1996-1997)", tags: ["essential"], note: "Jeph Loeb & Tim Sale. Year-long mystery. Two-Face's origin." },
          { title: "Batman: Dark Victory", issues: "#0-13 (1999-2000)", tags: ["essential"], note: "Direct sequel. Dick Grayson becomes Robin." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Batman: The Killing Joke", issues: "(1988)", tags: ["essential"], note: "Alan Moore & Brian Bolland. Barbara Gordon paralyzed." },
          { title: "Batman: A Death in the Family", issues: "Batman #426-429 (1988)", tags: ["essential"], note: "Jason Todd dies. The Joker's darkest act." },
          { title: "Batman: Knightfall", issues: "Various (1993-1994)", tags: ["essential"], note: "Bane breaks Batman. Azrael assumes the mantle." },
          { title: "Batman: No Man's Land", issues: "Various (1999)", tags: ["essential"], note: "Gotham abandoned. Cassandra Cain debuts." },
          { title: "Batman: Hush", issues: "Batman #608-619 (2002-2003)", tags: ["essential"], note: "Jeph Loeb & Jim Lee. The entire rogues gallery." },
        ]
      },
      {
        title: "Modern Essentials",
        items: [
          { title: "Batman: Under the Hood", issues: "Batman #635-650 (2005-2006)", tags: ["essential"], note: "Jason Todd returns as Red Hood." },
          { title: "Batman and Son", issues: "Batman #655-658 (2006)", tags: ["essential"], note: "Grant Morrison. Damian Wayne debuts." },
          { title: "Batman R.I.P.", issues: "Batman #676-681 (2008)", tags: ["essential"], note: "Morrison's endgame. The Black Glove." },
          { title: "Batman & Robin", issues: "#1-16 (2009-2011)", tags: ["essential"], note: "Dick as Batman, Damian as Robin." },
          { title: "The Black Mirror", issues: "Detective Comics #871-881 (2011)", tags: ["essential"], note: "Scott Snyder's masterpiece." },
        ]
      },
      {
        title: "Supplementary",
        items: [
          { title: "Arkham Asylum: A Serious House on Serious Earth", issues: "(1989)", note: "Grant Morrison & Dave McKean. Psychological horror." },
          { title: "Batman: Strange Apparitions", issues: "Detective Comics #469-479 (1977-1978)", note: "Definitive Bronze Age Batman." },
          { title: "Batman: The Court of Owls", issues: "Batman #1-11 (2011-2012)", note: "Scott Snyder's New 52 run begins." },
        ]
      }
    ]
  },
  {
    id: "superman",
    name: "Superman",
    alias: "Clark Kent / Kal-El",
    initial: "S",
    color: "#0057b7",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Superman: Birthright", issues: "#1-12 (2003-2004)", tags: ["essential"], note: "Mark Waid. Modern origin story." },
          { title: "Superman: Secret Origin", issues: "#1-6 (2009-2010)", tags: ["essential"], note: "Geoff Johns. Definitive post-Crisis origin." },
          { title: "Superman: For All Seasons", issues: "#1-4 (1998)", tags: ["essential"], note: "Jeph Loeb & Tim Sale. Clark's first year." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "All-Star Superman", issues: "#1-12 (2005-2008)", tags: ["essential"], note: "Grant Morrison & Frank Quitely. The essential Superman story." },
          { title: "Whatever Happened to the Man of Tomorrow?", issues: "Superman #423, Action #583 (1986)", tags: ["essential"], note: "Alan Moore's farewell to Silver Age Superman." },
          { title: "Superman: For the Man Who Has Everything", issues: "Superman Annual #11 (1985)", tags: ["essential"], note: "Alan Moore. Mongul traps Superman in a dream." },
          { title: "The Death and Return of Superman", issues: "Various (1992-1993)", tags: ["essential"], note: "Doomsday kills Superman. The four Supermen." },
        ]
      },
      {
        title: "Modern Essentials",
        items: [
          { title: "Superman: Brainiac", issues: "Action Comics #866-870 (2008)", tags: ["essential"], note: "Geoff Johns & Gary Frank. Kandor and Brainiac." },
          { title: "Superman: Last Son", issues: "Action Comics #844-851 (2006-2008)", tags: ["essential"], note: "Geoff Johns & Richard Donner." },
          { title: "Superman: Up, Up and Away!", issues: "Superman #650-653, Action #837-840 (2006)", note: "Superman's powers return post-Infinite Crisis." },
        ]
      },
      {
        title: "Elseworlds / Alternate",
        items: [
          { title: "Kingdom Come", issues: "#1-4 (1996)", tags: ["essential"], note: "Mark Waid & Alex Ross. The definitive DC future." },
          { title: "Superman: Red Son", issues: "#1-3 (2003)", note: "What if Superman landed in Soviet Russia?" },
        ]
      }
    ]
  },
  {
    id: "wonder-woman",
    name: "Wonder Woman",
    alias: "Diana of Themyscira",
    initial: "W",
    color: "#b8860b",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Wonder Woman: Gods and Mortals", issues: "Wonder Woman #1-7 (1987)", tags: ["essential"], note: "George Perez. The definitive post-Crisis origin." },
          { title: "Wonder Woman: Challenge of the Gods", issues: "Wonder Woman #8-14 (1987)", tags: ["essential"], note: "Perez continues. Diana's early adventures." },
          { title: "Wonder Woman: Year One", issues: "Wonder Woman #2-14 (2016-2017)", note: "Greg Rucka's modern retelling." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Wonder Woman by George Perez Omnibus Vol. 1-3", issues: "Wonder Woman #1-62 (1987-1992)", tags: ["essential"], note: "The complete Perez run. Essential." },
          { title: "Wonder Woman: The Hiketeia", issues: "(2002)", tags: ["essential"], note: "Greg Rucka. Diana vs. Batman." },
          { title: "Wonder Woman: Eyes of the Gorgon", issues: "Wonder Woman #206-213 (2004-2005)", tags: ["essential"], note: "Greg Rucka. Medusa confrontation." },
        ]
      },
      {
        title: "Modern Essentials",
        items: [
          { title: "Wonder Woman by Gail Simone", issues: "Wonder Woman #14-44 (2008-2010)", note: "Simone's acclaimed run." },
          { title: "Wonder Woman: The Circle", issues: "Wonder Woman #14-19 (2008)", note: "Gail Simone. Themyscira's secrets." },
        ]
      }
    ]
  },
  {
    id: "green-lantern-hal",
    name: "Green Lantern (Hal Jordan)",
    alias: "Hal Jordan",
    initial: "GL",
    color: "#00a86b",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Green Lantern: Secret Origin", issues: "Green Lantern #29-35 (2008)", tags: ["essential"], note: "Geoff Johns. Hal's origin retold." },
          { title: "Green Lantern: Emerald Dawn", issues: "#1-6 (1989-1990)", note: "Post-Crisis origin story." },
          { title: "Green Lantern/Green Arrow: Hard Traveling Heroes", issues: "Green Lantern #76-89 (1970-1972)", tags: ["classic"], note: "Denny O'Neil & Neal Adams. Social relevance era." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Green Lantern: Rebirth", issues: "#1-6 (2004-2005)", tags: ["essential"], note: "Geoff Johns. Hal returns from the dead." },
          { title: "Green Lantern: No Fear", issues: "Green Lantern #1-6 (2005)", tags: ["essential"], note: "Johns' new era begins." },
          { title: "Sinestro Corps War", issues: "Various (2007)", tags: ["essential"], note: "The war of light begins. Essential event." },
          { title: "Blackest Night", issues: "#0-8 (2009-2010)", tags: ["essential"], note: "The emotional spectrum culminates." },
        ]
      },
      {
        title: "The Fall and Redemption",
        items: [
          { title: "Green Lantern: Emerald Twilight", issues: "Green Lantern #48-50 (1994)", tags: ["essential"], note: "Hal becomes Parallax. The Corps dies." },
          { title: "Zero Hour: Crisis in Time", issues: "#4-0 (1994)", note: "Parallax tries to reset reality." },
          { title: "The Final Night", issues: "#1-4 (1996)", note: "Hal sacrifices himself to save Earth." },
          { title: "Day of Judgment", issues: "#1-5 (1999)", note: "Hal becomes the Spectre." },
        ]
      }
    ]
  },
  {
    id: "green-lantern-kyle",
    name: "Green Lantern (Kyle Rayner)",
    alias: "Kyle Rayner",
    initial: "KR",
    color: "#32cd32",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Green Lantern #48-50: Emerald Twilight", issues: "(1994)", tags: ["essential"], note: "Kyle receives the last ring." },
          { title: "Green Lantern: A New Dawn", issues: "Green Lantern #51-55 (1994)", tags: ["essential"], note: "Kyle's origin as the last GL." },
          { title: "Green Lantern #51-75", issues: "(1994-1996)", tags: ["essential"], note: "Kyle's early adventures." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Green Lantern: Circle of Fire", issues: "(2000)", note: "Kyle's constructs become sentient." },
          { title: "Green Lantern: The New Corps", issues: "#1-2 (1999)", note: "Kyle tries to rebuild the Corps." },
          { title: "Green Lantern #76-181", issues: "(1996-2004)", note: "Kyle's complete tenure as GL." },
        ]
      },
      {
        title: "Ion and Beyond",
        items: [
          { title: "Ion: Guardian of the Universe", issues: "#1-12 (2006-2007)", note: "Kyle as the Ion entity." },
          { title: "Green Lantern Corps Vol. 2", issues: "(2006-2011)", note: "Kyle with the rebuilt Corps." },
        ]
      }
    ]
  },
  {
    id: "flash-wally",
    name: "The Flash (Wally West)",
    alias: "Wally West",
    initial: "F",
    color: "#ff4444",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "The Flash Vol. 2 #1-14", issues: "(1987-1988)", tags: ["essential"], note: "Mike Baron. Wally takes over from Barry." },
          { title: "The Flash: Born to Run", issues: "The Flash #62-65 (1992)", tags: ["essential"], note: "Mark Waid. Wally's Kid Flash origin retold." },
          { title: "The Flash: The Return of Barry Allen", issues: "The Flash #74-79 (1993)", tags: ["essential"], note: "Mark Waid. Eobard Thawne revealed." },
        ]
      },
      {
        title: "Speed Force Era",
        items: [
          { title: "The Flash: Terminal Velocity", issues: "The Flash #95-100 (1994-1995)", tags: ["essential"], note: "Mark Waid. The Speed Force introduced." },
          { title: "The Flash: Dead Heat", issues: "Various (1995)", note: "Savitar and the Speed Force war." },
          { title: "The Flash: Race Against Time", issues: "The Flash #108-111 (1995-1996)", note: "Wally races through time." },
          { title: "The Flash by Mark Waid Book 1-8", issues: "The Flash #62-129 (1992-1997)", tags: ["essential"], note: "Waid's complete run. Essential." },
        ]
      },
      {
        title: "Geoff Johns Era",
        items: [
          { title: "The Flash Vol. 2 #164-225", issues: "(2000-2005)", tags: ["essential"], note: "Geoff Johns defines the Rogues. Hunter Zolomon as Zoom." },
          { title: "The Flash: Blitz", issues: "The Flash #197-200 (2003)", tags: ["essential"], note: "Zoom's first attack. Linda loses the twins." },
          { title: "The Flash: Rogue War", issues: "The Flash #220-225 (2005)", note: "The Rogues vs. the reformed Rogues." },
        ]
      }
    ]
  },
  {
    id: "flash-barry",
    name: "The Flash (Barry Allen)",
    alias: "Barry Allen",
    initial: "BA",
    color: "#dc143c",
    categories: [
      {
        title: "Classic Era",
        items: [
          { title: "The Flash: The Silver Age Vol. 1-2", issues: "Showcase #4, The Flash #105-132", tags: ["classic"], note: "Barry Allen debuts. The Silver Age begins." },
          { title: "Flash of Two Worlds", issues: "The Flash #123 (1961)", tags: ["essential"], note: "Barry meets Jay Garrick. The Multiverse introduced." },
          { title: "The Trial of the Flash", issues: "The Flash #323-350 (1983-1985)", note: "Barry kills Reverse-Flash. His final arc." },
        ]
      },
      {
        title: "Death and Return",
        items: [
          { title: "Crisis on Infinite Earths", issues: "#1-12 (1985-1986)", tags: ["essential"], note: "Barry Allen dies saving the multiverse." },
          { title: "The Flash: Rebirth", issues: "#1-6 (2009-2010)", tags: ["essential"], note: "Geoff Johns. Barry returns from the dead." },
          { title: "The Flash Vol. 3 #1-12", issues: "(2010-2011)", note: "Barry's new ongoing series." },
        ]
      },
      {
        title: "Flashpoint",
        items: [
          { title: "Flashpoint", issues: "#1-5 (2011)", tags: ["essential"], note: "Barry wakes in a twisted timeline. Everything changes." },
          { title: "Flashpoint: Batman - Knight of Vengeance", issues: "#1-3 (2011)", tags: ["essential"], note: "Thomas Wayne as Batman. The best tie-in." },
        ]
      }
    ]
  },
  {
    id: "aquaman",
    name: "Aquaman",
    alias: "Arthur Curry",
    initial: "A",
    color: "#ffa500",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Aquaman: Time and Tide", issues: "#1-4 (1993-1994)", tags: ["essential"], note: "Peter David. Arthur's origin retold." },
          { title: "Aquaman Vol. 5 #1-46", issues: "(1994-1998)", tags: ["essential"], note: "Peter David's run. Long-haired hook-hand era." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "Aquaman: Sword of Atlantis #40-57", issues: "(2006-2007)", note: "A new Aquaman emerges." },
          { title: "Aquaman Vol. 7 #1-25", issues: "(2011-2013)", tags: ["essential"], note: "Geoff Johns' New 52 run. The Trench. Mera." },
          { title: "Aquaman: The Throne of Atlantis", issues: "(2012-2013)", tags: ["essential"], note: "Johns. Atlantis attacks." },
        ]
      }
    ]
  },
  {
    id: "green-arrow",
    name: "Green Arrow & Black Canary",
    alias: "Oliver Queen & Dinah Lance",
    initial: "GA",
    color: "#228b22",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Green Arrow: Year One", issues: "#1-6 (2007)", tags: ["essential"], note: "Andy Diggle. Oliver's island origin." },
          { title: "Green Arrow: The Longbow Hunters", issues: "#1-3 (1987)", tags: ["essential"], note: "Mike Grell. Mature reinvention." },
          { title: "Green Lantern/Green Arrow", issues: "Green Lantern #76-89 (1970-1972)", tags: ["classic"], note: "Denny O'Neil. Social relevance. Speedy's addiction." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Green Arrow Vol. 2 #1-80", issues: "(1988-1993)", note: "Mike Grell's ongoing. Seattle street-level." },
          { title: "Green Arrow: Quiver", issues: "Green Arrow Vol. 3 #1-10 (2001)", tags: ["essential"], note: "Kevin Smith. Oliver returns from the dead." },
          { title: "Green Arrow: The Archer's Quest", issues: "#16-21 (2002-2003)", note: "Brad Meltzer. Connor Hawke." },
        ]
      },
      {
        title: "Black Canary",
        items: [
          { title: "Birds of Prey", issues: "Various (1999-2009)", tags: ["essential"], note: "Black Canary with Oracle and Huntress." },
          { title: "Green Arrow/Black Canary", issues: "#1-29 (2007-2010)", note: "The couple's combined series." },
        ]
      }
    ]
  },
  {
    id: "shazam",
    name: "Shazam & Black Adam",
    alias: "Billy Batson & Teth-Adam",
    initial: "S",
    color: "#ffd700",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "The Power of Shazam! (Graphic Novel)", issues: "(1994)", tags: ["essential"], note: "Jerry Ordway. Post-Crisis origin." },
          { title: "The Power of Shazam! #1-47", issues: "(1995-1999)", note: "Ordway's ongoing series." },
        ]
      },
      {
        title: "Black Adam",
        items: [
          { title: "JSA #6-25", issues: "(1999-2001)", note: "Black Adam joins the JSA. His redemption arc begins." },
          { title: "52", issues: "#1-52 (2006-2007)", tags: ["essential"], note: "Black Adam's journey. Kahndaq. World War III." },
          { title: "Black Adam: The Dark Age", issues: "#1-6 (2007-2008)", note: "After 52. Adam seeks Isis." },
        ]
      },
      {
        title: "Modern",
        items: [
          { title: "Shazam! Vol. 3", issues: "Justice League backups + #1-21 (2012-2019)", note: "Geoff Johns' New 52 Shazam." },
        ]
      }
    ]
  },
  {
    id: "justice-league",
    name: "Justice League",
    alias: "The World's Greatest Heroes",
    initial: "JL",
    color: "#4169e1",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Justice League of America: The Silver Age Vol. 1-2", issues: "Brave and Bold #28-30, JLA #1-16", tags: ["classic"], note: "The team's formation." },
          { title: "JLA: Year One", issues: "#1-12 (1998)", tags: ["essential"], note: "Mark Waid. Post-Crisis League origin." },
        ]
      },
      {
        title: "Core Eras",
        items: [
          { title: "Justice League International", issues: "JL #1-6, JLI #7-60 (1987-1993)", tags: ["essential"], note: "Keith Giffen. The funny League. Bwahaha era." },
          { title: "JLA by Grant Morrison", issues: "JLA #1-41 (1997-2000)", tags: ["essential"], note: "The Big Seven reunited. Definitive modern run." },
          { title: "JLA: Tower of Babel", issues: "JLA #43-46 (2000)", tags: ["essential"], note: "Mark Waid. Batman's contingency plans stolen." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "Identity Crisis", issues: "#1-7 (2004)", tags: ["essential"], note: "Brad Meltzer. The League's dark secrets." },
          { title: "Infinite Crisis", issues: "#1-7 (2005-2006)", tags: ["essential"], note: "The multiverse returns." },
          { title: "Final Crisis", issues: "#1-7 (2008)", tags: ["essential"], note: "Grant Morrison. Darkseid wins." },
        ]
      }
    ]
  },
  {
    id: "jsa",
    name: "Justice Society of America",
    alias: "The First Heroes",
    initial: "JSA",
    color: "#daa520",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "All-Star Comics Archives", issues: "All-Star Comics #3-57 (1940-1951)", tags: ["classic"], note: "The Golden Age originals." },
          { title: "America vs. the Justice Society", issues: "#1-4 (1985)", note: "Pre-Crisis JSA history." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "JSA #1-87", issues: "(1999-2006)", tags: ["essential"], note: "Geoff Johns & David Goyer. The definitive JSA run." },
          { title: "Justice Society of America Vol. 3 #1-54", issues: "(2007-2011)", tags: ["essential"], note: "Johns continues. Kingdom Come Superman." },
        ]
      },
      {
        title: "Key Arcs",
        items: [
          { title: "JSA: The Golden Age", issues: "#1-4 (1993)", tags: ["essential"], note: "James Robinson. Elseworlds noir masterpiece." },
          { title: "JSA: Darkness Falls / Return of Hawkman", issues: "JSA #1-25", note: "Hawkman's return. Extant defeated." },
          { title: "Thy Kingdom Come", issues: "Justice Society Vol. 3 #7-22", note: "Kingdom Come Superman in the JSA." },
        ]
      }
    ]
  },
  {
    id: "nightwing",
    name: "Nightwing",
    alias: "Dick Grayson",
    initial: "N",
    color: "#0077be",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Tales of the Teen Titans #44", issues: "(1984)", tags: ["essential"], note: "Dick Grayson becomes Nightwing." },
          { title: "The New Teen Titans: The Judas Contract", issues: "(1984)", tags: ["essential"], note: "Marv Wolfman & George Perez. Dick's transformation." },
          { title: "Nightwing: Year One", issues: "Nightwing #101-106 (2005)", note: "Dixon & Beatty. Dick's early Nightwing days." },
        ]
      },
      {
        title: "Core Run",
        items: [
          { title: "Nightwing Vol. 2 #1-70", issues: "(1996-2002)", tags: ["essential"], note: "Chuck Dixon. Dick moves to Bludhaven. Definitive." },
          { title: "Nightwing Vol. 2 #71-100", issues: "(2002-2005)", note: "Continuation through Infinite Crisis." },
        ]
      },
      {
        title: "As Batman",
        items: [
          { title: "Batman: Battle for the Cowl", issues: "#1-3 (2009)", tags: ["essential"], note: "Dick becomes Batman." },
          { title: "Batman & Robin #1-16", issues: "(2009-2011)", tags: ["essential"], note: "Grant Morrison. Dick and Damian." },
          { title: "Detective Comics #871-881", issues: "(2011)", tags: ["essential"], note: "Scott Snyder. The Black Mirror." },
        ]
      }
    ]
  },
  {
    id: "barbara-gordon",
    name: "Barbara Gordon",
    alias: "Batgirl / Oracle",
    initial: "BG",
    color: "#9932cc",
    categories: [
      {
        title: "As Batgirl",
        items: [
          { title: "Batgirl: Year One", issues: "#1-9 (2003)", tags: ["essential"], note: "Scott Beatty & Chuck Dixon. Barbara's origin." },
          { title: "Batman: The Killing Joke", issues: "(1988)", tags: ["essential"], note: "Alan Moore. Barbara is shot by the Joker." },
        ]
      },
      {
        title: "As Oracle",
        items: [
          { title: "Batman: Oracle - The Cure", issues: "(2009)", note: "Barbara's journey as Oracle." },
          { title: "Birds of Prey #1-127", issues: "(1999-2009)", tags: ["essential"], note: "Chuck Dixon & Gail Simone. Oracle leads the Birds." },
          { title: "Birds of Prey #56-108", issues: "(2003-2007)", tags: ["essential"], note: "Gail Simone's definitive run." },
        ]
      }
    ]
  },
  {
    id: "bat-family",
    name: "Bat-Family Extended",
    alias: "Robin, Red Hood, Red Robin, Batgirl",
    initial: "BF",
    color: "#8b0000",
    categories: [
      {
        title: "Tim Drake (Robin/Red Robin)",
        items: [
          { title: "Batman: A Lonely Place of Dying", issues: "Batman #440-442, New Titans #60-61 (1989)", tags: ["essential"], note: "Tim Drake becomes Robin." },
          { title: "Robin Vol. 2 #1-183", issues: "(1993-2009)", tags: ["essential"], note: "Chuck Dixon. Tim's definitive run." },
          { title: "Red Robin #1-26", issues: "(2009-2011)", note: "Tim as Red Robin." },
        ]
      },
      {
        title: "Jason Todd (Red Hood)",
        items: [
          { title: "Batman: A Death in the Family", issues: "Batman #426-429 (1988)", tags: ["essential"], note: "Jason dies." },
          { title: "Batman: Under the Hood", issues: "Batman #635-650 (2005-2006)", tags: ["essential"], note: "Jason returns as Red Hood." },
          { title: "Red Hood: The Lost Days", issues: "#1-6 (2010)", note: "What Jason did before returning." },
        ]
      },
      {
        title: "Stephanie Brown & Cassandra Cain",
        items: [
          { title: "Batgirl Vol. 1 #1-73", issues: "(2000-2006)", tags: ["essential"], note: "Cassandra Cain as Batgirl." },
          { title: "Batgirl Vol. 3 #1-24", issues: "(2009-2011)", tags: ["essential"], note: "Stephanie Brown as Batgirl. Bryan Q. Miller." },
        ]
      },
      {
        title: "Damian Wayne",
        items: [
          { title: "Batman and Son", issues: "Batman #655-658 (2006)", tags: ["essential"], note: "Damian debuts." },
          { title: "Batman & Robin #1-16", issues: "(2009-2011)", tags: ["essential"], note: "Damian as Robin to Dick's Batman." },
        ]
      }
    ]
  },
  {
    id: "martial-arts",
    name: "Richard Dragon & Lady Shiva",
    alias: "Martial Arts Masters",
    initial: "RD",
    color: "#800020",
    categories: [
      {
        title: "Richard Dragon",
        items: [
          { title: "Richard Dragon, Kung Fu Fighter #1-18", issues: "(1975-1977)", tags: ["classic"], note: "Richard Dragon's origin and early adventures." },
          { title: "Richard Dragon #1-12", issues: "(2004-2005)", note: "Modern Richard Dragon series." },
        ]
      },
      {
        title: "Lady Shiva",
        items: [
          { title: "The Question #1-36", issues: "(1987-1990)", tags: ["essential"], note: "Dennis O'Neil. Lady Shiva trains Vic Sage." },
          { title: "Birds of Prey (Lady Shiva appearances)", issues: "Various", note: "Shiva vs. the Birds." },
          { title: "Batgirl #1-73", issues: "(2000-2006)", note: "Shiva and Cassandra Cain's relationship." },
        ]
      },
      {
        title: "The Question",
        items: [
          { title: "The Question #1-36", issues: "(1987-1990)", tags: ["essential"], note: "Dennis O'Neil. Vic Sage's philosophical journey." },
          { title: "52", issues: "#1-52 (2006-2007)", tags: ["essential"], note: "Vic Sage passes the mantle to Renee Montoya." },
        ]
      }
    ]
  },
  {
    id: "teen-titans-og",
    name: "Teen Titans (Original)",
    alias: "Dick, Wally, Donna, Roy, Garth",
    initial: "TT",
    color: "#ff6347",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Teen Titans #1-43", issues: "(1966-1973)", tags: ["classic"], note: "The original run. Robin, Kid Flash, Aqualad, Wonder Girl, Speedy." },
        ]
      },
      {
        title: "New Teen Titans",
        items: [
          { title: "The New Teen Titans #1-40", issues: "(1980-1984)", tags: ["essential"], note: "Marv Wolfman & George Perez. The definitive Titans run." },
          { title: "The New Teen Titans: The Judas Contract", issues: "(1984)", tags: ["essential"], note: "Terra's betrayal. Dick becomes Nightwing." },
          { title: "Tales of the Teen Titans #41-91", issues: "(1984-1988)", note: "Continuation of the Wolfman/Perez era." },
          { title: "The New Titans #50-130", issues: "(1988-1996)", note: "The team continues." },
        ]
      }
    ]
  },
  {
    id: "teen-titans-legacy",
    name: "Teen Titans (Legacy)",
    alias: "Tim, Conner, Bart, Cassie",
    initial: "YJ",
    color: "#ff4500",
    categories: [
      {
        title: "Young Justice",
        items: [
          { title: "Young Justice #1-55", issues: "(1998-2003)", tags: ["essential"], note: "Peter David. Tim Drake, Superboy, Impulse, Wonder Girl." },
          { title: "Sins of Youth", issues: "(2000)", note: "Crossover event. Age-swap chaos." },
        ]
      },
      {
        title: "Teen Titans Vol. 3",
        items: [
          { title: "Titans/Young Justice: Graduation Day", issues: "#1-3 (2003)", tags: ["essential"], note: "Donna Troy dies. Both teams end." },
          { title: "Teen Titans Vol. 3 #1-50", issues: "(2003-2007)", tags: ["essential"], note: "Geoff Johns. The next generation Titans." },
          { title: "Teen Titans Vol. 3 #51-100", issues: "(2007-2011)", note: "Continuation through Flashpoint." },
        ]
      },
      {
        title: "Titans (Adult Team)",
        items: [
          { title: "Titans Vol. 1 #1-50", issues: "(1999-2003)", note: "The adult Titans reunite." },
          { title: "Titans Vol. 2 #1-38", issues: "(2008-2011)", note: "Post-Final Crisis Titans." },
        ]
      }
    ]
  },
  {
    id: "sandman",
    name: "Sandman",
    alias: "Dream of the Endless / Morpheus",
    initial: "S",
    color: "#191970",
    categories: [
      {
        title: "Main Series",
        items: [
          { title: "The Sandman #1-8: Preludes & Nocturnes", issues: "(1989)", tags: ["essential"], note: "Neil Gaiman. Dream escapes imprisonment." },
          { title: "The Sandman #9-16: The Doll's House", issues: "(1989-1990)", tags: ["essential"], note: "Rose Walker and the dream vortex." },
          { title: "The Sandman #17-20: Dream Country", issues: "(1990)", tags: ["essential"], note: "Four standalone stories. Calliope. A Dream of a Thousand Cats." },
          { title: "The Sandman #21-28: Season of Mists", issues: "(1990-1991)", tags: ["essential"], note: "Lucifer abandons Hell. Dream must decide its fate." },
          { title: "The Sandman #29-37: A Game of You", issues: "(1991-1992)", tags: ["essential"], note: "Barbie's fantasy world." },
          { title: "The Sandman #38-50: Fables & Reflections", issues: "(1992-1993)", tags: ["essential"], note: "Tales throughout history." },
          { title: "The Sandman #51-56: Brief Lives", issues: "(1993)", tags: ["essential"], note: "Dream and Delirium seek their brother." },
          { title: "The Sandman #57-69: The Kindly Ones", issues: "(1993-1995)", tags: ["essential"], note: "The Furies come for Dream." },
          { title: "The Sandman #70-75: The Wake", issues: "(1995-1996)", tags: ["essential"], note: "The end of Dream's story." },
        ]
      },
      {
        title: "Related",
        items: [
          { title: "Death: The High Cost of Living", issues: "#1-3 (1993)", tags: ["essential"], note: "Death's solo story." },
          { title: "Death: The Time of Your Life", issues: "#1-3 (1996)", note: "Death's second miniseries." },
          { title: "The Sandman: Overture", issues: "#1-6 (2013-2015)", note: "Gaiman returns. Prequel to #1." },
          { title: "Lucifer #1-75", issues: "(2000-2006)", note: "Mike Carey's spinoff. Lucifer after leaving Hell." },
        ]
      }
    ]
  },
  {
    id: "constantine",
    name: "John Constantine",
    alias: "Hellblazer",
    initial: "JC",
    color: "#b8860b",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Swamp Thing #37-50", issues: "(1985-1986)", tags: ["essential"], note: "Alan Moore. Constantine's first appearances." },
          { title: "Hellblazer #1-40", issues: "(1988-1991)", tags: ["essential"], note: "Jamie Delano. Constantine's origin and early adventures." },
        ]
      },
      {
        title: "Definitive Runs",
        items: [
          { title: "Hellblazer #41-83: Dangerous Habits", issues: "(1991-1994)", tags: ["essential"], note: "Garth Ennis. Constantine gets lung cancer. Sells his soul." },
          { title: "Hellblazer #84-128", issues: "(1994-1998)", note: "Ennis continues." },
          { title: "Hellblazer #134-215", issues: "(1999-2006)", tags: ["essential"], note: "Brian Azzarello and others." },
        ]
      },
      {
        title: "Later Runs",
        items: [
          { title: "Hellblazer #216-275", issues: "(2006-2011)", note: "Mike Carey and others." },
          { title: "Hellblazer #276-300", issues: "(2011-2013)", note: "Peter Milligan's final run." },
        ]
      }
    ]
  },
  {
    id: "new-gods",
    name: "New Gods",
    alias: "The Fourth World",
    initial: "NG",
    color: "#4b0082",
    categories: [
      {
        title: "Jack Kirby's Fourth World",
        items: [
          { title: "Superman's Pal Jimmy Olsen #133-148", issues: "(1970-1972)", tags: ["essential"], note: "Kirby's entry point. DNA Project. Intergang." },
          { title: "The New Gods #1-11", issues: "(1971-1972)", tags: ["essential"], note: "The war of New Genesis vs. Apokolips. Orion. Darkseid." },
          { title: "The Forever People #1-11", issues: "(1971-1972)", tags: ["essential"], note: "Young gods on Earth. Infinity Man. Anti-Life hunt." },
          { title: "Mister Miracle #1-18", issues: "(1971-1974)", tags: ["essential"], note: "Scott Free escapes Apokolips. Big Barda." },
        ]
      },
      {
        title: "Post-Kirby",
        items: [
          { title: "New Gods Vol. 2 #1-6", issues: "(1984)", note: "Continuation after Kirby." },
          { title: "New Gods Vol. 3 #1-28", issues: "(1989-1991)", note: "Post-Crisis New Gods." },
          { title: "Mister Miracle Vol. 2 #1-28", issues: "(1989-1991)", note: "Post-Crisis Mister Miracle." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "Cosmic Odyssey", issues: "#1-4 (1988)", note: "Jim Starlin & Mike Mignola. JLA and New Gods vs. Anti-Life Entity." },
          { title: "Death of the New Gods", issues: "#1-8 (2007-2008)", note: "The Fourth World faces its end." },
          { title: "Final Crisis", issues: "#1-7 (2008)", tags: ["essential"], note: "Grant Morrison. Darkseid's final victory." },
          { title: "Seven Soldiers: Mister Miracle", issues: "#1-4 (2005-2006)", note: "Grant Morrison's Shilo Norman." },
        ]
      }
    ]
  }
];

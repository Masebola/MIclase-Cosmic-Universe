/**
 * Marvel Character Starter Packs
 * Comprehensive reading libraries for Marvel Universe characters
 */

const MARVEL_STARTER_PACKS = [
  {
    id: "avengers",
    name: "Avengers",
    alias: "Earth's Mightiest Heroes",
    initial: "A",
    color: "#1e3a5f",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Avengers Disassembled", issues: "Avengers #500-503 (2004)", tags: ["essential"], note: "Brian Michael Bendis. The end of an era. Scarlet Witch's breakdown." },
          { title: "New Avengers: Breakout", issues: "New Avengers #1-6 (2005)", tags: ["essential"], note: "Bendis. The new team forms." },
          { title: "The Ultimates", issues: "#1-13 (2002-2004)", tags: ["essential"], note: "Mark Millar & Bryan Hitch. Modern cinematic Avengers." },
        ]
      },
      {
        title: "Classic Era",
        items: [
          { title: "Avengers by Kurt Busiek", issues: "Avengers #1-56 (1998-2002)", tags: ["essential"], note: "Classic Avengers restored. Ultron Unlimited." },
          { title: "Under Siege", issues: "Avengers #270-277 (1986-1987)", tags: ["essential"], note: "Baron Zemo's Masters of Evil invade." },
          { title: "The Kree-Skrull War", issues: "Avengers #89-97 (1971-1972)", tags: ["classic"], note: "Roy Thomas. Epic space war." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "Avengers by Jonathan Hickman", issues: "Avengers #1-44, New Avengers #1-33 (2012-2015)", tags: ["essential"], note: "The Incursions. Time Runs Out. Everything dies." },
          { title: "Secret Wars", issues: "#1-9 (2015)", tags: ["essential"], note: "Hickman's endgame. Battleworld." },
          { title: "Avengers: Endless Wartime", issues: "(2013)", note: "Warren Ellis graphic novel." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "Civil War", issues: "#1-7 (2006-2007)", tags: ["essential"], note: "Mark Millar. Hero vs. hero." },
          { title: "Secret Invasion", issues: "#1-8 (2008)", tags: ["essential"], note: "Bendis. The Skrulls were among us." },
          { title: "Siege", issues: "#1-4 (2010)", tags: ["essential"], note: "Bendis. Norman Osborn attacks Asgard." },
        ]
      }
    ]
  },
  {
    id: "x-men",
    name: "X-Men",
    alias: "Children of the Atom",
    initial: "X",
    color: "#ffd700",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Giant-Size X-Men #1", issues: "(1975)", tags: ["essential"], note: "The new team debuts. Wolverine, Storm, Colossus, Nightcrawler." },
          { title: "The Dark Phoenix Saga", issues: "Uncanny X-Men #129-137 (1980)", tags: ["essential"], note: "Chris Claremont & John Byrne. Jean Grey's transformation." },
          { title: "Days of Future Past", issues: "Uncanny X-Men #141-142 (1981)", tags: ["essential"], note: "Claremont & Byrne. The dystopian future." },
        ]
      },
      {
        title: "Claremont Era",
        items: [
          { title: "God Loves, Man Kills", issues: "(1982)", tags: ["essential"], note: "Graphic novel. Reverend Stryker. Religious persecution." },
          { title: "The Brood Saga", issues: "Uncanny X-Men #154-167 (1982)", note: "Alien horror in space." },
          { title: "From the Ashes", issues: "Uncanny X-Men #168-176 (1983)", note: "Madelyne Pryor. Rogue joins. Paul Smith art." },
          { title: "Mutant Massacre", issues: "Various (1986)", tags: ["essential"], note: "The Marauders attack the Morlocks." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "New X-Men", issues: "#114-154 (2001-2004)", tags: ["essential"], note: "Grant Morrison. Mutant culture. Cassandra Nova." },
          { title: "Astonishing X-Men", issues: "#1-24 (2004-2008)", tags: ["essential"], note: "Joss Whedon & John Cassaday. Colossus returns." },
          { title: "House of M", issues: "#1-8 (2005)", tags: ["essential"], note: "Bendis. No more mutants." },
        ]
      },
      {
        title: "Krakoa Era",
        items: [
          { title: "House of X / Powers of X", issues: "#1-6 each (2019)", tags: ["essential"], note: "Jonathan Hickman. Mutant nation founded." },
          { title: "X-Men by Hickman", issues: "X-Men #1-21 (2019-2021)", note: "The Krakoa status quo." },
        ]
      }
    ]
  },
  {
    id: "spider-man",
    name: "Spider-Man",
    alias: "Peter Parker",
    initial: "S",
    color: "#e62429",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Amazing Fantasy #15", issues: "(1962)", tags: ["essential"], note: "Stan Lee & Steve Ditko. The origin." },
          { title: "Spider-Man: Blue", issues: "#1-6 (2002)", tags: ["essential"], note: "Jeph Loeb & Tim Sale. Peter and Gwen's love story." },
          { title: "The Night Gwen Stacy Died", issues: "Amazing Spider-Man #121-122 (1973)", tags: ["essential"], note: "The end of innocence." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Kraven's Last Hunt", issues: "Various (1987)", tags: ["essential"], note: "J.M. DeMatteis. Kraven buries Spider-Man alive." },
          { title: "The Clone Saga", issues: "Various (1994-1996)", note: "Ben Reilly. Controversial but influential." },
          { title: "Coming Home", issues: "Amazing Spider-Man #30-35 (2001)", tags: ["essential"], note: "J. Michael Straczynski. Morlun. Totems." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "Big Time", issues: "Amazing Spider-Man #648-656 (2010-2011)", tags: ["essential"], note: "Dan Slott. Peter at Horizon Labs." },
          { title: "Spider-Island", issues: "Amazing Spider-Man #666-673 (2011)", note: "Everyone in Manhattan gets spider-powers." },
          { title: "Superior Spider-Man", issues: "#1-31 (2013-2014)", tags: ["essential"], note: "Dan Slott. Doc Ock in Peter's body." },
        ]
      },
      {
        title: "Ultimate",
        items: [
          { title: "Ultimate Spider-Man", issues: "#1-133 (2000-2009)", tags: ["essential"], note: "Brian Michael Bendis. Modern reimagining." },
          { title: "Ultimate Spider-Man: Death of Spider-Man", issues: "#156-160 (2011)", tags: ["essential"], note: "Peter Parker's ultimate sacrifice." },
        ]
      }
    ]
  },
  {
    id: "miles-morales",
    name: "Spider-Man (Miles Morales)",
    alias: "Miles Morales",
    initial: "MM",
    color: "#1a1a2e",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Ultimate Comics Spider-Man", issues: "#1-28 (2011-2013)", tags: ["essential"], note: "Brian Michael Bendis. Miles' origin and early adventures." },
          { title: "Miles Morales: Ultimate Spider-Man", issues: "#1-12 (2014-2015)", tags: ["essential"], note: "Miles discovers Peter may be alive." },
          { title: "Spider-Men", issues: "#1-5 (2012)", tags: ["essential"], note: "Miles meets Peter Parker (616). First crossover." },
        ]
      },
      {
        title: "Main Universe",
        items: [
          { title: "Spider-Man (2016)", issues: "#1-21 (2016-2017)", tags: ["essential"], note: "Bendis. Miles in the main Marvel universe." },
          { title: "Spider-Men II", issues: "#1-5 (2017)", note: "Miles and Peter team up again." },
          { title: "Miles Morales: Spider-Man", issues: "#1-42 (2018-2022)", note: "Saladin Ahmed's run." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "Spider-Verse", issues: "Amazing Spider-Man #9-15 (2014-2015)", tags: ["essential"], note: "Every Spider-Person vs. the Inheritors." },
          { title: "Spider-Geddon", issues: "#0-5 (2018)", note: "Spider-Verse sequel. Miles leads." },
        ]
      }
    ]
  },
  {
    id: "spider-gwen",
    name: "Spider-Woman (Ghost-Spider)",
    alias: "Gwen Stacy",
    initial: "GS",
    color: "#ff69b4",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Edge of Spider-Verse #2", issues: "(2014)", tags: ["essential"], note: "Gwen Stacy as Spider-Woman debuts." },
          { title: "Spider-Gwen", issues: "#1-5 (2015)", tags: ["essential"], note: "Gwen's solo series begins." },
          { title: "Spider-Gwen Vol. 2", issues: "#1-34 (2015-2018)", tags: ["essential"], note: "Jason Latour. Earth-65 adventures." },
        ]
      },
      {
        title: "Ghost-Spider",
        items: [
          { title: "Spider-Gwen: Ghost-Spider", issues: "#1-10 (2018-2019)", note: "Gwen's new identity." },
          { title: "Ghost-Spider", issues: "#1-10 (2019-2020)", note: "Gwen attends ESU in Earth-616." },
          { title: "Spider-Gwen: Gwenverse", issues: "#1-5 (2022)", note: "Gwen meets alternate Gwens." },
        ]
      }
    ]
  },
  {
    id: "fantastic-four",
    name: "Fantastic Four",
    alias: "Marvel's First Family",
    initial: "4",
    color: "#1e90ff",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Fantastic Four #1-10", issues: "(1961-1962)", tags: ["classic"], note: "Stan Lee & Jack Kirby. The Marvel Age begins." },
          { title: "The Galactus Trilogy", issues: "Fantastic Four #48-50 (1966)", tags: ["essential"], note: "Lee & Kirby. Galactus and Silver Surfer debut." },
          { title: "This Man, This Monster", issues: "Fantastic Four #51 (1966)", tags: ["essential"], note: "The greatest single issue in comics history." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Fantastic Four by John Byrne", issues: "#232-293 (1981-1986)", tags: ["essential"], note: "The definitive FF run. She-Hulk joins." },
          { title: "Fantastic Four by Mark Waid", issues: "#60-70, #500-524 (2002-2005)", tags: ["essential"], note: "Imaginauts. Doom in Hell." },
        ]
      },
      {
        title: "Hickman Era",
        items: [
          { title: "Fantastic Four by Jonathan Hickman", issues: "Fantastic Four #570-588 (2009-2011)", tags: ["essential"], note: "The Council of Reeds. Everything connects." },
          { title: "FF", issues: "#1-23 (2011-2012)", tags: ["essential"], note: "Future Foundation. Spider-Man joins." },
          { title: "Fantastic Four: Three", issues: "Fantastic Four #583-588 (2010-2011)", tags: ["essential"], note: "The death of Johnny Storm." },
        ]
      }
    ]
  },
  {
    id: "thor",
    name: "Thor",
    alias: "God of Thunder",
    initial: "T",
    color: "#4a90d9",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Thor by Walt Simonson", issues: "Thor #337-382 (1983-1987)", tags: ["essential"], note: "Beta Ray Bill. Surtur Saga. The definitive run." },
          { title: "Thor Vol. 3 #1-12", issues: "(2007-2009)", tags: ["essential"], note: "J. Michael Straczynski. Thor returns. Asgard in Oklahoma." },
        ]
      },
      {
        title: "Jason Aaron Era",
        items: [
          { title: "Thor: God of Thunder", issues: "#1-25 (2012-2014)", tags: ["essential"], note: "Jason Aaron. Gorr the God Butcher. Three Thors." },
          { title: "Thor Vol. 4", issues: "#1-8 (2014-2015)", tags: ["essential"], note: "Jane Foster becomes Thor." },
          { title: "The Mighty Thor", issues: "#1-23 (2015-2017)", tags: ["essential"], note: "Jane vs. cancer and Malekith." },
          { title: "Thor Vol. 5", issues: "#1-16 (2018-2019)", note: "Odinson reclaims the hammer. War of the Realms builds." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "War of the Realms", issues: "#1-6 (2019)", tags: ["essential"], note: "Aaron's epic conclusion. Malekith invades Earth." },
        ]
      }
    ]
  },
  {
    id: "captain-america",
    name: "Captain America",
    alias: "Steve Rogers",
    initial: "CA",
    color: "#0033a0",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Captain America: Man Out of Time", issues: "#1-5 (2010-2011)", tags: ["essential"], note: "Mark Waid. Steve adjusts to the modern world." },
          { title: "Captain America: Winter Soldier", issues: "Captain America #1-14 (2004-2006)", tags: ["essential"], note: "Ed Brubaker. Bucky returns." },
        ]
      },
      {
        title: "Brubaker Era",
        items: [
          { title: "The Death of Captain America", issues: "Captain America #25-42 (2007-2008)", tags: ["essential"], note: "Steve dies. Bucky becomes Cap." },
          { title: "Captain America: Reborn", issues: "#1-6 (2009-2010)", tags: ["essential"], note: "Steve returns from time displacement." },
          { title: "Captain America by Ed Brubaker", issues: "Captain America #1-50, #600-619 (2004-2012)", tags: ["essential"], note: "The complete run. Essential Cap." },
        ]
      },
      {
        title: "Classic",
        items: [
          { title: "The Ultimates", issues: "#1-13 (2002-2004)", tags: ["essential"], note: "Mark Millar. Ultimate Cap. Modern soldier." },
          { title: "Captain America: War and Remembrance", issues: "Captain America #247-255 (1980)", note: "Roger Stern & John Byrne." },
        ]
      }
    ]
  },
  {
    id: "iron-man",
    name: "Iron Man",
    alias: "Tony Stark",
    initial: "IM",
    color: "#b22222",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Demon in a Bottle", issues: "Iron Man #120-128 (1979)", tags: ["essential"], note: "David Michelinie & Bob Layton. Tony's alcoholism." },
          { title: "Armor Wars", issues: "Iron Man #225-231 (1987-1988)", tags: ["essential"], note: "Tony's tech is stolen. He takes it back." },
          { title: "Extremis", issues: "Iron Man #1-6 (2005)", tags: ["essential"], note: "Warren Ellis & Adi Granov. Tony upgrades." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "The Five Nightmares", issues: "Invincible Iron Man #1-7 (2008)", tags: ["essential"], note: "Matt Fraction. Ezekiel Stane." },
          { title: "World's Most Wanted", issues: "Invincible Iron Man #8-19 (2008-2009)", tags: ["essential"], note: "Tony on the run from Osborn." },
          { title: "Stark: Disassembled", issues: "Invincible Iron Man #20-24 (2010)", note: "Rebooting Tony's brain." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "Iron Man: Director of S.H.I.E.L.D.", issues: "Iron Man #15-32 (2007-2008)", note: "Tony runs the world. Post-Civil War." },
          { title: "The Ultron Agenda", issues: "Tony Stark: Iron Man #15-19 (2019)", note: "Ultron and Jocasta. What is life?" },
        ]
      }
    ]
  },
  {
    id: "daredevil",
    name: "Daredevil",
    alias: "Matt Murdock",
    initial: "DD",
    color: "#8b0000",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Daredevil: The Man Without Fear", issues: "#1-5 (1993)", tags: ["essential"], note: "Frank Miller & John Romita Jr. The origin." },
          { title: "Born Again", issues: "Daredevil #227-233 (1986)", tags: ["essential"], note: "Frank Miller & David Mazzucchelli. Kingpin destroys Matt." },
        ]
      },
      {
        title: "Bendis/Brubaker Era",
        items: [
          { title: "Daredevil by Brian Michael Bendis", issues: "Daredevil Vol. 2 #26-50, #56-81 (2001-2006)", tags: ["essential"], note: "Matt outed as Daredevil. Maleev art." },
          { title: "Daredevil by Ed Brubaker", issues: "Daredevil Vol. 2 #82-119 (2006-2009)", tags: ["essential"], note: "Matt in prison. Lady Bullseye." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "Daredevil by Mark Waid", issues: "#1-36 (2011-2014)", tags: ["essential"], note: "The swashbuckler returns. San Francisco." },
          { title: "Daredevil by Charles Soule", issues: "#1-28, #595-612 (2015-2018)", note: "Matt reclaims his secret identity." },
          { title: "Daredevil by Chip Zdarsky", issues: "#1-ongoing (2019-)", tags: ["essential"], note: "Matt confronts his violence." },
        ]
      }
    ]
  },
  {
    id: "wolverine",
    name: "Wolverine",
    alias: "Logan / James Howlett",
    initial: "W",
    color: "#ffd700",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Wolverine", issues: "#1-4 (1982)", tags: ["essential"], note: "Chris Claremont & Frank Miller. Logan in Japan." },
          { title: "Weapon X", issues: "Marvel Comics Presents #72-84 (1991)", tags: ["essential"], note: "Barry Windsor-Smith. The experiment." },
          { title: "Origin", issues: "#1-6 (2001-2002)", tags: ["essential"], note: "Logan's childhood revealed. James Howlett." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Wolverine by Larry Hama", issues: "Wolverine #31-118 (1990-1997)", tags: ["essential"], note: "The definitive Wolverine run." },
          { title: "Enemy of the State", issues: "Wolverine #20-31 (2004-2005)", tags: ["essential"], note: "Mark Millar. HYDRA controls Logan." },
          { title: "Old Man Logan", issues: "Wolverine #66-72, Giant-Size #1 (2008-2009)", tags: ["essential"], note: "Mark Millar. The future wasteland." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "Wolverine and the X-Men", issues: "#1-42 (2011-2014)", note: "Jason Aaron. Logan runs a school." },
          { title: "Death of Wolverine", issues: "#1-4 (2014)", tags: ["essential"], note: "Charles Soule. Logan's end." },
          { title: "Return of Wolverine", issues: "#1-5 (2018-2019)", note: "Charles Soule. Logan's return." },
        ]
      }
    ]
  },
  {
    id: "black-panther",
    name: "Black Panther",
    alias: "T'Challa",
    initial: "BP",
    color: "#4b0082",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Black Panther by Christopher Priest", issues: "#1-62 (1998-2003)", tags: ["essential"], note: "The definitive run. Everett K. Ross narrator." },
          { title: "Who Is the Black Panther?", issues: "Black Panther Vol. 4 #1-6 (2005)", tags: ["essential"], note: "Reginald Hudlin. Origin retold." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "A Nation Under Our Feet", issues: "Black Panther #1-12 (2016)", tags: ["essential"], note: "Ta-Nehisi Coates. Wakanda in crisis." },
          { title: "Black Panther by Coates", issues: "#1-25 (2016-2018)", tags: ["essential"], note: "Complete first volume." },
          { title: "Black Panther: Intergalactic Empire of Wakanda", issues: "#1-12 (2018-2019)", note: "Coates. T'Challa in space." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "Doomwar", issues: "#1-6 (2010)", note: "Jonathan Maberry. Doom vs. Wakanda." },
          { title: "New Avengers: Illuminati", issues: "#1-5 (2006-2008)", note: "T'Challa joins the Illuminati." },
        ]
      }
    ]
  },
  {
    id: "venom",
    name: "Venom",
    alias: "Eddie Brock",
    initial: "V",
    color: "#1a1a1a",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Amazing Spider-Man #252-258", issues: "(1984)", tags: ["essential"], note: "The black costume saga. Symbiote origin." },
          { title: "Birth of Venom", issues: "Amazing Spider-Man #298-300 (1988)", tags: ["essential"], note: "David Michelinie & Todd McFarlane. Eddie Brock bonds." },
          { title: "Lethal Protector", issues: "#1-6 (1993)", tags: ["essential"], note: "Venom's first solo series. San Francisco." },
        ]
      },
      {
        title: "Donny Cates Era",
        items: [
          { title: "Venom by Donny Cates", issues: "#1-35 (2018-2021)", tags: ["essential"], note: "Knull. The God of the Symbiotes." },
          { title: "Absolute Carnage", issues: "#1-5 (2019)", tags: ["essential"], note: "Cletus Kasady hunts all symbiote hosts." },
          { title: "King in Black", issues: "#1-5 (2020-2021)", tags: ["essential"], note: "Knull invades Earth. Eddie ascends." },
        ]
      },
      {
        title: "Legacy",
        items: [
          { title: "Venom: Dark Origin", issues: "#1-5 (2008)", note: "Eddie Brock's backstory expanded." },
          { title: "Agent Venom", issues: "Venom Vol. 2 #1-42 (2011-2013)", note: "Flash Thompson as Venom." },
        ]
      }
    ]
  },
  {
    id: "doctor-doom",
    name: "Doctor Doom",
    alias: "Victor Von Doom",
    initial: "D",
    color: "#2f4f4f",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Books of Doom", issues: "#1-6 (2005-2006)", tags: ["essential"], note: "Ed Brubaker. Doom's origin." },
          { title: "Fantastic Four Annual #2", issues: "(1964)", tags: ["essential"], note: "Stan Lee & Jack Kirby. Doom's first origin." },
        ]
      },
      {
        title: "Core Arcs",
        items: [
          { title: "Fantastic Four by Jonathan Hickman", issues: "#570-588, FF #1-23 (2009-2012)", tags: ["essential"], note: "Council of Dooms. Latveria. The Future Foundation." },
          { title: "Secret Wars", issues: "#1-9 (2015)", tags: ["essential"], note: "Hickman. Doom becomes God Emperor." },
          { title: "Infamous Iron Man", issues: "#1-12 (2016-2017)", note: "Bendis. Doom as Iron Man. Redemption arc." },
        ]
      },
      {
        title: "Key Appearances",
        items: [
          { title: "Triumph and Torment", issues: "(1989)", tags: ["essential"], note: "Doctor Doom and Doctor Strange. Mephisto's realm." },
          { title: "Emperor Doom", issues: "(1987)", note: "Doom conquers the world. Now what?" },
          { title: "Doom 2099", issues: "#1-44 (1993-1996)", note: "Doom in the future." },
        ]
      }
    ]
  },
  {
    id: "nova",
    name: "Nova",
    alias: "Richard Rider",
    initial: "N",
    color: "#ffd700",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Nova Vol. 1", issues: "#1-25 (1976-1979)", tags: ["classic"], note: "Marv Wolfman. Richard Rider's origin." },
          { title: "New Warriors Vol. 1", issues: "#1-75 (1990-1996)", note: "Fabian Nicieza. Nova with the team." },
        ]
      },
      {
        title: "Annihilation Era",
        items: [
          { title: "Annihilation: Nova", issues: "#1-4 (2006)", tags: ["essential"], note: "Dan Abnett & Andy Lanning. Nova becomes the last." },
          { title: "Annihilation", issues: "#1-6 (2006)", tags: ["essential"], note: "The Annihilation Wave. Nova leads." },
          { title: "Nova Vol. 4", issues: "#1-36 (2007-2010)", tags: ["essential"], note: "Abnett & Lanning. The definitive Nova." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "Annihilation: Conquest", issues: "#1-6 (2007-2008)", note: "The Phalanx. Guardians form." },
          { title: "War of Kings", issues: "#1-6 (2009)", note: "Shi'ar vs. Kree. Nova caught between." },
          { title: "The Thanos Imperative", issues: "#1-6 (2010)", tags: ["essential"], note: "The Cancerverse. Nova's sacrifice." },
        ]
      }
    ]
  },
  {
    id: "jessica-jones",
    name: "Jessica Jones",
    alias: "Private Investigator",
    initial: "JJ",
    color: "#4b0082",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Alias", issues: "#1-28 (2001-2004)", tags: ["essential"], note: "Brian Michael Bendis & Michael Gaydos. The complete story." },
          { title: "The Pulse", issues: "#1-14 (2004-2006)", tags: ["essential"], note: "Bendis. Jessica at the Daily Bugle." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "Jessica Jones", issues: "#1-18 (2016-2018)", tags: ["essential"], note: "Bendis returns. Post-Secret Wars." },
          { title: "Jessica Jones: Blind Spot", issues: "#1-6 (2020)", note: "Kelly Thompson. New mysteries." },
        ]
      },
      {
        title: "Related",
        items: [
          { title: "New Avengers", issues: "Various (2005-2010)", note: "Jessica as Avengers support." },
          { title: "Young Avengers Vol. 2", issues: "#1-15 (2013)", note: "Her daughter's future." },
        ]
      }
    ]
  },
  {
    id: "guardians",
    name: "Guardians of the Galaxy",
    alias: "Cosmic Misfits",
    initial: "G",
    color: "#ff8c00",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Annihilation", issues: "#1-6 (2006)", tags: ["essential"], note: "The cosmic Marvel event that started it all." },
          { title: "Annihilation: Conquest - Starlord", issues: "#1-4 (2007)", tags: ["essential"], note: "Keith Giffen. The team forms." },
          { title: "Guardians of the Galaxy Vol. 2", issues: "#1-25 (2008-2010)", tags: ["essential"], note: "Abnett & Lanning. The definitive run." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "Guardians of the Galaxy by Bendis", issues: "#0.1-27 (2013-2015)", note: "Movie-influenced team." },
          { title: "Guardians of the Galaxy by Donny Cates", issues: "#1-12 (2019)", note: "Thanos' legacy." },
          { title: "Guardians of the Galaxy by Al Ewing", issues: "#1-18 (2020-2021)", tags: ["essential"], note: "The Last Annihilation." },
        ]
      },
      {
        title: "Events",
        items: [
          { title: "War of Kings", issues: "#1-6 (2009)", tags: ["essential"], note: "Shi'ar vs. Inhumans. Cosmic upheaval." },
          { title: "Realm of Kings", issues: "(2009-2010)", note: "The Fault opens. The Cancerverse." },
          { title: "The Thanos Imperative", issues: "#1-6 (2010)", tags: ["essential"], note: "The Guardians vs. the Cancerverse." },
        ]
      }
    ]
  },
  {
    id: "hulk",
    name: "Hulk",
    alias: "Bruce Banner",
    initial: "H",
    color: "#228b22",
    categories: [
      {
        title: "Foundations",
        items: [
          { title: "Incredible Hulk #1-6", issues: "(1962-1963)", tags: ["classic"], note: "Stan Lee & Jack Kirby. The origin." },
          { title: "Planet Hulk", issues: "Incredible Hulk #92-105 (2006-2007)", tags: ["essential"], note: "Greg Pak. Hulk exiled. Gladiator king." },
          { title: "World War Hulk", issues: "#1-5 (2007)", tags: ["essential"], note: "Pak. Hulk returns for revenge." },
        ]
      },
      {
        title: "Peter David Era",
        items: [
          { title: "Incredible Hulk by Peter David", issues: "#331-467 (1987-1998)", tags: ["essential"], note: "The definitive run. Grey Hulk. Professor Hulk." },
          { title: "Future Imperfect", issues: "#1-2 (1992)", tags: ["essential"], note: "David & George Perez. Maestro." },
        ]
      },
      {
        title: "Modern Era",
        items: [
          { title: "Immortal Hulk", issues: "#1-50 (2018-2021)", tags: ["essential"], note: "Al Ewing. Horror Hulk. Bruce cannot die." },
          { title: "Indestructible Hulk", issues: "#1-20 (2012-2014)", note: "Mark Waid. Banner works for S.H.I.E.L.D." },
        ]
      }
    ]
  }
];

/**
 * Get all Marvel starter packs
 * @returns {Array} Array of all Marvel character starter packs
 */
function getMarvelStarterPacks() {
  return MARVEL_STARTER_PACKS;
}

/**
 * Get a specific Marvel starter pack by ID
 * @param {string} id - The character ID
 * @returns {Object|null} The starter pack or null if not found
 */
function getMarvelStarterById(id) {
  return MARVEL_STARTER_PACKS.find(pack => pack.id === id) || null;
}

/**
 * Search Marvel starter packs by name or alias
 * @param {string} query - Search query
 * @returns {Array} Matching starter packs
 */
function searchMarvelStarters(query) {
  const q = query.toLowerCase();
  return MARVEL_STARTER_PACKS.filter(pack => 
    pack.name.toLowerCase().includes(q) || 
    pack.alias.toLowerCase().includes(q)
  );
}

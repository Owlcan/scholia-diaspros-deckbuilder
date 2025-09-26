const initialCardData = [
  // == MONSTERS (from Bestiary) ==
  {
    id: 'monster_001',
    name: "Darkling-Lurker",
    type: "Monster Card",
    race: "Darkling",
    tier: "Minion",
    cost: "1 Shadergy",
    hp: 2,
    atk: 1,
    ability: {
      name: "Pack Tactics",
      description: "If you control 2 or more Darkling cards, this card gets +1 ATK."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/lurker (1).webp"
  },
  {
    id: 'monster_002',
    name: "Darkling-Slurper",
    type: "Monster Card",
    race: "Darkling",
    tier: "Utility",
    cost: "1 Shadergy, 1 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Slurp",
      description: "When this card deals damage to a Monster/Student, that card cannot attack on its next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/slurper (1).webp"
  },
  {
    id: 'monster_003',
    name: "Darkforme Overwatch",
    type: "Monster Card",
    race: "Darkforme",
    tier: "Medium",
    cost: "1 Shadergy, 2 Universal",
    hp: 3,
    atk: 2,
    ability: {
      name: "Shadowmist Jaunt",
      description: "Once per turn, you may pay 1 Universal energy to return this card to your hand."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/darkformeoverwatch (1).webp"
  },
  {
    id: 'monster_004',
    name: "Darkforme Enforcer",
    type: "Monster Card",
    race: "Darkling",
    tier: "Strong",
    cost: "4 Universal",
    hp: 5,
    atk: 3,
    ability: {
      name: "Degenerate Regenerator",
      description: "If this card was not attacked last turn, it heals 1 HP at the start of your turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/darkformeenforcer (1).webp"
  },
  {
    id: 'monster_005',
    name: "Chap'Hell",
    type: "Monster Card",
    race: "Darkling",
    tier: "Legendary",
    cost: "3 Shadergy, 3 Universal, 2 Geo",
    hp: 8,
    atk: 5,
    ability: {
      name: "Pants-Crapping Fear Presence",
      description: "When this card enters the battlefield, all opposing Monster/Student cards are tapped and cannot attack on their next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/chaphell (1).webp"
  },
  {
    id: 'monster_006',
    name: "Darkling Bellowbelly Cubling",
    type: "Monster Card",
    race: "Darkling",
    tier: "Minion",
    cost: "1 Shadergy",
    hp: 1,
    atk: 0,
    ability: {
      name: "Irresistibly Chirpy",
      description: "When this card is played, search your deck for a 'Darkling' card and add it to your hand. Shuffle your deck."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/cublings (1).webp"
  },
  {
    id: 'monster_007',
    name: "Darkling Caller",
    type: "Monster Card",
    race: "Darkling",
    tier: "Utility",
    cost: "2 Universal",
    hp: 1,
    atk: 1,
    ability: {
      name: "Piercing Call",
      description: "When this card enters the battlefield, you may play a Darkling card with cost 2 or less from your hand for free."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/darkcaller (5).webp"
  },
  // == STUDENTS (from Races) ==
  {
    id: 'student_001',
    name: "Kittenfolk Pouncer",
    type: "Student Card",
    race: "Kittenfolk",
    tier: "Minion",
    cost: "1 Universal",
    hp: 1,
    atk: 2,
    ability: {
      name: "Feline Agility",
      description: "This card cannot be blocked by cards with 1 ATK or less."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/kittenlingpouncer.webp"
  },
  {
    id: 'student_002',
    name: "Umbral Tribe Mystic",
    type: "Student Card",
    race: "Kittenfolk",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Catnip Tincture",
      description: "Tap: Give another target Student card +1 ATK and Unblockable until end of turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/umbraltribemystic (1).webp"
  },
  {
    id: 'student_003',
    name: "Pupperling Watchkin",
    type: "Student Card",
    race: "Pupperling",
    tier: "Medium",
    cost: "3 Universal",
    hp: 4,
    atk: 2,
    ability: {
      name: "Ever Watchful",
      description: "This card can block an additional Monster/Student card each turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/watchkin (1).webp"
  },
  {
    id: 'student_004',
    name: "Bunbunkin Bigpaw",
    type: "Student Card",
    race: "Bunbunkin",
    tier: "Strong",
    cost: "4 Universal",
    hp: 5,
    atk: 3,
    ability: {
      name: "Enhanced Burrowing",
      description: "This card can attack an opponent's Booster cards directly, even if they have Monster/Student cards on the field."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/bunbunkinbigpaw (16).webp"
  },
  {
    id: 'student_005',
    name: "Celestian Archist Ascendant",
    type: "Student Card",
    race: "Celestian Archist",
    tier: "Legendary",
    cost: "7 Universal",
    hp: 7,
    atk: 5,
    ability: {
      name: "Inherent Archetype",
      description: "When this card is played, choose one: Deal 3 damage to any target, or heal a friendly card for 5 HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/celestianarchist (3).webp"
  },
  // == NEW STUDENT CARDS ==
  // Foxfolk Set
  {
    id: 'student_006',
    name: "Moonshadow Fox Initiate",
    type: "Student Card",
    race: "Foxfolk",
    tier: "Minion",
    cost: "1 Universal",
    hp: 1,
    atk: 1,
    ability: {
      name: "Shifting Shadows",
      description: "When played, this card cannot be targeted by abilities until your next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/moonshadowfoxinitiate (7).webp"
  },
  {
    id: 'student_007',
    name: "Arcane Fox Scholar",
    type: "Student Card",
    race: "Foxfolk",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Spell Scholar",
      description: "When you play a Spell card, draw a card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/arcanescholarfox (12).webp"
  },
  {
    id: 'student_008',
    name: "Emberclaw Striker",
    type: "Student Card",
    race: "Foxfolk",
    tier: "Medium",
    cost: "3 Universal, 1 Pyronergy",
    hp: 3,
    atk: 2,
    ability: {
      name: "Arcane Strike",
      description: "When this card attacks, it deals 1 additional damage to the defending card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/emberclawstriker (1).webp"
  },
  {
    id: 'student_009',
    name: "Moonshadow Trickster",
    type: "Student Card",
    race: "Foxfolk",
    tier: "Strong",
    cost: "4 Universal",
    hp: 4,
    atk: 3,
    ability: {
      name: "Quick Wit",
      description: "When this card deals damage to an opponent's Summoning Vitality, return a target Monster/Student card to its owner's hand."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/moonshadowtrickster (6).webp"
  },
  {
    id: 'student_010',
    name: "Kitsune Spellweaver",
    type: "Student Card",
    race: "Foxfolk",
    tier: "Legendary",
    cost: "6 Universal",
    hp: 5,
    atk: 4,
    ability: {
      name: "Nine-Tailed Illusion",
      description: "When you play this card, you may copy a Spell card in any discard pile and cast it for free."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/kitsunespellweaver.webp"
  },
  // Cowbuddies Set
  {
    id: 'student_011',
    name: "Cowbuddy Lil Helper",
    type: "Student Card",
    race: "Cowbuddy",
    tier: "Minion",
    cost: "1 Universal",
    hp: 3,
    atk: 0,
    ability: {
      name: "Soothing Presence",
      description: "When this card enters the battlefield, heal another target card for 1 HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/cowbuddyhelper (1).webp"
  },
  {
    id: 'student_012',
    name: "Bull Buddy Brawler",
    type: "Student Card",
    race: "Cowbuddy",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 2,
    ability: {
      name: "Horned Charge",
      description: "This card must be blocked if able."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/bullbuddybrawler.webp"
  },
  {
    id: 'student_013',
    name: "Dairy Friend Artisan",
    type: "Student Card",
    race: "Cowbuddy",
    tier: "Medium",
    cost: "3 Universal",
    hp: 4,
    atk: 1,
    ability: {
      name: "Produce Milk",
      description: "At the start of your turn, heal all other friendly cards for 1 HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/dairyfriendartisan.webp"
  },
  {
    id: 'student_014',
    name: "Bull Buddy Champion",
    type: "Student Card",
    race: "Cowbuddy",
    tier: "Strong",
    cost: "4 Universal, 1 Geonergy",
    hp: 5,
    atk: 4,
    ability: {
      name: "Unyielding Might",
      description: "This card gets +2 ATK if it is the only card you control that is attacking."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/bullbuddychampion (1).webp"
  },
  {
    id: 'student_015',
    name: "Elder Bovine Guardian",
    type: "Student Card",
    race: "Cowbuddy",
    tier: "Legendary",
    cost: "6 Universal",
    hp: 8,
    atk: 3,
    ability: {
      name: "Bovine Fortitude",
      description: "All other friendly cards have +2 HP. This card can block up to three attackers."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/elderbovineguardian (1).webp"
  },
  // Crinklehearts Set
  {
    id: 'student_016',
    name: "Impish Heart Prankster",
    type: "Student Card",
    race: "Crinkleheart",
    tier: "Minion",
    cost: "1 Universal",
    hp: 1,
    atk: 1,
    ability: {
      name: "Playful Hex",
      description: "When this card is defeated, tap target opposing Monster/Student card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/impishheartprankster (5).webp"
  },
  {
    id: 'student_017',
    name: "Cherished Heart Chanter",
    type: "Student Card",
    race: "Crinkleheart",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Aura of Adorableness",
      description: "Opposing cards with 3 ATK or more cannot attack this card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/cherishedheartchanter (7).webp"
  },
  {
    id: 'student_018',
    name: "Feral Heart Pouncer",
    type: "Student Card",
    race: "Crinkleheart",
    tier: "Medium",
    cost: "3 Universal",
    hp: 3,
    atk: 3,
    ability: {
      name: "Sudden Pounce",
      description: "This card can attack on the turn it is played."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/feralheartpouncer (3).webp"
  },
  {
    id: 'student_019',
    name: "Crinkleheart Seducer",
    type: "Student Card",
    race: "Crinkleheart",
    tier: "Strong",
    cost: "4 Universal",
    hp: 4,
    atk: 2,
    ability: {
      name: "Crinkle Charm",
      description: "When this card attacks, you may tap target defending card. It does not deal combat damage this turn."
    },
    is_full_card: true,
    deluxe_art_url: "src/assets/images/expeditionandgames/TCG Images/seducer (14).webp",
    image_url: "src/assets/images/expeditionandgames/TCG Images/seducer.webp",
    flavor_text: "Crinkle in her floating grace, leaving little hearts to race.",
  },
  {
    id: 'student_020',
    name: "Arch-Fiend of Cuteness",
    type: "Student Card",
    race: "Crinkleheart",
    tier: "Legendary",
    cost: "5 Universal, 1 Pyronergy",
    hp: 5,
    atk: 3,
    ability: {
      name: "Disarming Cuteness",
      description: "When this card enters the battlefield, take control of an opposing Monster/Student with 3 ATK or less."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/archfiendofcuteness.webp"
  },
  
  // Totan Set
  {
    id: 'student_026',
    name: "Totan Earthshaker",
    type: "Student Card",
    race: "Totan",
    tier: "Medium",
    cost: "2 Geo, 1 Universal",
    hp: 4,
    atk: 2,
    ability: {
      name: "Stone Stomp",
      description: "When this card attacks, deal 1 damage to all enemy cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/totanearthshaker (8).webp"
  },
  {
    id: 'student_027',
    name: "Totan Mountain Guard",
    type: "Student Card",
    race: "Totan",
    tier: "Strong",
    cost: "3 Geo, 2 Universal",
    hp: 6,
    atk: 3,
    ability: {
      name: "Immovable Defense",
      description: "This card takes 1 less damage from all sources. Can block for any friendly card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/totanmtguard (1).webp"
  },
  
  // Emberclaw Set
  {
    id: 'student_028',
    name: "Emberclaw Flame Dancer",
    type: "Student Card",
    race: "Emberclaw",
    tier: "Medium",
    cost: "2 Pyro, 1 Universal",
    hp: 3,
    atk: 3,
    ability: {
      name: "Burning Touch",
      description: "When this card deals damage, the target takes 1 additional damage at the start of their next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/emberclawflamedancer (3).webp"
  },
  {
    id: 'student_029',
    name: "Emberclaw Fire Sage",
    type: "Student Card",
    race: "Emberclaw",
    tier: "Strong",
    cost: "3 Pyro, 2 Universal",
    hp: 4,
    atk: 2,
    ability: {
      name: "Ignite Spell",
      description: "When you play a Spell card, deal 2 damage to target enemy card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/emberclawfiresage (10).webp"
  },
  
  // Medusii Set
  {
    id: 'student_030',
    name: "Medusii Serpent Whisper",
    type: "Student Card",
    race: "Medusii",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 2,
    ability: {
      name: "Petrifying Gaze",
      description: "When this card enters play, tap target enemy card. That card cannot untap during its controller's next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/serpentwhisperer (6).webp"
  },
  {
    id: 'student_031',
    name: "Medusii Stone Oracle",
    type: "Student Card",
    race: "Medusii",
    tier: "Strong",
    cost: "4 Universal, 1 Geo",
    hp: 5,
    atk: 3,
    ability: {
      name: "Stone Prophecy",
      description: "At the start of your turn, look at the top 3 cards of your deck. Put one in your hand and the rest on the bottom."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/serpentoracle.webp"
  },
  
  // Scampersaurian Set
  {
    id: 'student_032',
    name: "Veteran Raptor Scout",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Medium",
    cost: "2 Universal, 1 Geo",
    hp: 3,
    atk: 3,
    ability: {
      name: "Pack-Hunt Leader",
      description: "When this card attacks, if you control another Scampersaurian, deal 1 additional damage."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/vetraptorscout (5).webp"
  },
  {
    id: 'student_033',
    name: "Armored Titan Scampersaurian",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Boss",
    cost: "5 Universal, 2 Geo",
    hp: 8,
    atk: 5,
    ability: {
      name: "Armored Hide",
      description: "This card takes 1 less damage from all sources. When attacked, attacker takes 1 damage."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/armoredtitan (4).webp"
  },
  {
    id: 'student_034',
    name: "Bronto Babe",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Strong",
    cost: "4 Universal, 1 Hydro",
    hp: 6,
    atk: 2,
    ability: {
      name: "Gentle Giant",
      description: "When this card enters play, heal all friendly cards for 2 HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/brontobabs (1).webp"
  },
  {
    id: 'student_035',
    name: "Pterosaur Skyseeker",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 2,
    ability: {
      name: "Flying Scout",
      description: "This card cannot be blocked by cards with 0 ATK. When played, draw a card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pterosaurtot.webp"
  },
  {
    id: 'student_036',
    name: "Tyrannobrat",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Legendary",
    cost: "6 Universal, 2 Pyro",
    hp: 7,
    atk: 6,
    ability: {
      name: "Apex Predator",
      description: "When this card attacks, destroy target opposing card with 3 ATK or less."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/twrecksbrats (6).webp"
  },
  
  // More Specific Character Cards
  {
    id: 'student_037',
    name: "Umbral Mystic",
    type: "Student Card",
    race: "Kittenfolk",
    tier: "Medium",
    cost: "3 Universal",
    hp: 3,
    atk: 2,
    ability: {
      name: "Shadow Magic",
      description: "When this card enters play, tap target enemy card. That card cannot untap next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/umbraltribemystic (1).webp"
  },
  {
    id: 'student_038',
    name: "Pupperling Archer",
    type: "Student Card",
    race: "Pupperling",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 2,
    ability: {
      name: "Precise Shot",
      description: "This card can deal damage to any target, even if not attacking."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pupperlingarcher (1).webp"
  },
  {
    id: 'student_039',
    name: "Pupperling Knight",
    type: "Student Card",
    race: "Pupperling",
    tier: "Strong",
    cost: "4 Universal, 1 Geo",
    hp: 5,
    atk: 3,
    ability: {
      name: "Protective Shield",
      description: "All other friendly cards take 1 less damage from attacks."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pupperlingknight (8).webp"
  },
  {
    id: 'student_040',
    name: "Waddlehoof Student",
    type: "Student Card",
    race: "Waddlehoof",
    tier: "Medium",
    cost: "3 Universal",
    hp: 4,
    atk: 2,
    ability: {
      name: "Study Session",
      description: "When this card enters play, all friendly students gain +1 ATK until end of turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/waddlehoofstudent (2).webp"
  },
  {
    id: 'student_041',
    name: "Seimei Scholar",
    type: "Student Card",
    race: "Seimei",
    tier: "Strong",
    cost: "4 Universal, 1 Hydro",
    hp: 4,
    atk: 3,
    ability: {
      name: "Mystical Knowledge",
      description: "When you play a spell, this card gains +1 ATK and +1 HP permanently."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/seimeischolar (1).webp"
  },
  
  // == SPELLS (from Handbook) ==
  {
    id: 'spell_012',
    name: "Spank!",
    type: "Spell Card",
    cost: "1 Universal",
    ability: {
      name: "Disciplinary Sting",
      description: "Target Monster/Student card cannot attack on its next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/spank.webp"
  },
  {
    id: 'spell_002',
    name: "Diapering",
    type: "Spell Card",
    cost: "2 Universal",
    ability: {
      name: "Magical Diapering",
      description: "Target Monster/Student card gets -2 ATK until your next turn. Draw a card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diapering (4).webp"
  },
  {
    id: 'spell_003',
    name: "Babybrain",
    type: "Spell Card",
    cost: "3 Universal",
    ability: {
      name: "Infantile Simplicity",
      description: "Target Monster/Student card loses all abilities and becomes a 1/1 until your next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/babybrain.webp"
  },
  {
    id: 'spell_005',
    name: "Diaper Doom",
    type: "Spell Card",
    cost: "8 Universal, 2 Geonergy",
    ability: {
      name: "Crushing Pressure",
      description: "Destroy all Monster/Student cards with 4 HP or less."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diaperdoom.webp"
  },
  // == NEW SPELL CARDS ==
  {
    id: 'spell_006',
    name: "Pacification",
    type: "Spell Card",
    cost: "2 Universal",
    ability: {
      name: "Restricted Speech",
      description: "Target Monster/Student card cannot use its abilities for 2 turns."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pacification.webp"
  },
  {
    id: 'spell_008',
    name: "Little Miracle",
    type: "Spell Card",
    cost: "1 Universal",
    ability: {
      name: "Divine Care",
      description: "Choose one: Heal a target card for 2 HP, or look at the top two cards of your deck and put one in your hand."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/yarablessing.webp"
  },
  {
    id: 'spell_009',
    name: "Diaper Douse",
    type: "Spell Card",
    cost: "2 Universal, 1 Hydronergy",
    ability: {
      name: "Saturating Blast",
      description: "Tap target Monster/Student card. It does not untap during its controller's next untap step."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diaperdouse.webp"
  },
  // == ITEMS/ARTIFACTS (from Items list) ==
  {
    id: 'item_001',
    name: "Brown Tincture",
    type: "Item Card",
    cost: "2 Universal",
    hp: 2,
    ability: {
      name: "Uncontrollable Messing",
      description: "When this card is destroyed, target opponent must destroy one of their Booster cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/browntincture.webp"
  },
  {
    id: 'item_002',
    name: "Gluttonberries",
    type: "Item Card",
    cost: "1 Universal",
    hp: 1,
    ability: {
      name: "Short Rest",
      description: "Destroy this card: Heal one of your Monster/Student cards for 2 HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/gluttonberries.webp"
  },
  {
    id: 'item_003',
    name: "Penitent Mitts",
    type: "Artifact Card",
    cost: "3 Universal",
    hp: 3,
    ability: {
      name: "Bratting Restraint",
      description: "Attach to an opposing Monster/Student card. The attached card cannot use its abilities."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/penitentmitts (1).webp"
  },
  // == NEW ITEM/ARTIFACT CARDS ==
  {
    id: 'item_005',
    name: "Azure Harvest Moon Ice Cream",
    type: "Item Card",
    cost: "3 Universal",
    hp: 1,
    ability: {
      name: "Legendary Confection",
      description: "Destroy this card: Heal one of your Monster/Student cards to full HP and draw a card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/azureicecream (1).webp"
  },
  {
    id: 'item_006',
    name: "Invisipullup",
    type: "Item Card",
    cost: "2 Universal",
    hp: 1,
    ability: {
      name: "Concealment Enchantment",
      description: "Attach to a friendly card. The attached card cannot be blocked this turn. Destroy this card at the end of the turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/invisipullups.webp"
  },
  {
    id: 'item_007',
    name: "Diaper of the Hyena's Riddle",
    type: "Artifact Card",
    cost: "4 Universal",
    hp: 5,
    ability: {
      name: "Mocking Laughter",
      description: "Your Monster/Student cards have +1/+1. At the start of your turn, if you have more cards in hand than your opponent, destroy one of your Booster cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/hyenasriddles.webp"
  },
  // == BOOSTERS (from Diaper Brands list) ==
  {
    id: 'booster_001',
    name: "UniGuard Basic White",
    type: "Booster Card",
    energy_type: "Universal",
    hp: 1,
    ability: {
      name: "Basic Absorbency",
      description: "Tap: Add 1 Universal energy to your pool."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (1).webp"
  },
  {
    id: 'booster_002',
    name: "AquaPaws SplashZone",
    type: "Booster Card",
    energy_type: "Hydronergy",
    hp: 2,
    ability: {
      name: "Water Resistance",
      description: "Tap: Add 1 Hydronergy energy to your pool."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/aquapawssplashzone.webp"
  },
  {
    id: 'booster_003',
    name: "HolidayCheer SnowflakeSnuggle",
    type: "Booster Card",
    energy_type: "Cryonergy",
    hp: 2,
    ability: {
      name: "Winter Insulation",
      description: "Tap: Add 1 Cryonergy energy to your pool."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/holidaycheersnowflakesnuggle.webp"
  },
  {
    id: 'booster_004',
    name: "DinoMite Volcano Valley",
    type: "Booster Card",
    energy_type: "Pyronergy",
    hp: 2,
    ability: {
      name: "Explosive Playtime",
      description: "Tap: Add 1 Pyronergy energy to your pool."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/dinomitevolcanovalley.webp"
  },
  {
    id: 'booster_005',
    name: "TerraGentle Earthly Calm",
    type: "Booster Card",
    energy_type: "Geonergy",
    hp: 2,
    ability: {
      name: "Natural Comfort",
      description: "Tap: Add 1 Geonergy energy to your pool."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/terragentleearthlycalm.webp"
  },
  {
    id: 'booster_006',
    name: "UltraDry Max Absorbency",
    type: "Booster Card",
    energy_type: "Universal",
    hp: 3,
    ability: {
      name: "Ultimate Protection",
      description: "Tap: Add 2 Universal energy to your pool."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (10).webp"
  },
  {
    id: "monster_008",
    name: "Darkaconda",
    type: "Monster Card",
    race: "Darkling",
    tier: "Strong",
    cost: "4 Universal, 1 Hydronergy",
    hp: 6,
    atk: 3,
    ability: {
      name: "Serpent-Lance Lunge",
      description: "If this card did not attack last turn, it can attack a card in the back row directly."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/darkaconda (1).webp"
  },
  {
    id: "monster_009",
    name: "Corridorcrusher",
    type: "Monster Card",
    race: "Darkling",
    tier: "Strong",
    cost: "4 Universal",
    hp: 5,
    atk: 4,
    ability: {
      name: "Ambush Predator",
      description: "This card deals +2 damage when attacking a card that was played this turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/cavesweller (1).webp"
  },
  {
    id: "monster_010",
    name: "Nailbearer",
    type: "Monster Card",
    race: "Construct",
    tier: "Medium",
    cost: "3 Universal",
    hp: 4,
    atk: 2,
    ability: {
      name: "Nail Burst",
      description: "ACTION: Pay 1 Universal. Deal 1 damage to all opposing Monster/Student cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/nailbearer.webp"
  },
  {
    id: "monster_011",
    name: "Teddy Abomination",
    type: "Monster Card",
    race: "Monstrosity",
    tier: "Strong",
    cost: "5 Universal",
    hp: 7,
    atk: 4,
    ability: {
      name: "Frightful Presence",
      description: "When this card enters the battlefield, tap one target opposing Monster/Student card. It does not untap during its controller's next untap step."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/teddybomination (1).webp"
  },
  {
    id: "monster_012",
    name: "Bellyacher Spitebrat",
    type: "Monster Card",
    race: "Abomination",
    tier: "Minion",
    cost: "1 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Temper Tantrum",
      description: "When this card is defeated, deal 1 damage to the card that defeated it."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/spitebrat (1).webp"
  },
  {
    id: "monster_013",
    name: "Darkforged Remnant (Lash)",
    type: "Monster Card",
    race: "Construct",
    tier: "Minion",
    cost: "2 Universal",
    hp: 3,
    atk: 2,
    ability: {
      name: "Darkling Synergy",
      description: "Gains +1 ATK if you control another 'Construct' or 'Darkling' card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/darkforgedlash (7).webp"
  },
  {
    id: "monster_014",
    name: "Crawling Onesie",
    type: "Monster Card",
    race: "Mimic",
    tier: "Utility",
    cost: "3 Universal",
    hp: 4,
    atk: 1,
    ability: {
      name: "Smother",
      description: "When this card deals damage to a Monster/Student, that card cannot attack on its next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/crawlingonesie.webp"
  },
  {
    id: "monster_016",
    name: "Darkling-Ghostiby",
    type: "Monster Card",
    race: "Darkling",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Incorporeal",
      description: "This card can attack an opponent's Summoning Vitality directly, even if they control Monster/Student cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/ghostiby (3).webp"
  },
  {
    id: "monster_017",
    name: "Shadow Babysitter",
    type: "Monster Card",
    race: "Darkling",
    tier: "Strong",
    cost: "5 Universal",
    hp: 5,
    atk: 4,
    ability: {
      name: "Chains of Shadow",
      description: "When this card enters the battlefield, tap target opposing Monster/Student card. It does not untap for 2 turns."
    },
    is_full_card: true,
    deluxe_art_url: "src/assets/images/expeditionandgames/TCG Images/shadowbabysitter.webp",
    image_url: "src/assets/images/expeditionandgames/TCG Images/shadowbabysitter (1).webp"
  },
  {
    id: "student_021",
    name: "Speedkindred Student",
    type: "Student Card",
    race: "Waddlehooves",
    tier: "Minion",
    cost: "1 Universal",
    hp: 1,
    atk: 2,
    ability: {
      name: "Fleet of Hoof",
      description: "This card can attack on the turn it is played."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/speedkindredstudent (1).webp"
  },
  {
    id: "student_022",
    name: "Burdenbearer Apprentice",
    type: "Student Card",
    race: "Waddlehooves",
    tier: "Utility",
    cost: "2 Universal",
    hp: 4,
    atk: 1,
    ability: {
      name: "Natural Diaper Mastery",
      description: "When this card is played, you may search your deck for a Booster card and put it into your hand."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/burdenbearerapprentice (1).webp"
  },
  {
    id: "student_023",
    name: "Grovehoof Initiate",
    type: "Student Card",
    race: "Waddlehooves",
    tier: "Medium",
    cost: "3 Universal",
    hp: 3,
    atk: 2,
    ability: {
      name: "Druidic Initiate",
      description: "(Tap) Add 1 Universal energy to your pool. Can only be used for Spell cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/grovehoofinitiate (1).webp"
  },
  {
    id: "student_024",
    name: "Warbred Charger",
    type: "Student Card",
    race: "Waddlehooves",
    tier: "Strong",
    cost: "4 Universal, 1 Geonergy",
    hp: 5,
    atk: 4,
    ability: {
      name: "Powerful Charge",
      description: "If this card attacks, it deals 1 damage to your opponent's Summoning Vitality, even if blocked."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/warbredcharger (4).webp"
  },
  {
    id: "student_025",
    name: "Ancient Waddlehoof",
    type: "Student Card",
    race: "Waddlehooves",
    tier: "Legendary",
    cost: "6 Universal",
    hp: 7,
    atk: 5,
    ability: {
      name: "Unbridled Gait",
      description: "All other friendly Waddlehooves cards get +2 ATK."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/ancientwaddlehoof (4).webp"
  },
  {
    id: "student_055",
    name: "Padded Pouncer Spinneret",
    type: "Student Card",
    race: "Diaparachnid",
    tier: "Minion",
    cost: "1 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Ceiling Walker",
      description: "This card can only be blocked by other cards with Ceiling Walker or Reach."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/paddedpouncer (1).webp"
  },
  {
    id: "student_056",
    name: "Nursery Nightweaver",
    type: "Student Card",
    race: "Diaparachnid",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Webspinning",
      description: "(Tap) Tap target opposing Monster/Student card with 3 HP or less."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/nurserynightweaver (1).webp"
  },
  {
    id: "student_057",
    name: "Silkswaddler Artisan",
    type: "Student Card",
    race: "Diaparachnid",
    tier: "Medium",
    cost: "2 Universal, 1 Geonergy",
    hp: 5,
    atk: 2,
    ability: {
      name: "Fortress Weaving",
      description: "When played, create a 0/2 'Web Wall' token that can defend."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/silkswaddlerartisan (1).webp"
  },
  {
    id: "student_058",
    name: "Pokeypadbuthoid Stinger",
    type: "Student Card",
    race: "Diaparachnid",
    tier: "Strong",
    cost: "4 Universal",
    hp: 4,
    atk: 3,
    ability: {
      name: "Envenom",
      description: "When this card deals damage to a Monster/Student, that card gets -1/-1."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pokeypadbutt (1).webp"
  },
  {
    id: "student_059",
    name: "Diaparachnid Matriarch",
    type: "Student Card",
    race: "Diaparachnid",
    tier: "Legendary",
    cost: "7 Universal",
    hp: 6,
    atk: 6,
    ability: {
      name: "Many-Armed Weaver",
      description: "When you play this card, create two 1/1 'Spiderling' tokens."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diaparachnidmatriarch (1).webp"
  },
  {
    id: "student_060",
    name: "Pterodac-tot Explorer",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Minion",
    cost: "1 Universal",
    hp: 1,
    atk: 1,
    ability: {
      name: "Flight",
      description: "This card can attack an opponent's Summoning Vitality directly if they control no cards with Flight, Reach, or Bulwark."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pterototexplorer (1).webp"
  },
  {
    id: "student_044",
    name: "Veloci-Rascal Scout",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 2,
    ability: {
      name: "Pack Tactics",
      description: "Gets +1 ATK for each other Scampersaurian you control."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/raptorscouts (1).webp"
  },
  {
    id: "student_046",
    name: "Armored Titan Charger",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Medium",
    cost: "4 Universal",
    hp: 6,
    atk: 2,
    ability: {
      name: "Goring Horns",
      description: "When this card attacks, you may pay 1 Geonergy to give it +2 ATK this turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/armoredscampersaurian.webp"
  },
  {
    id: "student_048",
    name: "Bronto-Bottom Grazer",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Strong",
    cost: "5 Universal, 2 Geonergy",
    hp: 8,
    atk: 3,
    ability: {
      name: "Stomp",
      description: "When this card attacks, tap the defending card. It does not untap during its controller's next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/brontobottomgrazer.webp"
  },
  {
    id: "student_050",
    name: "T-Wrecks Alpha",
    type: "Student Card",
    race: "Scampersaurian",
    tier: "Legendary",
    cost: "7 Universal, 2 Pyronergy",
    hp: 7,
    atk: 7,
    ability: {
      name: "Fearsome Roar",
      description: "When this card enters the battlefield, opposing Monster/Student cards get -1/-1 until your next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/t-wrecksalpha (4).webp"
  },
  {
    id: "student_051",
    name: "Medusii Sprout",
    type: "Student Card",
    race: "Demi-Gorgon",
    tier: "Minion",
    cost: "2 Universal",
    hp: 2,
    atk: 1,
    ability: {
      name: "Constricting Coils",
      description: "When this card deals damage to a Monster/Student, that card cannot attack next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/medusa (1).webp"
  },
  {
    id: "student_045",
    name: "Totan Tantrumite",
    type: "Student Card",
    race: "Demi-Gorgon",
    tier: "Utility",
    cost: "2 Universal",
    hp: 4,
    atk: 1,
    ability: {
      name: "Mighty Mite",
      description: "This card can block an additional attacker each turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/tantrumite (10).webp"
  },
  {
    id: "student_047",
    name: "Serpent Scion",
    type: "Student Card",
    race: "Semi-Gorgon",
    tier: "Medium",
    cost: "3 Universal, 1 Geonergy",
    hp: 3,
    atk: 3,
    ability: {
      name: "Chilling Hiss",
      description: "When this card enters the battlefield, target opposing card gets -1 ATK until your next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/stonescion (3).webp"
  },
  {
    id: "student_049",
    name: "Totan Realm Quaker",
    type: "Student Card",
    race: "Semi-Gorgon",
    tier: "Strong",
    cost: "5 Universal",
    hp: 6,
    atk: 4,
    ability: {
      name: "Quake Slam",
      description: "When this card attacks, deal 1 damage to all other cards on the battlefield (including your own)."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/totanrealmquaker (1).webp"
  },
 {
    id: "spell_010",
    name: "Hymn of the Lullaby",
    type: "Spell Card",
    cost: "2 Universal",
    ability: {
      name: "Soothing Song",
      description: "Tap target Monster/Student card. It does not untap during its controller's next untap step."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/hymnoflullaby.gif"
  },
  {
    id: "spell_011",
    name: "Uncrinkling Catastrophe",
    type: "Spell Card",
    cost: "1 Universal",
    ability: {
      name: "Sudden Urge",
      description: "Target opponent must destroy one of their Booster cards in play."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/uncrinklingcatastrophe.webp"
  },
  {
    id: "spell_018",
    name: "Diaper Detonation",
    type: "Spell Card",
    cost: "3 Universal, 1 Pyronergy",
    ability: {
      name: "Explosive Padding",
      description: "Deal 3 damage to all Monster/Student cards on the field (including your own)."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diaperdetonation1.webp"
  },
  {
    id: "spell_013",
    name: "Smelly Smite",
    type: "Spell Card",
    cost: "2 Universal",
    ability: {
      name: "Overpowering Odor",
      description: "Give one of your Monster/Student cards +2 ATK this turn. When it deals damage to a card, tap that card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/smellysmite (1).webp"
  },
  {
    id: "spell_014",
    name: "Parental Power",
    type: "Spell Card",
    cost: "4 Universal",
    ability: {
      name: "Nurturing Strength",
      description: "Give all of your Monster/Student cards +1/+1 until your next turn. You gain 1 Summoning Vitality."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/parentalpower.webp"
  },
  {
    id: "spell_015",
    name: "Plushie Form",
    type: "Spell Card",
    cost: "2 Universal",
    ability: {
      name: "Cuddly Transformation",
      description: "Target friendly Student card gets +3 HP this turn and takes 1 less damage from all sources."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/plushieform.webp"
  },
  {
    id: "spell_016",
    name: "Create Changing Supplies",
    type: "Spell Card",
    cost: "2 Universal",
    ability: {
      name: "Timely Refresh",
      description: "Heal a target Monster/Student card for 2 HP and draw a card."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/changingsupplies.webp"
  },
  {
    id: "spell_017",
    name: "Mass Pacification",
    type: "Spell Card",
    cost: "4 Universal",
    ability: {
      name: "Flurry of Binkies",
      description: "Tap up to two target opposing Monster/Student cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/masspacification.webp"
  },
  {
    id: "patron_001",
    name: "Umbra, Mother Beneath the Bed",
    type: "Patron Card",
    race: "Deity",
    tier: "Legendary",
    cost: "8 Universal",
    hp: 10,
    atk: 5,
    ability: {
      name: "Embodiment of Fear",
      description: "When this card is played, and when tapped without attacking, your opponent cannot play Monster/Student cards on their next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/umbra.webp"
  },
  {
    id: "artifact_008",
    name: "Ela'sharna's Blessing",
    type: "Artifact Card",
    race: "Diaper Discipline",
    tier: "Artifact",
    cost: "3 Universal",
    hp: 5,
    atk: null,
    ability: {
      name: "Enduring Cleanliness",
      description: "Once per turn, you may tap 1 Universal energy to heal one of your cards for 2 HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/elasharnablessing.webp"
  },
  {
    id: "artifact_009",
    name: "The Great Weaver's Loom",
    type: "Artifact Card",
    race: "Diaparachnid",
    tier: "Artifact",
    cost: "4 Universal",
    hp: 6,
    atk: null,
    ability: {
      name: "Pact of the Weaver",
      description: "At the start of your turn, create a 0/1 'Web' token that can defend. You can have a maximum of three Web tokens."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/greatloomweaver (5).webp"
  },
  {
    id: "patron_002",
    name: "The Grim Guardian's Vow",
    type: "Patron Card",
    race: "Grim Guardian",
    tier: "Legendary",
    cost: "7 Universal",
    hp: 9,
    atk: 4,
    ability: {
      name: "The Eternal Nursery",
      description: "Opposing Monster/Student cards enter the battlefield tapped."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/grimguardianvow.webp"
  },
  {
    id: "artifact_010",
    name: "Denalyndis's Charm",
    type: "Artifact Card",
    race: "Padded Seduction",
    tier: "Artifact",
    cost: "3 Universal",
    hp: 5,
    atk: null,
    ability: {
      name: "Captivating Cuteness",
      description: "Once per turn, you may pay 2 Universal energy to take control of an opposing Monster/Student card with 2 ATK or less until your next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/denalyndisgrace (1).webp"
  },
    {
    id: "artifact_017",
    name: "Padding Paddle",
    type: "Artifact Card",
    race: "Equipment",
    tier: "Strong",
    cost: "4 Universal",
    hp: null,
    atk: 3,
    ability: {
      name: "Disciplinary Action",
      description: "Attach to target Monster/Student card you control. Attached card gets +3 ATK. (Tap): Return target Booster card to its owner's hand. (Instant)"
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/paddingpaddle.webp"
  },
  {
    id: "spell_021",
    name: "Potty Portal",
    type: "Spell Card",
    cost: "3 Universal",
    ability: {
      name: "Banish to the Bathroom",
      description: "Return a target Monster or Student card with 3 or less ATK to its owner's hand."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pottyportal.webp"
  },
  {
    id: "spell_022",
    name: "Padding Swap",
    type: "Spell Card",
    cost: "2 Universal",
    ability: {
      name: "Sudden Refit",
      description: "Switch the current HP of two target Monster or Student cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/paddingswap.webp"
  },
  {
    id: "spell_023",
    name: "Crinkly Invitation",
    type: "Spell Card",
    cost: "1 Universal",
    ability: {
      name: "Compulsory Playdate",
      description: "Choose an opposing Monster or Student card. It must attack on its controller's next turn, if able."
    },
    is_full_card: true,
    deluxe_art_url: "src/assets/images/expeditionandgames/TCG Images/crinklyinvitation (18).webp",
    image_url: "src/assets/images/expeditionandgames/TCG Images/crinklyinvitation.webp"
  },
  {
    id: "spell_024",
    name: "Good Bab's Ward",
    type: "Spell Card",
    cost: "2 Universal",
    ability: {
      name: "Padded Protection",
      description: "Target Monster or Student card you control cannot be damaged until your next turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/goodbabyward.webp"
  },
  {
    id: "spell_025",
    name: "Tearful Tantrum",
    type: "Spell Card",
    cost: "3 Universal",
    ability: {
      name: "Sob Story",
      description: "Deal 2 damage to a target Monster or Student. That card's controller must destroy one of their Booster cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/tearfultantrum.webp"
  },
  {
    id: "spell_026",
    name: "Big Babification",
    type: "Spell Card",
    cost: "5 Universal",
    ability: {
      name: "Ultimate Regression",
      description: "Transform target opposing Monster or Student into a 1/1 'Babified' token with no abilities."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/bigbabification.webp"
  },
  {
    id: "artifact_004",
    name: "Clothen Pamprison",
    type: "Artifact Card",
    race: "Cursed",
    tier: "Rare",
    cost: "5 Universal",
    hp: 3,
    atk: null,
    ability: {
      name: "Unremovable",
      description: "This card cannot be removed from the field by Spell or Item effects. When this card is defeated, you lose 2 Summoning Vitality instead of 1. When this card is sent to the pail, at next Diaper Check, return this card to the battlefield on a creature of owner's choice, tapped."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/clothenpamprison (14).webp"
  },
  {
    id: "item_008",
    name: "Diapering for Dummies",
    type: "Item Card",
    cost: "2 Universal",
    ability: {
      name: "Quick Study",
      description: "Draw two cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/diaperingfordummies.webp"
  },
  {
    id: "artifact_014",
    name: "Dweomer Diaper",
    type: "Artifact Card",
    race: "Magic",
    tier: "Uncommon",
    cost: "3 Universal",
    hp: 4,
    atk: null,
    ability: {
      name: "Arcane Absorbency",
      description: "Spell cards you play cost 1 less Universal energy."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/dweomerdiaper (16).webp"
  },
  {
    id: "item_009",
    name: "Fuzzyfeet Slipper-Socks",
    type: "Item Card",
    cost: "1 Universal",
    ability: {
      name: "Silent Steps",
      description: "Target friendly Monster or Student card gets +1 ATK and can attack on the turn it is played."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/fuzzyslippers.webp"
  },
  {
    id: "artifact_015",
    name: "Pacifier of Eloquence",
    type: "Artifact Card",
    race: "Legendary",
    tier: "Legendary",
    cost: "5 Universal",
    hp: 6,
    atk: null,
    ability: {
      name: "Debate Decorum",
      description: "Once per turn, when an opponent plays a Spell card, you may pay 2 Universal energy to cancel its effects."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pacifierofeloquence.webp"
  },
  {
    id: "item_010",
    name: "Bottle of Endless Milk",
    type: "Item Card",
    cost: "2 Universal",
    ability: {
      name: "Nourishing Gulp",
      description: "Heal a target Monster or Student card for 4 HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/endlessmilkbottle.webp"
  },
  {
    id: "artifact_016",
    name: "Cursed Pseudopanties",
    type: "Artifact Card",
    race: "Cursed",
    tier: "Uncommon",
    cost: "2 Universal",
    hp: 3,
    atk: null,
    ability: {
      name: "Embarrassing Fit",
      description: "Attach to an opposing Monster or Student. The attached card gets -2/-1."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/cursedpseudopanties (1).webp"
  },
  {
    id: "monster_018",
    name: "Darkforme-Hungore",
    type: "Monster Card",
    race: "Darkling",
    tier: "Strong",
    cost: "5 Universal",
    hp: 5,
    atk: 5,
    ability: {
      name: "Devour",
      description: "When this card defeats another Monster or Student, heal this card for that card's base HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/hungore (1).webp"
  },
  {
    id: "monster_019",
    name: "Darkforme-Suffocator",
    type: "Monster Card",
    race: "Darkling",
    tier: "Utility",
    cost: "4 Universal",
    hp: 6,
    atk: 2,
    ability: {
      name: "Constrict",
      description: "At the start of your turn, deal 1 damage to all opposing tapped Monster and Student cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/suffocator (1).webp"
  },
  {
    id: "student_052",
    name: "Pupperling Paladin",
    type: "Student Card",
    race: "Pupperling",
    tier: "Medium",
    cost: "3 Universal",
    hp: 5,
    atk: 2,
    ability: {
      name: "Loyal Protector",
      description: "When another friendly Student card is attacked, you may have this card become the target of that attack instead."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/pupperlingpaladin (1).webp"
  },
  {
    id: "student_042",
    name: "Kittenfolk Rogue",
    type: "Student Card",
    race: "Kittenfolk",
    tier: "Utility",
    cost: "2 Universal",
    hp: 2,
    atk: 2,
    ability: {
      name: "Pounce",
      description: "This card can attack an opponent's Summoning Vitality directly if they control no untapped Monster or Student cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/kittenlingrogue.webp"
  },
  {
    id: "student_043",
    name: "Bunbunkin Mage",
    type: "Student Card",
    race: "Bunbunkin",
    tier: "Utility",
    cost: "3 Universal",
    hp: 3,
    atk: 1,
    ability: {
      name: "Cottontail Channel",
      description: "(Tap): The next Spell card you play this turn costs 1 less Universal energy."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/bunbunkinmage (4).webp"
  },
  {
    id: "artifact_011",
    name: "Nursery Domain's Embrace",
    type: "Artifact Card",
    race: "Nursery",
    tier: "Artifact",
    cost: "3 Universal",
    hp: 5,
    atk: null,
    ability: {
      name: "Protective Embrace",
      description: "Once per turn, when a friendly Monster/Student is attacked, you may pay 1 Universal to give it +2 HP until end of turn."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/nurseryembrace (1).webp"
  },
  {
    id: "artifact_012",
    name: "Crinkly Trickery's Prank",
    type: "Artifact Card",
    race: "Trickery",
    tier: "Artifact",
    cost: "2 Universal",
    hp: 4,
    atk: null,
    ability: {
      name: "Moment of Mortification",
      description: "Whenever an opponent plays a Spell card, they must destroy one of their Booster cards."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/crinklytrickeryprank.webp"
  },
  {
    id: "patron_003",
    name: "Saint Yara, Mother of Comfort",
    type: "Patron Card",
    race: "Deity",
    tier: "Legendary",
    cost: "8 Universal",
    hp: 12,
    atk: 2,
    ability: {
      name: "Unconditional Care",
      description: "At the start of your turn, heal all friendly cards for 1 HP."
    },
    image_url: "src/assets/images/expeditionandgames/TCG Images/yarablessing.webp"
  },

            {
                id: 'monster_039',
                name: "Darkling-Brackling",
                type: "Monster Card",
                race: "Darkling",
                tier: "Medium",
                cost: "3 Universal",
                hp: 4,
                atk: 3,
                ability: {
                    name: "Ink Spray",
                    description: "When attacked, opponent's next attack has 50% chance to miss. Can move freely between land and water spaces."
                },
                is_full_card: true,
                deluxe_art_url: "src/assets/images/expeditionandgames/TCG Images/bracklings.webp",
                image_url: "src/assets/images/expeditionandgames/TCG Images/bracklings (1).webp"
            },
                      
            // Monster Cards - Additional creatures from your bestiary
            {
                id: 'monster_041',
                name: "Night-Mare Shadowstorm",
                type: "Monster Card",
                race: "Darkling Elite",
                tier: "Legendary",
                cost: "10 Universal",
                hp: 20,
                atk: 10,
                ability: {
                    name: "Unyielding Nightmare",
                    description: " When this card attacks the front row, cards in the back row must tap or take damage.",
                },
                flavor_text: "Some nightmares run through your dreams- some gallop through the shadows...",
                is_full_card: true,
                deluxe_art_url: "src/assets/images/expeditionandgames/TCG Images/shadowstorm (5).webp",
                image_url: "src/assets/images/expeditionandgames/TCG Images/shadowstorm.webp"
            },
            {
                id: 'monster_043',
                name: "Bellyacher",
                type: "Monster Card",
                race: "Beast",
                tier: "Medium",
                cost: "4 Universal",
                hp: 6,
                atk: 4,
                ability: {
                    name: "Tantrum",
                    description: "When this card takes damage, it gains +2 ATK until end of turn."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/bellyacher (1).webp"
            },
            {
                id: 'monster_044',
                name: "Bottle Elemental",
                type: "Monster Card",
                race: "Elemental",
                tier: "Utility",
                cost: "3 Universal",
                hp: 3,
                atk: 2,
                ability: {
                    name: "Milk Spray",
                    description: "Heal a target friendly card for 3 HP when this card enters play."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/bottleelemental (1).webp"
            },
            
            // Nannybot Cards
          {
            id: 'monster_105',
            name: "Diaper-Check Bot",
            type: "Monster Card",
            race: "Nannybot",
            tier: "Minion",
            cost: "1 Universal",
            hp: 2,
            atk: 1,
            ability: {
                name: "Diaper Duty",
                description: "When this card enters play, you may search your deck for a Nannybot card and add it to your hand."
            },
            image_url: "src/assets/images/expeditionandgames/TCG Images/diapercheckbot (1).webp"
          },
            {
                id: 'monster_015',
                name: "Mini-Nanny",
                type: "Monster Card",
                race: "Nannybot",
                tier: "Minion",
                cost: "1 Universal",
                hp: 3,
                atk: 1,
                ability: {
                    name: "Spank and Diaper",
                    description: "When this card deals damage, target opponent must discard a card, tap a booster, or take 1 additional damage."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/mininanny (1).webp"
            },
            {
                id: 'monster_046',
                name: "Dark Dimension Nannybot",
                type: "Monster Card",
                race: "Nannybot",
                tier: "Medium",
                cost: "1 Shadergy, 3 Universal",
                hp: 6,
                atk: 4,
                ability: {
                    name: "Bratnap",
                    description: "Tap (and hold):Can capture and hold an opponent Student card for 2 turns, preventing its use."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/nannybotmatron (1).webp"
            },
            {
                id: 'monster_028',
                name: "Darkling-Slitherscale",
                type: "Monster Card",
                race: "Darkling",
                tier: "Utility",
                cost: "2 Universal",
                hp: 3,
                atk: 2,
                ability: {
                name: "Serpentine Stealth",
                description: "This card can attack an opponent's Summoning Vitality directly if they control no cards with 3 ATK or more."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/slitherscales (1).webp"
            },
            
            // Student Cards
            {
                id: 'student_053',
                name: "Academy Freshman",
                type: "Student Card",
                race: "Human",
                tier: "Minion",
                cost: "1 Universal",
                hp: 3,
                atk: 2,
                ability: {
                    name: "Eager to Learn",
                    description: "Gains +1 ATK for each Spell card in your hand."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/freshman (1).webp"
            },
            {
                id: 'student_054',
                name: "Senior Auditor",
                type: "Student Card",
                race: "Human",
                tier: "Medium",
                cost: "4 Universal",
                hp: 6,
                atk: 4,
                ability: {
                    name: "Audit Command",
                    description: "All friendly Students get +1 ATK and +1 HP while this card is in play."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/DDauditor (1).webp"
            },
            
            // Spell Cards
            {
                id: 'spell_001',
                name: "Spontaneous Accident",
                type: "Spell Card",
                race: "Magic",
                tier: "Utility",
                cost: "2 Universal",
                ability: {
                    name: "Instant Effect",
                    description: "Tap target creature, it does not untap on your opponent's next turn. They must also discard one card from their hand."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/spontaneous accident.webp"
            },
            {
                id: 'spell_020',
                name: "Magic Messile",
                type: "Spell Card",
                race: "Magic",
                tier: "Medium",
                cost: "3 Universal",
                ability: {
                    name: "Guided Projectile",
                    description: "Deal 4 damage to any target. This damage cannot be prevented or reduced."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/magicmessle1.webp"
            },
            {
                id: 'spell_004',
                name: "Mass Diaper Change",
                type: "Spell Card",
                race: "Magic",
                tier: "Boss",
                cost: "6 Universal",
                ability: {
                    name: "Field Control",
                    description: "All opponent cards lose 2 ATK for 3 turns. All friendly cards gain 2 HP permanently."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/massdiaperchange.webp"
            },
            
            // Darkling Spells (Shadergy-based)
            {
                id: 'spell_027',
                name: "Pack Tactics",
                type: "Spell Card",
                race: "Darkling Magic",
                tier: "Utility",
                cost: "2 Shadergy",
                ability: {
                    name: "Shadow Bond",
                    description: "All friendly Darkling cards gain +1 ATK for each other Darkling card in play until end of turn."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/packtactics.webp"
            },
            {
                id: 'spell_028',
                name: "Slurp Drain",
                type: "Spell Card",
                race: "Darkling Magic",
                tier: "Medium",
                cost: "3 Shadergy",
                ability: {
                    name: "Paralyzing Touch",
                    description: "Target card cannot attack for 2 turns and loses 1 HP per turn. Heal a friendly card for the damage dealt."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/slurpdrain1.webp"
            },
            {
                id: 'spell_029',
                name: "Shadowmist Jaunt",
                type: "Spell Card",
                race: "Darkling Magic",
                tier: "Utility",
                cost: "1 Shadergy",
                ability: {
                    name: "Phase Shift",
                    description: "Return target friendly card to your hand. It costs 1 less energy to play next time."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/shadowmistjaunt.webp"
            },
            {
                id: 'spell_030',
                name: "Piercing Call",
                type: "Spell Card",
                race: "Darkling Magic",
                tier: "Medium",
                cost: "2 Shadergy, 1 Universal",
                ability: {
                    name: "Dark Summoning",
                    description: "Search your deck for a Darkling card with cost 3 or less and put it into play for free."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/piercingcall.webp"
            },
            {
                id: 'spell_031',
                name: "Tormented Wail",
                type: "Spell Card",
                race: "Darkling Magic",
                tier: "Boss",
                cost: "5 Shadergy",
                ability: {
                    name: "Area Suppression",
                    description: "All opponent cards take 2 damage and cannot use abilities for 2 turns. Cannot be countered."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/tormentedwail.webp"
            },
            {
                id: 'spell_032',
                name: "Tendril Barrage",
                type: "Spell Card",
                race: "Darkling Magic",
                tier: "Legendary",
                cost: "4 Shadergy, 2 Universal",
                ability: {
                    name: "Multi-Strike",
                    description: "Deal 3 damage to up to 3 different targets. If all targets are destroyed, draw 3 cards."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/tendrilbarrage.webp"
            },
            {
                id: 'spell_033',
                name: "Ink Spray",
                type: "Spell Card",
                race: "Darkling Magic",
                tier: "Utility",
                cost: "2 Shadergy",
                ability: {
                    name: "Obscuring Mist",
                    description: "All opponent attacks have 50% chance to miss for 3 turns. Draw a card."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/inkspray.webp"
            },
            {
                id: 'spell_034',
                name: "Pants-Crapping Terror",
                type: "Spell Card",
                race: "Darkling Magic",
                tier: "Boss",
                cost: "4 Shadergy, 1 Universal",
                ability: {
                    name: "Overwhelming Dread",
                    description: "All opponent cards are tapped and cannot attack next turn. Opponent discards 2 cards."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/pantscrappingfear.webp"
            },
            
            // Environment Cards
            {
                id: 'env_001',
                name: "Academy Classroom",
                type: "Environment Card",
                race: "Location",
                tier: "Utility",
                cost: "2 Universal",
                ability: {
                    name: "Learning Environment",
                    description: "All Student cards cost 1 less energy to play. Draw 1 additional card each turn."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diaperschoolclassroom.webp"
            },
            {
                id: 'env_002',
                name: "Dark Dimension Portal",
                type: "Environment Card", 
                race: "Location",
                tier: "Medium",
                cost: "4 Universal",
                ability: {
                    name: "Dimensional Rift",
                    description: "All Creature cards cost 1 less energy. When a Creature is destroyed, flip two coins, if both are heads, resummon it for free. If both are tails, banish it."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/DDPortal (4).webp"
            },
            {
                id: 'env_003',
                name: "Nursery Womb of Nightmares",
                type: "Environment Card",
                race: "Location", 
                tier: "Boss",
                cost: "7 Universal",
                ability: {
                    name: "Eternal Darkness",
                    description: "All Darkling cards get +2 ATK and +2 HP. No Student abilities can be used."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/umbranursery.webp"
            },
            
            // Booster Cards - Energy Generation
            // Replace the broken booster section (lines 2127-2269) with this corrected version:
            
            // Booster Cards - Energy Generation
            {
                id: 'booster_012',
                name: "Basic Universal Booster",
                type: "Booster Card",
                energy_type: "Universal",
                hp: 2,
                ability: {
                    name: "Universal Energy",
                    description: "Tap: Add 1 Universal energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (1).webp"
            },
            {
                id: 'booster_013',
                name: "Advanced Universal Booster",
                type: "Booster Card", 
                energy_type: "Universal",
                hp: 3,
                ability: {
                    name: "Enhanced Universal",
                    description: "Tap: Add 2 Universal energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (2).webp"
            },
            {
                id: 'booster_014',
                name: "Master Universal Booster",
                type: "Booster Card",
                energy_type: "Universal", 
                hp: 4,
                ability: {
                    name: "Superior Universal",
                    description: "Tap: Add 3 Universal energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (3).webp"
            },
            {
                id: 'booster_015',
                name: "Cryo Booster",
                type: "Booster Card",
                energy_type: "Cryonergy",
                hp: 2,
                ability: {
                    name: "Cryo Energy",
                    description: "Tap: Add 1 Cryonergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/cryoergy (1).webp"
            },
            {
                id: 'booster_016',
                name: "Pyro Booster", 
                type: "Booster Card",
                energy_type: "Pyronergy",
                hp: 2,
                ability: {
                    name: "Pyro Energy",
                    description: "Tap: Add 1 Pyronergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/pyroenergy (1).webp"
            },
            {
                id: 'booster_017',
                name: "Hydro Booster",
                type: "Booster Card",
                energy_type: "Hydronergy", 
                hp: 2,
                ability: {
                    name: "Hydro Energy",
                    description: "Tap: Add 1 Hydronergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/hydroenergy (1).webp"
            },
                        // Additional Booster Cards - Specialty Energy Generation
            {
                id: 'booster_018',
                name: "Dual-Core Universal Booster",
                type: "Booster Card",
                energy_type: "Universal",
                hp: 3,
                ability: {
                    name: "Dual Energy Flow",
                    description: "Tap: Add 1 Universal energy to your pool. When played, add 1 additional Universal energy."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (4).webp"
            },
            {
                id: 'booster_019',
                name: "Might Omnibooster",
                type: "Booster Card",
                energy_type: "Universal",
                hp: 4,
                ability: {
                    name: "Elemental Synthesis",
                    description: "Tap: Adds 2 energy of Universal type to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (5).webp"
            },
            {
                id: 'booster_020',
                name: "Reinforced Pyro Booster",
                type: "Booster Card",
                energy_type: "Pyronergy",
                hp: 3,
                ability: {
                    name: "Blazing Power",
                    description: "Tap: Add 2 Pyronergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/pyroenergy (2).webp"
            },
            {
                id: 'booster_021',
                name: "Deep Freeze Cryo Booster",
                type: "Booster Card",
                energy_type: "Cryonergy",
                hp: 3,
                ability: {
                    name: "Frost Accumulation",
                    description: "Tap: Add 2 Cryonergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/cryoergy (2).webp"
            },
            {
                id: 'booster_022',
                name: "Tidal Wave Hydro Booster",
                type: "Booster Card",
                energy_type: "Hydronergy",
                hp: 3,
                ability: {
                    name: "Surging Waters",
                    description: "Tap: Add 2 Hydronergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/hydroenergy (2).webp"
            },
            {
                id: 'booster_023',
                name: "Mountain Core Geo Booster",
                type: "Booster Card",
                energy_type: "Geonergy",
                hp: 3,
                ability: {
                    name: "Earthen Strength",
                    description: "Tap: Add 2 Geonergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/geoenergy (2).webp"
            },
            {
                id: 'booster_024',
                name: "Prismatic Energy Booster",
                type: "Booster Card",
                energy_type: "Universal",
                hp: 5,
                ability: {
                    name: "Rainbow Generation",
                    description: "Tap: Add 1 energy each of Pyronergy, Cryonergy, Hydronergy, and Geonergy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (6).webp"
            },
            {
                id: 'booster_025',
                name: "Abyssal Shadow Booster",
                type: "Booster Card",
                energy_type: "Shadergy",
                hp: 5,
                ability: {
                    name: "Darkness Overwhelming",
                    description: "Tap: Add 4 Shadergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/shadeenergy (4).webp"
            },
            {
                id: 'booster_007',
                name: "Geo Booster",
                type: "Booster Card",
                energy_type: "Geonergy",
                hp: 2,
                ability: {
                    name: "Geo Energy", 
                    description: "Tap: Add 1 Geonergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/geoenergy (1).webp"
            },
            {
                id: 'booster_008',
                name: "Shadow Booster",
                type: "Booster Card",
                energy_type: "Shadergy",
                hp: 2,
                ability: {
                    name: "Shadergy Generation",
                    description: "Tap: Add 1 Shadergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/shadeenergy (5).webp"
            },
            {
                id: 'booster_009',
                name: "Advanced Shadow Booster",
                type: "Booster Card",
                energy_type: "Shadergy",
                hp: 3,
                ability: {
                    name: "Enhanced Shadergy",
                    description: "Tap: Add 2 Shadergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/shadeenergy (2).webp"
            },
            {
                id: 'booster_010',
                name: "Void Booster",
                type: "Booster Card",
                energy_type: "Shadergy",
                hp: 4,
                ability: {
                    name: "Void Shadergy",
                    description: "Tap: Add 3 Shadergy energy to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/shadeenergy (3).webp"
            },
            {
                id: 'booster_011',
                name: "Ultimate Booster",
                type: "Booster Card",
                energy_type: "Universal",
                hp: 5,
                ability: {
                    name: "Omnienergy",
                    description: "Tap: Add 1 energy of any type to your pool."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/diapers/boosters/omnienergy (10).webp"
            },
            
            // Darkling Items & Artifacts
            {
                id: 'item_015',
                name: "Shadow Essence",
                type: "Item Card",
                race: "Dark Potion",
                tier: "Utility",
                cost: "1 Shadergy",
                ability: {
                    name: "Corruption Brew",
                    description: "Target card loses 1 HP but gains +2 ATK and 'When this card destroys an enemy, draw a card'."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/shadowessence (1).webp"
            },
            {
                id: 'item_016',
                name: "Darkling Residue",
                type: "Item Card",
                race: "Dark Material",
                tier: "Utility",
                cost: "1 Shadergy",
                ability: {
                    name: "Lingering Darkness",
                    description: "When played, all friendly Darkling cards heal 1 HP. Tap: Generate 1 Shadergy energy."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/darklingdew (1).webp"
            },
            {
                id: 'item_017',
                name: "Twisted Brown Tincture",
                type: "Item Card",
                race: "Corrupted Potion",
                tier: "Medium",
                cost: "2 Shadergy",
                ability: {
                    name: "Malignant Growth",
                    description: "Target card gains +1 HP per turn for 3 turns, but damages all adjacent cards for 1 each turn."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/twistedtincture.webp"
            },
            {
                id: 'item_018',
                name: "Nightmare Mitts",
                type: "Artifact Card",
                race: "Cursed Equipment",
                tier: "Medium",
                cost: "2 Shadergy, 1 Universal",
                ability: {
                    name: "Binding Nightmare",
                    description: "Equipped card cannot be targeted by opponent abilities and gains 'When attacked, attacker takes 1 damage'."
                },
                flavor_text: "Well, there are worse things to get stuck on your hands...",
                image_url: "src/assets/images/expeditionandgames/TCG Images/nightmaremitts (5).webp"
            },
            {
                id: 'item_019',
                name: "Shadowweave Pamprison",
                type: "Artifact Card",
                race: "Dark Equipment",
                tier: "Boss",
                cost: "4 Shadergy, 2 Universal",
                ability: {
                    name: "Inescapable Bonds",
                    description: "Target opponent card cannot attack, use abilities, or be returned to hand. Spreads to adjacent cards after 2 turns."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/shadowweavepamprison.webp"
            },
            {
                id: 'item_020',
                name: "Voidberries",
                type: "Item Card",
                race: "Cursed Food",
                tier: "Medium",
                cost: "2 Shadergy",
                ability: {
                    name: "Hollow Feast",
                    description: "Target card gains +2 ATK but loses 1 HP per turn. If it reaches 0 HP this way, summon a Darkling Lurker."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/voidberries.webp"
            },
            {
                id: 'item_021',
                name: "Tendril Charm",
                type: "Artifact Card",
                race: "Dark Relic",
                tier: "Legendary",
                cost: "3 Shadergy, 3 Universal",
                ability: {
                    name: "Eldritch Connection",
                    description: "All darklings under your control have Penetration (strike back row targets when they hit a front row target) and whenever a darkling destroys an enemy, create a +1/+1 darkling token under your control."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/tendrilcharm.webp"
            },
            {
                id: 'item_022',
                name: "Ink Sac",
                type: "Artifact Card",
                race: "Organic Component",
                tier: "Utility",
                cost: "2 Shadergy",
                ability: {
                    name: "Obscuring Cloud",
                    description: "Once per turn: All opponent attacks have 30% chance to miss. Stacks with other miss effects."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/inksac.webp"
            },
            {
                id: 'item_023',
                name: "Crown of Chap'Hell",
                type: "Artifact Card",
                race: "Legendary Relic",
                tier: "Legendary",
                cost: "5 Shadergy, 3 Universal",
                ability: {
                    name: "Sovereign of Fear",
                    description: "All opponent cards enter play tapped. Your Darkling cards cost 1 less Shadergy. Immune to all spell effects."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/crownofchaphell.webp"
            },
            {
                id: 'item_024',
                name: "Shadow Siphon",
                type: "Artifact Card",
                race: "Dark Device",
                tier: "Boss",
                cost: "5 Shadergy, 1 Universal",
                ability: {
                    name: "Energy Drain",
                    description: "At start of each turn, opponent taps 1 energy of each type. You gain 1 temporary Shadergy per turn for each energy lost this way."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/darksiphon.webp"
            },
            
            // == NEW MONSTERS FROM BESTIARY ==
            {
                id: 'monster_020',
                name: "Dark Dimension Auditarch",
                type: "Monster Card",
                race: "Humanoid",
                tier: "Boss",
                cost: "6 Universal, 1 Shadergy",
                hp: 8,
                atk: 6,
                ability: {
                    name: "Audit of Compliance",
                    description: "When this card enters play, all opposing cards with abilities lose their abilities until your next turn."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/auditarch.webp"
            },
            {
                id: 'monster_021',
                name: "Shadow Slimepress",
                type: "Monster Card",
                race: "Ooze",
                tier: "Legendary",
                cost: "8 Universal, 2 Shadergy",
                hp: 12,
                atk: 4,
                ability: {
                    name: "Engulfing Darkness",
                    description: "When this card attacks, absorb the defending card into this card, gaining its ATK and HP permanently."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/slimepress (2).webp"
            },
            {
                id: 'monster_022',
                name: "Pacifier Golem",
                type: "Monster Card",
                race: "Construct",
                tier: "Medium",
                cost: "4 Universal",
                hp: 6,
                atk: 2,
                ability: {
                    name: "Soothing Presence",
                    description: "All opposing cards deal 1 less damage. When played, heal all friendly cards for 1 HP."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/pacigolem (1).webp"
            },
            {
                id: 'monster_023',
                name: "Lakeopus Rex",
                type: "Monster Card",
                race: "Beast",
                tier: "Legendary",
                cost: "7 Universal, 2 Hydronergy",
                hp: 10,
                atk: 8,
                ability: {
                    name: "Tentacle Barrage",
                    description: "Can attack up to 3 different targets in one turn. Gains +1 ATK for each Hydronergy card you control."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/lakeopusrex (1).webp"
            },
            {
                id: 'monster_025',
                name: "Primordial Bottle Beast",
                type: "Monster Card",
                race: "Aberration",
                tier: "Strong",
                cost: "5 Universal, 1 Hydronergy",
                hp: 7,
                atk: 4,
                ability: {
                    name: "Scalding Spray",
                    description: "At the start of each of your turns, damage all cards for 1 HP. Immune to damage from Spell cards."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/primordialbottlebeast (7).webp"
            },
            {
                id: 'monster_026',
                name: "Lost Plushie",
                type: "Monster Card",
                race: "Toy",
                tier: "Minion",
                cost: "1 Universal",
                hp: 1,
                atk: 1,
                ability: {
                    name: "Nostalgic Attachment",
                    description: "When this card is defeated, its controller draws a card and gains 1 Universal energy."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/lostplushie (1).webp"
            },
            {
                id: 'monster_027',
                name: "Darkforme River Tyrant",
                type: "Monster Card",
                race: "Darkforme",
                tier: "Boss",
                cost: "6 Universal, 2 Hydronergy",
                hp: 9,
                atk: 6,
                ability: {
                    name: "River Domain",
                    description: "All Hydronergy cards you control gain +1/+1. Cannot be targeted by cards with cost 3 or less."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/rivertyrant (1).webp"
            },
            {
                id: 'monster_049',
                name: "Darkling Liquid Legion",
                type: "Monster Card",
                race: "Darkling",
                tier: "Medium",
                cost: "3 Universal, 1 Shadergy",
                hp: 4,
                atk: 2,
                ability: {
                    name: "Fluid Form",
                    description: "When this card takes damage, split into two 1/1 'Darkling Drop' tokens."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/liquidlegion (1).webp"
            },
            {
                id: 'monster_029',
                name: "Darkforme-Nightpinyon",
                type: "Monster Card",
                race: "Darkforme",
                tier: "Utility",
                cost: "4 Shadergy",
                hp: 5,
                atk: 5,
                ability: {
                    name: "Toothy Barrage",
                    description: "When this card attacks, deal 1 damage to all other cards on the same row of battlefield. Shadow Lurk: This creature can attack creatures that are 'Hiding' or have stealth abilities."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/nightpinyon.webp"
            },
            {
                id: 'monster_030',
                name: "Sky-Darkener Nightveil",
                type: "Monster Card",
                race: "Darkforme",
                tier: "Boss",
                cost: "7 Universal, 1 Shadergy",
                hp: 8,
                atk: 5,
                ability: {
                    name: "Eclipse Shroud",
                    description: "All opposing cards have -1 ATK. When played, all opposing cards cannot use abilities for 1 turn."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/skyrivener (1).webp"
            },
            {
                id: 'monster_031',
                name: "Forgotten Rattle",
                type: "Monster Card",
                race: "Toy",
                tier: "Minion",
                cost: "1 Universal",
                hp: 2,
                atk: 1,
                ability: {
                    name: "Hypnotic Rhythm",
                    description: "When played, tap target opposing card. That card cannot untap on its controller's next turn."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/hauntedrattle.webp"
            },
            {
                id: 'monster_032',
                name: "Sentient Crib",
                type: "Monster Card",
                race: "Construct",
                tier: "Medium",
                cost: "4 Universal",
                hp: 5,
                atk: 2,
                ability: {
                    name: "Protective Embrace",
                    description: "All friendly cards have +1 HP. When a friendly card would be defeated, you may have this card take that damage instead."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/sentientcrib (1).webp"
            },
            {
                id: 'monster_033',
                name: "Regression Fog",
                type: "Monster Card",
                race: "Elemental",
                tier: "Boss",
                cost: "6 Universal",
                hp: 6,
                atk: 3,
                ability: {
                    name: "Mental Regression",
                    description: "All opposing cards lose their abilities and become 2/2 with no cost. This effect persists until this card leaves play."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/regressionfog.webp"
            },
            {
                id: 'monster_034',
                name: "Darkforme Titan-Snapper",
                type: "Monster Card",
                race: "Darkforme",
                tier: "Legendary",
                cost: "8 Universal, 2 Shadergy",
                hp: 12,
                atk: 7,
                ability: {
                    name: "Colossal Bite",
                    description: "When this card attacks, destroy all opposing cards with 4 HP or less. Gains +1 ATK for each card destroyed this way."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/titansnapper (1).webp"
            },
            {
                id: 'monster_035',
                name: "Diaper Dimension Rift",
                type: "Monster Card",
                race: "Portal",
                tier: "Legendary",
                cost: "9 Universal",
                hp: 8,
                atk: 4,
                ability: {
                    name: "Reality Breach",
                    description: "At the start of your turn, summon a random Darkling card from your deck to the battlefield for free."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/DDrift (1).webp"
            },
            {
                id: 'monster_036',
                name: "Dark Dimension Regressor Field",
                type: "Monster Card",
                race: "Field Effect",
                tier: "Boss",
                cost: "7 Universal, 1 Shadergy",
                hp: 6,
                atk: 2,
                ability: {
                    name: "Regressive Aura",
                    description: "All cards cost 1 additional Universal energy to play. All opposing cards enter play with -1/-1."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/DDRiftGenerator (2).webp"
            },
            {
              id: 'monster_037',
              name: "Darkling-Ossokin-Proselyte",
              type: "Monster Card",
              race: "Darkling",
              tier: "Minion",
              cost: "1 Shadergy",
              hp: 2,
              atk: 1,
              ability: {
                name: "Bonecraft",
                description: "When this card is destroyed, add 1 'Bone' token to your hand."
              },
              image_url: "src/assets/images/expeditionandgames/TCG Images/proselyte (1).webp"
            },
            {
              id: 'monster_047',
              name: "Darkling Angler-Lurk",
              type: "Monster Card",
              race: "Darkling",
              tier: "Minion",
              cost: "1 Shadergy",
              hp: 1,
              atk: 2,
              ability: {
                name: "Lure",
                description: "When this card attacks, you may move 1 enemy card to defense position."
              },
              image_url: "src/assets/images/expeditionandgames/TCG Images/anglerlurk (1).webp"
            },
            {
              id: 'monster_048',
              name: "Darkling Rill-Skitter",
              type: "Monster Card",
              race: "Darkling",
              tier: "Minion",
              cost: "1 Shadergy",
              hp: 1,
              atk: 1,
              ability: {
                name: "Skitter",
                description: "This card can attack twice per turn if you control another Darkling."
              },
              image_url: "src/assets/images/expeditionandgames/TCG Images/rillskitter.webp",
              flavor_text: "Does this little guy need a background? Naaaaah, look, he's swimming across the card as-is! ~Lulu"
            },
            {
                id: 'monster_038',
                name: "Nannybot Matron Prime",
                type: "Monster Card",
                race: "Construct",
                tier: "Boss",
                cost: "7 Universal",
                hp: 10,
                atk: 5,
                ability: {
                    name: "Supreme Caretaker",
                    description: "All opposing cards enter play tapped. At the start of your turn, choose one opposing card - it cannot untap this turn."
                },
                image_url: "src/assets/images/expeditionandgames/TCG Images/nannyprime.webp"
            },
            {
              id: 'monster_042',
              name: "Darkling-Cactine-Biggo-Boy",
              type: "Monster Card",
              race: "Darkling",
              tier: "Medium",
              cost: "2 Shadergy",
              hp: 4,
              atk: 1,
              ability: {
                name: "Spiky",
                description: "When this card is attacked, deal 1 damage to the attacker."
              },
              image_url: "src/assets/images/expeditionandgames/TCG Images/biggocactine.webp"
            },
            {
                id: 'student_101',
                name: "Taisiat, Time-Skipper",
                type: "Student Card",
                cost: "1 Universal, 1 Cryo, 1 Pyro",
                hp: 3,
                atk: 3,
                ability: {
                    name: "Time-Bending",
                    description: "Unblockable: Taisiat can only be defended against by boosters."
                },
                is_full_card: true,
                deluxe_art_url: "src/assets/images/expeditionandgames/TCG Images/taisiat (20).webp",
                image_url: "src/assets/images/expeditionandgames/TCG Images/taisiat.webp",
                flavor_text: "“Time is a flat circle, and I’m just here to skip the boring parts.”"
            },
                        {
                id: 'student_103',
                name: "Helen, Darkling Student",
                type: "Student Card",
                cost: "2 Universal, 1 Shadergy",
                hp: 3,
                atk: 3,
                ability: {
                    name: "Shadow Studies",
                    description: "When Helen enters the battlefield, draw a card if you control another Darkling card. Tap: Look at the top 3 cards of your deck, if any are a darkling, you may send one to the discard pail and put a +2/+1 counter on Helen."
                },
                is_full_card: true,
                deluxe_art_url: "src/assets/images/expeditionandgames/TCG Images/helenthedarkling (5).webp",
                image_url: "src/assets/images/expeditionandgames/TCG Images/helenthedarkling (4).webp",
                flavor_text: "Even in the deepest shadows of the academy's forbidden wing, Helen's thirst for knowledge burns brighter than the darkest night."
            },
            {
                id: 'student_102',
                name: "Shadow, Shade Scholar",
                type: "Student Card",
                cost: "3 Shadergy, 3 Universal",
                hp: 10,
                atk: 5,
                ability: {
                    name: "Feralized Assault",
                    description: "Shadow can attack any creature on the field, including attacking cursed objects that are attached to creatures- so long as they have a DEF."
                },
                is_full_card: true,
                deluxe_art_url: "src/assets/images/expeditionandgames/TCG Images/shadow (2).webp",
                image_url: "src/assets/images/expeditionandgames/TCG Images/shadow.webp",
                flavor_text: "“In the end we all become shadows of our former selves...”",
            },
            
            {
              id: 'env_004',
              name: "Crinkle  Gardens",  
              type: "Environment Card",
              race: "Location",  
              tier: "Utility",  
              cost: "2 Universal",
              ability: {
                name: "Passive Growth",
                description: "At the start of each turn, all Student creatures gain +1/+1 until end of turn. Crinkle Gardens: Creatures with 'Academy' in their name cannot be targeted by opponent spells."
              },
              image_url: "src/assets/images/expeditionandgames/TCG Images/crinklegardens (1).webp",
              flavor_text: "Where young minds blossom and padding crinkles in harmony."
            },

// Monster Card
{
  id: 'monster_045',
  name: "Darkling Hooter",
  type: "Monster Card",
  race: "Darkling",
  tier: "Medium",
  cost: "3 Shadergy",
  hp: 3,
  atk: 4,
  ability: {
    name: "Nightfall Screech",
    description: "When Darkling Hooter enters play, target opponent discards a card. Shadow Lurk: This creature can attack creatures that are 'Hiding' or have stealth abilities."
  },
  image_url: "src/assets/images/expeditionandgames/TCG Images/hooter (1).webp"
},
{
    id: 'spell_035',
    name: "Radiant Banishment",
    type: "Spell Card",
    cost: "3 Universal",
    ability: {
        name: "Divine Exile",
        description: "Send target creature with cost 4 or less—and any attached items, spells, or enchantments—to The Pail."
    },
    flavor: "A flash of pure, cleansing light sweeps the field, banishing lesser threats to the realm of forgotten things.",
    image_url: "src/assets/images/expeditionandgames/TCG Images/radiantbanishment (1).webp"
},
{
    id: 'env_005',
    name: "Diaper Discipline Center",
    type: "Environment Card",
    cost: "1 Shadergy, 3 Universal",
    ability: {
        name: "Motivational Discipline",
        description: "Put 1 damage counter on a creature classed as student or with Dark Dimension/Auditor in their name. That card gets +2 attack until the end of the round and gains unblockable."
    },
    flavor: "A little discipline can be an excellent motivator...",
    image_url: "src/assets/images/expeditionandgames/TCG Images/diaperdisciplinecenter (1).webp"
},
{
    id: 'environment_restricted_section_archives',
    name: "Restricted Section Archives",
    type: "Environment Card",
    race: "Location",
    tier: "Utility",
    cost: "3 Universal",
    ability: {
        name: "Forbidden Knowledge",
        description: "All Spell cards cost 1 less energy to play. Archive Silence Protocols: When a Spell card is played, the caster must flip a coin, on tails, they must tap all boosters in play or end their turn phase."
    },
    flavor: "Some knowledge comes with... consequences. The ancient tomes whisper secrets, but proximity to such power affects even the most disciplined students.",
    image_url: "src/assets/images/expeditionandgames/TCG Images/restricted_section (1).webp"
},
{
    id: 'spell_036',
    name: "Nursery Nightlight",
    type: "Spell Card",
    race: "Comfort Magic",
    tier: "Utility",
    cost: "1 Universal",
    ability: {
        name: "Soothing Glow",
        description: "Target friendly card gains +0/+2 and resistance to fear effects until end of the opponent's turn. If target card is a Student, it also gains 'Adorable Aura: Opponents must discard one booster on their field to target this card with harmful effects (including banishment and damage).'"
    },
    flavor: "A gentle light that banishes both shadows and anxieties, making even the bravest feel safely small.",
    image_url: "src/assets/images/expeditionandgames/TCG Images/nightlight (1).webp"
},
{
    id: 'artifact_013',
    name: "Echo Bloom Ward",
    type: "Artifact Card",
    race: "Protective Charm",
    tier: "Artifact",
    cost: "2 Universal, 2 Geo",
    ability: {
        name: "Psychic Barrier",
        description: "Equipped creature has Revival-1 (when defeated, return equipped card to play tapped once per game.). Memory Shield: Once per turn, when you would be forced to show the opponent your hand, you may decline. Old War Protection: This artifact gains +1 HP for each Darkling or Abomination card in your opponent's graveyard."
    },
    flavor: "Forged from crystallized memories of braver times, it shields the mind from the echoes of ancient horrors.",
    image_url: "src/assets/images/expeditionandgames/TCG Images/echobloomward (3).webp"
},
{
  id: 'artifact_018',
  name: "Blessed Diaper Bag of Holding",
  type: "Artifact Card",
  race: "Divine Artifact",
  tier: "Artifact",
  cost: "2 Universal, 1 Hydronergy",
  hp: 2,
  atk: null,
  ability: {
    name: "Endless Supplies",
    description: "Equipped creature gets +0/+2. Once per turn, you may search your deck for an Item card with cost 2 or less and add it to your hand. Divine Storage: When this item is destroyed, draw 2 cards."
  },
  image_url: "src/assets/images/expeditionandgames/TCG Images/blessedbag (1).webp",
  flavor_text: "Blessed by Elasharna herself, this bag never runs out of exactly what you need."
},
 {
              "id": "env_006",
              "name": "Ancient Nursery Dungeon",  
              "type": "Environment Card",
              "race": "Location",  
              "tier": "Utility",  
              "cost": "2 Universal",
"ability": {
        "name": "Oppressive Ward",
        "description": "While this location is active, all Spell cards cost +1 Universal Booster to cast. In addition, Monster attack values (Students are unaffected) are capped at 6 unless that Monster's controller returns a Booster they control to their hand from play before declaring that Monster as an attacker. This payment (returning a Booster) may be repeated for multiple Monsters in a turn."
    },
              "image_url": "src/assets/images/expeditionandgames/TCG Images/abandonednursery (1).webp",
              "flavor_text": "The longer you explore, the bigger the fun seems to get!"
            },
  {
    "id": "spell_102",
    "name": "Sudden Interruption",
    "type": "Spell Card",
    "cost": "2 Universal",
    "ability": {
      "name": "Counter-Spell-Light",
      "description": "Instant: Counter target Spell unless its controller pays 2 energy."
    },
    "image_url": "src/assets/images/expeditionandgames/TCG Images/suddeninterruption (1).webp"
  },
];

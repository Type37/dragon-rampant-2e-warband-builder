/* Pre-made example Warbands for Dragon Rampant 2e (Osprey Games, 2024), mapped to
   this app's unit and option ids.

   - "Sample Warbands": the rulebook's worked example (Rottingutt's Goblins at 24,
     30 and 36 points) plus a 30-point build of every archetype from Chapter 9.
   - "RuneWars": the two armies from the RuneWars: The Miniatures Game core set
     (Fantasy Flight Games), statted up as Dragon Rampant Warbands.
   - "Kings of War": the two armies from Battle for the Coral Gate (Mantic Games).

   The Chapter 9 lists are menus, so each Warband here is one legal 30-point build;
   treat them as starting points and swap units to taste. */

/* ---------------- ROTTINGUTT (the rulebook's worked example) ---------------- */
const ROTTINGUTT_24 = {
  n: "rot24", name: "Rottingutt's Malodorous Goblins", subtitle: "Foul-Wind Pass, 24 army points", budget: 24,
  lore: "“Burnin', lootin', raidin', shootin' (repeat): We're the Warriors of Rottingutt.” The classic starter Warband, fielded at its leanest.",
  units: [
    { typeId: "heavy-foot", isCmd: true, label: "Rottingutt & Bodyguards", points: 6, options: ["offensive"], xenos: {} },
    { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
    { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "light-riders", label: "Wolf Rider Archers", points: 4, options: [], xenos: {} },
    { typeId: "heavy-riders", label: "Wolf Rider Lancers", points: 4, options: [], xenos: {} },
  ],
};
const ROTTINGUTT_30 = {
  n: "rot30", name: "Rottingutt's Malodorous Goblins", subtitle: "Foul-Wind Pass, 30 army points", budget: 30,
  lore: "The same models upgraded to the 2e standard size: the Warriors harden into Heavy Foot, Rottingutt turns Brutal, and the wolf archers learn to shoot straight.",
  units: [
    { typeId: "heavy-foot", isCmd: true, label: "Rottingutt & Bodyguards", points: 8, options: ["offensive"], xenos: { "brutal": true, "champion-hewing": true } },
    { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
    { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "light-riders", label: "Wolf Rider Archers", points: 6, options: ["good-shooters"], xenos: {} },
    { typeId: "heavy-riders", label: "Wolf Rider Lancers", points: 4, options: [], xenos: {} },
  ],
};
const ROTTINGUTT_36 = {
  n: "rot36", name: "Rottingutt's Malodorous Goblins", subtitle: "Foul-Wind Pass, 36 army points", budget: 36,
  lore: "The 30-point Warband plus a pack of Hungry Wolves and a Bloodthirsty upgrade for the lancers.",
  units: [
    { typeId: "heavy-foot", isCmd: true, label: "Rottingutt & Bodyguards", points: 8, options: ["offensive"], xenos: { "brutal": true, "champion-hewing": true } },
    { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
    { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "light-riders", label: "Wolf Rider Archers", points: 6, options: ["good-shooters"], xenos: {} },
    { typeId: "heavy-riders", label: "Wolf Rider Lancers", points: 7, options: [], xenos: { "bloodthirsty": true } },
    { typeId: "lesser-warbeasts", label: "Hungry Wolves", points: 3, options: [], xenos: { "cowardly": true } },
  ],
};

/* ---------------- CHAPTER 9 ARCHETYPES (30-point builds) ---------------- */
const CH9 = [
  { n: "bog", name: "Bog People", subtitle: "Barbarica — 30 army points",
    lore: "A dark-haired ancient tribe of cavalry, archers, hunters and shape-changing wolfskin warriors, with witches and wolves at their side.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Mounted Warchief", points: 9, options: [], xenos: { "enchanted-blades": true } },
      { typeId: "light-foot", label: "Wolfskin Warriors", points: 7, options: ["offensive"], xenos: { "were-creature": true } },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Wolf Packs", points: 4, options: [], xenos: {} },
      { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
      { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
    ] },
  { n: "mtn-dwarves", name: "Mountain Dwarves", subtitle: "Barbarica — 30 army points",
    lore: "Skilled, heavily-armoured metalworkers of the northern peaks, save their berserkers who shun such mortal protection.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Lords", points: 10, options: [], xenos: { "fearsome": true, "mystical-armour": true } },
      { typeId: "bellicose-foot", label: "Berserkers", points: 6, options: [], xenos: { "berserk": true } },
      { typeId: "heavy-foot", label: "Axemen", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
    ] },
  { n: "northlanders", name: "Northlanders", subtitle: "Barbarica — 30 army points",
    lore: "Squabbling tribes of ferocious close-quarter fighters who despise missile weapons, riding wolves and bears into battle.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Mounted Warchief", points: 8, options: [], xenos: { "fearsome": true } },
      { typeId: "heavy-foot", label: "Skalds & Witches", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Amber", "Magenta"] },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Mounted Warriors", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Cave Bears", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Mounted Warriors", points: 4, options: [], xenos: {} },
    ] },
  { n: "picts", name: "Picts", subtitle: "Barbarica — 30 army points",
    lore: "The people of the Dark Isle, worshippers of elder gods, armed with poisoned weapons and lurking below the ground.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Shamans & Witches", points: 8, options: [], xenos: { "venomous": true, "spellcaster": 0 }, colours: ["Violet"] },
      { typeId: "bellicose-foot", label: "Champions", points: 8, options: [], xenos: { "champion-hewing": true, "venomous": true } },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Ambushers", points: 3, options: [], xenos: { "sneakers": true } },
      { typeId: "scouts", label: "Ambushers", points: 3, options: [], xenos: { "sneakers": true } },
    ] },
  { n: "bronze-age", name: "Bronze Age Heroes", subtitle: "30 army points",
    lore: "Chariots and heroes from the pages of myth and legend, supported by spearmen, archers and the occasional passing god.",
    units: [
      { typeId: "heavy-riders", isCmd: true, label: "Warlord in Chariot", points: 8, options: ["chariots"], xenos: { "courageous": true } },
      { typeId: "heavy-riders", label: "Heroes in Chariots", points: 7, options: ["chariots"], xenos: { "champion-hewing": true } },
      { typeId: "heavy-foot", label: "Dendra-Clad Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Wild Beasts", points: 4, options: [], xenos: {} },
      { typeId: "light-foot", label: "Spearmen", points: 3, options: [], xenos: {} },
    ] },
  { n: "centaurs", name: "Centaurs", subtitle: "30 army points",
    lore: "Fast, tough half-horse warriors with a Classical Greek theme, proficient with bow and spear and marching alongside hoplite allies.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Warchief & Escort", points: 8, options: [], xenos: { "mystical-armour": true } },
      { typeId: "heavy-riders", label: "Sagittarii", points: 6, options: ["mounted-missiles-add"], xenos: { "fast": true } },
      { typeId: "light-riders", label: "Outriders", points: 4, options: [], xenos: {} },
      { typeId: "light-riders", label: "Outriders", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Hoplite Allies", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Hoplite Allies", points: 4, options: [], xenos: {} },
    ] },
  { n: "dwarves", name: "Dwarves", subtitle: "30 army points",
    lore: "Bearded, grumpy, heavily-armoured stone- and metal-workers with unnaturally sharp axes. Never mention their height.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Lord & Hornblowers", points: 10, options: [], xenos: { "drums-and-flags": true, "fearsome": true } },
      { typeId: "heavy-foot", label: "Axe Thanes", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Axe Thanes", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Spear Thanes", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Archers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Archers", points: 2, options: [], xenos: {} },
    ] },
  { n: "elves", name: "Elves", subtitle: "30 army points",
    lore: "Ethereal archers renowned for deadly missile fire, led by a spell-slinging Prince and supported by treemen from the deep woods.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Prince or Princess", points: 10, options: [], xenos: { "mystical-armour": true, "spellcaster": 1 }, colours: ["Amber", "Jade"] },
      { typeId: "greater-warbeasts", label: "Treemen", points: 6, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 6, options: ["sharpshooters"], xenos: {} },
      { typeId: "heavy-riders", label: "Knights", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Watchers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Watchers", points: 2, options: [], xenos: {} },
    ] },
  { n: "faerie", name: "Faerie Borderlands", subtitle: "30 army points",
    lore: "Old trollkin shamans leading lesser trolls and marshland goblins who magically blend into the landscape.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Forest Troll Wise Old Shaman", points: 7, options: [], xenos: { "spellcaster": 2 }, colours: ["Jade", "Saffron", "Emerald"] },
      { typeId: "heavy-foot", label: "Goblin Knights", points: 7, options: [], xenos: { "enchanted-blades": true } },
      { typeId: "light-foot", label: "Goblin Moss-Troopers", points: 8, options: ["mixed-weapons"], xenos: { "concealment": true } },
      { typeId: "scouts", label: "Goblin Ambushers", points: 5, options: [], xenos: { "concealment": true } },
      { typeId: "bellicose-foot", label: "Forest Trolls", points: 3, options: [], xenos: { "slow": true } },
    ] },
  { n: "beasts", name: "Fantastic Beasts", subtitle: "A monster sampler — 30 army points",
    lore: "Not a Warband in its own right, but a centrepiece of expensive, imposing creatures to drop into any list.",
    units: [
      { typeId: "greater-warbeasts", isCmd: true, label: "Ancient Dragon", points: 10, options: [], xenos: { "flyer": true, "spellcaster": 1 }, colours: ["Crimson", "Saffron"] },
      { typeId: "elite-foot", label: "Cerne Abbas Giant", points: 8, options: [], xenos: { "fearsome": true } },
      { typeId: "lesser-warbeasts", label: "Humongous Maggots", points: 6, options: [], xenos: { "cannibalistic": true, "slow": true } },
      { typeId: "lesser-warbeasts", label: "Humongous Maggots", points: 6, options: [], xenos: { "cannibalistic": true, "slow": true } },
    ] },
  { n: "gnomes", name: "Gnomes & Halflings", subtitle: "30 army points",
    lore: "Small folk with a penchant for longish spears and missile weapons, relying on numbers over individual strength.",
    units: [
      { typeId: "light-foot", isCmd: true, label: "Captain & Serjeants", points: 6, options: ["offensive", "short-missiles"], xenos: {} },
      { typeId: "light-foot", label: "Halfling Ambushers", points: 6, options: [], xenos: { "concealment": true } },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "light-foot", label: "Militia", points: 3, options: [], xenos: {} },
      { typeId: "light-foot", label: "Militia", points: 3, options: [], xenos: {} },
      { typeId: "scouts", label: "Slingers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Slingers", points: 2, options: [], xenos: {} },
    ] },
  { n: "goblins", name: "Goblins", subtitle: "30 army points",
    lore: "A widespread, universally unpopular nuisance of woodland and mountain, joined by trolls and wolves who should know better.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Overlord & Bodyguards", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Trolls", points: 9, options: ["offensive"], xenos: { "regeneration": true } },
      { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Wolf Rider Lancers", points: 4, options: [], xenos: {} },
      { typeId: "light-riders", label: "Wolf Rider Archers", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    ] },
  { n: "graveyard", name: "Graveyard Dwellers", subtitle: "30 army points",
    lore: "Slain enemies that come back for revenge: a Necromancer throwing up skeletons and zombies, backed by vampires and hungry ghouls.",
    units: [
      { typeId: "heavy-missiles", isCmd: true, label: "Necromancer", points: 7, options: [], xenos: { "summoner": true } },
      { typeId: "elite-foot", label: "Vampires", points: 6, options: [], xenos: { "undead": true } },
      { typeId: "bellicose-foot", label: "Ghouls", points: 7, options: [], xenos: { "cannibalistic": true } },
      { typeId: "light-missiles", label: "Skeleton Archers", points: 4, options: [], xenos: { "undead": true } },
      { typeId: "light-foot", label: "Skeleton Soldiers", points: 3, options: [], xenos: { "undead": true } },
      { typeId: "ravenous-hordes", label: "Zombies", points: 1, options: [], xenos: { "undead": true } },
      { typeId: "ravenous-hordes", label: "Zombies", points: 1, options: [], xenos: { "undead": true } },
      { typeId: "ravenous-hordes", label: "Zombies", points: 1, options: [], xenos: { "undead": true } },
    ] },
  { n: "cave-people", name: "Hollywood Cave People", subtitle: "30 army points",
    lore: "Cave dwellers who do battle with dinosaurs from a different era, believing in shamanism and hitting things with a big stone.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Barbarian Queen", points: 8, options: [], xenos: { "courageous": true } },
      { typeId: "greater-warbeasts", label: "Big Dinosaur", points: 10, options: ["ponderous"], xenos: { "large": true } },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Shamans", points: 4, options: [], xenos: { "repellent": true } },
    ] },
  { n: "shining-citadel", name: "Knights of the Shining Citadel", subtitle: "30 army points",
    lore: "Self-important knights of the Round Table: tough tin cans to prise open, but single-minded and short on missile support.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Prince", points: 10, options: [], xenos: { "blessed-blades": true } },
      { typeId: "elite-riders", label: "Knights", points: 6, options: [], xenos: {} },
      { typeId: "elite-riders", label: "Knights", points: 6, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Squires", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Squires", points: 4, options: [], xenos: {} },
    ] },
  { n: "lizard-kin", name: "Lizard Kin", subtitle: "30 army points",
    lore: "Large, intelligent reptiles at home in marshes and swamps, calling on cold-blooded allies and ancient reptilian gods.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Sub-King & Bodyguards", points: 8, options: [], xenos: { "fearless": true, "spell-resistant": true } },
      { typeId: "heavy-foot", label: "Armoured Cultists", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "light-foot", label: "Lesser Warriors", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "light-missiles", label: "Slingers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Terror Birds", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Swamp Dwellers", points: 3, options: [], xenos: { "amphibious": true } },
    ] },
  { n: "men-north", name: "Men of the North", subtitle: "30 army points",
    lore: "Furry-faced, horn-helmeted warriors who vacation by longship and ride buffalo, wolves and bears. Berserkers over gravlax and dill.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Chieftain & Heroes", points: 10, options: [], xenos: { "enchanted-blades": true, "fearless": true } },
      { typeId: "bellicose-foot", label: "Thanes", points: 6, options: ["armoured"], xenos: {} },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Cavalry", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Shamanic Dancers", points: 2, options: [], xenos: {} },
    ] },
  { n: "men-west", name: "Men of the West", subtitle: "30 army points",
    lore: "A Western European Dark Ages or medieval Warband of armoured cavalry, spearmen, bowmen and gleaming heroes.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Earl & Kindred", points: 10, options: [], xenos: { "blessed-blades": true } },
      { typeId: "heavy-foot", label: "Wizard & Apprentices", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Magenta", "Amber"] },
      { typeId: "heavy-foot", label: "Axemen", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
    ] },
  { n: "orcs", name: "Orcs", subtitle: "30 army points",
    lore: "Brutish, squalid, ugly and cruel, fighting on foot and mounted on wolves and boars, with half-orcs and ogres in tow.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Chieftain & Bully Boys", points: 6, options: ["offensive"], xenos: { "champion-hewing": true, "insipid": true } },
      { typeId: "bellicose-foot", label: "Great Mountain Orcs", points: 6, options: ["armoured"], xenos: {} },
      { typeId: "light-foot", label: "Raiders", points: 6, options: ["mixed-weapons"], xenos: { "sneakers": true } },
      { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Boar Riders", points: 4, options: [], xenos: {} },
    ] },
  { n: "rat-kin", name: "Rat Kin", subtitle: "30 army points",
    lore: "Man-rats who build sewer-piracy societies and control ordinary rats in great swarms, with shay-rat shamans and jezzail muskets.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Petty King & Retainers", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "bellicose-foot", label: "Sword Rats", points: 7, options: [], xenos: { "venomous": true } },
      { typeId: "heavy-missiles", label: "Rattish Jezzails", points: 6, options: [], xenos: { "longer-range": true } },
      { typeId: "lesser-warbeasts", label: "Rat Swarms", points: 5, options: [], xenos: { "fast": true } },
      { typeId: "scouts", label: "Rattish Slingers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Rattish Slingers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Rattish Slingers", points: 2, options: [], xenos: {} },
    ] },
  { n: "renaissance", name: "Renaissance Men", subtitle: "30 army points",
    lore: "Sixteenth-century Central European Warbands bringing gunpowder, lute music, scheming politics and grubby idolatry.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "War Duke & Advisors", points: 7, options: [], xenos: { "brutal": true } },
      { typeId: "heavy-foot", label: "Landsknechts with Big Swords", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "light-foot", label: "Pikemen", points: 6, options: ["pikes"], xenos: { "drums-and-flags": true } },
      { typeId: "light-foot", label: "Sword & Buckler Men", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "heavy-missiles", label: "Arquebusiers", points: 3, options: ["weighty-projectiles"], xenos: {} },
      { typeId: "ravenous-hordes", label: "Plague-Ridden Hordes", points: 3, options: [], xenos: { "repellent": true } },
    ] },
  { n: "sand-marauders", name: "Sand Marauders", subtitle: "30 army points",
    lore: "A lightweight but mobile Warband favouring skirmish tactics and mounted archery, riding anything from horses to woolly mammoths.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Khan & Companions", points: 6, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Shamans", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Turquoise", "Saffron"] },
      { typeId: "heavy-riders", label: "Aerial Marauders", points: 6, options: [], xenos: { "flyer": true } },
      { typeId: "light-riders", label: "Marauders", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Foot Warriors", points: 4, options: [], xenos: {} },
      { typeId: "ravenous-hordes", label: "Slaves of the Khan", points: 2, options: [], xenos: { "large": true } },
      { typeId: "ravenous-hordes", label: "Slaves of the Khan", points: 2, options: [], xenos: { "large": true } },
    ] },
  { n: "nine-travellers", name: "The Nine Travellers", subtitle: "The rulebook's ready-made nine-model list — 30 army points",
    lore: "Plucky fellows off on a quest that may take three books to complete: a mighty wizard, a ranger, an elf and dwarf, and four halflings carrying something very precious.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Mighty Wizard", points: 8, options: [], xenos: { "spellcaster": 3 }, colours: ["Amber", "Emerald", "Indigo", "Magenta"] },
      { typeId: "elite-foot", label: "Ranger & Warrior", points: 8, options: [], xenos: { "fearsome": true } },
      { typeId: "elite-foot", label: "Elf and Dwarf", points: 8, options: ["missiles"], xenos: {} },
      { typeId: "light-foot", label: "Four Halflings", points: 6, options: [], xenos: { "concealment": true } },
    ] },
  { n: "frozen-city", name: "Wizards of the Frozen City", subtitle: "30 army points",
    lore: "Spell-heavy Warbands of wizards and their hardy followers, venturing into the icy ruins of a long-fallen city.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "The Wizard's Party", points: 10, options: [], xenos: { "spellcaster": 3 }, colours: ["Crimson", "Indigo", "Turquoise", "Violet"] },
      { typeId: "elite-foot", label: "Knights", points: 6, options: [], xenos: {} },
      { typeId: "light-foot", label: "Soldiers", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "light-foot", label: "Cultists", points: 5, options: [], xenos: { "fanatical": true } },
      { typeId: "bellicose-foot", label: "Barbarians", points: 4, options: [], xenos: {} },
    ] },
  { n: "woodland", name: "Woodland Folk", subtitle: "30 army points",
    lore: "War hedgehogs, badger lords and mouse warriors take up arms and don armour to see off evil-doing intruders.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Badger Lords & Man-Elephants", points: 9, options: [], xenos: { "bloodthirsty": true } },
      { typeId: "light-foot", label: "The Holy Stoat & Followers", points: 7, options: ["offensive"], xenos: { "spellcaster": 1 }, colours: ["Emerald", "Jade"] },
      { typeId: "bellicose-foot", label: "War Hedgehogs", points: 7, options: ["armoured"], xenos: { "champion-hewing": true } },
      { typeId: "light-foot", label: "Larger Sword-Mammals", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "scouts", label: "Missile Mammals", points: 2, options: [], xenos: {} },
    ] },
];

/* attach the rulebook artwork (kept in gitignored public/warbands/, so it shows in
   local dev but is never shipped) to the archetypes that have a matching image. */
const IMAGED = new Set(["picts", "centaurs", "dwarves", "elves", "faerie", "gnomes", "goblins", "graveyard", "cave-people", "shining-citadel", "lizard-kin", "men-north", "men-west", "orcs", "rat-kin", "renaissance", "sand-marauders", "nine-travellers", "frozen-city", "woodland"]);
CH9.forEach((w) => { if (IMAGED.has(w.n)) w.image = `warbands/${w.n}.jpg`; });

/* ---------------- RUNEWARS: THE MINIATURES GAME (core set) ---------------- */
const RUNEWARS = [
  { n: "daqan", name: "Daqan Lords", subtitle: "RuneWars core set — 30 army points",
    lore: "The armies of the free baronies of Terrinoth: disciplined spearmen and Oathsworn cavalry, a towering Rune Golem, and the huntress Kari Wraithstalker.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Kari Wraithstalker", points: 8, options: ["missiles"], xenos: {} },
      { typeId: "greater-warbeasts", label: "Rune Golem", points: 6, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Oathsworn Cavalry", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Oathsworn Cavalry", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Citadel Spearmen", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Citadel Spearmen", points: 4, options: [], xenos: {} },
    ] },
  { n: "waiqar", name: "Waiqar the Undying", subtitle: "RuneWars core set — 30 army points",
    lore: "The undead legions of the betrayer Waiqar: shambling Reanimates and their archers, a monstrous Carrion Lancer, and the Death Knight Ardus Ix'Erebus.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Ardus Ix'Erebus", points: 7, options: [], xenos: { "undead": true, "champion-hewing": true } },
      { typeId: "greater-warbeasts", label: "Carrion Lancer", points: 9, options: [], xenos: { "undead": true, "venomous": true } },
      { typeId: "heavy-foot", label: "Reanimates", points: 4, options: [], xenos: { "undead": true } },
      { typeId: "light-missiles", label: "Reanimate Archers", points: 4, options: [], xenos: { "undead": true } },
      { typeId: "light-foot", label: "Reanimates", points: 3, options: [], xenos: { "undead": true } },
      { typeId: "light-foot", label: "Reanimates", points: 3, options: [], xenos: { "undead": true } },
    ] },
];

/* ---------------- KINGS OF WAR: BATTLE FOR THE CORAL GATE ---------------- */
const KOW = [
  { n: "trident", name: "Trident Realm of Neritica", subtitle: "Battle for the Coral Gate — 30 army points",
    lore: "The aquatic hosts of the deep: net-wielding Naiad Ensnarers, hopping Riverguard, hulking Dambusters, and a Depth Horror Eternal risen from the abyss.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Depth Horror Eternal", points: 7, options: [], xenos: { "amphibious": true } },
      { typeId: "greater-warbeasts", label: "Dambusters", points: 7, options: [], xenos: { "amphibious": true } },
      { typeId: "light-riders", label: "Riverguard", points: 5, options: [], xenos: { "amphibious": true } },
      { typeId: "light-foot", label: "Naiad Ensnarers", points: 4, options: [], xenos: { "amphibious": true } },
      { typeId: "light-foot", label: "Naiad Ensnarers", points: 4, options: [], xenos: { "amphibious": true } },
      { typeId: "scouts", label: "Naiad Heartpiercers", points: 3, options: [], xenos: { "amphibious": true } },
    ] },
  { n: "abyss", name: "Forces of the Abyss", subtitle: "Battle for the Coral Gate — 30 army points",
    lore: "Demons pouring from the Abyssal rifts: rampaging Lower Abyssals and Berserkers, winged Nagarri, and a blazing Efreet at their head.",
    units: [
      { typeId: "greater-warbeasts", isCmd: true, label: "Efreet", points: 10, options: ["flame-spore"], xenos: { "flyer": true } },
      { typeId: "light-riders", label: "Abyssal Nagarri", points: 6, options: [], xenos: { "flyer": true } },
      { typeId: "bellicose-foot", label: "Abyssal Berserkers", points: 6, options: [], xenos: { "berserk": true } },
      { typeId: "bellicose-foot", label: "Lower Abyssals", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Lower Abyssals", points: 4, options: [], xenos: {} },
    ] },
  { n: "basileans", name: "Basileans", subtitle: "Faith & Fury (Kings of War: Champions) — 30 army points",
    lore: "A holy company of the Hegemony: mailed Men-At-Arms behind a wall of shields, an elite lance of Paladin Knights, and the blessed heroine Alanis Sallustis warding her warriors from harm.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Alanis Sallustis", points: 8, options: [], xenos: { "divine-leadership": true } },
      { typeId: "elite-riders", label: "Paladin Knights", points: 6, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Men-At-Arms", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Men-At-Arms", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Men-At-Arms", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Men-At-Arms", points: 4, options: [], xenos: {} },
    ] },
];

/* ---------------- A SONG OF ICE & FIRE (Stark vs Lannister) ---------------- */
const ASOIAF = [
  { n: "stark", name: "House Stark", subtitle: "Stark vs Lannister starter — 30 army points",
    lore: "The wolves of the North: Sworn Swords and roaring Umber berserkers behind the Young Wolf and his direwolf, with the Greatjon towering over the line.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Robb Stark", points: 7, options: [], xenos: { "champion-hewing": true } },
      { typeId: "elite-foot", label: "Greatjon Umber", points: 8, options: [], xenos: { "fearsome": true } },
      { typeId: "lesser-warbeasts", label: "Grey Wind", points: 5, options: [], xenos: { "fast": true } },
      { typeId: "bellicose-foot", label: "Umber Berserkers", points: 6, options: [], xenos: { "berserk": true } },
      { typeId: "heavy-foot", label: "Stark Sworn Swords", points: 4, options: [], xenos: {} },
    ] },
  { n: "lannister", name: "House Lannister", subtitle: "Stark vs Lannister starter — 30 army points",
    lore: "Gold-cloaked discipline: drilled Guardsmen and Halberdiers holding the line while the Kingslayer leads and the Mountain That Rides breaks whatever stands before him.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Jaime Lannister", points: 9, options: [], xenos: { "enchanted-blades": true } },
      { typeId: "elite-foot", label: "The Mountain That Rides", points: 8, options: [], xenos: { "fearsome": true } },
      { typeId: "heavy-foot", label: "Lannister Halberdiers", points: 5, options: ["pikes"], xenos: {} },
      { typeId: "heavy-foot", label: "Lannister Guardsmen", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Clegane Brigands", points: 4, options: [], xenos: {} },
    ] },
];

/* ---------------- ELDFALL CHRONICLES (Soga vs Helian, heroic scale) ----------------
   Eldfall warbands are only 4-5 heroes, so these are heroic-scale interpretations:
   mostly Single or Reduced Model Units scaled up to a 30-point Dragon Rampant force. */
const ELDFALL = [
  { n: "soga", name: "Empire of Soga", subtitle: "Eldfall Chronicles starter (heroic scale) — 30 army points",
    lore: "Stalwart bushi of a proud empire: a Clan Champion and their retainer, a demon-hunting Onitaoshi, and a spellweaving Kitsune priestess, with a summoned water spirit at their side.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Clan Champion", points: 9, options: [], xenos: { "enchanted-blades": true } },
      { typeId: "elite-foot", label: "Bushi Assistant", points: 6, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Onitaoshi", points: 6, options: [], xenos: { "fearsome": true } },
      { typeId: "light-foot", label: "Kitsune Priestess", points: 4, options: [], xenos: { "spellcaster": 0 }, colours: ["Saffron"] },
      { typeId: "lesser-warbeasts", label: "Water Elemental", points: 5, options: [], xenos: { "amphibious": true } },
    ] },
  { n: "helian", name: "Helian League", subtitle: "Eldfall Chronicles starter (heroic scale) — 30 army points",
    lore: "A virtuous expedition of the League: an Expeditionary Hierophant and a Flame Shaper channelling fierce magic, a stoic Citadel Guard, and a Helrin expatriate blade, joined by a great water spirit.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Expeditionary Hierophant", points: 8, options: [], xenos: { "spellcaster": 1 }, colours: ["Amber", "Emerald"] },
      { typeId: "light-foot", label: "Flame Shaper", points: 5, options: [], xenos: { "spellcaster": 1 }, colours: ["Crimson", "Saffron"] },
      { typeId: "elite-foot", label: "Citadel Guard", points: 6, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Helrin Expatriate", points: 4, options: [], xenos: {} },
      { typeId: "greater-warbeasts", label: "Water Elemental", points: 7, options: [], xenos: { "amphibious": true } },
    ] },
];

/* ---------------- WARHAMMER: AGE OF SIGMAR (Start Collecting! Ironjawz) ---------------- */
const AOS = [
  { n: "ironjawz", name: "Ironjawz", subtitle: "Start Collecting! Ironjawz — 30 army points",
    lore: "Brutal armour-clad orruks who live to smash: a Warchanter beating them into a frenzy, boar-mounted Gore-gruntas leading the charge, and blocks of 'Ardboyz swinging heavy iron.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Orruk Warchanter", points: 8, options: ["offensive"], xenos: { "drums-and-flags": true } },
      { typeId: "elite-riders", label: "Orruk Gore-gruntas", points: 6, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Orruk 'Ardboyz", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Orruk 'Ardboyz", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Orruk 'Ardboyz", points: 4, options: [], xenos: {} },
    ] },
];

export const SETTINGS = [
  {
    id: "sample-warbands",
    name: "Sample Warbands",
    blurb: "The rulebook's worked example, Rottingutt's Malodorous Goblins, at all three army sizes, plus a 30-point build of every archetype from Chapter 9.",
    detachments: [ROTTINGUTT_24, ROTTINGUTT_30, ROTTINGUTT_36, ...CH9],
  },
  {
    id: "runewars",
    name: "RuneWars",
    blurb: "The two armies from the RuneWars: The Miniatures Game core set (Fantasy Flight Games), statted up as Dragon Rampant Warbands.",
    detachments: RUNEWARS,
  },
  {
    id: "kings-of-war",
    name: "Kings of War",
    blurb: "Armies from Mantic's Kings of War starter boxes: the Trident Realm and Forces of the Abyss from Battle for the Coral Gate, and the Basileans from the Faith & Fury (Champions) set.",
    detachments: KOW,
  },
  {
    id: "asoiaf",
    name: "A Song of Ice & Fire",
    hidden: true,
    blurb: "House Stark and House Lannister from the Stark vs Lannister starter set (CMON), statted up as Dragon Rampant Warbands.",
    detachments: ASOIAF,
  },
  {
    id: "eldfall",
    name: "Eldfall Chronicles",
    hidden: true,
    blurb: "The Empire of Soga and the Helian League from Freecompany's two-player starter. Eldfall warbands are small, so these are heroic-scale interpretations of Single and Reduced Model Units.",
    detachments: ELDFALL,
  },
  {
    id: "age-of-sigmar",
    name: "Age of Sigmar",
    hidden: true,
    blurb: "The Ironjawz orruks from the Start Collecting! box (Games Workshop), statted up as a Dragon Rampant Warband.",
    detachments: AOS,
  },
];

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
  n: "rot24", icon: "goblin", name: "Rottingutt's Malodorous Goblins", subtitle: "Foul-Wind Pass", budget: 24,
  lore: "“Burnin', lootin', raidin', shootin' (repeat): We're the Warriors of Rottingutt.” The classic starter Warband, fielded at its leanest.",
  units: [
    { typeId: "heavy-foot", isCmd: true, label: "Rottingutt & Bodyguards", points: 6, options: ["offensive"], xenos: {}, notes: "Rottingutt himself, hemmed in by his least-trusted lieutenants. Your free Leader — keep him near the front so his Courage bonus reaches the mob." },
    { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
    { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "light-riders", label: "Wolf Rider Archers", points: 4, options: [], xenos: {} },
    { typeId: "heavy-riders", label: "Wolf Rider Lancers", points: 4, options: [], xenos: {} },
  ],
};
const ROTTINGUTT_30 = {
  n: "rot30", icon: "goblin", name: "Rottingutt's Malodorous Goblins", subtitle: "Foul-Wind Pass", budget: 30,
  lore: "The same models upgraded to the 2e standard size: the Warriors harden into Heavy Foot, Rottingutt turns Brutal, and the wolf archers learn to shoot straight.",
  units: [
    { typeId: "heavy-foot", isCmd: true, label: "Rottingutt & Bodyguards", points: 8, options: ["offensive"], xenos: { "brutal": true, "champion-hewing": true }, notes: "Now Brutal and Sharing the Hurt: he hits harder and drags a hero down with him when he falls." },
    { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
    { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "light-riders", label: "Wolf Rider Archers", points: 6, options: ["good-shooters"], xenos: {} },
    { typeId: "heavy-riders", label: "Wolf Rider Lancers", points: 4, options: [], xenos: {} },
  ],
};
const ROTTINGUTT_36 = {
  n: "rot36", icon: "goblin", name: "Rottingutt's Malodorous Goblins", subtitle: "Foul-Wind Pass", budget: 36,
  lore: "The 30-point Warband plus a pack of Hungry Wolves and a Bloodthirsty upgrade for the lancers.",
  units: [
    { typeId: "heavy-foot", isCmd: true, label: "Rottingutt & Bodyguards", points: 8, options: ["offensive"], xenos: { "brutal": true, "champion-hewing": true } },
    { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
    { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    { typeId: "light-riders", label: "Wolf Rider Archers", points: 6, options: ["good-shooters"], xenos: {} },
    { typeId: "heavy-riders", label: "Wolf Rider Lancers", points: 7, options: [], xenos: { "bloodthirsty": true }, notes: "Bloodthirsty, so they must charge the nearest enemy — point them where you want the carnage." },
    { typeId: "lesser-warbeasts", label: "Hungry Wolves", points: 3, options: [], xenos: { "cowardly": true }, notes: "Cheap, Cowardly beasts: brilliant on the charge, unreliable the moment things go wrong." },
  ],
};

/* ---------------- CHAPTER 9 ARCHETYPES (30-point builds) ---------------- */
const CH9 = [
  { n: "bog", icon: "wolf-head", name: "Bog People", subtitle: "Barbarica",
    lore: "A dark-haired ancient tribe of the lowlands who field cavalry, archers and hunters beside their warriors. Witches and wolves march with them into battle, along with wolfskin warriors who take on the shape of wolves when the fight turns against them.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Mounted Warchief", points: 9, options: [], xenos: { "enchanted-blades": true }, notes: "The tribe's rider-lord, blade enchanted against armour. Fast and hard-hitting, but he is your only real anvil." },
      { typeId: "light-foot", label: "Wolfskin Warriors", points: 7, options: ["offensive"], xenos: { "were-creature": true }, notes: "Were-creatures who turn wolf when battered — sometimes an upgrade, sometimes a liability you can't control." },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Wolf Packs", points: 4, options: [], xenos: {}, notes: "Expendable beasts to screen the warriors and run down fleeing foes." },
      { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
      { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
    ] },
  { n: "mtn-dwarves", icon: "dwarf-king", name: "Mountain Dwarves", subtitle: "Barbarica",
    lore: "Skilled metalworkers of the northern peaks, armoured more heavily than the tribes around them, save their berserkers who scorn such protection. They often ally with Northlanders, but now and then muster from the mountains as a power in their own right.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Lords", points: 10, options: [], xenos: { "fearsome": true, "mystical-armour": true }, notes: "Fearsome and Mystically Armoured: nearly unkillable at the front, and enemies think twice before charging." },
      { typeId: "bellicose-foot", label: "Berserkers", points: 6, options: [], xenos: { "berserk": true }, notes: "Berserk fighters who must charge — no armour, all fury." },
      { typeId: "heavy-foot", label: "Axemen", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
    ] },
  { n: "northlanders", icon: "bear-face", name: "Northlanders", subtitle: "Barbarica",
    lore: "Squabbling northern tribes of ferocious close-quarter fighters, lightly armoured and scornful of missile weapons. Cave bears and giants lumber alongside them, and rumours persist of warriors who take a bear's shape when their blood is up.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Mounted Warchief", points: 8, options: [], xenos: { "fearsome": true }, notes: "Fearsome saga-lord: put him where the enemy line is weakest and let the Courage tests pile up." },
      { typeId: "heavy-foot", label: "Skalds & Witches", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Amber", "Magenta"], notes: "The one spellcaster in an otherwise magic-light horde — guard them carefully." },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Mounted Warriors", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Cave Bears", points: 4, options: [], xenos: {}, notes: "Big, dumb, and dangerous. A cheap charge-piece to soak attacks meant for your warriors." },
      { typeId: "heavy-riders", label: "Mounted Warriors", points: 4, options: [], xenos: {} },
    ] },
  { n: "picts", name: "Picts", subtitle: "Barbarica",
    lore: "The people of the never-conquered Dark Isle, a realm of enchantments and elder gods; elsewhere they lurk underground with poisoned weapons, creeping from hidden lairs. Cave trolls join their raids, and most feared of all is the Great Burrower that erupts from the earth.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Shamans & Witches", points: 8, options: [], xenos: { "venomous": true, "spellcaster": 0 }, colours: ["Violet"], notes: "Venomous spellcasters — poison plus a colour of magic makes them punch above their price." },
      { typeId: "bellicose-foot", label: "Champions", points: 8, options: [], xenos: { "champion-hewing": true, "venomous": true }, notes: "Poisoned Champion-Hewers who carve through elite units and heroes alike." },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Ambushers", points: 3, options: [], xenos: { "sneakers": true }, notes: "Sneakers who set up hidden — perfect for a mid-game knife in the flank." },
      { typeId: "scouts", label: "Ambushers", points: 3, options: [], xenos: { "sneakers": true }, notes: "Sneakers who set up hidden — perfect for a mid-game knife in the flank." },
    ] },
  { n: "bronze-age", name: "Bronze Age Heroes", subtitle: "",
    lore: "Chariots and champions from the pages of myth, giving battle in the shadow of great pyramids or the boggy fens of the north. They fight from chariot and horseback behind spears and bows, aided by exotic warrior-allies, wild beasts, and the occasional passing god.",
    units: [
      { typeId: "heavy-riders", isCmd: true, label: "Warlord in Chariot", points: 8, options: ["chariots"], xenos: { "courageous": true }, notes: "Your Courageous Leader, thundering in on a chariot. Keep him rolling; chariots hate standing still." },
      { typeId: "heavy-riders", label: "Heroes in Chariots", points: 7, options: ["chariots"], xenos: { "champion-hewing": true }, notes: "Champion-Hewers on wheels — aim them at the enemy's biggest threat." },
      { typeId: "heavy-foot", label: "Dendra-Clad Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Wild Beasts", points: 4, options: [], xenos: {}, notes: "A cheap warbeast charge to break up the enemy's careful lines." },
      { typeId: "light-foot", label: "Spearmen", points: 3, options: [], xenos: {} },
    ] },
  { n: "centaurs", name: "Centaurs", subtitle: "",
    lore: "Fast, tough part-human, part-horse warriors with a Classical Greek theme, proficient with bow and spear. Human hoplite spearmen sometimes march in support of their four-legged chums.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Warchief & Escort", points: 8, options: [], xenos: { "mystical-armour": true }, notes: "Elite riders under Mystical Armour — the tough, mobile core the rest of the herd pivots around." },
      { typeId: "heavy-riders", label: "Sagittarii", points: 6, options: ["mounted-missiles-add"], xenos: { "fast": true }, notes: "Fast mounted archers: shoot on the move, never sit still to be charged." },
      { typeId: "light-riders", label: "Outriders", points: 4, options: [], xenos: {} },
      { typeId: "light-riders", label: "Outriders", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Hoplite Allies", points: 4, options: [], xenos: {}, notes: "Human spearmen who anchor a line while the centaurs run the flanks." },
      { typeId: "heavy-foot", label: "Hoplite Allies", points: 4, options: [], xenos: {}, notes: "Human spearmen who anchor a line while the centaurs run the flanks." },
    ] },
  { n: "dwarves", name: "Dwarves", subtitle: "",
    lore: "Bearded, grumpy, heavily-armoured stone- and metal-workers who carve out vast ornate underground kingdoms and wield unnaturally sharp axes. Never mention their height, or the popular sport of dwarf-tossing.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Lord & Hornblowers", points: 10, options: [], xenos: { "drums-and-flags": true, "fearsome": true }, notes: "Fearsome elites with Drums & Flags — steadies the whole grumpy line against Courage tests." },
      { typeId: "heavy-foot", label: "Axe Thanes", points: 6, options: ["offensive"], xenos: {}, notes: "Offensive Heavy Foot with those unnaturally sharp axes; your main can-opener." },
      { typeId: "heavy-foot", label: "Axe Thanes", points: 6, options: ["offensive"], xenos: {}, notes: "Offensive Heavy Foot with those unnaturally sharp axes; your main can-opener." },
      { typeId: "heavy-foot", label: "Spear Thanes", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Archers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Archers", points: 2, options: [], xenos: {} },
    ] },
  { n: "elves", name: "Elves", subtitle: "",
    lore: "Ethereal folk renowned for their love of luxury and, more to the point, their deadly archery, so their warbands lean heavily on missile units. Wood, High, Sea and Dark Elves field princes, champions and treemen from the deep woods.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Prince or Princess", points: 10, options: [], xenos: { "mystical-armour": true, "spellcaster": 1 }, colours: ["Amber", "Jade"], notes: "Elite rider and spellcaster both — the deadly, mobile heart of an archery force." },
      { typeId: "greater-warbeasts", label: "Treemen", points: 6, options: [], xenos: {}, notes: "Slow but brutal greater warbeast; a walking wall to hide the archers behind." },
      { typeId: "light-missiles", label: "Archers", points: 6, options: ["sharpshooters"], xenos: {}, notes: "Sharpshooting missiles — the reason you brought elves. Protect their lines of fire." },
      { typeId: "heavy-riders", label: "Knights", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Watchers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Watchers", points: 2, options: [], xenos: {} },
    ] },
  { n: "faerie", name: "Faerie Borderlands", subtitle: "",
    lore: "Old trollkin shamans of the border forests, leading lesser trolls and marshland goblins whose Concealment lets them melt into the landscape. Their shaman-leader is an unusually powerful spellcaster who enchants goblin weapons before battle.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Forest Troll Wise Old Shaman", points: 7, options: [], xenos: { "spellcaster": 2 }, colours: ["Jade", "Saffron", "Emerald"], notes: "An unusually strong spellcaster who buffs the goblins — the whole warband leans on him." },
      { typeId: "heavy-foot", label: "Goblin Knights", points: 7, options: [], xenos: { "enchanted-blades": true }, notes: "Enchanted blades let these little riders bite well above their weight." },
      { typeId: "light-foot", label: "Goblin Moss-Troopers", points: 8, options: ["mixed-weapons"], xenos: { "concealment": true }, notes: "Concealment keeps them hidden until they strike from the undergrowth." },
      { typeId: "scouts", label: "Goblin Ambushers", points: 5, options: [], xenos: { "concealment": true } },
      { typeId: "bellicose-foot", label: "Forest Trolls", points: 3, options: [], xenos: { "slow": true }, notes: "Slow but tough — a shambling threat the enemy must deal with." },
    ] },
  { n: "beasts", icon: "spiked-dragon-head", name: "Fantastic Beasts", subtitle: "A monster sampler",
    lore: "Not a warband in its own right but a bestiary of expensive, imposing creatures, from dragons and giants to manticores and worse, to drop in as the centrepiece of any force.",
    units: [
      { typeId: "greater-warbeasts", isCmd: true, label: "Ancient Dragon", points: 10, options: [], xenos: { "flyer": true, "spellcaster": 1 }, colours: ["Crimson", "Saffron"], notes: "Flying spellcasting dragon — the centrepiece. Everything else exists to keep it in the fight." },
      { typeId: "elite-foot", label: "Cerne Abbas Giant", points: 8, options: [], xenos: { "fearsome": true }, notes: "Fearsome giant: charge it in and watch the enemy's Courage crumble." },
      { typeId: "lesser-warbeasts", label: "Humongous Maggots", points: 6, options: [], xenos: { "cannibalistic": true, "slow": true }, notes: "Slow, Cannibalistic horrors that feast on the fallen — grim and cheap." },
      { typeId: "lesser-warbeasts", label: "Humongous Maggots", points: 6, options: [], xenos: { "cannibalistic": true, "slow": true }, notes: "Slow, Cannibalistic horrors that feast on the fallen — grim and cheap." },
    ] },
  { n: "gnomes", name: "Gnomes & Halflings", subtitle: "",
    lore: "Small folk twinned into one warband: gnomes bearded on the chin, halflings on their hairy feet, both fond of longish spears and missiles. They rely on numbers over individual strength, so single models are rare.",
    units: [
      { typeId: "light-foot", isCmd: true, label: "Captain & Serjeants", points: 6, options: ["offensive", "short-missiles"], xenos: {}, notes: "The little folk's command; leads by numbers, not by raw might." },
      { typeId: "light-foot", label: "Halfling Ambushers", points: 6, options: [], xenos: { "concealment": true }, notes: "Concealed skirmishers who spring from cover at the perfect moment." },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "light-foot", label: "Militia", points: 3, options: [], xenos: {} },
      { typeId: "light-foot", label: "Militia", points: 3, options: [], xenos: {} },
      { typeId: "scouts", label: "Slingers", points: 2, options: [], xenos: {}, notes: "Cheap Scouts to harass, screen, and grab objectives." },
      { typeId: "scouts", label: "Slingers", points: 2, options: [], xenos: {}, notes: "Cheap Scouts to harass, screen, and grab objectives." },
    ] },
  { n: "goblins", name: "Goblins", subtitle: "",
    lore: "A widespread and near-universally loathed nuisance, dwelling in woods, over misty mountains and far out at sea. Hobgoblins are bigger and meaner, and trolls and wolves lack the sense not to run with the gobbos, which is what makes them such fun to collect.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Overlord & Bodyguards", points: 6, options: ["offensive"], xenos: {}, notes: "The biggest, meanest gobbo in the pit — your free, Offensive Leader." },
      { typeId: "heavy-foot", label: "Trolls", points: 9, options: ["offensive"], xenos: { "regeneration": true }, notes: "Regenerating Heavy Foot: hard to kill and harder to keep facing the right way." },
      { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Wolf Rider Lancers", points: 4, options: [], xenos: {}, notes: "Fast shock cavalry to run down archers and stragglers." },
      { typeId: "light-riders", label: "Wolf Rider Archers", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Pricklers", points: 2, options: [], xenos: {} },
    ] },
  { n: "graveyard", name: "Graveyard Dwellers", subtitle: "",
    lore: "Slain foes who claw their way back weeks later to reap their revenge. A necromancer throws up skeletons and zombies with wild abandon, backed by vampires and hungry ghouls, and becomes a Lich Lord if you make him Undead.",
    units: [
      { typeId: "heavy-missiles", isCmd: true, label: "Necromancer", points: 7, options: [], xenos: { "summoner": true }, notes: "The Summoner who raises fresh dead mid-battle — kill him and the horde stops coming." },
      { typeId: "elite-foot", label: "Vampires", points: 6, options: [], xenos: { "undead": true }, notes: "Undead elites: fearless, relentless, and expensive for a reason." },
      { typeId: "bellicose-foot", label: "Ghouls", points: 7, options: [], xenos: { "cannibalistic": true }, notes: "Cannibalistic frenzy — they grow bolder feeding on the slain." },
      { typeId: "light-missiles", label: "Skeleton Archers", points: 4, options: [], xenos: { "undead": true } },
      { typeId: "light-foot", label: "Skeleton Soldiers", points: 3, options: [], xenos: { "undead": true } },
      { typeId: "ravenous-hordes", label: "Zombies", points: 1, options: [], xenos: { "undead": true }, notes: "One-point Ravenous Hordes: shambling bodies to throw away by the fistful." },
      { typeId: "ravenous-hordes", label: "Zombies", points: 1, options: [], xenos: { "undead": true }, notes: "One-point Ravenous Hordes: shambling bodies to throw away by the fistful." },
      { typeId: "ravenous-hordes", label: "Zombies", points: 1, options: [], xenos: { "undead": true }, notes: "One-point Ravenous Hordes: shambling bodies to throw away by the fistful." },
    ] },
  { n: "cave-people", name: "Hollywood Cave People", subtitle: "",
    lore: "Cave dwellers who emerge to do battle with dinosaurs from another era, believing in shamanism, big stones and rubbing one stick on another. Some are humans, some are apes forging a rough civilization, however you like your low-tech world.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Barbarian Queen", points: 8, options: [], xenos: { "courageous": true }, notes: "A Courageous elite fighter leading from the front of the stone-age mob." },
      { typeId: "greater-warbeasts", label: "Big Dinosaur", points: 10, options: ["ponderous"], xenos: { "large": true }, notes: "A Large greater warbeast — Ponderous, but a rampaging centrepiece all the same." },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Shamans", points: 4, options: [], xenos: { "repellent": true }, notes: "Repellent mystics who make foes reluctant to close." },
    ] },
  { n: "shining-citadel", name: "Knights of the Shining Citadel", subtitle: "",
    lore: "Self-important knights who debate honour around a round table, then throw chivalry out of the window once battle joins. Tough tin cans to prise open, but single-minded and short on missile support.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Prince", points: 10, options: [], xenos: { "blessed-blades": true }, notes: "Elite rider with Blessed Blades — the shining tip of an all-cavalry lance." },
      { typeId: "elite-riders", label: "Knights", points: 6, options: [], xenos: {}, notes: "Heavily-armoured elite horse: tough to crack, single-minded on the charge." },
      { typeId: "elite-riders", label: "Knights", points: 6, options: [], xenos: {}, notes: "Heavily-armoured elite horse: tough to crack, single-minded on the charge." },
      { typeId: "heavy-riders", label: "Squires", points: 4, options: [], xenos: {}, notes: "Cheaper riders to plug gaps and chase down broken units." },
      { typeId: "heavy-riders", label: "Squires", points: 4, options: [], xenos: {}, notes: "Cheaper riders to plug gaps and chase down broken units." },
    ] },
  { n: "lizard-kin", name: "Lizard Kin", subtitle: "",
    lore: "Large, intelligent reptiles at home in marsh and swamp, battering their foes with stone and obsidian weapons. Their many sub-kings call on cold-blooded allies and are sometimes accompanied by ancient, god-like reptilian creatures.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Sub-King & Bodyguards", points: 8, options: [], xenos: { "fearless": true, "spell-resistant": true }, notes: "Fearless, spell-resistant elites — the cold-blooded core of the swarm." },
      { typeId: "heavy-foot", label: "Armoured Cultists", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "light-foot", label: "Lesser Warriors", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "light-missiles", label: "Slingers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Terror Birds", points: 4, options: [], xenos: {}, notes: "Fast warbeasts to flank and panic softer enemy units." },
      { typeId: "scouts", label: "Swamp Dwellers", points: 3, options: [], xenos: { "amphibious": true }, notes: "Amphibious scouts who ignore the marsh that bogs everyone else down." },
    ] },
  { n: "men-north", name: "Men of the North", subtitle: "",
    lore: "Furry-faced warriors in horned helmets who go on vacation by longship and ride buffalo, wolves and bears rather than horses. A warband for readers of Beowulf and the sagas; sprinkle in berserkers and shape-shifters to taste.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Chieftain & Heroes", points: 10, options: [], xenos: { "enchanted-blades": true, "fearless": true }, notes: "Fearless saga-heroes with enchanted blades — an unbending anchor for the line." },
      { typeId: "bellicose-foot", label: "Thanes", points: 6, options: ["armoured"], xenos: {}, notes: "Armoured Bellicose Foot: your steadiest front-rank brawlers." },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Cavalry", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Shamanic Dancers", points: 2, options: [], xenos: {}, notes: "Cheap ritualists to round out the raiding party." },
    ] },
  { n: "men-west", name: "Men of the West", subtitle: "",
    lore: "A Western European Dark Ages or medieval warband of well-armoured cavalry, spearmen, bowmen and gleaming heroes, often uniformed in an earl's or city's colours. Slightly more sophisticated than the Men of the North, and they may even bathe once or twice in a lifetime.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Earl & Kindred", points: 10, options: [], xenos: { "blessed-blades": true }, notes: "Blessed-blade riders in an earl's colours — the mailed fist of the muster." },
      { typeId: "heavy-foot", label: "Wizard & Apprentices", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Magenta", "Amber"], notes: "A modest spellcaster to lend the men-at-arms an edge." },
      { typeId: "heavy-foot", label: "Axemen", points: 6, options: ["offensive"], xenos: {}, notes: "Offensive Heavy Foot for the heavy lifting in the centre." },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
    ] },
  { n: "orcs", name: "Orcs", subtitle: "",
    lore: "Brutish, squalid, ugly and cruel, which does rather make you wonder why you'd command them. They come in every shape, fighting on foot and mounted on wolves and boars, with interbred half-orcs and hulking ogres rounding out the horde.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Chieftain & Bully Boys", points: 6, options: ["offensive"], xenos: { "champion-hewing": true, "insipid": true }, notes: "Champion-Hewing but Insipid — hits like a truck, leads like a lout." },
      { typeId: "bellicose-foot", label: "Great Mountain Orcs", points: 6, options: ["armoured"], xenos: {}, notes: "Armoured Bellicose Foot; the toughest orcs in the mob." },
      { typeId: "light-foot", label: "Raiders", points: 6, options: ["mixed-weapons"], xenos: { "sneakers": true }, notes: "Sneaky mixed-weapon skirmishers who go where they're least wanted." },
      { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Boar Riders", points: 4, options: [], xenos: {}, notes: "Wild shock cavalry — point and let go." },
    ] },
  { n: "rat-kin", name: "Rat Kin", subtitle: "",
    lore: "Man-rats who build sewer-and-piracy societies and drive ordinary rats before them in great swarms. Shay-rat shamans conjure allies from thin air, and some worlds arm them with jezzail muskets in an otherwise gunpowder-free age.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Petty King & Retainers", points: 6, options: ["offensive"], xenos: {}, notes: "The ratty warlord and his cronies; drives the swarm from behind it." },
      { typeId: "bellicose-foot", label: "Sword Rats", points: 7, options: [], xenos: { "venomous": true }, notes: "Venomous close-fighters — a single wound can fell far tougher foes." },
      { typeId: "heavy-missiles", label: "Rattish Jezzails", points: 6, options: [], xenos: { "longer-range": true }, notes: "Long-range muskets, an anachronism the rat-kin somehow got hold of." },
      { typeId: "lesser-warbeasts", label: "Rat Swarms", points: 5, options: [], xenos: { "fast": true }, notes: "Fast, expendable beasts to tarpit and overwhelm." },
      { typeId: "scouts", label: "Rattish Slingers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Rattish Slingers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Rattish Slingers", points: 2, options: [], xenos: {} },
    ] },
  { n: "renaissance", name: "Renaissance Men", subtitle: "",
    lore: "Broadly sixteenth-century Central European warbands who bring gunpowder, lute music, scheming politics and open-fronted shirts. They spread their brand of imperial civilization, and grubby idolatry, to their oppressed and trampled foes.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "War Duke & Advisors", points: 7, options: [], xenos: { "brutal": true }, notes: "A Brutal noble commander leading his gaudy imperial retinue." },
      { typeId: "heavy-foot", label: "Landsknechts with Big Swords", points: 6, options: ["offensive"], xenos: {}, notes: "Offensive doppelsoldners paid to break pike blocks." },
      { typeId: "light-foot", label: "Pikemen", points: 6, options: ["pikes"], xenos: { "drums-and-flags": true }, notes: "A Drums-and-Flags pike block — steady, disciplined, and hard to shift." },
      { typeId: "light-foot", label: "Sword & Buckler Men", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "heavy-missiles", label: "Arquebusiers", points: 3, options: ["weighty-projectiles"], xenos: {}, notes: "Weighty gunfire that punishes armour the crossbow can't." },
      { typeId: "ravenous-hordes", label: "Plague-Ridden Hordes", points: 3, options: [], xenos: { "repellent": true } },
    ] },
  { n: "sand-marauders", name: "Sand Marauders", subtitle: "",
    lore: "A lightweight but mobile warband of rumoured magical origin, favouring skirmish tactics and mounted archery. Their riders need not be human nor their mounts horses; wasteland orcs, debased centaurs and beastmen on lizards, mammoths or beetles all fit.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Khan & Companions", points: 6, options: [], xenos: {}, notes: "Fast elite riders — the mobile spearhead of a hit-and-run force." },
      { typeId: "heavy-riders", label: "Shamans", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Turquoise", "Saffron"] },
      { typeId: "heavy-riders", label: "Aerial Marauders", points: 6, options: [], xenos: { "flyer": true }, notes: "Flyers to leap the battle line and strike the soft rear." },
      { typeId: "light-riders", label: "Marauders", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Foot Warriors", points: 4, options: [], xenos: {} },
      { typeId: "ravenous-hordes", label: "Slaves of the Khan", points: 2, options: [], xenos: { "large": true }, notes: "Large Ravenous Hordes driven forward as living shields." },
      { typeId: "ravenous-hordes", label: "Slaves of the Khan", points: 2, options: [], xenos: { "large": true }, notes: "Large Ravenous Hordes driven forward as living shields." },
    ] },
  { n: "nine-travellers", name: "The Nine Travellers", subtitle: "The rulebook's ready-made nine-model list",
    lore: "Plucky companions off on a quest that might take three whole books to finish: a mighty wizard, a ranger, an elf and a dwarf, and four halflings guarding something very precious. A ready-made warband of just nine models.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Mighty Wizard", points: 8, options: [], xenos: { "spellcaster": 3 }, colours: ["Amber", "Emerald", "Indigo", "Magenta"], notes: "A Level 3 spellcaster leading the quest — fragile, but the warband's engine." },
      { typeId: "elite-foot", label: "Ranger & Warrior", points: 8, options: [], xenos: { "fearsome": true }, notes: "Fearsome elite pair who hold the line while the wizard works." },
      { typeId: "elite-foot", label: "Elf and Dwarf", points: 8, options: ["missiles"], xenos: {}, notes: "An elite duo with missiles — flexible answer to most threats." },
      { typeId: "light-foot", label: "Four Halflings", points: 6, options: [], xenos: { "concealment": true }, notes: "Concealed little heroes guarding something very precious." },
    ] },
  { n: "frozen-city", name: "Wizards of the Frozen City", subtitle: "",
    lore: "Spell-heavy warbands of wizards and their hardy followers, venturing into the icy ruins of a huge fallen city. Field several spellcasters and you will want a way to track who cast what, and a complementary spread of magic colours chosen before battle.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "The Wizard's Party", points: 10, options: [], xenos: { "spellcaster": 3 }, colours: ["Crimson", "Indigo", "Turquoise", "Violet"], notes: "A Level 3 elite spellcaster band — the reason to bring a magic tracker." },
      { typeId: "elite-foot", label: "Knights", points: 6, options: [], xenos: {} },
      { typeId: "light-foot", label: "Soldiers", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "light-foot", label: "Cultists", points: 5, options: [], xenos: { "fanatical": true }, notes: "Fanatical followers who fight past the point of sense." },
      { typeId: "bellicose-foot", label: "Barbarians", points: 4, options: [], xenos: {}, notes: "Hardy Bellicose Foot to keep the wizards alive in the ruins." },
    ] },
  { n: "woodland", name: "Woodland Folk", subtitle: "",
    lore: "War hedgehogs, badger lords and mouse warriors take up arms and don armour against evil-doing intruders, or to rise to prominence among their own kind. Fear the badger lords, and never overlook the sparrows and magpies raining down from the hedgerows.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Badger Lords & Man-Elephants", points: 9, options: [], xenos: { "bloodthirsty": true }, notes: "Bloodthirsty elite champions — the terror of the hedgerows." },
      { typeId: "light-foot", label: "The Holy Stoat & Followers", points: 7, options: ["offensive"], xenos: { "spellcaster": 1 }, colours: ["Emerald", "Jade"], notes: "A spellcasting mystic-beast at the warband's heart." },
      { typeId: "bellicose-foot", label: "War Hedgehogs", points: 7, options: ["armoured"], xenos: { "champion-hewing": true }, notes: "Armoured Champion-Hewers, spikes and all." },
      { typeId: "light-foot", label: "Larger Sword-Mammals", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "scouts", label: "Missile Mammals", points: 2, options: [], xenos: {}, notes: "Sparrows and slings raining down from the branches." },
    ] },
  { n: "fell-host", name: "The Fell Host", subtitle: "Old-school fantasy evil", icon: "warlock-eye",
    lore: "A sorceress calls up every wicked thing that will answer: trolls and dire beasts, goblin wolf-packs, orc regiments and clattering skeletons. Less an army than a coalition of the cruel, in the spirit of the villains that lurked at the back of every old rulebook.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Sorceress", points: 5, options: [], xenos: { "spellcaster": 0 }, colours: ["Violet"], notes: "The dark mistress binding the host together. A single colour of magic, and the only thing keeping this rabble in line." },
      { typeId: "lesser-warbeasts", label: "Dire Boar", points: 4, options: [], xenos: {}, notes: "A tusked monster to hurl at the enemy line and break it open." },
      { typeId: "bellicose-foot", label: "Stone Trolls", points: 7, options: [], xenos: { "regeneration": true }, notes: "Regenerating brutes: hard to kill and slow to grasp where the fight has moved." },
      { typeId: "light-riders", label: "Goblin Wolf Riders", points: 4, options: [], xenos: {}, notes: "Fast, cowardly raiders who harry the flanks and run down stragglers." },
      { typeId: "scouts", label: "Night Orcs", points: 3, options: [], xenos: { "sneakers": true }, notes: "Sneakers who deploy hidden — a nasty surprise in cover." },
      { typeId: "heavy-foot", label: "Orc Warriors", points: 4, options: [], xenos: {}, notes: "The blunt instrument of the horde: a solid block of muscle and malice." },
      { typeId: "light-foot", label: "Skeleton Rabble", points: 3, options: [], xenos: { "undead": true }, notes: "Undead levy that never routs, only crumbles. Cheap bodies to soak the charge." },
    ] },
  { n: "night-legion", name: "The Night Legion", subtitle: "Gothic werewolves and vampire war-dancers", icon: "wolf-howl",
    lore: "A hunting host of shapeshifters and blood-drinkers that runs down its prey even by daylight. Graceful war-dancers hold the line with lethal blades while werewolf packs flank at terrifying speed, backed by human mercenaries and a flesh-devouring engine of iron. A tribute to the night-legions of gothic fantasy.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "War-Dancer Noble", points: 6, options: [], xenos: {}, notes: "A vampire blademaster leading from the front, all poise and menace." },
      { typeId: "bellicose-foot", label: "Werewolf Skorza", points: 6, options: [], xenos: { "were-creature": true }, notes: "Warriors who shed their skins for a wolf's when the fight turns. Model both forms." },
      { typeId: "lesser-warbeasts", label: "Wolf Pack", points: 4, options: [], xenos: {}, notes: "Lesser wolves let loose to flank and panic the enemy's soft units." },
      { typeId: "heavy-foot", label: "Zeti Bladesingers", points: 4, options: [], xenos: {}, notes: "Vampiric war-dancers who anchor the line while the wolves circle." },
      { typeId: "heavy-missiles", label: "Ravenscar Handgunners", points: 4, options: [], xenos: {}, notes: "Hired human guns, the only un-augmented troops in the host." },
      { typeId: "scouts", label: "Ravenscar Skirmishers", points: 2, options: [], xenos: {}, notes: "Cheap mercenary outriders to screen and grab ground." },
      { typeId: "lesser-warbeasts", label: "Blood Engine", points: 4, options: [], xenos: {}, notes: "An iron construct that devours the fallen to mend its own wounds." },
    ] },
];

/* attach the rulebook artwork (kept in gitignored public/warbands/, so it shows in
   local dev but is never shipped) to the archetypes that have a matching image. */
const IMAGED = new Set(["picts", "bronze-age", "centaurs", "dwarves", "elves", "faerie", "gnomes", "goblins", "graveyard", "cave-people", "shining-citadel", "lizard-kin", "men-north", "men-west", "orcs", "rat-kin", "renaissance", "sand-marauders", "nine-travellers", "frozen-city", "woodland"]);
CH9.forEach((w) => { if (IMAGED.has(w.n)) w.image = `warbands/${w.n}.jpg`; });

/* ---------------- RUNEWARS: THE MINIATURES GAME (core set) ---------------- */
const RUNEWARS = [
  { n: "daqan", icon: "knight-banner", name: "Daqan Lords", subtitle: "RuneWars core set",
    lore: "The armies of the free baronies of Terrinoth: disciplined spearmen and Oathsworn cavalry, a towering Rune Golem, and the huntress Kari Wraithstalker.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Kari Wraithstalker", points: 8, options: ["missiles"], xenos: {} },
      { typeId: "greater-warbeasts", label: "Rune Golem", points: 6, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Oathsworn Cavalry", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Oathsworn Cavalry", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Citadel Spearmen", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Citadel Spearmen", points: 4, options: [], xenos: {} },
    ] },
  { n: "waiqar", icon: "death-skull", name: "Waiqar the Undying", subtitle: "RuneWars core set",
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
  { n: "trident", icon: "sea-dragon", name: "Trident Realm of Neritica", subtitle: "Battle for the Coral Gate",
    lore: "The aquatic hosts of the deep: net-wielding Naiad Ensnarers, hopping Riverguard, hulking Dambusters, and a Depth Horror Eternal risen from the abyss.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Depth Horror Eternal", points: 7, options: [], xenos: { "amphibious": true } },
      { typeId: "greater-warbeasts", label: "Dambusters", points: 7, options: [], xenos: { "amphibious": true } },
      { typeId: "light-riders", label: "Riverguard", points: 5, options: [], xenos: { "amphibious": true } },
      { typeId: "light-foot", label: "Naiad Ensnarers", points: 4, options: [], xenos: { "amphibious": true } },
      { typeId: "light-foot", label: "Naiad Ensnarers", points: 4, options: [], xenos: { "amphibious": true } },
      { typeId: "scouts", label: "Naiad Heartpiercers", points: 3, options: [], xenos: { "amphibious": true } },
    ] },
  { n: "abyss", icon: "warlock-eye", name: "Forces of the Abyss", subtitle: "Battle for the Coral Gate",
    lore: "Demons pouring from the Abyssal rifts: rampaging Lower Abyssals and Berserkers, winged Nagarri, and a blazing Efreet at their head.",
    units: [
      { typeId: "greater-warbeasts", isCmd: true, label: "Efreet", points: 10, options: ["flame-spore"], xenos: { "flyer": true } },
      { typeId: "light-riders", label: "Abyssal Nagarri", points: 6, options: [], xenos: { "flyer": true } },
      { typeId: "bellicose-foot", label: "Abyssal Berserkers", points: 6, options: [], xenos: { "berserk": true } },
      { typeId: "bellicose-foot", label: "Lower Abyssals", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Lower Abyssals", points: 4, options: [], xenos: {} },
    ] },
  { n: "basileans", icon: "angel-wings", name: "Basileans", subtitle: "Faith & Fury (Kings of War: Champions)",
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
  { n: "stark", icon: "wolf-head", name: "House Stark", subtitle: "Stark vs Lannister starter",
    lore: "The wolves of the North: Sworn Swords and roaring Umber berserkers behind the Young Wolf and his direwolf, with the Greatjon towering over the line.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Robb Stark", points: 7, options: [], xenos: { "champion-hewing": true } },
      { typeId: "elite-foot", label: "Greatjon Umber", points: 8, options: [], xenos: { "fearsome": true } },
      { typeId: "lesser-warbeasts", label: "Grey Wind", points: 5, options: [], xenos: { "fast": true } },
      { typeId: "bellicose-foot", label: "Umber Berserkers", points: 6, options: [], xenos: { "berserk": true } },
      { typeId: "heavy-foot", label: "Stark Sworn Swords", points: 4, options: [], xenos: {} },
    ] },
  { n: "lannister", icon: "crown", name: "House Lannister", subtitle: "Stark vs Lannister starter",
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
  { n: "soga", icon: "crossed-swords", name: "Empire of Soga", subtitle: "Eldfall Chronicles starter (heroic scale)",
    lore: "Stalwart bushi of a proud empire: a Clan Champion and their retainer, a demon-hunting Onitaoshi, and a spellweaving Kitsune priestess, with a summoned water spirit at their side.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Clan Champion", points: 9, options: [], xenos: { "enchanted-blades": true } },
      { typeId: "elite-foot", label: "Bushi Assistant", points: 6, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Onitaoshi", points: 6, options: [], xenos: { "fearsome": true } },
      { typeId: "light-foot", label: "Kitsune Priestess", points: 4, options: [], xenos: { "spellcaster": 0 }, colours: ["Saffron"] },
      { typeId: "lesser-warbeasts", label: "Water Elemental", points: 5, options: [], xenos: { "amphibious": true } },
    ] },
  { n: "helian", icon: "centurion-helmet", name: "Helian League", subtitle: "Eldfall Chronicles starter (heroic scale)",
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
  { n: "ironjawz", icon: "orc-head", name: "Ironjawz", subtitle: "Start Collecting! Ironjawz",
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

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
  n: "rot24", icon: "goblin", name: "Rottingutt's Malodorous Goblins", subtitle: "", budget: 24,
  lore: "\"Burnin', lootin', raidin', shootin' (repeat): We're the Warriors of Rottingutt.\" So goes the poetical-political war-cry of the author's 24- and 30-army point goblin Warband.",
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
  n: "rot30", icon: "goblin", name: "Rottingutt's Malodorous Goblins", subtitle: "", budget: 30,
  lore: "\"Burnin', lootin', raidin', shootin' (repeat): We're the Warriors of Rottingutt.\" So goes the poetical-political war-cry of the author's 24- and 30-army point goblin Warband.",
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
  n: "rot36", icon: "goblin", name: "Rottingutt's Malodorous Goblins", subtitle: "", budget: 36,
  lore: "\"What big teeth you have!\" On this occasion, Rottingutt chooses the unit of Hungry Wolves rather than the Bitey Spiders to bring his Warband up to 36 army points.",
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
  { n: "bog", icon: "wolf-head", name: "Bog People", subtitle: "",
    lore: "The Bog People are a dark-haired ancient tribe who occupy lowland areas. They field cavalry, archers, and hunters alongside their warriors. Witches and wolves accompany their Warbands into battle, as do shape-changing warriors who transform into wolves when the fight goes against them.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Mounted Warchief", points: 9, options: [], xenos: { "enchanted-blades": true }, notes: "The tribe's rider-lord, blade enchanted against armour. Fast and hard-hitting, but he is your only real anvil." },
      { typeId: "light-foot", label: "Wolfskin Warriors", points: 7, options: ["offensive"], xenos: { "were-creature": true }, notes: "Were-creatures who turn wolf when battered — sometimes an upgrade, sometimes a liability you can't control." },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Wolf Packs", points: 4, options: [], xenos: {}, notes: "Expendable beasts to screen the warriors and run down fleeing foes." },
      { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
      { typeId: "light-foot", label: "Warriors", points: 3, options: [], xenos: {} },
    ] },
  { n: "mtn-dwarves", icon: "dwarf-king", name: "Mountain Dwarves", subtitle: "",
    lore: "Dwarves inhabit the mountains of the north. They are skilled metal workers, wearing more armour than other tribes — except for their berserkers who shun such mortal protection. Dwarves can be allied to Northlander Warbands, but on occasion they emerge from the mountains to muster for battle as a power in their own right.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Lords", points: 10, options: [], xenos: { "fearsome": true, "mystical-armour": true }, notes: "Fearsome and Mystically Armoured: nearly unkillable at the front, and enemies think twice before charging." },
      { typeId: "bellicose-foot", label: "Berserkers", points: 6, options: [], xenos: { "berserk": true }, notes: "Berserk fighters who must charge — no armour, all fury." },
      { typeId: "heavy-foot", label: "Axemen", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
    ] },
  { n: "northlanders", icon: "bear-face", name: "Northlanders", subtitle: "",
    lore: "The northern region is inhabited by squabbling tribes of ferocious close-quarter fighters with little armour and a lack of long-range weaponry (most Northlander warriors despise the use of missile weapons). Cave bears and giants accompany the Northlanders into battle, while rumours of shape-changing warriors who transform from human to bear form when enraged are sometimes proven true.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Mounted Warchief", points: 8, options: [], xenos: { "fearsome": true }, notes: "Fearsome saga-lord: put him where the enemy line is weakest and let the Courage tests pile up." },
      { typeId: "heavy-foot", label: "Skalds & Witches", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Amber", "Magenta"], notes: "The one spellcaster in an otherwise magic-light horde — guard them carefully." },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Mounted Warriors", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Cave Bears", points: 4, options: [], xenos: {}, notes: "Big, dumb, and dangerous. A cheap charge-piece to soak attacks meant for your warriors." },
      { typeId: "heavy-riders", label: "Mounted Warriors", points: 4, options: [], xenos: {} },
    ] },
  { n: "picts", name: "Picts", subtitle: "",
    lore: "The Dark Isle is the Pictish realm — it has never been conquered by outsiders, and is a place of enchantments and the worship of elder gods. Elsewhere Picts lurk below the ground in dark places, armed with poisoned weapons and ready to creep from their hidden lairs. Cave trolls sometimes accompany Pictish Warbands on their forays above ground, but most feared of all is The Great Burrower — a huge multi-tentacled horror that bursts up from underground tunnels to throw enemies into its gaping maw.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Shamans & Witches", points: 8, options: [], xenos: { "venomous": true, "spellcaster": 0 }, colours: ["Violet"], notes: "Venomous spellcasters — poison plus a colour of magic makes them punch above their price." },
      { typeId: "bellicose-foot", label: "Champions", points: 8, options: [], xenos: { "champion-hewing": true, "venomous": true }, notes: "Poisoned Champion-Hewers who carve through elite units and heroes alike." },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Ambushers", points: 3, options: [], xenos: { "sneakers": true }, notes: "Sneakers who set up hidden — perfect for a mid-game knife in the flank." },
      { typeId: "scouts", label: "Ambushers", points: 3, options: [], xenos: { "sneakers": true }, notes: "Sneakers who set up hidden — perfect for a mid-game knife in the flank." },
    ] },
  { n: "bronze-age", name: "Bronze Age Heroes", subtitle: "",
    lore: "Whether riding forth in chariots from the pages of The Iliad, giving battle in the shadow of great pyramids, or crawling out of the boggy fenlands of East Anglia and Denmark, this Warband combines prehistory, legend, and mythology. Fighting from chariots or horseback, or (less heroically) with spears and bows, they can be supported by exotically violent warrior-allies, wild animals, and the occasional god or goddess popping by to encourage their worshippers and slay non-believers. If your setting does not use chariots, Warlords and Heroes can become Elite Riders or Elite Foot; further recruits may be found in Fantastic Beasts list (page 211).",
    units: [
      { typeId: "heavy-riders", isCmd: true, label: "Warlord in Chariot", points: 8, options: ["chariots"], xenos: { "courageous": true }, notes: "Your Courageous Leader, thundering in on a chariot. Keep him rolling; chariots hate standing still." },
      { typeId: "heavy-riders", label: "Heroes in Chariots", points: 7, options: ["chariots"], xenos: { "champion-hewing": true }, notes: "Champion-Hewers on wheels — aim them at the enemy's biggest threat." },
      { typeId: "heavy-foot", label: "Dendra-Clad Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Wild Beasts", points: 4, options: [], xenos: {}, notes: "A cheap warbeast charge to break up the enemy's careful lines." },
      { typeId: "light-foot", label: "Spearmen", points: 3, options: [], xenos: {} },
    ] },
  { n: "centaurs", name: "Centaurs", subtitle: "",
    lore: "Part human, part horse — most commonly the torso of a human joined at the waist to a horse's withers — centaurs are fast and tough, and proficient with bow and spear. This Warband has a Classical Greek theme, so includes human (or non-human) hoplite spearmen who sometimes march in support of their horsey chums. This list is inspired by Eureka's 15mm centaur range.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Warchief & Escort", points: 8, options: [], xenos: { "mystical-armour": true }, notes: "Elite riders under Mystical Armour — the tough, mobile core the rest of the herd pivots around." },
      { typeId: "heavy-riders", label: "Sagittarii", points: 6, options: ["mounted-missiles-add"], xenos: { "fast": true }, notes: "Fast mounted archers: shoot on the move, never sit still to be charged." },
      { typeId: "light-riders", label: "Outriders", points: 4, options: [], xenos: {} },
      { typeId: "light-riders", label: "Outriders", points: 4, options: [], xenos: {} },
      { typeId: "heavy-foot", label: "Hoplite Allies", points: 4, options: [], xenos: {}, notes: "Human spearmen who anchor a line while the centaurs run the flanks." },
      { typeId: "heavy-foot", label: "Hoplite Allies", points: 4, options: [], xenos: {}, notes: "Human spearmen who anchor a line while the centaurs run the flanks." },
    ] },
  { n: "dwarves", name: "Dwarves", subtitle: "",
    lore: "Carving out vast, ornate underground kingdoms — 'cave' is not a word you would associate with a dwarven hall — these skilled, querulous stone- and metal-workers are usually portrayed as vertically challenged, bearded Vikings who are heavily armoured, brandish unnaturally sharp axes, and are in possession of a grumpy demeanour. Never mention their height or the popular sport of Dwarf Tossing (unless you're standing on a very high box).",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Lord & Hornblowers", points: 10, options: [], xenos: { "drums-and-flags": true, "fearsome": true }, notes: "Fearsome elites with Drums & Flags — steadies the whole grumpy line against Courage tests." },
      { typeId: "heavy-foot", label: "Axe Thanes", points: 6, options: ["offensive"], xenos: {}, notes: "Offensive Heavy Foot with those unnaturally sharp axes; your main can-opener." },
      { typeId: "heavy-foot", label: "Axe Thanes", points: 6, options: ["offensive"], xenos: {}, notes: "Offensive Heavy Foot with those unnaturally sharp axes; your main can-opener." },
      { typeId: "heavy-foot", label: "Spear Thanes", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Archers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Archers", points: 2, options: [], xenos: {} },
    ] },
  { n: "elves", name: "Elves", subtitle: "",
    lore: "Elves break down into sub-groups such as Wood, High, Sea, and Dark Elves. I think you can guess where the Wood Elves live, without extra help from me; High Elves are altogether more ethereal and dwell in ornate palaces resonating with the sound of harpists; Sea Elves inhabit luxurious underwater kingdoms and venture out to make war; and Dark Elves are the evil country cousins. Renowned for their love of luxury-brand clothing but equally well known for their deadly archery skills, Elvish Warbands typically include a high number of missile units. The Prince, Princess, and Champion could alternatively be fielded as Elite Foot.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Prince or Princess", points: 10, options: [], xenos: { "mystical-armour": true, "spellcaster": 1 }, colours: ["Amber", "Jade"], notes: "Elite rider and spellcaster both — the deadly, mobile heart of an archery force." },
      { typeId: "greater-warbeasts", label: "Treemen", points: 6, options: [], xenos: {}, notes: "Slow but brutal greater warbeast; a walking wall to hide the archers behind." },
      { typeId: "light-missiles", label: "Archers", points: 6, options: ["sharpshooters"], xenos: {}, notes: "Sharpshooting missiles — the reason you brought elves. Protect their lines of fire." },
      { typeId: "heavy-riders", label: "Knights", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Watchers", points: 2, options: [], xenos: {} },
      { typeId: "scouts", label: "Watchers", points: 2, options: [], xenos: {} },
    ] },
  { n: "faerie", name: "Faerie Borderlands", subtitle: "",
    lore: "In the forests on the Borderlands live the old Trollkin shamans, who lead lesser trolls and Marshland Goblins into battle. The goblins' Concealment reflects their ability to magically blend into the landscape, and the Spellcaster Leader is unusually powerful for a shaman, enchanting goblin weaponry before battle commences. This list is inspired by Artizan Designs' 28mm Borderlands range, and it's an interesting way to field a low model-count Warband of goblins (that most players usually field by multiple dozens of models).",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Forest Troll Wise Old Shaman", points: 7, options: [], xenos: { "spellcaster": 2 }, colours: ["Jade", "Saffron", "Emerald"], notes: "An unusually strong spellcaster who buffs the goblins — the whole warband leans on him." },
      { typeId: "heavy-foot", label: "Goblin Knights", points: 7, options: [], xenos: { "enchanted-blades": true }, notes: "Enchanted blades let these little riders bite well above their weight." },
      { typeId: "light-foot", label: "Goblin Moss-Troopers", points: 8, options: ["mixed-weapons"], xenos: { "concealment": true }, notes: "Concealment keeps them hidden until they strike from the undergrowth." },
      { typeId: "scouts", label: "Goblin Ambushers", points: 5, options: [], xenos: { "concealment": true } },
      { typeId: "bellicose-foot", label: "Forest Trolls", points: 3, options: [], xenos: { "slow": true }, notes: "Slow but tough — a shambling threat the enemy must deal with." },
    ] },
  { n: "beasts", icon: "spiked-dragon-head", name: "Fantastic Beasts", subtitle: "",
    lore: "This is not a Warband in its own right, but a list of creatures to pick and choose from if you're looking to boost your chances of success or you're hankering after a new, expensive model to paint. Individually these units are rather army points-heavy but they will make a superb centrepiece for your Warband.",
    units: [
      { typeId: "greater-warbeasts", isCmd: true, label: "Ancient Dragon", points: 10, options: [], xenos: { "flyer": true, "spellcaster": 1 }, colours: ["Crimson", "Saffron"], notes: "Flying spellcasting dragon — the centrepiece. Everything else exists to keep it in the fight." },
      { typeId: "elite-foot", label: "Cerne Abbas Giant", points: 8, options: [], xenos: { "fearsome": true }, notes: "Fearsome giant: charge it in and watch the enemy's Courage crumble." },
      { typeId: "lesser-warbeasts", label: "Humongous Maggots", points: 6, options: [], xenos: { "cannibalistic": true, "slow": true }, notes: "Slow, Cannibalistic horrors that feast on the fallen — grim and cheap." },
      { typeId: "lesser-warbeasts", label: "Humongous Maggots", points: 6, options: [], xenos: { "cannibalistic": true, "slow": true }, notes: "Slow, Cannibalistic horrors that feast on the fallen — grim and cheap." },
    ] },
  { n: "gnomes", name: "Gnomes & Halflings", subtitle: "",
    lore: "Although very different in appearance, I've chosen to twin halflings and gnomes together in one Warband — essentially they're all small folk with a penchant for longish spears and missile weapons. Gnomes have beards on their chins, and halflings wear their beards on their hairy feet. It is rare to find a Single Model Unit or even Reduced Model Units of halflings or gnomes (other than War Snails), as both rely on numbers more than individual strength.",
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
    lore: "Goblins dwell in woodland, inside and over misty mountains, and far out at sea. They are a widespread nuisance and almost universally unpopular. Hobgoblins are larger and marginally less pleasant, and trolls and wolves lack the moral niceties to know better than to hang around with the gobbos. This all adds up to make them a popular Warband to collect!",
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
    lore: "There's nothing worse than slaying your enemies only to find out that they come back to life several weeks later to reap their revenge. Such a Warband may conceivably start with only a Necromancer and handful of other units deployed on the table, throwing up skeletons and zombies with wild abandon (and good dice rolls). And here's today's Fact of the Day: ghouls are not actually Undead, they just like the graveyard vibe. The Necromancer may be turned into a Lich Lord by adding Undead.",
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
    lore: "They emerge from improbably constructed cave dwellings to do battle with dinosaurs from a different era. Or beat their chests and quizzically touch the clothing of the better-clad humans they meet. Perhaps they're actually apes forging a 'civilized' society? However you like to present your fantasy cave dwellers, this list is inspired by the 28mm Copplestone Castings Lost Worlds range but works for any similar low-low-low-tech society that believes in shamanism, hitting things with a big stone, and starting a fire by rubbing one stick on another stick.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Barbarian Queen", points: 8, options: [], xenos: { "courageous": true }, notes: "A Courageous elite fighter leading from the front of the stone-age mob." },
      { typeId: "greater-warbeasts", label: "Big Dinosaur", points: 10, options: ["ponderous"], xenos: { "large": true }, notes: "A Large greater warbeast — Ponderous, but a rampaging centrepiece all the same." },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Shamans", points: 4, options: [], xenos: { "repellent": true }, notes: "Repellent mystics who make foes reluctant to close." },
    ] },
  { n: "shining-citadel", name: "Knights of the Shining Citadel", subtitle: "",
    lore: "It is rumoured that these self-important knights seat themselves about a Round Table, debating how best to bring honour upon their own oversized heads. Their chivalric code sometimes flies out of the window when battle begins although — being a Warband of mounted knights — they may well run out of puff in scenarios requiring rapid movement. Their lack of missile units contributes to their single-dimensional approach to warfare... but they are tough tin cans to prise open. Depending on the movies you've watched, you may prefer to field units as Elite Foot rather than Elite Riders.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Prince", points: 10, options: [], xenos: { "blessed-blades": true }, notes: "Elite rider with Blessed Blades — the shining tip of an all-cavalry lance." },
      { typeId: "elite-riders", label: "Knights", points: 6, options: [], xenos: {}, notes: "Heavily-armoured elite horse: tough to crack, single-minded on the charge." },
      { typeId: "elite-riders", label: "Knights", points: 6, options: [], xenos: {}, notes: "Heavily-armoured elite horse: tough to crack, single-minded on the charge." },
      { typeId: "heavy-riders", label: "Squires", points: 4, options: [], xenos: {}, notes: "Cheaper riders to plug gaps and chase down broken units." },
      { typeId: "heavy-riders", label: "Squires", points: 4, options: [], xenos: {}, notes: "Cheaper riders to plug gaps and chase down broken units." },
    ] },
  { n: "lizard-kin", name: "Lizard Kin", subtitle: "",
    lore: "Lizard Kin are large, intelligent reptiles, often standing on two legs and using a wide assemblage of stone and obsidian weapons to batter their opponents into submission. At home in marshes and swamps, Lizard Kin may call upon a number of allies from the natural (fantasy) world, and their many sub-kings are sometimes accompanied into battle by powerful, old reptilian god-creatures.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Sub-King & Bodyguards", points: 8, options: [], xenos: { "fearless": true, "spell-resistant": true }, notes: "Fearless, spell-resistant elites — the cold-blooded core of the swarm." },
      { typeId: "heavy-foot", label: "Armoured Cultists", points: 6, options: ["offensive"], xenos: {} },
      { typeId: "light-foot", label: "Lesser Warriors", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "light-missiles", label: "Slingers", points: 4, options: [], xenos: {} },
      { typeId: "lesser-warbeasts", label: "Terror Birds", points: 4, options: [], xenos: {}, notes: "Fast warbeasts to flank and panic softer enemy units." },
      { typeId: "scouts", label: "Swamp Dwellers", points: 3, options: [], xenos: { "amphibious": true }, notes: "Amphibious scouts who ignore the marsh that bogs everyone else down." },
    ] },
  { n: "men-north", name: "Men of the North", subtitle: "",
    lore: "The Men of the North have faces almost as furry as the animal skins they wear. If they don a helmet, chances are it's got horns on it; they go on vacation by longship; and their mounts of choice are frequently Stone Age buffalo, wolves, bears, or anything else considerably more dangerous than a horse. This list is well suited to players who like to sprinkle Bondi and Berserkers over their gravlax and dill while reading Beowulf and Egil's Saga. This is a great Warband to field if you already have a collection of historical Vikings, Saxons, or Ancient Germans.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Chieftain & Heroes", points: 10, options: [], xenos: { "enchanted-blades": true, "fearless": true }, notes: "Fearless saga-heroes with enchanted blades — an unbending anchor for the line." },
      { typeId: "bellicose-foot", label: "Thanes", points: 6, options: ["armoured"], xenos: {}, notes: "Armoured Bellicose Foot: your steadiest front-rank brawlers." },
      { typeId: "bellicose-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Cavalry", points: 4, options: [], xenos: {} },
      { typeId: "scouts", label: "Shamanic Dancers", points: 2, options: [], xenos: {}, notes: "Cheap ritualists to round out the raiding party." },
    ] },
  { n: "men-west", name: "Men of the West", subtitle: "",
    lore: "The Men of the West are a Western European Dark Ages- or medieval-themed Warband: they field units of well-armoured cavalry, spearmen, bowmen, and brave heroes in gleaming armour. It is not unheard of for the Men of the West to equip individual units with a uniform in the chosen colours of their earl or city, or to carry shields showing a uniform emblem. They usually have a slightly more sophisticated culture than the Men of the North, and possibly even bathe several times in their life. It's perfectly fine to field a Warband using historical Dark Ages or medieval ranges.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Earl & Kindred", points: 10, options: [], xenos: { "blessed-blades": true }, notes: "Blessed-blade riders in an earl's colours — the mailed fist of the muster." },
      { typeId: "heavy-foot", label: "Wizard & Apprentices", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Magenta", "Amber"], notes: "A modest spellcaster to lend the men-at-arms an edge." },
      { typeId: "heavy-foot", label: "Axemen", points: 6, options: ["offensive"], xenos: {}, notes: "Offensive Heavy Foot for the heavy lifting in the centre." },
      { typeId: "heavy-foot", label: "Spearmen", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
    ] },
  { n: "orcs", name: "Orcs", subtitle: "",
    lore: "Many fantasy worlds claim orcs as a bastard branch of the elvish race; wherever yours come from, be sure they're brutish, squalid, ugly, and cruel. Which makes me wonder why you're considering commanding them in the first place. Orcs come in a variety of shapes and sizes, and fight in an equally varied number of styles on foot and mounted on wolves or boars. Half-orcs — or Mannish Orcs — have interbred with humans. Yuck.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Chieftain & Bully Boys", points: 6, options: ["offensive"], xenos: { "champion-hewing": true, "insipid": true }, notes: "Champion-Hewing but Insipid — hits like a truck, leads like a lout." },
      { typeId: "bellicose-foot", label: "Great Mountain Orcs", points: 6, options: ["armoured"], xenos: {}, notes: "Armoured Bellicose Foot; the toughest orcs in the mob." },
      { typeId: "light-foot", label: "Raiders", points: 6, options: ["mixed-weapons"], xenos: { "sneakers": true }, notes: "Sneaky mixed-weapon skirmishers who go where they're least wanted." },
      { typeId: "heavy-foot", label: "Warriors", points: 4, options: [], xenos: {} },
      { typeId: "light-missiles", label: "Archers", points: 4, options: [], xenos: {} },
      { typeId: "heavy-riders", label: "Boar Riders", points: 4, options: [], xenos: {}, notes: "Wild shock cavalry — point and let go." },
    ] },
  { n: "rat-kin", name: "Rat Kin", subtitle: "",
    lore: "Rat Kin are not your common or garden black rat: they are man-rats, able to use weapons, build societies (mostly based on land, sea, and sewer piracy), and control lesser — ordinary — rats to fight for them in great swarms. Shay-rats are the shamans of their society, and are good at making other rats appear is if from thin air. Some fantasies insist that Rat Kin use jezzail muskets in an otherwise gunpowder-free world.",
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
    lore: "The introduction of gunpowder, lute music, scheming politics, and a selection of open-fronted shirts marks the arrival of the Renaissance Men. These (broadly speaking) sixteenth-century Central European Warbands fight the good fight against all manner of opponents, bringing their own brand of imperial civilization and sometimes grubby idolatry to their oppressed and trampled foes.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "War Duke & Advisors", points: 7, options: [], xenos: { "brutal": true }, notes: "A Brutal noble commander leading his gaudy imperial retinue." },
      { typeId: "heavy-foot", label: "Landsknechts with Big Swords", points: 6, options: ["offensive"], xenos: {}, notes: "Offensive doppelsoldners paid to break pike blocks." },
      { typeId: "light-foot", label: "Pikemen", points: 6, options: ["pikes"], xenos: { "drums-and-flags": true }, notes: "A Drums-and-Flags pike block — steady, disciplined, and hard to shift." },
      { typeId: "light-foot", label: "Sword & Buckler Men", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "heavy-missiles", label: "Arquebusiers", points: 3, options: ["weighty-projectiles"], xenos: {}, notes: "Weighty gunfire that punishes armour the crossbow can't." },
      { typeId: "ravenous-hordes", label: "Plague-Ridden Hordes", points: 3, options: [], xenos: { "repellent": true } },
    ] },
  { n: "sand-marauders", name: "Sand Marauders", subtitle: "",
    lore: "Rumoured to be of magical human origin, the Marauders are a lightweight but mobile Warband favouring skirmish tactics and mounted archery. There's no reason that your Marauders must be human or their mounts horses — wasteland orcs, debased centaurs, and beastmen from the outer plains are just some of the options open to you, and Marauders have been known to ride giant lizards, woolly mammoths, and even large beetles.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Khan & Companions", points: 6, options: [], xenos: {}, notes: "Fast elite riders — the mobile spearhead of a hit-and-run force." },
      { typeId: "heavy-riders", label: "Shamans", points: 6, options: [], xenos: { "spellcaster": 1 }, colours: ["Turquoise", "Saffron"] },
      { typeId: "heavy-riders", label: "Aerial Marauders", points: 6, options: [], xenos: { "flyer": true }, notes: "Flyers to leap the battle line and strike the soft rear." },
      { typeId: "light-riders", label: "Marauders", points: 4, options: [], xenos: {} },
      { typeId: "bellicose-foot", label: "Foot Warriors", points: 4, options: [], xenos: {} },
      { typeId: "ravenous-hordes", label: "Slaves of the Khan", points: 2, options: [], xenos: { "large": true }, notes: "Large Ravenous Hordes driven forward as living shields." },
      { typeId: "ravenous-hordes", label: "Slaves of the Khan", points: 2, options: [], xenos: { "large": true }, notes: "Large Ravenous Hordes driven forward as living shields." },
    ] },
  { n: "nine-travellers", name: "The Nine Travellers", subtitle: "",
    lore: "These plucky fellows are off a quest... and it may take them three books to complete their task. This is an 'off the shelf' list presenting a ready-made 30-army point Warband consisting of just nine models. You may, of course, lift individual units from this list and add them into other Warbands for a heroic cameo. Some players might like to add a prancing pony model to the halfling unit.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Mighty Wizard", points: 8, options: [], xenos: { "spellcaster": 3 }, colours: ["Amber", "Emerald", "Indigo", "Magenta"], notes: "A Level 3 spellcaster leading the quest — fragile, but the warband's engine." },
      { typeId: "elite-foot", label: "Ranger & Warrior", points: 8, options: [], xenos: { "fearsome": true }, notes: "Fearsome elite pair who hold the line while the wizard works." },
      { typeId: "elite-foot", label: "Elf and Dwarf", points: 8, options: ["missiles"], xenos: {}, notes: "An elite duo with missiles — flexible answer to most threats." },
      { typeId: "light-foot", label: "Four Halflings", points: 6, options: [], xenos: { "concealment": true }, notes: "Concealed little heroes guarding something very precious." },
    ] },
  { n: "frozen-city", name: "Wizards of the Frozen City", subtitle: "",
    lore: "Amidst the icy ruins of a huge but long-fallen city, inquisitive Warbands of Wizards and their hardy followers venture forth to explore and conquer. This can become a very Spell-heavy Warband, making it a very different prospect to many of those included in this chapter. If you select several Spellcaster units, be sure to have some way to track which unit casts which Spells — and think carefully about choosing a complementary selection of colours of magic before play commences. This list is inspired by North Star's 28mm Frostgrave plastic miniatures range.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "The Wizard's Party", points: 10, options: [], xenos: { "spellcaster": 3 }, colours: ["Crimson", "Indigo", "Turquoise", "Violet"], notes: "A Level 3 elite spellcaster band — the reason to bring a magic tracker." },
      { typeId: "elite-foot", label: "Knights", points: 6, options: [], xenos: {} },
      { typeId: "light-foot", label: "Soldiers", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "light-foot", label: "Cultists", points: 5, options: [], xenos: { "fanatical": true }, notes: "Fanatical followers who fight past the point of sense." },
      { typeId: "bellicose-foot", label: "Barbarians", points: 4, options: [], xenos: {}, notes: "Hardy Bellicose Foot to keep the wizards alive in the ruins." },
    ] },
  { n: "woodland", name: "Woodland Folk", subtitle: "",
    lore: "All hail the mighty war hedgehog! Fear the badger lords! And never overlook the mouse warriors outflanking you through the hedgerow or the aerial bombardment from Sparrows, Robins, and Magpies Oh My! This Warband is based on various novels and some cute (and not so cute) miniature ranges that bring the fields and forests to life with the sound of war! Woodland creatures take up arms and don armour to see off the threat of evil-doing intruders, or sometimes to rise to prominence among their own kind. An alternative Leader unit could be a wise old owl (with the Wise Old Owl fantastical upgrade, page 123).",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Badger Lords & Man-Elephants", points: 9, options: [], xenos: { "bloodthirsty": true }, notes: "Bloodthirsty elite champions — the terror of the hedgerows." },
      { typeId: "light-foot", label: "The Holy Stoat & Followers", points: 7, options: ["offensive"], xenos: { "spellcaster": 1 }, colours: ["Emerald", "Jade"], notes: "A spellcasting mystic-beast at the warband's heart." },
      { typeId: "bellicose-foot", label: "War Hedgehogs", points: 7, options: ["armoured"], xenos: { "champion-hewing": true }, notes: "Armoured Champion-Hewers, spikes and all." },
      { typeId: "light-foot", label: "Larger Sword-Mammals", points: 5, options: ["offensive"], xenos: {} },
      { typeId: "scouts", label: "Missile Mammals", points: 2, options: [], xenos: {}, notes: "Sparrows and slings raining down from the branches." },
    ] },
];

/* attach the rulebook artwork to the archetypes that have a matching image. */
const IMAGED = new Set(["picts", "bronze-age", "centaurs", "dwarves", "elves", "faerie", "gnomes", "goblins", "graveyard", "cave-people", "shining-citadel", "lizard-kin", "men-north", "men-west", "orcs", "rat-kin", "renaissance", "sand-marauders", "nine-travellers", "frozen-city", "woodland"]);
CH9.forEach((w) => { if (IMAGED.has(w.n)) w.image = `warbands/${w.n}.jpg`; });

/* ---------------- RUNEWARS: THE MINIATURES GAME (core set) ---------------- */
const RUNEWARS = [
  { n: "daqan", icon: "knight-banner", name: "Daqan Lords", subtitle: "",
    lore: "On the side of Terrinoth, you'll find the Daqan Lords, noble human warriors with years of training in battle. Measured ranks of spearmen, armor-clad knights, and monstrous, magically formed rune golems can all be found among the armies of the Daqan Lords.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Kari Wraithstalker", points: 8, options: ["missiles"], xenos: {}, notes: "Kari is well-known for her hatred of the undead, and few can claim to have ventured into the Mistlands and escaped as often as she has." },
      { typeId: "greater-warbeasts", label: "Rune Golem", points: 6, options: [], xenos: {}, notes: "These hulking stone figures are a secret to all but the barons, their generals, and the Runemasters of Greyhaven. No one knows precisely when they were crafted or by whom, but each golem slumbers until a unique runebound shard is placed upon its brow." },
      { typeId: "heavy-riders", label: "Oathsworn Cavalry", points: 4, options: [], xenos: {}, notes: "Able to chase down any foe with blinding speed, the brave riders are sure to cut a path to victory." },
      { typeId: "heavy-riders", label: "Oathsworn Cavalry", points: 4, options: [], xenos: {}, notes: "Able to chase down any foe with blinding speed, the brave riders are sure to cut a path to victory." },
      { typeId: "heavy-foot", label: "Citadel Spearmen", points: 4, options: [], xenos: {}, notes: "The rows of infantry clad in the Citadel's own colors, majestic blue and gold, march as a symbol of safety and security to those who make their home in the Land of Steel." },
      { typeId: "heavy-foot", label: "Citadel Spearmen", points: 4, options: [], xenos: {}, notes: "The rows of infantry clad in the Citadel's own colors, majestic blue and gold, march as a symbol of safety and security to those who make their home in the Land of Steel." },
    ] },
  { n: "waiqar", icon: "death-skull", name: "Waiqar the Undying", subtitle: "",
    lore: "Marching out of the noxious Mistlands, Waiqar's undead are utterly implacable and intent on crushing Terrinoth. As a commander of the undead army, you'll command hordes of shambling reanimates that can replenish their ranks with corpses from the battlefield.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Ardus Ix'Erebus", points: 7, options: [], xenos: { "undead": true, "champion-hewing": true }, notes: "Ardus Ix'Erebus leads the Host of Crows, while Calleum Pahaan marches ahead of the Breathless Legion." },
      { typeId: "greater-warbeasts", label: "Carrion Lancer", points: 9, options: [], xenos: { "undead": true, "venomous": true }, notes: "As high-impact siege units, Carrion Lancers are among the deadliest troops in Waiqar's battalions." },
      { typeId: "heavy-foot", label: "Reanimates", points: 4, options: [], xenos: { "undead": true }, notes: "Their wargear is ancient and caked with rust, but they wield it with arms that never tire. These skeletal soldiers fight relentlessly against any who oppose their master's will, delivering a merciless and inevitable doom." },
      { typeId: "light-missiles", label: "Reanimate Archers", points: 4, options: [], xenos: { "undead": true }, notes: "Those unlucky enough to be caught in the open are witnesses to a sickly sight as the projectiles pierce their flesh. Skin peels away, foulness spreads, and bones crumble and crack." },
      { typeId: "light-foot", label: "Reanimates", points: 3, options: [], xenos: { "undead": true }, notes: "Their wargear is ancient and caked with rust, but they wield it with arms that never tire. These skeletal soldiers fight relentlessly against any who oppose their master's will, delivering a merciless and inevitable doom." },
      { typeId: "light-foot", label: "Reanimates", points: 3, options: [], xenos: { "undead": true }, notes: "Their wargear is ancient and caked with rust, but they wield it with arms that never tire. These skeletal soldiers fight relentlessly against any who oppose their master's will, delivering a merciless and inevitable doom." },
    ] },
];

/* ---------------- KINGS OF WAR: BATTLE FOR THE CORAL GATE + FAITH AND FURY ---------------- */
const KOW = [
  { n: "trident", icon: "sea-dragon", name: "Trident Realm of Neritica", subtitle: "",
    lore: "Deep beneath the seas of the known world lies the Trident Realm — a triumvirate of glittering underwater kingdoms, ruled by an aquatic race far beyond the ken of land-dwellers.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Depth Horror Eternal", points: 7, options: [], xenos: { "amphibious": true }, notes: "The Depth Horror Eternals are ugly, horrible brutes that haul themselves from their watery lairs to delight in the rich flavour of the fresh meat on offer in the strange, dry world above." },
      { typeId: "greater-warbeasts", label: "Dambusters", points: 7, options: [], xenos: { "amphibious": true }, notes: "These giant amphibians are tremendously strong, able to leap over dam walls and lay waste to these constructions and their defenders with ease. It takes fast reflexes and intuition to fight atop these mounts, so only the elite of the Riverguard can be found in Dambuster clutches." },
      { typeId: "light-riders", label: "Riverguard", points: 5, options: [], xenos: { "amphibious": true }, notes: "Dwelling near inland waters, these amphibious creatures belong to tribes that long ago allied themselves to the Neriticans for mutual benefit. They are rangy creatures, looking something like frogs, and perhaps are more akin to the beastmen of the Herd than fishmen." },
      { typeId: "light-foot", label: "Naiad Ensnarers", points: 4, options: [], xenos: { "amphibious": true }, notes: "Aquatic creatures of great agility and fierce cunning, these warriors are formidable Demon Fighters, and the bane of any creature allied with the Abyss." },
      { typeId: "light-foot", label: "Naiad Ensnarers", points: 4, options: [], xenos: { "amphibious": true }, notes: "Aquatic creatures of great agility and fierce cunning, these warriors are formidable Demon Fighters, and the bane of any creature allied with the Abyss." },
      { typeId: "scouts", label: "Naiad Heartpiercers", points: 3, options: [], xenos: { "amphibious": true }, notes: "At range, they wield harpoon launchers — powerful variants of crossbows that pierce armour and flesh." },
    ] },
  { n: "abyss", icon: "warlock-eye", name: "Forces of the Abyss", subtitle: "",
    lore: "When the constellations are in alignment and the power of the Wicked Ones waxes strong, their infernal legions march forth. Cackling, spiteful devils march alongside muscled behemoths.",
    units: [
      { typeId: "greater-warbeasts", isCmd: true, label: "Efreet", points: 10, options: ["flame-spore"], xenos: { "flyer": true }, notes: "Beings moulded from the damned flames that burn in the heart of the Abyss, Efreets are creatures of elemental fire, using it as both a lifeblood and a weapon. They shoot bolts of hellfire at their enemies, burning them in untold agonies at their masters' whim." },
      { typeId: "light-riders", label: "Abyssal Nagarri", points: 6, options: [], xenos: { "flyer": true }, notes: "The Nagarri are an unholy blend of demon and snake who plot and scheme for dominance. It is thought they were once Archfiends themselves, before falling to some dark curse." },
      { typeId: "bellicose-foot", label: "Abyssal Berserkers", points: 6, options: [], xenos: { "berserk": true }, notes: "The Abyssal Berserkers are Abyssal Champions that spend so long fighting relentless wars against their kin that their bodies twist and warp as surely as their vicious minds. They grow into towering beasts known as Berserkers, for whom the hunting of prey and the slaughtering of foes is meat and drink." },
      { typeId: "bellicose-foot", label: "Lower Abyssals", points: 4, options: [], xenos: {}, notes: "The Lower Abyssals are the weakest of the creatures of the Abyss but are still wicked, cunning and vicious. Their unnatural speed and strength is terrifying to any who face them." },
      { typeId: "bellicose-foot", label: "Lower Abyssals", points: 4, options: [], xenos: {}, notes: "The Lower Abyssals are the weakest of the creatures of the Abyss but are still wicked, cunning and vicious. Their unnatural speed and strength is terrifying to any who face them." },
    ] },
  { n: "basileans", icon: "angel-wings", name: "Basileans", subtitle: "",
    lore: "Noble Paladins devote their entire lives to battle and prayer, undergoing arduous quests to prove their purity to the Shining Ones.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Alanis Sallustis", points: 8, options: [], xenos: { "divine-leadership": true }, notes: "Since being a young girl, the pressure has been on Alanis to walk in the footsteps of her great uncle, the legendary Basilean hero Gnaeus Sallustis." },
      { typeId: "elite-riders", label: "Paladin Knights", points: 6, options: [], xenos: {}, notes: "Paladin Knights fight on fiery barded warhorses and are amongst the most feared cavalry units. Armoured in heavy ornate plate armour, the Paladins exult in combat, and nothing is more sacred to them than the blood of Basilea's enemies in the dust." },
      { typeId: "heavy-foot", label: "Men-At-Arms", points: 4, options: [], xenos: {}, notes: "Basilea's wealth means that its footsoldiers march to war clad in the finest plate and bearing the very best weapons that money can buy." },
      { typeId: "heavy-foot", label: "Men-At-Arms", points: 4, options: [], xenos: {}, notes: "Basilea's wealth means that its footsoldiers march to war clad in the finest plate and bearing the very best weapons that money can buy." },
      { typeId: "heavy-foot", label: "Men-At-Arms", points: 4, options: [], xenos: {}, notes: "Basilea's wealth means that its footsoldiers march to war clad in the finest plate and bearing the very best weapons that money can buy." },
      { typeId: "heavy-foot", label: "Men-At-Arms", points: 4, options: [], xenos: {}, notes: "Basilea's wealth means that its footsoldiers march to war clad in the finest plate and bearing the very best weapons that money can buy." },
    ] },
];

/* ---------------- A SONG OF ICE & FIRE (Stark vs Lannister) ---------------- */
const ASOIAF = [
  { n: "stark", icon: "wolf-head", name: "House Stark", subtitle: "",
    lore: "House Stark is known for their stalwart nature and cautious preparation for when winter will come again. They are a proud and devoted house. However, with the death of Robert Baratheon and imprisonment of Ned Stark, the Direwolf has mobilized for war.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Robb Stark", points: 7, options: [], xenos: { "champion-hewing": true } },
      { typeId: "elite-foot", label: "Greatjon Umber", points: 8, options: [], xenos: { "fearsome": true } },
      { typeId: "lesser-warbeasts", label: "Grey Wind", points: 5, options: [], xenos: { "fast": true } },
      { typeId: "bellicose-foot", label: "Umber Berserkers", points: 6, options: [], xenos: { "berserk": true }, notes: "As the battle rages on, they get more and more into a frenzy. Wounds seem to not matter and actually drive their bloodlust further." },
      { typeId: "heavy-foot", label: "Stark Sworn Swords", points: 4, options: [], xenos: {}, notes: "They are brave and capable to be sure, but their loyalty to the Direwolf banner can never be questioned. To a man, they would rather perish in battle, than leave one of their brothers behind." },
    ] },
  { n: "lannister", icon: "crown", name: "House Lannister", subtitle: "",
    lore: "Any that oppose the Lion are dispatched with either Jaime's swift blade or crushed underfoot by the Mountain.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Jaime Lannister", points: 9, options: [], xenos: { "enchanted-blades": true } },
      { typeId: "elite-foot", label: "The Mountain That Rides", points: 8, options: [], xenos: { "fearsome": true }, notes: "\"The Mountain that Rides\" Gregor Clegane is well-known for his brutal nature in combat." },
      { typeId: "heavy-foot", label: "Lannister Halberdiers", points: 5, options: ["pikes"], xenos: {}, notes: "Halberds tend to be a relatively cheap weapon to produce, but those made for Lannister troops are still of the highest quality, almost guaranteed to never break, even when receiving a Charge from enemy cavalry. And receiving a Charge is just what these men are trained to do, and they do it well." },
      { typeId: "heavy-foot", label: "Lannister Guardsmen", points: 4, options: [], xenos: {}, notes: "Of all the Great Houses of Westeros, there is none more wealthy and ready for war than the Lannisters. Wars are fought with money, and the ability to arm troops with the finest steel and equip them with thick armor in order to keep them alive and hacking at the enemy goes a long way towards standing victorious at the end of the battle." },
      { typeId: "bellicose-foot", label: "Clegane Brigands", points: 4, options: [], xenos: {}, notes: "\"The Mountain that Rides\" Gregor Clegane is well-known for his brutal nature in combat. The units fielded by his house are similarly known for their ruthless conduct on the battlefield." },
    ] },
];

/* ---------------- ELDFALL CHRONICLES (Soga vs Helian, heroic scale) ----------------
   Eldfall warbands are only 4-5 heroes, so these are heroic-scale interpretations:
   mostly Single or Reduced Model Units scaled up to a 30-point Dragon Rampant force. */
const ELDFALL = [
  { n: "soga", icon: "crossed-swords", name: "Empire of Soga", subtitle: "",
    lore: "The Empire of Soga is the largest and northernmost of the four main factions. Its harsh environment and storied past have shaped it into a pragmatic, feudal society. Upholding the martial traditions of its ruling warrior clans lies at the heart of its identity, with the Soga clan bearing the legitimacy of rule.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Clan Champion", points: 9, options: [], xenos: { "enchanted-blades": true }, notes: "The champions embody the principles and martial traditions of their respective clan. Deemed as capable and resourceful individuals, bearing a certain degree of significance and repute throughout the empire, they are often tasked as emissaries and agents, sent on sensitive diplomatic or otherwise important expeditions." },
      { typeId: "elite-foot", label: "Bushi Assistant", points: 6, options: [], xenos: {}, notes: "Well-armed and trained in the fundamentals of warfare, these warrior attendants are more than mere squires. Once they have proven their worth on the battlefield, an attendant is honored with the formal title of bushi." },
      { typeId: "bellicose-foot", label: "Onitaoshi", points: 6, options: [], xenos: { "fearsome": true }, notes: "These warriors, encased in full armor and forged in frost, were named the Onitaoshi — the Ogre Slayers. Armed with Ō-tachi, massive greatswords designed to bridge the size and strength gap, they stand as the Empire's last bulwark against the Oni." },
      { typeId: "light-foot", label: "Kitsune Priestess", points: 4, options: [], xenos: { "spellcaster": 0 }, colours: ["Saffron"], notes: "Like all Chimeras, the Kitsune are born with the innate gift of shapeshifting and live far beyond the span of ordinary mortals." },
      { typeId: "lesser-warbeasts", label: "Water Elemental", points: 5, options: [], xenos: { "amphibious": true } },
    ] },
  { n: "helian", icon: "centurion-helmet", name: "Helian League", subtitle: "",
    lore: "Holding the highest esteem among the four great factions of Calad, the Helian League is a radiant nation of the Rin peoples, whose lands lie in the southern reaches of the world. Thriving in all aspects of civilization, the League is guided by the dual principles of upholding ancient tradition and securing prosperity for all within its realm.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Expeditionary Hierophant", points: 8, options: [], xenos: { "spellcaster": 1 }, colours: ["Amber", "Emerald"], notes: "The gifted are raised within temple halls, trained from youth in rites of devotion, divine spellcraft, and the study of celestial law. Hierophants devote their lives to illuminating the legacies of the Rin and guiding the Helrin toward spiritual ascendance." },
      { typeId: "light-foot", label: "Flame Shaper", points: 5, options: [], xenos: { "spellcaster": 1 }, colours: ["Crimson", "Saffron"], notes: "Flameshapers are Helrin born with an affinity for fire — those who have awakened to the blazing current of pyromancy that flows through them. Fire is dangerous, yes — but for the Helrin, it is also sacred." },
      { typeId: "elite-foot", label: "Citadel Guard", points: 6, options: [], xenos: {}, notes: "Trained in the relentless martial disciplines of the Haironian tradition, they embody precision, resilience, and unquestionable loyalty. Heavily armed, nearly immune to magic, and trained with absolute rigor, Citadel Guards are sometimes dispatched beyond the capital." },
      { typeId: "bellicose-foot", label: "Helrin Expatriate", points: 4, options: [], xenos: {}, notes: "Expatriates are Helrin who have violated the moral principles that form the bedrock of Helian society. As punishment, they are exiled from the cities — banished to the border colonies or forced to seek shelter beyond the walls." },
      { typeId: "greater-warbeasts", label: "Water Elemental", points: 7, options: [], xenos: { "amphibious": true } },
    ] },
];

/* ---------------- WARHAMMER: AGE OF SIGMAR (Start Collecting! Ironjawz — this box is
   now discontinued; GW's current Ironjawz starter, Spearhead: Orruk Warclans - Ironjawz
   Bigmob, swaps in a Megaboss and Brutes instead of a Warchanter and Gore-gruntas) ---------------- */
const AOS = [
  { n: "ironjawz", icon: "orc-head", name: "Ironjawz", subtitle: "",
    lore: "The Ironjawz embody the raw thuggishness of Gork. They beat iron into crude but effective armour — often with their own fists — and swing ramshackle weapons with such force that even their dulled edges can hew enemies in two.",
    units: [
      { typeId: "heavy-foot", isCmd: true, label: "Orruk Warchanter", points: 8, options: ["offensive"], xenos: { "drums-and-flags": true }, notes: "Each Warchanter is a priest of Gorkamorka and a conduit for the energy of the Waaagh!" },
      { typeId: "elite-riders", label: "Orruk Gore-gruntas", points: 6, options: [], xenos: {}, notes: "Porcine terrors who make for effective, if stinky, shock cavalry." },
      { typeId: "heavy-foot", label: "Orruk 'Ardboyz", points: 6, options: ["offensive"], xenos: {}, notes: "'Ardboyz make up the core contingent, wielding angular shields like weapons and operating almost like a regimented unit, at least until battle lines meet." },
      { typeId: "heavy-foot", label: "Orruk 'Ardboyz", points: 6, options: ["offensive"], xenos: {}, notes: "'Ardboyz make up the core contingent, wielding angular shields like weapons and operating almost like a regimented unit, at least until battle lines meet." },
      { typeId: "heavy-foot", label: "Orruk 'Ardboyz", points: 4, options: [], xenos: {}, notes: "'Ardboyz make up the core contingent, wielding angular shields like weapons and operating almost like a regimented unit, at least until battle lines meet." },
    ] },
];

/* ---------------- CONQUEST: THE LAST ARGUMENT OF KINGS (Para Bellum Games) ----------------
   Hundred Kingdoms and The Spires are the original (2019) Two-Player Starter Set / Core Box;
   Old Dominion and Weaver Courts are the two newest single-faction starter boxes as of 2026
   (Old Dominion 2026 Starter Set and Weaver Courts 2026 Starter). Old Dominion's Kataphraktoi,
   Centaur Prodromoi, Bone Golems and Mounted Strategos are now fielded as an undead legion in
   Conquest's current lore, hence the Undead upgrade throughout that list. */
const CONQUEST = [
  { n: "hundred-kingdoms", icon: "mounted-knight", name: "The Hundred Kingdoms", subtitle: "",
    lore: "Forged by descendants of the refugee masses of the Old Dominion, the Hundred Kingdoms stand divided in borders, but united as a bastion of humanity's spirit, grit and honor.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Noble Lord", points: 7, options: [], xenos: { "champion-hewing": true }, notes: "Few question that a noble's right to command does not derive simply from the blood coursing through their veins. The prestigious martial tradition of the Hundred Kingdoms demands leaders whose men believe in, whose training and experience foster confidence and whose skill demands admiration." },
      { typeId: "elite-riders", label: "Household Knights", points: 8, options: [], xenos: { "mystical-armour": true }, notes: "Hundreds of pounds of obdurate metal and muscle, forged through years of training and experience, they have shattered men, formations, and kingdoms throughout the ages." },
      { typeId: "heavy-foot", label: "Men-at-Arms", points: 4, options: [], xenos: {}, notes: "Freed from the need to work and protect their land, Men-at-Arms were able to focus exclusively on their martial pursuits, allowing them to march on extended campaigns and travel in search of employment." },
      { typeId: "heavy-foot", label: "Men-at-Arms", points: 4, options: [], xenos: {}, notes: "Freed from the need to work and protect their land, Men-at-Arms were able to focus exclusively on their martial pursuits, allowing them to march on extended campaigns and travel in search of employment." },
      { typeId: "heavy-missiles", label: "Mercenary Crossbowmen", points: 7, options: [], xenos: { "bodkins": true }, notes: "While some could argue that the longbows increased range and rate of fire outclass the crossbow, mastery of that massive weapon requires years, while a man can learn to competently care for and use a crossbow in a matter of days." },
    ] },
  { n: "spires", icon: "metal-golem-head", name: "The Spires", subtitle: "",
    lore: "As intelligent, methodical and resourceful as they are calculative, taciturn and manipulative, the Exiles fill their Spires with schemes that span centuries, and Biomantic creations that range from measly drones to perfect clones and terrifying abominations.",
    units: [
      { typeId: "light-foot", isCmd: true, label: "Pheromancer", points: 4, options: [], xenos: { "brutal": true }, notes: "A Pheromancer can issue commands across the battlefield, singling out enemy troops for extermination, turning timid drones into bloodthirsty fiends and even force their troops to march until their feet are little more than bloody stumps." },
      { typeId: "ravenous-hordes", label: "Force-Grown Drones", points: 3, options: [], xenos: { "large": true, "fast": true }, notes: "Force Grown Drones are not meant to fight at the behest of their masters. They are meant to die at their convenience." },
      { typeId: "ravenous-hordes", label: "Force-Grown Drones", points: 3, options: [], xenos: { "large": true, "fast": true }, notes: "Force Grown Drones are not meant to fight at the behest of their masters. They are meant to die at their convenience." },
      { typeId: "lesser-warbeasts", label: "Brute Drones", points: 6, options: [], xenos: { "berserk": true }, notes: "Towering well over two meters, with most specimens touching the three meter mark, Brute Drones are a towering mass of vat grown muscle and aggression." },
      { typeId: "lesser-warbeasts", label: "Brute Drones", points: 6, options: [], xenos: { "berserk": true }, notes: "Towering well over two meters, with most specimens touching the three meter mark, Brute Drones are a towering mass of vat grown muscle and aggression." },
      { typeId: "greater-warbeasts", label: "Abomination", points: 8, options: [], xenos: { "fearsome": true }, notes: "Abominations were originally an advanced and cruel form of punishment, devised on a whim by the Sovereign. Ensconced deep within an Abomination lies the body of an Exile who has betrayed his trust or breached the most sacrosanct of Spire laws." },
    ] },
  { n: "old-dominion", icon: "crowned-skull", name: "The Old Dominion", subtitle: "",
    lore: "Long before the Hundred Kingdoms, mankind reached the zenith of its power under the auspices and protection of its patron god, Hazlia the Pantokrator, and formed the Dominion.",
    units: [
      { typeId: "elite-riders", isCmd: true, label: "Mounted Strategos", points: 7, options: [], xenos: { "undead": true, "champion-hewing": true }, notes: "A Mounted Strategos is the epitome of this ancient warrior code, a paragon of a bygone age mounted on his ritual companion, whose faded glory and tattered panoply cannot dim the blazing intellect and sheer will that smolder within this faded vessel." },
      { typeId: "light-foot", label: "Hierodeacon", points: 4, options: [], xenos: { "spellcaster": 0 }, colours: ["Violet"], notes: "Self-ordained followers who preach the word of fallen divinities trapped within the Pyre." },
      { typeId: "elite-riders", label: "Kataphraktoi", points: 8, options: [], xenos: { "undead": true, "mystical-armour": true }, notes: "Armored from head to toe, Kataphraktoi were the precursors to the noble ideal of the knight. Raised in undeath these horsemen become a terrifying force on the battlefield, their effectiveness compounded by the fact neither the horse nor the rider know fear or pain." },
      { typeId: "light-riders", label: "Centaur Prodromoi", points: 5, options: [], xenos: { "undead": true, "fast": true }, notes: "The vast majority found their roles as Prodromoi, scouts and border patrol forces that operated in regimented tribal structure bolstering the Legions with formidable vanguard and skirmish forces." },
      { typeId: "greater-warbeasts", label: "Bone Golems", points: 6, options: [], xenos: { "undead": true }, notes: "These massive constructs wreak havoc on the battlefield, their massive forms soaking unbelievable levels of damage as their massive limbs scythe through enemy formations." },
    ] },
  { n: "weaver-courts", icon: "torc", name: "The Weaver Courts", subtitle: "",
    lore: "Trespassers beware! When unwary foes cross through the realms of the Weavers, they are met with the full might of the Faerann. Through Bloom, Branch, Blade, and Bow; all who oppose are sure to meet an untimely demise.",
    units: [
      { typeId: "elite-foot", isCmd: true, label: "Taosidhe", points: 7, options: [], xenos: { "spellcaster": 0 }, colours: ["Jade"], notes: "Fearless leaders, stalwart guardians and nurturing protectors, the Taosidhe are the heart and soul of Weaver septs. Tasked with the safety and prosperity of their people, these fearless warriors have protected the Faerann for centuries." },
      { typeId: "light-foot", label: "Scalie Dancers", points: 5, options: ["offensive"], xenos: {}, notes: "Their iridescent wings, compound eyes, preternatural reflexes and whip-like swords meld into a deadly display of acrobatic prowess, making it look like they dance among their foes, rather than fight." },
      { typeId: "elite-riders", label: "Gemred Knights", points: 9, options: [], xenos: { "mystical-armour": true, "champion-hewing": true }, notes: "Gemred Knights guard the desolate northern frontiers of the Faerann in such small numbers that they must become the very personification of all of these traits: cruel, brutal, cold, ruthless and harsh." },
      { typeId: "scouts", label: "Scathach Hunters", points: 3, options: [], xenos: { "sneakers": true }, notes: "Epitomizing the values of Autumn, the Scathach Hunters herald the end of the cycle." },
      { typeId: "ravenous-hordes", label: "Morrowen", points: 6, options: [], xenos: { "large": true, "regeneration": true, "fast": true }, notes: "Surrendering their will and individuality to the Hive is not a decision taken lightly, but the solace offered in the alien embrace of the Hive has drawn those who are drowned by grief or ennui." },
    ] },
];

/* the rulebook groups its archetypes by region; Barbarica is the barbarian set,
   pulled into its own collection here. */
const BARBARICA_IDS = new Set(["bog", "mtn-dwarves", "northlanders", "picts"]);
const BARBARICA = CH9.filter((w) => BARBARICA_IDS.has(w.n));
const CH9_OTHER = CH9.filter((w) => !BARBARICA_IDS.has(w.n));

export const SETTINGS = [
  {
    id: "sample-warbands",
    name: "Sample Warbands",
    blurb: "The rulebook's worked example, Rottingutt's Malodorous Goblins, at all three army sizes, plus a 30-point build of the other Chapter 9 archetypes.",
    detachments: [ROTTINGUTT_24, ROTTINGUTT_30, ROTTINGUTT_36, ...CH9_OTHER],
  },
  {
    id: "barbarica",
    name: "Barbarica",
    blurb: "The barbarian archetypes of Chapter 9: a dark-haired lowland tribe, heavily-armoured mountain dwarves, ferocious northern raiders, and the never-conquered painted folk. Each is one legal 30-point build; swap units to taste.",
    detachments: BARBARICA,
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
    blurb: "Armies from Mantic's Kings of War starter boxes: the Trident Realm and Forces of the Abyss from Battle for the Coral Gate, and the Basileans from the Kings of War Champions: Faith and Fury 2-Player Starter Set.",
    detachments: KOW,
  },
  {
    id: "conquest",
    name: "Conquest: The Last Argument of Kings",
    blurb: "Four armies from Para Bellum Games' rank-and-flank fantasy wargame: the Hundred Kingdoms and the Spires from the original Two-Player Starter Set, plus Old Dominion and the Weaver Courts, the two newest single-faction starter boxes.",
    detachments: CONQUEST,
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

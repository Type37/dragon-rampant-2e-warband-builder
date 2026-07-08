/* Dragon Rampant (Second Edition) data. Unit profiles, options, special rules,
   fantastical upgrades and spells transcribed from Dragon Rampant 2e
   (Osprey Games, 2024). This is a fan tool, not an official product.

   Stat convention: activation values (Attack, Shoot, Move, Courage) are 2d6
   target numbers. Combat values (Attack Value, Shoot Value, Defence Value) are
   one-die target numbers; the worst is a bare "6" (meaning 6 needed), matching
   the rulebook. Armour is a flat integer. Strength Points are 6 or 12. */

const DASH = "–"; // en dash, the rulebook's "no ability" marker

export const UNIT_TYPES = [
 /* ---------------- MOUNTED UNIT PROFILES ---------------- */
 {
  "id": "elite-riders",
  "name": "Elite Riders",
  "cls": "mounted",
  "cat": "mounted",
  "base": 6,
  "sp": 6,
  "role": "Well-armoured, well-armed knights and their equivalents across the fantasy races, relying on the impact of their charge. Deadly charging, far less so on the defensive.",
  "act": { "atk": "5+", "mov": "7+", "sho": DASH, "cou": "3+" },
  "prof": { "atk": "3+", "def": "5+", "sho": DASH, "arm": "4", "mov": "10\"" },
  "special": ["Wild Charge", "Counter-charge"],
  "options": [
   { "id": "mounted-missiles", "name": "Mounted Missiles", "cost": 2, "text": "Wild Charge and Counter-charge are removed and replaced with Shoot 6+ / Range 12\" with a Shoot Value of 5+. Fights in a less dynamic style, rather like a main battle tank." },
   { "id": "drilled", "name": "Drilled", "cost": 1, "conflicts": ["mounted-missiles"], "text": "This unit is better controlled than most hot-headed Elite Riders and removes Wild Charge." },
   { "id": "motivated", "name": "Motivated", "cost": 1, "text": "This unit has less of a snooty attitude to the grunt-work of small-scale battles, and its Move becomes 6+." }
  ]
 },
 {
  "id": "heavy-riders",
  "name": "Heavy Riders",
  "cls": "mounted",
  "cat": "mounted",
  "base": 4,
  "sp": 6,
  "role": "Not as well equipped as Elite Riders but still formidable, and more versatile: some carry missile weapons, and war chariots are an option.",
  "act": { "atk": "5+", "mov": "5+", "sho": DASH, "cou": "4+" },
  "prof": { "atk": "4+", "def": "5+", "sho": DASH, "arm": "3", "mov": "10\"" },
  "special": ["Counter-charge"],
  "options": [
   { "id": "mounted-missiles-add", "name": "Mounted Missiles", "cost": 1, "text": "Add Shoot 6+ / Range 12\" with a Shoot Value of 5+." },
   { "id": "chariots", "name": "Chariots", "cost": 2, "text": "The unit may not cross water except at a ford, enter rough terrain, or cross hedges, walls, ditches or similar obstacles. Armour is increased to 4. Must be a Reduced Model Unit of 1 to 3 models only." }
  ]
 },
 {
  "id": "light-riders",
  "name": "Light Riders",
  "cls": "mounted",
  "cat": "mounted",
  "base": 4,
  "sp": 6,
  "role": "Skirmishing 'shoot and scoot' cavalry. Deadly at range against slow foes, but pretty dead pretty quick if contacted. Their mounts need not be horses.",
  "act": { "atk": "7+", "mov": "5+", "sho": "6+", "cou": "5+" },
  "prof": { "atk": "5+", "def": "6", "sho": "5+ / 12\"", "arm": "3", "mov": "12\"" },
  "special": ["Skirmish", "Evade"],
  "options": [
   { "id": "short-range", "name": "Short Range Missiles", "cost": -1, "text": "Equipped only with shorter-range capabilities such as javelins or spore-filled puffballs. Shooting range is reduced to 6\"." },
   { "id": "good-shooters", "name": "Good Shooters", "cost": 2, "text": "Does not suffer the -1 penalty to Shoot Value when Skirmishing." }
  ]
 },
 {
  "id": "greater-warbeasts",
  "name": "Greater Warbeasts",
  "cls": "mounted",
  "cat": "beast",
  "base": 6,
  "sp": 6,
  "role": "Dragons, demons, treemen, massive war rhinos: creatures that cause an audible intake of breath. Formidable on the attack, but relatively toothless if enemies get in close.",
  "act": { "atk": "5+", "mov": "6+", "sho": DASH, "cou": "3+" },
  "prof": { "atk": "3+", "def": "6", "sho": DASH, "arm": "4", "mov": "10\"" },
  "special": ["Ranger", "Wild Charge", "Stomper"],
  "options": [
   { "id": "flame-spore", "name": "Flame or Spore Attack", "cost": 2, "text": "Wild Charge is removed and replaced with Shoot 6+ / Range 12\" with a Shoot Value of 5+." },
   { "id": "ponderous", "name": "Ponderous", "cost": 1, "conflicts": ["flame-spore"], "text": "This unit is slower of thought than most ugly great beasties and removes Wild Charge." },
   { "id": "cunning", "name": "Cunning", "cost": 2, "text": "This unit knows how to defend its soft underbelly. Defence Value becomes 5+." }
  ]
 },
 {
  "id": "lesser-warbeasts",
  "name": "Lesser Warbeasts",
  "cls": "mounted",
  "cat": "beast",
  "base": 4,
  "sp": 6,
  "role": "Lions, wolves, war dogs, giant spiders and bats, and Reduced Model Units of medium-sized creatures. Fight with tooth, claw and other natural weapons.",
  "act": { "atk": "5+", "mov": "6+", "sho": DASH, "cou": "4+" },
  "prof": { "atk": "4+", "def": "6", "sho": DASH, "arm": "3", "mov": "12\"" },
  "special": ["Ranger", "Wild Charge", "Fleet Footed"],
  "options": [
   { "id": "flame-spore", "name": "Flame or Spore Attack", "cost": 2, "text": "Wild Charge is removed and replaced with Shoot 6+ / Range 12\" with a Shoot Value of 5+." },
   { "id": "cunning", "name": "Cunning", "cost": 2, "text": "This unit knows how to defend its fluffy underbelly. Defence Value becomes 5+." }
  ]
 },
 /* ---------------- FOOT UNIT PROFILES ---------------- */
 {
  "id": "elite-foot",
  "name": "Elite Foot",
  "cls": "foot",
  "cat": "foot",
  "base": 6,
  "sp": 6,
  "role": "The dismounted equal of Elite Riders: heroes, well-armoured warriors, minotaurs and giants. Also a viable way to field a Very Powerful Magic User as a Single Model Unit.",
  "act": { "atk": "5+", "mov": "5+", "sho": DASH, "cou": "3+" },
  "prof": { "atk": "3+", "def": "4+", "sho": DASH, "arm": "4", "mov": "6\"" },
  "special": ["Ranger"],
  "options": [
   { "id": "missiles", "name": "Missiles", "cost": 2, "text": "Add Shoot 6+ / Range 18\" with a Shoot Value of 5+." }
  ]
 },
 {
  "id": "heavy-foot",
  "name": "Heavy Foot",
  "cls": "foot",
  "cat": "foot",
  "base": 4,
  "sp": 12,
  "role": "Well-armoured, steady spearmen or pikemen: the mainstay of many fantasy armies. Slow but sure, better in defence than attack, and very hard to shift.",
  "act": { "atk": "6+", "mov": "5+", "sho": DASH, "cou": "4+" },
  "prof": { "atk": "5+", "def": "4+", "sho": DASH, "arm": "3", "mov": "6\"" },
  "special": ["Wall of Spears"],
  "options": [
   { "id": "offensive", "name": "Offensive", "cost": 2, "conflicts": ["pikes"], "text": "Attack Value becomes 4+. The unit may no longer form a Wall of Spears." },
   { "id": "pikes", "name": "Pikes", "cost": 1, "conflicts": ["offensive"], "text": "Defence Value becomes 3+ against Mounted units. Cannot be used with Offensive but may still form a Wall of Spears." },
   { "id": "short-missiles", "name": "Short Range Missiles", "cost": 1, "text": "Equipped with javelins or the severed heads of vanquished foes. Add Shoot 6+ / Range 6\" with a Shoot Value of 5+." }
  ]
 },
 {
  "id": "light-foot",
  "name": "Light Foot",
  "cls": "foot",
  "cat": "foot",
  "base": 3,
  "sp": 12,
  "role": "A similar role to Heavy Foot but less well-armoured: faster, but easier to damage. Also smaller or less courageous warriors.",
  "act": { "atk": "6+", "mov": "5+", "sho": DASH, "cou": "4+" },
  "prof": { "atk": "5+", "def": "4+", "sho": DASH, "arm": "2", "mov": "8\"" },
  "special": ["Wall of Spears"],
  "options": [
   { "id": "offensive", "name": "Offensive", "cost": 2, "conflicts": ["pikes", "mixed-weapons"], "text": "Attack Value becomes 4+. The unit may no longer form a Wall of Spears." },
   { "id": "pikes", "name": "Pikes", "cost": 1, "conflicts": ["offensive", "mixed-weapons"], "text": "Defence Value becomes 3+ against Mounted units. Cannot be used with Offensive or Mixed Weapons but may still form a Wall of Spears." },
   { "id": "short-missiles", "name": "Short Range Missiles", "cost": 1, "conflicts": ["mixed-weapons"], "text": "Equipped with javelins, thrown rocks or shuriken. Add Shoot 6+ / Range 6\" with a Shoot Value of 5+." },
   { "id": "mixed-weapons", "name": "Mixed Weapons", "cost": 2, "conflicts": ["offensive", "pikes", "short-missiles"], "text": "A mixture of melee and missile weapons, adding Shoot 6+ / Range 12\" with a Shoot Value of 5+. Removes Wall of Spears." }
  ]
 },
 {
  "id": "bellicose-foot",
  "name": "Bellicose Foot",
  "cls": "foot",
  "cat": "foot",
  "base": 4,
  "sp": 12,
  "role": "Angry fellows with big axes and an unpleasant outlook on life. They charge first, slay second, and only occasionally ask questions later. Very powerful charging, vulnerable if caught off balance.",
  "act": { "atk": "5+", "mov": "6+", "sho": DASH, "cou": "4+" },
  "prof": { "atk": "3+", "def": "6", "sho": DASH, "arm": "2", "mov": "8\"" },
  "special": ["Ranger", "Wild Charge", "Counter-charge Versus Foot", "Fleet Footed"],
  "options": [
   { "id": "armoured", "name": "Armoured", "cost": 2, "text": "Equipped with Terrifically Shiny Armour. Its Armour becomes 3." }
  ]
 },
 {
  "id": "heavy-missiles",
  "name": "Heavy Missiles",
  "cls": "foot",
  "cat": "foot",
  "base": 4,
  "sp": 12,
  "role": "Crossbows or similar hard-hitting, armour-punching projectiles: powerful, but slow to reload. Not well-armoured nor useful in melee.",
  "act": { "atk": "7+", "mov": "6+", "sho": "7+", "cou": "4+" },
  "prof": { "atk": "6", "def": "5+", "sho": "4+ / 18\"", "arm": "2", "mov": "6\"" },
  "special": [],
  "options": [
   { "id": "weighty-projectiles", "name": "Weighty Projectiles", "cost": -1, "text": "Armed with shorter-range missiles. Shooting range is reduced to 12\"." },
   { "id": "shielded", "name": "Shielded", "cost": 2, "text": "Equipped with pavises, large shields or scaly hides: +2 Armour against Shooting (to 4) and +1 against Attacks when Defending (to 3). No effect while in rough terrain or cover." }
  ]
 },
 {
  "id": "light-missiles",
  "name": "Light Missiles",
  "cls": "foot",
  "cat": "foot",
  "base": 4,
  "sp": 12,
  "role": "Bows, slingshot, and the spell-cast magical equivalents. More common than Heavy Missiles. Try to destroy the enemy before they close.",
  "act": { "atk": "7+", "mov": "6+", "sho": "6+", "cou": "4+" },
  "prof": { "atk": "6", "def": "5+", "sho": "5+ / 18\"", "arm": "2", "mov": "6\"" },
  "special": [],
  "options": [
   { "id": "sharpshooters", "name": "Sharpshooters", "cost": 2, "text": "Shoot Value becomes 4+." },
   { "id": "fleet-footed", "name": "Fleet Footed", "cost": 1, "text": "This unit does not halve its Move distance in rough terrain." }
  ]
 },
 {
  "id": "scouts",
  "name": "Scouts",
  "cls": "foot",
  "cat": "foot",
  "base": 2,
  "sp": 6,
  "role": "Woodsfolk, brigands, pixies and similar skirmishers. Missile-armed and of limited melee value, but great at grabbing objectives and hard to target.",
  "act": { "atk": "7+", "mov": "5+", "sho": "7+", "cou": "5+" },
  "prof": { "atk": "6", "def": "6", "sho": "5+ / 12\"", "arm": "1", "mov": "8\"" },
  "special": ["Hard To Target", "Skirmish", "Evade", "Fleet Footed"],
  "options": [
   { "id": "good-shooters", "name": "Good Shooters", "cost": 2, "text": "Does not suffer the -1 penalty to Shoot Value when Skirmishing." }
  ]
 },
 {
  "id": "ravenous-hordes",
  "name": "Ravenous Hordes",
  "cls": "foot",
  "cat": "foot",
  "base": 1,
  "sp": 12,
  "role": "Slow, untrained, hard to motivate, and little more than a speed bump. Zombies, scared peasants, swarms of beetles or shrews. What's not to like if you value quantity over quality?",
  "act": { "atk": "7+", "mov": "6+", "sho": DASH, "cou": "5+" },
  "prof": { "atk": "6", "def": "6", "sho": DASH, "arm": "1", "mov": "6\"" },
  "special": [],
  "options": []
 }
];

/* ---------------- SPECIAL RULES (per unit-type) ---------------- */
export const SPECIAL_RULES = {
 "Wild Charge": "If an enemy unit is within this unit's Attack range during the Activate Wild Charges phase, you must test to activate an Attack against it. If the test fails, the unit stays put but may test for an ordered Move later in your turn (no other actions). Not usable while Battered.",
 "Counter-charge": "When an enemy has successfully rolled to Attack this unit, but before it moves, this unit may test for a Counter-charge (an Attack at 7+). On a success the two units meet partway and both count as Attacking; on a failure it stands for the charge. Not usable while Battered.",
 "Counter-charge Versus Foot": "As Counter-charge, but this rule does not apply against Mounted units. When an enemy Foot unit has successfully rolled to Attack this unit, test for a Counter-charge at 7+. Not usable while Battered.",
 "Skirmish": "As an ordered activation on a 7+, the unit may make a half Move and Shoot in either order. All models Shoot with -1 to their dice scores.",
 "Evade": "When an enemy successfully rolls to Attack this unit, but before it moves, this unit may test to Evade at 7+. On a success it immediately Skirmishes at the Attacker (no closer, avoiding others by 3\") then the charger completes its move; if contacted, the Evader's Armour drops to 1. On a failure it stands and its Armour becomes 1 for the Attack. Not usable while Battered.",
 "Ranger": "This unit uses its normal Attack, Defence and Armour profile when fighting in rough terrain.",
 "Stomper": "If unable to Retreat the full distance because a friendly unit blocks its path, that friendly unit loses the same number of Strength Points as this unit. The friendly unit takes no Courage test and does not Retreat.",
 "Fleet Footed": "This unit does not halve its Move distance in rough terrain.",
 "Wall of Spears": "Needs at least 6 Strength Points. On a Move order, form a two-rank formation around a central model (not in rough terrain or cover, and it cannot then move). +1 Armour against Attacks but not Shooting. If an Attack ends with both units in contact and the Wall is neither Battered nor below 6 Strength Points, the enemy must Retreat. Becoming Battered, Retreating or dropping below 6 Strength Points breaks the formation.",
 "Hard To Target": "Scouts count as Armour 2 versus Shooting and may only be targeted within 12\"."
};

/* ---------------- FANTASTICAL UPGRADES (shared, Chapter 3) ----------------
   The app calls these XENO_RULES, the shared upgrades any eligible unit may buy.
   avail: { type:"all" } | { type:"except", list:[unitIds] } | { type:"only", list:[unitIds] }
   Extra gates: needsShoot, leaderOnly, nonLeaderOnly, orHasUpgrade, notHasUpgrade.
   limitPer24: at most this many per complete 24 army points. */
export const XENO_RULES = [
 {
  "id": "18-00-strength", "name": "18/00 Strength", "cost": 4,
  "avail": { "type": "only", "list": ["elite-riders", "greater-warbeasts", "lesser-warbeasts", "elite-foot", "bellicose-foot"] },
  "limitPer24": 1, "conflicts": ["champion-hewing"], "glory": true,
  "text": { "flavor": "The Dragon Rampant version of that roleplaying superpower, bought with army points rather than a 1-in-216 dice roll.", "rule": "The unit may reroll up to three failed hit dice when Attacking or Defending, even when Battered. Cannot be combined with Champion (Hewing). Only one per complete 24 army points. If destroyed or routed, your opponent gains 1 extra Glory." }
 },
 {
  "id": "amphibious", "name": "Amphibious", "cost": 1, "avail": { "type": "all" },
  "text": { "flavor": "Warriors and creatures blessed with water-wings, gills, coracles or waterborne mounts fight better when the going is wet.", "rule": "In water-based terrain the unit counts as Fast when Attacking or Moving (unless it leaves that terrain) and gains Ranger and Fleet Footed there. It may also cross impassable water-based terrain, counting it as rough terrain without being Fleet Footed." }
 },
 {
  "id": "berserk", "name": "Berserk", "cost": 2,
  "avail": { "type": "only", "list": ["lesser-warbeasts", "bellicose-foot", "ravenous-hordes"] },
  "conflicts": ["venomous", "bloodthirsty"],
  "text": { "flavor": "Frothing, shield-biting, funk-frenzied fighters who sometimes get a second hack in close combat.", "rule": "Any Attack die (not Defence or Shooting) that rolls a 6 counts as a hit and is rolled again; further 6s roll again, and so on. The rage subsides at or below half starting Strength Points (no more reroll of 6s). Cannot be combined with Venomous or Bloodthirsty." }
 },
 {
  "id": "bodkins", "name": "Bodkins", "cost": 3, "avail": { "type": "all" }, "needsShoot": true,
  "text": { "flavor": "Spike-like, armour-piercing arrowheads, or any particularly nasty, sharp, high-velocity missile.", "rule": "Any Shooting die (not Attack or Defence) that rolls a 6 causes 2 hits rather than 1, unless suffering the -1 range modifier." }
 },
 {
  "id": "brutal", "name": "Brutal", "cost": 1, "avail": { "type": "all" }, "leaderOnly": true,
  "text": { "flavor": "Leadership through bullying, cajoling, or ostentatiously dispatching hesitant underlings.", "rule": "Any friendly unit within 12\" of your Leader model may automatically pass a failed Rally activation by removing 1 Strength Point. Not usable if the Leader is Battered." }
 },
 {
  "id": "burrower", "name": "Burrower", "cost": 2,
  "avail": { "type": "only", "list": ["greater-warbeasts", "lesser-warbeasts"] },
  "orHasUpgrade": ["undead"], "nonLeaderOnly": true, "conflicts": ["sneakers"],
  "text": { "flavor": "Units that commute to the battlefield underground, springing up with a large element of surprise.", "rule": "Held in reserve, not deployed at the start. From turn three it may attempt an ordered Move (6+) while off-table; on a success, place it anywhere not within 6\" of an enemy. It cannot burrow back once deployed. Leaders cannot be Burrowers. Cannot be combined with Sneakers." }
 },
 {
  "id": "cannibalistic", "name": "Cannibalistic", "cost": 3, "avail": { "type": "all" },
  "text": { "flavor": "Units born hungry: a mid-battle snack rejuvenates their fighting spirit.", "rule": "Every time this unit inflicts any Strength Point loss on an enemy during an Attack (Attacking or Defending), it regains 1 lost Strength Point. May not rise above its starting value." }
 },
 {
  "id": "champion-hewing", "name": "Champion (Hewing)", "cost": 1,
  "avail": { "type": "except", "list": ["greater-warbeasts", "lesser-warbeasts"] },
  "conflicts": ["18-00-strength"],
  "text": { "flavor": "Simply the best, better than all the rest, with a blade to match.", "rule": "The unit may reroll one failed hit die when Attacking or Defending, even when Battered. Cannot be combined with 18/00 Strength. A unit may take both Champions for 2 army points total." }
 },
 {
  "id": "champion-eagle", "name": "Champion (Eagle-Eyed)", "cost": 1,
  "avail": { "type": "except", "list": ["greater-warbeasts", "lesser-warbeasts"] }, "needsShoot": true,
  "text": { "flavor": "A dead-eye shot who gives their unit a second chance at range.", "rule": "The unit may reroll one failed hit die when Shooting. A unit may take both Champions for 2 army points total." }
 },
 {
  "id": "chaotic", "name": "Chaotic", "cost": 1, "avail": { "type": "all" },
  "text": { "flavor": "Anarchic, tumultuous and disorganized (and possibly sprouting the odd cosmic tentacle).", "rule": "You must own a d12. For every in-game roll this unit would usually make on two dice, instead roll a single d12 and apply that result, removing the usual bell curve." }
 },
 {
  "id": "cleric", "name": "Cleric",
  "avail": { "type": "except", "list": ["light-riders", "greater-warbeasts", "lesser-warbeasts", "bellicose-foot", "scouts", "ravenous-hordes"] },
  "glory": true,
  "tiers": [
   { "label": "No Undead foe", "sub": "2 pts", "cost": 2, "desc": "Cost when the enemy Warband contains no Undead army points." },
   { "label": "Up to 50% Undead", "sub": "3 pts", "cost": 3, "desc": "Cost when up to half the enemy's army points are Undead." },
   { "label": "50%+ Undead", "sub": "4 pts", "cost": 4, "desc": "Cost when half or more of the enemy's army points are Undead." }
  ],
  "text": { "flavor": "Warriors of faith who smite the Undead until they become Proper-Dead-Dead.", "rule": "Counts as Courageous against any enemy. Against Undead units it counts as a Champion (choose Hewing or Eagle-Eyed) and is Repellent. A Warband including any Undead units cannot include a Cleric. Cost varies with how many Undead army points the enemy fields. If routed or destroyed by an Undead unit, your opponent gains 1 extra Glory." }
 },
 {
  "id": "slayer", "name": "Slayer",
  "avail": { "type": "except", "list": ["ravenous-hordes"] }, "glory": true,
  "tiers": [
   { "label": "Target below 50%", "sub": "2 pts", "cost": 2, "desc": "Cost when the enemy fields no army points of the chosen target type." },
   { "label": "Target up to 50%", "sub": "3 pts", "cost": 3, "desc": "Cost when up to half the enemy's army points are the target type." },
   { "label": "Target 50%+", "sub": "4 pts", "cost": 4, "desc": "Cost when half or more are the target type." }
  ],
  "text": { "flavor": "A less pious Cleric: choose a specific race or troop type to reap the benefits against.", "rule": "As Cleric, but against a chosen race or troop type instead of the Undead. Counts as Courageous against any enemy; against the target type it is a Champion and Repellent. Your Warband cannot include units of the target type. If routed by a target-type unit, your opponent gains 1 extra Glory." }
 },
 {
  "id": "concealment", "name": "Concealment", "cost": 3,
  "avail": { "type": "except", "list": ["elite-riders", "heavy-riders", "greater-warbeasts", "elite-foot", "heavy-foot"] },
  "nonLeaderOnly": true, "conflicts": ["flyer"],
  "text": { "flavor": "Invisibility, a special ring (it's always a ring), good fieldcraft, or simply lurking in the shadows.", "rule": "An enemy may only Shoot at, Attack, or Wild Charge this unit if it begins that action within 6\" (a Counter-charge may begin further away). It can still be targeted by Spells. For Scouts it combines with Hard to Target. Cannot be combined with Flyer." }
 },
 {
  "id": "courageous", "name": "Courageous", "cost": 2, "avail": { "type": "all" },
  "text": { "flavor": "Stolid warriors who stand firm when lesser units would waddle off, tufty tails between their legs.", "rule": "Automatically passes one Courage test per game. Decide before rolling; you no longer roll the dice. If the rolled number would matter, the unit counts as having rolled a 12." }
 },
 {
  "id": "cowardly", "name": "Cowardly", "cost": -1, "avail": { "type": "all" },
  "text": { "flavor": "Only too ready to heroically advance to the rear at the first sign of a setback.", "rule": "When required to Retreat, the unit moves its full movement distance rather than the usual half (affected by terrain). Cowardly Flyers Retreat their full distance plus the number of inches rolled on one die." }
 },
 {
  "id": "cursed", "name": "Cursed", "cost": -1, "avail": { "type": "all" },
  "text": { "flavor": "Destined to suffer more pain than those around them, whether by curse, ill omen or bad karma.", "rule": "When at least 1 hit is scored against this unit, an additional hit is scored (only 1 extra per action, regardless of the total)." }
 },
 {
  "id": "drums-and-flags", "name": "Drums and Flags", "cost": 2,
  "avail": { "type": "except", "list": ["greater-warbeasts", "lesser-warbeasts", "scouts", "ravenous-hordes"] },
  "glory": true,
  "text": { "flavor": "Wave those flags, hammer out Ant Music on empty skulls: it's good for morale.", "rule": "At least one model must carry a standard or musical instrument. The unit improves its Courage by 1 for the whole game. If destroyed or routed, your opponent gains 1 extra Glory." }
 },
 {
  "id": "exploder", "name": "Exploder", "cost": 2,
  "avail": { "type": "except", "list": ["scouts", "ravenous-hordes"] }, "nonLeaderOnly": true,
  "text": { "flavor": "When you've gotta go pop, you've gotta go pop.", "rule": "As an ordered activation on 5+ the unit explodes (a failure implodes it, destroyed, harming no one). The blast affects all units within 6\", resolved as a Shoot action hitting on 3+. Once exploded, remove the unit; it counts as destroyed." }
 },
 {
  "id": "fanatical", "name": "Fanatical", "cost": 2, "avail": { "type": "all" },
  "text": { "flavor": "Driven fighters, hard to discourage, who bounce back after taking casualties.", "rule": "The unit may reroll unsuccessful Rally activations but must abide by the second result." }
 },
 {
  "id": "fast", "name": "Fast", "cost": 1, "avail": { "type": "all" },
  "text": { "flavor": "More legs than a quadruped, magical winged boots, or an almighty leap.", "rule": "The unit's Maximum Movement is increased by 2\"." }
 },
 {
  "id": "fearful", "name": "Fearful", "cost": -1, "avail": { "type": "all" }, "notHasUpgrade": ["undead"],
  "conflicts": ["fearless"],
  "text": { "flavor": "Petrified of everything, even their own shadow.", "rule": "Every Courage test suffers -1 to the total; if Attacked by a Fearsome unit, Courage tests are taken at -2. Cannot be combined with Fearless." }
 },
 {
  "id": "fearless", "name": "Fearless", "cost": 1,
  "avail": { "type": "except", "list": ["ravenous-hordes"] }, "conflicts": ["fearful"],
  "text": { "flavor": "The stout-hearted hero (or the dim-witted stooge who doesn't know when to run).", "rule": "Fearless units ignore the effect of Fearsome enemy units. Cannot be combined with Fearful." }
 },
 {
  "id": "fearsome", "name": "Fearsome", "cost": 2,
  "avail": { "type": "except", "list": ["light-riders", "scouts"] },
  "text": { "flavor": "A bad-tempered walking octopus warrior with eight swords, or a cantankerous cockatrice.", "rule": "Courage tests caused by this unit Attacking (but not Shooting) suffer an additional -1. Two Fearsome units cancel the effect between them; Fearless and Undead opponents ignore it." }
 },
 {
  "id": "flyer", "name": "Flyer", "cost": 2, "avail": { "type": "all" }, "conflicts": ["concealment"],
  "text": { "flavor": "If the models have wings, field them as Flyers: better movement, but easier to spot and prone to Retreating.", "rule": "May move through friendly and enemy units (obeying the 3\" rule at move's end) and ignores terrain for movement and Attacks, never benefiting from cover. Easier to target with Shooting and Spells. After an Attack where both units remain in contact, the Flyer must Retreat (unless both are Flyers), moving its full distance. Cannot be combined with Concealment." }
 },
 {
  "id": "hatred", "name": "Hatred", "cost": 1, "avail": { "type": "all" },
  "text": { "flavor": "Like punks and hippies, or United and City, some tribes just don't get along.", "rule": "Before deployment, choose one race in the enemy Warband. This unit gains Wild Charge against all enemies of that race; if it already has Wild Charge, it automatically passes Wild Charge tests against them." }
 },
 {
  "id": "insipid", "name": "Insipid", "cost": -1, "avail": { "type": "all" }, "leaderOnly": true,
  "text": { "flavor": "A damp handshake and an ability to lurk at the back: the Dragon Rampant equivalent of weak lemon squash.", "rule": "Your Leader does not offer friendly units within 12\" a +1 Courage test bonus. This applies even when the Insipid Leader is Battered." }
 },
 {
  "id": "large", "name": "Large", "avail": { "type": "all" }, "spDelta": 2, "costByArmour": true,
  "text": { "flavor": "Literally bigger, or a unit with extra warriors: hardier and longer-lasting in combat.", "rule": "Add 2 Strength Points to the unit's starting value. Cost depends on Armour: 1 army point for Armour 1-2, 2 for Armour 3, 3 for Armour 4." }
 },
 {
  "id": "longer-range", "name": "Longer Range", "cost": 2, "avail": { "type": "all" }, "needsShoot": true,
  "text": { "flavor": "Superior technology, magical intervention, better eyesight, or accomplished technique.", "rule": "Increase the unit's range by 4\". Cannot be used by units equipped with Short Range Missiles." }
 },
 {
  "id": "lucky", "name": "Lucky", "cost": 3, "avail": { "type": "all" }, "limitPer24": 1,
  "text": { "flavor": "Unlikely luck, carpe diem moments, and deus ex machina plot twists.", "rule": "Once per game, force a reroll of any one set of dice by either player (any number of dice), for a unit within 12\" of the Lucky unit. You cannot reroll a reroll. Only one per complete 24 army points (four if your Warband is solely leprechauns)." }
 },
 {
  "id": "blessed-blades", "name": "Magical Arms: Blessed Blades", "cost": 4, "avail": { "type": "all" },
  "conflicts": ["enchanted-blades"], "limitPer24": 1, "glory": true,
  "text": { "flavor": "Excalibur, the Sword of Asnagar, Beowulf's Hrunting: the greatest named weapons, not everyday +1 swords.", "rule": "The unit rolls an additional three dice when Attacking or Defending, even when Battered, not reduced at half strength (15 or 9 dice). One per complete 24 army points. Cannot be combined with Enchanted Blades. If destroyed or routed, your opponent gains 1 extra Glory." }
 },
 {
  "id": "enchanted-blades", "name": "Magical Arms: Enchanted Blades", "cost": 3, "avail": { "type": "all" },
  "conflicts": ["blessed-blades"],
  "text": { "flavor": "Your everyday +1 magical sword: reliable, workaday enchantment.", "rule": "The unit rolls an additional two dice when Attacking or Defending, even when Battered, not reduced at half strength (14 or 8 dice). Cannot be combined with Blessed Blades." }
 },
 {
  "id": "magical-missiles", "name": "Magical Arms: Magical Missiles", "cost": 3, "avail": { "type": "all" }, "needsShoot": true,
  "text": { "flavor": "A super-powerful fireball hurled from the Mouth of Doom.", "rule": "The unit rolls an additional two dice when Shooting, not reduced at half strength (14 or 8 dice)." }
 },
 {
  "id": "mystical-armour", "name": "Magical Arms: Mystical Armour", "cost": 2, "avail": { "type": "all" },
  "text": { "flavor": "A wyrm-breath resistant shield, a jewel-encrusted breastplate, iron-hard belly scales, or uncanny agility.", "rule": "For every Strength Point lost, roll one die; on a 6 that lost Strength Point is cancelled and does no damage." }
 },
 {
  "id": "regeneration", "name": "Regeneration", "cost": 3,
  "avail": { "type": "only", "list": ["greater-warbeasts", "lesser-warbeasts", "elite-foot", "heavy-foot", "bellicose-foot", "ravenous-hordes"] },
  "text": { "flavor": "'Urgh, he's got an arm off.' 'Oh no, it's back on again.'", "rule": "On a successful Move activation, instead of moving the unit may remain in place and regain 1 lost Strength Point. May not rise above its starting value." }
 },
 {
  "id": "repellent", "name": "Repellent", "cost": 2, "avail": { "type": "all" },
  "text": { "flavor": "A repulsive, vile, festering heap of repugnance (or a goodly Aura of Light, if you prefer).", "rule": "Attack activation tests against this unit suffer -1 to the dice roll. This also applies to Wild Charges and Counter-charges against it." }
 },
 {
  "id": "ring-of-uncertain-power", "name": "Ring of Uncertain Power", "cost": 2,
  "avail": { "type": "except", "list": ["greater-warbeasts", "lesser-warbeasts", "ravenous-hordes"] },
  "conflicts": ["spellcaster"], "limitPerWarband": 1,
  "text": { "flavor": "Fickle magical rings, sometimes intent on causing the bearer more harm than good.", "rule": "The unit must use it every battle. After deployment, roll twice on the Ring of Uncertain Power table and apply the result for the battle (no reroll). If the effect is one the unit already has or cannot combine with, the ring stays leashed. One per Warband. Cannot be combined with Spellcaster." }
 },
 {
  "id": "slow", "name": "Slow", "cost": -1, "avail": { "type": "all" },
  "text": { "flavor": "Some... units... just... can't... keep... up.", "rule": "The unit's Maximum Movement is reduced by 2\"." }
 },
 {
  "id": "sneakers", "name": "Sneakers", "cost": 1,
  "avail": { "type": "only", "list": ["lesser-warbeasts", "light-foot", "bellicose-foot", "scouts", "ravenous-hordes"] },
  "conflicts": ["burrower"],
  "text": { "flavor": "Rubber-soled running shoes, camouflage, good fieldcraft, or the spring of a Reebok.", "rule": "After all units deploy but before the game starts, each Sneakers unit may make a single Move activation with no activation test. If both players have Sneakers, the Attacker moves theirs first. May be combined with Concealment." }
 },
 {
  "id": "spellcaster", "name": "Spellcaster",
  "avail": { "type": "only", "list": ["elite-riders", "heavy-riders", "greater-warbeasts", "elite-foot", "heavy-foot", "light-foot"] },
  "conflicts": ["spell-resistant", "super-spell-resistant", "ring-of-uncertain-power"],
  "tiers": [
   { "label": "Level 1", "sub": "1 colour", "powers": 1, "cost": 1, "desc": "Chooses one colour of magic." },
   { "label": "Level 2", "sub": "2 colours", "powers": 2, "cost": 2, "desc": "Chooses two colours of magic." },
   { "label": "Level 3", "sub": "3 colours", "powers": 3, "cost": 3, "desc": "Chooses three colours of magic." },
   { "label": "Level 4", "sub": "4 colours", "powers": 4, "cost": 4, "desc": "Chooses four colours of magic." }
  ],
  "text": { "flavor": "Wheezy boy wizards, powerful enchantresses, talking dragons and bearded robe-wearers.", "rule": "The unit may cast Spells. There are nine colours of magic; the Spellcaster Level equals how many colours it knows (Level 1 to 4). Choose colours before deployment; each grants all its Spells. Casting is an ordered activation meeting the Spell's Difficulty, at -1 if the caster is at or below half strength. Only one Spell may be active at a time. See the full Spellbook in the colour cards." }
 },
 {
  "id": "spell-resistant", "name": "Spell Resistant", "cost": 1, "avail": { "type": "all" },
  "conflicts": ["spellcaster", "super-spell-resistant"],
  "text": { "flavor": "A talisman, an aura, divine inspiration, or a bloody-minded refusal to believe in magic.", "rule": "If successfully targeted by any Spell, friendly or hostile, roll one die; on 5+ the Spell has no effect (the casting still counts as a success). Only affects Spells from a Spellcaster. Cannot be combined with Spellcaster or Super Spell Resistant." }
 },
 {
  "id": "super-spell-resistant", "name": "Super Spell Resistant", "cost": 2, "avail": { "type": "all" },
  "conflicts": ["spellcaster", "spell-resistant"],
  "text": { "flavor": "A stronger ward against the colours of magic.", "rule": "As Spell Resistant, but a Spell has no effect on a result of 4+ rather than 5+. Cannot be combined with Spellcaster or Spell Resistant." }
 },
 {
  "id": "divine-leadership", "name": "Divine Leadership", "cost": 2, "avail": { "type": "all" },
  "leaderOnly": true, "conflicts": ["spellcaster"],
  "text": { "flavor": "A holy Leader whose faith wards their whole Warband.", "rule": "All friendly units within 12\" of the Leader model (including the Leader's unit) gain Spell Resistant. Measured from the Leader model. Not usable while Battered, and only for a non-Spellcaster Leader. Units already Spell Resistant gain nothing more." }
 },
 {
  "id": "summoner", "name": "Summoner", "cost": 3,
  "avail": { "type": "except", "list": ["light-riders", "greater-warbeasts", "lesser-warbeasts", "bellicose-foot", "scouts", "ravenous-hordes"] },
  "text": { "flavor": "Raises allies from the ground, from thin air, or from the inside of a top hat.", "rule": "Chosen Summoned units (1-6 army points, not your Leader, Burrower, Cleric, Spellcaster or Sneakers; up to 50% of the Warband) start off-table. As an ordered activation, Summon one per turn: 5+ for a 1-3 point unit, 6+ for a 4-6 point unit, at -1 if the Summoner is at or below half strength. Place within 12\" of the Summoner and no closer than 6\" to an enemy." }
 },
 {
  "id": "undead", "name": "Undead", "cost": 0, "avail": { "type": "all" },
  "text": { "flavor": "Vampires, skellies and wispy wights: impossible to Batter, and not affected by Fear.", "rule": "Courage value becomes 0+, so the unit never becomes Battered but still routs on a negative final score. Ignores Fearsome units. Hits inflicted during Attacks (Attacking or Defending) round up rather than down when working out Strength Point loss (3 hits on Armour 2 costs 2 Strength Points). Does not apply to Shooting." }
 },
 {
  "id": "unstoppable-march", "name": "Unstoppable March of the Dead", "cost": 3, "avail": { "type": "all" },
  "leaderOnly": true,
  "text": { "flavor": "The relentless advance of an all-Undead Warband.", "rule": "For an all-Undead Warband only. Your Warband only takes Courage tests when Strength Points are lost from Attacking or Shooting, and does not subtract 1 from Courage tests when at half or lower army points. Still applies even if the Leader's unit is destroyed, routed or Battered." }
 },
 {
  "id": "venomous", "name": "Venomous", "cost": 3, "avail": { "type": "all" },
  "conflicts": ["berserk", "bloodthirsty"],
  "text": { "flavor": "'Ouch, that hurt. And now I'm beginning to feel quite dizzzzzz...'", "rule": "Any Attack die (not Defence or Shooting) that rolls a 6 causes 2 hits rather than 1. Cannot be combined with Berserk or Bloodthirsty." }
 },
 {
  "id": "bloodthirsty", "name": "Bloodthirsty", "cost": 3, "avail": { "type": "all" },
  "conflicts": ["berserk", "venomous"],
  "text": { "flavor": "Superior training, sharper teeth, or a big ol' helping of ol' fashioned nastiness. A thematic rename of Venomous.", "rule": "Has the same effect as Venomous: any Attack die (not Defence or Shooting) that rolls a 6 causes 2 hits. Cannot be combined with Berserk or Venomous." }
 },
 {
  "id": "weak", "name": "Weak", "cost": -1, "avail": { "type": "all" },
  "text": { "flavor": "Smaller, timid or badly equipped specimens, or an unwilling militia.", "rule": "This unit rolls 1 fighting die less in all Attacks and when Shooting (11 or 5 dice)." }
 },
 {
  "id": "well-led", "name": "Well Led", "cost": 1,
  "avail": { "type": "except", "list": ["greater-warbeasts", "lesser-warbeasts", "ravenous-hordes"] },
  "nonLeaderOnly": true,
  "text": { "flavor": "Cut from finer cloth: they bathe more regularly and drink less booze.", "rule": "Once per game, reroll a single Attack, Move, Shoot or Courage test, or a Wild Charge, Counter-charge, Evade or Skirmish activation. A reroll may never be rerolled." }
 },
 {
  "id": "were-creature", "name": "Were-Creature", "cost": 2,
  "avail": { "type": "only", "list": ["elite-foot", "heavy-foot", "light-foot", "bellicose-foot"] },
  "nonLeaderOnly": true,
  "text": { "flavor": "'You've seen a lycanthrope? Where?' 'Yes, it was.'", "rule": "The unit is one of the listed Foot types plus a Lesser Warbeasts form (model both). Cost is 2 army points plus the Foot unit's cost. It starts untransformed; each time it takes at least 1 Strength Point of damage it tests (transform on a 6, or 5-6 if 3+ Strength Points were lost in one action), replacing it with a full-strength Lesser Warbeasts unit. Upgrades are lost on transforming and the Lesser Warbeasts form takes none." }
 },
 {
  "id": "wise-old-owl", "name": "Wise Old Owl", "cost": 1, "avail": { "type": "all" }, "leaderOnly": true,
  "text": { "flavor": "Strategic insight, mystical visions, or a magical orb to see afar.", "rule": "When dicing to decide Attacker and Defender, you may add or subtract 1 from your total (whichever you prefer) after seeing both players' rolls." }
 }
];

/* Standard Warband sizes. 30 is the 2e default; 24 and 36 are also common. */
export const BUDGET_PRESETS = [24, 30, 36];
export const DEFAULT_BUDGET = 30;

export const UNIT_BY_ID = Object.fromEntries(UNIT_TYPES.map((u) => [u.id, u]));
export const XENO_BY_ID = Object.fromEntries(XENO_RULES.map((x) => [x.id, x]));

/* ---------------- THE SPELLBOOK (Chapter 4) ----------------
   Nine colours of magic. A Spellcaster's Level equals how many colours it knows;
   choosing a colour grants all of its Spells. Each entry is a colour holding one
   or more Spells. */
export const SPELL_COLOURS = [
 { name: "Amber", spells: [
   { name: "Almighty Prod!", difficulty: "6+", target: "Friendly unit within 18\".", duration: "Until the target fails an ordered activation roll.", effect: "When the target fails an ordered activation roll it may immediately reroll the test once; the Spell then ends whether or not the reroll succeeds. Cannot target the Spellcaster itself." },
   { name: "Be Brave!", difficulty: "6+", target: "Friendly unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target may reroll all failed Courage tests (once per test). Cannot target the Spellcaster itself." }
 ] },
 { name: "Crimson", spells: [
   { name: "Take That You Rotter!", difficulty: "7+", target: "Enemy unit within 18\".", duration: "One immediate Shoot action.", effect: "A magical attack of flame, electricity, poison or whatever suits your Spellcaster, resolved as a Shoot action with a Shoot Value of 5+ (-1 to dice for targets over 12\" away)." },
   { name: "Utter Chaos!", difficulty: "6+", target: "Any unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target gains the Chaotic rule; you must supply the d12. Cannot target the Spellcaster itself." }
 ] },
 { name: "Emerald", spells: [
   { name: "Heal Thee!", difficulty: "6+", target: "Friendly unit within 18\".", duration: "One immediate action.", effect: "Restore 1 Strength Point to the target (never above its starting value); on a roll of 8+, restore 2. Cannot target the Spellcaster itself." },
   { name: "Sod-Off Spell!", difficulty: "8+", target: "Any bespelled unit within 18\".", duration: "Immediate cancellation.", effect: "Cancels any Spell currently affecting the target. Cannot target the Spellcaster itself. A difficult Spell to cast." }
 ] },
 { name: "Indigo", spells: [
   { name: "Superglue You!", difficulty: "7+", target: "Self or any unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target cannot move at all, not even to Retreat; enemies bounce off it instead." },
   { name: "You Shall Not Pass!", difficulty: "8+", target: "A spot within 12\" and line of sight, no closer than 3\" to any unit.", duration: "Until the end of your next activation phase.", effect: "Place an impassable barrier, a straight line 1\" thick and 12\" long, that blocks line of sight and all movement, Attacks, Shooting and Spells. A difficult Spell to cast." }
 ] },
 { name: "Jade", spells: [
   { name: "Bog Thee!", difficulty: "7+", target: "Enemy unit within 18\".", duration: "Until the end of your next activation phase.", effect: "A quagmire springs up: any movement or combat the target is involved in counts as being in rough terrain. No effect if it is already in real rough terrain." },
   { name: "Spring Heeled!", difficulty: "6+", target: "Self or friendly unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target does not halve its Move distance in rough terrain." },
   { name: "You Have Wings!", difficulty: "7+", target: "Self or friendly unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target gains the Flyer rule." }
 ] },
 { name: "Magenta", spells: [
   { name: "Sharp Blades!", difficulty: "7+", target: "Self or friendly unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target may reroll all failed Attack or Defence dice, even when Battered." },
   { name: "Sharp Darts!", difficulty: "7+", target: "Self or friendly unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target may reroll all failed Shooting dice." },
   { name: "Stronger Shields!", difficulty: "7+", target: "Self or friendly unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target's Armour increases by 1." }
 ] },
 { name: "Saffron", spells: [
   { name: "Dragon's Breath!", difficulty: "6+", target: "Self or any unit within 18\".", duration: "Until the end of your next activation phase.", effect: "A wall of mist surrounds the target; it may not Shoot or be Shot at (but may still be targeted by Spells) and moves as normal, the mist moving with it." },
   { name: "Go Wild!", difficulty: "6+", target: "Self or friendly unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target gains the Berserk rule, even below half strength and even if Berserk is not usually available. Reinvigorates a Berserk unit already at or below half strength." }
 ] },
 { name: "Turquoise", spells: [
   { name: "Teleport Thee!", difficulty: "7+", target: "Self or any friendly unit within 12\".", duration: "Immediate.", effect: "Move the target up to 12\" in any direction (not off-table, not into impassable terrain, no closer than 3\" to another unit). Does not count as the target's activation and may target Battered units." },
   { name: "Transpose Thee!", difficulty: "8+", target: "Any two units within 12\" of the caster and of each other.", duration: "Immediate.", effect: "The two target units swap places (maintaining cohesion, no closer than 3\" to others). Friends or enemies, but not the Spellcaster. A difficult Spell to cast." }
 ] },
 { name: "Violet", spells: [
   { name: "Befuddle Thee!", difficulty: "8+", target: "Enemy unit within 18\".", duration: "Until the target Rallies.", effect: "Automatically Batters a non-Battered target. May not be used on an already Battered or Undead unit. A difficult Spell to cast." },
   { name: "Curse Thee!", difficulty: "7+", target: "Enemy unit within 18\".", duration: "Until the end of your next activation phase.", effect: "The target gains the Cursed rule." }
 ] }
];

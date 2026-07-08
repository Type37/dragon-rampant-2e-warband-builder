/* Fantasy name pools for Dragon Rampant 2e. These feed the "roll a random name"
   buttons for Warbands and units. ALL_GENRES keeps the shape the app expects
   (genres -> groups -> factions -> pool); the flattened pool is what gets used. */

const WARBAND_NAMES = [
  "The Foul-Wind Goblins", "Rottingutt's Malodorous Horde", "The Ninefold Legion",
  "Warriors of the Ashen Crown", "The Gilded Company", "Hosts of the Pale King",
  "The Bramblewild Kin", "Sons of the Smouldering Peak", "The Drowned Court",
  "Vanguard of the Silver Thorn", "The Marrow Legion", "Wyrms of the Second Dawn",
  "The Hollow Host", "Riders of the Broken Moon", "The Emberclad",
  "Covenant of the Green Flame", "The Tattered Banners", "Wolves of Winter's Edge",
  "The Sunken Diadem", "Feywild Marauders", "The Obsidian Reach",
  "Legion of the Weeping Gate", "The Barrow-Wardens", "Storm of the Iron Fens",
  "The Thrice-Cursed", "Heralds of the Amber Sun", "The Rustfang Tribe",
  "Court of Antlers", "The Glass Serpents", "Banners of the Dawnrazor",
];

const HERO_NAMES = [
  "Rottingutt the Rank", "Ardenuff the Slayer", "Ser Caldros of the Vale",
  "Morgause Nightweaver", "Grimjaw Bonechewer", "The Lady Vane",
  "Uthred One-Eye", "Piskiewhistle the Sly", "Bramblehart", "Old Nan Gwynn",
  "Vashti the Bright", "Thane Tostig", "Dunmor the Undying", "Sable the Wanderer",
  "Colin the Summoner", "Hexwarden Ysolt", "Baelgor Flamewreathed", "Meg of the Marsh",
  "Sir Percivale Prim", "The Gore-Crow", "Aldith Ravenshield", "Skarn the Butcher",
  "Elowen Thornsong", "Duke Malebranche", "Wolfric Greymane",
];

const UNIT_NAMES = [
  "The Iron Vanguard", "Foul-Wind Warriors", "The Pricklers", "Wolf Rider Lancers",
  "Wolf Rider Archers", "The Barrow Guard", "Emberclad Spears", "The Snarling Pack",
  "Bogtrotter Skirmishers", "The Gilded Lances", "Marsh Wraiths", "The Bloodoaks",
  "Cragfoot Trolls", "The Whispering Bows", "Sunder's Chosen", "Rimefang Wolves",
  "The Tattered Ranks", "Grave-Risen", "Thornwood Scouts", "The Ashen Riders",
  "Bulwark of the Vale", "The Hungry Dead", "Pyre-Drakes", "The Moon-Touched",
  "Fenland Levies", "The Dawn Blades", "Screaming Kites", "The Dread Chariots",
];

/* one flat pool the "roll a name" links draw from */
const NAME_GENRES = [
  { name: "Fantasy", groups: [
    { name: "Warbands", factions: [{ name: "Warbands", pool: WARBAND_NAMES }] },
    { name: "Heroes", factions: [{ name: "Heroes", pool: HERO_NAMES }] },
    { name: "Units", factions: [{ name: "Units", pool: UNIT_NAMES }] },
  ] },
];
const EXTRA_GENRES = [];

export const ALL_GENRES = [...NAME_GENRES, ...EXTRA_GENRES];

/* pick a random entry from a pool, biased away from an avoid value */
export function randomName(pool, avoid) {
  if (!pool || !pool.length) return "";
  if (pool.length === 1) return pool[0];
  let n = pool[Math.floor(Math.random() * pool.length)];
  if (n === avoid) n = pool[(pool.indexOf(n) + 1) % pool.length];
  return n;
}

/* Quick rules reference, transcribed from Dragon Rampant 2e (Osprey Games, 2024).
   Grouped for the at-the-table reference modal. Data, not prose. */

export const RULES_REFERENCE = [
  { cat: "Activation", title: "Activation sequence", items: [
    "1. Rally Battered units.",
    "2. Activate Wild Charges.",
    "3. Order other activations (Move, Shoot, Attack, and other actions).",
    "Resolve each activation in full before choosing the next unit.",
    "Each turn a unit may test to activate only once, except a failed Wild Charge, which may still test for an ordered Move.",
  ] },
  { cat: "Activation", title: "The activation test", items: [
    "Announce the action, then roll two dice and total them.",
    "Equal or beat the unit's target number for that action to succeed.",
    "On a success, carry out the action in full. On a failure, your activation phase ends.",
    "A free action still succeeds automatically but ending actions early is your choice.",
  ] },
  { cat: "Activation", title: "Leader reroll", items: [
    "Once per turn, reroll one failed Move, Attack or Shoot test within 12\" of the Leader's model.",
    "Measured from the Leader model itself, and unusable while the Leader is Battered.",
    "One reroll per Leader per turn, not one per unit. It cannot reroll Rally, Wild Charge or Spellcasting.",
  ] },
  { cat: "Activation", title: "Wild Charge", items: [
    "A unit with Wild Charge must test to Attack any enemy within its Attack range during the Wild Charge step.",
    "If the test fails, it stays put but may still test for an ordered Move later (no other action).",
    "A unit may not Wild Charge while Battered.",
  ] },
  { cat: "Movement", title: "Moving", items: [
    "Move each model up to the unit's Maximum Movement; keep unit cohesion.",
    "A unit may not move within 3\" of another unit unless it is Attacking it.",
    "Rough terrain halves movement unless the unit is Fleet Footed (or has a rule that says otherwise).",
    "Impassable terrain cannot be entered or crossed except by rules that allow it (Flyer, Amphibious, and so on).",
  ] },
  { cat: "Movement", title: "Maximum Movement by type", items: [
    "Light Riders: 12\". Lesser Warbeasts: 12\".",
    "Elite, Heavy and Greater Warbeast Riders: 10\".",
    "Light Foot, Bellicose Foot, Scouts: 8\".",
    "Elite, Heavy, Missile and Ravenous Foot: 6\".",
    "Fast adds 2\"; Slow removes 2\".",
  ] },
  { cat: "Shooting", title: "Choosing a target", items: [
    "Line of sight is all around, with no firing arcs.",
    "An enemy that could contact you next turn must be targeted before one that could not.",
    "All shots go at one target unit; shooting cannot be split.",
    "Targets more than 12\" away are harder to hit.",
  ] },
  { cat: "Shooting", title: "Resolving shooting", items: [
    "Roll 12 dice if the unit is above half its starting Strength Points.",
    "Roll 6 dice if it is at half its starting Strength Points or below.",
    "Subtract 1 from each die if the target is 12\" or more away.",
    "Any die equal to or better than the Shoot Value is a hit; cover raises the target's Armour instead.",
    "The target tests Courage if it loses any Strength Points.",
  ] },
  { cat: "Shooting", title: "Reducing Strength Points", items: [
    "Total the hits and divide by the target's Armour, rounding down, to get Strength Points lost.",
    "Undead round up rather than down when losing Strength Points to Attacks (not Shooting).",
  ] },
  { cat: "Attacks", title: "Attacking", items: [
    "Only a unit at least one model can see may be Attacked; only one unit may be contacted.",
    "The target may Counter-charge or Evade if it has the rule, testing at 7+ (one reaction per Attack).",
    "Move the Attacking unit into contact; all models in both units fight.",
    "Attacker uses its Attack Value, defender uses its Defence Value.",
  ] },
  { cat: "Attacks", title: "Resolving attacks", items: [
    "Roll 12 dice if above half starting Strength Points, 6 dice if at half or below.",
    "In rough terrain both fight at Attack and Defence 5+ and Armour 2, unless they have Ranger.",
    "A Battered unit only ever hits on a 6.",
    "Both sides reduce Strength Points, then test Courage if they lost any.",
    "If both units are still in contact, one must Retreat.",
  ] },
  { cat: "Attacks", title: "Ending an attack", items: [
    "The unit that lost the most Strength Points this Attack Retreats.",
    "If losses are equal (or nil), the Attacking unit Retreats.",
    "A Wall of Spears that is not Battered nor below 6 Strength Points bounces the enemy back instead.",
  ] },
  { cat: "Courage", title: "When to test Courage", items: [
    "The unit lost Strength Points from Attacking or Shooting.",
    "It is attempting to Rally off a Battered marker.",
    "It becomes your only unit left on the table.",
    "Your Leader is killed or flees the table.",
    "Your units in play drop to half or less of your Warband's full army points.",
    "Losing Strength Points to a Courage test does not trigger another test.",
  ] },
  { cat: "Courage", title: "How to test Courage", items: [
    "Roll two dice and total them.",
    "Subtract 1 for every Strength Point the unit has lost so far this game.",
    "Subtract 1 if your units in play are at half or less of your full army points.",
    "Add 1 if the Leader's model is within 12\" (including its own unit), unless the Leader is Battered.",
    "Equal or beat the unit's Courage score for no effect (a Rally removes the marker); below it, you fail.",
  ] },
  { cat: "Courage", title: "Failing a Courage test", items: [
    "Final score above 0: the unit Retreats, then becomes Battered.",
    "Final score 0 or below: the unit routs. Remove it immediately.",
    "A Battered unit that is Battered again loses an extra Strength Point on top of Retreating.",
    "Undead have Courage 0+, so they never become Battered but still rout on a negative score.",
  ] },
  { cat: "Retreat", title: "Retreating", items: [
    "Move half the unit's Maximum Movement, affected by terrain (Cowardly units move the full distance).",
    "If any model can reach a table edge, the whole unit heads that way and is removed as routed.",
    "Otherwise move directly away from the closest enemy, never within 3\" of any other unit.",
    "If it cannot move the full distance, it loses Strength Points equal to the unmoved inches.",
  ] },
  { cat: "Retreat", title: "Battered units", items: [
    "Must test Courage to Rally at the start of the owner's next activation phase.",
    "May not activate other than to Rally, and may only move from a failed Courage test.",
    "Only hits on a 6 if Attacked while Battered.",
    "May not Wild Charge, Counter-charge, Evade, or cast Spells while Battered.",
  ] },
];

export const RULES_CATS = ["Activation", "Movement", "Shooting", "Attacks", "Courage", "Retreat"];

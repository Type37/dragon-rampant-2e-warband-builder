# Dragon Rampant 2e Warband Builder

A free browser tool for building a Dragon Rampant (second edition) warband and getting it to
the table. Made by WarLore.

**Use it:** https://type37.github.io/dragon-rampant-2e-warband-builder/

## Why this exists

Dragon Rampant is a joy to play, and I want more of my friends playing tabletop games. The
tedious part is writing the list on paper and adding up the army points by hand, so I got the
computer to do that part. You pick your units, it keeps the list legal and totals the points as
you go, and then you print it and play.

## What it does

- Build a Warband from all thirteen unit types in the book. Every unit option and fantastical
  upgrade is there, with the full rules text.
- Points update live and the list checks itself (unit count, per-unit cost, one Leader, and the
  caps on upgrades like 18/00 Strength and Lucky), so you can't accidentally bring something
  illegal.
- Add Spellcasters and pick their colours of magic; the full Spellbook is built in.
- Designate your Leader (free) and craft them with Leader-only fantastical upgrades.
- Ready-made lists to start from, including the rulebook's sample Warband at 24, 30 and 36 army
  points.
- A print sheet laid out for actual use at the table, with an optional Spells section.
- An at-the-table tracker for damage, activations, Battered status and turns.
- Share a list as a link. No account, no login, works on a phone.

## Running it yourself

Small Vite and React app, almost all of it in one file (`src/App.jsx`), no backend.
Node 18 or newer.

- `npm install` to set up
- `npm run dev` for a local server
- `npm run build` for a production build into `dist/`

Pushing to `main` deploys it to GitHub Pages on its own.

## Credits and the legal bit

Dragon Rampant is by Daniel Mersey, published by Osprey Games. This is a fan tool. It is
unofficial and not affiliated with Osprey. If you like it,
[buy the game](https://www.ospreypublishing.com/us/dragon-rampant-second-edition-9781472858672/).

Fonts are open source from [Velvetyne](https://velvetyne.fr) under the SIL Open Font License,
and the license texts ship in `public/fonts/`.

## Feedback

Bug, feature idea, or a stat I got wrong? Let me know: warlore1@outlook.com, or through the
WarLore links at https://linktr.ee/warlore

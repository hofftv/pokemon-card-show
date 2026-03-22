# Pokémon Card Show — Shopping Checklist App

## What This Is

A mobile-friendly web app (designed for iPhone) that Hoff and his 5-year-old daughter Sloane use at Pokémon TCG card shows. It's a visual shopping checklist — card artwork, prices, and checkboxes. Deployed on Vercel, shared via GitHub.

## Who You're Working With

Hoff is NOT a coder. He's a creative director. Show a plan, get approval, then build. Explain decisions in plain language.

## The App

### What it does
- Displays a visual checklist of ~111 Pokémon cards organized by Pokémon character
- Each card shows: the card artwork (image), card name, set info, target price range, and notes
- Tap to check off a card when purchased (enter price paid)
- Tracks total spent vs. budget with a progress bar
- Works offline (service worker caches images and app files)

### Current features
- **Tier filters**: All, High End, Mid-Tier, Budget, Remaining (unpurchased)
- **Type filters**: IR, Full Art, Trainer Gallery, Holo, Reverse Holo, Shiny, ex/V
- **Combined filtering**: Tier + type filters work together (e.g. "High End" + "IR")
- **Single scrolling pill bar**: All filters in one horizontal-scrollable row with a divider between tier and type
- **Search**: Real-time text search across Pokémon names, card names, sets, and notes
- **Expand/Collapse All**: Icon button (⊞/⊟) in the header
- **Reorder sections**: Icon button (↕) in the header, drag sections to customize order
- **Sealed Product Reference**: Collapsible quick-reference for booster pack/bundle/ETB pricing
- **Rarity Dictionary**: Collapsible guide to card rarity types and typical prices
- **Pokedex themes**: Toggle between Dark Dex and Light Dex via header button
  - Dark Dex: Dark backgrounds, red accents, indicator lights
  - Light Dex: Red Pokedex header with blue lens, cream background, white cards

### Design
- **iPhone-first.** Big tap targets, one-handed operation, works in bright/dim lighting
- **Visual.** Card images are prominent — Sloane helps spot cards by picture
- **Grouped by Pokémon.** Each character is a collapsible section with cards underneath
- **Price tiers color-coded.** Red (High End), Orange (Mid-Tier), Green (Budget)
- **Pokedex aesthetic.** Red frame, indicator lights, blue lens (Light Dex), chunky borders

### Tech stack
- Zero dependencies, zero build step
- Single HTML file (`index.html`) with embedded CSS and JS
- Separate card data file (`cards.js`) — easy to update without touching app logic
- Service worker (`sw.js`) for offline support
- PWA manifest (`manifest.json`)
- Deployed on Vercel: https://pokemon-cards-xi-liard.vercel.app
- GitHub: https://github.com/hofftv/pokemon-card-show

### Card data model
Each Pokémon entry in `cards.js` has:
- `name`: display name (e.g. "Dratini, Dragonair & Dragonite")
- `dexNum`: Pokédex number for the sprite image (base form for evolution families). Sprites load from PokeAPI: `SPRITE_URL + dexNum + '.png'`
- `warn` (optional): warning text shown in header
- `cards[]`: array of card objects, each with:
  - `tier`: "high" / "mid" / "budget"
  - `type`: "ir" / "fullart" / "tg" / "holo" / "reverseholo" / "shiny" / "exv"
  - `name`, `set`, `price` [min, max], `note` (optional), `img` (URL)

### How to update cards
1. Edit `cards.js` — add/remove/modify card objects
2. Deploy: `npx vercel --yes --prod` from this folder
3. Or push to GitHub (auto-deploys via Vercel)

### How to update the service worker cache
Bump the version number in `sw.js` (e.g. `pokemon-card-show-v6` → `v7`) to force users to get fresh files.

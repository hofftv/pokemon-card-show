# Pokémon Card Show — Shopping Checklist App

## What This Is

A mobile-friendly web app (designed for iPhone Safari) that Hoff and his 5-year-old daughter Sloane will use at a Pokémon TCG card show this weekend. It's a visual shopping checklist — card artwork, prices, and checkboxes.

## Who You're Working With

Hoff is NOT a coder. He's a creative director. Show a plan, get approval, then build. Explain decisions in plain language.

## The App

### What it does
- Displays a visual checklist of Pokémon cards organized by Pokémon character
- Each card shows: the card artwork (image), card name, set info, target price range, and a "don't pay more than" max price
- Tap to check off a card when purchased
- Tracks total spent vs. budget
- Works offline (they'll be at a fairgrounds — cell signal may be spotty)

### Design requirements
- **iPhone-first (Chrome browser).** This will be used on a phone at the show. Big tap targets, easy to scroll, easy to read in bright outdoor/indoor lighting.
- **Visual.** Sloane is 5 — she'll help spot cards by looking at the pictures. Card images should be prominent.
- **Grouped by Pokémon.** Each character (Snorlax, Pikachu, Eevee, etc.) is a section with its High End, Mid-Tier, and Budget options listed underneath.
- **Quick check-off.** One tap to mark a card as purchased. Show a simple total of what's been spent.
- **Price tiers color-coded.** High End, Mid-Tier, and Budget should be visually distinct at a glance.

### Card data
The full card list with pricing is in `card_list.txt` in this folder. It has 16 Pokémon, each with 3 tiers (High End, Mid-Tier, Budget) — roughly 48 cards total. Prices, set names, and notes are all included.

### Card images
Use the Pokémon TCG API (https://pokemontcg.io/) or TCGPlayer images to pull card artwork. If the API doesn't have a specific card, use a placeholder or the Pokémon's general artwork. The API is free and doesn't require authentication for basic lookups.

### Offline support
Add a service worker or cache the page so it works without internet. The fairgrounds may have weak signal. All card images should be cached on first load.

### Tech approach
Keep it simple — this is a weekend project, not a production app. A single-page HTML file with embedded CSS and JS would be totally fine. Or a simple React app. Whatever gets it done fast and works great on an iPhone. No backend needed — all data is static.

## Sealed Product Quick Reference

Include a small reference section at the top or bottom for sealed product pricing:
- Booster Packs: Target $3.50–$4.00 each
- Booster Bundles (6 packs): Target $20–$23
- Elite Trainer Boxes: Target $35–$40
- Reminder: Always offer cash. Avoid Evolving Skies, 151, and Paldean Fates (premium prices).

## Deliverable

A working app that Hoff can open on his iPhone in Chrome. Either:
1. A single HTML file he can open directly, OR
2. A simple app deployed to Vercel (he already has an account)

Either way, it needs to work on iPhone Chrome and ideally work offline.

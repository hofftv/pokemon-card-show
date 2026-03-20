# Pokémon Card Show — Product Requirements Document

**Version:** 2.0
**Last Updated:** 2026-03-20
**Status:** Shipped (v2 live at pokemon-cards-xi-liard.vercel.app)

---

## What This Is

A mobile-first shopping checklist web app for Pokémon TCG card shows. Hoff and his 5-year-old daughter Sloane use it on an iPhone to browse card artwork, track purchases, and stay on budget while shopping at fairground card shows.

## Who It's For

- **Primary User:** Hoff — browses cards, checks prices, marks purchases, tracks budget
- **Secondary User:** Sloane (age 5) — spots cards by looking at the pictures on the phone
- **Environment:** Loud, crowded fairground. Bright lighting. One hand on phone, one hand flipping through card bins. Possibly weak or no cell signal.

---

## Core Features

### Card Checklist
- 32 Pokémon characters, each with 3–4 cards at different price tiers (97 cards total)
- Every card shows: artwork image, name, set info, tier badge (color-coded), target price range, and optional notes
- Cards are organized into collapsible sections by Pokémon character
- Sections show emoji, name, and a "bought/total" progress badge

### Purchase Tracking
- Tap a card to open a price entry modal
- Modal pre-fills with the midpoint of the target price range
- Confirm to mark as purchased — card dims, shows checkmark and "Paid $X.XX"
- Tap again to update the price or remove the purchase
- All purchases persist across page reloads (localStorage)

### Budget Dashboard
- Sticky header shows: total dollars spent, cards purchased count (X/97), and a visual progress bar
- Updates in real-time as cards are checked off
- **Budget ceiling** — tap "Set Budget" to enter a spending limit. Progress bar changes color: green (under 75%), orange (75–90%), red (90%+), pulsing red (over budget). Header shows "$X / $Y" format.
- **Reset All** — button in header opens a confirmation modal to clear all purchases and spending data

### Filters & Search
- **Tier Filters:** All, High End, Mid-Tier, Budget, Remaining (unpurchased only)
- **Search:** Real-time text search across Pokémon names, card names, set names, and notes. Searching "Cosmic Eclipse" finds matching cards across multiple Pokémon sections. Matching sections auto-expand with only relevant cards shown.
- **Expand/Collapse All:** One button toggles all sections open or closed

### Reorder Mode
- Toggle "Reorder" to show up/down arrows on each section
- Drag Pokémon into whatever order makes sense for the show layout
- Custom order persists in localStorage using Pokémon names (not indices), so adding/removing Pokémon won't break saved order

### Reference Sections (Collapsible)
- **Sealed Product Quick Reference:** Target prices for booster packs, bundles, and ETBs plus a reminder to offer cash and avoid premium sets
- **Rarity Dictionary:** Plain-English definitions of Holo, Reverse Holo, V/ex/VSTAR/VMAX, Full Art, IR/TG, and SIR/Alt Art with typical price ranges for each

### Offline Support
- Service worker caches all HTML, JS, and card images on first visit
- Cache-first strategy for images, network-first for app files
- Works fully offline after one WiFi scroll-through

### PWA / Add-to-Homescreen
- Web app manifest for installable PWA experience
- One-time banner on first visit: "Add to Home Screen for quick access at the show"
- Banner dismisses permanently after tapping "Got it"
- Apple meta tags for homescreen icon (lightning bolt on dark background)

---

## Technical Architecture

### Stack
- **Zero dependencies.** Pure HTML, CSS, and JavaScript. No frameworks, no build step.
- Single `index.html` (24 KB) with embedded CSS and JS
- Separate `cards.js` (28 KB) for card data — easy to edit without touching app logic
- `sw.js` (1.7 KB) service worker for offline caching
- `manifest.json` for PWA / add-to-homescreen support
- Deployed to Vercel as a static site

### Why This Stack
A card show happens once and you need it to work. No npm install failures, no build errors, no framework updates breaking things the night before. One HTML file, one data file, one service worker. Open the URL and it works.

### Data Structure
```javascript
// cards.js
const POKEMON = [
  {
    name: "Snorlax",
    emoji: "💤",
    warn: "Optional warning text",  // optional
    cards: [
      {
        tier: "high",              // "high", "mid", or "budget"
        name: "Snorlax Promo",
        set: "151 ETB Promo #051",
        price: [25, 30],           // [low, high] target range
        note: "Haggle hard!",      // optional
        img: "https://images.pokemontcg.io/svp/51.png"
      }
    ]
  }
];
```

### Card Images
- All artwork pulled from the Pokémon TCG API (pokemontcg.io) — free, no auth required
- Image URL pattern: `https://images.pokemontcg.io/{setId}/{number}.png`
- SVG placeholder renders if an image fails to load

### State Management
- `localStorage.pokeBought` — purchase data (persists across sessions)
- `localStorage.pokeOrder` — custom section order as Pokémon names (persists across sessions)
- `localStorage.pokeBudget` — budget ceiling amount (persists across sessions)
- `localStorage.pokeHomescreenDismissed` — whether homescreen banner was dismissed
- `sessionStorage.pokeOpen` — which sections are expanded (resets on tab close)

### Deployment
- Hosted on Vercel (free tier)
- Deploy command: `vercel --yes --prod`
- URL: pokemon-cards-xi-liard.vercel.app

---

## Design

### Philosophy
This app is used standing up, in a crowd, with a 5-year-old tugging on your arm. Every design decision optimizes for:
1. **Glanceability** — Color-coded tiers, big images, clear prices
2. **One-handed operation** — Big tap targets, no swipe gestures, no tiny buttons
3. **Speed** — Instant load, instant filter, instant purchase toggle
4. **Sloane-friendliness** — Card artwork is prominent so a 5-year-old can spot matches

### Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#1a1a2e` | Dark navy base |
| Surface | `#16213e` | Card/section backgrounds |
| Accent | `#00d4ff` | Cyan — headers, buttons, progress bar |
| High End | `#e94560` | Hot pink tier badge |
| Mid-Tier | `#f5a623` | Orange tier badge |
| Budget | `#2ecc71` | Green tier badge |
| Bought | `#2a4a2a` | Dark green overlay on purchased cards |
| Text | `#e8e8e8` | Primary text |
| Text Dim | `#8899aa` | Secondary/muted text |

### Typography
System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`). No custom fonts — fast load, no FOUT.

### Mobile-First
- Designed for iPhone Safari/Chrome (375px–480px)
- Safe area insets for notch and home indicator
- No user-select, no tap highlight (feels native)
- Lazy-loaded images
- Max-width 480px on tablets

---

## How to Update for the Next Show

### Adding or Changing Cards
1. Open `cards.js`
2. Find the Pokémon section (or add a new one at the end of the array)
3. Follow the data structure — each card needs tier, name, set, price array, and img URL
4. Image URLs: search at pokemontcg.io or use the pattern `https://images.pokemontcg.io/{setId}/{number}.png`
5. Redeploy: `vercel --yes --prod`

### Common Set IDs for Image URLs
| Set ID | Set Name |
|--------|----------|
| sv1 | Scarlet & Violet Base |
| sv2 | Paldea Evolved |
| sv3 | Obsidian Flames |
| sv3pt5 | 151 |
| sv4 | Paradox Rift |
| sv4pt5 | Paldean Fates |
| sv5 | Temporal Forces |
| sv6 | Twilight Masquerade |
| sv7 | Stellar Crown |
| sv8 | Surging Sparks |
| swsh9tg | Brilliant Stars TG |
| swsh11tg | Lost Origin TG |
| swsh12tg | Silver Tempest TG |
| swsh45sv | Shining Fates SV |
| pgo | Pokémon GO |
| sm12 | Cosmic Eclipse |

### Resetting Purchases Between Shows
Tap the **Reset All** button in the header. Confirm in the modal. Done.

---

## Lessons Learned

### What Worked
1. **Zero-dependency approach was the right call.** No build step means no build failures. The app deployed in seconds every time and never broke due to package updates.
2. **Separating card data into its own file (cards.js) was critical.** Makes updates easy — Hoff can point Claude at a new card list document and the data file gets updated without touching any app logic.
3. **Collapsible sections solved the scrolling problem.** With 32 Pokémon and 97 cards, the page was unmanageably long. Collapsed-by-default sections with expand/collapse all made it usable.
4. **Color-coded tier badges are instantly readable.** Red = expensive, orange = mid, green = cheap. No reading required at a glance.
5. **Offline caching worked perfectly.** Service worker with cache-first for images meant the app worked at a fairground with zero signal.
6. **The price modal with pre-filled values saved time.** One tap to open, one tap to confirm. No typing unless you want to adjust the price.

### What We'd Do Differently
1. **Card image verification needs a better process.** The Pokémon TCG API uses set IDs and card numbers that don't always match what's printed on the card or listed on TCGPlayer. Multiple cards shipped with wrong artwork because the API card number didn't match the expected card. A visual QA pass (or an automated image-check script) should happen before every deploy.
2. **API rate limiting caused issues during development.** The pokemontcg.io API has strict rate limits. Batch lookups got 403'd frequently. For next time: cache API responses locally, add delays between calls, or use a single bulk export instead of per-card lookups.

### Fixed in v2 (Previously "Do Differently")
3. ~~Should have built a "Reset Purchases" button from day one.~~ **Done.** Reset All button now in header with confirmation modal.
4. ~~Reorder persistence can get stale.~~ **Done.** Switched from array indices to Pokémon names. New Pokémon append to end; removed ones silently drop.
5. ~~No budget cap feature.~~ **Done.** Configurable budget ceiling with color-changing progress bar (green → orange → red → pulsing).
6. ~~Search could include set names and card names.~~ **Done.** Search now matches across Pokémon names, card names, set names, and notes.

### Things That Surprised Us
1. **A 5-year-old absolutely can help find cards** if the artwork is big enough on screen. The large card thumbnails were the most important design decision.
2. **Card show vendors appreciate when you know exact card numbers.** Having the set name and card number right on screen made negotiation faster.
3. **The sealed product reference section got used more than expected.** Quick-checking ETB prices while standing at a vendor table was genuinely useful.
4. **32 Pokémon with 97 cards is about the upper limit** for comfortable phone browsing even with collapsible sections. Beyond this, the app would benefit from category tabs or a two-level navigation.

---

## Future Ideas (Not Committed)
- ~~Reset purchases button~~ — **Shipped in v2**
- ~~Budget ceiling with warning~~ — **Shipped in v2**
- ~~Search across card names and set names~~ — **Shipped in v2**
- ~~Add-to-homescreen prompt~~ — **Shipped in v2**
- Category tabs (Original / Food-Themed / etc.)
- Share checklist via URL (encode purchases in URL params)
- Price history tracking across multiple shows
- "Deals found" summary at end of show
- Dark/light mode toggle (currently dark-only)
- Make it forkable — let friends deploy their own version with their own card list (see "Sharing" section below)

---

## Sharing With Friends

### The Problem
The app is great, but the card list is specific to Hoff and Sloane's wishlist. A friend would want their own cards, budget, and purchases.

### Recommended Approach: GitHub Repo + Vercel
The simplest path for sharing:

1. **Put the project on GitHub** (public or private repo)
2. **Friend forks the repo** (GitHub's "Fork" button — one click)
3. **Friend edits `cards.js`** to swap in their own card list — this is the only file they need to touch
4. **Friend connects their fork to Vercel** (free account, one click deploy)
5. They get their own URL, their own localStorage, their own everything

**Why this works:**
- `cards.js` is intentionally separated from app logic — friends never touch `index.html`
- The file has clear comments explaining the data structure and set ID reference
- Vercel auto-deploys on every push, so editing `cards.js` on GitHub.com and hitting "Commit" is all it takes
- Each person's purchases, budget, and custom order live in their own browser's localStorage — no server needed

**What a friend needs to do:**
1. Create a free GitHub account (if they don't have one)
2. Create a free Vercel account
3. Fork the repo
4. Edit `cards.js` with their card wishlist (Claude can help with this)
5. Connect the fork to Vercel → auto-deploys

**Alternative for non-technical friends:**
- Hoff duplicates the project folder, swaps in their card list, and deploys it under a different Vercel project name
- They get a unique URL, Hoff manages updates for them

// ===== POKÉMON CARD SHOW — CARD DATA =====
// Last updated: 2026-03-19 (V3)
//
// HOW TO UPDATE THIS FILE:
// 1. Each Pokémon is an object with: name, emoji, warn (optional), cards[]
// 2. Each card has: tier ("high"/"mid"/"budget"), name, set, price [low, high], note (optional), img
// 3. Image URLs follow the pattern: https://images.pokemontcg.io/{setId}/{number}.png
// 4. After editing, redeploy with: npx vercel --yes --prod
//
// COMMON SET IDs:
//   sv1 = Scarlet & Violet Base       sv2 = Paldea Evolved
//   sv3 = Obsidian Flames             sv3pt5 = 151
//   sv4 = Paradox Rift                sv4pt5 = Paldean Fates
//   sv5 = Temporal Forces             sv6 = Twilight Masquerade
//   sv7 = Stellar Crown               sv8 = Surging Sparks
//   swsh9tg = Brilliant Stars TG      swsh11tg = Lost Origin TG
//   swsh12tg = Silver Tempest TG      swsh45sv = Shining Fates SV
//   pgo = Pokémon GO                  sm12 = Cosmic Eclipse

const POKEMON = [
  // ──────────────────────────────────────
  // 🦆 Porygon (and Porygon-Z)
  // ──────────────────────────────────────
  {
    name: "Porygon & Porygon-Z", emoji: "🦆",
    cards: [
      { tier: "high", name: "Porygon-Z Illustration Rare", set: "Paradox Rift #214", price: [7, 9], note: "Amazing glitchy colorful artwork — affordable IR!", img: "https://images.pokemontcg.io/sv4/214.png" },
      { tier: "mid", name: "Porygon-Z Holo / Reverse Holo", set: "Paradox Rift", price: [1, 2], img: "https://images.pokemontcg.io/sv4/144.png" },
      { tier: "budget", name: "Porygon Reverse Holo", set: "Scarlet & Violet 151", price: [1, 1], img: "https://images.pokemontcg.io/sv3pt5/137.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🥐 Fidough
  // ──────────────────────────────────────
  {
    name: "Fidough", emoji: "🥐",
    cards: [
      { tier: "high", name: "Fidough Illustration Rare", set: "SV Base #213", price: [10, 12], note: "Looking into a bakery window — stunning art", img: "https://images.pokemontcg.io/sv1/213.png" },
      { tier: "mid", name: "Fidough Reverse Holo", set: "Scarlet & Violet Base", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sv1/97.png" },
      { tier: "budget", name: "Fidough Common", set: "Scarlet & Violet Base", price: [0.25, 0.25], img: "https://images.pokemontcg.io/sv1/98.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🥖 Dachsbun
  // ──────────────────────────────────────
  {
    name: "Dachsbun", emoji: "🥖",
    warn: "⚠️ Avoid the $35 SIR version!",
    cards: [
      { tier: "high", name: "Dachsbun ex Full Art", set: "Stellar Crown #160", price: [2, 3], note: "Bright pink/yellow textured art", img: "https://images.pokemontcg.io/sv7/160.png" },
      { tier: "mid", name: "Dachsbun ex Regular", set: "Stellar Crown #089", price: [1, 1], img: "https://images.pokemontcg.io/sv7/67.png" },
      { tier: "budget", name: "Dachsbun Reverse Holo", set: "Scarlet & Violet Base", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sv1/99.png" }
    ]
  },

  // ──────────────────────────────────────
  // 💤 Snorlax
  // ──────────────────────────────────────
  {
    name: "Snorlax", emoji: "💤",
    cards: [
      { tier: "high", name: "Snorlax Promo", set: "151 ETB Promo #051", price: [25, 30], note: "Gorgeous sleeping porch art — haggle hard!", img: "https://images.pokemontcg.io/svp/51.png" },
      { tier: "mid", name: "Snorlax Trainer Gallery", set: "Lost Origin TG10", price: [12, 15], note: "Cozy art sleeping with its trainer", img: "https://images.pokemontcg.io/swsh11tg/TG10.png" },
      { tier: "budget", name: "Snorlax Reverse Holo", set: "Scarlet & Violet 151", price: [0.50, 1], img: "https://images.pokemontcg.io/sv3pt5/143.png" }
    ]
  },

  // ──────────────────────────────────────
  // ⚔️ Scyther
  // ──────────────────────────────────────
  {
    name: "Scyther", emoji: "⚔️", warn: "No expensive IR in 151!",
    cards: [
      { tier: "high", name: "Scyther Shiny Rare", set: "Paldean Fates #095", price: [5, 8], note: "Super cool sparkly shiny version", img: "https://images.pokemontcg.io/sv4pt5/95.png" },
      { tier: "mid", name: "Scyther Vintage/Promo Holo", set: "Look in $5 bins", price: [3, 5], note: "Vintage hits from shiny bins", img: "https://images.pokemontcg.io/sv3pt5/123.png" },
      { tier: "budget", name: "Scyther Reverse Holo", set: "Scarlet & Violet 151", price: [0.50, 1], img: "https://images.pokemontcg.io/sv3pt5/123.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🥚 Togepi
  // ──────────────────────────────────────
  {
    name: "Togepi", emoji: "🥚",
    cards: [
      { tier: "high", name: "Togepi & Cleffa & Igglybuff-GX", set: "Cosmic Eclipse", price: [12, 15], note: "Tag-Team with three cute baby Pokémon", img: "https://images.pokemontcg.io/sm12/143.png" },
      { tier: "mid", name: "Togepi Black Star Promo", set: "WotC Promo #30", price: [8, 10], note: "Fantastic vintage classic", img: "https://images.pokemontcg.io/basep/30.png" },
      { tier: "budget", name: "Togepi Reverse Holo", set: "Astral Radiance", price: [0.25, 0.50], img: "https://images.pokemontcg.io/swsh10/55.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🍃 Sprigatito
  // ──────────────────────────────────────
  {
    name: "Sprigatito", emoji: "🍃",
    cards: [
      { tier: "high", name: "Sprigatito Illustration Rare", set: "Paldea Evolved #196", price: [20, 22], note: "Beautiful art — grass cat lounging in a pot", img: "https://images.pokemontcg.io/sv2/196.png" },
      { tier: "mid", name: "Sprigatito ex", set: "Promo", price: [1, 2], note: "Shiny full-card treatment", img: "https://images.pokemontcg.io/svp/87.png" },
      { tier: "budget", name: "Sprigatito Holo", set: "Scarlet & Violet Base", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sv1/13.png" }
    ]
  },

  // ──────────────────────────────────────
  // ⚡ Pikachu
  // ──────────────────────────────────────
  {
    name: "Pikachu", emoji: "⚡",
    cards: [
      { tier: "high", name: "Pikachu ex Full Art", set: "Surging Sparks #219", price: [20, 20], note: "Textured full-card Pikachu", img: "https://images.pokemontcg.io/sv8/219.png" },
      { tier: "mid", name: "Pikachu V-UNION", set: "SWSH Promos (4 cards)", price: [15, 18], note: "Giant 4-card puzzle set", img: "https://images.pokemontcg.io/swshp/SWSH139.png" },
      { tier: "budget", name: "Pikachu Reverse Holo", set: "Scarlet & Violet 151", price: [1, 1], img: "https://images.pokemontcg.io/sv3pt5/25.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🎤 Jigglypuff
  // ──────────────────────────────────────
  {
    name: "Jigglypuff", emoji: "🎤",
    cards: [
      { tier: "high", name: 'Jigglypuff "Southern Islands"', set: "Southern Islands Promo", price: [18, 20], note: "Classic vintage art in a tropical setting", img: "https://images.pokemontcg.io/si1/8.png" },
      { tier: "mid", name: "Mega Lopunny & Jigglypuff GX", set: "Cosmic Eclipse", price: [5, 7], note: "Two adorable Pokémon on one card", img: "https://images.pokemontcg.io/sm12/165.png" },
      { tier: "budget", name: "Jigglypuff Holo", set: "Scarlet & Violet 151", price: [0.50, 0.50], note: "Look in the $1 bins", img: "https://images.pokemontcg.io/sv3pt5/39.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🔮 Mew
  // ──────────────────────────────────────
  {
    name: "Mew", emoji: "🔮",
    cards: [
      { tier: "high", name: "Mew ex Full Art", set: "151 #193", price: [18, 20], note: "Bright pink textured full-art", img: "https://images.pokemontcg.io/sv3pt5/193.png" },
      { tier: "mid", name: "Mew VMAX Trainer Gallery", set: "Lost Origin TG30", price: [15, 18], note: "Giant Mew hanging with its trainer", img: "https://images.pokemontcg.io/swsh11tg/TG30.png" },
      { tier: "budget", name: "Radiant Mew", set: "Crown Zenith", price: [3, 5], img: "https://images.pokemontcg.io/swsh12pt5/60.png" }
    ]
  },

  // ──────────────────────────────────────
  // 👻 Gengar
  // ──────────────────────────────────────
  {
    name: "Gengar", emoji: "👻",
    cards: [
      { tier: "high", name: "Gengar ex Full Art", set: "Temporal Forces #193", price: [10, 12], note: "Spooky but playful full-art", img: "https://images.pokemontcg.io/sv5/193.png" },
      { tier: "mid", name: "Gengar Trainer Gallery", set: "Lost Origin TG06", price: [3, 4], note: "Hanging out near a campfire", img: "https://images.pokemontcg.io/swsh11tg/TG06.png" },
      { tier: "budget", name: "Gengar Holo", set: "Scarlet & Violet 151", price: [1, 1], img: "https://images.pokemontcg.io/sv3pt5/94.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🎭 Ditto
  // ──────────────────────────────────────
  {
    name: "Ditto", emoji: "🎭",
    cards: [
      { tier: "high", name: '"Peelable" Ditto Card', set: "Pokémon GO", price: [8, 10], note: "Look for Bidoof/Numel/Spinarak with Ditto icon — you peel the card!", img: "https://images.pokemontcg.io/pgo/53.png" },
      { tier: "mid", name: "Ditto VMAX Shiny", set: "Shining Fates SV119", price: [4, 6], note: "Massive blue shiny Ditto", img: "https://images.pokemontcg.io/swsh45sv/SV119.png" },
      { tier: "budget", name: "Ditto Holo", set: "Scarlet & Violet 151", price: [1, 1], img: "https://images.pokemontcg.io/sv3pt5/132.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🦘 Kangaskhan
  // ──────────────────────────────────────
  {
    name: "Kangaskhan", emoji: "🦘",
    cards: [
      { tier: "high", name: "Kangaskhan ex Full Art", set: "151 #190", price: [7, 8], note: "Mom and baby in a pastel field", img: "https://images.pokemontcg.io/sv3pt5/190.png" },
      { tier: "mid", name: "Kangaskhan EX", set: "Flashfire", price: [4, 5], note: "Older cool shiny card", img: "https://images.pokemontcg.io/xy2/78.png" },
      { tier: "budget", name: "Kangaskhan Reverse Holo", set: "Scarlet & Violet 151", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sv3pt5/115.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🥄 Abra, Kadabra & Alakazam
  // ──────────────────────────────────────
  {
    name: "Abra, Kadabra & Alakazam", emoji: "🥄",
    cards: [
      { tier: "high", name: "Alakazam ex Full Art", set: "151 #188", price: [10, 12], note: "Pink/purple textured — skip the $70 SIR!", img: "https://images.pokemontcg.io/sv3pt5/188.png" },
      { tier: "mid", name: "Radiant Alakazam", set: "Silver Tempest #059", price: [1, 2], note: "Unique crosshatch shiny pattern", img: "https://images.pokemontcg.io/swsh12/59.png" },
      { tier: "budget", name: "Abra & Kadabra Reverse Holos", set: "Scarlet & Violet 151", price: [1, 1], note: "$1 for both", img: "https://images.pokemontcg.io/sv3pt5/63.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🦄 Ponyta & Galarian Ponyta
  // ──────────────────────────────────────
  {
    name: "Ponyta & Galarian Ponyta", emoji: "🦄",
    cards: [
      { tier: "high", name: "Galarian Ponyta Shiny Vault", set: "Shining Fates SV047", price: [7, 9], note: "Pastel fluffy unicorn with sparkles", img: "https://images.pokemontcg.io/swsh45sv/SV047.png" },
      { tier: "mid", name: "Galarian Ponyta Promo", set: "SWSH013", price: [2, 3], note: "Cute promo card art", img: "https://images.pokemontcg.io/swshp/SWSH013.png" },
      { tier: "budget", name: "Ponyta Holo", set: "Scarlet & Violet 151", price: [1, 1], img: "https://images.pokemontcg.io/sv3pt5/77.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🥚 Chansey
  // ──────────────────────────────────────
  {
    name: "Chansey", emoji: "🥚",
    cards: [
      { tier: "high", name: "Chansey Illustration Rare", set: "Twilight Masquerade #187", price: [25, 25], note: "Watercolor painting — retail $30+, haggle hard!", img: "https://images.pokemontcg.io/sv6/187.png" },
      { tier: "mid", name: "Chansey Vintage Holo", set: "Evolutions / Base Set 2", price: [5, 8], note: "The classic original shiny", img: "https://images.pokemontcg.io/xy12/70.png" },
      { tier: "budget", name: "Chansey Reverse Holo", set: "Scarlet & Violet 151", price: [1, 1], img: "https://images.pokemontcg.io/sv3pt5/113.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🐉 Dratini, Dragonair & Dragonite
  // ──────────────────────────────────────
  {
    name: "Dratini, Dragonair & Dragonite", emoji: "🐉",
    warn: "⚠️ Avoid the Dragonair 151 IR — $50+!",
    cards: [
      { tier: "high", name: "Dragonite V Full Art", set: "Pokémon GO #076", price: [3, 4], note: "Beautiful soaring Dragonite", img: "https://images.pokemontcg.io/pgo/76.png" },
      { tier: "mid", name: "Dragonite ex", set: "Obsidian Flames #159", price: [1, 2], note: "Standard ultra-rare shiny", img: "https://images.pokemontcg.io/sv3/159.png" },
      { tier: "budget", name: "Dratini & Dragonair Reverse Holos", set: "Scarlet & Violet 151", price: [1, 1], note: "$1 for both", img: "https://images.pokemontcg.io/sv3pt5/147.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🎨 Smeargle
  // ──────────────────────────────────────
  {
    name: "Smeargle", emoji: "🎨",
    cards: [
      { tier: "high", name: "Smeargle Trainer Gallery", set: "Silver Tempest TG10", price: [2, 3], note: "Smeargle painting a mural — must-buy!", img: "https://images.pokemontcg.io/swsh12tg/TG10.png" },
      { tier: "mid", name: "Smeargle Promo", set: "SWSH264", price: [1, 2], note: "Fun colorful promo art", img: "https://images.pokemontcg.io/swsh7/128.png" },
      { tier: "budget", name: "Smeargle Reverse Holo", set: "Evolving Skies", price: [0.50, 0.50], img: "https://images.pokemontcg.io/swsh7/128.png" }
    ]
  },

  // ──────────────────────────────────────
  // 👻 Mimikyu
  // ──────────────────────────────────────
  {
    name: "Mimikyu", emoji: "👻",
    cards: [
      { tier: "high", name: "Mimikyu Illustration Rare", set: "Paldean Fates #075", price: [10, 12], note: "Adorable art — Mimikyu walking in a city alley", img: "https://images.pokemontcg.io/sv4pt5/160.png" },
      { tier: "mid", name: "Mimikyu V Trainer Gallery", set: "Brilliant Stars TG16", price: [8, 10], note: "Cute art with Acerola", img: "https://images.pokemontcg.io/swsh9tg/TG16.png" },
      { tier: "budget", name: "Mimikyu Reverse Holo", set: "Various sets", price: [0.50, 1], img: "https://images.pokemontcg.io/sv4pt5/37.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🦊 Eevee
  // ──────────────────────────────────────
  {
    name: "Eevee", emoji: "🦊",
    warn: "⚠️ Do NOT buy Eevee IR from Twilight Masquerade #188 — $70+!",
    cards: [
      { tier: "high", name: "Eevee Trainer Gallery", set: "Brilliant Stars TG11", price: [2, 4], note: "Cute art with Bill", img: "https://images.pokemontcg.io/swsh9tg/TG11.png" },
      { tier: "mid", name: "Eevee V", set: "SWSH Promo", price: [1, 2], note: "Standard ultra-rare shiny", img: "https://images.pokemontcg.io/swshp/SWSH065.png" },
      { tier: "budget", name: "Eevee Holo / Reverse Holo", set: "Scarlet & Violet 151", price: [1, 1], img: "https://images.pokemontcg.io/sv3pt5/133.png" }
    ]
  },

  // ──────────────────────────────────────
  // ⚡ Yamper
  // ──────────────────────────────────────
  {
    name: "Yamper", emoji: "⚡",
    cards: [
      { tier: "high", name: "Yamper Shiny Vault", set: "Shining Fates SV039", price: [3, 5], note: "Bright sparkly yellow & pink shiny dog", img: "https://images.pokemontcg.io/swsh45sv/SV039.png" },
      { tier: "mid", name: "Yamper Holo Rare", set: "Various sets", price: [1, 2], img: "https://images.pokemontcg.io/swsh1/74.png" },
      { tier: "budget", name: "Yamper Common / Reverse Holo", set: "Various sets", price: [0.25, 0.50], img: "https://images.pokemontcg.io/swsh1/73.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🐿️ Pachirisu
  // ──────────────────────────────────────
  {
    name: "Pachirisu", emoji: "🐿️",
    cards: [
      { tier: "high", name: "Pachirisu Illustration Rare", set: "SV Base #208", price: [10, 12], note: "Hanging out in a tree — adorable & affordable", img: "https://images.pokemontcg.io/sv1/208.png" },
      { tier: "mid", name: "Pachirisu Holo", set: "Various sets", price: [1, 1], img: "https://images.pokemontcg.io/sv1/68.png" },
      { tier: "budget", name: "Pachirisu Common / Reverse Holo", set: "Various sets", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sv1/68.png" }
    ]
  },

  // ══════════════════════════════════════
  // 🍦 FOOD-THEMED POKÉMON
  // ══════════════════════════════════════

  // ──────────────────────────────────────
  // 🍦 Vanillite, Vanillish & Vanilluxe
  // ──────────────────────────────────────
  {
    name: "Vanillite, Vanillish & Vanilluxe", emoji: "🍦",
    cards: [
      { tier: "high", name: "Vanillish Illustration Rare", set: "Paradox Rift #190", price: [6, 8], note: "Gorgeous art floating around a snowy town!", img: "https://images.pokemontcg.io/sv4/190.png" },
      { tier: "mid", name: "Vanilluxe Holo Rare", set: "Various sets", price: [1, 2], note: "Shiny holographic final evolution", img: "https://images.pokemontcg.io/bw4/33.png" },
      { tier: "budget", name: "Vanillite Reverse Holo", set: "Paradox Rift", price: [0.25, 0.50], note: "Look in bulk bins!", img: "https://images.pokemontcg.io/sv4/43.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🧁 Milcery & Alcremie
  // ──────────────────────────────────────
  {
    name: "Milcery & Alcremie", emoji: "🧁",
    cards: [
      { tier: "high", name: "Alcremie VMAX", set: "Champion's Path #023", price: [3, 5], note: "Massive colorful multi-tiered cake Alcremie", img: "https://images.pokemontcg.io/swsh35/23.png" },
      { tier: "mid", name: "Alcremie Trainer Gallery", set: "Brilliant Stars TG08", price: [1, 2], note: "Cute art helping a Café Master!", img: "https://images.pokemontcg.io/swsh9tg/TG08.png" },
      { tier: "budget", name: "Milcery Shiny Vault", set: "Shining Fates SV057", price: [2, 3], note: "Cute sparkly milk drop", img: "https://images.pokemontcg.io/swsh45sv/SV057.png" },
      { tier: "budget", name: "Milcery Reverse Holo", set: "Various sets", price: [0.25, 0.50], img: "https://images.pokemontcg.io/swsh4/80.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🥛 Miltank
  // ──────────────────────────────────────
  {
    name: "Miltank", emoji: "🥛",
    cards: [
      { tier: "high", name: "Miltank Galarian Gallery", set: "Crown Zenith GG24", price: [5, 7], note: "Beautiful full art eating with Moomoo Milk!", img: "https://images.pokemontcg.io/swsh12pt5gg/GG24.png" },
      { tier: "mid", name: "Miltank Holo", set: "Astral Radiance", price: [1, 2], note: "Cute art with its trainer", img: "https://images.pokemontcg.io/swsh10/126.png" },
      { tier: "budget", name: "Miltank Reverse Holo", set: "Various sets", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sm4/78.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🍭 Swirlix & Slurpuff
  // ──────────────────────────────────────
  {
    name: "Swirlix & Slurpuff", emoji: "🍭",
    cards: [
      { tier: "high", name: "Slurpuff Illustration Rare", set: "Ascended Heroes #236", price: [8, 10], note: "Incredibly cute full-card illustration!", img: "https://images.pokemontcg.io/sm12/154.png" },
      { tier: "mid", name: "Swirlix Reverse Holo", set: "Cosmic Eclipse", price: [1, 2], note: "Shiny background, classic look", img: "https://images.pokemontcg.io/sm12/153.png" },
      { tier: "budget", name: "Swirlix / Slurpuff Common", set: "Various sets", price: [0.25, 0.50], img: "https://images.pokemontcg.io/xy1/94.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🥧 Applin & Appletun
  // ──────────────────────────────────────
  {
    name: "Applin & Appletun", emoji: "🥧",
    cards: [
      { tier: "high", name: "Applin Illustration Rare", set: "Twilight Masquerade #185", price: [5, 7], note: "Beautiful watercolor-style full art", img: "https://images.pokemontcg.io/sv6/185.png" },
      { tier: "mid", name: "Appletun V", set: "Fusion Strike #026", price: [1, 3], note: "The giant shiny apple pie!", img: "https://images.pokemontcg.io/swsh8/26.png" },
      { tier: "budget", name: "Applin Reverse Holo", set: "Various sets", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sv6/185.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🍣 Tatsugiri
  // ──────────────────────────────────────
  {
    name: "Tatsugiri", emoji: "🍣",
    cards: [
      { tier: "high", name: "Tatsugiri Illustration Rare", set: "Twilight Masquerade #186", price: [18, 20], note: "Stunning art — offer $15 cash first!", img: "https://images.pokemontcg.io/sv6/186.png" },
      { tier: "mid", name: "Tatsugiri ex", set: "Surging Sparks #142", price: [1, 2], note: "Standard shiny ex version", img: "https://images.pokemontcg.io/sv8/142.png" },
      { tier: "budget", name: "Tatsugiri Reverse Holo", set: "Various sets", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sv1/62.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🍵 Sinistea, Polteageist & Poltchageist
  // ──────────────────────────────────────
  {
    name: "Sinistea, Polteageist & Poltchageist", emoji: "🍵",
    cards: [
      { tier: "high", name: "Poltchageist Illustration Rare", set: "Twilight Masquerade #171", price: [3, 5], note: "Beautifully illustrated matcha jar", img: "https://images.pokemontcg.io/sv6/171.png" },
      { tier: "mid", name: "Polteageist Holo", set: "Trick or Trade Promo", price: [0.50, 1], note: "Cute pumpkin stamp promo", img: "https://images.pokemontcg.io/swshp/SWSH081.png" },
      { tier: "budget", name: "Sinistea Common / Reverse Holo", set: "Various sets", price: [0.25, 0.25], img: "https://images.pokemontcg.io/swsh1/89.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🍒 Cherubi & Cherrim
  // ──────────────────────────────────────
  {
    name: "Cherubi & Cherrim", emoji: "🍒",
    cards: [
      { tier: "high", name: "Cherubi Vintage Reverse Holo", set: "Diamond & Pearl / Ultra Prism", price: [1, 2], note: "Look for older shinier cards!", img: "https://images.pokemontcg.io/sm5/10.png" },
      { tier: "mid", name: "Cherubi Reverse Holo", set: "Brilliant Stars", price: [0.50, 0.50], img: "https://images.pokemontcg.io/swsh5/7.png" },
      { tier: "budget", name: "Cherubi / Cherrim Common", set: "Various sets", price: [0.25, 0.25], img: "https://images.pokemontcg.io/dp1/75.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🫐 Bounsweet, Steenee & Tsareena
  // ──────────────────────────────────────
  {
    name: "Bounsweet, Steenee & Tsareena", emoji: "🫐",
    cards: [
      { tier: "high", name: "Tsareena V Full Art", set: "Fusion Strike #246", price: [2, 4], note: "Bright pink textured full art", img: "https://images.pokemontcg.io/swsh8/246.png" },
      { tier: "mid", name: "Bounsweet Reverse Holo", set: "Obsidian Flames", price: [0.50, 1], img: "https://images.pokemontcg.io/sv3/16.png" },
      { tier: "budget", name: "Bounsweet / Steenee Common", set: "Various sets", price: [0.25, 0.25], img: "https://images.pokemontcg.io/sm1/18.png" }
    ]
  },

  // ──────────────────────────────────────
  // 🫒 Smoliv, Dolliv & Arboliva
  // ──────────────────────────────────────
  {
    name: "Smoliv, Dolliv & Arboliva", emoji: "🫒",
    cards: [
      { tier: "high", name: "Smoliv Shiny Rare", set: "Paldean Fates #102", price: [3, 5], note: "Cool sparkly shiny olive!", img: "https://images.pokemontcg.io/sv4pt5/102.png" },
      { tier: "mid", name: "Smoliv Promo", set: "SVP #023", price: [1, 2], img: "https://images.pokemontcg.io/svp/23.png" },
      { tier: "budget", name: "Smoliv Reverse Holo", set: "Scarlet & Violet Base", price: [0.50, 0.50], img: "https://images.pokemontcg.io/sv1/20.png" }
    ]
  }
];

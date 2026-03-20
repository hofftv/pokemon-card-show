# 🎒 {{CHILD_NAME}}'s Ultimate Pokémon Card Show Cheat Sheet

## 📖 The Rarity Dictionary
* **Holo (Holographic):** The picture of the Pokémon is shiny. *(Cheap: $0.25 - $1.00)*
* **Reverse Holo:** The entire card is shiny *except* for the picture. *(Cheap: $0.25 - $1.00)*
* **V / ex / VSTAR / VMAX:** The card is completely shiny, usually has silver borders. *(Affordable: $1.00 - $5.00)*
* **Full Art:** The Pokémon's artwork takes up the entire card from top to bottom. *(Mid-range: $3.00 - $25.00)*
* **IR (Illustration Rare) / TG (Trainer Gallery):** Takes up the whole card, highly detailed background or scene. *(Mid-range: $3.00 - $30.00)*

## 📦 Sealed Product Guide
* **Booster Packs (Single):** Target **{{BOOSTER_PACK_PRICE}}** each.
* **Booster Bundles (6 Packs):** Target **{{BOOSTER_BUNDLE_PRICE}}**.
* **Elite Trainer Boxes (ETBs):** Target **{{ETB_PRICE}}**.
* **Sets to Look For:** {{RECOMMENDED_SETS}}
* 🚨 **Sets to Avoid (Heavy Markups):** {{AVOID_SETS}}

## 📝 The Shopping List

{{#each pokemon_list}}
### {{icon}} {{pokemon_name}}
* 🚨 **WARNING:** {{collector_trap_warning}}
* **High End:** {{high_end_card_name}} (*{{high_end_set}}*) — **Target: ${{high_end_price}}** ({{high_end_description}}).
* **Mid-Tier:** {{mid_tier_card_name}} (*{{mid_tier_set}}*) — **Target: ${{mid_tier_price}}** ({{mid_tier_description}}).
* **Budget:** {{budget_card_name}} — **Target: ${{budget_price}}** ({{budget_description}}).

{{/each}}

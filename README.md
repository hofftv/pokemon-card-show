# 🎒 PokéParent Card Show Companion

**The ultimate tool for taking young kids to Pokémon card shows without breaking the bank.**

If you are a parent taking your child to a Pokémon card show, the vendor tables can be incredibly overwhelming. A single Charizard card might cost $300, while a nearly identical-looking one in the next binder costs $2.

This repository contains an AI prompt and an app template designed to generate a **custom, budget-friendly Cheat Sheet** tailored specifically to the Pokémon your child loves. It focuses on finding beautiful artwork (like Full Arts and Illustration Rares) and shiny cards that kids adore, while completely ignoring expensive "competitive" cards and collector traps.

## 🚀 How to Use (No App Required!)
You don't need to run the app to get a cheat sheet. Just copy and paste the prompt below into your favorite AI chatbot (like ChatGPT, Claude, or Gemini), fill in your child's favorite Pokémon, and hit enter!

### The Master Prompt:
> Act as an expert Pokémon TCG collector who specializes in helping parents navigate card shows on a budget.
>
> I am taking my young child to a Pokémon card show. I have a cash budget of around [INSERT BUDGET, e.g., $150] and I plan on haggling by bundling cards together. My child does not care about competitive viability or investment value; they just want cool, cute, or beautiful artwork of their favorite characters.
>
> Please create a structured Markdown "Cheat Sheet" that I can look at on my phone while walking the show floor.
>
> Here are my child's favorite Pokémon:
> 1. [POKEMON 1 - e.g., Charizard]
> 2. [POKEMON 2 - e.g., Lucario]
> 3. [POKEMON 3 - e.g., Gengar]
> 4. [POKEMON 4 - e.g., The "Ice Cream" Pokemon]
> [Add as many as you want...]
>
> Please format the cheat sheet with the following sections:
> 1. A brief "Rarity Dictionary" explaining terms like Holo, Reverse Holo, Full Art, IR, and SIR in plain English with estimated price ranges for budget buyers.
> 2. A "Sealed Product Guide" with fair cash target prices for single packs, Booster Bundles, and Elite Trainer Boxes. (Warn me of any current sets that are heavily marked up and should be avoided).
> 3. "The Shopping List": For EVERY Pokémon on my list, give me three specific card options:
>    - High End: A beautiful Full Art, Illustration Rare (IR), or Trainer Gallery card (Target: $10 - $25 max). Warn me about any "collector trap" cards for this Pokémon that cost $50+ so I know to avoid them.
>    - Mid-Tier: A shiny Ultra Rare (V, ex, GX) or Promo card (Target: $2 - $8).
>    - Budget: A standard Holo or Reverse Holo to look for in the $1 bins.
>
> Include fair "Cash/Haggle Target Prices" for every single card recommendation. Keep the tone encouraging, organized, and highly scannable!

## 📁 Repository Structure
* `/examples`: See exactly what the generated cheat sheets look like!
* `/templates`: The raw Markdown templates used by the app to format the AI's output.

## 🤝 Contributing
Feel free to submit pull requests if you have suggestions for better prompt phrasing, updated sealed product prices, or new features for the web app!

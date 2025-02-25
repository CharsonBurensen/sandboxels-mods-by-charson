/*
███████╗██╗  ██╗ ██████╗ ██████╗ ███████╗
██╔════╝██║  ██║██╔═══██╗██╔══██╗██╔════╝
███████╗███████║██║   ██║██████╔╝█████╗  
╚════██║██╔══██║██║   ██║██╔═══╝ ██╔══╝  
███████║██║  ██║╚██████╔╝██║     ███████╗
╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝

🔥  Sandboxels Custom Mod Collection  🔥
Created 100% by ChatGPT 
(Slightly edited by Charson Burensen to resolve various syntax situations)

📜 Description:
This file contains a variety of custom elements for Sandboxels,  
including unique materials, creative reactions, and even some  
comedic elements like "Sigma Liquid" and "Skibidi Ash."

🛠️ Features:
- Fully original elements with custom properties & behaviors.
- Realistic and fictional materials with interesting reactions.
- Hidden derivatives to keep the interface clean.
- A balance of serious, creative, and funny elements.

🚀 How to Use:
Simply add this file to your Sandboxels mod loader, and enjoy  
the endless possibilities of new materials and reactions!

📌 Made with 100% originality and creativity. No code was copied!
*/


elements.aetherdust = {
    color: ["#D4AF37", "#C0C0C0", "#F5F5DC"],
    behavior: behaviors.AGPOWDER,
    category: "special",
    state: "powder",
    alpha: 0.95,
    breakInto: ["light_particle", "void_dust"],
    temp: -50,
    burn: 10,
    singleColor: false,
    fireColor: ["#fffacd", "#ffe4b5", "#ffdead"],
    conduct: 0,
    tempHigh: 100,
    breakInto: "void_dust",
    reactions: {
        "neutron": { elem1: "unstable_aether", elem2: "light_particle" },
        "void": { elem1: "pure_energy", elem2: "void_dust" },
    } 
};

elements.void_dust = {
    color: ["#2E2E2E", "#1C1C1C", "#000000"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    alpha: 0.80,
    breakInto: "nothingness",
    temp: -273,
    burn: 0,
    singleColor: true,
    conduct: 0,
    tempHigh: 10,
    breakInto: "nothingness",
    reactions: {
        "aetherdust": { elem1: "unstable_aether", elem2: "light_particle" },
        "water": { elem1: "dark_mist", elem2: "shadow_liquid" },
    } 
};

elements.shadow_liquid = {
    color: ["#3B3B3B", "#282828", "#1E1E1E"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    alpha: 0.90,
    temp: 10,
    burn: 5,
    singleColor: false,
    fireColor: ["#000000", "#2E2E2E", "#4A4A4A"],
    conduct: 0,
    tempHigh: 150,
    breakInto: "void_dust",
    reactions: {
        "fire": { elem1: "dark_mist", elem2: "nothingness" },
        "light": { elem1: "aetherdust", elem2: "nothingness" },
    } 
};

elements.light_particle = {
    color: ["#FFFACD", "#FFE4B5", "#FFDEAD"],
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",
    alpha: 0.5,
    temp: 100,
    breakInto: ["pure_energy"],
};

elements.pure_energy = {
    color: ["#FFD700", "#FFFF00", "#FFA500"],
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",
    alpha: 0.3,
    temp: 200,
    breakInto: ["nothingness"],
};

elements.nothingness = {
    color: ["#000000"],
    behavior: behaviors.DELETE,
    category: "special",
    state: "solid",
    alpha: 0,
    temp: -273,
};

elements.dark_mist = {
    color: ["#1C1C1C", "#101010", "#060606"],
    behavior: behaviors.DGAS,
    category: "special",
    state: "gas",
    alpha: 0.7,
    temp: 5,
    breakInto: ["void_dust"],
};

elements.astralite_dust = {
    color: ["#6B5EFF", "#4A3DCC", "#332899"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    alpha: 0.95,
    temp: -50,
    burn: 20,
    singleColor: false,
    fireColor: ["#A897FF", "#D1C3FF", "#F5EFFF"],
    conduct: 1,
    tempHigh: 150,
    breakInto: "astral_spark",
    reactions: {
        "plasma": { elem1: "astral_spark", elem2: "stardust" },
        "void": { elem1: "void_crystal", elem2: "dark_fog" },
    }
};

elements.astral_spark = {
    color: ["#F5EFFF", "#FFFFFF", "#FFD700"],
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",
    alpha: 0.7,
    temp: 500,
    breakInto: ["pure_energy"],
};

elements.stardust = {
    color: ["#FFE599", "#FFD966", "#FFC000"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    alpha: 0.85,
    temp: 20,
    breakInto: ["cosmic_glow"],
};

elements.void_crystal = {
    color: ["#1E1E1E", "#101010", "#080808"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    alpha: 0.6,
    temp: -100,
    breakInto: ["dark_fog"],
    reactions: {
        "light": { elem1: "void_glass", elem2: "pure_energy" },
    }
};

elements.dark_fog = {
    color: ["#181818", "#0D0D0D", "#060606"],
    behavior: behaviors.DGAS,
    category: "special",
    state: "gas",
    alpha: 0.6,
    temp: -50,
    breakInto: ["void_dust"],
};

elements.void_glass = {
    color: ["#443366", "#332255", "#221144"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    alpha: 0.8,
    temp: -10,
    breakInto: ["cracked_void_glass"],
};

elements.cracked_void_glass = {
    color: ["#3A2A5A", "#281C44", "#190E2E"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    alpha: 0.7,
    temp: -15,
    breakInto: ["void_shards"],
};

elements.void_shards = {
    color: ["#2A1A3A", "#140A1E", "#000000"],
    behavior: behaviors.STURDYPOWDER,
    category: "special",
    state: "solid",
    alpha: 0.6,
    temp: -20,
    reactions: {
        "fire": { elem1: "dark_fog", elem2: "nothingness" },
    }
};

elements.cosmic_glow = {
    color: ["#FFFACD", "#FFFFAA", "#FFD700"],
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",
    alpha: 0.4,
    temp: 200,
    breakInto: ["nothingness"],
};

elements.nothingness = {
    color: ["#000000"],
    behavior: behaviors.DELETE,
    category: "special",
    state: "solid",
    alpha: 0,
    temp: -273,
};

// AI Elements Mod for Sandboxels

elements.ai_mudstone = {
    color: ["#8B5A2B", "#6E4422", "#5A3820"],
    behavior: behaviors.SUPPORT,
    category: "solids",
    state: "solid",
    density: 2600,
    breakInto: "ai_mud",
    reactions: {
        "water": { elem1: "ai_mud", elem2: "ai_gravel" },
    }
};

elements.ai_wet_ash = {
    color: ["#5E5E5E", "#484848", "#3A3A3A"],
    behavior: behaviors.SUPPORTPOWDER,
    category: "special",
    state: "solid",
    tempHigh: 200,
    breakInto: "ai_ash",
    reactions: {
        "fire": { elem1: "ai_ash", elem2: "steam" },
    }
};

elements.ai_steam_cloud = {
    color: ["#D3D3D3", "#C0C0C0", "#A9A9A9"],
    behavior: behaviors.DGAS,
    category: "gases",
    state: "gas",
    temp: 100,
    breakInto: "steam",
    reactions: {
        "smoke": { elem1: "ai_steam_cloud", elem2: "ai_smog" },
    }
};

elements.ai_smog = {
    color: ["#696969", "#585858", "#474747"],
    behavior: behaviors.DGAS,
    category: "gases",
    state: "gas",
    alpha: 0.8,
    temp: 90,
    breakInto: "ai_soot",
    reactions: {
        "rain": { elem1: "ai_acid_rain", elem2: null },
    }
};

elements.ai_acid_rain = {
    color: ["#A3D900", "#85B800", "#6C9E00"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    temp: 15,
    breakInto: "water",
    reactions: {
        "stone": { elem1: "ai_cracked_stone", elem2: null },
        "ai_mudstone": { elem1: "ai_mud", elem2: "ai_dissolved_sediment" },
    }
};

elements.ai_cracked_stone = {
    color: ["#767676", "#606060", "#4C4C4C"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    breakInto: "ai_gravel",
};

elements.ai_dissolved_sediment = {
    color: ["#B39B75", "#9C815D", "#836B47"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    temp: 25,
    breakInto: "ai_mud",
    reactions: {
        "sand": { elem1: "ai_clay", elem2: null },
    }
};

elements.ai_clay = {
    color: ["#A67B5B", "#8F6748", "#78523C"],
    behavior: behaviors.SUPPORTPOWDER,
    category: "solids",
    state: "solid",
    tempHigh: 1200,
    breakInto: "ai_ceramic",
};

elements.ai_ceramic = {
    color: ["#E3C6A8", "#C9AA8E", "#B19078"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 1800,
    breakInto: "ai_shattered_ceramic",
};

elements.ai_shattered_ceramic = {
    color: ["#BFA893", "#A28C79", "#85725F"],
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
    state: "solid",
    breakInto: "dust",
};

elements.ai_soot = {
    color: ["#2E2E2E", "#1A1A1A", "#000000"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    breakInto: "ai_carbon_dust",
    reactions: {
        "oxygen": { elem1: "carbon_dioxide", elem2: null },
    }
};

elements.ai_carbon_dust = {
    color: ["#3A3A3A", "#272727", "#191919"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    tempHigh: 3500,
    breakInto: "ai_graphite",
    reactions: {
        "iron": { elem1: "ai_steel", elem2: null },
    }
};

elements.ai_graphite = {
    color: ["#5C5C5C", "#4A4A4A", "#3B3B3B"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 4000,
    breakInto: "ai_carbon_dust",
};

elements.ai_steel = {
    color: ["#A9A9A9", "#808080", "#6E6E6E"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 1500,
    breakInto: "ai_rust",
    reactions: {
        "water": { elem1: "ai_rust", elem2: null },
    }
};

elements.ai_rust = {
    color: ["#B7410E", "#8B3E2F", "#6A1F1F"],
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    breakInto: "ai_iron_oxide",
};

elements.ai_iron_oxide = {
    color: ["#8B4513", "#6A321F", "#4F240E"],
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
    state: "solid",
    breakInto: "dust",
};

// Meme Elements Mod for Sandboxels

elements.sigma_dust = {
    color: ["#FFD700", "#C0C0C0", "#8B4513"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    alpha: 0.9,
    breakInto: ["pure_grindset", "motivation"],
    tempHigh: 1000,
    burn: 50,
    singleColor: false,
    fireColor: ["#FFAA00", "#FF8800", "#FF6600"],
    conduct: 0.8,
    reactions: {
        "skibidi_gas": { elem1: "skibidi_chaos", elem2: "pure_grindset" },
        "water": { elem1: "sigma_liquid", elem2: null },
    }
};

elements.pure_grindset = {
    color: ["#DAA520", "#B8860B", "#8B6508"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 5000,
    breakInto: "motivation",
    reactions: {
        "fire": { elem1: "sigma_flame", elem2: null },
    }
};

elements.sigma_liquid = {
    color: ["#FFD700", "#C0C0C0", "#FF8C00"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    viscosity: 5,
    tempHigh: 1200,
    breakInto: "sigma_dust",
    reactions: {
        "fire": { elem1: "sigma_flame", elem2: null },
    }
};

elements.motivation = {
    color: ["#32CD32", "#00FF00", "#228B22"],
    behavior: behaviors.LIGHTWEIGHT,
    category: "special",
    state: "solid",
    alpha: 0.7,
    breakInto: "pure_grindset",
    reactions: {
        "fire": { elem1: "sigma_flame", elem2: null },
        "water": { elem1: "sigma_liquid", elem2: null },
    }
};

elements.sigma_flame = {
    color: ["#FF4500", "#FF8C00", "#FFD700"],
    behavior: behaviors.UL_UR_OPTIMIZED,
    category: "fire",
    state: "gas",
    burn: 100,
    temp: 2000,
    breakInto: "smoke",
    reactions: {
        "hawk_tuah_spit": { elem1: "eternal_rage", elem2: null },
    }
};

elements.skibidi_gas = {
    color: ["#9B30FF", "#8A2BE2", "#6A0DAD"],
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    temp: 50,
    burn: 10,
    breakInto: "skibidi_ash",
    reactions: {
        "sigma_dust": { elem1: "skibidi_chaos", elem2: "pure_grindset" },
    }
};

elements.skibidi_chaos = {
    color: ["#FF0000", "#8B0000", "#660000"],
    behavior: behaviors.BOUNCY,
    category: "special",
    state: "gas",
    burn: 99,
    temp: 900,
    breakInto: "skibidi_void",
};

elements.skibidi_void = {
    color: ["#000000", "#1C1C1C", "#2E2E2E"],
    behavior: behaviors.DELETE,
    category: "special",
    state: "solid",
    breakInto: null,
};

elements.skibidi_ash = {
    color: ["#505050", "#3D3D3D", "#2A2A2A"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    tempLow: -50,
    tempHigh: 1000,
    burn: 0,
    breakInto: null,
    reactions: {
        "water": { elem1: "skibidi_mud", elem2: null },
    }
};

elements.hawk_tuah_spit = {
    color: ["#00FF00", "#32CD32", "#228B22"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    temp: 37,
    breakInto: "dried_hawk_tuah",
    reactions: {
        "fire": { elem1: "eternal_rage", elem2: null },
        "dust": { elem1: "sacred_mud", elem2: null },
    }
};

elements.dried_hawk_tuah = {
    color: ["#8B4513", "#A0522D", "#D2691E"],
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    breakInto: "dust",
};

elements.eternal_rage = {
    color: ["#FF0000", "#B22222", "#8B0000"],
    behavior: behaviors.BOUNCY,
    category: "special",
    state: "gas",
    temp: 5000,
};

elements.sacred_mud = {
    color: ["#8B4513", "#A0522D", "#5C4033"],
    behavior: behaviors.STICKY,
    category: "solids",
    state: "solid",
    tempHigh: 100,
    breakInto: "dried_hawk_tuah",
};

elements.skibidi_mud = {
    color: ["#6A0DAD", "#5B0DA8", "#4C0C99"],
    behavior: behaviors.STICKY,
    category: "special",
    state: "solid",
    tempHigh: 150,
    breakInto: "skibidi_ash",
};

// Boring Metals Mod - A collection of the most unexciting metals known to Sandboxels. 
// Every line of this mod was created by me, 100%. Enjoy the gray.

elements.blandium = {
    color: ["#A0A0A0", "#8C8C8C", "#787878"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 1500,
    breakInto: "blandium_dust",
    conduct: 0.9,
    density: 7800,
    desc: "A remarkably unremarkable metal. Strong, reliable, and completely uninspiring.",
    reactions: {
        "acid": { elem1: "blandium_oxide", elem2: "steam" },
        "fire": { elem1: "blandium", elem2: "smoke" },
        "water": { elem1: "blandium", elem2: "steam" },
    }
};

elements.blandium_dust = {
    color: ["#C0C0C0", "#A0A0A0", "#808080"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    tempHigh: 1400,
    breakInto: "blandium",
    conduct: 0.7,
    hidden: true,
    desc: "Ground-up Blandium. Somehow even more boring in powder form.",
};

elements.blandium_oxide = {
    color: ["#D4D4D4", "#C2C2C2", "#B0B0B0"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    tempHigh: 1800,
    breakInto: "blandium_dust",
    hidden: true,
    desc: "Blandium that reacted with oxygen. Now it's slightly less useful and somehow even duller.",
};

elements.tedium = {
    color: ["#6E6E6E", "#5A5A5A", "#4B4B4B"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 1600,
    breakInto: "tedium_dust",
    conduct: 0.8,
    density: 8100,
    desc: "A dense, gray metal that seems to sap excitement from anyone who looks at it.",
    reactions: {
        "oxygen": { elem1: "tedium_rust", elem2: null },
        "fire": { elem1: "tedium", elem2: "smoke" },
        "acid": { elem1: "tedium_rust", elem2: "steam" },
    }
};

elements.tedium_dust = {
    color: ["#9C9C9C", "#878787", "#727272"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    tempHigh: 1500,
    breakInto: "tedium",
    conduct: 0.6,
    hidden: true,
    desc: "Finely ground Tedium. It’s like regular Tedium, but in a more disappointing form.",
};

elements.tedium_rust = {
    color: ["#B87333", "#A86020", "#945014"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    tempHigh: 1200,
    breakInto: "tedium_dust",
    hidden: true,
    desc: "Oxidized Tedium. Now it's both rusty and boring.",
};

elements.dullium = {
    color: ["#7F7F7F", "#6B6B6B", "#5C5C5C"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 1400,
    breakInto: "dullium_shards",
    conduct: 0.95,
    density: 7600,
    desc: "A metal so uninspired that people forget about it as soon as they stop looking at it.",
    reactions: {
        "water": { elem1: "dullium_hydrate", elem2: "steam" },
        "acid": { elem1: "dullium_hydrate", elem2: "hydrogen" },
        "fire": { elem1: "dullium", elem2: "smoke" },
    }
};

elements.dullium_shards = {
    color: ["#AAAAAA", "#999999", "#888888"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    tempHigh: 1300,
    breakInto: "dullium",
    hidden: true,
    desc: "Brittle shards of Dullium. They lack any interesting properties, much like the metal itself.",
};

elements.dullium_hydrate = {
    color: ["#D0D0D0", "#B8B8B8", "#A0A0A0"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    tempHigh: 900,
    breakInto: "dullium_dust",
    hidden: true,
    desc: "Dullium that has absorbed water, making it ever so slightly less dull. But only slightly.",
};

elements.grayite = {
    color: ["#505050", "#464646", "#3C3C3C"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 1800,
    breakInto: "grayite_dust",
    conduct: 0.85,
    density: 8500,
    desc: "A strong, gray metal that is exactly as interesting as its name suggests.",
    reactions: {
        "acid": { elem1: "grayite_corroded", elem2: "steam" },
        "fire": { elem1: "grayite", elem2: "smoke" },
        "lava": { elem1: "magma", elem2: "fire" },
    }
};

elements.grayite_dust = {
    color: ["#787878", "#686868", "#585858"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    tempHigh: 1700,
    breakInto: "grayite",
    conduct: 0.65,
    hidden: true,
    desc: "Powdered Grayite. Somehow, even more lifeless than the solid version.",
};

elements.grayite_corroded = {
    color: ["#696969", "#5D5D5D", "#4F4F4F", "#A0522D"], // Now includes orange!
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 1100,
    breakInto: "grayite_dust",
    hidden: true,
    desc: "Acid-eaten Grayite. Now it's both gray and slightly orange. Thrilling.",
};

elements.luminite = {
    color: ["#FFD700", "#FFFACD", "#FFEC8B"],
    behavior: behaviors.SOLID,
    category: "special",
    state: "solid",
    conduct: 3,
    tempHigh: 1500,
    breakInto: ["luminshard", "fluxstorm"],
    reactions: {
        "water": { elem2: "glowing_liquid" },
        "umbravapor": { elem2: "fluxstorm" },
    }
};

elements.luminshard = {
    color: "#FFFF99",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",
    temp: 1000,
    tempHigh: 1200,
    stateHigh: "fluxstorm",
    desc: "A radiant fragment of pure energy, disperses in air.",
    reactions: {
        "umbravapor": { elem1: "fluxstorm", elem2: "neutral_fog" },
        "fluxstorm": { elem1: "plasma", elem2: "plasma" },
    }
};

elements.fluxstorm = {
    color: ["#C0C0C0", "#D3D3D3", "#A9A9A9"],
    behavior: behaviors.GAS,
    category: "special",
    state: "gas",
    tempHigh: 500,
    stateHigh: "plasma",
    tempLow: -100,
    stateLow: "umbravapor",
    desc: "An unstable storm of mixed energies, shifting in form.",
    reactions: {
        "fire": { elem1: "plasma", elem2: "luminshard" },
        "umbravapor": { elem1: "neutral_fog" },
    }
};

elements.umbravapor = {
    color: ["#2B2B2B", "#191919", "#0D0D0D"],
    behavior: behaviors.GAS_OLD,
    category: "special",
    state: "gas",
    tempHigh: 250,
    stateHigh: "fluxstorm",
    desc: "A dark mist infused with unstable energy.",
    reactions: {
        "luminshard": { elem1: "fluxstorm", elem2: "neutral_fog" },
        "water": { elem1: "shadowy_water" },
    }
};

elements.shadowy_water = {
    color: ["#242424", "#3B3B3B"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "umbravapor",
    desc: "A darkened, eerie liquid with mysterious properties.",
    reactions: {
        "luminite": { elem1: "glowing_liquid" },
    }
};

elements.glowing_liquid = {
    color: ["#FFF700", "#FFD400"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    tempHigh: 150,
    stateHigh: "luminshard",
    desc: "A luminous liquid that glows in the dark.",
};

elements.neutral_fog = {
    color: ["#BBBBBB", "#999999", "#AAAAAA"],
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    tempHigh: 300,
    stateHigh: "fluxstorm",
    temp: 20,
    desc: "A balanced mist formed from opposing energies, dissipates over time.",
    reactions: {
        "luminshard": { elem1: "foggy_light" },
        "umbravapor": { elem1: "foggy_shadow" },
    },
    breakInto: ["mist", "water_vapor"],
};

elements.foggy_light = {
    color: ["#FFFFCC", "#FFFACD"],
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    tempHigh: 200,
    stateHigh: "luminshard",
    desc: "A slightly glowing fog, disperses quickly.",
    reactions: {
        "water": { elem1: "glowing_liquid" },
    }
};

elements.foggy_shadow = {
    color: ["#555555", "#444444"],
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    tempHigh: 200,
    stateHigh: "umbravapor",
    desc: "A shadow-infused mist, heavy and eerie.",
    reactions: {
        "water": { elem1: "shadowy_water" },
    }
};

// Primary Colors
elements.rougine = {
    color: "#FF0000",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "rougine_vapor",
    stain: 1,
    desc: "A molten, fiery substance that embodies pure red energy.",
    reactions: {
        "solarine": { elem1: "auron", elem2: "auron" },
        "azurion": { elem1: "violium", elem2: "violium" },
        "veridite": { elem1: "umberon", elem2: "umberon" },
        "cyanine": { elem1: "grayon", elem2: "grayon" },
    }
};

elements.azurion = {
    color: "#0000FF",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "azurion_vapor",
    stain: 1,
    desc: "A deep, mysterious fluid that shimmers with boundless depth.",
    reactions: {
        "rougine": { elem1: "violium", elem2: "violium" },
        "solarine": { elem1: "veridite", elem2: "veridite" },
        "auron": { elem1: "umberon", elem2: "umberon" },
        "rosium": { elem1: "grayon", elem2: "grayon" },
    }
};

elements.solarine = {
    color: "#FFFF00",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "solarine_vapor",
    stain: 1,
    desc: "A golden liquid that radiates warmth and life.",
    reactions: {
        "rougine": { elem1: "auron", elem2: "auron" },
        "azurion": { elem1: "veridite", elem2: "veridite" },
        "violium": { elem1: "umberon", elem2: "umberon" },
        "cyanine": { elem1: "grayon", elem2: "grayon" },
    }
};

// Secondary Colors
elements.auron = {
    color: "#FF8000",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "auron_vapor",
    stain: 1,
    desc: "A glowing amber substance that flickers like flames.",
    reactions: {
        "veridite": { elem1: "luminon", elem2: "luminon" },
        "azurion": { elem1: "umberon", elem2: "umberon" },
        "cyanine": { elem1: "grayon", elem2: "grayon" },
    }
};

elements.violium = {
    color: "#8000FF",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "violium_vapor",
    stain: 1,
    desc: "A rare, mystical liquid that pulses with an ethereal glow.",
    reactions: {
        "rosium": { elem1: "roseon", elem2: "roseon" },
        "solarine": { elem1: "umberon", elem2: "umberon" },
        "veridite": { elem1: "grayon", elem2: "grayon" },
    }
};

elements.veridite = {
    color: "#00FF00",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "veridite_vapor",
    stain: 1,
    desc: "A rich green liquid, brimming with the essence of nature.",
    reactions: {
        "solarine": { elem1: "luminon", elem2: "luminon" },
        "azurion": { elem1: "cyanine", elem2: "cyanine" },
        "auron": { elem1: "luminon", elem2: "luminon" },
        "violium": { elem1: "grayon", elem2: "grayon" },
    }
};

// Tertiary Colors
elements.luminon = {
    color: "#BFFF00",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "luminon_vapor",
    stain: 1,
    desc: "A bright, zesty green liquid full of electric energy.",
    reactions: {
        "cyanine": { elem1: "aquion", elem2: "aquion" },
        "violium": { elem1: "grayon", elem2: "grayon" },
    }
};

elements.cyanine = {
    color: "#00FFFF",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "cyanine_vapor",
    stain: 1,
    desc: "A fluid of pure clarity, reflecting light in shimmering waves.",
    reactions: {
        "veridite": { elem1: "veridite", elem2: "veridite" },
        "luminon": { elem1: "aquion", elem2: "aquion" },
        "rougine": { elem1: "grayon", elem2: "grayon" },
    }
};

elements.rosium = {
    color: "#FF00FF",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "rosium_vapor",
    stain: 1,
    desc: "A striking magenta liquid with a passionate intensity.",
    reactions: {
        "violium": { elem1: "roseon", elem2: "roseon" },
        "rougine": { elem1: "rougine", elem2: "rougine" },
        "hotpinkon": { elem1: "hotpinkon", elem2: "hotpinkon" },
        "azurion": { elem1: "grayon", elem2: "grayon" },
    }
};

elements.hotpinkon = {
    color: "#FF69B4",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "hotpinkon_vapor",
    stain: 1,
    desc: "A vibrant pink substance, playful yet powerful.",
    reactions: {
        "rosium": { elem1: "hotpinkon", elem2: "hotpinkon" },
        "violium": { elem1: "hotpinkon", elem2: "hotpinkon" },
    }
};

elements.umberon = {
    color: "#8B4513",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "umberon_vapor",
    stain: 1,
    desc: "A dark, earthy brown fluid with deep, rich undertones.",
};

elements.grayon = {
    color: "#808080",
    behavior: behaviors.LIQUID,
    category: "colors",
    state: "liquid",
    tempHigh: 100,
    stateHigh: "grayon_vapor",
    stain: 1,
    desc: "A dull, neutral liquid formed from mixing too many colors.",
};

// Vapors
const colorVapors = ["rougine", "azurion", "solarine", "auron", "violium", "veridite", "luminon", "cyanine", "rosium", "hotpinkon", "umberon", "grayon"];
colorVapors.forEach(color => {
    elements[`${color}_vapor`] = {
        color: elements[color].color,
        behavior: behaviors.GAS,
        category: "gases",
        state: "gas",
        tempLow: 50,
        stateLow: color,
    };
});

elements.ferexxium = {
    color: ["#8B5A2B", "#6E3B1F", "#A67848"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    alpha: 0.98,
    temp: 50,
    burn: 30,
    singleColor: true,
    conduct: 1.1,
    tempHigh: 1200,
    stateHigh: "molten_ferexxium",
    reactions: {
        "oxygen": { elem1: "ferexxium_oxide" },
        "water": { elem1: "rusted_ferexxium" },
        "carbon": { elem1: "ferexxium_carbonate" }
    }
};

elements.ferexxium_carbonate = {
    color: ["#A49F93", "#8C877A", "#726D63"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    alpha: 1.0,
    temp: 60,
    burn: 0,
    singleColor: true,
    conduct: 0.2,
    desc: "A carbonate compound of Ferexxium, fragile and non-conductive."
};

elements.auridite = {
    color: ["#FFD700", "#E6C200", "#B89A00"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    alpha: 0.99,
    temp: 20,
    burn: 0,
    singleColor: true,
    conduct: 1.5,
    tempHigh: 1064,
    stateHigh: "molten_auridite",
    reactions: {
        "mercury": { elem1: "auridite_amalgam" },
        "acid": { elem1: "dissolved_auridite" }
    }
};

elements.voltaxium = {
    color: ["#5C7A99", "#3D5A80", "#8AA6C1"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    alpha: 0.97,
    temp: 10,
    burn: 20,
    singleColor: false,
    conduct: 2.0,
    tempHigh: 800,
    stateHigh: "molten_voltaxium",
    reactions: {
        "electric": { elem1: "charged_voltaxium" },
        "water": { elem1: "ionized_voltaxium" }
    }
};

elements.ionized_voltaxium = {
    color: ["#A1CAF1", "#7DA7D9", "#5B7EBE"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    alpha: 1.0,
    temp: 15,
    burn: 10,
    singleColor: false,
    conduct: 2.8,
    desc: "Water-exposed Voltaxium, slightly conductive and unstable."
};

elements.molten_ferexxium = {
    color: ["#D2691E", "#A0522D", "#8B4513"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    alpha: 1.0,
    temp: 1200,
    burn: 50,
    singleColor: true,
    conduct: 1.3,
    tempLow: 1199,
    stateLow: "ferexxium"
};

elements.molten_auridite = {
    color: ["#FFD123", "#E6AC00", "#B8860B"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    alpha: 1.0,
    temp: 1064,
    burn: 0,
    singleColor: true,
    conduct: 1.6,
    tempLow: 1063,
    stateLow: "auridite"
};

elements.molten_voltaxium = {
    color: ["#729FCF", "#487BA0", "#205080"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    alpha: 1.0,
    temp: 800,
    burn: 30,
    singleColor: false,
    conduct: 2.5,
    tempLow: 799,
    stateLow: "voltaxium"
};

elements.ferexxium_oxide = {
    color: ["#B7410E", "#8A3324", "#6E2C1F"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    alpha: 1.0,
    temp: 60,
    burn: 10,
    singleColor: true,
    conduct: 0.5,
    tempHigh: 1400,
    stateHigh: "molten_ferexxium_oxide"
};

elements.rusted_ferexxium = {
    color: ["#9A382D", "#C04D42", "#D35E55"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    alpha: 1.0,
    temp: 25,
    burn: 0,
    singleColor: true,
    conduct: 0.3,
    desc: "Corroded Ferexxium from exposure to water. Weakened and brittle."
};

elements.auridite_amalgam = {
    color: ["#E6C200", "#B89A00", "#FFD123"],
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
    state: "solid",
    alpha: 1.0,
    temp: 25,
    burn: 0,
    singleColor: true,
    conduct: 1.0,
    tempHigh: 800,
    stateHigh: "molten_auridite_amalgam",
    desc: "A mercury-infused Auridite alloy, softer and more conductive."
};

elements.charged_voltaxium = {
    color: ["#00BFFF", "#009ACD", "#00688B"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    alpha: 0.98,
    temp: 10,
    burn: 20,
    singleColor: false,
    conduct: 3.0,
    desc: "Highly energized Voltaxium, crackling with power."
};

elements.dissolved_auridite = {
    color: ["#FFD700", "#E6C200", "#B89A00"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    alpha: 0.9,
    temp: 25,
    burn: 0,
    singleColor: true,
    conduct: 1.2,
    desc: "Auridite dissolved in acid, forming a golden-hued solution."
};

elements.boron = {
    color: "#ffb366",
    behavior: behaviors.WALL,
    category: "metalloids",
    state: "solid",
    density: 2340,
    reactions: {
        "oxygen": { elem1: "boron_oxide" },
        "molten_metal": { elem1: "boron_steel" },
        "water": { elem1: "boric_acid" }
    }
};

elements.silicon = {
    color: "#c0c0c0",
    behavior: behaviors.WALL,
    category: "metalloids",
    state: "solid",
    density: 2330,
    reactions: {
        "oxygen": { elem1: "quartz" },
        "charcoal": { elem1: "silicon_carbide", temp: 2000 }
    }
};

elements.germanium = {
    color: "#dcdcdc",
    behavior: behaviors.WALL,
    category: "metalloids",
    state: "solid",
    density: 5323,
    reactions: {
        "oxygen": { elem1: "germanium_oxide", "chance": 0.05 },
        "hydrogen": { elem1: "germanium_hydride" }
    }
};

elements.arsenic = {
    color: "#9c8468",
    behavior: behaviors.POWDER,
    category: "metalloids",
    state: "solid",
    density: 5727,
    reactions: {
        "oxygen": { elem1: "arsenic_trioxide" },
        "sulfur": { elem1: "arsenic_sulfide" }
    }
};

elements.antimony = {
    color: "#a9a9a9",
    behavior: behaviors.WALL,
    category: "metalloids",
    state: "solid",
    density: 6697,
    reactions: {
        "oxygen": { elem1: "antimony_oxide" },
        "molten_lead": { elem1: "lead_antimony_alloy" }
    }
};

elements.tellurium = {
    color: "#d3c0a0",
    behavior: behaviors.WALL,
    category: "metalloids",
    state: "solid",
    density: 6240,
    reactions: {
        "oxygen": { elem1: "tellurium_dioxide" },
        "gold": { elem1: "gold_telluride" }
    }
};

elements.polonium = {
    color: "#c8b4a2",
    behavior: behaviors.RADPOWDER,
    category: "metalloids",
    state: "solid",
    density: 9198,
    reactions: {
        "oxygen": { elem1: "polonium_dioxide" },
        "time": { elem1: "lead", "chance": 0.01 }
    }
};

elements.tantalium = {
    color: "#4b4b4b",
    behavior: behaviors.WALL,
    category: "fictional_metalloids",
    state: "solid",
    density: 16500,
    reactions: {
        "iron": { elem1: "galvanized_steel" }
    }
};

elements.solarium = {
    color: "#ffd700",
    behavior: behaviors.SUPERFLUID,
    category: "fictional_metalloids",
    state: "solid",
    density: 3000,
    reactions: {
        "gold": { elem1: "solar_gold", "temp": 1000 }
    }
};

elements.xenorium = {
    color: "#32cd32",
    behavior: behaviors.RADMOLTEN,
    category: "fictional_metalloids",
    state: "solid",
    density: 14000,
    reactions: {
        "water": { elem1: "explosion" },
        "plasma": { elem1: "lead", "chance": 0.05 }
    }
};

elements.oblivium = {
    color: "#2b0057",
    behavior: behaviors.DELETE,
    category: "fictional_metalloids",
    state: "solid",
    density: 7000,
    reactions: {
        "electricity": { elem1: "explosion" },
    }
};

elements.necronium = {
    color: "#1e1e1e",
    behavior: behaviors.KILLPIXEL2,
    category: "fictional_metalloids",
    state: "solid",
    density: 9000,
    reactions: {
        "body": { elem1: "cancer" },
        "meat": { elem1: "cancer" },
        "iron": { elem1: "weakened_metal" }
    }
};

elements.boric_acid = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "compounds",
    state: "solid",
    density: 1440
};

elements.germanium_hydride = {
    color: "#e6e6e6",
    behavior: behaviors.GAS,
    category: "compounds",
    state: "gas",
    density: 3.2
};

elements.weakened_metal = {
    color: "#737373",
    behavior: behaviors.WALL,
    category: "alloys",
    state: "solid",
    density: 7000
};


elements.boron_oxide = {
    color: "#f5f5dc",
    behavior: behaviors.POWDER,
    category: "compounds",
    tempHigh: 2076,
    stateHigh: "molten_boron_oxide",
    reactions: {
        "water": { elem1: "boric_acid" },
    },
}

elements.boron_steel = {
    color: "#8b8b8b",
    behavior: behaviors.SOLID,
    category: "alloys",
    density: 7800,
    hardness: 9,
    tempHigh: 1500,
}

elements.silicon_oxide = {
    color: "#d9d9d9",
    behavior: behaviors.POWDER,
    category: "compounds",
    tempHigh: 1710,
    stateHigh: "molten_silicon_oxide",
    reactions: {
        "carbon": { elem1: "silicon_carbide" },
    },
}

elements.silicon_carbide = {
    color: "#4a4a4a",
    behavior: behaviors.SOLID,
    category: "compounds",
    hardness: 9.5,
    tempHigh: 2830,
}

elements.germanium_oxide = {
    color: "#e6e6e6",
    behavior: behaviors.POWDER,
    category: "compounds",
    tempHigh: 1116,
    stateHigh: "molten_germanium_oxide",
    reactions: {
        "hydrogen": { elem1: "germanium_hydride" },
    },
}

elements.germanium_hydride = {
    color: "#d4d4d4",
    behavior: behaviors.GAS,
    category: "gases",
    tempHigh: 350,
    stateHigh: "germanium",
}

elements.arsenic_trioxide = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "compounds",
    tempHigh: 193,
    stateHigh: "arsenic_trioxide_vapor",
}

elements.arsenic_trioxide_vapor = {
    color: "#cccccc",
    behavior: behaviors.GAS,
    category: "gases",
    tempLow: 193,
    stateLow: "arsenic_trioxide",
}

elements.antimony_oxide = {
    color: "#faf0e6",
    behavior: behaviors.POWDER,
    category: "compounds",
    tempHigh: 656,
    stateHigh: "molten_antimony_oxide",
}

elements.tellurium_dioxide = {
    color: "#dbdbdb",
    behavior: behaviors.POWDER,
    category: "compounds",
    tempHigh: 732,
    stateHigh: "molten_tellurium_dioxide",
}

elements.mettalumite = {
    color: "#c0c0c0",
    behavior: behaviors.SOLID,
    category: "fictional_metalloids",
    tempHigh: 2500,
    stateHigh: "molten_mettalumite",
}

elements.molten_mettalumite = {
    color: "#ff8c00",
    behavior: behaviors.LIQUID,
    category: "fictional_metalloids",
    tempLow: 2500,
    stateLow: "mettalumite",
}

elements.fictium_oxide = {
    color: "#f4a460",
    behavior: behaviors.POWDER,
    category: "fictional_compounds",
    tempHigh: 1800,
    stateHigh: "molten_fictium_oxide",
}

elements.sandiox = {
    color: "#ffa07a",
    behavior: behaviors.POWDER,
    category: "fictional_compounds",
    tempHigh: 1600,
    stateHigh: "molten_sandiox",
}

elements.molten_sandiox = {
    color: "#ff4500",
    behavior: behaviors.LIQUID,
    category: "fictional_compounds",
    tempLow: 1600,
    stateLow: "sandiox",
}

elements.silvanite = {
    color: "#228b22",
    behavior: behaviors.SOLID,
    category: "fictional_metalloids",
    tempHigh: 2900,
    stateHigh: "molten_silvanite",
}

elements.molten_silvanite = {
    color: "#ff8c00",
    behavior: behaviors.LIQUID,
    category: "fictional_metalloids",
    tempLow: 2900,
    stateLow: "silvanite",
}

elements.hawk = {
    color: ["#8b5a2b", "#b07540", "#d8a070"],
    behavior: [
        "M1%20|M1%15|M1%20", // Reduced upward movement (M1%40 changed to M1%20)
        "M1%15|XX|M1%15",     // Left and right values remain unchanged
        "XX|M1%5|XX",         // Small downward chance
    ],
    category: "life",
    state: "solid",
    egg: "hawk_egg",
    baby: "juvenile_hawk",
    foodNeed: 10,
    burn: 90,
    burnInto: "cooked_meat",
    tempHigh: 150,
    stateHigh: ["cooked_meat", "ash"],
    tempLow: -20,
    stateLow: ["frozen_meat"],
    breakInto: ["feather", "meat"],
    reactions: {
        "rat": { elem2: "blood", chance: 0.4, func: behaviors.KILLPIXEL2 },
        "bird": { elem2: "feather", chance: 0.5, func: behaviors.KILLPIXEL2 },
        "fish": { elem2: null, chance: 0.3, func: behaviors.FEEDPIXEL },
        "grass": { elem2: "dead_plant" },
        "radiation": { elem1: "rotten_meat", chance: 0.1 },
    }
};

elements.juvenile_hawk = {
    color: ["#a77b50", "#c69566"],
    behavior: [
        "M1%10|M1%10|M1%10", // Reduced upward movement
        "M1%5|CH:hawk%0.3|M1%5", // Reduced upward corner M1
        "XX|M1%5|XX",           // Minimal upward movement
    ],
    category: "life",
    state: "solid",
    foodNeed: 8,
    burn: 90,
    burnInto: "cooked_meat",
    tempHigh: 150,
    stateHigh: ["cooked_meat", "ash"],
    tempLow: -20,
    stateLow: ["frozen_meat"],
    breakInto: ["feather", "meat"],
    reactions: {
        "rat": { elem1: "hawk", chance: 0.3, elem2: "blood", func: behaviors.KILLPIXEL2 },
        "bird": { elem2: "feather", chance: 0.3, func: behaviors.KILLPIXEL2 },
        "fish": { elem1: "hawk", chance: 0.3, elem2: null, func: behaviors.FEEDPIXEL },
        "radiation": { elem1: "rotten_meat", chance: 0.1 },
    }
};


elements.hatchling = {
    color: ["#e3c7a5", "#f1dab5"],
    behavior: [
        "XX|XX|XX",
        "M1%5|CH:juvenile_hawk%0.3|M1%5",
        "XX|M1|XX",
    ],
    category: "life",
    state: "solid",
    burn: 90,
    burnInto: "cooked_meat",
    tempHigh: 150,
    stateHigh: ["cooked_meat", "ash"],
    tempLow: -20,
    stateLow: ["frozen_meat"],
    breakInto: ["feather", "meat"],
    reactions: {
        "radiation": { elem1: "rotten_meat", chance: 0.1 },
    }
};

elements.hawk_egg = {
    color: ["#e0dfb1", "#d1c893"],
    behavior: [
        "XX|XX|XX",
        "XX|CH:hatchling%0.2|XX",
        "XX|XX|XX",
    ],
    category: "life",
    state: "solid",
    breakInto: ["egg_shell"],
    tempHigh: 80,
    stateHigh: ["cooked_egg", "ash"],
    tempLow: -10,
    stateLow: ["frozen_egg"],
};

// Egg-related elements with gravity
elements.egg_shell = {
    color: ["#f0e7cf", "#dcd0b0"],
    behavior: ["XX|XX|XX", "XX|XX|XX", "XX|M1|XX"], // Falls down
    category: "food",
    state: "solid",
    breakInto: null,
};

elements.cooked_egg = {
    color: ["#f5d78a", "#ffe29a"],
    behavior: ["XX|XX|XX", "XX|XX|XX", "XX|M1|XX"], // Falls down
    category: "food",
    state: "solid",
    reactions: {
        "head": { elem1: null, func: behaviors.FEEDPIXEL },
    }
};

elements.frozen_egg = {
    color: ["#cfe2f3", "#b0d0e8"],
    behavior: ["XX|XX|XX", "XX|XX|XX", "XX|XX|XX"],
    category: "food",
    state: "solid",
    tempHigh: 0,
    stateHigh: "hawk_egg",
};





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

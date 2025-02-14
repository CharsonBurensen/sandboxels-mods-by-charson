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

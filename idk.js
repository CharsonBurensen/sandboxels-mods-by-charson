elements.frosted_glass = {
    color: "#A3C2C9",
    behavior: behaviors.SOLID,
    category: "materials",
    state: "solid",
    temp: 5,
    tempHigh: 25,
    stateHigh: ["molten_glass", "steam"],
    reactions: {
        "fire": { elem1: ["fire", "lava", "molten_iron"], elem2: ["water"] },
        "freeze_ray": { elem1: ["ice", "snow"], elem2: ["frosted_glass"] },
    }
};

elements.acidic_rain = {
    color: "#1C9C3E",
    behavior: behaviors.LIQUID,
    category: "weather",
    state: "liquid",
    temp: 10,
    tempHigh: 30,
    stateHigh: ["steam"],
    reactions: {
        "mud": { elem1: ["dirt", "rock"], elem2: ["mud"] },
        "tin": { elem1: ["iron", "steel"], elem2: ["rust"] },
        "water": { elem1: ["water"], elem2: ["acid"] },
    }
};

elements.aimolten_lead = {
    name: "MoltenLead",
    color: "#C0A9A0",
    behavior: behaviors.LIQUID,
    category: "materials",
    state: "liquid",
    temp: 350,
    tempHigh: 700,
    stateHigh: ["gas"],
    reactions: {
        "water": { elem1: ["water"], elem2: ["steam"] },
        "tin": { elem1: ["iron", "copper"], elem2: ["brass"] },
        "cold": { elem1: ["ice"], elem2: ["aimolten_lead"] },
    }
};

elements.aiplasma = {
    name: "Plasma",
    color: "#FF00FF",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",
    temp: 1000,
    tempHigh: 3000,
    stateHigh: ["plasma"],
    reactions: {
        "dirt": { elem1: ["iron", "rock"], elem2: ["molten_iron"] },
        "smoke": { elem1: ["oxygen", "nitrogen"], elem2: ["ionized_gas"] },
        "electric": { elem1: ["electric"], elem2: ["ionized_plasma"] },
    }
};

elements.aimolten_gold = {
    name: "Molten_Gold",
    color: "#FFD700",
    behavior: behaviors.LIQUID,
    category: "materials",
    state: "liquid",
    temp: 1064,
    tempHigh: 1300,
    stateHigh: ["gas"],
    reactions: {
        "water": { elem1: ["water"], elem2: ["steam"] },
        "dirt": { elem1: ["sand", "dirt"], elem2: ["golden_sand"] },
        "tin": { elem1: ["iron", "copper"], elem2: ["gold_alloy"] },
    }
};

// Defining additional elements

elements.golden_sand = {
    color: "#DAA520",
    behavior: behaviors.SOLID,
    category: "materials",
    state: "solid",
    temp: 25,
    reactions: {
        "fire": { elem1: ["fire"], elem2: ["molten_gold"] },
    }
};

elements.gold_alloy = {
    color: "#FFD700",
    behavior: behaviors.SOLID,
    category: "materials",
    state: "solid",
    temp: 25,
    reactions: {
        "fire": { elem1: ["fire"], elem2: ["molten_gold"] },
    }
};

elements.ionized_gas = {
    color: "#00FFFF",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",
    temp: 2000,
    tempHigh: 5000,
    stateHigh: ["plasma"],
    reactions: {
        "electric": { elem1: ["electric"], elem2: ["ionized_plasma"] },
    }
};

elements.ionized_plasma = {
    color: "#FF00FF",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas",
    temp: 3000,
    tempHigh: 10000,
    stateHigh: ["plasma"],
    reactions: {
        "rock": { elem1: ["iron"], elem2: ["molten_iron"] },
        "smoke": { elem1: ["oxygen", "nitrogen"], elem2: ["plasma"] },
    }
};



elements.powder = {
    color: ["#a8160c", "#fdff94", "#d47d20"],
    behavior: behaviors.POWDER,
    category: "food",
    viscosity: 10000,
    state: "solid",
    density: 100,
    desc: "its pizza",
	reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

elements.gas = {
    color: "#ab8c60",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 720,
    temp: 80,
    tempLow: 30,
    stateLow: ["brioche"],
    isFood: true,
};

elements.liquid = {
    color: "#d1c0a5",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 999999,
    state: "liquid",
    density: 720,
    temp: 30,
    tempHigh: 50,
    stateHigh: ["steam", "brioche_steam"],
    desc: "it can be evaporated",
	reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

elements.solid = {
    color: ["#c2770e", "#b06227"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    temp: 30,
    tempHigh: 80,
    tempLow: 10,
    stateHigh: ["fragrance", "ash"],
    stateLow: ["cold_brioche"],
    burn: 55,
    isFood: true,
	reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

elements.metal = {
    color: "#1017ad",
    behavior: behaviors.WALL,
    category: "solids",
    temp: 19,
    tempHigh: 100,
    tempLow: -20,
    stateHigh: ["skibidi_aresium"],
    stateLow: ["magma", "electric"],
    burn: 0,
    conduct: 1,
};

elements.molten = {
    color: "#ad1051",
    behavior: behaviors.MOLTEN,
    category: "states",
    temp: 100,
    tempHigh: 153,
    stateHigh: ["tnt", "molten_iron", "copper", "explosion"],
    burn: 0,
    conduct: 1,
};

elements.fyrium.breakInto = "fire";

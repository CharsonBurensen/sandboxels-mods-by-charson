elements.tocopherol = {
    color: "#094237",
    behavior: behaviors.POWDER,
    category: "powders",
    viscosity: 10000,
    state: "solid",
    density: 100,
	reactions: {
        "sodium_acetate": { elem1:"tocopheryl_acetate", elem2:"sodium" },
    }
};

elements.freakium = {
    color: "#ff4fed",
    behavior: behaviors.DGAS,
    category: "gases",
    state: "gas",
    density: 720,
    temp: 80,
    tempLow: 30,
};

elements.tocopheryl_gas = {
    color: "#96e3d4",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 720,
    temp: 80,
    tempLow: 0,
    stateLow: "tocopherol"
};

elements.tocopheryl_acetate = {
    color: "#cffdff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 999999,
    state: "liquid",
    density: 720,
    temp: 30,
    tempHigh: 96,
    stateHigh: ["tocopheryl gas"],
    desc: "it can be evaporated",
	reactions: {
        "oil": { elem1:"baby_oil", elem2:"baby_oil" },
    }
};

elements.baby_oil = {
    color: "#ffeec",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 25,
    state: "liquid",
    density: 720,
    temp: 30,
    tempHigh: 96,
    stateHigh: ["tocopheryl gas"],
    desc: "it can be evaporated",
	reactions: {
        "uranium": { elem1: null, elem2:"diddium" },
    }
};

elements.diddium = {
    color: ["#210742", "#9e20d4"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    temp: 30,
    tempHigh: 80,
    tempLow: 10,
    burn: 55,
    isFood: true,
	reactions: {
        "diddium": { elem1:["diddium", "freakium"], elem2:["diddium", "baby_oil"] },
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

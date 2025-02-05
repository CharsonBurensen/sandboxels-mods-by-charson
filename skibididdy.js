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
        reactions: {
        "head": { elem1:"baby_oil", elem2:"meat" },
        "body": { elem1:"baby_oil", elem2:"meat" },
    }
};

elements.tocopheryl_gas = {
    color: "#96e3d4",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 720,
    temp: 80,
    tempLow: 0,
    stateLow: ["tocopherol"],
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
    stateHigh: ["tocopheryl_gas"],
        reactions: {
        "oil": { elem1:"baby_oil", elem2:"baby_oil" },
    }
};

elements.diddium = {
    color: ["#210742", "#9e20d4"],
    behavior: behaviors.STURDYPOWDER,
    category: "powders",
    temp: 30,
    tempHigh: 80,
    tempLow: 10,
        reactions: {
        "diddium": { elem1:"diddium", elem2:"unstable_diddium" },
    }
};

elements.unstable_diddium = {
    color: ["#210742", "#9e20d4"],
    behavior: behaviors.WALL,
    category: "states",
    temp: 30,
    tempHigh: 80,
    tempLow: 10,
        reactions: {
        "diddium": { elem1:"freakium", elem2:"diddium" },
        "unstable_diddium": { elem1:"diddium", elem2:"baby_oil" },
    }
};

elements.baby_oil = {
    color: "#ffeecc",
    behavior: behaviors.LIQUID,
    category: "liquids",
    temp: 30,
    tempHigh: 96,
    stateHigh: ["tocopheryl_gas"],
        reactions: {
        "uranium": { elem1: null, elem2:"diddium" },
        "diddium": { elem1:"unstable_diddium", elem2:"freakium" },
    }
};

elements.stupidine = {
    color: "#4e4b75",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    temp: 20,
    tempHigh: 137,
    stateHigh: "liquid_stupidine",
    tempLow: -237.15,
    stateLow: "activated_stupidine",
        reactions: {
        "stupidine": { elem1: "stupidine", elem2:"fragrance" },
};

elements.liquid_stupidine = {
    color: ["#5328c9", "4089e3"],
    behavior: behaviors.AGLIQUID,
    category: "liquids",
    state: "liquid",
    temp: 140,
    tempHigh: 500,
    stateHigh: "stupidine_gas",
    tempLow: 25,
    stateLow: "stupidine",
        reactions: {
        "liquid_stupidine": { elem1: "liquid_stupidine", elem2:"slime" },
};

elements.stupidine_gas = {
    color: "#802d3a",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    temp: 500,
    tempHigh: 1000,
    stateHigh: ["nuke", "explosion"],
    tempLow: 200,
    stateLow: "liquid_stupidine",
        reactions: {
        "stupidine_gas": { elem1: "stupidine_gas", elem2:"stench" },
};

elements.activated_stupidine = {
    color: "#3d2f61",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    temp: 20,
        reactions: {
        "stupidine": { elem1:"explosion", elem2:"explosion" },
    }
};

elements.skibidi_soda = {
    color: "#0f1936",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
        reactions: {
        "skibidi_soda": { elem1:"skibidi_soda", elem2:"skibidiness" },
        "head": { elem1: null, elem2:"head" },
    }
};

elements.skibidine = {
    color: ["#51649c", "949c51"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
        reactions: {
        "carbon_dioxide": { elem1:"skibidi_soda", elem2:"skibidi_soda" },
        "iron": { elem1: "magma", elem2:"stupidine" },
    }
};


elements.skibidiness = {
    color: "#567de8",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    temp: 20,
        reactions: {
        "water": { elem1:"skibidiness", elem2:"skibidi_soda"},
    }
};

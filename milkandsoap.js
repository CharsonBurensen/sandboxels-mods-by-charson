elements.maple_syrup = {
    color: "#a13d08",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
    isFood: true,
    desc: "english for sirop derable",
	  reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

elements.radioactive_maple_seed = {
    color: ["#52d156", "#5d875f"],
    behavior: behaviors.POWDER,
    category: "life",
    viscosity: 100000,
    state: "solid",
    isFood: true,
    desc: "how does this work",
  	reactions: {
        "dirt": { elem1:"maple_nut", elem2:"dirt" },
        "grass": { elem1:"maple_nut", elem2:"dirt" },
	"ant": { elem1:"rad_ant", elem:"rad_ant" }
    }
};

elements.maple_nut = {
    color: "#735e3b",
    behavior: behaviors.POWDER,
    category: "life",
    viscosity: 100000,
    state: "solid",
    isFood: true,
    desc: "I dont think this is biologically accurate",
    breakInto: ["maple_syrup", "maple_powder"],
  	reactions: {
        "dirt": { elem1:"maple_plant", elem2:"maple_plant" },
    }
};

elements.maple_plant = {
    color: "#735e3b",
    behavior: behaviors.STURDYPOWDER,
    category: "life",
    viscosity: 100000,
    state: "solid",
    isFood: true,
    desc: "I dont think this is biologically accurate",
    breakInto: "dead_plant",
    burn: 90,
	reactions: {
        "dirt": { elem1:"maple_plant", elem2:"maple_nut" },
        "plant": { elem1:"maple_plant", elem2:"maple_plant" },
	"dead_plant": { elem1:"maple_plant", elem2:"maple_plant" },
        "water": { elem1:"maple_plant", elem2:"maple_plant" },
    }
};

elements.maple_powder = {
    color: "#9e6213",
    behavior: behaviors.POWDER,
    category: "food",
    viscosity: 100000,
    state: "solid",
    isFood: true,
	reactions: {
        "milk": { elem1:"maple_syrup", elem2:"maple_milk" },
	"clay": { elem1: null, elem2:["red_terracotta", "orange_terracotta", "yellow_terracotta", "green_terracotta", "teal_terracotta"] },
    }
};

elements.red_terracotta = {
    color: "#c96363",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.orange_terracotta = {
    color: "#c98c63",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.yellow_terracotta = {
    color: "#c9ae63",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.green_terracotta = {
    color: "#63c96d",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.teal_terracotta = {
    color: "#63c994",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.blue_terracotta = {
    color: "#63b6c9",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.purple_terracotta = {
    color: "#6f63c9",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.heated_terracotta = {
    color: "#db773d",
    behavior: behaviors.STURDYPOWDER,
    category: "states",
    state: "solid",
    temp: 500,
    tempHigh: 1000,
    tempLow: 20,
    stateLow: ["clay", "purity"],
};

elements.maple_milk = {
    color: "#f5e3cb",
    behavior: behaviors.LIQUID,
    category: "food",
    viscosity: 100000,
    state: "liquid",
    desc: "a great drink",
    isFood: true,
	reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

elements.purity = {
    color: "#f0f7fc",
    behavior: behaviors.WALL,
    category: "soaps",
    state: "solid",
    tempHigh: 70,
    stateHigh: "soap",
    stain: 1,
};

elements.purium = {
    color: "#cededd",
    behavior: behaviors.WALL,
    category: "soaps",
    state: "solid",
    tempHigh: 125,
    stateHigh: "purificanol",
    stain: 1,
    conduct: 1,
    breakInto: "purium_dust",
};

elements.purium_dust = {
    color: ["#cededd", "#95c7c4", "#ffffff"],
    behavior: behaviors.POWDER,
    category: "soaps",
    state: "solid",
    tempHigh: 125,
    stateHigh: "purity",
    stain: 1,
    conduct: 1,
};

elements.invalid = {
    color: ["#ff00dc", "#010001"],
    behavior: behaviors.POWDER,
    category: "machines",
    state: "solid",
    tempHigh: 9999,
    desc: "INVALID DESCRIPTION",
    stateHigh: "fallout",
    tempLow: -40,
    stateLow: "random",
    conduct: 1,
    breakInto: "electric",
    reactions: {
        "electric": { elem1: "null", elem2:"null" },
        "invalid": { elem1: "invalid", elem2:"malware" },
    }
};

elements.null = {
    color: ["#514a57", "#2c1040"],
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    desc: "null",
    tempLow: -40,
    breakInto: "random",
    stateLow: "unknown",
    conduct: 1,
    reactions: {
        "electric": { elem1: "null", elem2:"null" },
    }
};

elements.purificanol = {
    color: "#ffffff",
    behavior: behaviors.LIQUID,
    category: "soaps",
    viscosity: 100,
    state: "liquid",
    desc: "soap 3.0",
    extinguish: true,
    density: 999999999,
    temp: 20,
    tempLow: -273,
    stateLow: "foam",
	reactions: {
        "dirt": { elem1: "foam", elem2: "purity" },
        "sand": { elem1: "foam", elem2: "purity" },
        "dust": { elem1: "foam", elem2: "purity" },
        "ash": { elem1: "foam", elem2: "purity" },
        "rock": { elem1: "foam", elem2: "porcelain" },
        "clay": { elem1: "foam", elem2: "porcelain" },
        "magma": { elem1: "foam", elem2: "purium" },
	"slag": { elem1: "foam", elem2: "purity" },
	"basalt": { elem1: "foam", elem2: "purity" },
        "slime": { elem1: "foam", elem2: "purity" },
	"dirty_water": { elem1: "foam", elem2: "water" },
	"blood": { elem1: "foam", elem2: "water" },
	"molten_iron": { elem1: "foam", elem2: "purium" },
	"molten_dirt": { elem1: "foam", elem2: "purium" },
	"molten_copper": { elem1: "foam", elem2: "purium" },
	"rust": { elem1: "foam", elem2: "purium_dust" },
	"water": { elem1: "foam", elem2: "bubble" },
	"mudstone": { elem1: "foam", elem2: "porcelain" },
    "thermite": { elem1: "foam", elem2: "null" },
    },
};

elements.rad_ant = {
    color: ["#6ceb36", "#50e012"],
    behavior: behaviors.LIQUID,
    category: "life",
    state: "solid",
    desc: "uh oh",
  	reactions: {
        "dirt": { elem1:"rad_ant", elem2:"radiation" },
        "grass": { elem1:"rad_ant", elem2:"radioactive_maple_seed" },
	"ant": { elem1:"rad_ant", elem:"rad_ant" },
	"rock": { elem1:"rad_ant", elem:"uranium" },
    }
};

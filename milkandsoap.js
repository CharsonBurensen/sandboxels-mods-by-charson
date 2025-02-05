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
	reactions: {
        "dirt": { elem1:"maple_plant", elem2:"maple_nut" },
        "plant": { elem1:"maple_plant", elem2:"maple_plant" },
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
    }
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

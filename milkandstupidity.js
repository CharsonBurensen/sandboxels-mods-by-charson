elements.stupid = {
    color: ["#eb3486", "#0affda", "#c7fa89"],
    behavior: behaviors.POWDER,
    category: "weapons",
    viscosity: 10000,
    state: "solid",
    density: 100,
    desc: "stupid",
    temp: 20,
    tempLow: 19,
    tempHigh: 21,
	  reactions: {
        "water": { elem1:"blaster", elem2:"nuke" },
        "stupid": { elem1:"cloner", elem2:"nuke" },
	"dirt": { elem1:"tornado", elem2:"stupid" },
    }
};

elements.di_stupid = {
    color: ["#0b3486", "#faffda", "#07fa89"],
    behavior: behaviors.POWDER,
    category: "weapons",
    viscosity: 10000,
    state: "solid",
    density: 100,
    desc: "stupid",
    temp: 20,
    tempLow: 19,
    tempHigh: 21,
	  reactions: {
        "di_stupid": { elem1:"di_stupid", elem2:"tsunami" },
        "stupid": { elem1:"party_popper", elem2:"cloner" },
	"water": { elem1:"earthquake", elem2:"acid" },
    }
};

elements.almond = {
    color: ["#855b34", "#9c836b", "#f5e7da"],
    behavior: behaviors.POWDER,
    category: "weapons",
    state: "solid",
    density: 100,
    desc: "stupid",
    temp: 20,
    tempLow: 10,
    tempHigh: 40,
    stateHigh: "nut_sauce",
    breakInto: "nut_sauce",
    stateLow: "cloner",
    conduct: 1,
	  reactions: {
        "head": { elem1: null, elem2:"head" },
        "juice": { elem1:"party_popper", elem2:"party_popper" },
	"water": { elem1:"nut_sauce", elem2:"almond_water" },
    }
};

elements.nut_sauce = {
    color: ["#f2cba7", "#f5e7da"],
    behavior: behaviors.LIQUID,
    category: "food",
    viscosity: 10000,
    state: "liquid",
    density: 100,
    desc: "stupid",
    temp: 20,
    tempLow: 0,
    tempHigh: 50,
    stateHigh: ["blaster", "floating_cloner"],
    stateLow: "glue",
    conduct: 1,
	  reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

elements.tri_stupid = {
    color: ["#ffffff", "#7a1d1d", "#000000"],
    behavior: behaviors.POWDER,
    category: "weapons",
    viscosity: 10000,
    state: "solid",
    density: 100,
    desc: "stupid",
    temp: 20,
    tempLow: 0,
    tempHigh: 40,
    stateLow: "ice",
    stateHigh: "magma",
    conduct: 1,
	  reactions: {
        "almond": { elem1:"hot_bomb", elem2:"cold_bomb" },
	"nut_sauce": { elem1:"heat_ray", elem2:"freeze_ray" },
	"head": { elem1: null, elem2:"head" },
    }
};

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
	"ant": { elem1: null, elem2:"rad_ant" }
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
    stateLow: "unktri_stupidwn",
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
    temp: 1,
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
	"molten_slag": { elem1: "foam", elem2: "purium_dust" },
	"basalt": { elem1: "foam", elem2: "purity" },
        "slime": { elem1: "foam", elem2: "purity" },
	"dirty_water": { elem1: "foam", elem2: "water" },
	"blood": { elem1: "foam", elem2: "water" },
	"molten_iron": { elem1: "foam", elem2: "purium" },
	"molten_dirt": { elem1: "foam", elem2: "purium" },
	"molten_copper": { elem1: "foam", elem2: "purium" },
	"rust": { elem1: "foam", elem2: "purium_dust" },
	"water": { elem1: "foam", elem2: "bubble" },
	"ice": { elem1: "foam", elem2: "bubble" },
	"steam": { elem1: "foam", elem2: "bubble" },
	"mudstone": { elem1: "foam", elem2: "porcelain" },
	"rad_ant": { elem1: "foam", elem2: "ant" },
    "thermite": { elem1: "foam", elem2: "null" },
    },
};

elements.rad_ant = {
    color: ["#6ceb36", "#50e012"],
    behavior: behaviors.LIQUID,
    category: "life",
    state: "solid",
    desc: "uh oh",
    tempHigh: 100,
    stateHigh: ["dead_bug", "radiation"],
  	reactions: {
        "dirt": { elem1:"rad_ant", elem2:"radiation" },
        "grass": { elem1:"rad_ant", elem2:"radioactive_maple_seed" },
	"ant": { elem1:"rad_ant", elem2:"rad_ant" },
	"rock": { elem1:"rad_ant", elem2:"uranium" },
    }
};

elements.buttermilk = {
    color: "#f4f5c1",
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    desc: "uh oh",
    tempHigh: 100,
    stateHigh: "steam",
  	reactions: {
        "head": { elem1: null, elem2:"head" },
        "water": { elem1: null, elem2:"milk" },
	"rock": { elem1: null, elem2:"butter" },
	"magma": { elem1: null, elem2:"melted_butter" },
    }
};

if (!elements.butter.reactions) { // Include this block once
    elements.butter.reactions = {} // This creates the property if it doesn't exist
}
elements.butter.reactions.milk = { "elem1":null, "elem2":"buttermilk" }

elements.stupid_particle = {
    color: ["#eb3486", "#0affda", "#c7fa89"],
    behavior: behaviors.BOUNCY,
    category: "weapons",
    state: "solid",
    density: 0,
    desc: "stupid",
    temp: 20,
    tempLow: 19,
    tempHigh: 21,
	  reactions: {
        "stupid_particle": { elem1:"neutron", elem2:"nuke" },
    }
};

elements.boom_boom_particle = {
    color: ["#00ff00", "#ff00dc", "#0000ff"],
    behavior: behaviors.BOUNCY,
    category: "weapons",
    state: "gas",
    density: 0,
    desc: "andrew zhao",
    temp: 20,
    tempLow: 19,
    tempHigh: 21,
	  reactions: {
        "boom_boom_particle": { elem1:"explosion", elem2:"pop" },
    }
};

elements.julianite = {
    color: ["#505050", "#265227"],
    behavior: behaviors.RADPOWDER,
    category: "special",
    state: "liquid",
    tempHigh: 999999,
    stateHigh: "plasma",
    tempLow: -25,
  	reactions: {
        "electric": { elem1:"hyperjulianite" },
	"plasma": { elem1:"hyperjulianite" },
	"smoke": { elem1:"hyperjulianite" },
	"lightning": { elem1:"hyperjulianite" },
	"rock": { elem2:"julianite" },
    }
};

elements.hyperjulianite = {
    color: ["#6A6A6A", "#522651"],
    behavior: behaviors.SLIDE,
    category: "states",
    state: "solid",
    desc: "uh oh",
    tempHigh: 1000,
    tempLow: -40,
    stateLow: "snake",
  	reactions: {
        "static": { elem2:"julianite" },
	"rock": { elem2:"plasma" },
    }
};

elements.sankarium = {
    color: ["#b5140e", "#494b52", "#d2d9d2"],
    behavior: behaviors.BUBBLE,
    category: "special",
    state: "solid",
    tempHigh: 100,
    burn: 90,
    fireColor: "#0c92f7",
    burnInto: "c-4",
    stateHigh: "narayananium",
  	reactions: {
        "dirt": { elem1:"stupid" },
    }
};

elements.narayananium = {
    color: ["#0EAFB5", "#525049", "#D9D2D9"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    burn: 90,
    fireColor: "#22DDA2",
};

elements.narayananium.behavior = [
   ["XX","XX","XX"],
    ["XX","XX","XX"],
    ["XX","M1 AND EX:10>party_popper","XX"],   
];

elements.tetra_stupid = {
    color: ["#4AB58A", "#B54A75"],
    behavior: behaviors.SLIDE,
    category: "weapons",
    state: "solid",
    desc: "made from melting minions",
    conduct: 1,
};

elements.banana = {
    color: ["#F4FD3F", "#C3F30C", "#FBE904"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    desc: "minion reference",
    burn: 90,
    fireColor: "#ED126A",
    burnInto: "fragrance",
    conduct: 1,
    breakInto: "banana_milk",
    breakIntoColor: "#d8b284",
    reactions: {
        "head": { elem1: null },
	"milk": { elem1: null, elem2: "banana_milk" },
    }
};

elements.banana_milk = {
    color: "#fdfdce",
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    density: 10000,
    charge: 1,
    superconductAt: 100,
    burn: 100,
    viscosity: 29,
    tempLow: -7,
    stateLowName: "frozen_banana_milkshake",
    tempHigh: 239,
    stateHigh: "steam",
    fireColor: "#DD00FF",
    burnInto: "dioxin",
    conduct: 1,
    reactions: {
        "head": { elem1: null },
    }
};

elements.thermon = {
    color: "#EB14AC",
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "The thermon is a subatomic particle with a negative one elementary electric charge as well as heat.",
    state: "gas",
    charge: 1,
    superconductAt: 1,
    burning: true,
    temp: 999,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "thermon": { elem1: "superthermon", elem2: "neutron" },
    }
};

elements.superthermon = {
    color: "#B010EF",
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "The superthermon is a subatomic particle with a negative one elementary electric charge as well as high heat.",
    state: "gas",
    charge: 1,
    superconductAt: 1,
    burning: true,
    temp: 99999,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "n_explosion" },
	"thermon": { elem1: "hyperthermon", elem2: "neutron" },
    }
};

elements.hyperthermon = {
    color: ["#5554AB", "#FF9D00"],
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "The hyperthermon is a subatomic particle with a negative one elementary electric charge as well as immense heat.",
    state: "gas",
    charge: 1,
    superconductAt: 1,
    burning: true,
    temp: 9999999,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "n_explosion" },
	"electric": { elem1: "h_bomb" },
	"thermon": { elem1: "unstable_thermon", elem2: "neutron" },
    }
};

elements.unstable_thermon = {
    color: ["#FFFFFF"],
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "ERROR",
    state: "gas",
    charge: 1,
    superconductAt: 1,
    burning: true,
    temp: 9999999999999999999999999999999999999,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "n_explosion" },
	"proton": { elem1: "dirty_bomb" },
	"electric": { elem1: "h_bomb" },
	"thermon": { elem1: "supernova", elem2: "neutron" },
    }
};


elements.tetra_stupid.behavior = [
    ["CH:tetra_stupid","CH:banana","CH:tetra_stupid"],
    ["CH:banana","XX","CH:banana"],
    ["M2","M1 AND CH:banana","M2"]
];

elements.cryon = {
    color: "#1FD1E0",
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "The cryon is a subatomic particle with a negative one elementary electric charge as well as negative heat.",
    state: "gas",
    charge: 1,
    superconductAt: -273.5,
    temp: -99,
    burn: 100,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "cryon": { elem1: "supercryon", elem2: "neutron" },
    }
};

elements.supercryon = {
    color: "#99B1C0",
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "The supercryon is a subatomic particle with a negative one elementary electric charge as well as extremely low heat.",
    state: "gas",
    charge: 1,
    superconductAt: -273.5,
    temp: -273.5,
    burn: 100,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "n_explosion" },
	"cryon": { elem1: "hypercryon", elem2: "neutron" },
    }
};

elements.hypercryon = {
    color: ["#0062FF", "#6424DB"],
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "The hypercryon is a subatomic particle with a negative one elementary electric charge as well as immense lack of heat.",
    state: "gas",
    charge: 1,
    superconductAt: -273.5,
    temp: -999999,
    burn: 100,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "n_explosion" },
	"electric": { elem1: "h_bomb" },
	"cryon": { elem1: "unstable_cryon", elem2: "neutron" },
    }
};

elements.unstable_cryon = {
    color: ["#FFFFFF"],
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "ERROR",
    state: "gas",
    charge: 1,
    superconductAt: -273.5,
    temp: -999999999999999999999999999,
    burn: 100,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "n_explosion" },
	"proton": { elem1: "dirty_bomb" },
	"electric": { elem1: "h_bomb" },
	"cryon": { elem1: "supernova", elem2: "neutron" },
    }
};

elements.anti_soap = {
    color: ["#0000FF"],
    behavior: behaviors.FOAM,
    category: "solids",
    state: "solid",
    burn: 100,
    reactions: {
        "soap": { elem2: null },
	"purificanol": { elem2: null },
    }
};

elements.violetium = {
    color: ["#494bb3", "#7049b3", "#7049b3"],
    category: "powders",
    state: "solid",
    temp: 40,
    burn: 100,
    fireColor: "#6e34eb",
    conduct: 1,
};

elements.pyrus_minimus = {
    color: ["#eb6e34", "#ffd014", "#ff143c"],
    behavior: behaviors.FLY,
    category: "life",
    state: "solid",
    egg: "magma",
    foodNeed: 3,
    breakInto: ["fire", "cooked_meat", "slime"],
    glow: false,
    temp: 300,
    burning: true,
    singleColor: true,
    fireColor: "#ff5b14",
    conduct: 1,
};

runAfterLoad(function() {
    // Your code here
    console.log("Please set Abs Zero to -99999999999999999999999999 for cryons to work, thanks");
});

if (!enabledMods.includes("mods/particlesplus.js")) { enabledMods.unshift("mods/particlesplus.js"); localStorage.setItem("enabledMods", JSON.stringify(enabledMods)); alert("Please set Abs Zero to -99999999999999999999999999 for cryons to work, thanks") }
else {

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
	"electric": { elem1:"di_stupid", elem2:"tri_stupid" },
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
    hidden: true,
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
    category: "food",
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
    isFood: true,
	reactions: {
        "milk": { elem1:"maple_syrup", elem2:"maple_milk" },
	"clay": { elem1: null, elem2:["red_terracotta", "terracotta", "yellow_terracotta", "green_terracotta", "teal_terracotta"] },
    }
};

elements.red_terracotta = {
    color: "#c96363",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    hidden: true,
    stateHigh: "heated_terracotta",
};

elements.terracotta = {
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
    hidden: true,
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.green_terracotta = {
    color: "#63c96d",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    hidden: true,
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.teal_terracotta = {
    color: "#63c994",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    hidden: true,
    stateHigh: "heated_terracotta",
};

elements.blue_terracotta = {
    color: "#63b6c9",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    hidden: true,
    tempHigh: 500,
    stateHigh: "heated_terracotta",
};

elements.purple_terracotta = {
    color: "#6f63c9",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    tempHigh: 500,
    hidden: true,
    stateHigh: "heated_terracotta",
};

elements.heated_terracotta = {
    color: "#db773d",
    behavior: behaviors.STURDYPOWDER,
    category: "states",
    state: "solid",
    temp: 500,
    tempHigh: 1000,
    hidden: true,
    tempLow: 20,
    stateLow: ["teracotta", "purity"],
};

elements.maple_milk = {
    color: "#f5e3cb",
    behavior: behaviors.LIQUID,
    category: "food",
    viscosity: 100000,
    state: "liquid",
    desc: "a great drink",
    hidden: true,
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
	hidden: true,
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
	hidden: true,
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
	hidden: true,
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
	"antimatter": { elem1: "anti_soap", elem2: "contaminol" },
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
	"dead_plant": { elem1: "foam", elem2: "plant" },
	"meat": { elem1: "foam", elem2: "cooked_meat" },
	"rotten_meat": { elem1: "foam", elem2: "cured_meat" },
	"cancer": { elem1: "foam", elem2: "dna" },
    "thermite": { elem1: "foam", elem2: "null" },
    },
};

elements.rad_ant = {
    color: ["#6ceb36", "#50e012"],
    behavior: behaviors.LIQUID,
    category: "life",
    state: "solid",
	hidden: true,
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
	hidden: true,
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
	hidden: true,
    tempHigh: 1000,
    tempLow: -40,
    stateLow: "snake",
  	reactions: {
        "static": { elem2:"julianite" },
	"rock": { elem2:"plasma" },
	"water": { elem2:"electric" },
	"dirt": { elem2:"battery" },
	"plant": { elem2:"snake" },
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
	hidden: true,
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
	hidden: true,
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
	hidden: true,
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
    maxSize: 1,
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
	hidden: true,
    category: "energy",
    desc: "The superthermon is a subatomic particle with a negative one elementary electric charge as well as high heat.",
    state: "gas",
    charge: 1,
    maxSize: 1,
    superconductAt: 1,
    burning: true,
    temp: 99999,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "explosion" },
	"thermon": { elem1: "hyperthermon", elem2: "neutron" },
    }
};

elements.hyperthermon = {
    color: ["#5554AB", "#FF9D00"],
    behavior: behaviors.BOUNCY,
    category: "energy",
	hidden: true,
    desc: "The hyperthermon is a subatomic particle with a negative one elementary electric charge as well as immense heat.",
    state: "gas",
    charge: 1,	
    maxSize: 1,
    superconductAt: 1,
    burning: true,
    temp: 9999999,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "explosion" },
	"electric": { elem1: "h_bomb" },
	"thermon": { elem1: "unstable_thermon", elem2: "neutron" },
    }
};

elements.unstable_thermon = {
    color: ["#FFFFFF"],
    behavior: behaviors.BOUNCY,
    category: "energy",
    desc: "ERROR",
	hidden: true,
    maxSize: 1,
    state: "gas",
    charge: 1,
    superconductAt: 1,
    burning: true,
    temp: 9999999999999999999999999999999999999,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "explosion" },
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
    maxSize: 1,
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
	hidden: true,
    charge: 1,
    maxSize: 1,
    superconductAt: -273.5,
    temp: -273.5,
	hidden: true,
    burn: 100,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "explosion" },
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
	hidden: true,
    temp: -999999,
    burn: 100,
    maxSize: 1,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "explosion" },
	"electric": { elem1: "h_bomb" },
	"cryon": { elem1: "unstable_cryon", elem2: "neutron" },
    }
};

elements.unstable_cryon = {
    color: ["#FFFFFF"],
    behavior: behaviors.BOUNCY,
    category: "energy",
    maxSize: 1,
    desc: "ERROR",
    state: "gas",
    charge: 1,
    superconductAt: -273.5,
	hidden: true,
    temp: -999999999999999999999999999,
    burn: 100,
    fireColor: "#1CD8E3",
    conduct: 1,
    reactions: {
        "neutron": { elem1: "explosion" },
	"proton": { elem1: "dirty_bomb" },
	"electric": { elem1: "h_bomb" },
	"cryon": { elem1: "supernova", elem2: "neutron" },
    }
};

elements.anti_soap = {
    color: ["#0000FF"],
    behavior: behaviors.FOAM,
    category: "soaps",
    state: "solid",
    hidden: true,
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

elements.violetium.behavior = [
   ["XX","XX","XX"],
    ["XX","XX","XX"],
    ["XX","M1 AND EX:10>purple_gold","XX"],   
];

elements.pyrus_minimus = {
    color: ["#eb6e34", "#ffd014", "#ff143c"],
    behavior: behaviors.FLY,
    category: "life",
    state: "solid",
    egg: "magma",
    foodNeed: 3,
    breakInto: ["fire", "cooked_meat", "slime"],
    glow: true,
    temp: 300,
    singleColor: true,
    fireColor: "#ff5b14",
    conduct: 1,
     reactions: {
        "cooked_meat": { elem2: null },
	"dead_plant": { elem2: null },
	"juice": { elem2: null },
	"chocolate": { elem2: null },
	"basalt": { elem2: null },
    }
};

elements.stablium = {
    color: ["#516c87", "#de1998", "#c4e043"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    alpha: 0.73,
    breakInto: ["positron", "electrum"],
    glow: true,
    temp: 20,
    burn: 55,
    singleColor: true,
    fireColor: ["#f71e0a", "#f7940a", "#eff70a", "#0af722", "#0a69f7"],
    conduct: 1,
    tempHigh: 275,
     reactions: {
        "proton": { elem1: "ash", elem2: ["thermon", "cryon"] },
    } 
};

elements.arsenic = {
    color: ["#874809", "#97ad05"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    temp: 20,
    burn: 55,
    burnInto: "poison",
    fireColor: "#a1ccc7",
    tempHigh: 275,
     reactions: {
        "copper": { elem1: "scheele_green", elem2: "scheele_green" },
    } 
};

elements.scheele_green = {
    color: ["#2B7D45", "#87CA7C"],
    behavior: behaviors.RADPOWDER,
    category: "powders",
    state: "solid",
    alpha: 0.99,
    temp: 20,
    breakInto: "poison",
    burn: 55,
    burnInto: "poison",
    fireColor: "#2cff29",
    tempHigh: 275,
	hidden: true,
    stateHigh: "molten_copper",
     reactions: {
        "terracotta": { elem1: null, elem2: "green_terracotta" },
	"head": { elem1: "poison", elem2: "green_skull" },
    } 
};

elements.green_skull = {
    color: ["#67bf65", "#527d51"],
    behavior: behaviors.RADPOWDER,
    category: "powders",
    state: "solid",
    temp: 20,
    breakInto: ["bone_meal", "fallout"],
    burn: 55,
    burnInto: "rad_shard",
	hidden: true,
    fireColor: "#573311",
    tempHigh: 275,
    stateHigh: "rad_steam",
     reactions: {
	"head": { elem2: "green_skull" },
    } 
};

elements.contaminol = {
    color: "#005F00",
    behavior: behaviors.RADLIQUID,
    category: "soaps",
    viscosity: 100,
    state: "liquid",
    extinguish: true,
    density: 999999999,
    temp: 1,
    tempLow: -273,
    stateLow: "foam",
	reactions: {
        "dirt": { elem1: "foam", elem2: "impurity" },
	"purity": { elem1: "foam", elem2: "impurity" },
        "sand": { elem1: "foam", elem2: "tinder" },
        "dust": { elem1: "foam", elem2: "magnesium" },
        "ash": { elem1: "foam", elem2: "magnesium" },
        "rock": { elem1: "foam", elem2: "mudstone" },
        "clay": { elem1: "foam", elem2: "slag" },
        "magma": { elem1: "foam", elem2: "molten_uranium" },
	"purium_dust": { elem1: "foam", elem2: "rust" },
	"basalt": { elem1: "foam", elem2: "thermite" },
        "slime": { elem1: "foam", elem2: "magma" },
	"dirty_water": { elem1: "foam", elem2: "slime" },
	"water": { elem1: "foam", elem2: "oil" },
	"iron": { elem1: "foam", elem2: "impurium" },
	"molten_dirt": { elem1: "foam", elem2: "impurium" },
	"copper": { elem1: "foam", elem2: "rust" },
	"gold_coin": { elem1: "foam", elem2: "rust" },
	"ice": { elem1: "foam", elem2: "blood_ice" },
	"steam": { elem1: "foam", elem2: "rad_steam" },
	"porcelain": { elem1: "foam", elem2: "smoke" },
	"plant": { elem1: "foam", elem2: "dead_plant" },
	"laser": { elem1: "purificanol", elem2: "explosion" },
	"ant": { elem1: "foam", elem2: "rad_ant" },
        "electric": { elem1: "foam", elem2: "malware" },
	"meat": { elem1: "foam", elem2: "rotten_meat" },
	"cooked_meat": { elem1: "foam", elem2: "rotten_meat" },
	"cured_meat": { elem1: "foam", elem2: "rotten_meat" },
	"dna": { elem1: "foam", elem2: "cancer" },
    }
};

elements.impurity = {
    color: "#4B0663",
    behavior: behaviors.WALL,
    category: "soaps",
    state: "solid",
    tempHigh: 70,
    hidden: true,
    stateHigh: "acid",
    stateHighColor: "#EB14E0",
    stain: 1,
};

elements.impurium = {
    color: "#CECFDE",
    behavior: behaviors.WALL,
    category: "soaps",
    state: "solid",
    tempHigh: 125,
    stateHigh: "contaminol",
    stain: 1,
    hidden: true,
    conduct: 1,
    breakInto: "plague",
};

elements.volatilium = {
    color: ["#97BF40", "#58BF40", "#BFA740"],
    behavior: behaviors.STURDYPOWDER,
    category: "special",
    state: "solid",
    alpha: 0.99,
    breakInto: ["electric", "steel"],
    temp: 20,
    burn: 55,
    singleColor: true,
    fireColor: ["#f71e0a", "#f7940a", "#eff70a", "#0af722", "#0a69f7"],
    conduct: 1,
    tempHigh: 30,
	breakInto: "border",
     reactions: {
        "neutron": { elem1: "molten_slag", elem2: ["invalid", "beryllium"] },
    } 
};

elements.beryllium = {
    color: ["#aaaa9f", "#615d52", "#282b28"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    breakInto: ["emerald", "proton"],
    temp: 20,
    conduct: 1,
	desc: "Beryllium is a chemical element, it has symbol Be and atomic number 4. It is a steel-gray, hard, strong, lightweight and brittle alkaline earth metal. It is a divalent element that occurs naturally only in combination with other elements to form minerals.",
    tempHigh: 1287,
	breakInto: "emerald",
     reactions: {
        "oxygen": { elem1: "beryllium_oxide", elem2: "beryllium_oxide" },
		"head": { elem2: "poison" },
    } 
};

elements.beryllium_oxide = {
    color: "#c9c9d1",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    temp: 20,
    insulate: 1,
    } 
};

elements.emerald = {
    color: ["#75C03F", "#3FC049", "#22B748"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    temp: 20,
	tempHigh: 1287,
    } 
};
	
}

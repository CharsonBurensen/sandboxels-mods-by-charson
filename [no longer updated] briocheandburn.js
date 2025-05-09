elements.syrup = {
    color: "#a13d08",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
    isFood: true,
    desc: "maple syrup",
	reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

elements.akshajium = {
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

elements.brioche_steam = {
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

elements.fancy_dough = {
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

elements.brioche = {
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
    breakInto: "fancy_flour",
	reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

elements.aresium = {
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

elements.skibidi_aresium = {
    color: "#ad1051",
    behavior: behaviors.MOLTEN,
    category: "states",
    temp: 100,
    tempHigh: 153,
    stateHigh: ["tnt", "molten_iron", "copper", "explosion"],
    burn: 0,
    conduct: 1,
};

elements.cold_brioche = {
    color: "#5f7a8c",
    behavior: behaviors.WALL,
    category: "states",
    temp: 5,
    tempHigh: 30,
    stateHigh: ["brioche"],
};

elements.fancy_flour = {
    color: "#f5e9b5",
    behavior: behaviors.POWDER,
    category: "powders",
    temp: 20,
    tempHigh: 70,
	burn: 70,
    stateHigh: ["fragrance", "smoke"],
};

//thanks to the creator of stickyslime.js for this code
elements.syrup.behavior = [
    "XX|ST|XX",
    "ST AND M2|XX|ST AND M2",
    "XX|ST AND M1|XX",
];

elements.briochify = {
    color: ["#c2770e", "#ff0000", "#00ff00", "#0000ff", "#ffdec4"],
    tool: function(pixel) {
        if (pixel.element == "bread") {
            pixel.element = "brioche"
        }
	if (pixel.element == "flour") {
            pixel.element = "fancy_flour"
        }
	if (pixel.element == "dough") {
            pixel.element = "fancy_dough"
        }
	if (pixel.element == "steam") {
            pixel.element = "brioche_steam"
        }
	if (pixel.element == "kai_cenat") {
            pixel.element = "brioche"
        }
    },
    category: "tools",
};

elements.pyrane = {
    color: "#fc7c19",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    temp: 50,
    tempLow: -20,
    stateLow: ["fyrium"],
    reactions: {
        "ash": { elem1: null, elem2:"pyric_nitrite" },
	"dirt": { elem1:"pyrane", elem2:"fire" },
	"hydrogen": { elem1:"hydroid", elem2:"hydroid" },
    }
};

elements.pyric_nitrite = {
    color: "#b3270e",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    temp: 20,
    conduct: 1,
    reactions: {
        "iron": { elem1:"pyric_nitrite", elem2:"pyric_rust" },
	"oil": { elem1: null, elem2:"nitrol_fuel" },
	"electric": { elem1:["fire", "nitrogen", "stench", "electric", "explosion"], elem2:"fire" },
	"shock": { elem1:["fire", "nitrogen", "stench", "electric", "explosion"], elem2:"fire" },
    }
};

elements.pyric_rust = {
    color: "#913e17",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    temp: 20,
    reactions: {
        "steel": { elem1: null, elem2:"tnt" }
    }
};

elements.fyrium = {
    color: "#ffa930",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    temp: 20,
    tempHigh: 40,
    stateHigh: ["molten_fyrium"],
};

elements.molten_fyrium = {
    color: "#ffffff",
    behavior: behaviors.MOLTEN,
    category: "states",
    temp: 40,
    tempLow: -20,
    stateLow: ["fyrium"],
    reactions: {
        "water": { elem1:"fire", elem2:"water" }
    }
};

elements.nitrol_fuel = {
    color: "#4f180e",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    temp: 20,
    reactions: {
        "wood": { elem1: null, elem2:"fueled_wood" },
    }
};

elements.fueled_wood = {
    color: "#631608",
    behavior: behaviors.WALL,
    category: "weapons",
    state: "solid",
    temp: 20,
    tempHigh: 30,
    stateHigh: ["rocket", "pyrane", "nitrol_fuel", "explosion", "stench"],
    reactions: {
        "fire": { elem1:["rocket", "pyrane", "nitrol_fuel", "explosion", "stench"], elem2:["rocket", "pyrane", "nitrol_fuel", "explosion", "stench"] },
    }
};

elements.hydroid = {
    color: "#3a0ca6",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    temp: 20,
    tempHigh: 100,
    density: 12,
    stateHigh: ["pyrane", "steam"],
    reactions: {
        "fire": { elem1: "hydroid", elem2:"explosion" },
	"body": { elem1: "hydroid", elem2:"fyrium" },
        "head": { elem1: "hydroid", elem2:"pyrane" },
        "water": { elem1: "hydroid", elem2:"hydroid" },
        "syrup": { elem1: "hydroid", elem2:"hydroid" },
	"magma": { elem1: "hydroid", elem2:"hydroid" },
	"oil": { elem1: "hydroid", elem2:"hydroid" },
        "juice": { elem1: "hydroid", elem2:"hydroid" },
        "syrup": { elem1: "hydroid", elem2:"hydroid" },
    }
};

//by someone named spencer
elements.kai_cenat = {
    color: "#e00b0b",
    behavior: behaviors.STURDYPOWDER,
    category: "special",
    state: "solid",
    desc: "wow",
    conduct: 1,
};

elements.kai_cenat.behavior = [
    ["XX","CH:kai_cenat","XX"],
    ["CH:kai_cenat","XX","CH:kai_cenat"],
    ["M2","M1 AND CH:kai_cenat","M2"]
];

elements.kai_eraser = {
    color: ["e00b0b", "#ff0000", "#00ff00", "#0000ff"],
    tool: function(pixel) {
        if (pixel.element == "kai_cenat") {
            pixel.element = "foam"
        }
    },
    category: "tools",
};

elements.melted_butter.reactions.bread = { "elem1": null, "elem2":"brioche" },
elements.water.reactions.fancy_flour = { "elem1": null, "elem2":"fancy_dough" },
elements.wood.reactions.nitrol_fuel = { "elem1":"fueled_wood", "elem2": null },
	
elements.brioche.breakInto = "fancy_flour";
elements.fyrium.breakInto = "fire";

elements.fire.reactions.nitrogen = { "elem1": null, "elem2": "pyrane" },
elements.ash.reactions.pyrane = { "elem1":"pyric_nitrite", "elem2": null },
elements.oil.reactions.pyric_nitrite = { "elem1":"nitrol_fuel", "elem2": null },
elements.hydrogen.reactions.pyrane = { "elem1":"hydroid", "elem2": null },
elements.fire.reactions.fueled_wood = { "elem1": "fire", "elem2": ["rocket", "pyrane", "nitrol_fuel", "explosion", "stench"] };
elements.water.reactions.molten_fyrium = { "elem1": null, "elem2":["fire", "explosion"] },

elements.brioche.breakInto = "fancy_flour";
elements.fyrium.breakInto = "fire";



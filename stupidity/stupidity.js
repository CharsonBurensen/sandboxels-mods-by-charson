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

elements.monkey = {
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
        "monkey": { elem1:"monkey", elem2:"tsunami" },
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
    stateHigh: "incinerate",
    stateLow: "glue",
    conduct: 1,
	  reactions: {
        "head": { elem1: null, elem2:"head" },
    }
};

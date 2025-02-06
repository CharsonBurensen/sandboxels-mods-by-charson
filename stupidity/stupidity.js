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

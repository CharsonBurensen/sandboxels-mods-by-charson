elements.syrup = {
    color: "#a13d08",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
	}
};

elements.brioche_steam = {
    color: "#ab8c60",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 720,
    temp: 80,
    tempLow: 10,
    stateLow: ["cold_brioche"]
	}
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
	}
};

elements.brioche = {
    color: "#c2770e", "#ffbc82",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    temp: 30,
    tempHigh: 80,
    tempLow: 10,
    stateHigh: ["fragrance", "ash"],
    stateLow: ["cold_brioche"],
};

elements.cold_brioche = {
    color: "#c2770e", "#8c7a5f",
    behavior: behaviors.WALL,
    category: "food",
    temp: 5,
    tempHigh: 30,
    stateHigh: ["brioche"],
};

elements.fancy_flour = {
    color: "#f5e9b5",
    behavior: behaviors.POWDER,
    category: "powder",
    temp: 20,
    tempHigh: 70,
    stateHigh: ["fragrance", "smoke"],
};

//thanks to the creator of stickyslime.js for this code
elements.syrup.behavior = [
    "XX|ST|XX",
    "ST AND M2|XX|ST AND M2",
    "XX|ST AND M1|XX",
];

elements.melted_butter.reactions.bread = { "elem1": null, "elem2":"brioche" },
elements.fancy_flour.reactions.water = { "elem1": null, "elem2":"fancy_dough" },
elements.brioche.breakInto = "fancy_flour",

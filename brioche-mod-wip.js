elements.syrup = {
    color: "#a13d08",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
    isFood: true,
	}
};

elements.brioche = {
    color: "#c2440e",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    isFood: true,
};

elements.fancy_flour = {
    color: "#f5e9b5",
    behavior: behaviors.POWDER,
    category: "powder",
    temp: 20,
    tempHigh: 70,
    stateHigh: ["fragrance", "smoke"],

};

elements.melted_butter.reactions.bread = { "elem1": null, "elem2":"brioche" }
elements.brioche.breakInto = "fancy_flour"

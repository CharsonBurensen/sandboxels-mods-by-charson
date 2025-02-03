elements.syrup = {
    color: "#a13d08",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
	reactions: {
		"humans": { elem1: null, elem2: "humans" },
	}
};

elements.brioche = {
    color: "#c2440e",
    behavior: behaviors.POWDER,
    category: "food",
	reactions: {
		"humans": { elem1: null, elem2: "humans" },
	}
};

elements.melted_butter.reactions.bread = { "elem1": null, "elem2":"brioche" }

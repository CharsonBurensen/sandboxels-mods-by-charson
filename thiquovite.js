elements.thiquovite = {
    color: "#e3f9ff",
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    density: 100,
    desc: "Sounds familliar.",
    temp: -5,
	  reactions: {
        "screen": { elem2:"ring" },
        "ring": { elem2:"pen" },
        "pen": { elem2:"king" },
    }
};

elements.screen = {
    color: "#e3f9ff",
    behavior: behaviors.WALL,
    behaviorOn: behaviors.BOUNCY,
    category: "special",
    state: "solid",
    density: 100,
    breakInto: ["glass_shard", "electric"],
};

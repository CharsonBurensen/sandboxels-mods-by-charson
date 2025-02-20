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
    color: ["#505e4c", "#4b6943"],
    behavior: behaviors.WALL,
    behaviorOn: [
    "SW:screen|XX|SW:screen",
    "XX|XX|XX",
    "SW:screen|XX|SW:screen",
],
    category: "machines",
    state: "solid",
    conduct: 1,
    breakInto: ["glass_shard", "electric"],
};

elements.ring = {
    color: "#9ab3b1",
    behavior: behaviors.WALL,
    category: "special",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["silver", "diamond"],
};

elements.pen = {
    color: "#454545",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:ink,blue_ink,red_ink|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["ink", "metal_scrap"],
};

elements.blue_ink = {
    color: "#454545",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    stain: 0.3,
    breakInto: ["ink", "copper_sulfate"],
};

elements.red_ink = {
    color: "#454545",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    stain: 0.3,
    breakInto: ["ink", "copper_sulfate"],
};

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
    "XX|XX|XX",
    "SW:screen|XX|SW:screen",
    "XX|CR:light|XX",
],
    category: "machines",
    state: "solid",
    conduct: 1,
    breakInto: ["glass_shard", "electric"],
};

elements.ring = {
    color: "#9ab3b1",
    behavior: [
    "XX|XX|CR:diamond_block",
    "XX|XX|XX",
    "XX|XX|XX",
],
    category: "special",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["silver", "diamond"],
};

elements.diamond_block = {
    color: ["#28d8de", "#03f4fc"],
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 100,
    breakInto: ["diamond"],
    tempHigh: 540,    
    stateHigh: "diamond,
};

elements.pen = {
    color: "#454545",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:ink%2|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["ink", "metal_scrap"],
};

elements.red_pen = {
    color: "#454545",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:red_ink%2|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["red_ink", "metal_scrap"],
};

elements.blue_pen = {
    color: "#454545",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:blue_ink%2|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["blue_ink", "metal_scrap"],
};

elements.blue_ink = {
    color: "#aaaadd",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    stain: 0.3,
    breakInto: ["ink", "copper_sulfate"],
    burn: 115,
    burnInto: "dioxin",
    tempHigh: 350,
    stateHigh: "dioxin",
};

elements.red_ink = {
    color: "#ddaaaa",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    stain: 0.3,
    breakInto: ["ink", "brick_rubble"],
    burn: 115,
    burnInto: "dioxin",
    tempHigh: 350,
    stateHigh: "dioxin",
};

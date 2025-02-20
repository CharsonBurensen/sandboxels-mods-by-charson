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
    stateHigh: "diamond",
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
    color: "#801f1f",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:red_ink%1|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["red_ink", "metal_scrap"],
};

elements.blue_pen = {
    color: "#19235e",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|CR:blue_ink%1|XX",
],
    category: "machines",
    state: "solid",
    density: 100,
    conduct: 1,
    breakInto: ["blue_ink", "metal_scrap"],
};

elements.blue_ink = {
    color: "#1421db",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    stain: 0.3,
    breakInto: ["ink", "copper_sulfate"],
    burn: 115,
    burnInto: "dioxin",
    tempHigh: 350,
    stateHigh: "dioxin",
    reactions: {
        "alcohol": { elem2:"acid" },
	"head": { elem2:"bone", func: behaviors.KILLPIXEL2 },
    }
};

elements.red_ink = {
    color: "#db1414",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    stain: 0.3,
    breakInto: ["ink", "brick_rubble"],
    burn: 115,
    burnInto: "dioxin",
    tempHigh: 350,
    stateHigh: "dioxin",
    reactions: {
        "alcohol": { elem2:"acid" },
	"head": { elem2:"bone", func: behaviors.KILLPIXEL2 },
    }
};

elements.king = {
    color: ["#7d2074", "#63207d", "#9e2626"],
    behavior: [
    "XX|CR:king_head AND CH:thiquovite>king_head|XX",
    "CR:wall|XX|CR:wall",
    "XX|M1|XX",
],
    category: "life",
    state: "solid",
    density: 100,
    breakInto: ["meat", "bone_meal"],
};

elements.king_head = {
    color: ["#998148", "#7a6431", "#bf993f", "#d1b269"],
    behavior: [
    "CR:brick|CR:gold_coin AND CH:king_head>foam|CR:brick",
    "CR:gold|XX|CR:gold",
    "XX|M1|XX",
],
    category: "life",
    state: "solid",
    density: 100,
    breakInto: ["meat", "bone_meal"],
};

elements.tiger = {
    color: ["#c4711d", "#d16813", "#ff7300"],
    behavior: [
    "M1%10|XX|M1%10",
    "M1%20|XX|M1%20",
    "M1|CH:water>foam AND M1|M1",
],
    foodNeed: 12,
    egg: "newborn",
    baby: "baby_tiger",
    category: "life",
    state: "solid",
    breakInto: ["meat", "bone_meal"],
    reactions: {
        "rat": { elem2:"blood", func: behaviors.KILLPIXEL2 },
	"head": { elem2:"bone", func: behaviors.KILLPIXEL2 },
	"body": { elem2:"bone", func: behaviors.FEEDPIXEL },
	"bird": { elem2:"feather", func: behaviors.FEEDPIXEL },
	"ant": { elem2: null, func: behaviors.KILLPIXEL2 },
	"spider": { elem2: null, func: behaviors.KILLPIXEL2 },
	"fish": { elem2: null, func: behaviors.FEEDPIXEL },
        "plant": { elem2: "dead_plant" },
	"grass": { elem2: "dead_plant" },
    }
};

elements.baby_tiger = {
    color: ["#c4711d", "#d16813", "#ff7300"],
    behavior: [
    "M1%30|XX|M1%30",
    "M1%10|CH:tiger%0.2|M1%10",
    "M1|CH:water>foam AND M1|M1",
],
    category: "life",
    state: "solid",
    breakInto: ["meat", "bone_meal"],
    reactions: {
        "rat": { elem1: "tiger", chance: 0.3, elem2:"blood", func: behaviors.KILLPIXEL2 },
	"ant": { elem2: null, func: behaviors.KILLPIXEL2 },
	"spider": { elem2: null, func: behaviors.KILLPIXEL2 },
	"fish": { elem1: "tiger", chance: 0.3, elem2: null, func: behaviors.KILLPIXEL2 },
	"grass": { elem2: "dead_plant" },
    }
};

elements.newborn = {
    color: ["#c4711d", "#d16813", "#ff7300"],
    behavior: behaviors.STURDYPOWDER,
    category: "life",
    state: "solid",
    breakInto: ["meat", "bone_meal"],
};

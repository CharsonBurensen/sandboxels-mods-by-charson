elements.breakable_cloner = {
    color: ["#c1c7f7", "#dfe0eb"],
    behavior: [
    "XX|CF|XX",
    "CF|XX|CF",
    "XX|M1|XX",
],
    category: "machines",
    state: "solid",
    temp: 20,
    tempHigh: 1000,
    stateHigh: "metal_scrap",
    breakInto: "metal_scrap",
    hardness: 0.75,
    burn: 0.1,
};

elements.shrapnel = {
    name: "Shrapnel",
    color: ["#8C8F98", "#6C6C6A", "#FEF9FF", "#D3D5D5"],
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1|XX",
],
    behaviorOn: [
    "CR:flash%5 AND M1 AND BO|XX|M1 AND BO",
    "XX|CH:metal_scrap%0.2|XX",
    "XX|XX|CR:flash%5",
],
    category: "solids",
    state: "solid",
    temp: 135,
    tempHigh: 1538,
    conduct: 3,
    stateHigh: "molten_metal_scrap",
    breakInto: "rust",
    hardness: 0.75,
    reactions: {
        "head": { elem1: null, func: behaviors.KILLPIXEL2 },
        "body": { elem1: null, func: behaviors.KILLPIXEL2 },
        "wood": { elem1: "explosion" },
        "brick": { elem1: "explosion" },
        "steel": { elem1: "explosion" },
    }

elements.medusa_ray = {
    color: ["#35db59", "#61ff83"],
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1 AND LB:flash AND EX:5>stone_blast|XX",
],
    category: "energy",
    state: "gas",
    temp: 20,
};

elements.stone_blast = {
    color: ["#35db59", "#61ff83"],
    behavior: [
    "CH:rock|CH:rock AND CR:fire|CH:rock",
    "CH:rock|DL%30|CH:rock",
    "CH:rock|CH:rock|CH:rock",
],
    category: "energy",
    state: "gas",
    temp: 45,
};


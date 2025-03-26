elements.breakable_cloner = {
    name: "BreakableCloner",
    color: ["#2030b3"],
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
    "CR:pop%5|M1 AND BO|XX",
    "XX|CH:metal_scrap%2|XX",
    "XX|XX|CR:pop%5",
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
};


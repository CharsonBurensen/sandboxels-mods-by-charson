delete elements.clay;

elements.dry_clay = {
    color: ["#dd4000"],
    name: "DryClay",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1|XX",
],
    category: "life",
    state: "solid",
    density: 100,
    breakInto: ["dust"],
    reactions: {
    "water": { elem1: "wet_clay", elem2: null },
};

elements.wet_clay = {
    color: ["#dd40dd"],
    name: "WetClay",
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "M1%1|M1|M1%1",
],
    category: "life",
    state: "solid",
    density: 100,
    breakInto: ["wedged_clay1"],
    reactions: {
    "light": { elem1: "dry_clay", elem2: null },
};

if (!elements.radiation.reactions) { // Include this block once
    elements.radiation.reactions = {} // This creates the property if it doesn't exist
}
elements.radiation.reactions.plague = { elem1: "curse", elem2: "foam" }

elements.curse = {
    color: "#A3C2C9",
    behavior: behaviors.SOLID,
    desc: "The Curse.",
    category: "materials",
    state: "solid",
    temp: 5,
    tempHigh: 25,
    stateHigh: ["molten_glass", "steam"],
    reactions: {
        "fire": { elem1: ["fire", "lava", "molten_iron"], elem2: ["water"] },
        "freeze_ray": { elem1: ["ice", "snow"], elem2: ["frosted_glass"] },
    }
};



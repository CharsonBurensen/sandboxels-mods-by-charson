elements.lava = {
    name: "Magma",
    color: ["#17b019"],
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "M1|M1|M1",
],
    category: "RockCycle",
    state: "liquid",
    temp: 1950,
    tempLow: 1000,
    stateLow: "igneous_rock",
};

elements.igneous_rock = {
    color: ["#17b019"],
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1|XX",
],
    category: "RockCycle",
    state: "solid",
    temp: 20,
    tempLow: -20,
    breakInto: "sediment",
    stateHigh: "metamorphic_rock",
    stateLow: "fragile_rock",
};

elements.igneous_rock = {
    color: ["#17b019"],
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1|XX",
],
    category: "RockCycle",
    state: "solid",
    temp: 20,
    tempHigh: 1300,
    tempLow: -20,
    breakInto: "sediment",
    stateHigh: "metamorphic_rock",
    stateLow: "fragile_rock",
};

elements.fragile_rock = {
    color: ["#17b019"],
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1|XX",
],
    category: "RockCycle",
    state: "solid",
    temp: 20,
    tempLow: -20,
    tempHigh: 1300,
    breakInto: "rock_shards",
    stateHigh: "molten_glass",
};

elements.rock_shards = {
    color: ["#17b019"],
    behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1|XX",
],
    category: "RockCycle",
    state: "solid",
    temp: 20,
    tempLow: -20,
    tempHigh: 1300,
    breakInto: "rock_shards",
    stateHigh: "glass_shard",
};

export const allStats = ["Hp", "Atk", "Def", "Sp.Def", "Sp.Atk", "Speed"];
export const allGeneralInfo = [
  "Species",
  "Types",
  "Abilities",
  "Catch Rate*",
  "Width",
  "Height",
  "EV Yield",
];
export const allMoveInfo = ["Power", "PP", "Accuracy", "Cooldown"];
export const allPokemon = [
  {
    name: "Bulbasaur",
    numberDex: "001",
    types: ["grass", "poison"],
    species: "Seed Pokémon",
    abilities: ["overgrow", "chlorophyll"],
    stats: ["45", "49", "49", "65", "65", "45"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "6.9kg",
    height: "0.7m",
    evYield: ["1 Sp.Atk", "1 Sp.Atk", "1 Sp.Atk"],
    sprite: "img/sprites/bulbasaur.png",
    shinySprite: "img/sprites/bulbasaurShiny.png",
    animated: "img/animated/bulbasaur.gif",
    shinyAnimated: "img/animated/bulbasaurShiny.gif",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "bulb", "leaf stone"],
    routes: [
      {
        name: "Rota 17",
        level: "17 ~ 21",
      },
      {
        name: "Rota 20",
        level: "20 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
  {
    name: "Ivysaur",
    numberDex: "002",
    types: ["grass", "poison"],
    species: "Seed Pokémon",
    abilities: ["overgrow", "chlorophyll"],
    stats: ["60", "62", "63", "80", "80", "60"],
    catchRate: "5%",
    bestNatures: ["Modest", "Bold"],
    width: "13.0kg",
    height: "1.0m",
    evYield: ["1 Sp.Atk", "1 Sp.Def"],
    sprite: "img/sprites/ivysaur.png",
    shinySprite: "img/sprites/ivysaurShiny.png",
    animated: "img/animated/ivysaur.gif",
    shinyAnimated: "img/animated/ivysaurShiny.gif",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evoMode: "Nvl. 16",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "bulb", "leaf stone"],
    routes: [
      {
        name: "Rota 17",
        level: "17 ~ 21",
      },
      {
        name: "Rota 20",
        level: "20 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
  {
    name: "Venusaur",
    numberDex: "003",
    types: ["grass", "poison"],
    species: "Seed Pokémon",
    abilities: ["overgrow", "chlorophyll"],
    stats: ["80", "82", "83", "100", "100", "80"],
    catchRate: "1%",
    bestNatures: ["Modest", "Bold"],
    width: "100.0kg",
    height: "2.0m",
    evYield: ["2 Sp.Atk", "1 Sp.Def"],
    sprite: "img/sprites/venusaur.png",
    shinySprite: "img/sprites/venusaurShiny.png",
    animated: "img/animated/venusaur.gif",
    shinyAnimated: "img/animated/venusaurShiny.gif",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evoMode: "Nvl. 32",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "bulb", "leaf stone"],
    routes: [
      {
        name: "Rota 17",
        level: "17 ~ 21",
      },
      {
        name: "Rota 20",
        level: "20 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
  {
    name: "Charmander",
    numberDex: "004",
    types: ["fire"],
    species: "Lizard Pokémon",
    abilities: ["blaze", "solar power"],
    stats: ["39", "52", "43", "60", "50", "65"],
    catchRate: "10%",
    bestNatures: ["Modest", "Relaxed"],
    width: "8.5kg",
    height: "0.6m",
    evYield: ["1 Speed"],
    sprite: "img/sprites/charmander.png",
    shinySprite: "img/sprites/charmanderShiny.png",
    animated: "img/animated/charmander.gif",
    shinyAnimated: "img/animated/charmanderShiny.gif",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "ember",
        level: "8",
      },
      {
        name: "fire fang",
        level: "13",
      },
      {
        name: "flamethrower",
        level: "25",
      },
    ],
    drops: ["essence of fire", "fire tail", "pot of lava", "fire stone"],
    routes: [
      {
        name: "Rota 17",
        level: "17 ~ 21",
      },
      {
        name: "Rota 20",
        level: "20 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
  {
    name: "Charmeleon",
    numberDex: "005",
    types: ["fire"],
    species: "Flame Pokémon",
    abilities: ["blaze", "solar power"],
    stats: ["58", "64", "58", "80", "65", "80"],
    catchRate: "5%",
    bestNatures: ["Modest", "Relaxed"],
    width: "19.0kg",
    height: "1.1m",
    evYield: ["1 Sp.Atk", "1 Speed"],
    sprite: "img/sprites/charmeleon.png",
    shinySprite: "img/sprites/charmeleonShiny.png",
    animated: "img/animated/charmeleon.gif",
    shinyAnimated: "img/animated/charmeleonShiny.gif",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    evoMode: "Nvl. 16",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "ember",
        level: "8",
      },
      {
        name: "fire fang",
        level: "13",
      },
      {
        name: "flamethrower",
        level: "25",
      },
    ],
    drops: ["essence of fire", "fire tail", "pot of lava", "fire stone"],
    routes: [
      {
        name: "Rota 17",
        level: "17 ~ 21",
      },
      {
        name: "Rota 20",
        level: "20 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
  {
    name: "Charizard",
    numberDex: "006",
    types: ["fire", "flying"],
    species: "Flame Pokémon",
    abilities: ["blaze", "solar power"],
    stats: ["78", "84", "78", "109", "85", "100"],
    catchRate: "1%",
    bestNatures: ["Modest", "Relaxed"],
    width: "90.5kg",
    height: "1.7m",
    evYield: ["3 Sp.Atk"],
    sprite: "img/sprites/charizard.png",
    shinySprite: "img/sprites/charizardShiny.png",
    animated: "img/animated/charizard.gif",
    shinyAnimated: "img/animated/charizardShiny.gif",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    evoMode: "Nvl. 36",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "ember",
        level: "8",
      },
      {
        name: "fire fang",
        level: "13",
      },
      {
        name: "flamethrower",
        level: "25",
      },
    ],
    drops: ["essence of fire", "fire tail", "pot of lava", "fire stone"],
    routes: [
      {
        name: "Rota 17",
        level: "17 ~ 21",
      },
      {
        name: "Rota 20",
        level: "20 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
  {
    name: "Squirtle",
    numberDex: "007",
    types: ["water"],
    species: "Tiny Turtle Pokémon",
    abilities: ["torrent", "rain dish"],
    stats: ["44", "48", "65", "50", "64", "43"],
    catchRate: "10%",
    bestNatures: ["Modest", "Relaxed"],
    width: "9.0kg",
    height: "0.5m",
    evYield: ["1 Defense"],
    sprite: "img/sprites/squirtle.png",
    shinySprite: "img/sprites/squirtleShiny.png",
    animated: "img/animated/squirtle.gif",
    shinyAnimated: "img/animated/squirtleShiny.gif",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "bubble",
        level: "8",
      },
      {
        name: "bubblebeam",
        level: "13",
      },
    ],
    drops: ["water gem", "water pendant", "squirtle hull", "water stone"],
    routes: [
      {
        name: "Rota 17",
        level: "55 ~ 21",
      },
      {
        name: "Rota 20",
        level: "69 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
  {
    name: "Wartortle",
    numberDex: "008",
    types: ["water"],
    species: "Turtle Pokémon",
    abilities: ["torrent", "rain dish"],
    stats: ["59", "63", "80", "65", "80", "58"],
    catchRate: "5%",
    bestNatures: ["Modest", "Relaxed"],
    width: "22.5kg",
    height: "1.0m",
    evYield: ["1 Def", "1 Sp.Def"],
    sprite: "img/sprites/wartortle.png",
    shinySprite: "img/sprites/wartortleShiny.png",
    animated: "img/animated/wartortle.gif",
    shinyAnimated: "img/animated/wartortleShiny.gif",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    evoMode: "Nvl. 16",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "bubble",
        level: "8",
      },
      {
        name: "bubblebeam",
        level: "13",
      },
    ],
    drops: ["water gem", "water pendant", "squirtle hull", "water stone"],
    routes: [
      {
        name: "Rota 17",
        level: "55 ~ 21",
      },
      {
        name: "Rota 20",
        level: "69 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
  {
    name: "Blastoise",
    numberDex: "009",
    types: ["water"],
    species: "Shellfish Pokémon",
    abilities: ["torrent", "rain dish"],
    stats: ["79", "83", "100", "85", "105", "78"],
    catchRate: "1%",
    bestNatures: ["Modest", "Relaxed"],
    width: "1.6kg",
    height: "85.5m",
    evYield: ["3 Sp.Def"],
    sprite: "img/sprites/blastoise.png",
    shinySprite: "img/sprites/blastoiseShiny.png",
    animated: "img/animated/blastoise.gif",
    shinyAnimated: "img/animated/blastoiseShiny.gif",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    evoMode: "Nvl. 36",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "bubble",
        level: "8",
      },
      {
        name: "bubblebeam",
        level: "13",
      },
    ],
    drops: ["water gem", "water pendant", "squirtle hull", "water stone"],
    routes: [
      {
        name: "Rota 17",
        level: "55 ~ 21",
      },
      {
        name: "Rota 20",
        level: "69 ~ 23",
      },
      {
        name: "Rota 23",
        level: "19 ~ 24",
      },
      {
        name: "Rota 26",
        level: "21 ~ 25",
      },
    ],
  },
];

export const allMoves = [
  {
    name: "ember",
    type: "fire",
    category: "Special",
    moveSource: "img/moves/ember.jpg",
    categorySource: "img/general/special.png",
    description: "Has a 10% chance to burn the target.",
    effects: "Has a 10% chance to burn the target.",
    attributes: ["40", "6.20", "100", "3s"],
  },
  {
    name: "fire fang",
    type: "fire",
    category: "physical",
    moveSource: "img/moves/fireFang.jpg",
    categorySource: "img/general/physical.png",
    description:
      "Has a 10% chance to burn the target and a 10% chance to make it flinch.",
    effects:
      "Has a 10% chance to burn the target and a 10% chance to make it flinch.",
    attributes: ["65", "11.20", "95", "9s"],
  },
  {
    name: "flamethrower",
    type: "fire",
    category: "physical",
    moveSource: "img/moves/flamethrower.jpg",
    categorySource: "img/general/physical.png",
    description: "Has a 10% chance to burn the target.",
    effects: "Has a 10% chance to burn the target.",
    attributes: ["90", "15.20", "100", "15s"],
  },
  {
    name: "bubble",
    type: "water",
    category: "special",
    moveSource: "img/moves/bubble.webp",
    categorySource: "img/general/special.png",
    description: "Has a 10% chance to lower the target's Speed by 1 stage.",
    effects: "Has a 10% chance to lower the target's Speed by 1 stage.",
    attributes: ["40", "6.20", "100", "3s"],
  },
  {
    name: "bubblebeam",
    type: "water",
    category: "special",
    moveSource: "img/moves/bubbleBeam.jpg",
    categorySource: "img/general/special.png",
    description: "Has a 10% chance to lower the target's Speed by 1 stage.",
    effects: "Has a 10% chance to lower the target's Speed by 1 stage.",
    attributes: ["65", "13.20", "100", "12s"],
  },
  {
    name: "tackle",
    type: "normal",
    category: "Special",
    moveSource: "img/moves/tackle.webp",
    categorySource: "img/general/physical.png",
    description: "No additional effect.",
    effects: "No additional effect.",
    attributes: ["40", "5.80", "100", "2s"],
  },
  {
    name: "vine whip",
    type: "grass",
    category: "Special",
    moveSource: "img/moves/vineWhip.png",
    categorySource: "img/general/physical.png",
    description: "No additional effect.",
    effects: "No additional effect.",
    attributes: ["45", "11.20", "100", "5s"],
  },
  {
    name: "leech seed",
    type: "grass",
    category: "Special",
    moveSource: "img/moves/leechSeed.webp",
    categorySource: "img/general/physical.png",
    description:
      "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn",
    effects:
      "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn",
    attributes: ["--", "23.80", "90", "15s"],
  },
  {
    name: "solar beam",
    type: "grass",
    category: "Special",
    moveSource: "img/moves/solarBeam.jpg",
    categorySource: "img/general/special.png",
    description:
      "This attack charges on the first turn and executes on the second.",
    effects:
      "This attack charges on the first turn and executes on the second.",
    attributes: ["120", "23.80", "100", "30s"],
  },
];
export const allDrops = [
  {
    name: "bulb",
    Value: "365",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/drops/bulb.png",
    type: "drop",
  },
  {
    name: "bag of pollem",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/BagOfPollem.png",
    type: "drop",
  },
  {
    name: "essence of fire",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/essence_of_fire.png",
    type: "drop",
  },
  {
    name: "fire tail",
    Value: "400",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/drops/Fire_Tail.png",
    type: "drop",
  },
  {
    name: "leaves",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/Leaves.png",
    type: "drop",
  },
  {
    name: "sandbag",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/Sandbag.png",
    type: "drop",
  },
  {
    name: "seed",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/seed.png",
    type: "drop",
  },
  {
    name: "squirtle hull",
    Value: "400",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/drops/Squirtle_Hull.png",
    type: "drop",
  },
  {
    name: "water gem",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/Water_gem.png",
    type: "drop",
  },
  {
    name: "water pendant",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/WaterPendant.png",
    type: "drop",
  },
  {
    name: "pot of lava",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/PotOfLava.png",
    type: "drop",
  },
  {
    name: "water stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "Evolves certain species of Pokemon when used.",
    sprite: "img/drops/waterStone.webp",
    type: "evolutionary",
  },
  {
    name: "leaf stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "Evolves certain species of Pokemon when used.",
    sprite: "img/drops/leafStone.png",
    type: "evolutionary",
  },
  {
    name: "fire stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "Evolves certain species of Pokemon when used.",
    sprite: "img/drops/Fire-stone.gif",
    type: "evolutionary",
  },
];
export const allAbilities = [
  {
    name: "blaze",
    description:
      "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Fire-type attack.",
    type: "fire",
  },
  {
    name: "solar power",
    description:
      "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. These effects are prevented if the Pokemon is holding a Utility Umbrella.",
    type: "fire",
  },
  {
    name: "rain dish",
    description:
      "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
    type: "water",
  },
  {
    name: "torrent",
    description:
      "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Water-type attack.",
    type: "water",
  },
  {
    name: "chlorophyll",
    description:
      "If Sunny Day is active, this Pokemon's Speed is doubled. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
    type: "grass",
  },
  {
    name: "overgrow",
    description:
      "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Grass-type attack.",
    type: "grass",
  },
];
export const allResps = [
  {
    name: "Rota 17",
    appears: ["Charmander", "Bulbasaur", "Squirtle"],
    levels: ["Nvl 17 ~ 21", "Nvl 18 ~ 23", "Nvl 15 ~ 18"],
  },
  {
    name: "Rota 20",
    appears: ["Charmander", "Bulbasaur", "Squirtle"],
    levels: ["Nvl 17 ~ 69", "Nvl 18 ~ 23", "Nvl 15 ~ 18"],
  },
  {
    name: "Rota 23",
    appears: ["Charmander", "Bulbasaur", "Squirtle"],
    levels: ["Nvl 17 ~ 21", "Nvl 18 ~ 23", "Nvl 15 ~ 18"],
  },
  {
    name: "Rota 26",
    appears: ["Charmander", "Bulbasaur", "Squirtle"],
    levels: ["Nvl 17 ~ 21", "Nvl 18 ~ 23", "Nvl 15 ~ 18"],
  },
];
export const allWeakness = [
  {
    name: "normal",
    Weakness: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
  },
  {
    name: "fire",
    Weakness: [
      1, 0.5, 2, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 0.5,
    ],
  },
  {
    name: "water",
    Weakness: [1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1],
  },
  {
    name: "electric",
    Weakness: [1, 1, 1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1],
  },
  {
    name: "grass",
    Weakness: [1, 2, 0.5, 0.5, 0.5, 2, 1, 2, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 1],
  },
  {
    name: "ice",
    Weakness: [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
  },
  {
    name: "fighting",
    Weakness: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 1, 1, 0.5, 1, 2],
  },
  {
    name: "poison",
    Weakness: [1, 1, 1, 1, 0.5, 1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5],
  },
  {
    name: "ground",
    Weakness: [1, 1, 2, 0, 2, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1],
  },
  {
    name: "flying",
    Weakness: [1, 1, 1, 2, 0.5, 2, 0.5, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 1, 1],
  },
  {
    name: "psychic",
    Weakness: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 1, 2, 1, 2, 1, 1],
  },
  {
    name: "bug",
    Weakness: [1, 2, 1, 1, 0.5, 1, 0.5, 1, 0.5, 2, 1, 1, 2, 1, 1, 1, 1, 1],
  },
  {
    name: "rock",
    Weakness: [0.5, 0.5, 2, 1, 2, 1, 2, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 1],
  },
  {
    name: "ghost",
    Weakness: [0, 1, 1, 1, 1, 1, 0, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1],
  },
  {
    name: "dragon",
    Weakness: [1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2],
  },
  {
    name: "dark",
    Weakness: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2],
  },
  {
    name: "steel",
    Weakness: [
      0.5, 2, 1, 1, 0.5, 0.5, 2, 0, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5,
    ],
  },
  {
    name: "fairy",
    Weakness: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2],
  },
];

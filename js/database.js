export const allStats = ["Hp", "Atk", "Def", "Sp.Def", "Sp.Atk", "Speed"];
export const allGeneralInfo = [
  "Species",
  "Types",
  "Abilities",
  "Catch Rate",
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
    abilities: ["Overgrow", "Chlorophyll"],
    stats: ["45", "49", "49", "65", "65", "45"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Bold"],
    width: "6.9kg",
    height: "0.7m",
    evYield: "1 Sp.Atk",
    sprite: "sprites/bulbasaur.png",
    shinySprite: "sprites/bulbasaurShiny.png",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    moves: ["tackle", "vine whip", "leech seed", "solar beam"],
    drops: ["seed", "bag of pollem", "leaves", "nulb", "leaf stone"],
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
    movesetLevel: ["5", "9", "14", "32"],
  },
  {
    name: "Ivysaur",
    numberDex: "002",
    types: ["grass", "poison"],
    species: "Seed Pokémon",
    abilities: ["Overgrow", "Chlorophyll"],
    stats: ["60", "62", "63", "80", "80", "60"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Bold"],
    width: "13.0kg",
    height: "1.0m",
    evYield: "1 Sp.Atk, 1 Sp.Def",
    sprite: "sprites/ivysaur.png",
    shinySprite: "sprites/ivysaurShiny.png",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    moves: ["tackle", "vine whip", "leech seed", "solar beam"],
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
    movesetLevel: ["5", "9", "14", "32"],
  },
  {
    name: "Venusaur",
    numberDex: "003",
    types: ["grass", "poison"],
    species: "Seed Pokémon",
    abilities: ["Overgrow", "Chlorophyll"],
    stats: ["80", "82", "83", "100", "100", "80"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Bold"],
    width: "100.0kg",
    height: "2.0m",
    evYield: "2 Sp.Atk, 1 Sp.Def",
    sprite: "sprites/venusaur.png",
    shinySprite: "sprites/venusaurShiny.png",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    moves: ["tackle", "vine whip", "leech seed", "solar beam"],
    drops: ["seed", "bag of pollem", "leaves", "Bulb", "Leaf Stone"],
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
    movesetLevel: ["5", "9", "14", "32"],
  },
  {
    name: "Charmander",
    numberDex: "004",
    types: ["fire"],
    species: "Lizard Pokémon",
    abilities: ["Blaze", "Solar Power"],
    stats: ["39", "52", "43", "60", "50", "65"],
    catchRate: "45 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Relaxed"],
    width: "8.5kg",
    height: "0.6m",
    evYield: "1 Speed",
    sprite: "sprites/charmander.png",
    shinySprite: "sprites/charmanderShiny.png",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    moves: ["tackle", "Ember", "Fire Fang", "Flamethrower"],
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
    movesetLevel: ["5", "9", "14", "32"],
  },
  {
    name: "Charmeleon",
    numberDex: "005",
    types: ["fire"],
    species: "Flame Pokémon",
    abilities: ["Blaze", "Solar Power"],
    stats: ["58", "64", "58", "80", "65", "80"],
    catchRate: "45 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Relaxed"],
    width: "19.0kg",
    height: "1.1m",
    evYield: "1 Sp.Atk, 1 Speed",
    sprite: "sprites/charmeleon.png",
    shinySprite: "sprites/charmeleonShiny.png",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    moves: ["tackle", "Ember", "Fire Fang", "Flamethrower"],
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
    movesetLevel: ["5", "9", "14", "32"],
  },
  {
    name: "Charizard",
    numberDex: "006",
    types: ["fire", "flying"],
    species: "Flame Pokémon",
    abilities: ["Blaze", "Solar Power"],
    stats: ["78", "84", "78", "109", "85", "100"],
    catchRate: "45 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Relaxed"],
    width: "90.5kg",
    height: "1.7m",
    evYield: "3 Sp.Atk",
    sprite: "sprites/charizard.png",
    shinySprite: "sprites/charizardShiny.png",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    moves: ["tackle", "Ember", "Fire Fang", "Flamethrower"],
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
    movesetLevel: ["5", "9", "14", "32"],
  },
  {
    name: "Squirtle",
    numberDex: "007",
    types: ["water"],
    species: "Tiny Turtle Pokémon",
    abilities: ["Torrent", "Rain Dish"],
    stats: ["44", "48", "65", "50", "64", "43"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Relaxed"],
    width: "9.0kg",
    height: "0.5m",
    evYield: "1 Defense",
    sprite: "sprites/squirtle.png",
    shinySprite: "sprites/squirtleShiny.png",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    moves: ["tackle", "Bubble", "Bubblebeam"],
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
    movesetLevel: ["5", "9", "14"],
  },
  {
    name: "Wartortle",
    numberDex: "008",
    types: ["water"],
    species: "Turtle Pokémon",
    abilities: ["Torrent", "Rain Dish"],
    stats: ["59", "63", "80", "65", "80", "58"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Relaxed"],
    width: "22.5kg",
    height: "1.0m",
    evYield: "1 Def, 1 Sp.Def",
    sprite: "sprites/wartortle.png",
    shinySprite: "sprites/wartortleShiny.png",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    moves: ["tackle", "Bubble", "Bubblebeam"],
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
    movesetLevel: ["5", "9", "14"],
  },
  {
    name: "Blastoise",
    numberDex: "009",
    types: ["water"],
    species: "Shellfish Pokémon",
    abilities: ["Torrent", "Rain Dish"],
    stats: ["79", "83", "100", "85", "105", "78"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Relaxed"],
    width: "1.6kg",
    height: "85.5m",
    evYield: "3 Sp.Def",
    sprite: "sprites/blastoise.png",
    shinySprite: "sprites/blastoiseShiny.png",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    moves: ["tackle", "Bubble", "Bubblebeam"],
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
    movesetLevel: ["5", "9", "14"],
  },
];

export const allMoves = [
  {
    name: "Ember",
    type: "fire",
    category: "Special",
    moveSource: "moves/ember.jpg",
    categorySource: "img/special.png",
    description: "lorem",
    effects: "burn",
    attributes: ["40", "6.20", "100", "3s"],
  },
  {
    name: "Fire Fang",
    type: "fire",
    category: "physical",
    moveSource: "moves/fireFang.jpg",
    categorySource: "img/physical.png",
    description: "lorem",
    effects: "burn",
    attributes: ["70", "11.20", "100", "9s"],
  },
  {
    name: "Flamethrower",
    type: "fire",
    category: "physical",
    moveSource: "moves/flamethrower.jpg",
    categorySource: "img/physical.png",
    description: "lorem",
    effects: "burn",
    attributes: ["90", "15.20", "100", "15s"],
  },
  {
    name: "Bubble",
    type: "water",
    category: "special",
    moveSource: "moves/bubble.webp",
    categorySource: "img/special.png",
    description: "lorem",
    effects: "dry",
    attributes: ["40", "6.20", "100", "3s"],
  },
  {
    name: "Bubblebeam",
    type: "water",
    category: "special",
    moveSource: "moves/bubbleBeam.jpg",
    categorySource: "img/special.png",
    description: "lorem",
    effects: "dry",
    attributes: ["80", "13.20", "100", "12s"],
  },
  {
    name: "tackle",
    type: "normal",
    category: "Special",
    moveSource: "moves/tackle.webp",
    categorySource: "img/physical.png",
    description: "lorem",
    effects: "burn",
    attributes: ["40", "5.80", "100", "2s"],
  },
  {
    name: "vine whip",
    type: "grass",
    category: "Special",
    moveSource: "moves/vineWhip.png",
    categorySource: "img/physical.png",
    description: "lorem",
    effects: "burn",
    attributes: ["40", "11.20", "100", "5s"],
  },
  {
    name: "leech seed",
    type: "grass",
    category: "Special",
    moveSource: "moves/leechSeed.webp",
    categorySource: "img/physical.png",
    description: "lorem",
    effects: "burn",
    attributes: ["--", "23.80", "100", "15s"],
  },
  {
    name: "solar beam",
    type: "grass",
    category: "Special",
    moveSource: "moves/solarBeam.jpg",
    categorySource: "img/special.png",
    description: "lorem",
    effects: "burn",
    attributes: ["120", "23.80", "100", "30s"],
  },
];
export const allDrops = [
  {
    name: "bulb",
    Value: "365",
    Rarity: "rare",
    description: "lorem",
    sprite: "drops/bulb.png",
  },
  {
    name: "bag of pollem",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "drops/BagOfPollem.png",
  },
  {
    name: "essence of fire",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "drops/Essence_of_fire.png",
  },
  {
    name: "fire tail",
    Value: "400",
    Rarity: "rare",
    description: "lorem",
    sprite: "drops/Fire_Tail.png",
  },
  {
    name: "leaves",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "drops/Leaves.png",
  },
  {
    name: "sandbag",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "drops/Sandbag.png",
  },
  {
    name: "seed",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "drops/seed.png",
  },
  {
    name: "squirtle hull",
    Value: "400",
    Rarity: "rare",
    description: "lorem",
    sprite: "drops/Squirtle_Hull.png",
  },
  {
    name: "water gem",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "drops/Water_gem.png",
  },
  {
    name: "water pendant",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "drops/WaterPendant.png",
  },
  {
    name: "pot of lava",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "drops/PotOfLava.png",
  },
  {
    name: "water stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "lorem",
    sprite: "drops/waterStone.webp",
  },
  {
    name: "leaf stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "lorem",
    sprite: "drops/leafStone.png",
  },
  {
    name: "fire stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "lorem",
    sprite: "drops/Fire-stone.gif",
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

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
    sprite: "img/bulbasaur.png",
    shinySprite: "img/bulbasaurShiny.png",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    moves: ["tackle", "vine whip", "leech seed", "solar beam"],
    drops: ["Bulb", "Leaf Stone", "fire stone"],
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
    abilities: ["Overgrow", "Chlorophyll"],
    stats: ["45", "49", "49", "65", "65", "45"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Bold"],
    width: "6.9kg",
    height: "0.7m",
    evYield: "1 Sp.Atk",
    sprite: "img/ivysaur.png",
    shinySprite: "img/ivysaurShiny.png",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    moves: ["tackle", "vine whip", "leech seed", "solar beam"],
    drops: ["Bulb", "Leaf Stone"],
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
    abilities: ["Overgrow", "Chlorophyll"],
    stats: ["45", "49", "49", "65", "65", "45"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Bold"],
    width: "100.0kg",
    height: "2.0m",
    evYield: "2 Sp.Atk, 1 Sp.Def",
    sprite: "img/venusaur.png",
    shinySprite: "img/venusaurShiny.png",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    moves: ["tackle", "vine whip", "leech seed", "solar beam"],
    drops: ["Bulb", "Leaf Stone"],
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
    numberDex: "003",
    types: ["fire"],
    species: "Lizard Pokémon",
    abilities: ["Blaze", "Solar Power"],
    stats: ["39", "52", "43", "60", "50", "65"],
    catchRate: "45 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Relaxed"],
    width: "8.5kg",
    height: "0.6m",
    evYield: "1 Speed",
    sprite: "img/charmander.png",
    shinySprite: "img/charmanderShiny.png",
    evolutionary: {
      name: ["Bulbasaur", "Ivysaur", "Venusaur"],
      sprite: ["img/bulbasaur.png", "img/charmander.png", "img/squirtle.png"],
    },
    drops: ["Bulb", "Leaf Stone"],
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
    numberDex: "015",
    types: ["water"],
    typeId: ["3"],
    species: "Tiny Turtle Pokémon",
    abilities: ["Torrent", "Rain Dish"],
    stats: ["44", "48", "65", "50", "64", "43"],
    catchRate: "69 (5.9% w/ Pokeball, full HP)",
    bestNatures: ["Modest", "Relaxed"],
    width: "9.0kg",
    height: "0.5m",
    evYield: "1 Defense",
    sprite: "img/squirtle.png",
    shinySprite: "img/squirtleShiny.png",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    drops: ["Bulb", "Leaf Stone"],
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
    moveSource: "img",
    categorySource: "img",
    description: "lorem",
    effects: "burn",
    attributes: ["120", "23.80", "100", "30s"],
  },
  {
    name: "tackle",
    type: "normal",
    power: "40",
    category: "Special",
    moveSource: "img/charmander.png",
    categorySource: "img/physical.png",
    description: "lorem",
    effects: "burn",
    attributes: ["120", "23.80", "100", "30s"],
  },
  {
    name: "vine whip",
    type: "grass",
    power: "40",
    category: "Special",
    moveSource: "img/squirtle.png",
    categorySource: "img/physical.png",
    description: "lorem",
    effects: "burn",
    attributes: ["120", "23.80", "100", "30s"],
  },
  {
    name: "leech seed",
    type: "grass",
    power: "--",
    category: "Special",
    moveSource: "img/ivysaur.png",
    categorySource: "img/physical.png",
    description: "lorem",
    effects: "burn",
    attributes: ["120", "23.80", "100", "30s"],
  },
  {
    name: "solar beam",
    type: "grass",
    category: "Special",
    moveSource: "img/charmander.png",
    categorySource: "img/special.png",
    description: "lorem",
    effects: "burn",
    attributes: ["120", "23.80", "100", "30s"],
  },
];
export const allDrops = [
  {
    name: "Bulb",
    Value: "365",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/bulb.png",
  },
  {
    name: "Leaf Stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "lorem",
    sprite: "img/leafStone.png",
  },
  {
    name: "Leaf Stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "lorem",
    sprite: "img/leafStone.png",
  },
  {
    name: "fire stone",
    Value: "50.000",
    Rarity: "legendary",
    description: "lorem",
    sprite: "img/leafStone.png",
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

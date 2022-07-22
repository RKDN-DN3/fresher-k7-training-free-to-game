export type typeListGame = {
  value: string;
  display: string;
};

export const PLATFORMS: typeListGame[] = [
  {
    value: 'browser',
    display: 'Browser (Web)',
  },
  {
    value: 'pc',
    display: 'Windows (PC)',
  },
];

export const GENRES_ARR: typeListGame[] = [
  {
    value: 'mmo',
    display: 'MMO',
  },
  {
    value: 'mmorpg',
    display: 'MMORPG',
  },
  {
    value: 'shooter',
    display: 'Shooter',
  },
  {
    value: 'strategy',
    display: 'Strategy',
  },
  {
    value: 'moba',
    display: 'Moba',
  },
  {
    value: 'card',
    display: 'Card Games',
  },
  {
    value: 'racing',
    display: 'Racing',
  },
  {
    value: 'sports',
    display: 'Sports',
  },
  {
    value: 'social',
    display: 'Social',
  },
  {
    value: 'fighting',
    display: 'Fighting',
  },
];

export const GENRES_BROWSER_ARR: typeListGame[] = [
  {
    value: 'mmorpg',
    display: 'MMORPG',
  },
  {
    value: 'shooter',
    display: 'Shooter',
  },
  {
    value: 'strategy',
    display: 'Strategy',
  },
  {
    value: 'racing',
    display: 'Racing',
  },
  {
    value: 'sports',
    display: 'Sports',
  },
  {
    value: 'social',
    display: 'Social',
  },
];

export const TAGS: typeListGame[] = [
  {
    value: 'mmofps',
    display: 'MMOFPS',
  },
  {
    value: 'action-rpg',
    display: 'Action RPG',
  },
  {
    value: 'sandbox',
    display: 'Sandbox',
  },
  {
    value: 'open-world',
    display: 'Open World',
  },
  {
    value: 'survival',
    display: 'Survival',
  },
  {
    value: 'battle-royale',
    display: 'Battle Royale',
  },
  {
    value: 'mmotps',
    display: 'MMOTPS',
  },
  {
    value: 'anime',
    display: 'Anime',
  },
  {
    value: 'pvp',
    display: 'PvP',
  },
  {
    value: 'pve',
    display: 'PvE',
  },
  {
    value: 'fantasy',
    display: 'Fantasy',
  },
  {
    value: 'sci-fi',
    display: 'Sci-Fi',
  },
];

export const SORT_BY: typeListGame[] = [
  {
    value: 'relevance',
    display: 'Relevance',
  },
  {
    value: 'popularity',
    display: 'Popularity',
  },
  {
    value: 'release-date',
    display: 'Release Date',
  },
  {
    value: 'alphabetical',
    display: 'Alphabetical',
  },
];

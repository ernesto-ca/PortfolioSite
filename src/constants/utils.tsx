export const getRandomValue = (top: number = 50, least: number = 25) =>
  Math.round(Math.random() * top) + least;

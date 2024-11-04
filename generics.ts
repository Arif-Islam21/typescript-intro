const gameScores = [14, 21, 42, 34];
const favouriteThings = [
  "raindrops on roses",
  "whiskers on kitten",
  "bright copper kettels",
  "warm woolen mitten",
];
const voters = [
  { name: "Alice", age: 43 },
  { name: "Arif", age: 20 },
];

function getLastItem<Generics>(array: Generics[]) {
  return array[array.length - 1];
}

getLastItem(voters);

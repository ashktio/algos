const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

const evenlyDivisible = pokémon.filter((item) => item.id % 3 === 0);
console.log(evenlyDivisible);

// an array of pokeman objects that are "fire" type

const fireType = pokémon.filter((item) => item.types.includes("fire"));
console.log(fireType);

// an array of pokeman objects that have more than one type

const moreType = pokémon.filter((item) => item.types.length > 1);
console.log(moreType);

// an array with just the names of the pokemon

const justName = pokémon.map((item) => item.name);
console.log(justName);

// an array with the just the names of pokemon wiht an id greater than 99
const nameID99 = pokémon
  .filter((item) => item.id > 99)
  .map((item) => item.name);
console.log(nameID99);

// an array with just the names of the pokemon whose only type is poison

const typePosion = pokémon
  .filter((item) => item.types == "poison")
  .map((item) => item.name);
console.log(typePosion);

// an array containing just the first type of all the pokemon whose second type is "flying"

const secondFlying = pokémon
  .filter((item) => item.types[1] == "flying")
  .map((item) => item.types[0]);
console.log(secondFlying);

// a count of the number of pokemon that are "normal type"

const normalTypeLength = pokémon.filter((item) =>
  item.types.includes("normal")
).length;
console.log(normalTypeLength);

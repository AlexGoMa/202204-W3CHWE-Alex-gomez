// eslint-disable-next-line import/extensions
import AppComponent from "./Components/AppComponent/AppComponent.js";

const mainContainer = document.querySelector(".app");

const getPokemonList = async (tag) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${tag}`);
  const pokemonList = await response.json();
  return pokemonList;
};

const pokemons = [];
for (let i = 1; i <= 20; i++) {
  // eslint-disable-next-line no-await-in-loop
  const pokemonListData = await getPokemonList(i);
  pokemons.push(pokemonListData);
}

// eslint-disable-next-line no-new
new AppComponent(mainContainer, pokemons);

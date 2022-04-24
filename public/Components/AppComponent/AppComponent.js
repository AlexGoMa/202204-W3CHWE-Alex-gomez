import Component from "../Component.js";
import PokemonComponent from "../PokemonComponent/PokemonComponent.js";

class AppComponent extends Component {
  pokemons;
  pokemonNumber;

  constructor(parentElement, pokemons, pokemonNumber) {
    super(parentElement, "div", "container");
    this.pokemons = pokemons;
    this.pokemonNumber = pokemonNumber;

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="main-header">
        <img src="../images/pokemon-logo.svg" alt="pokemon_logo">
        <h1 class="main-title">Pokemon Challenge, gotta error type'em all</h1>
      </header>
      <section class="controls">
      <input class="button__menu" type="button" value="Mis Pokemon"></input>                
      </section>
      <main class="main">
        <ul class="pokemon_ul">                        
        </ul>
      </main>
      <footer>
      <input type="button" class="button_left" value="Anterior" href="">
      <p>${this.pokemons[19].id} / ${this.pokemonNumber.count}</p>
      <input type="button" class="button_right" value="Siguiente" href=""></input>
      </footer>
    `;

    const buttonRight = document.querySelector(".button_right");
    const buttonLeft = document.querySelector(".button_left");

    buttonRight.addEventListener("click", async () => {
      const response = await fetch(this.pokemonNumber.next);
      const pokemonData = await response.json();

      const pokemons = await Promise.all(
        pokemonData.results.map(async (pokemonEndPoint) => {
          const pokemonsResponse = await fetch(pokemonEndPoint.url);
          return pokemonsResponse.json();
        })
      );
      const mainContainer = document.querySelector(".container");
      mainContainer.innerHTML = "";
      // eslint-disable-next-line no-new
      new AppComponent(mainContainer, pokemons, pokemonData);
    });

    buttonLeft.addEventListener("click", async () => {
      if (this.pokemonNumber.previous !== null) {
        const response = await fetch(this.pokemonNumber.previous);
        const pokemonData = await response.json();

        const pokemons = await Promise.all(
          pokemonData.results.map(async (pokemonEndPoint) => {
            const pokemonsResponse = await fetch(pokemonEndPoint.url);
            return pokemonsResponse.json();
          })
        );
        const mainContainer = document.querySelector(".container");
        mainContainer.innerHTML = "";
        // eslint-disable-next-line no-new
        new AppComponent(mainContainer, pokemons, pokemonData);
      }
    });

    const PokemonList = this.element.querySelector(".pokemon_ul");
    this.pokemons.forEach((pokemon) => {
      // eslint-disable-next-line no-new
      new PokemonComponent(PokemonList, pokemon);
    });
  }
}

export default AppComponent;

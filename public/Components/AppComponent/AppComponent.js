import Component from "../Component.js";
import PokemonComponent from "../PokemonComponent/PokemonComponent.js";

class AppComponent extends Component {
  pokemons;

  constructor(parentElement, pokemons) {
    super(parentElement, "div", "container");
    this.pokemons = pokemons;

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="main-header">
        <img src="../images/pokemon-logo.svg" alt="pokemon_logo">
        <h1 class="main-title">Pokemon Challenge, gotta type error'em all</h1>
      </header>
      <section class="controls">
      <input class="button__menu" type="button" value="Mis Pokemon"></input>                
      </section>
      <main class="main">
        <ul class="pokemon_ul">                        
        </ul>
      </main>
    `;
    const PokemonList = this.element.querySelector(".pokemon_ul");

    this.pokemons.forEach((pokemon) => {
      // eslint-disable-next-line no-new
      new PokemonComponent(PokemonList, pokemon);
    });
  }
}

export default AppComponent;

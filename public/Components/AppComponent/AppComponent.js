import Component from "../Component";
import PokemonComponent from "../PokemonComponent/PokemonComponent";

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
        <h1 class="main-title">Pokemon Challenge, gotta error type'em all</h1>
      </header>
      <section class="controls">                
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

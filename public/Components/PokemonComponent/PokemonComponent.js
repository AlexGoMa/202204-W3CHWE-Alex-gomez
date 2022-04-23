// eslint-disable-next-line import/extensions
import Component from "../Component.js";

class PokemonComponent extends Component {
  pokemon;

  constructor(parentElement, pokemon) {
    super(parentElement, "li", "pokemon_li");
    this.pokemon = pokemon;

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <div class="pokemon__avatar-container">
      <img
        class="pokemon__avatar"
        src="${this.pokemon.sprites.front_default}"
        alt="Pokemon ${this.pokemon.name}"
      />
      <p class="pokemon__name">${this.pokemon.name}</p>
    </div>`;
  }
}

export default PokemonComponent;

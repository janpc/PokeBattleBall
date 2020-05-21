import React, { createContext } from "react";
import { observable, action } from "mobx";

class PokeBattleBallModel {
  @observable pagina = 1;

  @action setPagina(p) {
    this.pagina = p;
  }

  @observable pokemons = [];

  @action setPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
      .then((res) => res.json())
      .then((json) => {
        this.pokemons = json.results;
        this.data = json.results;
      });
  }

  @observable data = [];

  @observable filter = "";

  @action filtering(f) {
    if (f != "" && this.pokemons != []) {
      this.filter = f;
      this.data = this.pokemons.filter((item) => {
        return item.name.toLowerCase().match(f);
      });

      alert(this.data.map((item) => item.name));
    } else {
      this.filter = "";
      this.data = this.pokemons;
    }
  }

  @observable pokemonBo = 6;

  @action setPokemonBo(a) {
    this.pokemonBo = a;
  }

  @observable pokemonDolent = 35;

  @action setPokmondolent(a) {
    this.pokemonDolent = a;
  }

  @observable atacks = [1, 2, 3, 4];

  @observable aliat = {};
  @observable aliatLoaded = false;

  @action setAliat() {
    if (!this.aliatLoaded) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + this.pokemonBo + "/")
        .then((res) => res.json())
        .then((json) => {
          this.aliat = json;
          this.aliatLoaded = true;
        });
    }
  }

  @observable enemic = {};

  @action setEnemic() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + this.pokemonDolent + "/")
      .then((res) => res.json())
      .then((json) => {
        this.enemic = json;
      });
  }

  @observable moves = [];

  @action setMoves() {
    this.moves == [];
    this.atacks.map((a) =>
      fetch("https://pokeapi.co/api/v2/move/" + a + "/")
        .then((res) => res.json())
        .then((json) => {
          this.moves.push(json);
        })
    );
  }

  @observable generation = [];
  @observable generationLoaded = false;
  @action setGeneration() {
    if (!this.generationLoaded) {
      fetch("https://pokeapi.co/api/v2/generation")
        .then((res) => res.json())
        .then((json) => {
          this.generation=json.results;
          this.generationLoaded = true;
          alert("DD");
        });
    }
  }

  @observable types = [];
  @observable typesLoaded = false;
  @action setTypes() {
    if (!this.typesLoaded) {
      fetch("https://pokeapi.co/api/v2/type/")
        .then((res) => res.json())
        .then((json) => {
          this.types=json.results;
          this.typesLoaded = true;
        });
    }
  }
}

const model = new PokeBattleBallModel();

export const PokeContext = createContext(model);

export const PokemonProvider = ({ children }) => {
  return <PokeContext.Provider value={model}>{children}</PokeContext.Provider>;
};

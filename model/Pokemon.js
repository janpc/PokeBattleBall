import React, { createContext } from "react";
import { observable, action } from "mobx";

class PokeBattleBallModel {
  @observable pagina = 1;
  @observable pokemons = [];

  @action setPagina(p) {
    this.pagina = p;
  }
  
  @action loadPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((json) => this.pokemons=json);
  }
}

const model = new PokeBattleBallModel();

export const PokeContext = createContext(model);

export const PokemonProvider = ({ children }) => {
  return <PokeContext.Provider value={model}>{children}</PokeContext.Provider>;
};

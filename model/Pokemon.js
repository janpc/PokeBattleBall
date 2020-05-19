import React, { createContext } from "react";
import { observable, action } from "mobx";

class PokeBattleBallModel {
  @observable pagina = 1;

  @observable pokemons = [];

  @observable data = [];

  @observable filter = "";

  @action setPagina(p) {
    this.pagina = p;
  }

  @action setPokemons(k) {
    this.pokemons = k;
    this.data = k;
  }
  @action filtering(f) {
    if (f!="" && this.pokemons!=[]){
      this.filter = f;
      this.data = this.pokemons.filter((item) => {
        return item.name.toLowerCase().match(text)
      })
    }
    else {
      this.filter = "";
      this.data = this.pokemons;
    }
    
  }
}

const model = new PokeBattleBallModel();

export const PokeContext = createContext(model);

export const PokemonProvider = ({ children }) => {
  return <PokeContext.Provider value={model}>{children}</PokeContext.Provider>;
};

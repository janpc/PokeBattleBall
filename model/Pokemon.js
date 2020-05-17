import React, { createContext } from "react";
import { observable, action } from "mobx";

class PokeBattleBallModel {
  @observable pagina = 1;

  @action setPagina(p) {
    this.pagina = p;
  }
}

const model = new PokeBattleBallModel();

export const PokeContext = createContext(model);

export const PokemonProvider = ({ children }) => {
  return <PokeContext.Provider value={model}>{children}</PokeContext.Provider>;
};

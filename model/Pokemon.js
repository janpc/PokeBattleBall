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
        return item.name.match(f.toLowerCase());
      });
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

  @action setPokmondolent() {
    this.pokemonDolent = Math.floor(Math.random() * 964) + 1;
  }

  @observable atacks = [];
  @observable isOn=false;
  includes = false;

  @action setNullAtacks(){
    this.atacks.splice(0, 4);
    alert(this.atacks.length);
  }
  @action includesAtack(a){
    this.includes=false;
    this.atacks.map(atack=>{if(atack==a){
      this.includes=true;
    }})
  }
  @action toggleAtack(a){
    this.includes=false;
    this.atacks.map(atack=>{if(atack==a){
      this.includes=true;
    }})
    if(!this.includes){
      if(this.atacks.length<4){
        this.atacks.push(a);
        this.isOn = true;
      }else{
        this.isOn = false;
      }
    } else{
      this.atacks.splice(this.atacks.indexOf(a), 1);
      this.isOn = false;
    }
    
  }

  @observable aliat = {};
  @observable aliatLoaded = false;

  @action setAliat() {
    if (!this.aliatLoaded || String.valueOf(this.aliat.id)!=this.pokemonBo) {
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

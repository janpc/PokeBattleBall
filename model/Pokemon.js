import React, { createContext } from "react";
import { observable, action, computed } from "mobx";

class PokeBattleBallModel {
  @observable pagina = 1;

  @action setPagina(p) {
    this.pagina = p;
  }

  pokemons = [];

  @action setPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
      .then((res) => res.json())
      .then((json) => {
        this.pokemons = json.results;
        this.data = json.results;
      });
  }

  @observable data = [];

  @action filtering(f) {
    if (f != "" && this.pokemons != []) {
      this.filter = f;
      this.data = this.pokemons.filter((item) => {
        return item.name.match(f.toLowerCase());
      });
    } else {
      this.data = this.pokemons;
    }
  }
  @action defaultData(){
    this.data=this.pokemons;
  }

  pokemonBo = 6;

  @action setPokemonBo(a) {
    this.pokemonBo = a;
  }

  pokemonDolent = 35;

  @action setPokmondolent() {
    this.pokemonDolent = Math.floor(Math.random() * 964) + 1;
    
    
  }

  @observable atacks = [];

  @action setNullAtacks(){
    this.atacks.splice(0, 4);
  }
  includesAtack(a){
    includes=false;
    this.atacks.forEach(atack=>{if(atack==a){
      includes=true;
    }})
    return includes;
  }
  @action toggleAtack(a){
    includes=false;
    this.atacks.forEach(atack=>{if(atack==a){
      includes=true;
    }})
    if(!includes){
      if(this.atacks.length<4){
        this.atacks.push(a);
      }
    } else{
      this.atacks.splice(this.atacks.indexOf(a), 1);
    }
  }

  @observable aliat = {};

  @action setAliat() {
    if (!this.aliatLoaded || String.valueOf(this.aliat.id)!=this.pokemonBo) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + this.pokemonBo + "/")
        .then((res) => res.json())
        .then((json) => {
          this.aliat = json;
        });
    }
  }
  @action setEmptyAliat(){
    this.aliat={};
  }

  @observable enemic = {};

  @action setEnemic() {

    done=false;
    while(!done){
      fetch("https://pokeapi.co/api/v2/pokemon/" + this.pokemonDolent + "/")
      .then((res) => res.json())
      .then((json) => {
        this.enemic = json;
      });
      if(this.enemic!=null){
        done=true;
      }
      else{
        this.pokemonDolent = Math.floor(Math.random() * 964) + 1;
      }
      
    }
    
  }

  @observable fullAttacks = [];

  @action setFullAttacks() {
    this.fullAttacks == [];
    this.atacks.map((a) =>
      fetch("https://pokeapi.co/api/v2/move/" + a + "/")
        .then((res) => res.json())
        .then((json) => {
          this.fullAttacks.push(json);
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

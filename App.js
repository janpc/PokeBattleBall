import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Filtres from "./screens/Filtres";
import Combat from "./screens/Combat";
import PokeInfo from "./screens/PokeInfo";
import BattleVS from "./screens/BattleVS";
import Login from "./screens/Login";
import PokeList from "./screens/PokeList";
import Win from "./screens/Win";
import { apisAreAvailable } from "expo";
import { PokemonProvider, PokeContext } from "./model/Pokemon";
import { observer } from "mobx-react";

export default function App() {
  
  return (
    <PokemonProvider>
      <Pagina />
    </PokemonProvider>
  )
}

const Pagina = observer(() => {
  const [pokemonBo, setPokemonBo] = useState(6);
  const [pokemonDolent, setPokemonDolent] = useState(35);
  const [atack1, setAtack1] = useState(1);
  const [atack2, setAtack2] = useState(2);
  const [atack3, setAtack3] = useState(3);
  const [atack4, setAtack4] = useState(4);
  function mainPokemon(id) {
    setPokemonBo(id);
  }
  const model = useContext(PokeContext);
  switch (model.pagina) {
    case 1:
      return (
        <View style={styles.container}>
          <Login move={model.setPagina} />
        </View>
      );
      break;
    case 2:
      return (
        <View style={styles.container}>
          <BattleVS move={model.setPagina} />
        </View>
      );
      break;
    case 3:
      return (
        <View style={styles.container}>
          <PokeList move={model.setPagina} setMainPokemon={mainPokemon} />
        </View>
      );
      break;
    case 4:
      return (
        <View style={styles.container}>
          <Filtres move={model.setPagina} />
        </View>
      );
      break;
    case 5:
      return (
        <View style={styles.container}>
          <PokeInfo move={model.setPagina} id={pokemonBo} />
        </View>
      );
      break;
    case 6:
      return (
        <View style={styles.container}>
          <Combat
            move={model.setPagina}
            pokemonBo={pokemonBo}
            pokemonDolent={pokemonDolent}
            atack1={atack1}
            atack2={atack2}
            atack3={atack3}
            atack4={atack4}
          />
        </View>
      );
      break;
    case 7: {
      return (
        <View style={styles.container}>
          <Win move={model.setPagina} />
        </View>
      );
      break;
    }
    default:
      break;
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

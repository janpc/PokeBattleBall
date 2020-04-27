import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Filtres from "./screens/Filtres";
import Combat from "./screens/Combat";
import PokeInfo from "./screens/PokeInfo";
import BattleVS from "./screens/BattleVS";
import Login from "./screens/Login";
import PokeList from "./screens/PokeList";
import Win from "./screens/Win";
import { apisAreAvailable } from "expo";

export default function App() {
  const [pagina, setPagina] = useState(1);
  const [pokemonBo, setPokemonBo] = useState(6);
  const [pokemonDolent, setPokemonDolent] = useState(35);
  const [atack1, setAtack1] = useState(1);
  const [atack2, setAtack2] = useState(2);
  const [atack3, setAtack3] = useState(3);
  const [atack4, setAtack4] = useState(4);
  function moveToScreen(a) {
    setPagina(a);
  }
  function mainPokemon(id){
    setPokemonBo(id);
  }

  switch (pagina) {
    case 1:
      return (
        <View style={styles.container}>
          <Login move={moveToScreen}  />
        </View>
      );
      break;
    case 2:
      return (
        <View style={styles.container}>
          <BattleVS move={moveToScreen} />
        </View>
      );
      break;
    case 3:
      return (
        <View style={styles.container}>
          <PokeList move={moveToScreen} setMainPokemon={mainPokemon}/>
        </View>
      );
      break;
    case 4:
      return (
        <View style={styles.container}>
          <Filtres move={moveToScreen} />
        </View>
      );
      break;
    case 5:
      return (
        <View style={styles.container}>
          <PokeInfo move={moveToScreen} id={pokemonBo} />
        </View>
      );
      break;
    case 6:
      return (
        <View style={styles.container}>
          <Combat
            move={moveToScreen}
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
          <Win move={moveToScreen}/>
        </View>
      );
      break;
    }
    default:
      break;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

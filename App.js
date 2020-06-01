import "mobx-react-lite/batchingForReactNative";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Filtres from "./screens/Filtres";
import Combat from "./screens/Combat";
import PokeInfo from "./screens/PokeInfo";
import BattleVS from "./screens/BattleVS";
import Login from "./screens/Login";
import PokeList from "./screens/PokeList";
import Win from "./screens/Win";
import Lost from "./screens/Lost";
import { apisAreAvailable } from "expo";
import { PokemonProvider, PokeContext } from "./model/Pokemon";
import { observer } from "mobx-react";

export default function App() {
  const model = useContext(PokeContext);
  useEffect(() => {
    model.setPokemons();
  }, []);
  return (
    <PokemonProvider>
      <Pagina />
    </PokemonProvider>
  );
}

const Pagina = observer(() => {
  const model = useContext(PokeContext);
  switch (model.pagina) {
    case 1:
      return (
        <View style={styles.container}>
          <Login />
        </View>
      );
      break;
    case 2:
      return (
        <View style={styles.container}>
          <BattleVS />
        </View>
      );
      break;
    case 3:
      return (
        <View style={styles.container}>
          <PokeList />
        </View>
      );
      break;
    case 4:
      return (
        <View style={styles.container}>
          <Filtres />
        </View>
      );
      break;
    case 5:
      return (
        <View style={styles.container}>
          <PokeInfo />
        </View>
      );
      break;
    case 6:
      return (
        <View style={styles.container}>
          <Combat />
        </View>
      );
      break;
    case 7: 
      return (
        <View style={styles.container}>
          <Win />
        </View>
      );
      break;
    case 8: {
    return (
      <View style={styles.container}>
        <Lost />
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

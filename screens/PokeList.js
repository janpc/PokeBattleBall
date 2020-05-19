import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, ImageBackground, StyleSheet, TextInput, TouchableHighlight, View } from "react-native";
import Back from "react-native-vector-icons/FontAwesome";
import filter from "../assets/adjust_1.png";
import { PokeContext } from "../model/Pokemon";

import {observer} from "mobx-react";

const fons = "../assets/fons_app.png";

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const pokeSize = Math.floor(screenWidth / numColumns);

const PokePhoto = ({ id }) => {
  const uri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  console.log(uri);
  return <Image source={{ uri }} style={styles.photo} />;
};

const PokeList = observer(({setMainPokemon }) => {
  const [photolist, setPhotolist] = useState(null);
  const model = useContext(PokeContext);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((json) => model.setPokemons(json));
  }, []);

  if (model.pokemons == null) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require(fons)} style={styles.fons}>
        <Header/>
        <View style={styles.list}>
          <FlatList
            data={model.pokemons.results}
            numColumns={numColumns}
            renderItem={({ item }) => (
              <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="#00000000"
                onPress={() => {
                  model.setPagina(5);
                  setMainPokemon(item.url.substring(34, item.url.length - 1))
                }}
              >
                <View style={[styles.backPoke, styles.shadows]}>
                  <PokePhoto id={item.url.substring(34, item.url.length - 1)} />
                </View>
              </TouchableHighlight>
            )}
            keyExtractor={(item, index) =>
              item.url.substring(34, item.url.length - 1)
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
});


const Header = () => {
  const model = useContext(PokeContext);


  return (
    <View style={styles.header}>
      <Back
        name="chevron-left"
        size={36}
        color={"white"}
        backgroundColor="black"
        style={[styles.back, styles.shadows]}
        onPress={() => model.setPagina(2)}
      />
      <View style={[styles.searcher, styles.shadows]}>
        <TextInput placeholder="search..." onChangeText={text => model.filtering(text)}/>
      </View>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#00000000"
        onPress={() => {
          model.setPagina(4)
        }}
      >
        <Image source={filter} style={styles.filt} />
      </TouchableHighlight>
    </View>
  );
};

export default PokeList;
const MAIN_MARGIN = 20;
const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000000",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor:"blue",
  },
  image: {
    height: 800,
    resizeMode: "contain",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    //alignContent: "stretch",
    //paddingBottom: ,
    paddingTop: 35,
    paddingStart: 5,
    //height: 100,
    backgroundColor: "#00000000",
  },
  list: {
    flex: 10,
    alignItems: "center",
    alignContent: "center",
    margin: 10,
    //paddingLeft: 40,
    backgroundColor: "#00000000",
  },
  backPoke: {
    borderRadius: 20,
    backgroundColor: "white",
    margin: 10,
    height: WIDTH*0.25,
    width: WIDTH*0.25,
    alignItems: "center",
    justifyContent: "center",
    opacity:0.95,
  },
  inferior: {
    flex: 2,
    backgroundColor: "#00000000",
  },
  back: {
    paddingLeft: 10,
    paddingRight: 20,
    position: "relative",

    //paddingLeft: 10
    //position: "relative"
  },
  searcher: {
    backgroundColor: "white",
    height: 30,
    width: 220,
    borderRadius: 30,
    paddingLeft: 20,
    position: "relative",
    left: 0,
  },
  filt: {
    //position: "relative",
    height: 40,
    //width: 36,
    resizeMode: "contain",
  },
  photo: {
    width: WIDTH*0.27,
    height: WIDTH*0.27,
    opacity:0.95,
  },
  shadows: {
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.25,

    elevation: 5,
  },
  fons: {
    flex: 1,
    resizeMode: "cover",
  },
});

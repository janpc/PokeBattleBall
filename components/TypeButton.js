import React, { useContext } from "react";
import { Dimensions, Image, StyleSheet, TouchableHighlight, View } from "react-native";
import {PokeContext } from "../model/Pokemon";


const TypeButton = ({ img, type }) => {
  const model = useContext(PokeContext);
  const { typeButton, text, shadows, image } = styles;
  return (
    <View style={[typeButton, shadows]}>
      <TouchableHighlight
        onPress={() => {
          model.setDefaultData();
          model.setTipus(type);
          model.setPagina(3);
        }}
      >
        
        <Image
          style={[image]}
          source={{
            uri: "https://gamepedia.cursecdn.com/pokemongo_" + img,
          }}
        />
      </TouchableHighlight>
    </View>
  );
};

export default TypeButton;
const Heigth_WIDTH = (Dimensions.get("window").width * 0.7) / 3;
const MARGIN = Dimensions.get("window").width * 0.025;

const styles = StyleSheet.create({
  typeButton: {
    width: Heigth_WIDTH,
    height: Heigth_WIDTH,
    backgroundColor: "#5FC0DF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: MARGIN,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  shadows: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.25,

    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
});

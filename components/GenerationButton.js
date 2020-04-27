import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";

const GenerationButton = ({ generation }) => {
  const { genButton, text, shadows } = styles;
  return (
    <View style={[genButton, shadows]}>
        <Text style={text}>{generation}</Text>
    </View>
  );
};

export default GenerationButton;
const Heigth_WIDTH = Dimensions.get("window").width * 0.7/3;
const MARGIN = Dimensions.get("window").width * 0.025;
const styles = StyleSheet.create({
  genButton: {
    width: Heigth_WIDTH,
    height: Heigth_WIDTH,
    backgroundColor: "#5FC0DF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin:MARGIN,
  },
  text:{
    fontSize: 42,
    color: 'white',
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
});

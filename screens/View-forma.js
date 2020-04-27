import React, { useState } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";

const Filtres = ({ move }) => {
  // estat per saber a quina pestanya estem, si és true és la primera sino la segona
  const [isShowingFirst, setisShowingFirst] = useState(true);
// funció que canvia l'estat 
  const _change = () => {
    setisShowingFirst(!isShowingFirst);
  };
  const {
    pestanyes,
    center,
  } = styles;
    return (
      <View style={pestanyes}>
          <View style={[center]}>
            <Folder isShowingFirst={isShowingFirst} _change={_change}/>
          </View>
      </View>
    );
};

export default Filtres;

//a folder se li passa l'estat i la funció de canvi d'estat per saber quina mostrar i poder canviar-ho
const Folder = ({ isShowingFirst, _change }) => {
  const {
    backSquare,
    topSquare,
    mainSquareFirst,
    mainSquareSecond,
    shadows,
    topText,
    row,
    topBackSquare,
    content,
  } = styles;
  //on hi ha els textos hola i adeu aniria el teu contingut
  if (isShowingFirst) {
    return (
      <View style={[shadows, backSquare]}>
        <View style={[row]}>
          <View style={[shadows, topSquare]}>
            <Text style={[topText]}> Generation </Text>
          </View>
          <TouchableHighlight onPress={_change}>
            <View style={[topBackSquare]}>
              <Text style={[topText]}> Type </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <View style={[shadows, mainSquareFirst]}>
            <View style={[content]}>
              <Text>Hola</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[shadows, backSquare]}>
        <View style={[row]}>
          <TouchableHighlight onPress={_change}>
            <View style={[topBackSquare]}>
              <Text style={[topText]}> Generation </Text>
            </View>
          </TouchableHighlight>
          <View style={[shadows, topSquare]}>
            <Text style={[topText]}> Type </Text>
          </View>
        </View>
        <View>
          <View style={[shadows, mainSquareSecond]}>
            <ScrollView style={[content]}>
              <Text>Adeu</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
};
//color de fons
const BACKGROUND_COLOR = "#123456";
//color principal Folders
const MAIN_COLOR = "#fff";
//color secundari Folders
const SECOND_COLOR = "#CBC8C8";
// radi curvatura cantonades
const BORDER_REDIUS = 20;
// altura total
const MAIN_HEIGHT = 650;
// altura pestanyes superiors
const TOP_HEIGHT = 72;
//amplada total
const MAIN_WIDTH = Dimensions.get("window").width * 0.9;
//marges
const MAIN_MARGIN = Dimensions.get("window").width * 0.05;

const styles = StyleSheet.create({
  //-------------------------------nescessaris-----------------------------------------
  backSquare: {
    width: MAIN_WIDTH,
    height: MAIN_HEIGHT,
    top: 0,
    backgroundColor: SECOND_COLOR,
    borderRadius: BORDER_REDIUS,
    marginTop: MAIN_MARGIN,
    marginBottom: MAIN_MARGIN,
  },
  topSquare: {
    position: "relative",
    left: 0,
    top: 0,
    width: MAIN_WIDTH / 2,
    height: TOP_HEIGHT,
    backgroundColor: MAIN_COLOR,
    borderRadius: BORDER_REDIUS,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  topBackSquare: {
    position: "relative",
    width: MAIN_WIDTH / 2,
    height: TOP_HEIGHT,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  mainSquareFirst: {
    position: "relative",
    left: 0,
    top: 0,
    width: MAIN_WIDTH,
    height: MAIN_HEIGHT - TOP_HEIGHT,
    backgroundColor: MAIN_COLOR,
    borderRadius: BORDER_REDIUS,
    borderTopStartRadius: 0,
  },
  mainSquareSecond: {
    position: "relative",
    left: 0,
    top: 0,
    width: MAIN_WIDTH,
    height: MAIN_HEIGHT - TOP_HEIGHT,
    backgroundColor: MAIN_COLOR,
    borderRadius: BORDER_REDIUS,
    borderTopEndRadius: 0,
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
  topText: {
    fontSize: 24,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  content: {
    margin: 21.5 / 2,
  },
  //------------------------------no nescessaris---------------------------------------
  center: {
    alignItems: "center",
  },

  pestanyes: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: BACKGROUND_COLOR,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});

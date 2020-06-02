import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import GenerationButton from "../components/GenerationButton.js";
import TypeButton from "../components/TypeButton.js";
import {PokeContext } from "../model/Pokemon";
const fonsFiltres = "../assets/filtres.png";
import { observer } from "mobx-react";

const Filtres = observer(() => {

  /////////////DATA/////////////////
  useEffect(()=>{
    model.setGeneration();
    model.setTypes();
  }, [])
  

  const typesImg = [
    { num: 1, url: "es_gamepedia/2/23/Type_Normal.png" },
    { num: 2, url: "es_gamepedia/6/66/Type_Lucha.png" },
    { num: 3, url: "es_gamepedia/8/80/Type_Volador.png" },
    { num: 4, url: "gamepedia_en/9/90/Type_Poison.png" },
    { num: 5, url: "es_gamepedia/4/49/Type_Tierra.png" },
    { num: 6, url: "es_gamepedia/b/b3/Type_Roca.png" },
    { num: 7, url: "es_gamepedia/9/91/Type_Bicho.png" },
    { num: 8, url: "es_gamepedia/1/11/Type_Fantasma.png" },
    { num: 9, url: "es_gamepedia/2/2c/Type_Acero.png" },
    { num: 10, url: "es_gamepedia/3/38/Type_Fuego.png" },
    { num: 11, url: "es_gamepedia/b/b7/Type_Agua.png" },
    { num: 12, url: "es_gamepedia/6/60/Type_Planta.png" },
    { num: 13, url: "es_gamepedia/c/c7/Type_Eléctrico.png" },
    { num: 14, url: "es_gamepedia/7/72/Type_Psíquico.png" },
    { num: 15, url: "es_gamepedia/3/35/Type_Hielo.png" },
    { num: 16, url: "es_gamepedia/d/d4/Type_Dragón.png" },
    { num: 17, url: "es_gamepedia/3/39/Type_Siniestro.png" },
    { num: 18, url: "es_gamepedia/4/49/Type_Hada.png" },
  ];

  
  const {
    pestanyes,
    shadows,
    back,
    fons,
    center,
  } = styles;
  const model = useContext(PokeContext);
  return (
    <View style={pestanyes}>
      <ImageBackground source={require(fonsFiltres)} style={fons}>
        <Icon
          name="chevron-left"
          size={36}
          color={"white"}
          backgroundColor="#3b5998"
          onPress={() => model.setPagina(3)}
          style={[shadows, back]}
        />
        <View style={[center]}>
          <Folder typesImg={typesImg}/>
        </View>
      </ImageBackground>
    </View>
  );
});

export default Filtres;

const Folder = observer(({typesImg }) => {
  const [isShowingFirst, setisShowingFirst] = useState(true);
  const _change = () => {
    setisShowingFirst(!isShowingFirst);
  };
  const model = useContext(PokeContext);
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
              <FlatList
                data={model.generation}
                renderItem={({ item }) => (
                  <GenerationButton
                    generation={item.name.substring(11).toUpperCase()}
                  />
                )}
                keyExtractor={(item) =>
                  item.url.substring(item.url.length - 2, item.url.length - 1)
                }
                numColumns={3}
              />
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
            <View style={[content]}>
              <FlatList
                data={typesImg}
                renderItem={({ item }) => <TypeButton img={item.url} />}
                keyExtractor={(item) => item.num}
                numColumns={3}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
});

const MAIN_COLOR = "#fff";
const BACKGROUND_COLOR = "#00000000";
const SECOND_COLOR = "#CBC8C8";
const BORDER_REDIUS = 20;
const MAIN_HEIGHT = 650;
const TOP_HEIGHT = 72;
const MAIN_WIDTH = Dimensions.get("window").width * 0.9;
const MAIN_MARGIN = Dimensions.get("window").width * 0.05;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  fons: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    margin: 21.5 / 2,
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
    fontFamily: "Lato-Regular",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  back: {
    marginTop: MAIN_MARGIN * 1.5,
    marginLeft: MAIN_MARGIN,
  },
});

import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tick from "../assets/tick.png";
import {PokeContext } from "../model/Pokemon";
const fonsInfo = "../assets/info.png";

function capitalize(str) {
  if (str.length <= 1) {
    return str.toUpperCase();
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const PokeInfo = ({ id, move }) => {
  const [isShowingFirst, setisShowingFirst] = useState(true);
  const [info, setInfo] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const _change = () => {
    setisShowingFirst(!isShowingFirst);
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/")
      .then((res) => res.json())
      .then((json) => {
        setInfo(json);
        setInfoLoaded(true);
      });
  }, []);

  const {
    fons,
    pokeInfo,
    center,
    fullWidth,
    shadows,
    back,
    nameView,
    pokemonName,
    row,
  } = styles;
  const model = useContext(PokeContext);
  if (infoLoaded) {
    return (
      <View style={[pokeInfo]}>
        <ImageBackground source={require(fonsInfo)} style={fons}>
          <Icon
            name="chevron-left"
            size={36}
            color={"white"}
            backgroundColor="#3b5998"
            onPress={() => model.setPagina(3)}
            style={[shadows, back]}
          />
          <View style={[fullWidth, center]}>
            <View style={[row]}>
              <View style={[nameView]}>
                <Text style={[pokemonName, shadows]}>
                  {capitalize(info.name)}
                </Text>
              </View>
              <PokeImg link={info.sprites.front_default} />
            </View>
            <Folder
              isShowingFirst={isShowingFirst}
              _change={_change}
              info={info}
            />
          </View>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#00000000"
            onPress={() => model.setPagina(6)}
          >
            <Image source={tick} style={styles.tick} />
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={[pokeInfo]}>
        <ImageBackground source={require(fonsInfo)} style={fons}>
          <Icon
            name="chevron-left"
            size={36}
            color={"white"}
            backgroundColor="#3b5998"
            onPress={() => model.setPagina(3)}
            style={[shadows, back]}
          />
        </ImageBackground>
      </View>
    );
  }
};

export default PokeInfo;

const PokeImg = ({ link }) => {
  const { image, shadows, pokemonImgView } = styles;
  return (
    <View style={[pokemonImgView, shadows]}>
      <Image
        style={[image]}
        source={{
          uri: link,
        }}
      />
    </View>
  );
};

const Folder = ({ isShowingFirst, _change, info }) => {
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
    center,
    infoView,
    mainText,
    title,
  } = styles;

  const listTypes = info.types.map((item) => (
    <Text style={mainText} key={item.slot}> -{capitalize(item.type.name)}</Text>
  ));
  
  const listStats= info.stats.map((item) => (
    <View style={row} key={item.stat.name}>
      <Text style={title}>{capitalize(item.stat.name)}:</Text>
      <Text style={mainText}> {item.base_stat}</Text>
    </View>
  ));
  
  if (isShowingFirst) {
    return (
      <View style={[shadows, backSquare]}>
        <View style={[row]}>
          <View style={[shadows, topSquare]}>
            <Text style={[topText]}> Moves </Text>
          </View>
          <TouchableHighlight onPress={_change}>
            <View style={[topBackSquare]}>
              <Text style={[topText]}> Info </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <View style={[shadows, mainSquareFirst]}>
            <View style={[content]}>
              <View style={center}>
                <FlatList
                  data={info.moves}
                  renderItem={({ item }) => <Atack move={item.move} />}
                  keyExtractor={(item, index) => {
                    index.toString() + item.move.name
                  }}
                  numColumns={1}
                />
              </View>
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
              <Text style={[topText]}> Moves </Text>
            </View>
          </TouchableHighlight>
          <View style={[shadows, topSquare]}>
            <Text style={[topText]}> Info </Text>
          </View>
        </View>
        <View>
          <View style={[shadows, mainSquareSecond]}>
            <View style={[content]}>
              <ScrollView style={infoView}>
                <View style={row}>
                  <Text style={title}>Species:</Text>
                  <Text style={mainText}>
                    {"  "}
                    {capitalize(info.species.name)}
                  </Text>
                </View>
                <Text style={title}>Types:</Text>
                {listTypes}
                {listStats}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const Atack = ({ move }) => {
  const { atack, shadows, atackText } = styles;
  var name = "undefined";
  if (typeof move.name !== "undefined") {
    name = capitalize(move.name);
  }

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="#00000000"
      onPress={() => {
        alert("atack");
      }}
    >
      <View style={[atack, shadows]}>
        <Text style={atackText}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};

//color de fons
const BACKGROUND_COLOR = "#123456";
//color principal Folders
const MAIN_COLOR = "#fff";
//color secundari Folders
const SECOND_COLOR = "#FFF082";
// radi curvatura cantonades
const BORDER_REDIUS = 20;
// altura total
const MAIN_HEIGHT = 420;
// altura pestanyes superiors
const TOP_HEIGHT = 48;
//amplada total
const MAIN_WIDTH = Dimensions.get("window").width * 0.9;
//marges
const MAIN_MARGIN = Dimensions.get("window").width * 0.05;

const styles = StyleSheet.create({
  infoView: {
    margin: MAIN_MARGIN * 0.75,
    marginLeft: MAIN_MARGIN * 1.5,
  },
  mainText: {
    fontSize: 16,
    marginTop: MAIN_MARGIN * 0.25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: MAIN_MARGIN * 0.25,
    marginTop: MAIN_MARGIN * 0.25,
  },
  atackText: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  atack: {
    width: MAIN_WIDTH * 0.85,
    height: 40,
    backgroundColor: "#FFF082",
    borderRadius: 20,
    margin: 10,
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
  back: {
    marginTop: MAIN_MARGIN * 1.5,
    marginLeft: MAIN_MARGIN,
  },
  fullWidth: {
    width: Dimensions.get("screen").width,
  },
  pokeInfo: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: BACKGROUND_COLOR,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  center: {
    alignItems: "center",
  },
  fons: {
    flex: 1,
    resizeMode: "cover",
  },
  backSquare: {
    width: MAIN_WIDTH,
    height: MAIN_HEIGHT,
    top: 0,
    backgroundColor: SECOND_COLOR,
    borderRadius: BORDER_REDIUS,
    marginTop: MAIN_MARGIN,
    marginBottom: MAIN_MARGIN * 0.75,
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
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  content: {
    margin: 21.5 / 2,
  },
  pokemonImgView: {
    width: MAIN_WIDTH * 0.43,
    height: MAIN_WIDTH * 0.43,
    backgroundColor: "white",
    borderRadius: MAIN_WIDTH * 0.27,
    justifyContent: "center",
    alignItems: "center",
    margin: 21.5 / 2,
  },
  image: {
    width: MAIN_WIDTH * 0.45,
    height: MAIN_WIDTH * 0.45,
  },
  pokemonName: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
  },
  nameView: {
    flexDirection: "column",
    width: MAIN_WIDTH * 0.55,
    height: MAIN_WIDTH * 0.42,
    backgroundColor: "#00000000",
    alignItems: "flex-end",
    marginLeft: 0,
    justifyContent: "flex-end",
  },
  tick: {
    height: 60,
    resizeMode: "contain",
    marginTop: -MAIN_MARGIN * 0.25,
    left: MAIN_WIDTH * 0.65,
  },
});

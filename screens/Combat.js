import React, { useState, useEffect} from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const fonsFiltres = "../assets/combat.jpg";

function capitalize(str){
  if (str.length <= 1) { return str.toUpperCase(); }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const Combat = ({
  move,
  pokemonBo,
  pokemonDolent,
  atack1,
  atack2,
  atack3,
  atack4,
}) => {
  const [aliat, setAliat] = useState([]);
  const [enemic, setEnemic] = useState([]);
  const [move1, setMove1] = useState([]);
  const [move2, setMove2] = useState([]);
  const [move3, setMove3] = useState([]);
  const [move4, setMove4] = useState([]);

  /////////////DATA/////////////////
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonBo + "/")
    .then((res) => res.json())
    .then((json) => {
      setAliat(json);
    });
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonDolent + "/")
    .then((res) => res.json())
    .then((json) => {
      setEnemic(json);
    });
  fetch("https://pokeapi.co/api/v2/move/" + atack1 + "/")
    .then((res) => res.json())
    .then((json) => {
      setMove1(json);
    });
  fetch("https://pokeapi.co/api/v2/move/" + atack2 + "/")
    .then((res) => res.json())
    .then((json) => {
      setMove2(json);
    });
  fetch("https://pokeapi.co/api/v2/move/" + atack3 + "/")
    .then((res) => res.json())
    .then((json) => {
      setMove3(json);
    });
  fetch("https://pokeapi.co/api/v2/move/" + atack4 + "/")
    .then((res) => res.json())
    .then((json) => {
      setMove4(json);
    });
  },[]);
  
  

  const {
    row,
    fons,
    center,
    combat,
    back,
    shadows,
    textField,
    column,
    combatMain,
    atackView,
  } = styles;
  return (
    <View style={combat}>
      <ImageBackground source={require(fonsFiltres)} style={fons}>
        <Icon
          name="times"
          size={36}
          color={"white"}
          backgroundColor="#3b5998"
          onPress={() => move(2)}
          style={back}
        />
        <View style={[column, center, combatMain]}>
          <View style={[row]}>
            <PokeImg num={pokemonDolent} />
            <PokeInfo name={enemic.name} enemic={true} />
          </View>
          <View style={[textField, shadows]}></View>
          <View style={[row]}>
            <PokeInfo name={aliat.name} enemic={false} />
            <PokeImg num={pokemonBo} />
          </View>
          <View style={[atackView, column]}>
            <Atack move={move1} moveToPage={move}/>
            <Atack move={move2} moveToPage={move}/>
            <Atack move={move3} moveToPage={move}/>
            <Atack move={move4} moveToPage={move}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Atack = ({ move, moveToPage }) => {
  const { atack, shadows, atackText } = styles;
  var name="undefined";
  if (typeof(move.name) !== 'undefined') {
    name=capitalize(move.name);
  }
  
  
  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="#00000000"
      onPress={() => {
        moveToPage(7);
      }}
    >
      <View style={[atack, shadows]}><Text style={atackText}>{name}</Text></View>
    </TouchableHighlight>
  );
};

const PokeImg = ({ num }) => {
  const { image, shadows, pokemonImgView } = styles;
  return (
    <View style={[pokemonImgView, shadows]}>
      <Image
        style={[image]}
        source={{
          uri:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            num +
            ".png",
        }}
      />
    </View>
  );
};
const PokeInfo = ({ name, enemic }) => {
  if (typeof(name) !== 'undefined') {
    name=capitalize(name);
  }
  const {
    pokemonInfo,
    column,
    vidaView,
    pokemonName,
    vidaBack,
    vida,
    nameView,
    amic,
  } = styles;
  if (enemic) {
    return (
      <View style={[pokemonInfo, column]}>
        <View style={[nameView]}>
          <Text style={[pokemonName]}>{name}</Text>
        </View>
        <View style={[vidaView]}>
          <View style={[vidaBack]}>
            <View style={[vida]}></View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[pokemonInfo, column]}>
        <View style={[nameView, amic]}>
          <Text style={[pokemonName]}>{name}</Text>
        </View>
        <View style={[vidaView, amic]}>
          <View style={[vidaBack]}>
            <View style={[vida]}></View>
          </View>
        </View>
      </View>
    );
  }
};
export default Combat;
const MAIN_MARGIN = 20;
const BACKGROUND_COLOR = "#00000000";
const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  atackText: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  atackView: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  atack: {
    width: WIDTH*0.7,
    height: 40,
    backgroundColor: "#FFF082",
    borderRadius: 20,
    margin: 10,
  },
  combatMain: {
    margin: 10,
  },
  amic: {
    justifyContent: "flex-end",
  },
  vida: {
    flex: 1,
    height: 30,
    borderRadius: 20,
    margin: 3,
    backgroundColor: "#04CF62",
  },
  vidaBack: {
    flex: 0.9,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#DDFFED",
  },
  pokemonName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  nameView: {
    flex: 0.6,
    flexDirection: "row",
    width: WIDTH*0.63,
    height: 50,
    backgroundColor: "#00000000",
    alignItems: "flex-end",
    margin: 5,
    marginLeft: 0,
  },
  vidaView: {
    flex: 0.4,
    flexDirection: "row",
    width: WIDTH*0.63,
    height: 50,
    backgroundColor: "#00000000",
    alignItems: "flex-start",
  },
  pokemonInfo: {
    flex: 1,
  },
  textField: {
    width: WIDTH*0.7,
    height: 125,

    top: 0,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
  },
  pokemonImgView: {
    width: WIDTH*0.27,
    height: WIDTH*0.27,
    backgroundColor: "white",
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    margin: 21.5 / 2,
  },
  combat: {
    flex: 1,
    flexDirection: "column",
    /*backgroundColor: BACKGROUND_COLOR,*/
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor:"blue",
  },
  center: {
    alignItems: "center",
  },
  fons: {
    flex: 1,
    resizeMode: "cover",
  },
  back: {
    marginTop: MAIN_MARGIN * 1.5,
    marginLeft: MAIN_MARGIN,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    flexDirection: "column",
  },
  image: {
    width: WIDTH*0.29,
    height: WIDTH*0.29,
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
});

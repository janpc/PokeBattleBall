import React, { useState, useEffect, useContext} from "react";
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
import {PokeContext } from "../model/Pokemon";
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
  const model = useContext(PokeContext);
  const SE = 1.2;
  const NVE = 0.5;
  const NE = 0;
  const moveEffects = {
    bug: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: NVE, flying: NVE, ghost: 1, grass: SE, ground: 1, ice: 1, normal: 1, poison: SE, psychic: SE, rock: NVE, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    dragon: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1, poison: 1, psychic: 1, rock: 1, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    electric: {bug: 1, dragon: 1, electric: NVE, fighting: 1, fire: 1, flying: SE, ghost: 1, grass: NVE, ground: NE, ice: 1, normal: 1, poison: 1, psychic: 1, rock: 1, water: SE, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    fighting: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: NVE, ghost: NE, grass: 1, ground: 1, ice: SE, normal: SE, poison: 1, psychic: NVE, rock: SE, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    fire: {bug: SE, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: 1, grass: SE, ground: 1, ice: SE, normal: 1, poison: 1, psychic: 1, rock: NVE, water: NVE, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    flying: {bug: SE, dragon: 1, electric: NVE, fighting: SE, fire: 1, flying: 1, ghost: 1, grass: SE, ground: 1, ice: 1, normal: 1, poison: 1, psychic: 1, rock: NVE, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    ghost: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: NE, poison: 1, psychic: NE, rock: 1, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    grass: {bug: NVE, dragon: 1, electric: 1, fighting: 1, fire: NVE, flying: NVE, ghost: 1, grass: NVE, ground: SE, ice: 1, normal: 1, poison: NVE, psychic: 1, rock: SE, water: SE, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    ground: {bug: 1, dragon: 1, electric: SE, fighting: 1, fire: SE, flying: NE, ghost: 1, grass: NVE, ground: 1, ice: 1, normal: 1, poison: SE, psychic: 1, rock: SE, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},
    
    ice: {bug: 1, dragon: SE, electric: 1, fighting: 1, fire: 1, flying: SE, ghost: 1, grass: SE, ground: SE, ice: NVE, normal: 1, poison: 1, psychic: 1, rock: 1, water: NVE, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    normal: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: NE, grass: 1, ground: 1, ice: 1, normal: 1, poison: 1, psychic: 1, rock: 1, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    poison: {bug: SE, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: 1, grass: SE, ground: NVE, ice: 1, normal: 1, poison: NVE, psychic: 1, rock: NVE, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    psychic: {bug: 1, dragon: 1, electric: 1, fighting: SE, fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1, poison: SE, psychic: NVE, rock: 1, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    rock: {bug: SE, dragon: 1, electric: NVE, fighting: 1, fire: SE, flying: SE, ghost: 1, grass: 1, ground: 1, ice: SE, normal: 1, poison: 1, psychic: 1, rock: NVE, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},
    
    water: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: SE, flying: 1, ghost: 1, grass: NVE, ground: SE, ice: NVE, normal: 1, poison: 1, psychic: 1, rock: SE, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    dark: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1, poison: 1, psychic: 1, rock: 1, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    fairy: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1, poison: 1, psychic: 1, rock: 1, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    unknown: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1, poison: 1, psychic: 1, rock: 1, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

    shadow: {bug: 1, dragon: 1, electric: 1, fighting: 1, fire: 1, flying: 1, ghost: 1, grass: 1, ground: 1, ice: 1, normal: 1, poison: 1, psychic: 1, rock: 1, water: 1, dark: 1, fairy: 1, unknown: 1, shadow: 1,},

  };
 
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
          onPress={() => model.setPagina(2)}
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
            <Atack move={move1} enemic={enemic} moveEffects={moveEffects}/>
            <Atack move={move2} enemic={enemic} moveEffects={moveEffects}/>
            <Atack move={move3} enemic={enemic}  moveEffects={moveEffects}/>
            <Atack move={move4} enemic={enemic} moveEffects={moveEffects}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Atack = ({ move, moveEffects, enemic}) => {
  const model = useContext(PokeContext);
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
        alert(enemic.types[0].type.name+': '+moveEffects[move.type.name][enemic.types[0].type.name]);
        model.setPagina(7);
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

import React, { useEffect, useContext, useState } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { PokeContext } from "../model/Pokemon";
import { observable } from "mobx";
import { observer } from "mobx-react";
const fonsFiltres = "../assets/combat.jpg";

function capitalize(str) {
  if (str.length <= 1) {
    return str.toUpperCase();
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const Combat = observer(() => {
  const model = useContext(PokeContext);
  const [isShowingText, setisShowingText] = useState(false);
  const [end, setEnd] = useState(false);
  const [perVidaAliat, setPerVidaAliat] = useState(1);
  const [perVidaEnemic, setPerVidaEnemic] = useState(1);
  const [misatge, setMisatge] = useState("");
  const [torn, setTorn] = useState(true);
  function showText(poke, att, damage) {
    var m = "";
    poke == 1
      ? (m = capitalize(model.aliat.name) + " attacks ")
      : (m = capitalize(model.enemic.name) + " attacks ");
    poke == 1
      ? (m += capitalize(model.enemic.name) + " using ")
      : (m += capitalize(model.aliat.name) + " using ");
    m += att + "\n";
    m += "Damage: " + damage;
    setMisatge(m);
    setisShowingText(true);
    setTorn(false);
    this.timeoutHandle = setTimeout(() => {
      setisShowingText(false);
      if (poke == 1 && !end) {
        var attack = model.fullAttacksEnemics[0];
        var damage =
          attack.power *
          attackEffects[attack.type.name][model.aliat.types[0].type.name];
        this.timeoutHandle = setTimeout(() => {
          functionAttack(damage, false);
          showText(2, attack.name, damage);
        }, 1000);
      } else {
        setTorn(true);
      }
    }, 3500);
  }
  // mira les vides i si s'ha eliminat a algun pokemos, s'espera 5s a que es mostri el missatge i mostra el missatge de victoria.
  perVidaAliat == 0
    ? (this.timeoutHandle = setTimeout(() => {
        model.setPagina(7);
        setEnd(true);
        alert("derrota");
        setPerVidaAliat(1);
        setPerVidaEnemic(1);
      }, 3500))
    : null;
  perVidaEnemic == 0
    ? (this.timeoutHandle = setTimeout(() => {
        model.setPagina(7);
        setEnd(true);
        setPerVidaAliat(1);
        setPerVidaEnemic(1);
      }, 3500))
    : null;

  function functionAttack(damage, aliat) {
    var vida;
    var vidaTotal;
    if (aliat) {
      vida = perVidaEnemic;
      vidaTotal = model.enemic.stats[model.enemic.stats.length - 1].base_stat;
      vida = (vida * vidaTotal - damage) / vidaTotal;
      vida <= 0 ? setPerVidaEnemic(0) : setPerVidaEnemic(vida);
    } else {
      (vida = perVidaAliat),
        (vidaTotal = model.aliat.stats[model.aliat.stats.length - 1].base_stat),
        (vida = (vida * vidaTotal - damage) / vidaTotal);
      vida < 0 ? setPerVidaAliat(0) : setPerVidaAliat(vida);
    }
  }
  useEffect(() => {
    model.setAliat();
    model.setEnemic();
    model.setFullAttacks();
  }, []);

  const SE = 1.2;
  const NVE = 0.5;
  const NE = 0;
  const attackEffects = {
    bug: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: NVE,
      flying: NVE,
      ghost: 1,
      grass: SE,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: SE,
      psychic: SE,
      rock: NVE,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    dragon: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    electric: {
      bug: 1,
      dragon: 1,
      electric: NVE,
      fighting: 1,
      fire: 1,
      flying: SE,
      ghost: 1,
      grass: NVE,
      ground: NE,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      water: SE,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    fighting: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: NVE,
      ghost: NE,
      grass: 1,
      ground: 1,
      ice: SE,
      normal: SE,
      poison: 1,
      psychic: NVE,
      rock: SE,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    fire: {
      bug: SE,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: SE,
      ground: 1,
      ice: SE,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: NVE,
      water: NVE,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    flying: {
      bug: SE,
      dragon: 1,
      electric: NVE,
      fighting: SE,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: SE,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: NVE,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    ghost: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: NE,
      poison: 1,
      psychic: NE,
      rock: 1,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    grass: {
      bug: NVE,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: NVE,
      flying: NVE,
      ghost: 1,
      grass: NVE,
      ground: SE,
      ice: 1,
      normal: 1,
      poison: NVE,
      psychic: 1,
      rock: SE,
      water: SE,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    ground: {
      bug: 1,
      dragon: 1,
      electric: SE,
      fighting: 1,
      fire: SE,
      flying: NE,
      ghost: 1,
      grass: NVE,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: SE,
      psychic: 1,
      rock: SE,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    ice: {
      bug: 1,
      dragon: SE,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: SE,
      ghost: 1,
      grass: SE,
      ground: SE,
      ice: NVE,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      water: NVE,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    normal: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: NE,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    poison: {
      bug: SE,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: SE,
      ground: NVE,
      ice: 1,
      normal: 1,
      poison: NVE,
      psychic: 1,
      rock: NVE,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    psychic: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: SE,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: SE,
      psychic: NVE,
      rock: 1,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    rock: {
      bug: SE,
      dragon: 1,
      electric: NVE,
      fighting: 1,
      fire: SE,
      flying: SE,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: SE,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: NVE,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    water: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: SE,
      flying: 1,
      ghost: 1,
      grass: NVE,
      ground: SE,
      ice: NVE,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: SE,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    dark: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    fairy: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    unknown: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },

    shadow: {
      bug: 1,
      dragon: 1,
      electric: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      water: 1,
      dark: 1,
      fairy: 1,
      unknown: 1,
      shadow: 1,
    },
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
    textFieldEmpty,
    infoText,
  } = styles;
  if (model.aliat == {} || model.enemic == {} || model.fullAttacks == []) {
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
        <ActivityIndicator size="large" />
      </ImageBackground>
    </View>;
  }
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
            <PokeImg num={model.pokemonDolent} />
            <PokeInfo
              name={model.enemic.name}
              enemic={true}
              perVida={perVidaEnemic}
            />
          </View>
          {isShowingText ? (
            <View style={[textField, shadows]}>
              <Text style={[infoText]}>{misatge}</Text>
            </View>
          ) : (
            <View style={[textFieldEmpty]}></View>
          )}
          <View style={[row]}>
            <PokeInfo
              name={model.aliat.name}
              enemic={false}
              perVida={perVidaAliat}
            />
            <PokeImg num={model.pokemonBo} />
          </View>
          <View style={[atackView, column]}>
            {model.fullAttacks.map((m) => (
              <Atack
                attack={m}
                attackEffects={attackEffects}
                showText={showText}
                torn={torn}
                functionAttack={functionAttack}
                key={m.id}
              />
            ))}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
});

const Atack = ({ attack, attackEffects, showText, torn, functionAttack }) => {
  const random = Math.floor(Math.random() * 100) + 1;
  const model = useContext(PokeContext);
  const { atack, shadows, atackText, atackOff } = styles;
  var name = "undefined";
  if (typeof attack.name !== "undefined") {
    name = capitalize(attack.name);
  }
  return torn ? (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="#00000000"
      onPress={() => {
        if (random > attack.accuracy) {
          showText(1, name, "Missed");
        } else {
          damage =
            attack.power *
            attackEffects[attack.type.name][model.enemic.types[0].type.name];

          functionAttack(
            attack.power *
              attackEffects[attack.type.name][model.enemic.types[0].type.name],
            true
          );
          showText(1, name, damage);
        }
        //model.setPagina(7);
      }}
    >
      <View style={[atack, shadows]}>
        <Text style={atackText}>{name}</Text>
      </View>
    </TouchableHighlight>
  ) : (
    <View style={[atackOff, shadows]}>
      <Text style={atackText}>{name}</Text>
    </View>
  );
};

const PokeImg = ({ num }) => {
  const { image, shadows, pokemonImgView } = styles;
  const [error, setError] = num == null ? useState(true) : useState(false);
  var uri = !error
    ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      num +
      ".png"
    : "https://bluedomain.online/wp-content/uploads/ultimatemember/default_prof_pic.png";
  return (
    <View style={[pokemonImgView, shadows]}>
      <Image
        style={[image]}
        source={{
          uri: uri,
        }}
        onError={() => setError(true)}
      />
    </View>
  );
};
const PokeInfo = ({ name, enemic, perVida }) => {
  const vida = {
    flex: 1,
    height: 30,
    width: perVida * 97 + "%",
    borderRadius: 20,
    margin: 3,
    backgroundColor: "#04CF62",
  };

  if (typeof name !== "undefined") {
    name = capitalize(name);
  }
  const {
    pokemonInfo,
    column,
    vidaView,
    pokemonName,
    vidaBack,
    //vida,
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
  infoText: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
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
    width: WIDTH * 0.7,
    height: 40,
    backgroundColor: "#FFF082",
    borderRadius: 20,
    margin: 10,
  },
  atackOff: {
    width: WIDTH * 0.7,
    height: 40,
    backgroundColor: "#FFF08299",
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
    width: WIDTH * 0.63,
    height: 50,
    backgroundColor: "#00000000",
    alignItems: "flex-end",
    margin: 5,
    marginLeft: 0,
  },
  vidaView: {
    flex: 0.4,
    flexDirection: "row",
    width: WIDTH * 0.63,
    height: 50,
    backgroundColor: "#00000000",
    alignItems: "flex-start",
  },
  pokemonInfo: {
    flex: 1,
  },
  textField: {
    width: WIDTH * 0.7,
    height: 125,
    top: 0,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textFieldEmpty: {
    width: WIDTH * 0.7,
    height: 125,
    top: 0,
    backgroundColor: "#00000000",
    borderRadius: 20,
    margin: 20,
  },
  pokemonImgView: {
    width: WIDTH * 0.27,
    height: WIDTH * 0.27,
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
    backgroundColor: "blue",
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
    width: WIDTH * 0.29,
    height: WIDTH * 0.29,
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

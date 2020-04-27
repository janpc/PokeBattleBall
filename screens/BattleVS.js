import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  Image,
  Dimensions,
} from "react-native";

const BattleBg = "../assets/backgroundBattle.jpg";

import Online from "../assets/ONLINE.png";
import CPU from "../assets/CPU.png";
import RoundedIA from "../assets/RoundedIA.png";
import RoundedOnline from "../assets/RoundedOnline.png";
import settings from "../assets/settings.png";

const BattleVS = ({ move }) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={require(BattleBg)} style={styles.image}>
        <Up move={move}/>

        <Down move={move}/>
      </ImageBackground>
    </View>
  );
};

const Up = ({ move }) => {
  return (
    <View style={styles.up}>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#00000000"
        onPress={() => move(3)}
      >
        <Image source={RoundedOnline} style={styles.roundedOnline}></Image>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#00000000"
        onPress={() => move(3)}
      >
        <Image source={Online} style={styles.online}></Image>
      </TouchableHighlight>
    </View>
  );
};

const Down = ({move}) => {
  return (
    <View style={styles.down}>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#00000000"
        onPress={() => move(3)}
      >
      <Image source={RoundedIA} style={styles.roundedIA}></Image>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#00000000"
        onPress={() => move(3)}
      >
      <Image source={CPU} style={styles.cpu}></Image>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#00000000"
        onPress={() => move(3)}
      >
      <Image source={settings} style={styles.settings}></Image>
      </TouchableHighlight>
    </View>
  );
};

const MAIN_MARGIN = Dimensions.get("window").width * 0.05;
const WIDTH = Dimensions.get("window").width;

export default BattleVS;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#00000000",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  hola: {
    fontSize: 30,
    width: 500,
  },
  online: {
    height: 150,
    width: WIDTH * 1,
    marginTop: MAIN_MARGIN * -7,
    marginRight: MAIN_MARGIN * 5,
  },
  cpu: {
    height: 150,
    width: WIDTH * 1.1,
    marginTop: MAIN_MARGIN * -6.5,
    marginLeft: MAIN_MARGIN * 5,
  },
  roundedOnline: {
    height: 300,
    width: WIDTH * 1.05,
    marginRight: MAIN_MARGIN * 5,
    marginTop: MAIN_MARGIN * -0.5,
  },
  roundedIA: {
    height: 300,
    width: WIDTH * 1.05,
    marginLeft: MAIN_MARGIN * 5,
    marginTop: MAIN_MARGIN * 1,
  },
  settings: {
    height: 150,
    width: WIDTH * 0.5,
    marginTop: MAIN_MARGIN * -3,
    marginLeft: MAIN_MARGIN * 14,
  },
  up: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  down: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

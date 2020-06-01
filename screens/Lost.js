import React, {useContext } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableHighlight,
  Image,
  Dimensions,
} from "react-native";
import {PokeContext } from "../model/Pokemon";
const WinBg = "../assets/backgroundWin.png";

import PokeWinIcon from "../assets/pokeWinicon.png";
import WinTick from "../assets/winTick.png";
import youLost from "../assets/youLost.png";

const Win = () => {
  const model = useContext(PokeContext);
  return (
    <View style={styles.page}>
      <ImageBackground source={require(WinBg)} style={styles.image}>
        <View>
          <Image source={youLost} style={styles.youLost}></Image>

        </View>

        <Image source={PokeWinIcon} style={styles.PokeWinIcon}></Image>
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor="#00000000"
          onPress={() => {
            model.setNullAtacks();
            model.setPagina(2);
          }}
        >
          <Image source={WinTick} style={styles.WinTick}></Image>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
};

const MAIN_MARGIN = Dimensions.get("window").width * 0.05;
const WIDTH = Dimensions.get("window").width;

export default Win;

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

  PokeWinIcon: {
    height: 250,
    width: WIDTH * 1,
    marginTop: MAIN_MARGIN * 1.7,
  },

  WinTick: {
    height: 100,
    width: WIDTH * 0.2,
    marginLeft: MAIN_MARGIN * 8,
    marginTop: MAIN_MARGIN * 2.5,
  },
  youLost: {
    height: 100,
    width: WIDTH * 1,
    marginLeft: MAIN_MARGIN * 0.15,
    marginTop: MAIN_MARGIN * 7,
  },

});

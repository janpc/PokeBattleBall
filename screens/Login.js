import React from "react";
import { Image, ImageBackground, StyleSheet, TextInput, TouchableHighlight, View } from "react-native";
import logo from "../assets/logo.png";
import tick from "../assets/tick.png";
const fons = "../assets/fons_app.png";

const Login = ({move}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(fons)} style={styles.fons}>
        <Logo />
        <View style={styles.space} />
        <Input move={move}/>        
      </ImageBackground>      
    </View>
  );
};

const Logo = () => {
  return(
    <View style={styles.logo}>
      <Image source={logo} style={styles.icon}/>
    </View>
  );
};

const Input = ({move}) => {
  return(
    <View style={styles.login}>
        <View style={[styles.input, styles.shadows]}>
          <TextInput placeholder="email@hotmail.com" />
        </View>

        <View style={styles.space} />

        <View style={[styles.input, styles.shadows]}>          
          <TextInput placeholder="*********" />
        </View>

        <View style={styles.space} />

        <View>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#00000000"
            onPress={() => 
              move(2)
            }
          >
            <Image source={tick} style={styles.tick}/>
          </TouchableHighlight>
        </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000000",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    height: 800,
    resizeMode: "contain",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    flex: 3,
    //backgroundColor: "red",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,

  },
  icon: {
    height: 300,
    resizeMode: "contain",
  },
  login: {
    flex: 4,
   // backgroundColor: "blue",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "flex-start", 
    position: "relative",

  },
  input: {
    backgroundColor: "white",
    borderRadius: 30,
    width: 250, 
    height: 35,
    alignItems: "center", 
    justifyContent: "center",      
  },
  tick: {
    height: 70,
    resizeMode: "contain",
    marginTop: 40,
  },
  space: {
    height: 30,
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
  fons: {
    flex: 1,
    resizeMode: "cover",
  },

});

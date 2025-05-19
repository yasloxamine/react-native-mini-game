import {useState} from "react";
import {ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

import GameScreen from './screens/GameScreen';
import GameOverScreen from "./screens/GameOverScreen";

import AppLoading from "expo-app-loading";

import Colors from "./utils/colors";

import { useFonts } from "@expo-google-fonts/inter";


export default function App() {

  const [userNumber,SetUserNumber] = useState();
  const [gameIsOver,SetGameIsOver] = useState(true);

  const [roundsNumber,SetRoundsNumber]= useState(0);

  const [fontsLoaded] = useFonts({"opensans-bold":require("./assets/fonts/OpenSans-Bold.ttf"),
    "opensans-regular":require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  function PickedNumberHandler(pickedNumber){
    SetUserNumber(pickedNumber);
    SetGameIsOver(false);
  }

  function GameOverHandler(){
    SetGameIsOver(true);
  }

  function StartNewGameHandler(){
     SetRoundsNumber(0);
     SetUserNumber(null);
  }

  let screens = <StartGameScreen OnPickNumber={PickedNumberHandler}/>

  if(userNumber) screens= <GameScreen userNumber={userNumber} OnGameOver={GameOverHandler}/>;

  if(gameIsOver && userNumber) screens= <GameOverScreen roundsNumber={roundsNumber} userNumber={userNumber} OnStartNewGame={StartNewGameHandler}/>;

 

  return(

    <LinearGradient colors={[Colors.customOrange,Colors.customYellow]} style={styles.rootContainer}>
      <ImageBackground imageStyle={styles.imageBackground} style={styles.rootContainer} resizeMode="cover" source={require("./assets/images/bgimage.png")}>
      <SafeAreaView style={styles.rootContainer}>
        {screens}
      </SafeAreaView>
  </ImageBackground>
  </LinearGradient>

  );
}

const styles = StyleSheet.create(
  {
     rootContainer:{
      flex:1,
     },
     imageBackground:{
      opacity:0.4
     }
  }
);


import { StyleSheet, View, Image, Text } from "react-native";

import Colors from "../utils/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber,userNumber,OnStartNewGame}){

    return(
        <View style={styles.globalContainer}>
        <Title>Number Found!</Title>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/gameoverimage.png')}/>
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.HighlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.HighlightText}>{userNumber}</Text></Text>
        <PrimaryButton onPress={OnStartNewGame}>Start new game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  globalContainer:{
    alignItems:"center",
    flex:1
  },
  imageContainer:{
    width:300,
    height:300,
    borderRadius:200,
    marginTop:20,
    borderWidth:3,
    borderColor:Colors.customYellow,
    overflow:"hidden"
  },
  image:{
     width:'100%',
     height:'100%',
  },
  summaryText:{
   textAlign:"center",
   fontFamily:"opensans-regular",
   fontSize:24,
   marginVertical:30,
   color:"white"
  },
  HighlightText:{
    color:Colors.secondary,
    fontFamily:"opensans-bold"
  }
});
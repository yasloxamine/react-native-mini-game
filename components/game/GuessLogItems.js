import {View,Text, StyleSheet, Dimensions} from "react-native";
import Colors from "../../utils/colors";

function GuessLogItems({roundNumber,guess}){
return (
<View style={styles.container}>
    <Text style={styles.text}>
      #{roundNumber}
    </Text>
    <Text style={styles.text}>
      Opponent's guess : {guess}
    </Text>
</View>
);
}

export default GuessLogItems;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
      justifyContent:"space-between",
      padding:8,
      backgroundColor:Colors.customYellow,
      borderColor:"black",
      borderWidth:1,
      marginVertical:5,
      elevation:8,
      borderRadius:16,
      width: deviceWidth>720? 300:250,
      flex:1,
      shadowRadius:5,
      shadowOpacity:0.5,
      shadowColor:"black",
      shadowOffset:{width:0,height:0},
    },
    text:{
      color:Colors.primary
    }
  }
);
import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({children,onPress}){
return(
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress} style={({pressed})=>pressed? [styles.buttonInnerContainer,styles.pressed] : styles.buttonInnerContainer} android_ripple={{color:"#6A2C70"}}>
        <Text style={styles.text}>
          {children}
        </Text>
        </Pressable>
    </View>
);
}

export default PrimaryButton;

const styles = StyleSheet.create(
  {
    text:{
      color:"#ffffff",
      textAlign:"center",
      fontFamily:"opensans-regular"
    },
    buttonOuterContainer:{
      backgroundColor:"#B83B5E",
      borderRadius:16,
      marginVertical:6,
      elevation:8
    },
    buttonInnerContainer:{
      paddingVertical:8,
      paddingHorizontal:8
    },
    pressed:{
      opacity:0.75
    }
  }
);
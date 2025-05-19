import { Text,View,StyleSheet } from "react-native";

function Title({children}){
return(
<View style={styles.titleContainer}>
    <Text style={styles.title}>
        {children}
    </Text>
</View>
);
}

export default Title;

const styles = StyleSheet.create(
    {
      titleContainer:{
        marginTop:100,
        borderWidth:5,
        borderColor: "white",
        
      },
      title:{
       fontSize:35,
       fontFamily:"opensans-bold",
       textAlign:"center",
       color: "white",
       marginHorizontal:10
      }
    }
);
import { Text,View,StyleSheet, Dimensions } from "react-native";

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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create(
    {
      titleContainer:{
        marginTop: deviceWidth>411? 80:50,
        borderWidth:5,
        borderColor: "white",
        maxWidth:"80%",
        width:400
      },
      title:{
       fontSize: deviceWidth>411? 50:20,
       fontFamily:"opensans-bold",
       textAlign:"center",
       color: "white",
      }
    }
);
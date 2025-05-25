import { StyleSheet, View, Dimensions } from "react-native";

import Colors from "../../utils/colors";

function Card({children}){

    return(
        <View style={styles.Card}>
         {children}
        </View>
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Card:{
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth>720? 40:20,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 8,
    padding: 16,
    opacity: 0.8,
    }
});
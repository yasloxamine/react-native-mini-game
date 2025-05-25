import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import Colors from "../../utils/colors";

function NumberContainer({ children }) {

  const { width,height } = useWindowDimensions();

  const numberContainerHeight =  height < 360? 50:100;

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer,{height:numberContainerHeight}]}>
        <Text style={styles.number}>{children}</Text>
      </View>
    </View>
  );
}



export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;



const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
  },
  innerContainer: {
    borderWidth: 3,
    borderColor: Colors.customYellow,
    marginTop: deviceWidth>720? 40:20,
    alignItems: "center",
    borderRadius: 8,
    width: 200,
    height: 100,
    justifyContent: "center",
  },
  number:{
    fontSize:60,
    color:Colors.customYellow,
    fontWeight:"bold"
  }
});

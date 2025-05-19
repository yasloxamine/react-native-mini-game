import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.number}>{children}</Text>
      </View>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
  },
  innerContainer: {
    borderWidth: 3,
    borderColor: Colors.customYellow,
    marginTop: 40,
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

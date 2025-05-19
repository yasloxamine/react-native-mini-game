import { StyleSheet,Text } from "react-native";

import Colors from "../../utils/colors";

function InstructionText({children,style}){
    return(
<Text style={[styles.instructionText,style]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText:{
        fontSize:24,
        color:Colors.customYellow,
        fontFamily:"opensans-regular"
      }
});
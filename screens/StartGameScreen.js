import { TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

import Colors from "../utils/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({OnPickNumber}) {
  const [textInput, SetTextInput] = useState("");

  function TextInputHandler(textContent){
    SetTextInput(textContent);
  }

  function ResetTextInput(){
    SetTextInput("");
  }

  function ConfirmButtonHandler(){
    const chosenNumber = parseInt(textInput);

    if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
      Alert.alert("Invalid Number","Please enter a number between 0 and 99",[{text:"Okay",onPress:ResetTextInput}]);
      return;
    }

    OnPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <Card>
      <InstructionText>Enter a number</InstructionText>
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" value={textInput} onChangeText={TextInputHandler}/>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={ResetTextInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={ConfirmButtonHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    alignItems:"center"
  },
  input: {
    fontSize: 40,
    fontFamily:"opensans-bold",
    borderBottomWidth: 1,
    marginVertical: 10,
    borderColor: Colors.customYellow,
    color: Colors.customYellow,
    width: 60,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  }
});

import {View,Text} from "react-native";

function GuessLogItems({roundNumber,guess}){
return (
<View>
    <Text>
      #{roundNumber}
    </Text>
    <Text>
      Opponent's guess : {guess}
    </Text>
</View>
);
}

export default GuessLogItems;
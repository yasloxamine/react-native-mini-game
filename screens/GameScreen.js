import { Text, StyleSheet, View, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";

import { useState, useEffect } from "react";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItems from "../components/game/GuessLogItems";

function GenerateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return GenerateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, OnGameOver }) {
  const initialGuess = GenerateRandomBetween(1, 100, userNumber);
  const [currentGuess, SetCurrentGuess] = useState(initialGuess);
  const [guessRounds, SetGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    console.log(
      "min boundary : " + minBoundary,
      "max boundary : " + maxBoundary,
      "current guess : " + currentGuess
    );
    if (currentGuess === userNumber) {
      OnGameOver(guessRounds.length);
    }
  }, [userNumber, OnGameOver, currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function NextGuessHandler(direction) {
    if (
      (currentGuess > userNumber && direction === "higher") ||
      (currentGuess < userNumber && direction === "lower")
    ) {
      Alert.alert("Error", "Don't lie!", [{ text: "okey", style: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = GenerateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    SetCurrentGuess(newRandomNumber);
    SetGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>

        <View style={styles.ButtonsContainer}>
          <View style={styles.ButtonContainer}>
            <PrimaryButton onPress={NextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.ButtonContainer}>
            <PrimaryButton onPress={NextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.FlatListContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemdata) => (
            <GuessLogItems
              roundNumber={guessRoundsListLength - itemdata.index}
              guess={itemdata.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  ButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ButtonContainer: {
    flex: 1,
    marginHorizontal: 40,
  },
  instructionText: {
    marginBottom: 20,
  },
  AnswerContainer: {
    alignItems: "center",
    marginTop: 60,
    gap: 20,
  },
  FlatListContainer: {
    flex: 1,
    padding: 16,
  },
});

import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function GoalInput({ onAddGoal }) {
  const [enteredText, setEnteredText] = useState("");

  const goalInputHandler = (e) => {
    setEnteredText(e);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredText);
    setEnteredText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    flex: 1,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#f0f0f0",
    padding: 8,
    marginRight: 8,
    width: "70%",
  },
});

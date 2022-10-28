import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (e) => {
    setEnteredText(e);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <View>
          <Text>List of goals: </Text>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

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

  goalsContainer: { flex: 5 },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5a0acc",
  },

  goalText: {
    color: "#fff",
  },
});

import React from "react";
import { View, Text, Button } from "react-native";
import { useState } from "react";

const SearchScreen = ({ navigation }) => {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const randomId = getRandomId();
    const url = `https://api.adviceslip.com/advice/${randomId}`;
    const res = await fetch(url);
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  function getRandomId() {
    return Math.floor(Math.random() * 200); // Generate a random number between 0 and 999
  }

  function clearAdvice() {
    setAdvice(""); // Clear the advice state
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{advice}</Text>
      <Button title="Get Advice" onPress={getAdvice} />
      <Button title="Clear Advice" onPress={clearAdvice} />
    </View>
  );
};

export { SearchScreen };

import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";
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
    return Math.floor(Math.random() * 500); // Generate a random number between 0 and 999
  }

  function clearAdvice() {
    setAdvice(""); // Clear the advice state
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            textAlign: "center",
            justifyContent: "space-around",
          }}
        >
          {advice}
        </Text>
      </View>
      <View
        style={{
          height: "50%",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button title="Get Advice" onPress={getAdvice} />
        <Button title="Clear Advice" onPress={clearAdvice} />
      </View>
    </View>
  );
};

export { SearchScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  card: {
    height: 250,
    width: "100%",
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 250,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: "maroon",
    justifyContent: "center",
  },
});

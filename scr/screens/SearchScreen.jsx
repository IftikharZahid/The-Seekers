import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const SearchScreen = ({ navigation }) => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  /* useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        getAdvice();
      }, 5000);

      return () => clearTimeout(timer); // Clear the timer on component unmount
    }
  }, [count]);
*/

  async function getAdvice() {
    try {
      const randomId = getRandomId();
      const url = await fetch(`https://api.adviceslip.com/advice/${randomId}`);
      const data = await url.json();
      setAdvice(data.slip.advice);
      setCount((x) => x + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  function clearAdvice() {
    setAdvice("");
  }

  function getRandomId() {
    return Math.floor(Math.random() * 99); // Generate a random number between 0 and 999
  }

  return (
    <View style={styles.container}>
      <View>
        <Card
          style={{
            height: 200,
            width: 200,
            alignContent: "center",
            shadowColor: "red",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              margin: 10,
              textAlign: "center",
            }}
          >
            {advice}
          </Text>
        </Card>
      </View>

      <View style={styles.card}>
        <Text
          style={{
            color: "#fff",
            fontSize: 25,
            textAlign: "center",
            justifyContent: "space-around",
            fontStyle: "italic",
            margin: 10,
          }}
        >
          {advice}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={getAdvice}>
          <View
            style={{
              height: 30,
              width: 100,
              backgroundColor: "#f9813A",
              borderRadius: 15,
              justifyContent: "center",
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontStyle: "italic",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Get Advice
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={clearAdvice}>
          <View
            style={{
              height: 30,
              width: 100,
              backgroundColor: "#f9813A",
              borderRadius: 15,
              justifyContent: "center",
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontStyle: "italic",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Clear
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              height: 30,
              width: 100,
              backgroundColor: "#f9813A",
              borderRadius: 15,
              justifyContent: "center",
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontStyle: "italic",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {count}
            </Text>
          </View>
        </TouchableOpacity>
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
    marginTop: 20,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  card: {
    height: 200,
    width: "100%",
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: "#FF008A",
    justifyContent: "center",
  },
});

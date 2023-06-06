import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { STNavigator } from "./scr/navigation/STNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = ({ navigation }) => {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {splashVisible ? (
        <Image
          source={require("./assets/seeks.png")}
          style={styles.splashImage}
          resizeMode="contain"
        />
      ) : (
        <View style={{ flex: 1, height: 650, width: 350 }}>
          <STNavigator />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  splashImage: {
    width: "60%",
    height: "60%",
  },
});

export default App;

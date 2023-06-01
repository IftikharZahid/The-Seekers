import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <Text style={style.heading}>Welcome! </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  heading: { marginTop: 30, fontSize: 20, fontWeight: "bold" },
});
export { HomeScreen };

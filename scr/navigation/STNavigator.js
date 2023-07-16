import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { OnBoardScreen } from "../screens/OnBoardScreen";
import { BottomNavigator } from "./BottomNavigator";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailedScreen } from "../screens/DetailedScreen";

const Stack = createStackNavigator();

const STNavigator = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="OnBoardScreen"
          component={OnBoardScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailedScreen"
          component={DetailedScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { STNavigator };

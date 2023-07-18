import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { CartScreen } from "../screens/CartScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { Favorite } from "../screens/Favorite";
import { Profile } from "../screens/Profile";
import { SearchScreen } from "../screens/SearchScreen";
import { colors } from "../components/theme/designSystem";

const Tab = createBottomTabNavigator();

function BottomNavigator({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          // tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favorite",
          // tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "SearchScreen",
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
                backgroundColor: "white",
                borderColor: colors.primary,
                borderWidth: 2,
                borderRadius: 25,
              }}
            >
              <AntDesign name="search1" size={25} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: "Updates",
          // tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bell-o" size={25} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          // tabBarLabelStyle: { display: "none" },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { BottomNavigator };

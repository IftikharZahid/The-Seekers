import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-paper";
import { Button } from "../components/button";
import { colors } from "../components/theme/designSystem";

const OnBoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View>
        <View style={{ marginTop: 40 }}>
          <Image
            source={require("../../assets/seeks.png")}
            style={{
              height: 200,
              width: "100%",
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              marginTop: 10,
              alignSelf: "center",
            }}
          >
            Welcome to The Seeks Academy
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Fortabas
          </Text>
          <Card
            style={{
              alignContent: "center",
              margin: 15,
              padding: 10,
              shadowColor: "red",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              ✍ Do you want your son/daughter to give full attention to
              education and Fulfill your dreams now?
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              👉 Surely your answer will be yes.
            </Text>

            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              🕔 So why late?
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              ✌ Enroll in Seeks Academy today and ensure your success ✌
            </Text>
          </Card>
        </View>
        <View style={style.Container}>
          <View style={style.filled}></View>
          <View style={style.unfilled}></View>
          <View style={style.unfilled}></View>
        </View>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Button
            title="Get Sarted"
            onPress={() => navigation.navigate("BottomNavigator")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
    margin: 20,
  },

  filled: {
    backgroundColor: colors.primary,
    height: 10,
    width: 25,
    borderRadius: 20,
    alignSelf: "center",
    marginHorizontal: 3,
  },

  unfilled: {
    backgroundColor: colors.grey,
    height: 10,
    width: 10,
    borderRadius: 5,
    alignSelf: "center",
    opacity: 0.7,
    marginHorizontal: 3,
  },
  customText: {
    fontFamily: "FontleroyBrownNF",
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export { OnBoardScreen };

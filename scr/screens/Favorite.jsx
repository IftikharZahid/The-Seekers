import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Favorite = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.header}>
        <View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 18 }}>Welcome,</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 5 }}>
              Zahid
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "gray",
                fontSize: 18,
              }}
            >
              What do you want today?
            </Text>
          </View>
        </View>
        <Image
          source={require("../../assets/zk.jpg")}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>

      <View
        style={{ marginTop: 30, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <View style={style.inputcontainer}>
          <Icon name="search" size={28} />

          <TextInput
            style={{ flex: 1, fontSize: 15 }}
            placeholder="Search for Items"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputcontainer: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "gray",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});
export { Favorite };

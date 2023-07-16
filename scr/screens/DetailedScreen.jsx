import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../components/theme/designSystem";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "../components/button";

const DetailedScreen = ({ navigation, route }) => {
  const item = route.params;
  console.log(item);
  return (
    <SafeAreaView style={{ backgroundColor: colors.white }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image
            source={item.image}
            style={{
              height: 220,
              width: 220,
              borderRadius: 110,
              borderWidth: 1,
            }}
          ></Image>
        </View>

        <View style={style.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: colors.white }}
            >
              {item.name}
            </Text>
            <View style={style.iconContaine}>
              <MaterialIcons
                name="favorite-border"
                size={24}
                color={colors.primary}
              />
            </View>
          </View>
          <Text style={style.detailsText}>
            I’m Bard, your creative and helpful collaborator. I have limitations
            and won’t always get it right, but your feedback will help me
            improve. Not sure where to start? You can try:
          </Text>
          <View style={{ marginTop: 40, marginBottom: 60 }}></View>
          <View style={{ alignSelf: "center" }}>
            <Button title="Add to cart" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  iconContaine: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsText: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 22,
  },
});
export { DetailedScreen };

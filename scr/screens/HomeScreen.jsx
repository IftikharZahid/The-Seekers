import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  ScrollView,
  TextInput,
  FlatList,
  TouchableHighlight,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../components/theme/designSystem";
import style from "../components/homestyle";
import items from "../components/items";
import foods from "../components/foods";

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const LisCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoryListContainer}
      >
        {items.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? colors.primary
                    : colors.secondary,
                ...style.categoryBtn,
              }}
            >
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 35, width: 35, resizeMode: "cover" }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? colors.white
                      : colors.primary,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        underlayColor={colors.white}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailedScreen", food)}
      >
        <View style={style.card}>
          <View style={{ alignItems: "center", top: -35 }}>
            <Image
              source={food.image}
              style={{ height: 100, width: 100, borderRadius: 50 }}
            />
          </View>

          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {food.name}
            </Text>
            <Text style={{ fontSize: 14, color: colors.grey, marginTop: 2 }}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              marginHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              ${food.price}
            </Text>
            <View style={style.addToCardBtn}>
              <Icon name="add" size={25} color={colors.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

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
                fontSize: 15,
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
        style={{ marginTop: 20, flexDirection: "row", paddingHorizontal: 10 }}
      >
        <View style={style.inputcontainer}>
          <Icon name="search" size={28} />

          <TextInput
            style={{ flex: 1, fontSize: 15 }}
            placeholder="Search for Items"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color="white" />
        </View>
      </View>
      <View>
        <LisCategories />
      </View>

      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={foods}
          renderItem={({ item }) => <Card food={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
export { HomeScreen };

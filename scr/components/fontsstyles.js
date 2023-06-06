const loadFonts = async () => {
  await Font.loadAsync({
    "custom-font-regular": require("./assets/fonts/JameelNooriNastaleeqRegular"),
  });

  AppRegistry.registerComponent("theSeeks", () => App);
};

loadFonts();

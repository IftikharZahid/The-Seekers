const loadFonts = async () => {
  await Font.loadAsync({
    "custom-font-regular": require("./assets/fonts/CustomFont-Regular.ttf"),
    "custom-font-italic": require("./assets/fonts/CustomFont-Italic.ttf"),
    "custom-font-bold": require("./assets/fonts/CustomFont-Bold.ttf"),
    "custom-font-bold-italic": require("./assets/fonts/CustomFont-BoldItalic.ttf"),
  });

  AppRegistry.registerComponent("YourAppName", () => App);
};

loadFonts();

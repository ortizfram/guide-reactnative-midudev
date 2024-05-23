import { StyleSheet, Text, View } from "react-native"; // Ensure this import is correct
import React from "react";
import Constants from "expo-constants";
import theme from "../theme";
import StyledText from "./StyledText";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.text}>
        Repositories
      </StyledText>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: theme.appBar.primaryText,
  },
});

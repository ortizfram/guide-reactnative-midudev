import { StyleSheet, View } from "react-native"; // Ensure this import is correct
import React from "react";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});

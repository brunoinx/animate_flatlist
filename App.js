import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { AnimateList } from "./src/AnimateList";
import { BackgroundImage } from "./src/BackgroundImage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <BackgroundImage />
      <AnimateList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});

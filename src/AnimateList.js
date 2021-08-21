import React, { useRef } from "react";
import { Animated, Image, View, StyleSheet, Text } from "react-native";
import { DATA } from "./utils/data";

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export function AnimateList() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={DATA}
      onScroll={Animated.event(
        [{ nativeEvent: {contentOffset: { y: scrollY }}}],
        { useNativeDriver: true }
      )}
      keyExtractor={(item) => item.key}
      renderItem={({ item, index }) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)];
        const opacityRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0]
        });

        const opacity = scrollY.interpolate({
          inputRange: opacityRange,
          outputRange: [1, 1, 1, 0]
        });
        
        return (
        <Animated.View style={[styles.container, { transform:[{ scale }], opacity }]}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
              borderRadius: AVATAR_SIZE / 2
            }}
          />

          <View style={styles.content}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.ocupation}>{item.ocupation}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        </Animated.View>
      )}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingTop: SPACING,
    paddingBottom: SPACING * 2,
    paddingHorizontal: SPACING,
  },
  container: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: SPACING,
    flexDirection: "row",
    padding: SPACING - 4,
    elevation: 20,
  },
  content: {
    width: "74%",
    marginLeft: SPACING,
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
  },
  ocupation: {
    fontSize: 18,
    opacity: 0.7,
    marginBottom: 3,
  },
  email: {
    fontSize: 12,
    opacity: 0.8,
    color: "#0099cc",
  },
});

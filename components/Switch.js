import { Pressable, StyleSheet, View } from "react-native";

import { useState } from "react";

export default function Switch({ onToggleSwitch, isSwitchOn }) {
  return (
    <View
      style={[
        styles.switchContainer,
        !isSwitchOn
          ? { alignItems: "flex-start", backgroundColor: "grey" }
          : { alignItems: "flex-end" },
      ]}
    >
      <Pressable
        onPress={onToggleSwitch}
        style={[
          styles.switch,
          !isSwitchOn ? { borderColor: "darkgrey" } : { borderColor: "purple" },
        ]}
      ></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    width: 50,
    height: 25,
    backgroundColor: "purple",
    borderRadius: 20,
    justifyContent: "center",
  },
  switch: {
    height: 24,
    width: 24,
    backgroundColor: "purple",
    borderRadius: 100,
    borderColor: "purple",
    borderWidth: 1,
  },
});

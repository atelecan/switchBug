import { Pressable, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import SwitchEntry from "./components/SwitchEntry";
import { useState } from "react";

export default function App() {
  console.log("App re-rendered");
  const statuses = [
    "Live - Available to Invest",
    "Live - Fully Subscribed",
    "Currently Redeeming",
    "In Arrears",
    "Redeemed Opportunities",
  ];

  const [switches, setSwitches] = useState({});

  const selectHandler = (index) => {
    const newSwitches = { ...switches };
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);
    return newSwitches[index];
  };
  return (
    <View style={styles.container}>
      {statuses.map((status, index) => {
        return (
          <SwitchEntry
            title={status}
            key={index}
            selectHandler={() => selectHandler(index)}
            defaultSwitchOn={switches?.[index] ? switches[index] : false}
            switch={switches?.[index] ? switches[index] : false}
          />
        );
      })}
      <Pressable onPress={() => setSwitches({})}>
        <Text>Clear All</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";

import Switch from "./Switch";
import { useState } from "react";

export default function SwitchEntry({ title, selectHandler, defaultSwitchOn }) {
  console.log("DEFAULT SWITCH ON IS: ", defaultSwitchOn);
  const [isSwitchOn, setIsSwitchOn] = useState(defaultSwitchOn);

  const onToggleSwitch = () => {
    setIsSwitchOn(selectHandler());
  };
  return (
    <View style={styles.switchEntryContainer}>
      <Text>{title}</Text>
      <Switch
        onToggleSwitch={onToggleSwitch}
        selectHandler={selectHandler}
        isSwitchOn={isSwitchOn}
        title={title}
      />
    </View>
  );
}

const styles = {
  switchEntryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },
};

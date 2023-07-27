import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Plus } from "../assets/icons";

const PlusButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.btnContainer}>
        <Plus height={80} width={80} fill={"black"} marginTop={1} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "brown",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default PlusButton;

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Minus from "../assets/icons/minus.svg";

const MinusButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.btnContainer}>
        <Minus height={80} width={80} fill={"black"} marginTop={1} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "purple",
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default MinusButton;

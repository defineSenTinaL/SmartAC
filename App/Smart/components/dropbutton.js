import React, { useState } from "react";
import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import Drop from "../assets/icons/drop.svg";

export default function DropButton() {
  return (
    <TouchableHighlight>
      <View>
        <Drop
          height={40}
          width={40}
          fill={"black"}
          viewBox='0 0 24 24'
          marginLeft={7}
          marginTop={7}
        />
      </View>
    </TouchableHighlight>
  );
}

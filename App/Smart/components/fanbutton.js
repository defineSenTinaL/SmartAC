import React, { useState } from "react";
import { TouchableHighlight, TouchableOpacity, View } from "react-native";

import Fan from "../assets/icons/hot.svg";
export default function HotButton() {
  return (
    <TouchableHighlight>
      <View>
        <Fan
          height={40}
          width={40}
          fill={"black"}
          viewBox='0 0 24 24'
          marginLeft={-40}
          marginTop={8}
        />
      </View>
    </TouchableHighlight>
  );
}

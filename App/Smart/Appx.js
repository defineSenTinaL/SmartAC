import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import SnowButton from "./components/snowbutton";
import FanButton from "./components/fanbutton";
import DropButton from "./components/dropbutton";
import MinusButton from "./components/minusButton";
import PlusButton from "./components/plusButton";
import { Slider } from "react-native-elements/dist/slider/Slider";
import { MqttClient } from "./utils/MqttClient";

function App() {
  const [range, setRange] = useState("");
  const Fan = "Fan Speed";

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <MinusButton />
        <PlusButton />
      </View>
      <View style={styles.slider}>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
            marginBottom: 5,
          }}
        >
          {Fan}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
            letterSpacing: 24.6,
          }}
        >
          1 2 3 4 5
        </Text>

        <Slider
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor='#57A1E0'
          maximumTrackTintColor='#D8D8D8'
          thumbTintColor='white'
          value={1}
          onValueChange={(value) => setRange(parseInt(value))}
        />
      </View>
      <View style={styles.Modes}>
        <View style={[styles.coolButton, styles.elevation]}>
          <SnowButton />
          <Text style={styles.textCool}> Cool</Text>
        </View>

        <View style={[styles.dryButton, styles.elevation]}>
          <FanButton />
          <Text style={styles.textDry}> Dry</Text>
        </View>

        <View style={[styles.hotButton, styles.elevation]}>
          <DropButton />
          <Text style={styles.textHot}> Hot</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 350,
  },
  slider: {
    backgroundColor: "red",
    width: 300,
    height: 100,
    marginLeft: 45,
    marginTop: 30,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "cyan",
  },
  Modes: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "cyan",
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  coolButton: {
    backgroundColor: "#EEF2F5",
    width: 100,
    height: 130,
    shadowColor: "black",
    shadowOpacity: 90,
    shadowRadius: 90,
    borderRadius: 20,
  },
  dryButton: {
    backgroundColor: "#EEF2F5",
    width: 100,
    height: 130,
    shadowColor: "#227BBE",
    shadowOpacity: 2,
    shadowRadius: 2,
    paddingLeft: 50,
    borderRadius: 20,
  },

  hotButton: {
    backgroundColor: "#EEF2F5",
    width: 100,
    height: 130,
    shadowColor: "#227BBE",
    shadowOpacity: 2,
    shadowRadius: 2,
    borderRadius: 20,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#969595",
  },
  textCool: {
    flex: 1,
    color: "black",
    textAlign: "auto",
    textAlignVertical: "bottom",
    flexDirection: "row",
    fontSize: 22,
    paddingBottom: 11,
    paddingLeft: 8,
  },
  textDry: {
    flex: 1,
    color: "black",
    textAlign: "auto",
    textAlignVertical: "bottom",
    flexDirection: "row",
    fontSize: 22,
    paddingBottom: 11,
    marginLeft: -45,
  },
  textHot: {
    flex: 1,
    color: "black",
    textAlign: "auto",
    textAlignVertical: "bottom",
    flexDirection: "row",
    fontSize: 22,
    paddingBottom: 11,
    paddingLeft: 8,
  },
});

export default App;

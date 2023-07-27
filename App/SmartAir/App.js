import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import Svg, { Path } from "react-native-svg";
import Snowflake from './assets/Snowflake.svg'


export default function App() {

  return (
    
    <View style = {styles.container}>
      
      <View style = {styles.Modes}>
      
      <View style = {styles.coolButton}>
        <Text style = {styles.textCool}> Cool</Text>
      <Snowflake width={50} height = {50} />
        
      </View>

      <View style = {styles.dryButton}>
      <Text style = {styles.textDry}> Dry</Text>
      </View>
      
      <View style = {styles.hotButton}>
      <Text style = {styles.textHot}> Hot</Text>
      </View>

    </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
   
   container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#EEF2F5',
   },
   Modes: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#EEF2F5',
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginBottom: 70,
  },
   coolButton: {
      backgroundColor: 'blue',
      width: 100,
      height: 130,
      borderRadius: 20,
      shadowColor: 'black',
      shadowOpacity: 50,
      shadowRadius: 40,
      
  },
   dryButton: {
      backgroundColor: 'tomato',
      width: 100,
      height: 130,
      borderRadius: 20,
      shadowColor: '#227BBE',
      shadowOpacity: 2,
      shadowRadius: 2,
      paddingLeft: 50,
      
  },

  hotButton: {
    backgroundColor: 'cyan',
    width: 100,
    height: 130,
    borderRadius: 20,
    shadowColor: '#227BBE',
    shadowOpacity: 2,
    shadowRadius: 2,
},
  textCool: {
    flex: 1,
    color: 'white',
    textAlign: 'auto',
    textAlignVertical: 'bottom',
    flexDirection: "row",
    fontSize: 22,
    paddingBottom: 11,
    paddingLeft: 8,
  },
  textDry: {
    flex: 1,
    color: 'white',
    textAlign: 'auto',
    textAlignVertical: 'bottom',
    flexDirection: "row",
    fontSize: 22,
    paddingBottom: 11,
    marginLeft: -45,
  },
  textHot: {
    flex: 1,
    color: 'white',
    textAlign: 'auto',
    textAlignVertical: 'bottom',
    flexDirection: "row",
    fontSize: 22,
    paddingBottom: 11,
    paddingLeft: 8,
  },
});

import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [resultText, setResultText] = useState('');
  const [number1, setnomber1] = React.useState('');
  const [number2, setnumber2] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={{flexDirection : 'row', alignItemes: 'center'}}>
        <Text style={{fontSize : 20}}>Result : {resultText}</Text>
      </View>
        <TextInput keyboardType='numeric' style={{width:200,borderColor:'gray',borderWidth:1, fontSize: 20}} value={number1} onChangeText={setnomber1} />
        <TextInput keyboardType='numeric' style={{width:200,borderColor:'gray',borderWidth:1, fontSize: 20}} value={number2} onChangeText={setnumber2} />
      <View style={{width: 100, height: 60, flexDirection : 'row', alignItemes: 'center', justifyContent: 'space-around', paddingVertical: 12}}>
        <Button title=" + " onPress={() => setResultText(parseInt(number1) + parseInt(number2))} />
        <Button title=" - " onPress={() => setResultText(parseInt(number1) - parseInt(number2))} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

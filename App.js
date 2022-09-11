import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [resultText, setResultText] = useState('');
  const [number1, setnomber1] = React.useState('');
  const [number2, setnumber2] = React.useState('');
  const [data, setData] = React.useState([]);

  const addition = (event)=>{
    setResultText(parseInt(number1) + parseInt(number2));
    setData([...data,{ key: `${number1} + ${number2} = ${parseInt(number1) + parseInt(number2)}` }]);
    
  }
  const soustraction = (event)=>{
    setResultText(parseInt(number1) - parseInt(number2));
    setData([...data,{ key: `${number1} - ${number2} = ${parseInt(number1) - parseInt(number2)}` }]);
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection : 'row', alignItemes: 'center'}}>
        <Text style={{fontSize : 20}}>Result : {resultText}</Text>
      </View>
        <TextInput keyboardType='numeric' style={{width:200,borderColor:'gray',borderWidth:1, fontSize: 20}} value={number1} onChangeText={setnomber1} />
        <TextInput keyboardType='numeric' style={{width:200,borderColor:'gray',borderWidth:1, fontSize: 20}} value={number2} onChangeText={setnumber2} />
      <View style={{width: 100, height: 60, flexDirection : 'row', alignItemes: 'center', justifyContent: 'space-around', paddingVertical: 12}}>
        <Button title=" + " onPress={addition} />
        <Button title="  -  " onPress={soustraction} />
      </View>
      <Text >History</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
        <Text>{item.key}</Text>
      }
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginVertical: 50,
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
});
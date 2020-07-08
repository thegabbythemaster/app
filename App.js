import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ButtonBackground from './ButtonBackground';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput placeholder="Add new contact" />
      <ButtonBackground text="Add Contact +" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3e2e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
  },
});

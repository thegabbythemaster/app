import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBackground from './ButtonBackground';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: Gabby Gonzalez</Text>
      <StatusBar style="auto" />
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

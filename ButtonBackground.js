import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function ButtonBackground({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    width: 200,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

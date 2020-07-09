import React from 'react';
import { TouchableOpacity, SafeAreaView, Text, StyleSheet } from 'react-native';

export const CreateContactScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Create New Contact Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateContactScreen;

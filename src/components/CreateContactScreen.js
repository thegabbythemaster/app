import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export const CreateContactScreen = () => {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          marginTop: 20,
        }}
      >
        Create new contact
      </Text>
      {/* TODO: create components out of these fields */}
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 30,
          }}
        >
          <Text style={{ flex: 0.5, fontSize: 22 }}>Name: </Text>
          <TextInput
            placeholder="name"
            style={{
              flex: 2,
              padding: 10,
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 30,
          }}
        >
          <Text style={{ fontSize: 22 }}>Phone number: </Text>
          <TextInput
            placeholder="name"
            style={{
              flex: 2,
              padding: 10,
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 4,
            width: 200,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
          }}
        >
          <Text style={{ color: 'white' }}>Add to contacts</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateContactScreen;

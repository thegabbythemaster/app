import React, { useState, useEffect, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { SafeAreaView, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import registerForPushNotificationsAsync from '../utils/registerPushNotifications';
import { ContactContext } from '../context/ContactContext';

// TODO: clean up this component

export const CreateContactScreen = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [, setNotification] = useState(false);
  const { addContact } = useContext(ContactContext);

  const { control, handleSubmit } = useForm();

  // TODO: clean up with a hook + async/await
  function onSubmit(data) {
    addContact(data);
  }

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: '#ecfcac',
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
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="name"
                onChangeText={(value) => onChange(value)}
                value={value}
                style={{
                  flex: 1,
                  padding: 9,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  fontSize: 20
                }}
              />
            )}
            name="name"
            rules={{ required: true }}
            defaultValue=""
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
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="number"
                style={{
                  flex: 2,
                  padding: 10,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  fontSize: 20
                }}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="phoneNumber"
            defaultValue=""
          />
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 30,
          }}>
        <Text style={{ fontSize: 22 }}>Email: </Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="Email"
                style={{
                  flex: 2,
                  padding: 10,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  fontSize: 20
                }}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            defaultValue=""
          />

        </View>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              width: 200,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#6bbfff',
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={{ color: 'white' , fontSize: 18}}>Add to contacts</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateContactScreen;

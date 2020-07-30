import React, { useState, useEffect, useContext, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { SafeAreaView, Text, View, Navigator, Button,TouchableOpacity, Keyboard } from 'react-native';
import { TextInput, FlatList} from 'react-native-gesture-handler';
import registerForPushNotificationsAsync from '../utils/registerPushNotifications';
import { ContactContext } from '../context/ContactContext';
import 'react-native-gesture-handler';

// TODO: clean up this component

export const CreateContactScreen = ({navigation}) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [, setNotification] = useState(false);
  const { addContact } = useContext(ContactContext);

  const { control, handleSubmit, reset, getValues } = useForm();

  // TODO: clean up with a hook + async/await
  function onSubmit(data) {
    addContact(data);  
    Keyboard.dismiss();
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: '#fcf7e1',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: '#799ead',
          backgroundColor: '#fcf7e1',
  
        }}
      >
        Create new contact
      </Text>{/*
      {/* TODO: create components out of these fields */}
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fcf7e1'
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
          <Text style={{ flex: 0.5, fontSize: 22, color: '#799ead' }}>Name: </Text>
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
                  fontSize: 20,
                  display: 'flex'
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
          <Text style={{ fontSize: 22, color: '#799ead' }}>Phone number: </Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                placeholder="number"
                style={{
                  flex: 1,
                  padding: 10,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  fontSize: 20,
                  display: 'flex',
                }}
                onChangeText={(value) => onChange(value)}
                value={value}
                maxLength = {10}
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
        <Text style={{ fontSize: 22, color: '#799ead', textAlign: 'left' }}>Email: </Text>
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
                  fontSize: 20,
                  display: 'flex'
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
            type = "button"
            style={{
              borderRadius: 10,
              width: '100%',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#abc7b9',
              display: 'flex'
            }}
            onPress = {() => {
              onSubmit(getValues());
              reset({
                name: "",
                phoneNumber: "",
                email: ""
              });
              navigation.navigate('Home');
            }}
            >  
          <Text style = {{color: '#716992', fontSize: 25}}>Add to Contacts</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
    </form>
  );
};

export default CreateContactScreen;

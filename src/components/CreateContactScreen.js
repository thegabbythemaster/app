import React, { useState, useEffect, useContext, useRef } from 'react';
import { useForm, Controller,} from 'react-hook-form';
import * as Notifications from 'expo-notifications';
import { SafeAreaView, Text, View, Platform, Button, TouchableOpacity, Keyboard } from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import registerForPushNotificationsAsync from '../utils/registerPushNotifications';
import { ContactContext } from '../context/ContactContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

// TODO: clean up this component
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const CreateContactScreen = ({navigation}) => {
  const { addContact } = useContext(ContactContext);
  const { control, handleSubmit, reset, getValues } = useForm();
  const [expoToken, setExpoPushToken] = useState('');

  const [, setNotification] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    console.log(selectedDate);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  const showTimePicker = () => {
    showMode('time');
  };

  // TODO: clean up with a hook + async/await
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      Notifications.removeAllNotificationListeners();
    };
  }, []);

  function onSubmit(data) {
    addContact(data, moment(date));
    Keyboard.dismiss();
    sendPushNotification(expoToken, data, date);
  }

  return (
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
          marginTop: 20,
          color: '#799ead',
        }}
      >
        Create new contact
      </Text>
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
          style={{
            borderRadius: 10,
              width: '50%',
              maxWidth: 300,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#abc7b9',
              display: 'flex'
          }}
          onPress = {() => {
            showTimePicker(); 
            Keyboard.dismiss();
          }}
        >
          <Text style={{ color: '#716992', fontSize: 25 }}>Choose Time</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 10,
              width: '50%',
              maxWidth: 300,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#abc7b9',
              display: 'flex',
              margin: '3%'
          }}
          onPress = {() => {
            showDatePicker(); 
            Keyboard.dismiss();
          }}
        >
          <Text style={{ color: '#716992', fontSize: 25 }}>Choose Date</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderRadius: 10,
              width: '60%',
              maxWidth: 300,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#716992',
              display: 'flex',
              margin: '5%'
          }}
          onPress = {() => {
            handleSubmit(onSubmit(getValues()));
            //onSubmit(getValues());
            reset({
              name: "",
              phoneNumber: "",
              email: ""
            });
            navigation.navigate('Home');
          }}
        >
          <Text style={{ color: '#abc7b9', fontSize: 25 }}>Add to contacts</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
};

async function sendPushNotification(
  expoPushToken,
  { name, phoneNumber },
  date
) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'A friendly reminder 😁',
    body: `Don't forget to reach out to ${name} today. Their number is ${phoneNumber} 😇`,
  };
  const d1 = moment(new Date());
  const d2 = moment(date);
  const seconds = d2.diff(d1, 'seconds');

  Notifications.scheduleNotificationAsync({
    content: message,
    trigger: {
      seconds,
    },
  });
}

export default CreateContactScreen;

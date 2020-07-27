import React, { useState, useEffect, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Notifications from 'expo-notifications';
import { SafeAreaView, Text, View, Platform, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import registerForPushNotificationsAsync from '../utils/registerPushNotifications';
import { ContactContext } from '../context/ContactContext';
import DateTimePicker from '@react-native-community/datetimepicker';

// TODO: clean up this component
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const CreateContactScreen = () => {
  const { addContact } = useContext(ContactContext);

  const [, setExpoPushToken] = useState('');
  const [, setNotification] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
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

  const { control, handleSubmit } = useForm();

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
    addContact(data);
  }

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
                  borderColor: 'black',
                  borderStyle: 'solid',
                  borderWidth: 1,
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
                placeholder="name"
                style={{
                  flex: 2,
                  padding: 10,
                  borderColor: 'black',
                  borderStyle: 'solid',
                  borderWidth: 1,
                }}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="phoneNumber"
            defaultValue=""
          />
        </View>
        <View>
          <Button onPress={showDatePicker} title="Show date picker!" />
        </View>

        <View>
          <Button onPress={showTimePicker} title="Show time picker" />
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
          <Text style={{ color: 'white', fontSize: 18 }}>Add to contacts</Text>
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

async function sendPushNotification(expoPushToken, { name, phoneNumber }) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'A friendly reminder 😁',
    body: `Don't forget to reach out to ${name} today. Their number is ${phoneNumber} 😇`,
  };

  Notifications.scheduleNotificationAsync({
    content: message,
    trigger: {
      seconds: 10,
    },
  });
}

export default CreateContactScreen;

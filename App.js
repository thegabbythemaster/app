import 'react-native-gesture-handler';
import HomeScreen from './src/components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateContactScreen from './src/components/CreateContactScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactProvider from './src/context/ContactContext';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, Image } from 'react-native';


const Tab = createBottomTabNavigator();

// TODO: Add a splash screen
export default function App() {
  return (
    <NavigationContainer>
      <View>
        <View style={{paddingTop: 50, alignItems: 'center', justifyContent: 'center'}}>
        </View>
        <Button
          color = '#716992'
          title="Press to Send Notification"
          onPress={async () => {
            await sendPushNotification(expoPushToken);
          }}
        />
      </View>
      <ContactProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Add Contact') {
                iconName = 'ios-add-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={'#716992'} />;
            },
          })}
          tabBarOptions={{
            color: 'black',
            activeTintColor: '#fcf7e1',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#abc7b9'
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Add Contact" component={CreateContactScreen} />
        </Tab.Navigator>
      </ContactProvider>
    </NavigationContainer>
  );
}

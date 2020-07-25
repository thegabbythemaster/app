import React, { useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { ContactContext } from '../context/ContactContext';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const HomeScreen = ({ navigation }) => {
  const { contacts, deleteContact } = useContext(ContactContext);
  const renderItem = ({ item: { contactInfo, id } }) => {
    return (
      <View
        style={{
          borderColor: 'black',
          borderWidth: 1,
          marginVertical: 5,
          marginHorizontal: 20,
          display: 'flex',
          backgroundColor: '#b0f4f7',
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 26 }}>{contactInfo.name}</Text>
          <Text>{contactInfo.phoneNumber}</Text>
          <Text>{contactInfo.email}</Text>
        </View>
        <Text style={{ alignSelf: 'center', fontSize: 24 }}>
          [Contact Date Here]
        </Text>
        <TouchableOpacity onPress={() => deleteContact(id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (!contacts.length) {
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#ecfcac',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
        style = {{
          fontSize: 20,
          alignItems: 'center',
        }}>You haven't added any contacts yet</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#01a9b4',
            width: 200,
            height: 40,
            borderRadius: 10,
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
          onPress={() => navigation.navigate('Add Contact')}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            Create new Contact
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ecfcac', }}>
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={contacts}
        />
      </SafeAreaView>
    );
  }
};

export default HomeScreen;

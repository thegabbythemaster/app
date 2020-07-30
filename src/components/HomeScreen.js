import React, { useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, TouchableOpacity, SafeAreaView, Text, Button, Image } from 'react-native';
import { ContactContext } from '../context/ContactContext';


const HomeScreen = ({ navigation }) => {
  const { contacts, deleteContact } = useContext(ContactContext);
  const renderItem = ({ item: { contactInfo, id } }) => {
    return (
      <View
        style={{
          borderWidth: 0,
          marginVertical: 5,
          marginHorizontal: 20,
          width: '80%',
          maxWidth: 500,
          alignSelf: 'center',
          display: 'flex',
          backgroundColor: '#abc7b9',
          borderRadius: 7,
          padding: 5,
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 26, color: '#fcf7e1' }}>{contactInfo.name}</Text>
          <Text style = {{color: '#fcf7e1'}}>{contactInfo.phoneNumber}</Text>
          <Text style  = {{color: '#fcf7e1'}}>{contactInfo.email}</Text>
        </View>
        <Text style={{ alignSelf: 'center', fontSize: 24 , color: '#fcf7e1'}}>
          [Contact Date Here]
        </Text>
        <TouchableOpacity onPress={() => deleteContact(id)}>
          <Text style = {{color: '#fcf7e1'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (!contacts.length) {
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#fcf7e1',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
    <View>
        <Text style = {{
          fontSize: 30,
          color: '#716992'
        }}>Welcome to nTouch!</Text>
        <Image style={{ width: 300, height: 300}}
        source = {{uri: 'https://i.pinimg.com/originals/ab/53/c3/ab53c3258caa5c3c691b4de46cb5ad88.gif',}}/>
      </View>
        <Text
        style = {{
          fontSize: 25,
          alignItems: 'center',
          textAlign: 'center',
          color: '#799ead'
        }}>You haven't added any contacts yet</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#abc7b9',
            width: 2000,
            height: 100,
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
              color: '#716992',
              fontSize: 30,
            }}
          >
            Create new Contact
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fcf7e1', }}>
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

import React, { useContext } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { ContactContext } from '../context/ContactContext';

const HomeScreen = ({ navigation }) => {
  const { contacts } = useContext(ContactContext);
  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: 'red' }}>
      <Text>{item.name}</Text>
    </View>
  );

  function renderContent() {
    if (!contacts.length) {
      return (
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>You haven't added any contacts yet!!</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#01a9b4',
              width: 150,
              height: 40,
              borderRadius: 3,
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
        <SafeAreaView>
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      );
    }
  }
  return renderContent();
};

export default HomeScreen;

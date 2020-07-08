import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Platform, Alert} from 'react-native';
import ButtonBackground from './ButtonBackground';

export default function ContactInfo ({text}){
    return(
        if(ButtonBackground)
        <TouchableOpacity>
        <View style = {styles.contact}>
        <Text style = {styles.contactStyle}>{text}</Text>
        </View>
        </TouchableOpacity>
    )
}
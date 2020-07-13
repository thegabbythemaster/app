import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import notificationManager from './NotificationManager';

export default class App extends Component{
  constructor(props){
    super(props)
    this.localNotify = null
  }

  componentDidMount(){
    this.localNotify = notificationManager
    this.localNotify.configure()
  }

  onPressSendNotification = () =>{
    this.localNotify.showNotification(
      1, 
      "App Notification",
      "Local Notification",
      {}, //data
      {}//options
    )
  }

  render(){
    let {container, button} = styles
    return(
      <View style = {container}>
        <TouchableOpacity style = {button}
        onPress = {this.onPressSendNotification}>

        <Text> Send notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {button}>
          <Text>Cancel notifications</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

// TODO: Add a splash screen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10
  }
})
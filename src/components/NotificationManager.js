import PushNotification, { PushNotificationObject } from "react-native-push-notification";
import PushNotification from "@react-native-community/push-notification-ios";
import {Platform, PushNotificationIOS} from 'react-native';

class NotificationManager{
    configure = () =>{
        PushNotification.configure({
            onRegister: function (token){
                console.log("[NotificationManager] onRegister TOKEN:", token);
            },

            onNotification: function (notification) {
                console.log("[NotificationManager] onNOTIFICATION:", notification);
            
                // process the notification
            
                // (required) Called when a remote is received or opened, or local notification is opened
                notification.finish(PushNotificationIOS.FetchResult.NoData);
              },
        })
    }
    _buildIOSNotification = (id, title, message, data ={}, options = {}) =>{
        return {
            alertAction: options.alertAction || "view",
            category: options.category || "",
            userInfo:{
                id: id,
                item: data
            }
        }
    }

    showNotification = (id, title, message, data = {}, option = {}) =>{
        PushNotification.localNotification({
            ...this._buildIOSNotification(id, title, message, data, options),
            /*IOS properties*/
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false //if the notifcation was opened by user from the notification area or not
        })  
    }

    cancelAllLocalNotifications = () =>{
        /*Cancel notification of library is error on iOS should I use
        PushNotificationIOS for IOS*/
        if(Platform.OS === 'ios'){
            PushNotificationIOS.removeAllDeliveredNotifications()
        }else{
            PushNotification.cancelAllLocalNotifications()
        }
    }


    unregister = () =>{
        PushNotification.unregister()
    }
}

export const notificationManager = new NotificationManager()
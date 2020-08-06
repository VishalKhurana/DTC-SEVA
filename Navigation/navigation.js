import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Components/login'
import signup from '../Components/signup';
import qrCode from '../Components/qr';
import Go from '../Components/src_des';
import Tickets from '../Components/Ticket';
import index from '../Components/HomeScreen/index';

const navigator=createStackNavigator(
    
  {
     Login:Login,
     Signup:signup,
     Account:index,
     QR:qrCode,
    // Go:Go,
     Ticket:Tickets

     
  },
  {
    defaultNavigationOptions: {
      header: null
    },
  

}

);
export default createAppContainer(navigator);

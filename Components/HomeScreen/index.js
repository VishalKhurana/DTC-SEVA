import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import MainScreenNavigator from "../ChatScreen/index.js";
// import Profile from "../ProfileScreen/index.js";
import SideBar from "./Sidebar";
import Go from '../src_des';
import Login from '../login'
// import { DrawerNavigator } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
const index = createDrawerNavigator(
  
  {
    Home: { screen: HomeScreen},
    src:{
      screen:Go
    },
    Logins:{
      screen:Login
    }
    
  
},
 
  {
    
    contentComponent: props => <SideBar {...props} />
  }
  
);
export default index;
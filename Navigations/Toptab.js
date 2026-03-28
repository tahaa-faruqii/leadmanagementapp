import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Mails from '../TabBar/Mails';
import Home from '../TabBar/Home';
import More from '../TabBar/More';


const Tab=createMaterialTopTabNavigator();
export default function Toptab() {
  return (
    <View>
      <Tab.Navigator>
      <Tab.Screen name="Name" component={Home} />
      <Tab.Screen name="Email" component={Mails} />
      <Tab.Screen name="Company" component={More} />
    </Tab.Navigator>
  
    </View>
  )
}
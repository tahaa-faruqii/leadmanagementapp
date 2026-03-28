import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../Screen/LogIn'
import ForgotPassword from '../Screen/ForgotPassword'
import Varification from '../Screen/Varifaction'
import Signup from '../DrawerScreen/Signup'
import Bottombar from './Bottombar'
import Notification from '../Screen/Notification'
const Stack = createNativeStackNavigator()
export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PVarification" component={Varification} />
      <Stack.Screen name="SSignup" component={Signup} />
      {/* <Stack.Screen name="Hoeme" component={Home} /> */}
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Bottombar" component={Bottombar} />

    </Stack.Navigator>
  )
}
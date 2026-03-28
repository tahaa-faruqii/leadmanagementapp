import { View, Text, Share } from 'react-native'
import React from 'react'
import Showpro from '../DrawerScreen/Showpro';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Accounts from '../DrawerScreen/Accounts'
import Setting from '../DrawerScreen/Setting';
import Reporter from '../DrawerScreen/Reporter';
import Lead from '../DrawerScreen/Lead';
import Rating from '../DrawerScreen/Rating';
// import Share from '../DrawerScreen/Share';
import ShareExample from '../DrawerScreen/Share';

export default function Drawer({navigation}) {
    const Drawer = createDrawerNavigator();

  return (
    <View>
      <Drawer.Navigator >
        {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
        <Drawer.Screen name="Showpro" component={Showpro} />
         <Drawer.Screen name="Accounts" component={Accounts} /> 
        <Drawer.Screen name="Lead" component={Lead} />
        {/* <Drawer.Screen name="Notifications" component={Deals} /> */}
        <Drawer.Screen name="Reporter" component={Reporter} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Rating" component={Rating} />
        <Drawer.Screen name="Share" component={ShareExample} />
      
      </Drawer.Navigator>
    </View>
  )
}

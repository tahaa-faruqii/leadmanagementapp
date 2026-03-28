import { View, Text, TouchableOpacity, } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Accounts from '../DrawerScreen/Accounts';
import Lead from '../DrawerScreen/Lead'
import Setting from '../DrawerScreen/Setting'
import Showpro from '../DrawerScreen/Showpro'
import Share from '../DrawerScreen/Share'
import Signup from '../DrawerScreen/Signup'

import Reporter from '../DrawerScreen/Reporter'

import Rating from '../DrawerScreen/Rating'
const Drawer = createDrawerNavigator();
export default function More() {
  return (
    <View>
      <Drawer.Navigator>
        <Drawer.Screen name='Showpro' component={Showpro} />
        <Drawer.Screen name='Accounts' component={Accounts} />
        <Drawer.Screen name='Lead' component={Lead} />
        <Drawer.Screen name='Report' component={Reporter} />
        <Drawer.Screen name='Setting' component={Setting} />
        <Drawer.Screen name='Rating' component={Rating} />
        <Drawer.Screen name='Share' component={Share} />
        <Drawer.Screen name='Signup' component={Signup} />
      </Drawer.Navigator>

      <TouchableOpacity
        style={{ top: 100, backgroundColor: 'red' }}
        onPress={() => navigation.navigate('ContactUs')}>
        <Text style={{ alignSelf: 'center' }}> conta </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ top: 100, backgroundColor: 'red' }}
        onPress={() => navigation.navigate('Notifications')}>
        <Text style={{ alignSelf: 'center' }}> Notifications</Text>
      </TouchableOpacity>

    </View>
  );
}



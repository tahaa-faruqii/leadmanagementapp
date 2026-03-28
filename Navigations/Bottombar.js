import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createDrawerNavigation } from '@react-navigation/drawer'
// import DrawerNavigator from './navigators/drawernavigator'


// import { create } from 'react-test-renderer'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
// import ImageCropPicker from '../screens/ImageCropPicker'
// import TodoScreen from '../screens/TodoScreen'
import Home from '../Screen/Home'
import Mails from '../Screen/Mails'
import Contacts from '../Screen/Contacts'
import More from '../Screen/More'
import Drawer from './Drawer'
const Stack = createNativeStackNavigator()
export default function Bottombar() {
const Tab = createBottomTabNavigator()
   
    return (

    
            
                <Tab.Navigator screenOptions={{ headerShown: false,
                      tabBarStyle:{backgroundColor: '#22577A',height:60,
                     borderBottomLeftRadius:10,
                     borderBottomRightRadius:10
                }
                     }}
                     initialRouteName={'Home'}>

                    <Tab.Screen name='Home' component={Home}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <MCIcon
                                    name='home'
                                    size={30}
                                    color={focused ? 'blue' : '#C4C4C4'}
                                />
                            ),
                            headershown: 'false'
                        }} 
                    />
                    <Tab.Screen name='Contact' component={Contacts}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <MCIcon
                                    name='account-circle'
                                    size={30}
                                    color={focused ? 'blue' : '#C4C4C4'}
                                />
                            ),
                            headershown: "false"
                        }}
                    />
                    <Tab.Screen name='Mails' component={Mails}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <MCIcon
                                    name='camera-image'
                                    size={30}
                                    color={focused ? 'blue' : '#C4C4C4'}
                                />
                            ),
                            headershown: "false"
                        }}
                    />
                        <Tab.Screen name='More' component={Drawer}
                            options={{
                                tabBarIcon: ({ focused }) => (
                                    <MIcon
                                        name='add-task'
                                        size={30}
                                        color={focused ? 'blue' : '#C4C4C4'}
                                    />
                                ),
                                headershown: "false"
                            }}
                        />
                </Tab.Navigator>
        
       
    )
}

const styles = StyleSheet.create({
    botombar: {
        flex: 1,
        width: 360,
        height: 450,
        backgroundColor: '#22577A',
        alignSelf: 'center',
        top: 540,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        right: 34

    }

})
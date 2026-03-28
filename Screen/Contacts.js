import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/AntDesign';
export default function Contacts({}) {

    return (
        <View style={styles.container}>
            <View style={styles.Top}>
            <View style={{alignContent:'center',top:25}}>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={styles.TextCon}>Contacts</Text>
                <Icon name='search1' color={'#C4C4C4'} size={18} style={{marginRight:30,top:6}} />
            </View>
    </View>
            </View>
    
    
            



            {/* <NavigationContainer >
                <Tab.Navigator>
                    <Tab.Screen name="Name" component={Home} />
                    <Tab.Screen name="Email" component={Mails} />
                    {/* <Tab.Screen name="Company" component={Company}/> */}
            {/* </Tab.Navigator> */}
            {/* </NavigationContainer>  */}





        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
       

    },
    Top: {
        width: 428,
        height: 90,
        backgroundColor: '#22577A',
        // justifyContent: 'space-between',
        top:40
    },
    Viewcon: {
        // top: 20,
        flexDirection: 'row',
        // justifyContent: 'space-distance',
        // position: 'absolute',
        // marginLeft:40,
        
    },
   
    TextCon: {
        justifyContent: 'space-around',
        // marginleft: 20,
        color: '#FFFFFF',
        // top: 10,
        fontSize: 18,
        // top: 20,
        // marginLeft: 10
    },
    icon: {
        justifyContent:'space-around',
        marginLeft: 130,
        top: 6,
        alignItems:'center'
    },
    texticon: {

        position: 'absolute',
        width: 158,
        height: 24,
        left: 75,
        top: 400,
        color: "#E6E6E6",
        // fontFamily: 'Poppins',s
        fontStyle: 'normal',
        fontSize: 400,
        fontSize: 16,
        // line-height: 24px;
    },
    

})
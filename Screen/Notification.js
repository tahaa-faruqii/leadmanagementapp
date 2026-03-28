import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Notification({ navigation }) {
    return (
        <View style={styles.container}>



            <View style={styles.Top}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>

                    <AntDesign style={{ marginLeft: 20, top: 40 }} name="arrowleft" color={'#fff'} size={20} />
                </TouchableOpacity>
                <Text style={styles.TextNot}>Notifications</Text>
                <Text style={styles.texttoday}>  Today’s Notifications</Text>


                <View style={{ justifyContent: 'flex-end', top: 300, position: 'absolute', alignSelf: 'center' }}>


                    <Icon name="notifications-off-outline" color={'#E6E6E6'} size={100} />

                    <Text style={styles.texticon}>No Notification Yet</Text>
                </View>



            </View>




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Top: {
        flexDirection: 'column',
        width: 428,
        height: 80,
        backgroundColor: '#22577A'
    },
    TextNot: {
        left: 70,
        color: '#FFFFFF',
        top: 20,
        fontSize: 18,
        //    textAlign:'center'
    },
    icon: {

        left: '8.33%',
        right: '8.33%',
        top: '8.33%',
        bottom: ' 8.33%',
        // flex:1,
        // border: 6.58333, solid: '#E6E6E6',
    },
    texticon: {


        width: 158,
        height: 24,

        color: "#E6E6E6",
        // fontFamily: 'Poppins',s
        fontStyle: 'normal',
        fontSize: 400,
        fontSize: 16,
        // line-height: 24px;
    },
    botombar: {
        flex: 1,
        width: 360,
        height: 420,
        backgroundColor: '#22577A',
        alignSelf: 'center',
        top: 546,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        right: 34

    },
    texttoday: {
        color: "#E6E6E6",
        top: 60,
        fontSize: 20,
        left: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#E6E6E6',
        width: 200
    }

})
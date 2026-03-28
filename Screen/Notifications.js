import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Notifications() {
    return (
        <View style={styles.container}>

            <View style={styles.Top}>

                <Text style={styles.TextNot}>Notifications</Text>
                <View style={styles.icon}>
                    <Text style={styles.today}>Today's Notification</Text>
                    <Text style={styles.texticon}>No Notification Yet</Text>
                    {/* <View style={styles.botombar}> */}

                {/* </View> */}
                


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
        width: 428,
        height: 77,
        backgroundColor: '#22577A'
    },
    today:{
top:80,
color:'#22577A'
    },
    TextNot: {
        left: 40,
        color: '#FFFFFF',
        top: 20,
        fontSize: 18,
        //    textAlign:'center'
    },
    icon: {
        position: 'absolute',
        left: '8.33%',
        right: '8.33%',
        top: '8.33%',
        bottom: ' 8.33%',
        // flex:1,
        // border: 6.58333, solid: '#E6E6E6',
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
    botombar: {
        flex: 1,
        width: 360,
        height: 450,
        backgroundColor: '#22577A',
        alignSelf: 'center',
        top:540,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
right:34

    }

})
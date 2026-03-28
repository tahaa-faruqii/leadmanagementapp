import { View, Text, StyleSheet, CheckBox} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AIcon from 'react-native-vector-icons/AntDesign'
import FIcon from 'react-native-vector-icons/Feather'
export default function ContactUs() {
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <View style={{ flexDirection: 'row', top: 10 }}>
                    <Icon name='arrow-back' color={'#C4C4C4'} size={30} style={{ top: 20, marginLeft: 15 }} />
                    <Text style={styles.Accounttext}>Contact Us</Text>
                </View>
            </View>

            <View style={{flexDirection:'column',top:150 }}>

                <Text style={styles.textstyle}>    Veiwing Spam and Duplicate Leads</Text>

                <Text style={[styles.textstyle,{marginVertical:50}]}>    Report gives the error for entering data</Text>

                <Text style={styles.textstyle}>    Duplicate data added in deals</Text>



            </View>

            <View style={{top:200}}>

            <Text style={styles.textstyle}>    Recover Crash reports</Text>

<Text style={[styles.textstyle,{marginVertical:50}]}>    Restore Data</Text>

<Text style={styles.textstyle}>    Request Deleted Leads</Text>



                
            </View>


            <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />

            
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    Top: {
        position: 'absolute',
        width: 428,
        height: 90,
        backgroundColor: '#22577A',
    },
    Viewtext: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    Accounttext: {
        marginLeft: 50,
        color: '#ffffff',
        fontSize: 18,
        top: 20
    },
    Add: {
        borderBottomWidth: 0.25,
        marginTop: 20,
        // marginLeft:30,
        width: '400%',
        height: '25%',
        // backgroundColor:'black'
    },
    Add1: {
        borderBottomWidth: 0.26,
        marginTop: 50,
        // marginLeft:30,
        width: '400%',
        height: '25%',
        // backgroundColor:'black',

    },
    textstyle: {
        color: '#22577A', top: 10,
         fontSize: 14,
        borderBottomWidth:2,
        borderBottomColor:'#E6E6E6',
        fontWeight:'bold'
    },
    checkbox: {
        alignSelf: "center",
      },
})
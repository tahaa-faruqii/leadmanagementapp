import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/Feather'
export default function Setting1({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <View style={{ flexDirection: 'row', alignContent: 'center', marginVertical: 20 }}>
                <TouchableOpacity onPress={()=>navigation.navigate ('Home')}>
                    <Icon name='arrow-back' color={'#fff'} size={30} style={{ top: 20, marginLeft: 15 }} />

                    </TouchableOpacity>
                    <Text style={styles.Accounttext}>Setting</Text>
                </View>
            </View>

            <View style={{ position: 'absolute', marginTop: 60 }}>
                <TouchableOpacity style={styles.Add1}  onPress={()=>navigation.navigate ('ContactUs')} >
                <FIcon name='help-circle' color={'#22577A'} size={22} style={{ position: 'absolute', marginTop: 25, marginLeft: 30 }} />

                    <Text style={styles.textstyle}>ContactUs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Add} onPress={()=>navigation.navigate ('Notifications')} >
                    <Text style={styles.textstyle}>Notification</Text>
                    <Icon name='notifications-outline' color={'#22577A'} size={22} style={{ position: 'absolute', marginTop: 25, marginLeft: 30 }} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.Add}  onPress={()=>navigation.navigate ('About')}>
                    <Text style={styles.textstyle}>About BulletAnt</Text>
                    <FIcon name='help-circle' color={'#22577A'} size={22} style={{ position: 'absolute', marginTop: 25, marginLeft: 30 }} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.Add}  onPress={()=>navigation.navigate ('TermsPolicy')} >
                    <Text style={styles.textstyle}>Term and policy</Text>
                    <FIcon name='lock' color={'#22577A'} size={22} style={{ position: 'absolute', marginTop: 25, marginLeft: 30 }} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.Add}  onPress={()=>navigation.navigate ('ContactUs')} >
                    <Text style={styles.textstyle}>App Info</Text>
                    <FIcon name='help-circle' color={'#22577A'} size={22} style={{ position: 'absolute', marginTop: 25, marginLeft: 30 }} />

                </TouchableOpacity>
                
            </View>
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
        marginLeft: 40,
        color: '#ffffff',
        fontSize: 18,
        marginTop: 20
    },
    Add: {
        borderBottomWidth: 0.25,
        marginTop: 10,
        // marginLeft:30,
        width: '400%',
        height: '25%',
        // backgroundColor:'black'
    },
    Add1: {
        borderBottomWidth: 0.26,
        marginTop: 40,
        // marginLeft:30,
        width: '400%',
        height: '25%',
        // backgroundColor:'black'
    },
    textstyle: {
        color: '#22577A', top: 20, marginLeft: 70, fontSize: 18

    }
})
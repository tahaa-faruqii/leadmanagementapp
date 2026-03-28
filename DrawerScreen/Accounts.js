import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import  MIcon  from 'react-native-vector-icons/MaterialIcons'
import  MCIcon  from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Accounts({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.Top}>
                <View style={{ flexDirection: 'row',marginVertical:20 }}>
                <TouchableOpacity onPress={()=>navigation.navigate ('Home')}>
                    <Icon name='arrow-back' color={'#fff'} size={30} style={{ top: 20, marginLeft: 15 }} />

                    </TouchableOpacity>
                    <Text style={styles.Accounttext}>Accounts</Text>
                </View>
            </View>

            <View style={{position:'absolute',marginTop:60}}>
                <TouchableOpacity style={styles.Add1}>
                    <Text style={styles.textstyle}>Add Account</Text>
                    <Icon name='ios-add-circle-outline' color={'#22577A'} size={22} style={{position:'absolute',marginTop:12,marginLeft:30  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Add}>
                    <Text style={styles.textstyle}>Switch to Account</Text>
                    <MCIcon name='account-switch-outline' color={'#22577A'} size={23} style={{position:'absolute',marginTop:12,marginLeft:30  }} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.Add}>
                    <Text style={styles.textstyle}>Sign Out</Text>
                    <MIcon name='logout' color={'#22577A'} size={22} style={{position:'absolute',marginTop:12,marginLeft:30  }} />

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
        marginLeft: 50,
        color: '#ffffff',
        fontSize: 18,
        top: 20
    },
    Add:{
        borderBottomWidth:0.25,
        marginTop:20,
        // marginLeft:30,
        width:'400%',
        height:'25%',
        // backgroundColor:'black'
    },
    Add1:{
        borderBottomWidth:0.26,
        marginTop:50,
        // marginLeft:30,
        width:'400%',
        height:'25%',
        // backgroundColor:'black'
    },
    textstyle:{
        color:'#22577A',top:10,marginLeft:70,fontSize:18
        
    }
})
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Mails() {
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <View style={styles.Viewmail}>
          <Text style={styles.TextCon}>Mails</Text>
          <Icon name='search1' color={'#C4C4C4'} size={18} style={{ marginHorizontal: 50, top: 6 }} />

        </View>
      </View>
      <View style={{top:50,marginLeft:30}}>
        <Text style={{color:'#E6E6E6',fontWeight:'bold',fontSize:20}}>Recent Email</Text>
      </View>
      
      <View style={{justifyContent:'flex-end',top:300,position:'absolute',alignSelf:'center'}}>
                    

                    <MaterialCommunityIcons   name="email-remove-outline" color={'#E6E6E6'} size={100} />

                    <Text style={{alignSelf:'center',color:'#E6E6E6',fontSize:15,fontWeight:'bold'}}>No Mail</Text>
                    </View>
                
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
top:40

  },
  Viewmail: {
    top: 25,
    flexDirection: 'row',
    justifyContent: 'space-around'

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
    justifyContent: 'space-around',
    marginLeft: 130,
    top: 6,
    alignItems: 'center'
  },
})
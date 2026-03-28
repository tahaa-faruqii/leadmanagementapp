import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function More1() {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <ScrollView>

        <View style={{ flexDirection: 'column', top: 20 }}>
          <Text style={styles.text} > Add Leads</Text>
          <Text style={{ backgroundColor: '#E6E6E6', height: 30, width: 360, fontWeight: 'bold', color: '#C4C4C4' }}>            Personal info</Text>
        </View>
        <View style={{ top: 180, flexDirection: 'column', }}>
          <View style={{ alignSelf: 'center', bottom: 120 }}>
            <TextInput style={styles.INputtext} placeholder="Name" />
            <TextInput style={styles.INputtext} placeholder="Buisness Mail" />
            <TextInput style={styles.INputtext} placeholder="Status" />
            <TextInput style={styles.INputtext} placeholder="Organization" />
            <TextInput style={styles.INputtext} placeholder="Phone" />
          </View>

          {/* 
  icons  */}

          {/* First Icon */}

          <Text style={{
            alignSelf: 'center',

            bottom: 352,
            borderBottomWidth: 2,
            borderColor: '#E6E6E6',
            width: 250,

          }}>  <Feather name="user" size={20} color='#E6E6E6' /></Text>



          {/* second Icon */}

          <Text style={{
            alignSelf: 'center',

            bottom: 327,
            borderBottomWidth: 2,
            borderColor: '#E6E6E6',
            width: 250,

          }}>  <Icon name="mail" size={20} color='#E6E6E6' /></Text>

          {/* Third Icon */}

          <Text style={{
            alignSelf: 'center',

            bottom: 303,
            borderBottomWidth: 2,
            borderColor: '#E6E6E6',
            width: 250,

          }}>  < Feather name="globe" size={20} color='#E6E6E6' /></Text>


          {/* fourth ICon */}



          <Text style={{
            alignSelf: 'center',

            bottom: 277,
            borderBottomWidth: 2,
            borderColor: '#E6E6E6',
            width: 250,

          }}>  <MaterialCommunityIcons name="office-building-cog-outline" size={20} color='#E6E6E6' /></Text>


          {/* fifth Icon */}

          <Text style={{
            alignSelf: 'center',

            bottom: 250,
            borderBottomWidth: 2,
            borderColor: '#E6E6E6',
            width: 250,

          }}>  <  Feather name="phone" size={20} color='#E6E6E6' /></Text>



        </View><Text style={{ backgroundColor: '#E6E6E6', height: 30, width: 360, fontWeight: 'bold', color: '#C4C4C4' }}>            Location info</Text>
        <View style={{ top: 80 }}>




          <View style={{ alignSelf: 'center', bottom: 50 }}>
            <TextInput style={styles.INputtext} placeholder="Country" />
            <TextInput style={styles.INputtext} placeholder="State" />
            <TextInput style={styles.INputtext} placeholder="City" />


            {/* First Icon */}

            <Text style={{
              alignSelf: 'center',

              bottom: 135,
              borderBottomWidth: 2,
              borderColor: '#E6E6E6',
              width: 250,

            }}>  <MaterialIcons name="my-location" size={20} color='#E6E6E6' /></Text>



            {/* second Icon */}

            <Text style={{
              alignSelf: 'center',

              bottom: 110,
              borderBottomWidth: 2,
              borderColor: '#E6E6E6',
              width: 250,

            }}>  <MaterialIcons name="my-location" size={20} color='#E6E6E6' /></Text>

            {/* Third Icon */}

            <Text style={{
              alignSelf: 'center',

              bottom: 87,
              borderBottomWidth: 2,
              borderColor: '#E6E6E6',
              width: 250,

            }}>  <Icon name="location-pin" size={20} color='#E6E6E6' /></Text>


          </View>



        </View>
        {/* 
    <View style={{flex:1,flexDirection:'column'}}>  */}

        <View style={{ marginHorizontal: 100 }}>

          <TouchableOpacity style={styles.boten}>

            <Text style={{ color: '#fff', textAlign: 'center', top: 15 }}
              onPress={() => navigation.navigate('More')}
            >Save</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({

  text: {
    fontSize: 40,
    alignSelf: 'center',
    marginVertical: 40,
    color: '#C4C4C4'


  },
  INputtext: {
    width: 250,
    marginLeft: 60,
  },

  boten: {
    alignSelf: 'center',

    backgroundColor: '#22577A',
    width: 250,
    height: 50,
    borderRadius: 10

  },



})
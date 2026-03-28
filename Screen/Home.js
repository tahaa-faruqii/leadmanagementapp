import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Calendar from 'react-native-calendars/src/calendar/header';
import { LocaleConfig } from 'react-native-calendars';
export default function Home({ navigation }) {


  return (
    <View  >
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#22577A', height: 90, top: 40 }}>
        <TextInput placeholder='Search here'
          style={styles.Searchbar}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon style={{ top: 30 }} name="notifications-outline" color={'#fff'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.Viewcal}>
        <Calendar style={{ elevation: 4, margin: 30, bottom: 20, borderRadius: 10 }}
          onDayPress={day => {
            console.log('selected day', day);
          }} initialDate={'2012-03-01'}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          disableMonthChange={false}
          onPressArrowLeft={subtractMonth => subtractMonth()}
        />

      </View>
      <View style={{ top: 60 }}>
        <Entypo name="emoji-sad" size={70} style={styles.icon} />
        <Text style={styles.currenview}>
          Currently don,t have any activity
        </Text>
      </View>
    </View>);
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#22577A',
    height: 90
  }
  ,
  Searchbar: {
    backgroundColor: '#fff',
    top: 20,
    height: 40,
    width: 260,
    borderRadius: 20,
    color: 'black'
  }
  ,

  currenview: {
    left: '20%', top: 5, fontWeight: 'bold', color: '#E6E6E6'
  },

  icon: {
    alignSelf: 'center', color: '#E6E6E6'
  },
  Viewcal: {
    top: 30
  }
  //   searchtext: {
  //     borderRadius: 15,

  //     width: 230,
  //     height: 36,
  //     backgroundColor: '#FFFFFF',
  //     left: 18,
  //     fontSize: 13,
  //     top: 30,
  //     fontFamily: 'poppins',
  //     color: '#C4C4C4',
  //   },
  //   calenderbox: {
  //     flex: 1,
  //     // borderWidth:400,
  //     position: 'absolute',
  //     width: 450,
  //     height: 211.88,
  //     top: 10,
  //     shadowColor: '#000000',
  //     shadowColor:'black',
  //     left: -2,
  // borderBottomWidth: 0.20,
  // borderColor: '#bdbdbd',

  //     shadowOffset: {
  //       width: 0,
  //       height: 1,
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 1,
  //     elevation: 5,
  //   },

  //   notification: {
  //     alignSelf: 'center',

  //     marginLeft: 430,

  //     width: 250,
  //     bottom: 30,
  //   },

});

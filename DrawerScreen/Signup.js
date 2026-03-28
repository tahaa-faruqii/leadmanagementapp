import {View, Text, TextInput,StyleSheet,TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
export default function Signup({navigation}) {
  return (
    <View>

      <ScrollView>

      <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
    
    <AntDesign style={{top:50 ,marginLeft:20,}} name="arrowleft" color={'#22577A'} size={20} />
</TouchableOpacity>



        
      <View style={{bottom: 10}}>
        <Text
          style={{
            fontSize: 80,
            top: 40,
            marginLeft: 80,
            color: '#22577A',
            fontWeight: 'bold',
          }}>
          B
        </Text>
        <Text
          style={{bottom: 29, marginLeft: 128, color: '#22577A', fontSize: 35}}>
          ullet
        </Text>
        <Text
          style={{
            fontSize: 50,
            bottom: 92,
            marginLeft: 190,
            color: '#22577A',
            fontWeight: 'bold',
          }}>
          {' '}
          A
        </Text>
        <Text
          style={{
            bottom: 143,
            marginLeft: 237,
            color: '#22577A',
            fontSize: 35,
          }}>
          nT
        </Text>

        <Text
          style={{
            bottom: 150,
            marginLeft: 140,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Small Buisness CRM
        </Text>
      </View>
      <View style={{alignSelf:'center',bottom:120}}>
        <TextInput style={styles.INputtext} placeholder="First name" />
        <TextInput style={styles.INputtext} placeholder="Last name" />
        <TextInput style={styles.INputtext} placeholder="Password" />
        <TextInput style={styles.INputtext} placeholder="Bussiness Mail" />
        <TextInput  style={styles.INputtext} placeholder="City" />
      </View>


{/* 
  icons  */}

{/* First Icon */}

<Text style={{alignSelf:'center',
       
       bottom:350,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="user" size={20}   /></Text>



        {/* second Icon */}

<Text style={{alignSelf:'center',
       
       bottom:323,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="user" size={20}   /></Text>
  
  {/* Third Icon */}

<Text style={{alignSelf:'center',
       
       bottom:300,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="lock" size={20}   /></Text>


 {/* fourth ICon */}



<Text style={{alignSelf:'center',
       
       bottom:274,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="mail" size={20}   /></Text>


{/* fifth Icon */}

<Text style={{alignSelf:'center',
       
       bottom:250,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="location-pin" size={20}   /></Text>



  <TouchableOpacity style={styles.boten}>

<Text style={{color:'#fff',textAlign:'center',top:15}} 
onPress={()=>navigation.navigate('More')}
>SIGN UP</Text>

</TouchableOpacity>


</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  INputtext: {
    width:250,
    marginLeft:60,
    // backgroundColor:'blue'
  

},
boten: { alignSelf:'center',
bottom:150,
backgroundColor:'#22577A',
width:250,
height:50,
borderRadius:10

},});


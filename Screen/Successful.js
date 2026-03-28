import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Successful({navigation}) {
  return (
    <View style={{top:190}}>

<Icon style={styles.text} name="email-check-outline" size={130}   />
      <Text style={[styles.text,{fontSize:40}]}>Successful</Text>


      <Text style={{alignSelf:'center',fontSize:20}}>Your Code is successfully verified  {"\n"}      now you can enter your new {'\n'}                   Password</Text>
    </View>
  );
}
const styles = StyleSheet.create({

text:{
    alignSelf:'center',
    color:'#22577A'
},
IconT:{
    alignSelf:'center',
    
}




});
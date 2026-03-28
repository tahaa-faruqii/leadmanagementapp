import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import  AntDesign  from 'react-native-vector-icons/AntDesign';
export default function Varifaction({navigation}) {
  return (
    <View style={{flex:1}}>

<TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
    
    <AntDesign style={{top:50 ,marginLeft:20,}} name="arrowleft" color={'#22577A'} size={20} />
</TouchableOpacity>


      <View style={{flexDirection:'column', alignSelf:'center',top:120}}> 
       
       <Text style={styles.EnterT}>Enter Code</Text>
       <Text style={styles.text}>Enter Your Verification Code Here</Text>



      </View>
        
<View style={{flexDirection:'column',alignSelf:'center',top:300}}>
 
      <TouchableOpacity style={styles.boten}>

<Text style={{color:'#fff',textAlign:'center',top:15}}
onPress={()=>navigation.navigate('Successful')}>Vrify</Text>

</TouchableOpacity> 



<TouchableOpacity >
  
  
  <Text  style={{color:'#5aa8e3',alignSelf:'center' ,top:30}}
  onPress={()=>navigation.navigate('Resetpassword')}
  >Send Again</Text>
  
  </TouchableOpacity>

  <Text style={[styles.text,{top:50,}]}>Enter Your Verification Code Here</Text>
</View>

</View>
  );
}
const styles = StyleSheet.create({
EnterT:{
alignSelf:'center',
fontSize:30,
color:'#22577A',
},
text:{
textAlign:'center',
fontWeight:'bold',
color:'#C4C4C4'

},
 boten: { 
 alignSelf:'center',
backgroundColor:'#22577A',
width:250,
height:50,
borderRadius:10,


},


});
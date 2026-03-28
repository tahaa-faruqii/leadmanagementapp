
import { View, Text ,TextInput ,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import LogIn from './LogIn';
import Varifaction from './Varifaction';





export default function ForgotPassword({navigation}) {
  return (
    <View  style={{flex:1}}>


      <ScrollView>


      <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
    
    <AntDesign style={{top:50 ,marginLeft:20,}} name="arrowleft" color={'#22577A'} size={20} />
</TouchableOpacity>
<View style={{bottom:10}}>
      <Text style={{fontSize:80,top:40,marginLeft:80,color:'#22577A',fontWeight:'bold',}}>B</Text>
      <Text style={{bottom:29,marginLeft:128,color:'#22577A',fontSize:35}}>ullet</Text>
      <Text style={{fontSize:50,bottom:92,marginLeft:190,color:'#22577A',fontWeight:'bold'}}> A</Text>
      <Text style={{bottom:143,marginLeft:237,color:'#22577A',fontSize:35}}>nT</Text>
<Text style={{bottom:150,marginLeft:140,fontSize:15,fontWeight:'bold'}}>Small Buisness CRM</Text>
        
       </View>
       
      <Text style={styles.textF}>Forget Password</Text>

{/* Icon */}


       <Text style={{alignSelf:'center',
       top:38,
       marginLeft:40,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="email" size={20}   /></Text>
 
      
      
      <View style={{padding:60}}>
      <TextInput style={{
        bottom:60,
        width:250,
         marginLeft:100,
    alignSelf:'center',
    
  }} 
    placeholder=" Verification Mail"
   />



<TouchableOpacity style={styles.boten}  onPress={()=>navigation.navigate('Varifaction')}>

<Text style={{color:'#fff',textAlign:'center',top:15}}
>

SEND VERIFICATION CODE</Text>

</TouchableOpacity> 
</View>

</ScrollView>

    </View>
  );
}
const styles = StyleSheet.create({

textF:{marginLeft:120,
bottom:80,
fontWeight:'bold',
fontStyle:'italic',
fontSize:16,
color:'#22577A',



},




    INputtext: {
      width:250,
      borderBottomWidth:2,
      borderColor:'#dcd5d4',
      
  },
  boten: { alignSelf:'center',
  
  backgroundColor:'#22577A',
  width:250,
  height:50,
  borderRadius:10,
  top:40
  
  },});
  
  
















































// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Splash() {

      
//   return (
//     <View style={{flex:1 ,backgroundColor:'#22577A'}}>
//       <View style={{top:200,}}>
//       <Text style={{fontSize:80,top:40,marginLeft:80,color:'#fff',fontWeight:'bold'}}>B</Text>
//       <Text style={{bottom:29,marginLeft:128,color:'#fff',fontSize:35}}>ullet</Text>
//       <Text style={{fontSize:50,bottom:92,marginLeft:190,color:'#fff',fontWeight:'bold'}}> A</Text>
//       <Text style={{bottom:143,marginLeft:237,color:'#fff',fontSize:35}}>nT</Text>

//        <Text style={{bottom:150,marginLeft:140,fontSize:15,fontWeight:'bold',color:'#fff'}}>Smal Buisness CRM</Text>
        
//        </View>
//     </View>
//   )
// }
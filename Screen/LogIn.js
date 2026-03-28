import { View, Text, TextInput,StyleSheet, TouchableOpacity,StatusBar, ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Signup from '../DrawerScreen/Signup';

export default function LogIn({navigation}) {
  return (
     <View style={{flex:1}} >

     
      <View>  
      <StatusBar barStyle = "dark-content" hidden = {false} 
      backgroundColor = "#2C6C96" translucent = {true}/>
</View>  
      <View style={{alignSelf:'center',top:40}} >
      {/* <Text style={{fontSize:80,top:40,marginLeft:80,color:'#22577A',fontWeight:'bold'}}>B</Text>
      <Text style={{bottom:29,marginLeft:128,color:'#22577A',fontSize:35}}>ullet</Text>
      <Text style={{fontSize:50,bottom:92,marginLeft:190,color:'#22577A',fontWeight:'bold'}}> A</Text>
      <Text style={{bottom:143,marginLeft:237,color:'#22577A',fontSize:35}}>nT</Text> */}
      <Text style={styles.toptext}>Welcome to Our {'\n'}     Buisness !</Text>

       {/* <Text style={{bottom:150,marginLeft:140,fontSize:15,fontWeight:'bold'}}>Small Buisness CRM</Text> */}
        
       </View>
         <View style={{flex:1,bottom:80}}>

              {/* Icon Email */}

              <Text style={{alignSelf:'center',
       top:220,
       
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="email" size={20}   /></Text>
         <TextInput 
           style={styles.container}
      
           placeholder='Buisness Mail'
         />





         {/* Icon Password */}
         
         <Text style={{alignSelf:'center',
       top:198,
       
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="lock" size={20}   /></Text>

         <TextInput secureTextEntry={true}
           style={{ top:159,
          //  backgroundColor: '#fff',
           borderRadius:10,
           width:250,
          //  height:70,
           alignSelf:'center',
           marginLeft:60
  
}}

          placeholder='Password'
        />
<TouchableOpacity>
  
  
  <Text  style={{color:'#5aa8e3',marginLeft:180,top:190}}
  onPress={()=>navigation.navigate('ForgotPassword')}
  >Forgot password ?</Text>
  
  </TouchableOpacity>



  <TouchableOpacity style={styles.boten}>

    <Text style={{color:'#fff',textAlign:'center',top:15}} 
    
    // onPress={()=>navigation.navigate('Home')}

   
    onPress={()=> navigation.navigate('Bottombar')}
    >SIGN IN</Text>

  </TouchableOpacity>


  <Text style={{alignSelf:'center',top:250}}>OR</Text>
  <Text style={{marginLeft:70,top:270}}>Don,t have an account ?</Text>

  <TouchableOpacity  onPress={()=> navigation.navigate('Signup')}   
   style={styles.Regietr} 
  >

<Text style={{color:'#5aa8e3'}}>Register</Text>
  </TouchableOpacity>
  </View> 


  <View></View>
  
   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top:180,
    // backgroundColor: '#fff',
    borderRadius:10,
    width:250,
    // height:70,
    alignSelf:'center',
    marginLeft:60

  },
  boten: { alignSelf:'center',
  top:230,
  backgroundColor:'#22577A',
  width:250,
  height:50,
  borderRadius:10
  
  },

  Regietr:{
    
    marginLeft:250,
    top:248



  },
  toptext:{
fontSize:40,
color:'#22577A',
fontWeight:'bold'

  }
});
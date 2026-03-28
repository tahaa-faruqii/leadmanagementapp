import { View, Text ,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

export default function Resetpassword({navigation}) {
  return (
    <View style={{flex:1}}>


<TouchableOpacity onPress={()=>navigation.navigate('ForgotPssword')}>
    
    <AntDesign style={{top:50 ,marginLeft:20,}} name="arrowleft" color={'#22577A'} size={20} />
</TouchableOpacity>

<View style={{flexDirection:'column', alignSelf:'center',top:80}}> 
       
       <Text style={styles.EnterT}>Reset password</Text>
       <Text style={styles.text}>Enter your New Password</Text>



      </View>

       <View style={{bottom:50}}>
       <Text style={{alignSelf:'center',
       top:220,
       
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="lock" size={20}   /></Text>
         <TextInput 
           style={styles.container}
      
           placeholder='New Password'
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

          placeholder='Conform New Password'
        />



<TouchableOpacity style={styles.boten}>

<Text style={{color:'#fff',textAlign:'center',top:15}}
onPress={()=>navigation.navigate('LogIn')}>Save</Text>

</TouchableOpacity> 



       </View>





    </View>
  );
}
const styles = StyleSheet.create({
    EnterT:{
    alignSelf:'center',
    fontSize:40,
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
    top:200
    
    
    },
    container: {
    top:180,
    // backgroundColor: '#fff',
    borderRadius:10,
    width:250,
    // height:70,
    alignSelf:'center',
    marginLeft:60
  },
//   boten: { 
//     alignSelf:'center',
//    backgroundColor:'#22577A',
//    width:250,
//    height:50,
//    borderRadius:10,
   
   
//    },
   
    
    });
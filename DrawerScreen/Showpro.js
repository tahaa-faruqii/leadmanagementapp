import { View, Text, TextInput,StyleSheet,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import SIcon from 'react-native-vector-icons/Ionicons'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();









export default function Showpro({navigation}) {
  return (
    <View style={{flex:1}} >
      <ScrollView>


      <TouchableOpacity onPress={()=>navigation.navigate ('Home')}>
                    <SIcon name='arrow-back' color={'#22577A'} size={30} style={{ top: 40, marginLeft: 15 }} />

                    </TouchableOpacity>

        <View ></View>
        

        {/* //Icon Top */}
        
      <View  style={{flexDirection:'column',alignSelf:'center',}}>
        


        
        <FontAwesome  style={{top:80}} name="user-circle-o" color={'#22577A'} size={60} />
      
      
      
      <TouchableOpacity onPress={()=>navigation.navigate('ImagePicker1')} style={{backgroundColor:'#ECECEC' ,top:65,width:20,height:20,borderRadius:20,justifyContent:'center',left:35}}>
    
     <Feather name="edit-2" color={'black'} size={15} />
</TouchableOpacity>
      
      </View>

      <View>
    
    <Text style={{alignSelf:'center',top:100,backgroundColor:'#E6E6E6',width:'100%',height:33,textAlign:'center',}}>User Information</Text>



    <View style={{alignSelf:'center',top:140,flexDirection:'column',}}>
        <TextInput style={styles.INputtext} placeholder="First name" />
        <TextInput style={styles.INputtext} placeholder="Last name" />
        <TextInput style={styles.INputtext} placeholder="Designation" />
        <TextInput style={styles.INputtext} placeholder="Organization" />
        <TextInput  style={styles.INputtext} placeholder="Business Mail" />
        <TextInput  style={styles.INputtext} placeholder="Phone" />
        <TextInput  style={styles.INputtext} placeholder="Address" />
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
        
        }}>  <Feather name="globe" size={20}   /></Text>


 {/* fourth ICon */}



<Text style={{alignSelf:'center',
       
       bottom:274,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <MaterialCommunityIcons name="office-building-cog-outline" size={20}   /></Text>


{/* fifth Icon */}

<Text style={{alignSelf:'center',
       
       bottom:250,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="mail" size={20}   /></Text>





<Text style={{alignSelf:'center',
       
       bottom:178,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="location-pin" size={20}   /></Text>




<Text style={{alignSelf:'center',
       
       bottom:250,
       borderBottomWidth:2,
       borderColor:'#dcd5d4',
        width:250,
        
        }}>  <Icon name="phone" size={20}   /></Text>



  
</View>
<TouchableOpacity style={styles.boten}>

<Text style={{color:'#fff',textAlign:'center',top:15}} 
onPress={()=>navigation.navigate('DrawerN')}
>SIGN UP</Text>

</TouchableOpacity>

</View>

<View></View>
</ScrollView>

    </View>
  );
}
const styles = StyleSheet.create({
    INputtext: {
      width:250,
      marginLeft:60,
      bottom:20
      // backgroundColor:'blue'
    
  
  },
  boten: { alignSelf:'center',
  bottom:10,
  backgroundColor:'#22577A',
  width:250,
  height:50,
  borderRadius:10
  
  },});
  
  
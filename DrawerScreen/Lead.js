import { View, Text , FlatList,TouchableOpacity,SafeAreaView,StyleSheet} from 'react-native'
import React from 'react'
import FIcon from 'react-native-vector-icons/Ionicons'
import DIcon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

// import Gcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Lead({navigation}) {


  const fruits = [
    // {
    //   id: 1,
    //   Name: 'Mango',
    // },
    // {
    //   id: 2,
    //   Name: 'Banana',
    // },
  ];

  //ITEMS DATA
  const ITEMS = [
    {
      id: 1,
      Name: '',
      Email: 'fasi@gmail.com',
      Status: 'alive',
    },
    {
      id: 2,
      Name: 'Fasi',
      Email: 'N',
      Status: 'dead',
    },
  ];

  const GridView = ({item}) => (
    <View style={styles.gridbox}>
      <Text style={styles.gridText}>{item.Name}</Text>
    </View>
  );


// naxt page



  const Grid_Header = () => {
    return (
      <View
        style={{
          height: 50,
          width: '100%',
          // backgroundColor: "#FF6F00",
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 24, color: 'blue'}}> Name </Text>
        <Text style={{fontSize: 24, color: 'blue'}}> Email </Text>
        <Text style={{fontSize: 24, color: 'blue'}}> Status </Text>
      </View>
    );
  };






  return (
    <View style={{flex:1,}}>
      
      <View style={styles.Top}>
            <View style={{alignContent:'center',top:50,marginRight:40,flexDirection:'row',justifyContent:'space-around',}}>


 
              
    <TouchableOpacity onPress={()=>navigation.navigate ('Home')}>
                    <FIcon name='arrow-back' color={'#fff'} size={20} style={{right:10}} />

                    </TouchableOpacity>

                    <Text style={styles.TextCon}>Leads</Text>


       <TouchableOpacity onPress={()=>navigation.navigate ('dropdown')}>
      <DIcon name='chevron-down' color={'#fff'} size={15} style={{right:30}} />

       </TouchableOpacity>



       < FIcon name='add-circle-outline' color={'#C4C4C4'} size={18} style={{right:10}} />

    <AntDesign name='delete' color={'#C4C4C4'} size={18} style={{right:50}}  />


                
           
    </View>
            </View>
      
      {/* <Text>Lead</Text> */}

      <SafeAreaView style={styles.MainContainer}>
      <View>
        {/* <TouchableOpacity style={styles.dropdownstyle} activeOpacity={0.8}>
          <Text>Choose an option</Text>
          <DIcon
            name="chevron-down"
            size={30}
            style={{
              transform: [{rotate: '180deg'}]
          }}
          />
        </TouchableOpacity> */}
        {fruits.map((val, i) => {
          return <Text key={String(i)}>{val.Name}</Text>;
        })}
      </View>

      <FlatList
        data={ITEMS}
        //  renderItem={({item}) => (
        //   <View >
        //     <Text >{item.Name} </Text>
        //   </View>
        // )}
        keyExtractor={item => item.id}
        numColumns={3}
        key={item => item.id}
        // horizontal={true}
        ListHeaderComponent={Grid_Header}
        renderItem={({item}) => (
          <View style={{}}>
            <View style={{flexDirection: 'column-reverse'}}>
              <Text style={{backgroundColor: 'red'}}>{item.Name} </Text>
            </View>
            <Text>{item.Email} </Text>
            <Text>{item.Status} </Text>
          </View>
        )}
      />
    </SafeAreaView>



    </View>
  );
}

const styles = StyleSheet.create({Top: {
  width: 428,
  height: 90,
  backgroundColor: '#22577A',
  // justifyContent: 'space-between',
  
},
TextCon: {
  justifyContent: 'space-around',
  
  color: '#FFFFFF',
  right:20,
  fontSize: 15,
  
  // top: 20,
  // marginLeft: 10
},

MainContainer: {
  flex: 1,
  backgroundColor: 'white',
},

gridbox: {
  flex: 1,
  height: 50,
  // margin: 2,
  borderBottomWidth: 1,
  // backgroundColor: '#00BFA5',
  justifyContent: 'center',
  alignItems: 'center',
},

gridText: {
  fontSize: 22,
  color: 'blue',
},
dropdownstyle: {
  backgroundColor: 'white ',
  padding: 8,
  borderRadius: 6,
  minHeight: 42,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

})
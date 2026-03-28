import React from 'react';

import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
// import { Dropdown } from 'react-native-material-dropdown';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function dropdown({navigation}) {
  //DROPDOWN MENU DATA
  const fruits = [
    {
      id: 1,
      Name: 'Mango',
    },
    {
      id: 2,
      Name: 'Banana',
    },
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
    // {
    //   id: 3,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
    // {
    //   id: 4,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'de',
    // },
    // {
    //   id: 5,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
    // {
    //   id: 6,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
    // {
    //   id: 6,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
    // {
    //   id: 6,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
    // {
    //   id: 6,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
    // {
    //   id: 6,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
    // {
    //   id: 6,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
    // {
    //   id: 6,
    //   Name: 'Fasi',
    //   Email: 'N',
    //   Status: 'al',
    // },
  ];

  const GridView = ({item}) => (
    <View style={styleSheet.gridbox}>
      <Text style={styleSheet.gridText}>{item.Name}</Text>
    </View>
  );

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
    <SafeAreaView style={styleSheet.MainContainer}>
      <View>
        <TouchableOpacity style={styleSheet.dropdownstyle} activeOpacity={0.8}>
          <Text>Choose an option</Text>
          <Icon
            name="chevron-down"
            size={30}
            style={{
              transform: [{rotate: '180deg'}]
          }}
          />
        </TouchableOpacity>
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
  );
}

const styleSheet = StyleSheet.create({
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
});

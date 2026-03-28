import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import LineGraph from '@chartiful/react-native-line-graph';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Reporter({navigation}) {
  const config = {
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'left',
      // prefix: 'M',
    },
  };
  const config2 = {
    startAtZero: false,
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      // prefix: '$',
      // offset: 0,
    },
  };
  return (
    <View>
      <View
        style={{
          padding: 20,
          height: 80,
          width: 400,
          backgroundColor: '#22577A',
          flexDirection: 'row',
          // justifyContent: 'space-evenly',
        }}>
        <Icon
          name="arrowleft"
          size={30}
          color="#ffffff"
          style={{marginTop: 8}}
        />
        <Text
          style={{
            position: 'absolute',
            color: '#ffffff',
            left: 30,
            padding: 20,
            marginLeft: 30,
            fontSize: 22,
            marginTop: 8,
          }}>
          Report
        </Text>
      </View>
      <ScrollView>
        <View style={style.input}>
          <Text style={{padding: 20, color: '#8b8d94', fontSize: 15}}>
            Report about yearly business activities
          </Text>
          {/* <View> */}
          <View style={style.C1}>
            <CircularProgress
              value={88}
              radius={74}
              duration={2000}
              progressValueColor={'white'}
              maxValue={100}
              // title={''}
              // titleColor={'white'}
              // titleStyle={{fontWeight: 'bold'}}
            />
          </View>
          <View style={style.C3}>
            <CircularProgress
              value={30}
              radius={45}
              duration={2000}
              progressValueColor={'white'}
              maxValue={100}
              // title={''}
              // titleColor={'white'}
              // titleStyle={{fontWeight: 'bold'}}
            />
          </View>
          {/* </View> */}

          <View style={style.bar}>
            <VerticalBarGraph
              data={[0, 100, 0, 200, 0, 300, 0]}
              labels={['M', 'T', 'W', 'Th', 'F', 'S']}
              width={240}
              height={200}
              // barRadius={5}
              // barWidthPercentage={0.65}
              baseConfig={config}
              style={style.chart}
            />
          </View>
          <View style={style.bar}>
            <LineGraph
              data={[10, 15, 7, 20, 14, 12, 10, 20]}
              width={305}
              height={240}
              isBezier
              hasShadow
              baseConfig={config2}
              style={style.chart2}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  input: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
  },
  bar: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  chart2: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 375,
    backgroundColor: 'lightblue',
  },
  chart: {
    // marginBottom: 30,
    borderRadius: 4,
    borderColor: 'black',
    padding: 10,
    barColor: 'blue',
    // paddingTop: 20,
    // borderRadius: 20,
    // backgroundColor: 'white',
    // width: 375,
  },
  C1: {
    flex: 1,
    // marginTop: 30,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  C2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    backgroundColor: 'white',
    borderRightColor: 'black',
    width: 0,
  },
  C3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: -117,
    marginBottom: 90,
  },
});

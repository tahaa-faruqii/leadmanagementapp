import { View, Text, Dimensions, TouchableHighlight, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Animated, { Easing } from 'react-native-reanimated'
import { useIsFocused } from '@react-navigation/native'
const { Value, timing } = Animated
export default function Reusable() {
  const [focus, setfocus] = useState([false,])
  {

    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height

    focus._input_box_translate_X = new Value(width)
    focus._back_button_opacity = new Value(0)
    focus._content_translate_X = new Value(height)
    focus._content_opacity = new Value(0)
  }
  _onfocus = () => {
    ({ Isfocus: true })
    const input_box_translate_X_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }
    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)

    }
    const content_translate_Y_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }
    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }
    timing(focus._input_box_translate_X, input_box_translate_X_config).start()
    timing(focus._back_button_opacity, back_button_opacity_config).start()
    timing(focus._content_translate_Y, content_translate_Y_config).start()
    timing(focus._content_opacity, content_opacity_config).start()
    this.ref.input.focus()
  }
  _onblur = () => {
    ({ Isfocus: false })
    const input_box_translate_X_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }
    const back_button_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }
    const content_translate_Y_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease)
    }
    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease)
    }
    timing(this._input_box_translate_X, input_box_translate_X_config).start()
    timing(this._back_button_opacity, back_button_opacity_config).start()
    timing(this._content_translate_Y, content_translate_Y_config).start()
    timing(this.content_opacity, content_opacity_config).start()
    this.ref.input.focus()
  }


  return (
    <SafeAreaView style={styles.header_safe_area}>
      <View style={styles.header}>
        <View style={styles.header_inner}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={'#ccd0d5'}
            onPress={_onfocus}
            style={styles.search_icon_box}
          ></TouchableHighlight>
          <Animated.View>
            style={[styles.input_box,{transform:[{translateX:this._input_box_translate_X}]}]}
            <Animated.View style={{opacity:this._back_button_opacity}}>
            <TouchableHighlight
            activeOpacity={1}
            underlayColor={'#ccd0d5'}
            onPress={this._onblur()}
            style={styles.back_icon_button}
          ></TouchableHighlight>
            </Animated.View>
            <TextInput
            ref='input'
            placeholder='search'
            clearButtonMode='always'
            value='Isfocus'
            onChangeText={(value)=>focus({keyword:value})}
            style={styles.input}
          />
          </Animated.View>
          
        </View>
      </View>
      <Animated.View style={[styles.content,{opacity:this.content_opacity,transform:[{translateY:content_translate_Y_config}]}]}>
<SafeAreaView style={styles.content_safe_area}>
  <View style={styles.content_inner}>
<View style={styles.seperator}/>
{

  
}
  </View>
</SafeAreaView>
      </Animated.View>
      </SafeAreaView>
     
    
    
  )
}

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000
  },
  header: {
    height: 50,
    paddingHorizontal: 16
  },
  header_inner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'

  },
  search_icon_box:{
width:40,
height:40,
borderRadius:40,
backgroundColor:"#e4e6eb",
flexDirection:'row',
justifyContent:'center',
alignItems:'center',

  },
  search_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    backgroundColor: 'white',
    width: width - 32
  },
  back_icon_button: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,

  },
  back_icon_box:{
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#e4e6eb',
    borderRadius: 16,
    paddingHorizontal: 10,
    fontSize: 20
  },
  input_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    backgroundColor: 'white',
    width: width - 32
  },
  content:{
    width:width,
    height:height,
    left:0,
    bottom:0,
    position:'absolute',
    zIndex:999
  },
  content_safe_area:{
    flex:1,
    color:'white'
  },
  content_inner:{
    flex:1,
    paddingTop:50
  },
  seperator:{
marginTop:5,
height:1,
backgroundColor:'#e4e6eb'

  }

})
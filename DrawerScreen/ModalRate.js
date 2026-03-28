import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity,Image } from "react-native";
 
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  const starImageCorner =
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
      return (
          <View>
              <View style={styles.customRatingBarStyle}>
                  {maxRating.map((item, key) => {
                      return (
                          <TouchableOpacity
                          style={{padding:8}}
                              activeOpacity={0.7}
                              key={item}
                              onPress={() => setDefaultRating(item)}>
                              <Image
                                  style={styles.starImageStyle}
                                  source={
                                      item <= defaultRating
                                          ? { uri: starImageFilled }
                                          : { uri: starImageCorner }
                                  }
                              />
                          </TouchableOpacity>
                      );
                  })}
              </View>
              {/* <Text style={styles.textStyle}>
                  {/* {defaultRating} / {Math.max.apply(null, maxRating)} */}
              {/* </Text> */}
              <View style={{flexDirection:'row',padding:5,justifyContent:'center',justifyContent:'space-around',marginLeft:18}}>
                  {defaultRating <= 2 ? <Text style={{ color: "#22577A", fontSize: 24, fontWeight: 'bold' }}>Bad</Text> : <Text style={{ color: '#E6E6E6', fontSize: 20, fontWeight: 'bold' }}>Bad</Text>}
                  {defaultRating <= 4 && defaultRating >= 3 ? <Text style={{ color: "#22577A", fontSize: 24, fontWeight: 'bold' }}>Good</Text> : <Text style={{ color: '#E6E6E6', fontSize: 20, fontWeight: 'bold' }}>Good</Text>}
                  {defaultRating == 5 ? <Text style={{ color: "#22577A", fontSize: 24, fontWeight: 'bold' }}>Excellent</Text> : <Text style={{ color: '#E6E6E6', fontSize: 20, fontWeight: 'bold' }}>Excellent</Text>}
              </View>
          </View>
      );
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Rating</Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
             <CustomRatingBar />
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show dd Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:25,
    fontWeight:'bold',
    color:'#22577A'
  },
  customRatingBarStyle: {
    
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
},
starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
},
});

export default App;
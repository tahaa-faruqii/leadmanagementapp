import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image ,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FIcon from "react-native-vector-icons/Feather";
import ImagePicker from 'react-native-image-crop-picker';

const ImagePicker1 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [path, setPath] = useState();
  const openGalleryForImage = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        showCropFrame:true
    }).then(image => {
        setPath(image.path)
    });
}
const openCameraForImage = () => {
  ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      cropperStatusBarColor:'purple'
  }).then(image => {
      setPath(image.path)
  });
}
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
            <View style={{ alignItems: 'center', alignContent: 'center', }}>
              {/* <Icon name='user-circle-o' size={50} color={'#22577A'} style={{}} /> */}
              <Image source={{
                
                uri: path == '' ?
                    'https://www.thehumancapitalhub.com/uploads_users/19730-istockphoto-1300845620-612x612.jpg'
                    : path
              } }style={{
                width: 90, height: 90, borderRadius: 125,backgroundColor:"#22577A"
              }} />
              <View style={{alignItems:'center',position:'absolute',marginTop:60,}}>
              {/* <FIcon name='edit-2' size={20} color={'#22577A'} style={{  backgroundColor: '#ECECEC', borderRadius: 15,marginHorizontal: }} /> */}
              </View>
            </View>
            <TouchableOpacity  style={[styles.button, styles.buttonClose]}
              onPress={() => openCameraForImage()}>
              
              <Text style={styles.textStyle}>Take picture</Text>
              </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose,{marginVertical:10}]}
              onPress={() =>  openGalleryForImage()}
            >
              <Text style={[styles.textStyle]}>Select image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  modalView: {
    width: '70%',
    height: '50%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
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
    borderRadius: 15,
    padding: 15,
    elevation: 2,
    top: 15,
    width:150,
    height:50
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
    textAlign: "center",

  },
  modalText: {
    marginBottom: 10,
    textAlign: "center"
  }
});

export default ImagePicker1;
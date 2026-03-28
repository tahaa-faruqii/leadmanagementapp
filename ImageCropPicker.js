import { View, Text, Button, Image, } from 'react-native'
import React, { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
export default function ImageCropPicker() {
    const [path, setPath] = useState('')
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
    const openGalleryForVideo = () => {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            console.log(video);
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
    const openCameraForVideo = () => {
        ImagePicker.openCamera({
            mediaType: 'video',
        }).then(image => {
            console.log(image);
        });
    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 1, }}>
                <Image source={{
                    uri: path == '' ?
                        'https://www.thehumancapitalhub.com/uploads_users/19730-istockphoto-1300845620-612x612.jpg'
                        : path
                }} style={{
                    width: 250, height: 250, borderRadius: 125
                }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Button
                    title='openGalleryForImage'
                    onPress={() => openGalleryForImage()}
                />
                <Button
                    title='openGalleryForVideo'
                    onPress={() => openGalleryForVideo()}
                />
                <Button
                    title='openCameraForImage'
                    onPress={() => openCameraForImage()}
                />
                <Button
                    title='openCameraForVideo'
                    onPress={() => openCameraForVideo()}
                />

            </View>
        </View>
    )
}
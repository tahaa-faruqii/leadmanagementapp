// React Native Custom Star Rating Bar
// https://aboutreact.com/react-native-custom-star-rating-bar/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const App = () => {

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
                    {defaultRating <= 2 ? <Text style={{ color: "#22577A", fontSize: 24, fontWeight: 'bold' }}>Bad</Text> : <Text style={{ color: '#E6E6E6', fontSize: 22, fontWeight: 'bold' }}>Bad</Text>}
                    {defaultRating <= 4 && defaultRating >= 3 ? <Text style={{ color: "#22577A", fontSize: 24, fontWeight: 'bold' }}>Good</Text> : <Text style={{ color: '#E6E6E6', fontSize: 22, fontWeight: 'bold' }}>Good</Text>}
                    {defaultRating == 5 ? <Text style={{ color: "#22577A", fontSize: 24, fontWeight: 'bold' }}>Excellent</Text> : <Text style={{ color: '#E6E6E6', fontSize: 22, fontWeight: 'bold' }}>Excellent</Text>}
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.container}>
        
        <Text style={styles.textStyle}>
          Rating
        </Text>
        <Text style={styles.textStyleSmall}>
          Leave your rating here
        </Text>
        {/* View to hold our Stars */}
        <CustomRatingBar />
       
        
      </View>
         
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 25,
        color: '#C4C4C4',
        marginTop: 15,
        fontWeight:'bold'
    },
    textStyleSmall: {
        textAlign: 'center',
        fontSize: 16,
        color: '#C4C4C4',
        marginTop: 15,
    },
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
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
    defaultR1:{

        color: "green",
         fontSize: 25, 
         fontWeight: 'bold'
    },
    defaultRr1:{

        color: "green",
         fontSize: 25, 
         fontWeight: 'bold'
    }
});

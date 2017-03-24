import React from 'react';
import {StyleSheet, Text, View, Image,ScrollView} from 'react-native';


const LiveContent=()=>{
    const {bk,game_img} = styles;
    return (
        <View style={bk} >
           <Image source={require('../img/img_firebat.png')}
            style={game_img}
           />
           <Image source={require('../img/img_forsen.png')}
            style={game_img}
           />
           <Image source={require('../img/img_kolento.png')}
            style={game_img}
           />
        </View>
    )
};

const styles = StyleSheet.create({
    bk:{
        flex:1,
        backgroundColor:'rgb(241, 241, 241)',
        marginTop:108,
        alignItems:'center'
    },
    game_img:{
        flex:1,
        width:365,
        height:200,
        resizeMode:'cover',
        marginTop:5,
    }
});

export default LiveContent;
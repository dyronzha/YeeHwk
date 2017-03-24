import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const GamePad = () =>{
    const {bk,game_img,games} = styles;
    return (
        <View style={bk} >
            <View style={games}>
                <Image source={require('../img/img_destiny.png')}
                style={game_img}/>
                <Image source={require('../img/img_counterstrike.png')}
                style={game_img}/>
            </View>
            <View style={games}>
                <Image source={require('../img/img_hearthstone.png')}
                style={game_img}/>
                <Image source={require('../img/img_dota2.png')}
                style={game_img}/>
            </View>
            <View style={games}>
                <Image source={require('../img/img_h1z1.png')}
                style={game_img}/>
                <Image source={require('../img/img_destiny.png')}
                style={game_img}/>
            </View>
            
           
        </View>     
    )
};

const styles = StyleSheet.create({
    bk:{
        width:375,
        height:554,
        backgroundColor:'rgb(241,241,241)',
        alignItems:'center',
        padding:2.5,
    },
    games:{
        width:375,
        height:185,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
    },
    game_img:{
        width:180,
        height:180,
        resizeMode:'cover',
        margin:2.5,
    },
  
});

export default GamePad;
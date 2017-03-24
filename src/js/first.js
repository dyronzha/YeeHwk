import React from 'react';
import {StyleSheet, Text, View, Image,StatusBar} from 'react-native';


const Launch = () =>{
    const {bk, logo_box, logo} = styles;
    return (
        <View style={bk}>
            <StatusBar hidden={true}/>
            <View style={logo_box}>
                <Image 
                style={logo}
                source={require('../img/logo_twitch.png')} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    bk:{
        flex:1,
        backgroundColor:'rgb(100, 65, 165)',
        //justifyContent:'center',
        alignItems:'center',
    },
    logo_box:{
        width:210,   
        height:100,
        marginTop:253.5,
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        flex:1,
        width:185.5,
        height:61.5,
        resizeMode:'contain'

    }
});

export default Launch;
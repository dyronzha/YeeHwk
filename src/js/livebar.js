import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const LiveBar= () =>{
    const {bk,button,button_img,button_text} = styles;
    return (
       <View style={bk}>
            <View style={button}>
                <Image source={require('../img/btn_games_selected.png')} 
                style={[button_img]}/>
                <Text style={button_text}>
                    Games
                </Text>
            </View>
            <View style={[button]}>
                <Image source={require('../img/btn_channels.png')} style={button_img}/>
                <Text style={button_text}>
                    Channels
                </Text>
            </View>
            <View style={button}>
                <Image source={require('../img/btn_following.png')} style={button_img}/>
                <Text style={button_text}>
                    Following
                </Text>
            </View>
            <View style={button}>
                <Image source={require('../img/btn_me.png')} style={button_img}/>
                <Text style={button_text}>
                    Me
                </Text>
            </View>
       </View>
    )
};

const styles = StyleSheet.create({
    bk:{
        width:375,
        height:49,
        backgroundColor:'white',
        marginTop:618,
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        flex:1,
        width:94,
        height:49,
        justifyContent:'center',
        alignItems:'center',

    },
    button_img:{
        
        width:45,
        height:45,
        resizeMode:'cover',
    },
    button_text:{
        marginTop:-15,
        fontSize:10,
        color:'rgb(100,65,165)',
    }
   
});
export default LiveBar;
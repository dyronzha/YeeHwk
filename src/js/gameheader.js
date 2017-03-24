import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const GameHeader = () =>{
    const {bk,search_bar,search_text,search_img,cast_img} = styles;
    return (
        <View style={bk} >
            <View style={search_bar}>
                <Image source={require('../img/icon_search.png')}
                    style={search_img}
                />
                <Text style={search_text}>
                Search
                </Text>
            </View>
            <Image source={require('../img/btn_cast.png')}
                style={cast_img}
            />
        </View>     
    )
};

const styles = StyleSheet.create({
    bk:{
        width:375,
        height:64,
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row',
        //justifyContent:'center',
        alignItems:'flex-end',
        paddingLeft:8.5,
    },
    search_bar:{
        
        width:320,
        height:30,
        backgroundColor:'rgb(49,31,83)',
        borderRadius:5,
        flexDirection:'row',
        marginTop:9,
        marginBottom:7.5,
        alignItems:'center',
        paddingLeft:8.5,
    },
    search_img:{
        width:18,
        height:18,
        marginRight:5.5,
    },
    search_text:{
        fontSize:15,
        color:'rgb(185,163,227)',
    },
    cast_img:{
        
        width:33,
        height:33,
        marginBottom:7.5,
        marginLeft:5,
    }
    
    
});

export default GameHeader;
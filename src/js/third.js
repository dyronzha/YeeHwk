import React from 'react';
import {StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import LiveHeader from './liveheader';
import LiveContent from './livecontent';
import LiveBar from './livebar';

const Live = () =>{
    const {bk,header} = styles;
    return (
        <View style={bk} >
           <StatusBar 
            hidden={false}
            backgroundColor='rgb(100,65,165)' 
            barStyle = "light-content" 
            />
            <LiveHeader style={[{zIndex:5}]} />
            <LiveContent style={[{zIndex:0}]} />
           <LiveBar />
        </View>
    )
};

const styles = StyleSheet.create({
    bk:{
        flex:1,
        backgroundColor:'rgb(241,241,241)',

    },
    header:{
        position:'absolute',
        top:0,
        left:0,
    }
});

export default Live;
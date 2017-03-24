import React from 'react';
import {StyleSheet, Text, View, Image,StatusBar} from 'react-native';
import GameHeader from './gameheader';
import GamePad from './gamepad';
import LiveBar from './livebar';
const Games = () =>{
    const {bk} = styles;
    return (
        <View style={bk} >
           <StatusBar 
            hidden={false}
            backgroundColor='rgb(100,65,165)' 
            barStyle = "light-content" 
            />
           <GameHeader />
           <GamePad />
           <LiveBar />
        </View>
    )
};

const styles = StyleSheet.create({
    bk:{
        flex:1,
        backgroundColor:'rgb(241,241,241)',

    },

    
});

export default Games;
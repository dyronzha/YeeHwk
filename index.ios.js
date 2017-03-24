import React, { Component } from 'react';
import {
  AppRegistry, 
  View,
  Text,
  
} from 'react-native';
import Launch from './src/js/first';
//import Live from './src/js/third';
//import Game from './src/js/second';



//creat a component
const App = () => {
  return(
    <View style={{flex:1}}>
      <Launch/>
    </View>
  );
};

// Note: test renderer must be required after react-native.
AppRegistry.registerComponent('YeeHwk', () => App);

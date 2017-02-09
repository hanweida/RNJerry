/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

const TextHeader=require('./Text_Header');

export default class RNJerry extends Component{
  render(){
    return (
       <TextHeader></TextHeader>
    );
  }
}

const styles = StyleSheet.create( {
  flex: {
    flex:1
  },
  container: {
    marginTop:200,
    marginLeft:5,
    marginRight:5,
    height:84,
    flexDirection:'row',
    borderRadius:5,
    padding:2,
    backgroundColor:'#FF0067',
},
  item: {
    flex:1,
    height: 80,
    //backgroundColor:'#333333',
    borderColor:'#FF0067',
  },
  font:{
    color:'#fff5ee',
    fontSize:14,
    fontWeight:'bold'
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  }, 
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
});
  
AppRegistry.registerComponent('RNJerry', () => RNJerry);

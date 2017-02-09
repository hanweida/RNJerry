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

export default class TextHeaders extends Component{
  render(){
    return (
      <View style={[styles.flex, styles.container]}>
        <Text style={styles.font}>
           <Text style={styles.fontRed}>网易</Text> 
           <Text style={styles.fontNews}>新闻</Text>
           <Text>有态度</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    marginTop:20,
    height:84,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:3/PixelRatio.get(),
    borderColor:'#FF0067',
},
  font:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
  },
   fontRed:{
     color:'#FF0067'
  },
  fontNews:{
    backgroundColor:'#FF0067',
     color:'#fff'
  },
});

module.exports=TextHeaders; 

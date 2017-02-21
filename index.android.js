/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React,{Component} from 'react';
import  {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Navigator,
    ScrollView,
    Text,
    View
    } from 'react-native';

const Navigator_1=require('./Navigator_1');
const TextInput_1=require('./TextInput_1');
const TouchAble_1=require('./Touchable_1');
const Picker_1=require('./Picker_1');

class RNJerry extends Component {
  render(){
    return(
      <Picker_1></Picker_1>
    );
  }
}
  
AppRegistry.registerComponent('RNJerry', () => RNJerry);

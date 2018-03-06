/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react';
import  {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Navigator,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    DeviceEventEmitter
    } from 'react-native';

import SimpleTabNavigator  from './zujian/navigation/SimpleTabNavigator';

export default class RNJerry extends Component {
  render(){
    return(
        <View style={styles.container}>
          <SimpleTabNavigator></SimpleTabNavigator>
        </View>
    );
  }

  // render(){
  //   return(
  //       <View style={styles.container}>
  //         <Text>Success</Text>
  //       </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
},
container:{
  flex:1,
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
    backgroundColor: 'grey',
  }
});

AppRegistry.registerComponent('RNJerry', () => RNJerry);


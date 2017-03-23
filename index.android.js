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
    } from 'react-native';

// const TextInput_1=require('./TextInput_1');
// const TouchAble_1=require('./Touchable_1');
// const Picker_1=require('./Picker_1');
// import ProgressBarAndroid_1 from './ProgressBarAndroid_1';
// import DrawerLayoutAndroid_1 from './DrawerLayoutAndroid_1';
// import ViewPagerAndroid_1 from './ViewPagerAndroid_1';
// import ViewPageIndex from './zujian/ViewPageIndex';
import Video from 'react-native-video';
export default class RNJerry extends Component {
  
  render(){
    return(
       <View style={styles.container}>
         <Video source={{uri: "http://www.reactnative.vip/data/movie.mp4", mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version.
       ref={(ref) => {
         this.player = ref
       }}
       rate={1.0}                   // 0 is paused, 1 is normal. 速率
       volume={1.0}                 // 0 is muted, 1 is normal.
       muted={false}                // Mutes the audio entirely.
       paused={false}               // Pauses playback entirely.
       resizeMode="contain"           // Fill the whole screen at aspect ratio.
       repeat={true}                // Repeat forever.
       onLoadStart={this.loadStart} // Callback when video starts to load
       onLoad={this.setDuration}    // Callback when video loads
       onProgress={this.setTime}    // Callback every ~250ms with currentTime
       onEnd={this.onEnd}           // Callback when playback finishes
       onError={this.videoError}    // Callback when video cannot be loaded
       style={styles.backgroundVideo} ></Video>
       </View>

    );
  }
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
  justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
}
});

AppRegistry.registerComponent('RNJerry', () => RNJerry);


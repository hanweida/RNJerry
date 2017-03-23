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
<Video source={{uri: "http:\/\/220.181.117.184\/m3u8\/yanboshi49_1800\/desc.m3u8?stream_id=yanboshi49_1800&path=106.38.180.25&amltag=8885&mltag=8885&platid=10&splatid=1001&qos=5&fcheck=0&uid=237671447&token=c89b1a7a826ad053a807dbe7ad10871c&keyitem=cFNDRrUMPbk39ldVbcoGKm9wT0IK97rzu-tjSGnrC43WSCC6HUH1mt6iGt0XNkWK5Q7JaA..&ntm=1490217000&nkey2=a7921e775deae786f3f5020cc8462c5d&nkey=7ce8fa0fd8c39c238d08e794f157c241&tag=live&video_type=m3u8&useloc=0&mslice=3&uidx=0&errc=0&gn=820&lrtmcd=109&buss=8885&cips=124.126.174.235&geo=CN-1-9-1&tmn=1490198433&pnl=820,820,820,201&liveid=1020170202231628&ext=m3u8&termid=1&hwtype=un&playid=1&sign=live_web&ostype=Windows7&p1=1&p2=14&p3=-&uuid=4E35AC7C7974F15E1B03B34BC60A794D35C73138_1&vkit=20161017&start_time=1486132889.184&tm=1486132906&key=77291513dcc26a25ef2f238d00625356", mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version.
       rate={1.0}                   // 0 is paused, 1 is normal.
       volume={1.0}                 // 0 is muted, 1 is normal.
       muted={false}                // Mutes the audio entirely.
       paused={false}               // Pauses playback entirely.
       resizeMode="cover"           // Fill the whole screen at aspect ratio.
       repeat={true}                // Repeat forever.
       onLoadStart={this.loadStart} // Callback when video starts to load
       onLoad={this.setDuration}    // Callback when video loads
       onProgress={this.setTime}    // Callback every ~250ms with currentTime
       onEnd={this.onEnd}           // Callback when playback finishes
       onError={this.videoError}    // Callback when video cannot be loaded
       style={styles.backgroundVideo} ></Video>
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
}
});

AppRegistry.registerComponent('RNJerry', () => RNJerry);


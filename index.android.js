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

// const TextInput_1=require('./TextInput_1');
// const TouchAble_1=require('./Touchable_1');
// const Picker_1=require('./Picker_1');
// import ProgressBarAndroid_1 from './ProgressBarAndroid_1';
// import DrawerLayoutAndroid_1 from './DrawerLayoutAndroid_1';
// import ViewPagerAndroid_1 from './ViewPagerAndroid_1';
// import ViewPageIndex from './zujian/ViewPageIndex';
import ToastRNModule from './nativemodules/ToastRNModule'
export default class RNJerry extends Component {

  _click(){
    ToastRNModule.show('-成功啦');
  }

  componentWillMount(){
    DeviceEventEmitter.addListener('AndroidToRNMessage',this.handleAndroidMessage);
  }

  componentWillunMount(){
     DeviceEventEmitter.remove('AndroidToRNMessage',this.handleAndroidMessage);
  }


  handleAndroidMessage=(msg)=>{

     console.log(msg);
  }

CallAndroid_callback=()=>{
  ToastRNModule.measureLayout(
    (msg) =>{
      console.log(msg);
    },(x,y,width,heigth)=>{
      console.log(x + '坐标,' + y + '坐标,' + width + '宽,'+heigth + '高');
    }
  );
}

CallAndroid_promise = () => {

    ToastRNModule.rnCallNative_promise('东方耀-rn调用原生模块的方法-成功啦').then(
      (msg) => {
        console.log('promise成功：'+msg);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
      );
  }

  render(){
    return(
        <View style={styles.container}>
          <TouchableOpacity
              onPress={this._click}
          >
            <Text>测试</Text>
            <Text onPress={this.CallAndroid_callback} style={{fontSize:25}}>调用原生方法_使用_回调函数</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 25 }} onPress={this.CallAndroid_promise} >调用原生方法_使用_Promise</Text>
            <Text>Android原生暴露的常量-{ToastRNModule.URL}</Text>
              <Text>作者-{ToastRNModule.author}-QQ号-{ToastRNModule.qq}</Text>
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


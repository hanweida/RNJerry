import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

const PAGES=5;

const BGCOLOR=['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];

const IMAGE_URIS=[
  'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
  'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
  'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
];

export default class ViewPageIndex extends Component{
    render(){
        let defaultName ="WelcomeUi";
        let defaultComponent = WelcomeUi;
        return(
            <Navigator
                initialRoute={{name:defaultName,component:defaultComponent}}
                configureScene={
                    (route)=>{
                       //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                        return Navigator.SceneConfigs.VerticalDownSwipeJump;
                    }
                }
                renderScene={
                    (route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }
                }
            />
        );
    }
}

// class ProgressBar extends Component{

//     constuctor(props){
//         super(props);
//     }

//     render(){
//         //当前位置+偏移量
//         var fractionalPosition = (this.props.progress.position + this.props.progress.offset );
//         var progressBarSize = (fractionalPosition / (PAGES - 1)) * this.props.size;
//        // return();
//     }
// }

class WelcomeUi extends Component{
    //引导页 或 欢迎页用 viewpager 实现
      //null is not an object 解决办法：初始化的时候要用constructor 而不是getInitialState
    //current using ES6 as standart programming.

  //to initial state you must create cnostructor in your react component class

  //用构造函数来替代之前的 Initial实例化

  constructor(props){
      super(props);
      this.state={
          page:0,
          animationsAreEnabled:true,//判断动画开启
          progress:{
              position:0,
              offset:0,
          }
      }
  }

  onPageSelected=(e)=>{
      //这个回调会在页面切换完成后（当用户在页面间滑动）调用
     //回调参数中的event.nativeEvent对象
     this.setState();
  }

    render(){
        return(
            <View>
                <Text>ddd</Text>
            </View>
        );
    }
}
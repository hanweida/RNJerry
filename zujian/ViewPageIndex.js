import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    ViewPagerAndroid,
    Image
} from 'react-native';

import LikeCount from './LikeCount'

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

  //onPageScroll(e){
  //  //当在页间切换时（不论是由于动画还是由于用户在页间滑动/拖拽）执行。
  //  this.setState({progress:e.nativeEvent});
  //}

  //See React on ES6+
  onPageSelected=(e)=>{
//当在页间切换时（不论是由于动画还是由于用户在页间滑动/拖拽）执行。
//    回调参数中的event.nativeEvent对象会包含如下数据：
//
//position 从左数起第一个当前可见的页面的下标。
//
//offset 一个在[0,1)（大于等于0，小于1）之间的范围，代表当前页面切换的状态。值x表示现在"position"所表示的页有(1 - x)的部分可见，而下一页有x的部分可见。
     this.setState({page:e.nativeEvent.position});
  }

onPageScroll=(e)=>{
     this.setState({progress:e.nativeEvent});
}
    render(){
        const thunbsUp='\uD83D\uDC4D';
        var pages=[];
        for(var i =0; i<PAGES;i++){
            var pageStyle={
                backgroundColor:BGCOLOR[i % BGCOLOR.length],
                alignItems:'center',
                padding:20
            };

            if(i<PAGES-1){
            //前面几个viewpage
            //collapsable 如果一个View只用于布局它的子组件，
            // 则它可能会为了优化而从原生布局树中移除。 把此属性设为false可以禁用这个优化，以确保对应视图在原生结构中存在。          
                pages.push(
                    <View key={i} style={pageStyle} collapsable={false}>
                        <Image 
                            //style={styles.image}
                            source={{uri:IMAGE_URIS[i % BGCOLOR.length]}}
                        />
                        <LikeCount />
                    </View>
                );
            }
        }

        return(
            <View>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    ref={viewPager => {this.viewPager=viewPager}}
                >
                {pages}
      </ViewPagerAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewPager:{
         alignItems:'center',
        padding:20
    }

});
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text
} from 'react-native'

class TouchAble_1 extends Component{
    render(){
        return(
            <View style={styles.container}>
               
                {/*拥有 TouchableWithoutFeedback props...  的属性
                 accessibilityComponentType   View.AccessibilityComponentType  设置可访问的组件类型
                  accessibilityTraits View.AccessibilityTraits,[View.AccessibilityTraits] 设置访问特征
                  accessible  bool  设置当前组件是否可以访问
                  delayLongPress  number  设置延迟的时间，单位为毫秒。从onPressIn方法开始，到onLongPress被调用这一段时间
                  delayPressIn  number 设置延迟的时间，单位为毫秒，从用户触摸控件开始到onPressIn被调用这一段时间
                  delayPressOut  number 设置延迟的时间，单位为毫秒，从用户触摸事件释放开始到onPressOut被调用这一段时间
                  onLayout  function  当组件加载或者改组件的布局发生变化的时候调用。调用传入的参数为{nativeEvent:{layout:{x,y,width,height}}}
                  onLongPress function 方法，当用户长时间按压组件(长按效果)的时候调用该方法
onPress function 方法 当用户点击的时候调用(触摸结束)。 但是如果事件被取消了就不会调用。(例如:当前被滑动事件所替代)
onPressIn  function  用户开始触摸组件回调方法
onPressOut function 用户完成触摸组件之后回调方法
pressRetentionOffset {top:number,left:number,bottom:number,right:number}   该设置当视图滚动禁用的情况下，可以定义当手指距离组件的距离。当大于该距离该组件会失去响应。当少于该距离的时候，该组件会重新进行响应。
                */}
                <TouchableHighlight
                    activeOpacity={0.1}
                    underlayColor='red'
                    
                    onPress={this._onPressButton}
                    onShowUnderlay ={this.show.bind(this,'必有onPress')}
                    onHideUnderlay ={this.show2.bind(this,'是的onPress')}
                >
                    <Text>TouchableHighlight</Text>
                </TouchableHighlight>
 <TouchableHighlight 
          underlayColor="rgb(210, 230, 255)"
          activeOpacity={0.1}  
          style={{ borderRadius: 8,padding: 6,marginTop:5}}
           onPress={this.show.bind(this,'欢迎学习React Native技术')}
          >
             <Text style={{fontSize:16}}>点击我</Text>
        </TouchableHighlight>


                <TouchableOpacity
                activeOpacity={0.1}
                onPress={this._onPressButton}
                >
                    <Text>TouchableOpacity</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback>
                    <View>
                        <Text>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
  show(txt){
    alert(txt);
  }
  show2(txt2){
    alert(txt2);
  }

  _onPressButton(){  
      
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


module.exports=TouchAble_1
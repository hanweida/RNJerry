import React,{Component} from 'react'
import {
    AppRegistry,
    View,
    ProgressBarAndroid
} from 'react-native'

export default class ProgressBarAndroid_1 extends Component{
    render(){
        return (
            <View>
                <ProgressBarAndroid 
                    color='red'
                    indeterminate={false}
                    progress={0.5}
                    styleAttr='LargeInverse'
                ></ProgressBarAndroid>
            </View>
            
        );
    }
}
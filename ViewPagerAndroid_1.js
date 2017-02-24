import React,{Component} from 'react'
import {
    View,
    Text,
    ViewPagerAndroid
} from 'react-native'
import LikeCount from './zujian/LikeCount'


export default class VierPagerAndroid_1 extends Component {

    render(){
        return(
            <ViewPagerAndroid
             initialPage={0}
             >
                <View
                style={styles.pageStyle}
                >
                    <Text>FirstPager</Text>
                </View>
                <View
                 style={styles.pageStyle}
                >
                 <Text>SecondPage</Text>
                </View>
            </ViewPagerAndroid>
            
        );
    }
}

const styles = {
    pageStyle:{
        alignItems:'center',
        padding:20
    }
}
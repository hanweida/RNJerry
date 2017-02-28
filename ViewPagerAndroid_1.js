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

           style={[styles.flex,styles.viewpager]}

           >



           <View style={styles.center}><Text style={[{fontSize:12},{color:'red'}]}>第一个页面</Text></View>
           <View style={styles.center}><Text style={{fontSize:20}}>第二个页面</Text></View>
           <View style={styles.center}><Text style={{fontSize:30}}>第三个页面</Text></View>


       </ViewPagerAndroid>
            
        );
    }
}

const styles = {
    flex:{
      
  },

    viewpager:{
        height:200,
    },

    center:{
       

    },

}
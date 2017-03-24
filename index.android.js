/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

export default class RNJerry extends Component{

   constructor(props) {
        super(props);

        this.state = {
            count: '0',
        };
    }


  render(){
    return (
      <View style={styles.flex}>
        <Text>{this.state.count}</Text>
      </View>
    );

    
  }

componentWillMount () {
    
}


 jiexi=(message)=>{
   var reg = new RegExp("[a-zA-z]+://[^\s]*html");
   var counts = 0;
   var length = 0;
   var substr = "";
   if(reg.test(message)){
      console.log("匹配成功");
      counts = message.indexOf("http://s.tmiaoo.com");
      length = "http://s.tmiaoo.com/ipad.html".length + counts;
      console.log(counts);
      console.log(length);
      console.log(message);
      substr = message.substring(counts,length);
      console.log(substr);
  }
    this.setState({
          count:message
       });
 }


fetchData=(url)=>{
var responses = fetch(url)
      .then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
      return responses;
}

  componentDidMount() {
    var url = new Request('http://nba.tmiaoo.com/nba.html');
   var responses = this.fetchData(url);
     responses.then((successMessage)=>{
       this.jiexi(successMessage);
     });
  }


}

const styles = StyleSheet.create( {
  flex: {
    flex:1,
        justifyContent:'center',
    alignItems:'center',
  },
  container: {
    marginTop:200,
    marginLeft:5,
    marginRight:5,
    height:84,
    flexDirection:'row',
    borderRadius:5,
    padding:2,
    backgroundColor:'#FF0067',
},
  item: {
    flex:1,
    height: 80,
    //backgroundColor:'#333333',
    borderColor:'#FF0067',
  },
  font:{
    color:'#fff5ee',
    fontSize:14,
    fontWeight:'bold'
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  }, 
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
});
  
AppRegistry.registerComponent('RNJerry', () => RNJerry);

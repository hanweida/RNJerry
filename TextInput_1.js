/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React,{Component} from 'react';
import  {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Navigator,
    ScrollView,
    Text,
    View,
    TextInput
    } from 'react-native';

var onePT = 1 / PixelRatio.get();

class TextInput_1 extends Component {
  render() {

    return (

        <View style={[styles.flex,styles.topStatus]}>

          <Search></Search>

        </View>
    );
  }
}

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      show:false,
      value:null,
    };
  }

  // hide(val){
  //   this.setState(
  //       {
  //         show: false,
  //         value: val,
  //       }
  //   );
  // }

  // getValue(text){

  //     this.setState({
  //       show: true,
  //       value: text,
  //     });

  // }

  hide(val){
    this.setState({
      show:false,
      value:val,
    });
  }

  getValue(text,text2){
    this.setState({
      show:true,
      value:text,
      value2:text2,
    });
  }

  render(){
    return(
        <View style={styles.flex}>
          <View style={styles.flexDirection}>
            <View style={[styles.flex,styles.input]}>
              <TextInput
                  keyboardType="web-search"
                  placeholder="请输入关键词"
                  value={this.state.value}
                  onChangeText={this.getValue.bind(this)}
                  />
            </View>
            <View style={styles.btn}
            >
              <Text style={styles.search} >搜索</Text>
            </View>
          </View>
          {this.state.show?
            <View style={styles.result}>
              <Text
                onPress={this.hide.bind(this, this.state.value+'to Hello')}
              >
                {this.state.value}to Hello
              </Text>
              <Text
                 onPress={this.hide.bind(this, this.state.value+'to Say')}
              >
                {this.state.value}to Say
              </Text>
              <Text
                 onPress={this.hide.bind(this, this.state.value+'to SayGoodBye')}
              >
                {this.state.value}to SayGoodBye
              </Text>
              <Text
                 onPress={this.hide.bind(this, this.state.value+'to No')}
              >
                {this.state.value}to No
              </Text>
            </View>
          :null
          }
        </View>
    );
  }
}



const styles = StyleSheet.create({


  item:{
    fontSize:16,
    paddingTop:5,
    paddingBottom:10,
  },

  result:{
    marginTop:onePT,
    marginLeft:18,
    marginRight:5,
    height:200,

  },

  flex:{
    flex:1,

  },
  flexDirection:{
    flexDirection:'row',
  },
  topStatus:{
    marginTop:25,
  },
  input:{
    height:50,
    borderColor:'red',
    borderWidth:1,
    marginLeft:10,
    paddingLeft:5,
    borderRadius:5,

  },
  btn:{
    width:45,
    marginLeft:-5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
  },
});

module.exports=TextInput_1
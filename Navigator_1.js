import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    ScrollView
 } from 'react-native';

 export class Navigator_1 extends Component{
     render() {
      let defaultName='List';
      let defaultComponent=List;
    return (
       <Navigator
        initialRoute={{name:defaultName,component:defaultComponent}}
        configureScene={
          (route)=>{
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }
        }
        renderScene={
          (route, navigator)=>{
            let Component=route.component;
            return <Component {...route.params} navigator={navigator} />
          }
        }
       />
    );
  }
}

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:1,
            user:null,
        };
    }

    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        const self=this;
        if(navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                params:{
                    id:this.state.id,
                    //从详情页获取user
                    getUser: function(user) {
                      //setState 重新渲染页面
                           self.setState({
                           user: user
                       })
                    }
                }
            })
        }
    }


    render(){
        if(this.state.user){
            return(
                <View>
                    <Text style={styles.list_item}>用户信息: { JSON.stringify(this.state.user) }</Text>
                </View>
            );
        }else{
            return (
                <ScrollView style={styles.flex}>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)} >☆ 豪华邮轮济州岛3日游</Text>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮台湾3日游</Text>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮地中海8日游</Text>
                </ScrollView>
            );
        }
    }
}

const USER_MODELS={
    1:{ name:'mot',age:23},
    2:{ name:'清明', age:25}
}

class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            id:null
        };
    }

    componentDidMount(){
        //这里获取从FistPageComponent 传递过来的参数id
        this.setState({
            id:this.props.id
        });
    }

    _pressButton(){
        const {navigator} = this.props;
        if(this.props.getUser){
                let user = USER_MODELS[this.props.id];
                this.props.getUser(user);          
        } 

        if(navigator){
            navigator.pop();
        }
    }

    render(){


        return(

            <ScrollView>
                <Text style={styles.list_item} >传递过来的用户id是：{this.state.id}</Text>
              <Text style={styles.list_item} onPress={this._pressButton.bind(this)} >点击我可以跳回去</Text>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({

  flex:{
    flex:1,

  },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center',
    },
});
module.exports=Navigator_1
 
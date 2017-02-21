import React,{Component} from 'react'
import {
    AppRegistry,
    View,
    Picker,
    Text
} from 'react-native'

class Picker_1 extends Component{

    constructor(){
        super();
        this.state={
            language:'aa'
        }
    }

    render(){
        return(
            <View>
               
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language:lang})}
                    mode={'dropdown'}
                    >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text>{this.state.language}</Text>
            </View>
        );
    }

    show(lang){
        this.setState({
            language:lang
        });
        alert(lang);       
    }
}

//  绑定函数    onValueChange={this.show.bind(this)}
//  箭头函数    onValueChange={(lang) => this.setState({language:lang})}

module.exports=Picker_1


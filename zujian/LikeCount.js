import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class LikeCount extends Component {

    constructor(props){
        super(props);
        this.state={
            likes:0,
        };
    }

    onClick=()=>{
        this.setState({likes:this.state.likes + 1});
    }

    render(){
        const thunbsUp='\uD83D\uDC4D';
        return(
            <View style={styles.containner}>
                    <TouchableOpacity
                        onPress={this.onClick}
                        activeOpacity={0.5}
                        style={styles.likeButton}
                    >
                    <Text style={styles.likesText}
                    >{thunbsUp+'Like'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.likesText}>{this.state.likes}个喜欢数</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    containner:{
        flexDirection :'row'
    },
    likeButton:{
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        borderColor:'#090808',
        borderRadius:1,
        borderWidth:1,
        flex:1,
        margin:8,
        padding:8
    },
    likesText: {
        flex:1,
        fontSize: 18,
        alignSelf: 'center',
    },
});
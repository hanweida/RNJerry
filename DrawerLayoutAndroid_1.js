import React,{Component} from 'react'
import {
    View,
    DrawerLayoutAndroid,
    Text,
    DrawerConsts,
    TouchableOpacity
} from 'react-native'

export default class DrawerLayoutAndroid_1 extends Component{

//es6 箭头函数
onPenLeftDrawable=()=>{
    this.drawer.openDrawer();
};

    render(){

        var navigatorView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
        );



        return(
            <DrawerLayoutAndroid
                renderNavigationView={()=> navigatorView}
                 ref={(drawer) => { this.drawer = drawer; }}
                drawerPosition={DrawerLayoutAndroid.Right}
                keyboardDismissMode={DrawerLayoutAndroid.onDrag}
            >
                <View
                    style={[{flex:1, alignItems:'center'}]}
                >
                <TouchableOpacity
                    activeOpacity={0.1}
                     onPress={this.onPenLeftDrawable}
                >
                    <Text>Hello</Text>
                </TouchableOpacity>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}
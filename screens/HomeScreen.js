import React, { Component } from 'react'
import { AsyncStorage } from 'react-native';
import { Text, View,Image,StyleSheet,TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
export class HomeScreen extends Component {
    tonews=()=>{
        this.props.navigation.navigate("News");
    }
        async componentDidMount(){
                try {
                    await AsyncStorage.setItem('token','hello')
                } catch (error) {
                    console.log(error)
                }
        }
    
    render() {
        return (
            <View>
                <View style={styles.imagecontainer}>
                    <Image source={require('../images/image1.png')} style={{width:700,height:250,marginTop:-90,marginRight:-40}}></Image>
                    <Image source={require('../images/image2.png')} style={{position:'absolute',bottom:-980,right:-170}}></Image>
                </View>
                <View style={{alignItems:'center',justifyContent: 'center',marginLeft:50}}>
                    <Image source={require('../images/logo.png')} style={{width:400,height:200,alignSelf:'center'}} />
                </View>
                <View>
                    <Text style={{fontSize:20,textAlign:'center'}}>Simplest News App</Text>
                    <TouchableOpacity style={styles.button} onPress={this.tonews}>
                        <Text style={{color:'#fff',fontWeight:'500',fontSize:20}}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    button:{
        marginHorizontal:80,
        backgroundColor:'#E9446A',
        borderRadius:50,
        height:52,
        alignItems:'center',
        justifyContent:'center',
        marginTop:100
    },
    imagecontainer:{
        alignItems:'center',
        marginTop:40
    }
})
export default HomeScreen

import React, { Component } from 'react'
import { Text, View,StyleSheet ,ActivityIndicator,AsyncStorage,Image} from 'react-native'

export class LoadingScreen extends Component {
    async componentDidMount(){
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
              if(value==="hello"){
                  this.props.navigation.navigate("News")
              }
            }
            else{
                this.props.navigation.navigate("Home")
            }
          } catch (error) {
            console.log(error)
          }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/gif.gif')} />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center'
    }

})
export default LoadingScreen

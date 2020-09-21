import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,TouchableOpacity,Linking,ScrollView,RefreshControl} from 'react-native'

export class News extends Component {
    tourl=()=>{
        Linking.openURL(this.props.item.url).catch(err=> console.log(err));
    }
    style=()=>{
        if(this.props.item.urlToImage===null){
            return {
                display:'none'
            }
        }
        else{
            return{
                display:'flex'
            }
        }
    }
    render() {
        return (
            <ScrollView style={this.style()}>
                <Image source={{uri:this.props.item.urlToImage}} style={{width:'100%',height:200}}  />
                <Text style={{marginTop:10,fontSize:18,marginLeft:5,marginRight:10}}>{(this.props.item.description)}</Text>
                <TouchableOpacity style={styles.btn} onPress={this.tourl}>
                    <Text style={{color:"white",fontSize:16,textAlign:'center'}}>Read Full Article</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    btn:{
        backgroundColor:'#ff4b5c',
        marginTop:35,
        width:'40%',
        padding:10,
        marginLeft:7,
        marginBottom:20,
        borderRadius:50
    }
})
export default News

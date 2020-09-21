import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export class SearchScreen extends Component {
  state = {
    text: "",
  };
  render() {
    this.back = () => {
      this.props.navigation.navigate("News");
    }
    return (
      <View>
        <View style={{flexDirection:'row',paddingTop:60,height:130,backgroundColor:'#e84a5f',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={this.back}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            style={{ marginLeft: 20 ,color:'white',marginTop:8,marginRight:10}}
          ></Ionicons>
        </TouchableOpacity>
        <TextInput
          placeholder="Enter a Keyword"
          style={{
            fontSize: 18,
            color: "white",
            marginRight:'auto',
            marginLeft:'auto',
            borderWidth:2,
            height:45,
            width:'80%',
            paddingLeft:5,
            backgroundColor:'white',
            borderColor:'transparent',
            borderRadius:8,
            paddingLeft:15,
            color:'black'
          }}
          placeholderTextColor="black"
          onChangeText={(text)=> this.setState({text})}
          onSubmitEditing={()=>{
            if(this.state.text===""){
              alert("Please Enter a Keyword")
            }
            else{
              this.props.navigation.navigate("SearchBarScreen",{text:this.state.text})
            }
          }}
        />
      </View>
      <View style={{marginTop:30}}>
        <View style={{flexDirection:'row',justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("SearchedNews",{name:"Science"})}>
            <View style={{borderWidth:0.3,padding:10,borderRadius:20}} >
              <Image style={{width:100,height:100,marginBottom:20}} source={require('../images/data-science.png')} />
              <Text style={{textAlign:'center'}}>Science</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("SearchedNews",{name:"Health"})}>
            <View style={{borderWidth:0.3,padding:10,borderRadius:20}}>
              <Image style={{width:100,height:100,marginBottom:20}} source={require('../images/treatment.png')} />
              <Text style={{textAlign:'center'}}>Health</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-around',marginTop:40}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("SearchedNews",{name:"Technology"})}>
            <View style={{borderWidth:0.3,padding:10,borderRadius:20}}>
              <Image style={{width:100,height:100,marginBottom:20}} source={require('../images/robot.png')} />
              <Text style={{textAlign:'center'}}>Technology</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("SearchedNews",{name:"Sports"})}>
            <View style={{borderWidth:0.3,padding:10,borderRadius:20}}>
              <Image style={{width:100,height:100,marginBottom:20}} source={require('../images/darts.png')} />
              <Text style={{textAlign:'center'}}>Sports</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent: 'space-around',marginTop:40}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("SearchedNews",{name:"Business"})}>
            <View style={{borderWidth:0.3,padding:10,borderRadius:20}}>
              <Image style={{width:100,height:100,marginBottom:20}} source={require('../images/money.png')} />
              <Text style={{textAlign:'center'}}>Business</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate("SearchedNews",{name:"Entertainment"})}>
            <View style={{borderWidth:0.3,padding:10,borderRadius:20}}>
              <Image style={{width:100,height:100,marginBottom:20}} source={require('../images/projector.png')} />
              <Text style={{textAlign:'center'}}>Entertainment</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

export default SearchScreen;

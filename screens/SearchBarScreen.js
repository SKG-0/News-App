import React, { Component } from "react";
import { Text, View, ScrollView,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import PTRView from "react-native-pull-to-refresh";
import axios from "axios";
import News from "../components/News";
import uuid from 'uuid-random';
import Axios from "axios";
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
export class SearchBarScreen extends Component {
  state = {
    news: [],
    number:2
  };
  componentDidMount() {
    Axios.get(
      `http://newsapi.org/v2/everything?q=${this.props.navigation.state.params.text}&pageSize=10&apiKey=a4ea217f61344d13b002341e8b671a2d`
    ).then((res) => {
      this.setState({ news: res.data.articles });
    }).catch(err=>{
      console.log(err)
    });
  }
  _refresh = function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 50,
            backgroundColor: "#8b79d9",
            height: 100,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Search")}
          >
            <Ionicons
              name="ios-arrow-back"
              size={32}
              style={{ marginLeft: 20, color: "white" }}
            ></Ionicons>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              color: "white",
              marginLeft: "auto",
              marginRight: "auto",
              paddingRight: 15,
            }}
          >
            {params.text}
          </Text>
        </View>
        <View>
            <ScrollView
            onScroll={({ nativeEvent }) => {
              if (isCloseToBottom(nativeEvent)) {
                this.setState({ number: this.state.number + 1 });
                axios
                  .get(
                    `https://newsapi.org/v2/everything?q=${this.props.navigation.state.params.text}&page=${this.state.number}&pageSize=10&apiKey=a4ea217f61344d13b002341e8b671a2d`
                  )
                  .then((res) => {
                    res.data.articles.forEach(
                      (item) => (
                        this.setState({ news: [...this.state.news, item] })
                      )
                    );
                  });
              }
            }}
            >
            {
            this.state.news.length===0?<View style={{alignItems:'center',justifyContent:'center',marginTop:200}}><Image style={{width:200,height:200}} source={require('../images/gif.gif')} /></View>:
            this.state.news.map((item) => {
                return (
                  <View key={uuid()}>
                    <View>
                      <News key={uuid()} item={item} />
                    </View>
                  </View>
                );
              })}
              <Text style={{ marginBottom: 200 }}></Text>
            </ScrollView>
        </View>
      </View>
    );
  }
}

export default SearchBarScreen;

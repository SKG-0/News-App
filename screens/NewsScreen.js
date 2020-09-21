import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import axios from "axios";
import News from "../components/News";
import PTRView from "react-native-pull-to-refresh";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import uuid from "uuid-random";
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
export class NewsScreen extends Component {
  state = {
    news: [],
    number: 2,
  };
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=a4ea217f61344d13b002341e8b671a2d"
      )
      .then((response) => {
        this.setState({ news: response.data.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  _refresh = function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  leftactions = () => {
    this.props.navigation.navigate("Search");
  };
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              marginTop: 40,
              fontSize: 24,
              marginBottom: 20,
              color: "#4b5d67",
              fontSize: 26,
              marginLeft: 20,
            }}
          >
            Trending
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="ios-arrow-forward"
              size={28}
              style={{ marginTop: 40, marginRight: 20 }}
              onPress={this.leftactions}
            ></Ionicons>
          </TouchableOpacity>
        </View>
        <ScrollView
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              this.setState({ number: this.state.number + 1 });
              axios
                .get(
                  `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.number}&pageSize=10&apiKey=a4ea217f61344d13b002341e8b671a2d`
                )
                .then((res) => {
                  res.data.articles.forEach((item) =>
                    this.setState({ news: [...this.state.news, item] })
                  );
                });
            }
          }}
        >
          {this.state.news.length === 0 ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 200,
              }}
            >
              <Image
                style={{ width: 200, height: 200 }}
                source={require("../images/gif.gif")}
              />
            </View>
          ) : (
            this.state.news.map((item) => {
              return (
                <View key={uuid()}>
                  <View>
                    <News key={uuid()} item={item} />
                  </View>
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  search: {},
});
export default NewsScreen;

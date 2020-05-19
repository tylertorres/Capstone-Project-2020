import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { IconButton } from "react-native-paper";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import Fire from "../firebase/Fire";
import ImagePicker from "react-native-image-crop-picker";

class Chat extends Component {
  state = {
    messages: [],
    images: null,
  };

  get user() {
    return {
      name: "Nick Samaroo",
      _id: Fire.shared.uid,
    };
  }

  componentDidMount() {
    const { route, navigation } = this.props;
    const { name } = route.params;

    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="account-edit"
          color="#007FFF"
          size={25}
          onPress={() => this.reviewAlert(name)}
        />
      ),
    });

    Fire.shared.on((message) => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      }));
    });
  }

  componentWillUnmount() {
    Fire.shared.off;
  }

  onImageSubmission = () => {
    ImagePicker.openPicker({ multiple: true, maxFiles: 3 })
      .then((images) => {
        this.setState({ images });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onSend = (messages) => {
    var msgArray = [];
    var initialMsg = messages[0];

    if (this.state.images != null) {
      for (let img of this.state.images) {
        var newMessage = Object.assign({}, initialMsg);
        newMessage.text = "";
        newMessage.image = img;
        msgArray.push(newMessage);
      }
    }
    initialMsg.image = "";
    msgArray.push(initialMsg);

    Fire.shared.send(msgArray);

    this.setState({
      images: null,
    });
  };

  // this will allow custom bubbles
  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: "red",
          },
          left: {},
        }}
        wrapperStyle={{
          left: {
            backgroundColor: "yellow",
          },
          right: {
            backgroundColor: "green",
          },
        }}
      />
    );
  };

  reviewAlert = (name) => {
    const { navigation, route } = this.props;
    const { key } = route.params;
    Alert.alert(`Leave a Review for ${name}`, "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel pressed"),
        style: "cancel",
      },
      {
        text: "Review",
        onPress: () => navigation.navigate("Review", { name, key }),
      },
    ]);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.upload}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onImageSubmission}
          >
            <Text>Upload</Text>
          </TouchableOpacity>
        </View>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={this.user}
          renderBubble={this.renderBubble}
          alwaysShowSend
          placeholder="Type a message..."
        />
        {this.state.images && (
          <View style={styles.preview}>
            {this.state.images.map((image) => (
              <Image
                key={image.id}
                source={{
                  uri: image.path,
                  width: 75,
                  height: 75,
                }}
                style={styles.img}
              />
            ))}
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  upload: {
    alignItems: "stretch",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
  },
  img: {
    borderRadius: 100,
    margin: 10,
  },
  preview: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
  },
  addImg: {
    color: "cyan",
    height: 10,
    width: 10,
    backgroundColor: "blue",
  },
});

export default Chat;

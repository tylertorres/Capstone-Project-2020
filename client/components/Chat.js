import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import Fire from '../firebase/Fire';

class Chat extends Component {
  // destructuring navigation from the previous screen and getting what was passed in
  // which was name
  static navigationOptions = ({ navigation }) => ({
    //title: (navigation.state.params || {}).name || 'Chat!',
    title: navigation.getParam('name'),
  });

  state = {
    messages: [],
    image: null,
  };

  get user() {
    return {
      name: 'TI',
      _id: Fire.shared.uid,
    };
  }

  componentDidMount() {
    Fire.shared.on((message) => {
      //console.log(message);
      // waits for the async operation to complete before persisting new data
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      }));
    });
  }

  componentWillUnmount() {
    Fire.shared.off();
  }

  setImage = (image) => {
    this.setState({
      image: image,
    });
  };

  onImageSubmission = () => {
    ImagePicker.openPicker({}).then((image) => this.setImage(image));
  };

  onSend = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: Fire.shared.timestamp,
        user: item.user,
        image: this.state.image == null ? '' : this.state.image.path,
        // url passed in by react native image picker
      };
      Fire.shared.database.push(message);
    });

    this.setState({
      image: null,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upload}>
          <TouchableOpacity style={styles.button} onPress={this.onImageSubmission}>
            <Text>Upload</Text>
          </TouchableOpacity>
        </View>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={this.user}
        />
        {this.state.image && (
          <View style={styles.preview}>
            <Image source={{ uri: this.state.image.path, width: 50, height: 50 }} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  upload: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  img: {
    height: 20,
    width: 20,
  },
  preview: {
    display: 'flex',
    justifyContent: 'center',
    padding: 15,
  },
});

export default Chat;

import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

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
  };

  get user() {
    return {
      name: 'TI',
      _id: Fire.shared.uid,
    };
  }

  componentDidMount() {
    Fire.shared.on((message) =>
      // waits for the async operation to complete before persisting new data
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }

  render() {
    return <GiftedChat messages={this.state.messages} onSend={Fire.shared.send} user={this.user} />;
  }
}

export default Chat;

import React, { useState, Fragment } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Fire from '../firebase/Fire';

const Request = ({ route, navigation }) => {
  const [text, setText] = useState(null);
  const [images, setImages] = useState(null);
  const [indicator, setIndicator] = useState(false);

  const { name } = route.params;

  const onImageSubmission = () => {
    ImagePicker.openPicker({ multiple: true, maxFiles: 4 })
      .then(images => {
        setImages(images);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const generateGiftedID = () => {
    // generates uuid in GiftedChat's format
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const sendRequest = () => {
    setIndicator(true);
    var msgArray = [];
    var message = {};

    message._id = generateGiftedID();
    message.text = text;
    message.user = {
      name: 'Exotic', //have to pass in name from params of the NID
      _id: Fire.shared.uid,
    };

    for (let img of images) {
      var newMessage = Object.assign({}, message);
      newMessage.text = '';
      newMessage.image = img;
      msgArray.push(newMessage);
    }

    message.image = '';
    msgArray.push(message);

    Fire.shared.send(msgArray);
    setTimeout(() => {
      setIndicator(false);
      navigation.navigate('Chat', { name: 'Test' });
    }, 3000);
  };

  const { designer } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoText}>Submit a Request to {name}</Text>
        <TextInput
          style={styles.infoInput}
          multiline
          onChangeText={text => setText(text)}
          placeholder='Type message...'
          maxLength={300}
        ></TextInput>
        <TouchableOpacity style={styles.infoButton} onPress={onImageSubmission}>
          <Text style={styles.infoButtonText}>Add Images</Text>
        </TouchableOpacity>
      </View>
      {images && (
        <View style={styles.imageContainer}>
          {images.map(image => (
            <Image
              key={image.localIdentifier}
              source={{
                uri: image.path,
                width: 100,
                height: 100,
              }}
              style={styles.images}
            />
          ))}
        </View>
      )}
      {text && images && (
        <View style={styles.submit}>
          <TouchableOpacity style={styles.infoButton} onPress={sendRequest}>
            {indicator ? (
              <ActivityIndicator size='small' color='#0000ff' />
            ) : (
              <Text style={styles.infoButtonText}>Send A Request</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  info: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    maxHeight: 300,
  },

  infoText: {
    fontSize: 27,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#1b5675',
  },
  infoInput: {
    padding: 10,
    width: 250,
    maxWidth: 300,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  infoButton: {
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#528c9e',
    width: 200,
    alignItems: 'center',
  },
  infoButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },

  imageContainer: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  images: {
    margin: 10,
    width: 150,
    height: 150,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  submit: {
    flex: 1,
  },
});

export default Request;

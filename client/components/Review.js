import React, { useState, useEffect } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

const Review = ({ route, navigation }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const { key } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button title='Cancel' onPress={() => cancelAlert()} />,
    });
  }, []);

  const cancelAlert = () => {
    Alert.alert('Cancel Review', '', [
      {
        text: 'No',
      },
      {
        text: 'Yes',
        onPress: () => navigation.goBack(),
        style: 'destructive',
      },
    ]);
  };

  const onSubmit = () => {
    //navigation.navigate({ key: key });

    // Add review to database and then go back
    navigation.pop(3);
  };

  return (
    <View style={styles.container}>
      <View style={styles.review}>
        <AirbnbRating selectedColor='teal' reviewColor='teal' onFinishRating={rating => setRating(rating)} />
        <TextInput
          onChangeText={text => setText(text)}
          style={styles.infoInput}
          multiline
          placeholder='Leave a message...'
          maxLength={240}
        />
        <TouchableOpacity onPress={onSubmit} style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Submit Review!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  review: {
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 300,
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
    justifyContent: 'flex-end',
  },
  infoButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Review;

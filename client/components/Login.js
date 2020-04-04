import React, { Component } from 'react';
//import OAuthManager from 'react-native-oauth'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

const linkToImage =
  'https://ksassets.timeincuk.net/wp/uploads/sites/56/2018/06/living-room-wallpaper-ideas-map.jpg';

export default function Login({ navigation }) {
  return (
    <ImageBackground source={{ uri: linkToImage }} style={styles.logo}>
      <View>
        <Text style={styles.mainName}>INDESYN</Text>
      </View>

      <Text style={styles.phrase}> Interior Design Made Easy</Text>

      <View style={styles.formContainer}>
        <GoogleSigninButton
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('profileSetup')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 40,
  },
  mainName: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
    fontFamily: 'arial',
  },
  phrase: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 150,
    height: 50,
  },
});

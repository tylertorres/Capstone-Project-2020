import React, { Component, useContext, useEffect } from 'react';
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
  Platform,
} from 'react-native';
import { GoogleSigninButton, GoogleSignin, statusCodes } from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

import UserContext from './context/user/userContext';

const FONT = Platform.OS == 'android' ? 'monospace' : 'arial';
const linkToImage = 'https://ksassets.timeincuk.net/wp/uploads/sites/56/2018/06/living-room-wallpaper-ideas-map.jpg';

const Login = ({ navigation }) => {
  const userContext = useContext(UserContext);
  const { SetUserInfo } = userContext;

  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false,
    });
    GoogleSignin.configure({
      webClientId: '929469838203-kk06n8d284q9qe5hrqh2g0vu3uca0bjd.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }, []);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      SetUserInfo(userInfo);
      navigation.navigate('profileSetup');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  return (
    <ImageBackground source={{ uri: linkToImage }} style={styles.logo}>
      <View>
        <Text style={styles.mainName}>INDESYN</Text>
      </View>

      <Text style={styles.phrase}> Interior Design Made Easy</Text>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        style={styles.buttonContainer}
        onPress={_signIn}
      />
    </ImageBackground>
  );
};

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
    fontFamily: Platform.OS == 'android' ? 'monospace' : 'arial',
  },
  phrase: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: FONT,
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
    width: 192,
    height: 50,
    alignSelf: 'center',
    marginTop: 350,
  },
});

export default Login;

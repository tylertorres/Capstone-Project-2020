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
  Platform,
} from 'react-native';
import { GoogleSigninButton, GoogleSignin, statusCodes } from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

const FONT = Platform.OS == 'android' ? 'monospace' : 'arial';
const linkToImage = 'https://ksassets.timeincuk.net/wp/uploads/sites/56/2018/06/living-room-wallpaper-ideas-map.jpg';

export default class Login extends Component {
  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '929469838203-kk06n8d284q9qe5hrqh2g0vu3uca0bjd.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo: userInfo, loggedIn: true });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <ImageBackground source={{ uri: linkToImage }} style={styles.logo}>
        <View>
          <Text style={styles.mainName}>INDESYN</Text>
        </View>

        <Text style={styles.phrase}> Interior Design Made Easy</Text>

        <View style={styles.formContainer}>
          <GoogleSigninButton style={styles.buttonContainer} onPress={this._signIn} />
        </View>
      </ImageBackground>
    );
  }
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
    width: 150,
    height: 50,
  },
});

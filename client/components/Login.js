<<<<<<< HEAD
import React, {Component} from 'react';
//import OAuthManager from 'react-native-oauth'
import {StyleSheet, View, Text, Image, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native';
import { GoogleSigninButton, GoogleSignin, statusCodes} from '@react-native-community/google-signin';
=======
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from 'react-native-google-signin';
>>>>>>> 031929aa80d630738ba2d89614927e2315a986bc
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

const linkToImage =
  'https://ksassets.timeincuk.net/wp/uploads/sites/56/2018/06/living-room-wallpaper-ideas-map.jpg';

<<<<<<< HEAD
/*const manager = new OAuthManager('Indesyn')
manager.configure({
  google: {
    callback_url: 'io.fullstack.Indesyn:/oauth2redirect',
    client_id: '',
    client_secret: ''
  }
});

// ...
manager.authorize('google', {scopes: 'profile email'})
.then(resp => console.log('Your users ID'))
.catch(err => console.log('There was an error')); */

export default function Login({ navigation }) {
        
    return (
            <ImageBackground source = {{uri: linkToImage}} style = {styles.logo}>
                
                <View>
                    <Text style = {styles.mainName}>INDESYN</Text>
                </View>

                <Text style = {styles.phrase}> Interior Design Made Easy</Text>

                <View style ={styles.formContainer}>
                  <GoogleSigninButton
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('profileSetup')}
                  />
                </View>
                
               
=======
function Login({ navigation }) {
  return (
    <ImageBackground source={{ uri: linkToImage }} style={styles.logo}>
      <View>
        <Text style={styles.mainName}>INDESYN</Text>
      </View>

      <Text style={styles.phrase}> Interior Design Made Easy</Text>
>>>>>>> 031929aa80d630738ba2d89614927e2315a986bc

      <View style={styles.formContainer}>
        <GoogleSigninButton
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('NID')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
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
        fontFamily: 'monospace'
    },
    phrase: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'monospace'
    },
    logo: {
        width: '100%',
        height:'100%'
    },
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonContainer:{
       width: 150,
       height: 50
    }

});
=======
  input: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 40
  },
  mainName: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
    fontFamily: 'monospace'
  },
  phrase: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace'
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: 200,
    height: 50
  }
});
export default Login;
>>>>>>> 031929aa80d630738ba2d89614927e2315a986bc

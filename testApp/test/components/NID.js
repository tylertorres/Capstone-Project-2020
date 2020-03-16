import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TextInput, Button, StatusBar, TouchableOpacity} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';



function NID({ navigation }) {
    return (
      <View style = {styles.mainView}>
        <Text style = {styles.findID}> Find a Designer </Text>
        
        <Button style = {styles.stay}
          title = "This is the NID page"
          onPress={() => navigation.navigate('NID')}
        />
      
      <View style = {styles.goBackContainer}>
        <TouchableOpacity style = {styles.goBack} onPress={() => navigation.popToTop()}>
          <Text style = {styles.goBackText}> GO BACK TO THE FIRST SCREEN IN THE STACK </Text>
        </TouchableOpacity>
      </View>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    findID: {
      fontFamily: 'monospace',
      fontSize: 20,
      textAlign: 'center',
      padding: 20
    },
    mainView: {
      flex: 1
    },
    goBack: {
      backgroundColor: '#ff00bf',
      padding: 20
    },
    goBackText: {
      fontSize: 15,
      textAlign: 'center'
    },
    goBackContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-end'
    }
  });

  export default NID;
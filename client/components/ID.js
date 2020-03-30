import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TextInput, Button} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';



function ID({ navigation }) {
    return (
      <View style= {styles.mainView}>
        <Text>ID</Text>
        <Button
          title="This is the ID page"
          onPress={() => navigation.navigate('IORD')}
        />
        <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },

});

  export default ID;
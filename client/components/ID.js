import React, {Component} from 'react';
import {Avatar, Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, Text, Image, ImageBackground, TextInput,TouchableOpacity} from 'react-native';
//import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';



export default function ID({ navigation }) {
    return (
      <View style = {styles.mainView}>
        <View style = {styles.idRow}>
          <Avatar 
            size = "large"
            containerStyle = {{borderWidth: 3}}
            rounded
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
      
          <View> 
            <Text style = {styles.designerInfo}>Jane Doe</Text>
            <Text style = {styles.designerInfo}>Doe Inc.</Text>
          </View>

          <View style = {{paddingLeft: 35, alignSelf: 'center'}}>
            <Button onPress={() => navigation.popToTop()}
              icon = {
                <Icon
                reverse
                name='envelope-o'
                size = {30}
                type='ionicon'
                color='blue' />
            }
            title="Connect with Jane!"
            TouchableComponent = {TouchableOpacity}
            titleStyle = {{paddingLeft: 10}}
            buttonStyle = {{backgroundColor: 'red'}}
            />
          </View>
        </View>
        
        <View style = {{paddingTop: 5}}>
          <Divider style = {styles.divider} />
        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    mainView: {
      flex: 1
    },
    idRow: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 10
     
    },
    designerInfo: {
      alignSelf: 'center',
      fontSize: 20,
      paddingLeft: 10
    },
    divider: {
      height: 2,
      backgroundColor: 'black',
      
    },

});
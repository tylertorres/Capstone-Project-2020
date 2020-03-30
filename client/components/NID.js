import React, {Component} from 'react';
import { Divider, Avatar, Rating, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Rating, AirbnbRating } from 'react-native-ratings';
import {StyleSheet, View, Text, Image, ImageBackground, TextInput,StatusBar, TouchableOpacity} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';



function NID({ navigation }) {
    return (    
  
  <View style = {styles.designers}>
    
    <Text style = {styles.findID}> Find a Designer </Text>

    <Divider style = {styles.divider} />

    <TouchableOpacity style = {{flexDirection: 'row'}}> 
      <Avatar 
        size = "large"
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
      
      <View> 
        <Text style = {styles.designerName}> Jane Doe</Text>
        <Text style = {styles.businessName}> Doe Inc. </Text>
      </View>
      
      
      <Rating
        type = 'custom'
        imageSize = {35}
        ratingColor = '#3498db'
        ratingBackgroundColor= 'transparent'
        readonly
        startingValue={3}
        style = {{justifyContent: 'center', paddingLeft: 30}}  />

    </TouchableOpacity>

    <Divider style = {styles.divider} />
  
    <TouchableOpacity style = {{flexDirection: 'row'}}> 
      <Avatar 
        size = "large"
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
      
      <View> 
        <Text style = {styles.designerName}> Jane Doe</Text>
        <Text style = {styles.businessName}> Doe Inc. </Text>
      </View>

      <Rating
        type = 'custom'
        imageSize = {35}
        ratingColor = '#3498db'
        ratingBackgroundColor= 'transparent'
        readonly
        startingValue={5}
        style = {{justifyContent: 'center', paddingLeft: 30}}  />
    </TouchableOpacity>

    <Divider style = {styles.divider} />

      <TouchableOpacity style = {{flexDirection: 'row'}}> 
      <Avatar 
        size = "large"
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
      
      <View> 
        <Text style = {styles.designerName}> Jane Doe</Text>
        <Text style = {styles.businessName}> Doe Inc. </Text>
      </View>

      <Rating
        type = 'custom'
        imageSize = {35}
        ratingColor = '#3498db'
        ratingBackgroundColor= 'transparent'
        readonly
        startingValue={2}
        style = {{justifyContent: 'center', paddingLeft: 30}}  />
    </TouchableOpacity>

    <Divider style = {styles.divider} />

    <TouchableOpacity style = {{flexDirection: 'row'}}> 
      <Avatar 
        size = "large"
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
      
      <View> 
        <Text style = {styles.designerName}> Jane Doe</Text>
        <Text style = {styles.businessName}> Doe Inc. </Text>
      </View>

      <Rating
        type = 'custom'
        imageSize = {35}
        ratingColor = '#3498db'
        ratingBackgroundColor= 'transparent'
        readonly
        startingValue={3}
        style = {{justifyContent: 'center', paddingLeft: 30}}  />
    </TouchableOpacity>

    <Divider style = {styles.divider} />

    <TouchableOpacity style = {{flexDirection: 'row'}}> 
      <Avatar 
        size = "large"
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
      
      <View> 
        <Text style = {styles.designerName}> Jane Doe</Text>
        <Text style = {styles.businessName}> Doe Inc. </Text>
      </View>

      <Rating
        type = 'custom'
        imageSize = {35}
        ratingColor = '#3498db'
        ratingBackgroundColor= 'transparent'
        readonly
        startingValue={4}
        style = {{justifyContent: 'center', paddingLeft: 30}}  />
    </TouchableOpacity>

    <Divider style = {styles.divider} />

    <TouchableOpacity style = {{flexDirection: 'row'}}> 
      <Avatar 
        size = "large"
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
      
      <View> 
        <Text style = {styles.designerName}> Jane Doe</Text>
        <Text style = {styles.businessName}> Doe Inc. </Text>
      </View>

      <Rating
        type = 'custom'
        imageSize = {35}
        ratingColor = '#3498db'
        ratingBackgroundColor= 'transparent'
        readonly
        startingValue={2}
        style = {{justifyContent: 'center', paddingLeft: 30}}  />
    </TouchableOpacity>

    <Divider style = {styles.divider} />

    <TouchableOpacity style = {{flexDirection: 'row'}}> 
      <Avatar 
        size = "large"
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
      
      <View> 
        <Text style = {styles.designerName}> Jane Doe</Text>
        <Text style = {styles.businessName}> Doe Inc. </Text>
      </View>

      <Rating
        type = 'custom'
        imageSize = {35}
        ratingColor = '#3498db'
        ratingBackgroundColor= 'transparent'
        readonly
        startingValue={3}
        style = {{justifyContent: 'center', paddingLeft: 30}}  />
    </TouchableOpacity>

    <Divider style = {styles.divider} />

    <TouchableOpacity style = {{alignSelf: 'center'}} onPress={() => navigation.popToTop()}>
    <Icon
      reverse
      name='comment'
      size = {65}
      type='ionicon'
      color='blue' />
    </TouchableOpacity>
    
  </View>      

    );
  }

  const styles = StyleSheet.create({
    mainview: {
      flex: 1,
    },
    findID: {
      fontFamily: 'monospace',
      fontSize: 25,
      textAlign: 'center',
      padding: 20
    },
    imagebutton: {
      borderWidth: 3,
      borderColor:'rgba(0,0,0,0.2)',
      width: 90,
      height: 90,
      backgroundColor:'#fff',
      borderRadius: 50,
    },
    designers: {
      flex: 1,
      justifyContent:'space-around',
      paddingLeft: 10,
      backgroundColor: 'white'
    },
    divider: {
      height: 3,
      backgroundColor: 'black',
    },
    designerName: {
      alignSelf: 'center',
      fontSize: 20,
      paddingLeft: 10
    },
    businessName: {
      alignSelf: 'center',
      fontSize: 20,
      paddingLeft: 10
    }

  });

  export default NID;
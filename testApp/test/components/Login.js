import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TextInput} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

const linkToImage = 'https://ksassets.timeincuk.net/wp/uploads/sites/56/2018/06/living-room-wallpaper-ideas-map.jpg';

function Login({navigation}) {
        
    return (
            <ImageBackground source = {{uri: linkToImage}} style = {styles.logo}>
                
                <View>
                    <Text style = {styles.mainName}>INDESYN</Text>
                </View>
                
                <View style ={styles.formContainer}>
                <GoogleSigninButton style={styles.buttonContainer} 
                    onPress = {() => navigation.navigate('NID')}/>
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
        paddingTop: 50
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
        width: 200,
        height: 50,
    }

});

export default Login;
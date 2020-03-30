import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';


export default class LoginForm extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                placeholder='Username'
                style = {styles.input} />
                <TextInput 
                placeholder='Password'
                style = {styles.input} />
            </View>
       
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-end',
        padding: 20,
    },
    input: {
        height: 50,
        backgroundColor: 'white',
        marginBottom: 40,


        
    }
});
import React, { Component, useState } from 'react';
import { Avatar, Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import axios from 'axios';

//try putting the enter name, enter email, and picker in a view then the touchopa in a view and move to bottom

export default function profileSetup({ navigation }) {
  const [name, setName] = useState('default');
  const [email, setEmail] = useState('default');
  const [selectedValue, setSelectedValue] = useState('default');

  function backend() {}

  function combined() {
    backend();
    selectedValue === 'id' ? navigation.navigate('NID') : navigation.navigate('ID');
  }

  return (
    <View style={styles.mainView}>
      <Text style={styles.enterName}>Enter Name</Text>

      <TextInput
        style={styles.nameField}
        placeholder='e.g John Doe'
        onChangeText={(val) => setName(val)}
      />

      <Text style={styles.enterName}>Enter email</Text>

      <TextInput
        style={styles.nameField}
        placeholder='e.g example@gmail.com'
        keyboardType='email-address'
        onChangeText={(val) => setEmail(val)}
      />

      <Text style={styles.pickerText}>Please choose who you want to continue as</Text>

      <View style={{ alignSelf: 'center' }}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 25, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='User' value='id' />
          <Picker.Item label='Designer' value='nid' />
        </Picker>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={() => combined()}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterName: {
    padding: 8,
  },
  nameField: {
    borderWidth: 2,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
  },
  picker: {
    width: 10,
  },
  pickerText: {
    padding: 8,
  },
  continueButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#00BCD4',
    borderRadius: 30,
    borderColor: '#fff',
  },
  continueText: {
    marginLeft: 90,
    marginRight: 90,
  },
});

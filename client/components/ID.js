<<<<<<< HEAD
import React, { Component, useState } from "react";
import { Avatar, Button, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ImageStore,
  SafeAreaView,
} from "react-native";
//import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import { disableExpoCliLogging } from "expo/build/logs/Logs";

export default function ID({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { name } = route.params;
  const { uri } = route.params;
  const { id } = route.params;
  const empty = null;
  const type = id == "NID" ? true : false;
  const upload = <Text style={styles.upload}>Upload Photo</Text>;
  const button = (
    <Button
      onPress={() => navigation.navigate("Chat")}
      icon={
        <Icon reverse name="envelope-o" size={30} type="ionicon" color="blue" />
      }
      title="Connect"
      TouchableComponent={TouchableOpacity}
      titleStyle={{ paddingLeft: 10 }}
      buttonStyle={{ backgroundColor: "red" }}
    />
  );
  return (
    <View style={styles.mainView}>
      <View style={styles.idRow}>
        <Avatar
          size="large"
          containerStyle={{ borderWidth: 3 }}
          rounded
          source={{
            uri: uri,
          }}
        />

        <Text style={styles.designerInfo}>{name}</Text>

        <View
          style={{
            alignSelf: "center",
          }}
        >
          {type ? button : empty}
        </View>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.idIcons}>
        <TouchableOpacity>
          <Icon reverse name="comment" size={65} type="ionicon" color="blue" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon reverse name="comment" size={65} type="ionicon" color="blue" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon reverse name="comment" size={65} type="ionicon" color="blue" />
        </TouchableOpacity>
      </View>

      <Divider style={styles.divider} />
      <View style={styles.imageRow}>
        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 5 }}>
        <Divider style={styles.divider} />
      </View>

      <TouchableOpacity>{type ? empty : upload}</TouchableOpacity>

      <View style={{ paddingTop: 5 }}>
        <Divider style={styles.divider} />
      </View>

      <View style={styles.idRow}>
        <TouchableOpacity>
          <Icon reverse name="comment" size={65} type="ionicon" color="blue" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Chat")}
        >
          <Icon reverse name="comment" size={65} type="ionicon" color="blue" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon reverse name="comment" size={65} type="ionicon" color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  idRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  designerInfo: {
    fontSize: 20,
    alignSelf: "center",
  },
  divider: {
    height: 2,
    backgroundColor: "black",
  },
  imageRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  imageView: {
    width: 200,
    height: 200,
    margin: 10,
    borderWidth: 5,
    borderColor: "black",
    alignSelf: "center",
  },
  divider: {
    height: 3,
    backgroundColor: "black",
  },
  upload: {
    alignSelf: "center",
    padding: 10,
    fontSize: 30,
  },
  idIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
=======
import React, { Component, useState, Fragment } from 'react';
import { Avatar, Button, Divider, Icon } from 'react-native-elements';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ImageStore,
  SafeAreaView,
} from 'react-native';
//import { GoogleSignin, GoogleSigninButton, statusCodes} from 'react-native-google-signin';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

export default function ID({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { name } = route.params;
  const { uri } = route.params;
  const { id } = route.params;
  const empty = null;
  const type = id == 'NID' ? true : false;
  const upload = <Text style={styles.upload}>Upload Photo</Text>;
  const button = (
    <Button
      onPress={() => navigation.navigate('Chat')}
      icon={
        <Icon name='email-plus-outline' size={30} type='material-community' />
      }
      title='Connect'
      TouchableComponent={TouchableOpacity}
      titleStyle={{ paddingLeft: 10, color: 'black' }}
      buttonStyle={{
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 2,
      }}
    />
  );
  return (
    <View style={styles.mainView}>
      <View style={styles.idRow}>
        <Avatar
          size='large'
          containerStyle={{ borderWidth: 3 }}
          rounded
          source={{ uri: uri }}
        />

        <Text style={styles.designerInfo}>{name}</Text>

        <View
          style={{
            alignSelf: 'center',
          }}
        >
          {type ? button : empty}
        </View>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.idIcons}>
        <TouchableOpacity>
          <Icon
            name='briefcase-search-outline'
            size={35}
            type='material-community'
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name='account' size={35} type='material-community' />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name='comment-text-multiple-outline'
            size={35}
            type='material-community'
          />
        </TouchableOpacity>
      </View>

      <Divider style={styles.divider} />
      <View style={styles.imageRow}>
        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imageView}
            source={{
              uri:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJZOIUT88EVc%2Fhqdefault.jpg&f=1&nofb=1',
            }}
          />
        </TouchableOpacity>
      </View>

      {!type && (
        <View style={{ paddingTop: 5 }}>
          <Divider style={styles.divider} />
        </View>
      )}

      <TouchableOpacity>{type ? empty : upload}</TouchableOpacity>

      <Divider style={styles.divider} />

      <SafeAreaView style={styles.bottomIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('NID')}>
          <Icon name='account-multiple' type='material-community' size={50} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.designerNavigation}
          onPress={() => navigation.navigate('Chat')}
        >
          <Icon name='sc-telegram' size={50} type='evilicon' />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name='flare' size={50} type='material-community' />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  idIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  designerInfo: {
    fontSize: 25,
    alignSelf: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: 'black',
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  imageView: {
    width: 150,
    height: 150,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignSelf: 'center',
  },
  divider: {
    height: 3,
    backgroundColor: 'black',
  },
  upload: {
    alignSelf: 'center',
    fontSize: 30,
  },
  idRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  test: {
    justifyContent: 'space-between',
  },
});
>>>>>>> 8b1c73ff3ca8d349e079978e221baa99643a87d1

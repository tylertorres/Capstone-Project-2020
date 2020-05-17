import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { render } from 'react-dom';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Login from './components/Login';
import NID from './components/NID';
import ID from './components/ID';
import profileSetup from './components/profileSetup';
import Chat from './components/Chat';
import Reviews from './components/Reviews';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Request from './components/Request';
import Review from './components/Review';
import Test from './components/test';
import UserState from './components/context/user/UserState';
import { IconButton } from 'react-native-paper';
import viewingID from './components/viewingID';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserState>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'teal',
          }}
        >
          <Tab.Screen
            name='Connect'
            component={MainScreens}
            options={{
              tabBarIcon: (focused, color, size) => <IconButton icon='account-group' color={color} size={size} />,
            }}
            listeners={{
              tabPress: e => {
                e.preventDefault();
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserState>
  );
}

const MainStack = createStackNavigator();
function MainScreens() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Login' component={Login} options={{ headerShown: false }} navigationOptions />
      <MainStack.Screen name='profileSetup' component={profileSetup} options={{ headerShown: false }} />
      <MainStack.Screen name='Find a Designer' component={NID} options={{ headerLeft: () => null }} />
      <MainStack.Screen name='Request' component={Request} />
      <MainStack.Screen name='Review' component={Review} />
      <MainStack.Screen name='Chat' component={Chat} options={({ route }) => ({ title: route.params.name })} />
      <MainStack.Screen name='viewingID' component={viewingID} />
    </MainStack.Navigator>
  );
}

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Login'} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={'NID'} component={NID} options={{ headerShown: false }} />
      <Stack.Screen name={'ID'} component={ID} options={{ title: 'Profile' }} />
      <Stack.Screen name={'profileSetup'} component={profileSetup} options={{ headerShown: false }} />
      <Stack.Screen name={'Chat'} component={Chat} options={({ route }) => ({ title: route.params.name })} />
      <Stack.Screen name={'Request'} component={Request} />
      <Stack.Screen name={'Review'} component={Review} />
    </Stack.Navigator>
  ); */
/* } */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={'NID'} component={NID} options={{ headerShown: false }} />
        <Stack.Screen name={'ID'} component={ID} options={{ title: 'Profile' }} />
        <Stack.Screen name={'profileSetup'} component={profileSetup} options={{ headerShown: false }} />
        <Stack.Screen name={'Chat'} component={Chat} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name={'Reviews'} component={Reviews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* 
const MainStack = createStackNavigator();

function MainScreens() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='NID' component={NID} options={{ headerShown: false }} />
      <MainStack.Screen name='ID' component={ID} />
      <MainStack.Screen name={'Request'} component={Request} />
      <MainStack.Screen name={'Review'} component={Review} />
      <Stack.Screen name={'Chat'} component={Chat} options={({ route }) => ({ title: route.params.name })} />
    </MainStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: 'teal' }}>
      <Tab.Screen
        name='Connect'
        component={MainScreens}
        options={{
          tabBarIcon: (focused, color, size) => <IconButton icon='account-group' color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
 */
/* return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={'NID'} component={NID} options={{ headerShown: false }} />
        <Stack.Screen name={'ID'} component={ID} options={{ title: 'Profile' }} />
        <Stack.Screen name={'profileSetup'} component={profileSetup} options={{ headerShown: false }} />
        <Stack.Screen name={'Chat'} component={Chat} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name={'Request'} component={Request} />
        <Stack.Screen name={'Review'} component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  ); */

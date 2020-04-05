import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "./components/Login";
import { render } from "react-dom";
import { Header } from "react-native/Libraries/NewAppScreen";
import NID from "./components/NID";
import ID from "./components/ID";
import profileSetup from "./components/profileSetup";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"NID"}
          component={NID}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"ID"}
          component={ID}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name={"profileSetup"}
          component={profileSetup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

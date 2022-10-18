import React,{useState} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import FormScreen from './app/screens/FormScreen';
import ViewScreen from './app/screens/ViewScreen';
import * as Yup from 'yup'


const Stack = createStackNavigator();

const StackNavigator = ()=>(
  <Stack.Navigator>
      <Stack.Screen name="First Page" component={WelcomeScreen}/>
      <Stack.Screen name="Second Page" component={FormScreen}/>
      <Stack.Screen name="Third Page" component={ViewScreen}/>
  </Stack.Navigator>
);

export default function App() 
{   

    return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    );
}

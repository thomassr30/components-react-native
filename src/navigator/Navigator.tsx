import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Animation101Screen from '../screens/Animation101Screen';
import HomeScreen from '../screens/HomeScreen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Animation101Screen' component={Animation101Screen} />
        <Stack.Screen name='SwitchScreen' component={SwitchScreen} />
        <Stack.Screen name='AlertScreen' component={AlertScreen} />
    </Stack.Navigator>
  )
}

export default Navigator
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Animation101Screen from '../screens/Animation101Screen';
import HomeScreen from '../screens/HomeScreen';
import Animation102Screen from '../screens/Animation102Screen';

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
        <Stack.Screen name='Animation102Screen' component={Animation102Screen} />
    </Stack.Navigator>
  )
}

export default Navigator
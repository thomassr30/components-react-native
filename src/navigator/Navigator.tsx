import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default Navigator
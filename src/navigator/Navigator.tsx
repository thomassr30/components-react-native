import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Animation101Screen from '../screens/Animation101Screen';
import HomeScreen from '../screens/HomeScreen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';

const Stack = createStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: 'white'
            }
        }}
    >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Animation101Screen' component={Animation101Screen} />
        <Stack.Screen name='SwitchScreen' component={SwitchScreen} />
        <Stack.Screen name='AlertScreen' component={AlertScreen} />
        <Stack.Screen name='TextInputScreen' component={TextInputScreen} />
        <Stack.Screen name='PullToRefreshScreen' component={PullToRefreshScreen} />
    </Stack.Navigator>
  )
}

export default Navigator
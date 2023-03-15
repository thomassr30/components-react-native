import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const HomeScreen = () => {
  return (
    <View>
        <Text>HomeScreen</Text>
        <Icon 
          name='star-outline'
          size={30}
          color="black"
        />
    </View>
  )
}

export default HomeScreen
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { ImenuItem } from '../interfaces/menuItem.interface';

const menuItem = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen'
  },
]

const HomeScreen = () => {

  const renderMenuItem = (menuITem: ImenuItem) => {
    return (
      <View>
        <Text>{menuITem.name} - {menuITem.icon}</Text>
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <FlatList 
        data={menuItem}
        renderItem={({item, index}) => renderMenuItem(item)}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

export default HomeScreen
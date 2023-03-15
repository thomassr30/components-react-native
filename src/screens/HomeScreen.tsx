import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import { ImenuItem } from '../interfaces/menuItem.interface';
import {styles} from '../theme/appTheme'

const menuItem = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen'
  },
]

const HomeScreen = () => {

  const {top} = useSafeAreaInsets()

  const renderMenuItem = (menuITem: ImenuItem) => {
    return (
      <View>
        <Text>{menuITem.name} - {menuITem.icon}</Text>
      </View>
    )
  }

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones de menú</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return (
      <View 
        style={{
          borderBottomWidth: 1,
          opacity: 0.5,
          marginVertical: 5
        }}
      />
    )
  }

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList 
        data={menuItem}
        renderItem={({item, index}) => renderMenuItem(item)}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}

export default HomeScreen
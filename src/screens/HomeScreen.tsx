import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import FlatListMenuItem from '../components/FlatListMenuItem';
import { ImenuItem } from '../interfaces/menuItem.interface';
import {styles} from '../theme/appTheme'

const menuItem: ImenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  },
]

const HomeScreen = () => {

  const {top} = useSafeAreaInsets()

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
        renderItem={({item, index}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}

export default HomeScreen
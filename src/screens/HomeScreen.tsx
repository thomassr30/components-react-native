import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import FlatListMenuItem from '../components/FlatListMenuItem';
import {styles} from '../theme/appTheme'
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';


const HomeScreen = () => {

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
        data={menuItems}
        renderItem={({item, index}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<HeaderTitle title='Opciones de menú' />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}

export default HomeScreen
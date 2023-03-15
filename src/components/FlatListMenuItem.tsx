import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native'
import { ImenuItem } from '../interfaces/menuItem.interface'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props{
    menuItem: ImenuItem
}

const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component as never)}
        >
            <View style={styles.container}>
                <Icon 
                    name={menuItem.icon}
                    color="gray"
                    size={23}
                />
            <Text style={styles.itemText}>{menuItem.name}</Text>
            <View style={{flex: 1}} />
            <Icon 
                    name="chevron-forward-outline"
                    color="gray"
                    size={23}
                />
            </View>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 15,
        fontSize: 18
    }
})

export default FlatListMenuItem
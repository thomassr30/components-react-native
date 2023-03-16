import React, { useState } from 'react'
import { Platform, Switch, Text, View, StyleSheet } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';

const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const {isActive, isHungry, isHappy} = state

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

  return (
    <View style={{marginHorizontal: 20}}>
        <HeaderTitle title='Switch' />
        <View style={styles.switchRow}>
            <Text style={styles.switchText}>IsActive</Text>
            <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
        </View>

        <View style={styles.switchRow}>
            <Text style={styles.switchText}>IsHungry</Text>
            <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
        </View>

        <View style={styles.switchRow}>
            <Text style={styles.switchText}>IsHappy</Text>
            <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
        </View>
        

        <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    }
})

export default SwitchScreen
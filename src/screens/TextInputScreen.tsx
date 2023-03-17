import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native';
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='TextInput' />

        <TextInput 
          style={stylesInput.inputStyle}
        />

    </View>
  )
}

const stylesInput = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10
  }
})

export default TextInputScreen
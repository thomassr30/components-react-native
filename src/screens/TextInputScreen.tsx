import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native';
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    telefono: '',
  })

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='TextInput' />

        <TextInput 
          style={stylesInput.inputStyle}
          placeholder="Nombre"
          autoCorrect={false}
          autoCapitalize="words"
          onChangeText={(value) => onChange(value, 'name')}
        />

        <TextInput 
          style={stylesInput.inputStyle}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(value) => onChange(value, 'email')}
          keyboardType="email-address"
        />

        <TextInput 
          style={stylesInput.inputStyle}
          placeholder="Telefono"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'telefono')}
          keyboardType="numeric"
        />

        <HeaderTitle title={JSON.stringify(form, null, 3)} />

    </View>
  )
}

const stylesInput = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10
  }
})

export default TextInputScreen
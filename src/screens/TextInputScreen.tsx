import React, { useState } from 'react'
import { TextInput, 
          View, 
          StyleSheet,
          ScrollView, 
          Text
        } from 'react-native';
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

const TextInputScreen = () => {

  const {form, onChange, isSuscribed} = useForm({
    name: '',
    email: '',
    telefono: '',
    isSuscribed: false
  })

  return (
        <ScrollView>
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

        <View style={stylesInput.switchRow}>
            <Text style={stylesInput.switchText}>Suscribirse</Text>
            <CustomSwitch isOn={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')} />
        </View>

        <HeaderTitle title={JSON.stringify(form, null, 3)} />

        <HeaderTitle title={JSON.stringify(form, null, 3)} />

        <TextInput 
          style={stylesInput.inputStyle}
          placeholder="Telefono"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'telefono')}
          keyboardType="numeric"
        />
        </View>

        <View style={{height: 100}} />
        </ScrollView>
    
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
  },
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

export default TextInputScreen
import React from 'react'
import { Alert } from 'react-native';
import { Button, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Cuerpo de la alerta",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel clicked'),
                    style: 'cancel'
                },
                {
                    text: 'ok',
                    onPress: () => console.log('OK clicked')
                }
            ]
        )
    }

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Alert' />
        <Button
            title='Mostrar alerta'
            onPress={showAlert}
        />
    </View>
  )
}

export default AlertScreen
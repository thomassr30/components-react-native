import React from 'react'
import { Button, Modal, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { useState } from 'react';

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

  return (
    <View>
        <HeaderTitle title='Modal' />

        <Button 
            title='Abrir modal'
            onPress={() => setIsVisible(true)}
        />

        <Modal
            animationType='fade'
            visible={isVisible}
            transparent
        >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'center',
                alignItems: 'center', 
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: 200,
                    height: 200,
                    justifyContent: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 10
                    },
                    shadowOpacity: 0.25,
                    elevation: 10
                }}>
                    <Text>Modal</Text>
                    <Text>Cuerpo del modal</Text>
                    <Button 
                        title='Cerrar'
                        onPress={() => setIsVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default ModalScreen
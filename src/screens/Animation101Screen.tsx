import React, { useRef } from 'react'
import { Easing } from 'react-native';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

const Animation101Screen = () => {

    const {opacity, top, fadeIn, fadeOut} = useAnimation()

  return (
    <View style={styles.container}>
        <Animated.View style={{
            ...styles.purpleBox, 
            opacity: opacity, 
            marginBottom: 20, 
            transform: [{
                translateY: top
            }]
            }} />
        <Button 
            title='FadeIn'
            onPress={fadeIn}
        />
        <Button 
            title='FadeOut'
            onPress={fadeOut}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
})

export default Animation101Screen
import React from 'react'
import { ScrollView, View, RefreshControl } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

const PullToRefreshScreen = () => {

    const [refreshing, setrefreshing] = useState(false)

    const onRefresh = () => {
        setrefreshing(true)

        setTimeout(() => {
            console.log('Termino de cargar')
            setrefreshing(false)
        }, 1500);
    }

  return (
    <ScrollView
        refreshControl={
            <RefreshControl 
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }
    >
        <View style={styles.globalMargin}>
            < HeaderTitle title='Pull Refresh' />
        </View>
    </ScrollView>
  )
}

export default PullToRefreshScreen
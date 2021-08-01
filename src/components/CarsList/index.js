import React from 'react'
import { FlatList, View } from 'react-native';
import styles from './styles';
import cars from '../../../cars';
import CarItem from '../CarItem';

const index = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                />
                }
                keyExtractor={item => item.title}
            />
        </View>
    )
}

export default index

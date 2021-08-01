import React from 'react'
import { FlatList, View, Dimensions } from 'react-native';
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
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default index

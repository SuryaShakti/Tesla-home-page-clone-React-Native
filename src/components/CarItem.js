import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import StyledButton from './StyledButton';

const CarItem = ({ image, title, subtitle }) => {

    console.log(image, title, '-----------------------');

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    text={'Custom Order'}
                    type={'primary'}
                    onPress={() => {
                        console.warn('Custom Order was Pressed')
                    }}
                />
                <StyledButton
                    text={'Exsting Inventory'}
                    type={'secondary'}
                    onPress={() => {
                        console.warn('Existing Inventory was Pressed')
                    }}
                />
            </View>
        </View>
    )
}

export default CarItem

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover'
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }
});

import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = ({text, type, onPress}) => {

    const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
    const textColor =  type === 'primary' ? '#ffffffa6' : '#171a20cc'

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton

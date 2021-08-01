import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        position: 'absolute',
        top: 20,
        zIndex: 999,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    logo:{
        resizeMode: 'contain',
        width: 100,
        height: 25
    },
    menu:{
        resizeMode: 'contain',
        width: 25,
        height: 25
    }
});

export default styles;
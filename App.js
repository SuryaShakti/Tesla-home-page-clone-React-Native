import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './src/components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>

      <CarItem
        image={require('./assets/images/ModelS.jpeg')}
        title={'Model S'}
        subtitle={'starting at $69,420'}
      />

      <CarItem
        image={require('./assets/images/ModelX.jpeg')}
        title={'Model X'}
        subtitle={'starting at $69,420'}
      />

      <CarItem
        image={require('./assets/images/Model3.jpeg')}
        title={'Model 3'}
        subtitle={'starting at $69,420'}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover'
  },
  carContainer: {
    width: '100%',
    height: '100%'
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
  }
});

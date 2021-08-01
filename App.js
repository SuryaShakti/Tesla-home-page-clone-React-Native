import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './src/components/CarItem';
import CarsList from './src/components/CarsList/index';

export default function App() {
  return (
    <View style={styles.container}>

      <CarsList />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

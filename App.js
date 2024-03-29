import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header/index';
import CarsList from './src/components/CarsList/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
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

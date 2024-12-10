import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export const LoadingSpinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

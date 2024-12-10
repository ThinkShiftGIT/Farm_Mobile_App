import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Welcome to Farm Management</Text>
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Animals')} 
          style={styles.button}
        >
          Animals
        </Button>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('HealthRecords')} 
          style={styles.button}
        >
          Health Records
        </Button>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Production')} 
          style={styles.button}
        >
          Production
        </Button>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Inventory')} 
          style={styles.button}
        >
          Inventory
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 24,
    width: '100%',
    maxWidth: 300,
  },
  button: {
    marginVertical: 8,
  },
});

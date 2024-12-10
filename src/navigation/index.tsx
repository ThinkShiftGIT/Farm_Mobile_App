import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import AnimalsScreen from '../screens/AnimalsScreen';
import InventoryScreen from '../screens/InventoryScreen';
import TasksScreen from '../screens/TasksScreen';
import WeatherScreen from '../screens/WeatherScreen';
import ReportsScreen from '../screens/ReportsScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Farm Management',
          }}
        />
        <Stack.Screen 
          name="Animals" 
          component={AnimalsScreen}
          options={{
            title: 'Animals',
          }}
        />
        <Stack.Screen 
          name="Inventory" 
          component={InventoryScreen}
          options={{
            title: 'Inventory',
          }}
        />
        <Stack.Screen 
          name="Tasks" 
          component={TasksScreen}
          options={{
            title: 'Tasks',
          }}
        />
        <Stack.Screen 
          name="Weather" 
          component={WeatherScreen}
          options={{
            title: 'Weather',
          }}
        />
        <Stack.Screen 
          name="Reports" 
          component={ReportsScreen}
          options={{
            title: 'Reports',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

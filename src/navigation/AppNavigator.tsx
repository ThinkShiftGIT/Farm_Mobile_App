import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import AnimalScreen from '../screens/AnimalScreen';
import HealthRecordScreen from '../screens/HealthRecordScreen';
import ProductionScreen from '../screens/ProductionScreen';
import InventoryScreen from '../screens/InventoryScreen';
import TaskScreen from '../screens/TaskScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.outline,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Animals"
        component={AnimalScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="cow" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Health"
        component={HealthRecordScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="medical-bag" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Production"
        component={ProductionScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="chart-bar" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="package-variant" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="clipboard-check" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, FAB, Card, Button, useTheme } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { Animal } from '../types';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { animalService } from '../api/services/animalService';
import { setAnimals } from '../store/slices/animalSlice';

export default function AnimalScreen({ navigation }: any) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const animals = useAppSelector((state) => state.animals.animals);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnimals();
  }, []);

  const loadAnimals = async () => {
    try {
      const response = await animalService.getAll();
      dispatch(setAnimals(response.data));
    } catch (error) {
      console.error('Error loading animals:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  const renderAnimalCard = ({ item }: { item: Animal }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('AnimalDetails', { id: item.id })}>
      <Card.Content>
        <Text variant="titleLarge">{item.name}</Text>
        <Text variant="bodyMedium">Type: {item.type}</Text>
        <Text variant="bodyMedium">Status: {item.status}</Text>
        <Text variant="bodyMedium">Health: {item.healthStatus}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        renderItem={renderAnimalCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('AddAnimal')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

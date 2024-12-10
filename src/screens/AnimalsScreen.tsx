import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Card, Button, FAB, useTheme, ActivityIndicator } from 'react-native-paper';
import { useFarm } from '../hooks/useFarm';
import { Animal } from '../types';

export default function AnimalsScreen() {
  const theme = useTheme();
  const { 
    animals, 
    loading: { animals: loading }, 
    error: { animals: error },
    loadAnimals 
  } = useFarm();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await loadAnimals();
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadAnimals();
  }, []);

  const renderAnimalCard = ({ item }: { item: Animal }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium">{item.name}</Text>
        <Text variant="bodyMedium">Type: {item.type}</Text>
        {item.breed && <Text variant="bodyMedium">Breed: {item.breed}</Text>}
        <Text variant="bodyMedium">Status: {item.status}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => {}}>Edit</Button>
        <Button onPress={() => {}}>Health Records</Button>
      </Card.Actions>
    </Card>
  );

  if (loading && !refreshing) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text variant="bodyLarge" style={styles.error}>{error}</Text>
        <Button mode="contained" onPress={loadAnimals} style={styles.retryButton}>
          Retry
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        renderItem={renderAnimalCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
  error: {
    color: 'red',
    marginBottom: 16,
  },
  retryButton: {
    marginTop: 8,
  },
});

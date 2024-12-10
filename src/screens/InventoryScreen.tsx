import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, FAB, Card, useTheme, Chip } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { Inventory } from '../types';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { inventoryService } from '../api/services/inventoryService';
import { setItems } from '../store/slices/inventorySlice';

export default function InventoryScreen({ navigation }: any) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.inventory.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const response = await inventoryService.getAll();
      dispatch(setItems(response.data));
    } catch (error) {
      console.error('Error loading inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  const renderInventoryCard = ({ item }: { item: Inventory }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('InventoryDetails', { id: item.id })}>
      <Card.Content>
        <Text variant="titleLarge">{item.name}</Text>
        <View style={styles.chipContainer}>
          <Chip>{item.category}</Chip>
        </View>
        <Text variant="bodyMedium">Quantity: {item.quantity} {item.unit}</Text>
        {item.minQuantity && (
          <Text variant="bodyMedium">
            Minimum Quantity: {item.minQuantity} {item.unit}
          </Text>
        )}
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderInventoryCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('AddInventory')}
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
  chipContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

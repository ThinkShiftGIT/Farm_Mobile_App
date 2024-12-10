import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, FAB, Card, useTheme } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { Production } from '../types';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { productionService } from '../api/services/productionService';
import { setProductions } from '../store/slices/productionSlice';
import { formatDate } from '../utils/dateUtils';

export default function ProductionScreen({ navigation }: any) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const productions = useAppSelector((state) => state.productions.productions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProductions();
  }, []);

  const loadProductions = async () => {
    try {
      const response = await productionService.getAll();
      dispatch(setProductions(response.data));
    } catch (error) {
      console.error('Error loading productions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  const renderProductionCard = ({ item }: { item: Production }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('ProductionDetails', { id: item.id })}>
      <Card.Content>
        <Text variant="titleLarge">{item.type}</Text>
        <Text variant="bodyMedium">Date: {formatDate(item.date)}</Text>
        <Text variant="bodyMedium">Quantity: {item.quantity} {item.unit}</Text>
        {item.notes && <Text variant="bodyMedium">Notes: {item.notes}</Text>}
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productions}
        renderItem={renderProductionCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('AddProduction')}
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

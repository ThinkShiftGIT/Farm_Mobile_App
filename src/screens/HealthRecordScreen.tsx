import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, FAB, Card, useTheme } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { HealthRecord } from '../types';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { healthRecordService } from '../api/services/healthRecordService';
import { setRecords } from '../store/slices/healthRecordSlice';
import { formatDate } from '../utils/dateUtils';

export default function HealthRecordScreen({ navigation }: any) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const records = useAppSelector((state) => state.healthRecords.records);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    try {
      const response = await healthRecordService.getAll();
      dispatch(setRecords(response.data));
    } catch (error) {
      console.error('Error loading health records:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  const renderRecordCard = ({ item }: { item: HealthRecord }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('HealthRecordDetails', { id: item.id })}>
      <Card.Content>
        <Text variant="titleLarge">{item.type}</Text>
        <Text variant="bodyMedium">Date: {formatDate(item.date)}</Text>
        <Text variant="bodyMedium">Description: {item.description}</Text>
        {item.veterinarian && (
          <Text variant="bodyMedium">Veterinarian: {item.veterinarian}</Text>
        )}
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        renderItem={renderRecordCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('AddHealthRecord')}
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

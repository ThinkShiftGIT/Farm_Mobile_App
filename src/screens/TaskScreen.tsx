import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, FAB, Card, useTheme, Chip } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { Task } from '../types';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { taskService } from '../api/services/taskService';
import { setTasks } from '../store/slices/taskSlice';
import { formatDate } from '../utils/dateUtils';

export default function TaskScreen({ navigation }: any) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await taskService.getAll();
      dispatch(setTasks(response.data));
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return '#FF5252';
      case 'medium':
        return '#FFB74D';
      case 'low':
        return '#81C784';
      default:
        return '#757575';
    }
  };

  if (loading) return <LoadingSpinner />;

  const renderTaskCard = ({ item }: { item: Task }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('TaskDetails', { id: item.id })}>
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <View style={styles.chipContainer}>
          <Chip style={{ backgroundColor: getPriorityColor(item.priority) }}>
            {item.priority}
          </Chip>
          <Chip style={styles.statusChip}>{item.status}</Chip>
        </View>
        <Text variant="bodyMedium">Due: {formatDate(item.dueDate)}</Text>
        {item.description && (
          <Text variant="bodyMedium" numberOfLines={2}>
            {item.description}
          </Text>
        )}
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTaskCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('AddTask')}
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
    gap: 8,
  },
  statusChip: {
    marginLeft: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

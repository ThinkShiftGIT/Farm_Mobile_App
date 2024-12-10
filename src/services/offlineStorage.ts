import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { STORAGE_KEY } from '@env';

export interface OfflineAction {
  type: string;
  payload: any;
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  timestamp: number;
}

export const storeOfflineData = async (key: string, data: any) => {
  try {
    const storageKey = `${STORAGE_KEY}_${key}`;
    await AsyncStorage.setItem(storageKey, JSON.stringify(data));
  } catch (error) {
    console.error('Error storing offline data:', error);
  }
};

export const getOfflineData = async (key: string) => {
  try {
    const storageKey = `${STORAGE_KEY}_${key}`;
    const data = await AsyncStorage.getItem(storageKey);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting offline data:', error);
    return null;
  }
};

export const queueOfflineAction = async (action: OfflineAction) => {
  try {
    const queue = await getOfflineActions();
    queue.push(action);
    await AsyncStorage.setItem(`${STORAGE_KEY}_queue`, JSON.stringify(queue));
  } catch (error) {
    console.error('Error queuing offline action:', error);
  }
};

export const getOfflineActions = async (): Promise<OfflineAction[]> => {
  try {
    const queue = await AsyncStorage.getItem(`${STORAGE_KEY}_queue`);
    return queue ? JSON.parse(queue) : [];
  } catch (error) {
    console.error('Error getting offline actions:', error);
    return [];
  }
};

export const processOfflineActions = async () => {
  const isConnected = await NetInfo.fetch().then(state => state.isConnected);
  if (!isConnected) return;

  const queue = await getOfflineActions();
  if (queue.length === 0) return;

  for (const action of queue) {
    try {
      // Process the action using your API client
      // Remove from queue if successful
      const newQueue = queue.filter(a => a !== action);
      await AsyncStorage.setItem(`${STORAGE_KEY}_queue`, JSON.stringify(newQueue));
    } catch (error) {
      console.error('Error processing offline action:', error);
    }
  }
};

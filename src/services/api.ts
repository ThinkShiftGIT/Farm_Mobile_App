import axios from 'axios';
import { Animal, HealthRecord, Production, InventoryItem } from '../types/models';
import { API_URL } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const farmApi = {
  // Animals
  getAnimals: () => api.get<Animal[]>('/animals'),
  addAnimal: (animal: Omit<Animal, 'id'>) => api.post<Animal>('/animals', animal),
  updateAnimal: (animal: Animal) => api.put<Animal>(`/animals/${animal.id}`, animal),
  deleteAnimal: (id: string) => api.delete(`/animals/${id}`),

  // Health Records
  getHealthRecords: () => api.get<HealthRecord[]>('/health-records'),
  addHealthRecord: (record: Omit<HealthRecord, 'id'>) => 
    api.post<HealthRecord>('/health-records', record),
  
  // Production
  getProduction: () => api.get<Production[]>('/production'),
  addProduction: (production: Omit<Production, 'id'>) =>
    api.post<Production>('/production', production),
  
  // Inventory
  getInventory: () => api.get<InventoryItem[]>('/inventory'),
  updateInventory: (item: InventoryItem) =>
    api.put<InventoryItem>(`/inventory/${item.id}`, item),
};

// Add request interceptor for authentication
api.interceptors.request.use(
  async (config) => {
    // You can add auth token here from AsyncStorage
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

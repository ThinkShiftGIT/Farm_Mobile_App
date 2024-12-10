import { apiClient } from '../client';
import { Inventory } from '../../types';

export const inventoryService = {
  getAll: () => apiClient.get<Inventory[]>('/inventory'),
  getById: (id: string) => apiClient.get<Inventory>(`/inventory/${id}`),
  create: (data: Omit<Inventory, 'id'>) => apiClient.post<Inventory>('/inventory', data),
  update: (id: string, data: Partial<Inventory>) => apiClient.put<Inventory>(`/inventory/${id}`, data),
  delete: (id: string) => apiClient.delete(`/inventory/${id}`),
};

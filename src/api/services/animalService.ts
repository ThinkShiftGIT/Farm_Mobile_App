import { apiClient } from '../client';
import { Animal } from '../../types';

export const animalService = {
  getAll: () => apiClient.get<Animal[]>('/animals'),
  getById: (id: string) => apiClient.get<Animal>(`/animals/${id}`),
  create: (data: Omit<Animal, 'id'>) => apiClient.post<Animal>('/animals', data),
  update: (id: string, data: Partial<Animal>) => apiClient.put<Animal>(`/animals/${id}`, data),
  delete: (id: string) => apiClient.delete(`/animals/${id}`),
};

import { apiClient } from '../client';
import { Production } from '../../types';

export const productionService = {
  getAll: () => apiClient.get<Production[]>('/productions'),
  getById: (id: string) => apiClient.get<Production>(`/productions/${id}`),
  getByAnimalId: (animalId: string) => apiClient.get<Production[]>(`/productions/animal/${animalId}`),
  create: (data: Omit<Production, 'id'>) => apiClient.post<Production>('/productions', data),
  update: (id: string, data: Partial<Production>) => apiClient.put<Production>(`/productions/${id}`, data),
  delete: (id: string) => apiClient.delete(`/productions/${id}`),
};

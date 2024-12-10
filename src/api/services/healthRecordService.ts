import { apiClient } from '../client';
import { HealthRecord } from '../../types';

export const healthRecordService = {
  getAll: () => apiClient.get<HealthRecord[]>('/health-records'),
  getById: (id: string) => apiClient.get<HealthRecord>(`/health-records/${id}`),
  getByAnimalId: (animalId: string) => apiClient.get<HealthRecord[]>(`/health-records/animal/${animalId}`),
  create: (data: Omit<HealthRecord, 'id'>) => apiClient.post<HealthRecord>('/health-records', data),
  update: (id: string, data: Partial<HealthRecord>) => apiClient.put<HealthRecord>(`/health-records/${id}`, data),
  delete: (id: string) => apiClient.delete(`/health-records/${id}`),
};

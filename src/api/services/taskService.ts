import { apiClient } from '../client';
import { Task } from '../../types';

export const taskService = {
  getAll: () => apiClient.get<Task[]>('/tasks'),
  getById: (id: string) => apiClient.get<Task>(`/tasks/${id}`),
  create: (data: Omit<Task, 'id'>) => apiClient.post<Task>('/tasks', data),
  update: (id: string, data: Partial<Task>) => apiClient.put<Task>(`/tasks/${id}`, data),
  delete: (id: string) => apiClient.delete(`/tasks/${id}`),
};

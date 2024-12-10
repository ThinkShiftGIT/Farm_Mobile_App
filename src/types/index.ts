export interface Animal {
  id: string;
  name: string;
  type: string;
  breed?: string;
  birthDate?: Date;
  status: 'active' | 'sold' | 'deceased';
  healthStatus: 'healthy' | 'sick' | 'under_treatment';
}

export interface HealthRecord {
  id: string;
  animalId: string;
  date: Date;
  type: 'checkup' | 'treatment' | 'vaccination';
  description: string;
  veterinarian?: string;
  cost?: number;
}

export interface Production {
  id: string;
  date: Date;
  type: string;
  quantity: number;
  unit: string;
  animalId?: string;
  notes?: string;
}

export interface Inventory {
  id: string;
  name: string;
  category: 'feed' | 'medicine' | 'equipment' | 'other';
  quantity: number;
  unit: string;
  minQuantity?: number;
  cost?: number;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
}

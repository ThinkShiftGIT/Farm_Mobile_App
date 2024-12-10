export interface Animal {
  id: string;
  name: string;
  type: string;
  breed?: string;
  dateOfBirth?: Date;
  weight?: number;
  status: 'healthy' | 'sick' | 'treatment';
  notes?: string;
}

export interface HealthRecord {
  id: string;
  animalId: string;
  date: Date;
  type: 'vaccination' | 'treatment' | 'checkup';
  description: string;
  veterinarian?: string;
  medications?: string[];
  nextCheckupDate?: Date;
}

export interface Production {
  id: string;
  date: Date;
  type: 'milk' | 'eggs' | 'crops' | 'other';
  quantity: number;
  unit: string;
  notes?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'feed' | 'medicine' | 'equipment' | 'other';
  quantity: number;
  unit: string;
  minimumThreshold?: number;
  lastRestocked?: Date;
  notes?: string;
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Animal, HealthRecord, Production, InventoryItem } from '../../types/models';

interface FarmState {
  animals: Animal[];
  healthRecords: HealthRecord[];
  production: Production[];
  inventory: InventoryItem[];
  loading: boolean;
  error: string | null;
}

const initialState: FarmState = {
  animals: [],
  healthRecords: [],
  production: [],
  inventory: [],
  loading: false,
  error: null,
};

const farmSlice = createSlice({
  name: 'farm',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setAnimals: (state, action: PayloadAction<Animal[]>) => {
      state.animals = action.payload;
    },
    addAnimal: (state, action: PayloadAction<Animal>) => {
      state.animals.push(action.payload);
    },
    updateAnimal: (state, action: PayloadAction<Animal>) => {
      const index = state.animals.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.animals[index] = action.payload;
      }
    },
    setHealthRecords: (state, action: PayloadAction<HealthRecord[]>) => {
      state.healthRecords = action.payload;
    },
    addHealthRecord: (state, action: PayloadAction<HealthRecord>) => {
      state.healthRecords.push(action.payload);
    },
    setProduction: (state, action: PayloadAction<Production[]>) => {
      state.production = action.payload;
    },
    addProduction: (state, action: PayloadAction<Production>) => {
      state.production.push(action.payload);
    },
    setInventory: (state, action: PayloadAction<InventoryItem[]>) => {
      state.inventory = action.payload;
    },
    updateInventoryItem: (state, action: PayloadAction<InventoryItem>) => {
      const index = state.inventory.findIndex(i => i.id === action.payload.id);
      if (index !== -1) {
        state.inventory[index] = action.payload;
      }
    },
  },
});

export const {
  setLoading,
  setError,
  setAnimals,
  addAnimal,
  updateAnimal,
  setHealthRecords,
  addHealthRecord,
  setProduction,
  addProduction,
  setInventory,
  updateInventoryItem,
} = farmSlice.actions;

export default farmSlice.reducer;

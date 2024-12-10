import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Animal, HealthRecord, Production, InventoryItem } from '../types';
import { farmApi } from '../services/api';
import { 
  setAnimals, 
  addAnimal, 
  updateAnimal,
  deleteAnimal 
} from '../store/slices/animalSlice';
import {
  setHealthRecords,
  addHealthRecord
} from '../store/slices/healthRecordSlice';
import {
  setProduction,
  addProduction
} from '../store/slices/productionSlice';
import {
  setInventory,
  updateInventoryItem
} from '../store/slices/inventorySlice';

export const useFarm = () => {
  const dispatch = useDispatch();
  const {
    animals,
    loading: animalLoading,
    error: animalError
  } = useSelector((state: RootState) => state.animals);
  
  const {
    healthRecords,
    loading: healthLoading,
    error: healthError
  } = useSelector((state: RootState) => state.healthRecords);
  
  const {
    inventory,
    loading: inventoryLoading,
    error: inventoryError
  } = useSelector((state: RootState) => state.inventory);

  const {
    productions,
    loading: productionLoading,
    error: productionError
  } = useSelector((state: RootState) => state.productions);

  // Animals
  const loadAnimals = async () => {
    try {
      const response = await farmApi.getAnimals();
      dispatch(setAnimals(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const createAnimal = async (animal: Omit<Animal, 'id'>) => {
    try {
      const response = await farmApi.addAnimal(animal);
      dispatch(addAnimal(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateAnimalRecord = async (animal: Animal) => {
    try {
      const response = await farmApi.updateAnimal(animal);
      dispatch(updateAnimal(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Health Records
  const loadHealthRecords = async () => {
    try {
      const response = await farmApi.getHealthRecords();
      dispatch(setHealthRecords(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const createHealthRecord = async (record: Omit<HealthRecord, 'id'>) => {
    try {
      const response = await farmApi.addHealthRecord(record);
      dispatch(addHealthRecord(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Inventory
  const loadInventory = async () => {
    try {
      const response = await farmApi.getInventory();
      dispatch(setInventory(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateInventoryRecord = async (item: InventoryItem) => {
    try {
      const response = await farmApi.updateInventory(item);
      dispatch(updateInventoryItem(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    // State
    animals,
    healthRecords,
    inventory,
    productions,
    loading: {
      animals: animalLoading,
      health: healthLoading,
      inventory: inventoryLoading,
      production: productionLoading
    },
    error: {
      animals: animalError,
      health: healthError,
      inventory: inventoryError,
      production: productionError
    },
    // Methods
    loadAnimals,
    createAnimal,
    updateAnimalRecord,
    loadHealthRecords,
    createHealthRecord,
    loadInventory,
    updateInventoryRecord
  };
};

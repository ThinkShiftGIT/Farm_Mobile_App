import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './slices/animalSlice';
import healthRecordReducer from './slices/healthRecordSlice';
import productionReducer from './slices/productionSlice';
import inventoryReducer from './slices/inventorySlice';
import taskReducer from './slices/taskSlice';

export const store = configureStore({
  reducer: {
    animals: animalReducer,
    healthRecords: healthRecordReducer,
    productions: productionReducer,
    inventory: inventoryReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

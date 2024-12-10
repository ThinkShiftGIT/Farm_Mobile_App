import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Animal } from '../../types';

interface AnimalState {
  animals: Animal[];
  loading: boolean;
  error: string | null;
}

const initialState: AnimalState = {
  animals: [],
  loading: false,
  error: null,
};

const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
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
    deleteAnimal: (state, action: PayloadAction<string>) => {
      state.animals = state.animals.filter(a => a.id !== action.payload);
    },
  },
});

export const { setAnimals, addAnimal, updateAnimal, deleteAnimal } = animalSlice.actions;
export default animalSlice.reducer;

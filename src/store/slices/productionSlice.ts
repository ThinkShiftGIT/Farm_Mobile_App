import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Production } from '../../types';

interface ProductionState {
  productions: Production[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductionState = {
  productions: [],
  loading: false,
  error: null,
};

const productionSlice = createSlice({
  name: 'productions',
  initialState,
  reducers: {
    setProductions: (state, action: PayloadAction<Production[]>) => {
      state.productions = action.payload;
    },
    addProduction: (state, action: PayloadAction<Production>) => {
      state.productions.push(action.payload);
    },
    updateProduction: (state, action: PayloadAction<Production>) => {
      const index = state.productions.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.productions[index] = action.payload;
      }
    },
    deleteProduction: (state, action: PayloadAction<string>) => {
      state.productions = state.productions.filter(p => p.id !== action.payload);
    },
  },
});

export const { setProductions, addProduction, updateProduction, deleteProduction } = productionSlice.actions;
export default productionSlice.reducer;

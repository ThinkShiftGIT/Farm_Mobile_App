import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HealthRecord } from '../../types';

interface HealthRecordState {
  records: HealthRecord[];
  loading: boolean;
  error: string | null;
}

const initialState: HealthRecordState = {
  records: [],
  loading: false,
  error: null,
};

const healthRecordSlice = createSlice({
  name: 'healthRecords',
  initialState,
  reducers: {
    setRecords: (state, action: PayloadAction<HealthRecord[]>) => {
      state.records = action.payload;
    },
    addRecord: (state, action: PayloadAction<HealthRecord>) => {
      state.records.push(action.payload);
    },
    updateRecord: (state, action: PayloadAction<HealthRecord>) => {
      const index = state.records.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.records[index] = action.payload;
      }
    },
    deleteRecord: (state, action: PayloadAction<string>) => {
      state.records = state.records.filter(r => r.id !== action.payload);
    },
  },
});

export const { setRecords, addRecord, updateRecord, deleteRecord } = healthRecordSlice.actions;
export default healthRecordSlice.reducer;

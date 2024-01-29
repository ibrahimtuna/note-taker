import {configureStore} from '@reduxjs/toolkit';
import noteSlice from './slices/notes';

export const store = configureStore({
  reducer: {
    note: noteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

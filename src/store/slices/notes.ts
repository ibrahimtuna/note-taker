import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  title: '',
  body: '',
};
export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setTitle: (state, action: {payload: string}) => {
      state.title = action.payload;
    },
    setBody: (state, action: {payload: string}) => {
      state.body = action.payload;
    },
    deleteNote: state => {
      state.title = '';
      state.body = '';
    },
  },
});

export const {setTitle, setBody, deleteNote} = noteSlice.actions;

export default noteSlice.reducer;

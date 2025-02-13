// redux/editorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    clearContent: (state) => {
      state.content = '';
    },
  },
});

export const { setContent, clearContent } = editorSlice.actions;
export default editorSlice.reducer;

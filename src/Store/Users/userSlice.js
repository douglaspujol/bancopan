import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ['dougras', 'ryan'],
};

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = users.actions;

export default users.reducer;

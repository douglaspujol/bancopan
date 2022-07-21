import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  value: [],
  fetchInicial: false,
};

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchDataInitial: (state, action) => {
      const initialData = action.payload;
      for (let i = 0; i < initialData.length; i += 1) {
        initialData[i].id = uuidv4();
      }
      state.value = initialData;
      state.fetchInicial = true;
    },
    addUser: (state, action) => {
      const newUser = action.payload;
      newUser.id = uuidv4();
      state.value.push(newUser);
    },
    deleteUser: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    updateUser: (state, action) => {
      const index = state.value.findIndex(obj => obj.id === action.payload.id);
      state.value[index] = action.payload;
    },
  },
});

export const {
  addUser,
  deleteUser,
  updateUser,
  fetchDataInitial,
} = users.actions;

export default users.reducer;

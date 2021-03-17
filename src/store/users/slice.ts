import { createSlice } from "@reduxjs/toolkit";

import { IUsersStore } from "./types";

const slice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    searchUsers: [],
    searchByName: '',
    searchByEmail: '',
  } as IUsersStore,
  reducers: {
    setUsersSuccess: (state, action) => {
      state.users = action.payload.data;
    },
    setOnSearchByNameChange: (state, action) => {
      state.searchByName = action.payload.text;
      state.searchUsers = state.users.filter( (item) => item.name.toLowerCase().includes(state.searchByName.toLowerCase()));
    },
    setOnSearchByEmailChange: (state, action) => {
      state.searchByEmail = action.payload.text;
      state.searchUsers = state.users.filter( (item) => item.email.toLowerCase().includes(state.searchByEmail.toLowerCase()));
    },
    sortByName: (state) => {
      state.users.sort( (a, b) => a.name > b.name ? 1 : -1);
    },
    sortByEmail: (state) => {
      state.users.sort( (a, b) => a.email > b.email ? 1 : -1);
    },
  }
});

export const usersReducer = slice.reducer;

export default { ...slice.actions };

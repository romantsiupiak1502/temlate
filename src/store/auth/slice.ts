import { createSlice } from "@reduxjs/toolkit";

import { storageService } from '../../services';

import { IAuthStore } from "./types";

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    users: [],
    currentUser: {}
  } as IAuthStore,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload.currentUser;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    },
    registrationSuccess: (state, action) => {
      state.users = storageService.getItem('users');
      state.users.push({
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
        password: action.payload.password
      });
      storageService.setItem('users', state.users);
    },
  }
});

export const authReducer = slice.reducer;

export default { ...slice.actions };

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface NavBarState {
  value: boolean;
}

const initialState: NavBarState = {
  value: false,
};

export const navBarSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.value = true;
    },
    logout: state => {
      state.value = false;
    },
  },
});

export const { login, logout } = navBarSlice.actions;

export const selectAuth = (state: RootState) => state.auth.value;

export default navBarSlice.reducer;

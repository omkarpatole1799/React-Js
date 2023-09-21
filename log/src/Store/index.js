import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user_name'),
  tocken: localStorage.getItem('tocken'),
  isAuthenticated: false,
  userType: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {
    loadedUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;

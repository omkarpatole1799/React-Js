import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  tocken: localStorage.getItem('tocken'),
  isAuthenticated: false,
  user: null,
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
  reducer: { authReducer: authSlice.reducer },
});

export const authActions = authSlice.actions;

export default store;

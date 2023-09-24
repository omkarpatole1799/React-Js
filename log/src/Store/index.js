import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    user: localStorage.getItem('userName'),
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
        },
    },
});

const store = configureStore({
    reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;

export default store;

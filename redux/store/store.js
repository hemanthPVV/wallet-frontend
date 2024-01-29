import { configureStore, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import authReducer from '../reducers/authReducer';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null, // or an object representing the authenticated user
      isAuthenticated: false,
    },
    reducers: {
      loginUser: (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      },
      logoutUser: (state) => {
        state.user = null;
        state.isAuthenticated = false;
      },
    },
  });
  
  const rootReducer = {
    auth: authSlice.reducer,
    // Add other slices if you have them
  };
  
  const store = configureStore({
    reducer: rootReducer,
  });
  

export default store;
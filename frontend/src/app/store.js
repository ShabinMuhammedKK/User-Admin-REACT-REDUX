import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from './userAuthSlice'
import adminAuthReducer from './adminAuthSlice'


export const store = configureStore({
  reducer: {
    userAuth:userAuthReducer,
    adminAuth:adminAuthReducer
  }
});


export default store
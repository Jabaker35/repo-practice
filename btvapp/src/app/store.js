import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userslice.js';


export default configureStore({
  reducer: {
    user: userReducer,
  },
});
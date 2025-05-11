
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './skillsSlice';

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    // Add other reducers here as needed
  },
});



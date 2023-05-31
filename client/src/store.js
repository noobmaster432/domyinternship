import { configureStore } from '@reduxjs/toolkit';
import companySlice from './slices/companySlice';
import storySlice from './slices/storySlice';
import blogSlice from './slices/blogSlice';
import jobSlice from './slices/jobSlice';

const store = configureStore({
  reducer: {
    company: companySlice,
    story: storySlice,
    blog: blogSlice,
    job: jobSlice,
  },
});

export default store;
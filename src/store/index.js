import {configureStore} from '@reduxjs/toolkit';
import authorSlice from './authorSlice';

const store = configureStore({
  reducer: {
    authorSlice: authorSlice.reducer,
  },
});

export default store;

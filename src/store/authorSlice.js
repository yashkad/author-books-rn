import {createSlice} from '@reduxjs/toolkit';

const authorSlice = createSlice({
  name: 'author',
  initialState: {data: [], loading: false, bookData: [], booksLoading: false},
  reducers: {
    addData(state, action) {
      state.data = action.payload;
      console.log(state.data);
    },
    changeLoading(state, action) {
      const {type, value} = action.payload;
      console.log(action.payload);
      if (type == 'booksLoading') {
        state.booksLoading = value;
      } else {
        state.loading = value;
      }
    },
    addBookData(state, action) {
      state.bookData = action.payload;
      console.log(state.bookData);
    },
  },
});

export default authorSlice;
export const authorAction = authorSlice.actions;

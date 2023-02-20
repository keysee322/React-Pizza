import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  pageNum: 1,
  sort: { name: 'популярности', sort: 'rating' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPageNum(state, action) {
      state.pageNum = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setPageNum } = filterSlice.actions;

export default filterSlice.reducer;

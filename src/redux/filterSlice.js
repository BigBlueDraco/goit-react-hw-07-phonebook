const { createSlice } = require('@reduxjs/toolkit');
const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    value: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const { filterReducer } = filterSlice.reducer;

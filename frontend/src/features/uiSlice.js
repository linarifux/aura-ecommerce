import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSearch: (state, action) => {
      state.isSearchOpen = action.payload;
    },
  },
});

export const { toggleSearch } = uiSlice.actions;
export default uiSlice.reducer;
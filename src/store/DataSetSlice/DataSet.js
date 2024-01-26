import { createSlice } from "@reduxjs/toolkit";

let DataSlice = createSlice({
  name: "defaultAddress",
  initialState: {
    data: [{}],
  },
  reducers: {
    setDefaultAddress(state, action) {
      state.data = action.payload;
    },
    removeDefaultAddress(state, action) {
      state.defaultAddress = "";
    },
  },
});
export default DataSlice.reducer;

export const  DataSliceAction = DataSlice.actions;

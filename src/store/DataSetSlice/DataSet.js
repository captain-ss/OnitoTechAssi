import { createSlice } from "@reduxjs/toolkit";

let defaultAddressSlice = createSlice({
  name: "defaultAddress",
  initialState: {
    defaultAddress: "",
  },
  reducers: {
    setDefaultAddress(state, action) {
      state.defaultAddress = action.payload.id;
    },
    removeDefaultAddress(state, action) {
      state.defaultAddress = "";
    },
  },
});
export default defaultAddressSlice.reducer;

export const defaultAddressAction = defaultAddressSlice.actions;

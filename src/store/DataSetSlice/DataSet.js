import { createSlice } from "@reduxjs/toolkit";

let DataSlice = createSlice({
  name: "TableData",
  initialState: {
    tableData: [],
  },
  reducers: {
    setTableData(state, action) {
      const newItem = action.payload;
      state.tableData.push({
        ...newItem
      })
    },
  },
});
export default DataSlice.reducer;

export const  DataSliceAction = DataSlice.actions;

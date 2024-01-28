import { configureStore } from "@reduxjs/toolkit";
import DataReducers from "./DataSetSlice/DataSet";

const store = configureStore({
  reducer: {
    TableData: DataReducers,
  },
});

export default store;

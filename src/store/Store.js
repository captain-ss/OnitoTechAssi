import { configureStore } from "@reduxjs/toolkit";
import DataReducers from "./DataSetSlice/DataSet";

const store = configureStore({
  reducer: {
    DataAll: DataReducers,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherslices";
const store = configureStore({
  reducer: weatherReducer,
});
export default store;
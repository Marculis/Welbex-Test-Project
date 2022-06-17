import appReducer from "./appReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    appReducer: appReducer,
  },
});

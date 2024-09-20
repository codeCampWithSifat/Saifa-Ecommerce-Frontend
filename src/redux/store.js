import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice/index";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

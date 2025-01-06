import { configureStore } from "@reduxjs/toolkit";
import modalslice from "./modal.slice";
export const store = configureStore({
  reducer: {
    modalslice,
  },
});

export type DispatchType = typeof store.dispatch;
export type Rootstore = ReturnType<typeof store.getState>;

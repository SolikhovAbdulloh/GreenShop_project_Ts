import { configureStore } from "@reduxjs/toolkit";
import modalslice from "./modal.slice";
import shopSlice from "./shop.slice";
import cuponSlice from "./cupon_slice";
export const store = configureStore({
  reducer: { modalslice, shopSlice, cuponSlice },
});

export type DispatchType = typeof store.dispatch;
export type Rootstore = ReturnType<typeof store.getState>;

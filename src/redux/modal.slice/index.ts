import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  auth: boolean;
}
const initialState: initialStateType = {
  auth: false,
};
const modalslice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    SetAuthModal(state) {
      state.auth = !state.auth;
    },
  },
});

export const { SetAuthModal } = modalslice.actions;
export default modalslice.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface TypeModal {
  open: boolean;
  Loading: boolean;
}

interface initialStateType {
  auth: TypeModal;
}

const initialState: initialStateType = {
  auth: {
    open: false,
    Loading: false,
  },
};
const modalslice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    SetAuthModal(state, { payload }) {
      state.auth = payload;
    },
  },
});

export const { SetAuthModal } = modalslice.actions;
export default modalslice.reducer;

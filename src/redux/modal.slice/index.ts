import { createSlice } from "@reduxjs/toolkit";

interface TypeModal {
  open: boolean;
  Loading: boolean;
}

interface initialStateType {
  auth: TypeModal;
  logOutModalVisiblty: boolean;
}

const initialState: initialStateType = {
  auth: {
    open: false,
    Loading: false,
  },
  logOutModalVisiblty: false,
};
const modalslice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    SetAuthModal(state, { payload }) {
      state.auth = payload;
    },
    setLogoutModal(state) {
      state.logOutModalVisiblty = !state.logOutModalVisiblty;
    },
  },
});

export const { SetAuthModal, setLogoutModal } = modalslice.actions;
export default modalslice.reducer;

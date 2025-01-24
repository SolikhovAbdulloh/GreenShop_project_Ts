import { createSlice } from "@reduxjs/toolkit";

interface TypeModal {
  open: boolean;
  Loading: boolean;
}
interface OrderModalType {
  open: boolean;
  isLoading: boolean;
}
interface initialStateType {
  auth: TypeModal;
  OrderModal: OrderModalType;
}

const initialState: initialStateType = {
  auth: {
    open: false,
    Loading: false,
  },

  OrderModal: {
    open: true,
    isLoading: false,
  },
};
const modalslice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    SetAuthModal(state, { payload }) {
      state.auth = payload;
    },

    setOrderModal(state, { payload }) {
      state.OrderModal = payload;
    },
  },
});

export const { SetAuthModal, setOrderModal } = modalslice.actions;
export default modalslice.reducer;

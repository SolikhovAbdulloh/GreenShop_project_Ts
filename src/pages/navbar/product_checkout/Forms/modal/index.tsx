import { Modal } from "antd";
import type { FC } from "react";
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../../../hooks/useRedux";
import { setOrderModal } from "../../../../../redux/modal.slice";
import { useNavigate } from "react-router-dom";

const ModalOrder: FC = () => {
  const { OrderModal } = useReduxSelector((st) => st.modalslice);
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const onCancel = () => {
    dispatch(setOrderModal({ open: false }));
    navigate("/profile/wishlist");
  };
  return (
    <div>
      <Modal
      className="!w-[650px]"
        onCancel={onCancel}
        open={OrderModal.open}
        title={"Order Confirmation"}
        footer={false}
      ></Modal>
    </div>
  );
};

export default ModalOrder;

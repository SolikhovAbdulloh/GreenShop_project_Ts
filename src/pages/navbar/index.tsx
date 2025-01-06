import logo from "../../../images/logo.svg";
import { IoSearchOutline } from "react-icons/io5";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FiShoppingCart } from "react-icons/fi";

import { IoMdLogIn } from "react-icons/io";
import { Badge, Modal } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { SetAuthModal } from "../../redux/modal.slice";
import { useState } from "react";
import Login from "../Login";
import Register from "../Register";

const Navbar: React.FC = () => {
  const dispatch = useReduxDispatch();
  const { auth } = useReduxSelector((state) => state.modalslice);
  console.log(auth);

  const [login, SetLogin] = useState(true);
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center">
      <img src={logo} className="cursor-pointer" alt="" />
      <div className="flex items-center gap-5">
        <a
          className={`text-[18px] cursor-pointer  font-normal  ${
            pathname !== "/Home"
              ? "text-[black]"
              : "text-[#46A358] border-b-2 border-[green]"
          } `}
          href="#"
          onClick={() => navigate("Home")}
        >
          Home
        </a>
        <a
          className={`text-[18px] cursor-pointer font-normal  ${
            pathname !== "/Blog"
              ? "text-[black]"
              : "text-[#46A358] border-b-2 border-[green]"
          } `}
          href="#"
          onClick={() => navigate("Blog")}
        >
          Blog
        </a>
      </div>
      <div className="flex items-center gap-5">
        <IoSearchOutline className="text-[24px] cursor-pointer" />
        <IoIosNotificationsOutline className="text-[29px] cursor-pointer" />
        <Badge count={123}>
          <FiShoppingCart className="text-[24px] cursor-pointer" />
        </Badge>
        <button
          onClick={() => dispatch(SetAuthModal())}
          className="w-[100px] h-[35px] flex items-center bg-[#46A358] text-white rounded-md justify-center gap-1"
        >
          <IoMdLogIn className="text-[22px]" />
          login
        </button>
        <Modal
          onCancel={() => dispatch(SetAuthModal())}
          footer={false}
          open={auth}
        >
          <div className="flex justify-center items-center gap-5 mt-4">
            <h3
              onClick={() => SetLogin(true)}
              className={`font-medium cursor-pointer text-[20px] ${
                login ? "text-[#46A358]" : "text-[black]"
              } `}
            >
              Login
            </h3>
            <div className="w-[2px] h-[16px] bg-black"></div>
            <h3
              onClick={() => SetLogin(false)}
              className={`font-medium cursor-pointer text-[20px] ${
                !login   ? "text-[#46A358]" : "text-[black]"
              } `}
            >
              Register
            </h3>
          </div>
          {login ? <Login /> : <Register />}
        </Modal>
      </div>
    </header>
  );
};

export default Navbar;

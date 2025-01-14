import { Form, Input, notification } from "antd";
import type { FieldType } from "../../@types";
import google from "../../../images/google.svg";
import face from "../../../images/facebook.svg";
import { useAxios } from "../../hooks/useAxios/";
import { signInWithGoogle } from "../../config";
import React from "react";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { SetAuthModal } from "../../redux/modal.slice";
const Login: React.FC = () => {
  const dispatch = useReduxDispatch();
  const signIngoogle = async () => {
    const respone = await signInWithGoogle();
    await axios({
      url: "/user/sign-in/google",
      method: "POST",
      body: { email: respone.user.email },
    })
      .then((data) => {
        console.log(data);
        notification.open({ message: "Success" });
        dispatch(SetAuthModal({auth:false} as any))
      })
      
      .catch((err) => {
        console.log(err);
        notification.error({ message: "Error" });
      });
      
    };
  const axios = useAxios();
  const onFinish = (e: FieldType) => {
    axios({ url: "/user/sign-in", body: e, method: "POST" }).then((data) =>
      console.log(data)
    );
  };
  const icon_style: string =
    "border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer";
  return (
    <div className="mt-2">
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="almamun_uxui@outlook.com"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="***********"
          />
        </Form.Item>

        <p className="text-end text-[#46a358] text-[15px]">Forgot Password? </p>
        <button
          className="bg-[#46a358] w-full h-[40px] rounded-md text-white mt-5 text-[18px]"
          type="submit"
        >
          Login
        </button>
      </Form>
      <div className="flex items-center justify-center mt-5 mb-5 gap-4">
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or login with</p>
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
      </div>
      <div onClick={signIngoogle} className={icon_style}>
        <img src={google} alt="" />
        Login with Google
      </div>
      <div className={icon_style}>
        <img src={face} alt="" />
        Login with Facebook
      </div>
    </div>
  );
};

export default Login;

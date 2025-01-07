import { Form, Input } from "antd";

import google from "../../../images/google.svg";
import face from "../../../images/facebook.svg";
import { RegisterType } from "../../@types";
import { useAxios } from "../../hooks/useAxios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const Register: React.FC = () => {
  const signIn = useSignIn();
  const axios = useAxios();
  const onFinish = (e: RegisterType) => {
    console.log(e);
    axios({ url: "/user/sign-up", body: e, method: "POST" })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const icon_style: string =
    "border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer";
  return (
    <div className="mt-2">
      <Form
        name="register"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="Name"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
        >
          <Input.Password
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          rules={[{ required: true, message: "Please confirm your password!" }]}
        >
          <Input.Password
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="Confirm Password"
          />
        </Form.Item>

        <button
          className="bg-[#46a358] w-full h-[40px] rounded-md text-white mt-5 text-[18px]"
          type="submit"
        >
          Register
        </button>
      </Form>
      <div className="flex items-center justify-center mt-5 mb-5 gap-4">
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or login with</p>
        <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
      </div>
      <div className={icon_style}>
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

export default Register;

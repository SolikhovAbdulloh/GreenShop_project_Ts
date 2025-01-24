import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setCoupon, setIsLoading } from "../../../redux/cupon_slice";
import { CouponType, UserType } from "../../../@types";
import { notificationApi } from "../../../generic/notification";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../../../config";
import { SetAuthModal } from "../../../redux/modal.slice";
import { useSignIn } from "react-auth-kit";

const useLoginGoogle = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async () => {
      const responese = await signInWithGoogle();
      return await axios({
        url: "/user/sign-in/google",
        method: "POST",
        body: { email: responese.user.email },
      });
    },
    onSuccess: (data: { token: string; user: UserType }) => {
      notify("LoginGoogle");
      dispatch(SetAuthModal({ open: true }));
      const { token } = data;
      localStorage.setItem("token", token);
    },
    onError: (err) => {
      console.log(err);

      notify("Not login");
    },
  });
};

const useRegisterGoogle = () => {
  const notify = notificationApi();
  const dispatch = useDispatch();
  const axios = useAxios();
  const sigIn = useSignIn();

  return useMutation({
    mutationFn: async () => {
      const responese = await signInWithGoogle();
      return await axios({
        url: "/user/sign-up/google",
        method: "POST",
        body: { email: responese.user.email },
      });
    },
    onSuccess: (data: { token: string; user: UserType }) => {
      dispatch(SetAuthModal({ open: true })), notify("RegisterGoogle");
      const { token, user } = data;
      console.log(data);
      sigIn({
        token,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: user,
      });
      localStorage.setItem("token", token);
    },
    onError: (err) => {
      notify("Not register");
      console.log(err.message);
    },
  });
};

const useLogin = () => {
  const sigIn = useSignIn();
  const notify = notificationApi();
  const dispatch = useDispatch();
  const axios = useAxios();
  return useMutation({
    mutationFn: ({ data }: { data: object }) =>
      axios({ url: "/user/sign-in", body: data, method: "POST" }),

    onSuccess: (data: { data: { token: string; user: UserType } }): void => {
      const { token, user } = data.data;
      // console.log(data);
      console.log(user);
      sigIn({
        token,
        authState: user,
        tokenType: "Bearer",
        expiresIn: 3600,
      });
      localStorage.setItem("token", token);
      dispatch(SetAuthModal({ open: false }));
      notify("LoginGoogle");
    },
    onError: (error) => {
      notify("Not login");
      dispatch(SetAuthModal({ open: true }));

      console.log(error.message);
    },
  });
};

const useRegister = () => {
  const notify = notificationApi();
  const dispatch = useDispatch();
  const axios = useAxios();
  const sigIn = useSignIn();
  return useMutation({
    mutationFn: async ({ data }: { data: object }) =>
      await axios({ url: "/user/sign-up", body: data, method: "POST" }),

    onSuccess: ({ data }: { data: { token: string; user: UserType } }) => {
      const { token, user } = data;
      console.log(data);
      sigIn({
        token,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: user,
      });

      localStorage.setItem("token", token);
      notify("RegisterGoogle");
      dispatch(SetAuthModal({ open: false }));
    },
    onError: (error) => {
      console.log(error.message);
      notify("Not register");
    },
  });
};

const useGetcupon = () => {
  const notify = notificationApi();
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationFn: (data: object) => {
      dispatch(setIsLoading(true));
      return axios({
        url: "/features/coupon",
        params: data,
      });
    },
    onSuccess: (data: CouponType) => {
      dispatch(setIsLoading(false));
      dispatch(setCoupon(data.data.discount_for));
      console.log(data);
      notify("Success");
    },
    onError: () => {
      notify("Not");
      dispatch(setIsLoading(false));
    },
  });
};

export {
  useGetcupon,
  useLoginGoogle,
  useRegisterGoogle,
  useLogin,
  useRegister,
};

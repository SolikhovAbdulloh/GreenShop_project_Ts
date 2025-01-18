import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";
import { useReduxDispatch } from "../../useRedux";
import { setCoupon, setIsLoading } from "../../../redux/cupon_slice";
import { CouponType } from "../../../@types";
import { notificationApi } from "../../../generic/notification";

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
      dispatch(setCoupon(data.discount_for));
      console.log(data);

      notify("Success");
    },
    onError: () => {
      notify("Not");
      dispatch(setIsLoading(false));
    },
  });
};

export { useGetcupon };

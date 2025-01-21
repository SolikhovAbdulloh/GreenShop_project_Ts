import { useAuthUser, useSignIn } from "react-auth-kit";
import { useAxios } from "../../hooks/useAxios";
import { notificationApi } from "../notification";
import { UserType } from "../../@types";

interface LikeType {
  isLiked: boolean;
  data: {
    route_path: string;
    flower_id: string;
  };
}

const useHandler = () => {
  const axios = useAxios();
  const notify = notificationApi();
  let SignIn = useSignIn();
  const auth: UserType = useAuthUser()() ?? {};

  const likeHundler = ({ data, isLiked }: LikeType) => {
    const like = async () => {
      SignIn({
        token: localStorage.getItem("token") as string,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: {
          ...auth,
          wishlist: [...(auth.wishlist ?? []), data],
        },
      });
      notify("Like");
      axios({ url: "/user/create-wishlist", method: "POST", body: data });
    };
    const disLike = async () => {
      SignIn({
        token: localStorage.getItem("token") as string,
        tokenType: "Bearer",
        expiresIn: 3600,
        authState: {
          ...auth,
          wishlist: auth.wishlist?.filter(
            (value) => value.flower_id !== data.flower_id
          ),
        },
      });
      notify("Dislike");
      await axios({
        url: "/user/delete-wishlist",
        method: "DELETE",
        body: { _id: data.flower_id },
      });
    };
    if (isLiked) {
      return disLike;
    }
    return like;
  };
  return { likeHundler };
};

export { useHandler };

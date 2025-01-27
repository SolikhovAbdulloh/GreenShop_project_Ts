import type { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryApi } from "../../../hooks/useQuery";
import { DataUserinfo, UserTypeApi } from "../../../@types";
import { Avatar, Spin, Tooltip } from "antd";
import {
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useIsAuthenticated } from "react-auth-kit";
import { SetAuthModal } from "../../../redux/modal.slice";
import { useReduxDispatch } from "../../../hooks/useRedux";
const User_comments_blog: FC = () => {
  const { id, user_id } = useParams();
  const IsAuth = useIsAuthenticated()();
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { data, isLoading, isError }: DataUserinfo = useQueryApi({
    pathname: `blog/${id}`,
    url: `/user/blog/${id}`,
  });
  // console.log(data);

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  }: UserTypeApi = useQueryApi({
    pathname: "user",
    url: `/user/by_id/${user_id}`,
  });
  let loading = isLoadingUser || isErrorUser || isLoading || isError;

  return (
    <div className="m-auto">
      {loading ? (
        <Spin
          className="m-auto !w-full !py-5"
          tip="Loading"
          size="large"
        ></Spin>
      ) : (
        <section className="w-[70%] m-auto mt-[30px]">
          <div className="flex items-center justify-between">
            <div
              onClick={() =>
                !IsAuth
                  ? dispatch(SetAuthModal({ open: true }))
                  : navigate(`/user/${user_id}`)
              }
              className="flex cursor-pointer gap-5 items-center"
            >
              <Tooltip title={`${user?.surname} ${user?.name}`}>
                <Avatar
                  className="w-[50px]  h-[50px]"
                  src={user?.profile_photo}
                />
              </Tooltip>
              <div className="flex flex-col justify-start items-center gap-1">
                <h2 className="font-bold text-[18px]">
                  {user?.name} {user?.surname}
                </h2>
                <p className="text-[12px]">
                  Followers {user?.followers?.length}
                </p>
              </div>
            </div>
            <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[20px] py-[8px]">
              Follow
            </button>
          </div>
          <div className="mt-7">
            <h2 className="py-[20px] font-bold text-[24px]">{data?.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: data?.content as string }}
            ></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1  cursor-pointer">
              <EyeOutlined /> <p>{data?.views}</p>
            </div>
            <div className="flex items-center gap-1  cursor-pointer">
              <HeartOutlined /> <p>0</p>
            </div>
            <div className="flex items-center gap-1  cursor-pointer">
              <MessageOutlined /> <p>0</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <ShareAltOutlined /> <p>0</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default User_comments_blog;

import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useQueryApi } from "../../../hooks/useQuery";
import { DataUserinfo, UserTypeApi } from "../../../@types";
import { Avatar } from "antd";
import {
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
const User_comments_blog: FC = () => {
  const { id, user_id } = useParams();

  const { data, isLoading, isError }: DataUserinfo = useQueryApi({
    pathname: `blog/${id}`,
    url: `/user/blog/${id}`,
  });
  console.log(data);

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
    <div>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <section className="w-[70%] m-auto mt-[30px]">
          <div className="flex items-center justify-between">
            <div className="flex  gap-5 items-center">
              <Avatar className="w-[50px] h-[50px]" src={user?.profile_photo} />
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

import { Skeleton } from "antd";

const useLoader = () => {
  const Category_loader = () => {
    return Array.from({ length: 8 }).map((_, idx) => (
      <div  key={idx} >
        <Skeleton.Input  active />
      </div>
    ));
  };

  const Card_Loader = () => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <div className="flex-col flex items-start gap-2   " key={idx}>
        <Skeleton.Image className="!w-[270px] !h-[250px]" active />
        <Skeleton.Input  active />
        <Skeleton.Input  active />
      </div>
    ));

  };
  return { Category_loader, Card_Loader };
};

export default useLoader;

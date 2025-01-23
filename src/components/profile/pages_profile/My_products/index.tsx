import type { FC } from "react";
import { useQueryApi } from "../../../../hooks/useQuery";
import { CardType, UserType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import Card from "../../../../pages/home/categories/cards";

const My_products: FC = () => {
  const { Card_Loader } = useLoader();

  const {
    data,
    isLoading,
    isError,
  }: { data?: CardType[]; isLoading: boolean; isError: boolean } = useQueryApi({
    url: "/user/products",
    pathname: "my-products",
  });

  return (
    <div>
      {isError || isLoading ? (
        <Card_Loader />
      ) : (
        data?.map((value: CardType) => <Card key={value._id} {...value} />)
      )}
    </div>
  );
};

export default My_products;

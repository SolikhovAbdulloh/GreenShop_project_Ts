import type { FC } from "react";
import { useQueryApi } from "../../../../hooks/useQuery";
import type { OrderType } from "../../../../@types";
import OrderItem from "./order-item";

const Order: FC = () => {
  const {
    data,
    isLoading,
    isError,
  }: { data?: OrderType[]; isLoading: boolean; isError: boolean } = useQueryApi(
    {
      url: "/order/get-order",
      pathname: "order",
    }
  );
  // console.log(data);

  return (
    <div>
      <h1 className="font-bold text-2xl">Track your Orders</h1>
      {data?.slice(50).map((value) => (
        <OrderItem key={value._id} {...value} />
      ))}
    </div>
  );
};

export default Order;

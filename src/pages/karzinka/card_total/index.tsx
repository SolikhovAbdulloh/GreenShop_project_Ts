import { Form, notification } from "antd";
import { Link } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/useRedux";
import { PriceFuction } from "../../../utils";
import { useRef } from "react";
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { useGetcupon } from "../../../hooks/useQuery/useQueryaction";

const CardTotal = () => {
  const refcupon = useRef<HTMLInputElement>(null);

  const { shop } = useReduxSelector((state) => state.shopSlice);

  const { isLaoding, coupon } = useReduxSelector((state) => state.cuponSlice);

  const PriceAllProduct = shop.reduce((acc, product) => {
    const price = PriceFuction(product.count, product.price);
    const result = acc + price;
    return parseFloat(result.toFixed(2));
  }, 0);

  const { mutate } = useGetcupon();

  const getCupon = () => {
    const coupon_code = refcupon.current?.value;
    if (coupon_code?.trim() === "") {
      return notification.info({ message: "Error" });
    }
    const newcupon = { coupon_code };
    mutate(newcupon);
  };

  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  const discount_price: number = (PriceAllProduct * coupon)  / 100;
  console.log(discount_price);

  return (
    <div>
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[17px]">
        Card Total
      </h3>
      <Form onFinish={getCupon} className="flex h-[40px] mt-[35px]">
        <input
          ref={refcupon}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5  border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-[18px] text-black font-normal"
        />
        <button
          disabled={coupon ? true : false}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none "
        >
          {isLaoding ? (
            <LoadingOutlined />
          ) : coupon ? (
            <CheckOutlined />
          ) : (
            <span>Apply</span>
          )}
        </button>
      </Form>
      <div className="mt-[20px]">
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">
            {PriceAllProduct}
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px]">
            {discount_price.toFixed(2)}$
          </h2>
        </div>
      
      </div>
      <div>
        <div className="flex justify-between mt-[20px]">
          <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
          <h1
            className={`text-[#46A358] text-[18px] font-bold ${
              coupon && "line-through"
            }`}
          >
            ${PriceAllProduct.toFixed(2)}
          </h1>
          {Boolean(coupon) && (
            <h1
              className={`text-[#46A358] text-[18px] font-bold
            `}
            >
              ${(PriceAllProduct - discount_price).toFixed(2)}
            </h1>
          )}
        </div>
        <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]">
          Proceed To Checkout
        </button>
        <Link to={"/"} className="flex justify-center">
          <button className="mt-[14px] text-[#46A358] cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardTotal;
// https://beckend-n14.onrender.com/api/features/coupon?access_token=64bebc1e2c6d3f056a8c85b7&cupon_code=AEMA_MEM
// https://beckend-n14.onrender.com/api/features/coupon?access_token=64bebc1e2c6d3f056a8c85b7&coupon_code=AEMA_MEM

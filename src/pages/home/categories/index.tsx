import { Button, Slider } from "antd";
import React from "react";
import rasm from "../../../../images/super.png"
const Categories: React.FC = () => {
  return (
    <div className="bg-[#FBFBFB] p-2">
      <p className="text-[18px] font-bold">Categories</p>
      <div className="flex gap-[130px] mt-[30px] justify-between">
        <div className="flex-col text-[15px] font-bold gap-3 flex">
          <p> House Plants</p> <p>Potter Plants</p> <p>Seeds </p>
          <p> Small Plants</p> <p>Big Plants</p> <p>Succulents</p>
          <p>Trerrariums</p> <p>Gardening</p> <p> Accessories</p>
        </div>
        <div className="flex text-[15px] font-bold flex-col gap-3">
          <p>(33)</p>
          <p>(12)</p>
          <p>(65)</p>
          <p>(39)</p>
          <p>(23)</p>
          <p>(17)</p>
          <p>(19)</p>
          <p>(13)</p>
          <p>(18)</p>
        </div>
      </div>
      <div className="mt-4">
        <Slider
          range
          styles={{
            track: {
              background: "#46A358",
            },
          }}
        />
        <p>
          Price: <span className="text-[#46A358]">$39 - $1230</span>
        </p>
        <Button className="bg-[#46A358] mt-4 text-[white] w-[90px]">
          Filter
        </Button>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-[18px] font-bold">Size</p>
          <div className="flex gap-[160px]">

          <div className="text-[15px] flex flex-col gap-2 font-normal">
            <p>Small</p>
            <p>Medium </p>
            <p>Large </p>
          </div>
          <div className="text-[15px] flex flex-col gap-2 font-normal">
            <p>(119) </p>
            <p> (78)</p>
            <p>(86) </p>
          </div>
          </div>
        </div>
        <img src={rasm} className="mt-[30px] flex items-center justify-center" alt="" />
      </div>
    </div>
  );
};

export default Categories;

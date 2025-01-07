import React from "react";
import CaruselComponent from "../../components/carusel";
import rasm1 from "../../../images/rasm1.png";
import rasm2 from "../../../images/rasm2.png";
import rasm3 from "../../../images/rasm3.png";
import rasm4 from "../../../images/rasm4.png";
import rasm5 from "../../../images/rasm5.png";
import rasm6 from "../../../images/rasm6.png";
import rasm7 from "../../../images/rasm7.png";
import rasm8 from "../../../images/rasm8.png";
import rasm9 from "../../../images/rasm9.png";
import Categories from "./categories";

const Home: React.FC = () => {
  return (
    <div>
      <CaruselComponent />
      <div className="flex justify-between gap-[30px]">
        <div className="my-5">
          <Categories />
        </div>
        <div>
          <div className="flex my-5 text-[15px] font-medium items-center gap-5">
            <p>All Plants</p>
            <p>New Arrivals</p>
            <p>Sale</p>
          </div>
          <div className="grid grid-cols-3 gap-[30px]">
            <div>
              <img className="img1" src={rasm1} alt="rasm1" />
              <p>Barberton Daisy</p>
              <p className="text-[#46A358] text-[18px] font-bold">$119.00</p>
            </div>
            <div>
              <img className="img1" src={rasm2} alt="rasm1" />
              <p>Angel Wing Begonia </p>
              <p className="text-[#46A358] text-[18px] font-bold">$109.00</p>
            </div>
            <div>
              <img className="img1" src={rasm3} alt="rasm1" />
              <p>African Violet </p>
              <p className="text-[#46A358] text-[18px] font-bold">$199.00</p>
            </div>
            <div>
              <img className="img1" src={rasm4} alt="rasm1" />
              <p>Beach Spider Lily </p>
              <p className="text-[#46A358] text-[18px] font-bold">$128.00</p>
            </div>
            <div>
              <img className="img1" src={rasm5} alt="rasm1" />
              <p>Blushing Bromeliad </p>
              <p className="text-[#46A358] text-[18px] font-bold">$139.00</p>
            </div>
            <div>
              <img className="img1" src={rasm6} alt="rasm1" />
              <p>Aluminum Plant </p>
              <p className="text-[#46A358] text-[18px] font-bold">$179.00</p>
            </div>
            <div>
              <img className="img1" src={rasm7} alt="rasm1" />
              <p>Bird's Nest Fern </p>
              <p className="text-[#46A358] text-[18px] font-bold">$98.00</p>
            </div>
            <div>
              <img className="img1" src={rasm8} alt="rasm1" />
              <p>Broadleaf Lady Palm </p>
              <p className="text-[#46A358] text-[18px] font-bold">$59.00</p>
            </div>
            <div>
              <img className="img1" src={rasm9} alt="rasm1" />
              <p>Chinese Evergreen </p>
              <p className="text-[#46A358] text-[18px] font-bold">$39.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

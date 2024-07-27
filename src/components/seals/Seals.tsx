import React from "react";
import SealIcon from "../../assets/seals/seal.svg";
import ShippingIcon from "../../assets/seals/shipping.svg";
import SupportIcon from "../../assets/seals/support.svg";
import TrophyIcon from "../../assets/seals/trophy.svg";

const Seals: React.FC = () => {
  return (
    <div className="flex justify-around py-5 bg-[#f9f3eb]">
      <div className="text-center max-w-[200px]">
        <img src={TrophyIcon} alt="TrophyIcon" className="w-8 h-8 mb-2" />
        <h3 className="text-xl font-semibold">High Quality</h3>
        <p className="text-sm text-gray-500">crafted from top materials</p>
      </div>
      <div className="text-center max-w-[200px]">
        <img src={SealIcon} alt="SealIcon" className="w-8 h-8 mb-2" />
        <h3 className="text-xl font-semibold">Warranty Protection</h3>
        <p className="text-sm text-gray-500">Over 2 years</p>
      </div>
      <div className="text-center max-w-[200px]">
        <img src={ShippingIcon} alt="ShippingIcon" className="w-8 h-8 mb-2" />
        <h3 className="text-xl font-semibold">Free Shipping</h3>
        <p className="text-sm text-gray-500">Order over 150 $</p>
      </div>
      <div className="text-center max-w-[200px]">
        <img src={SupportIcon} alt="SupportIcon" className="w-8 h-8 mb-2" />
        <h3 className="text-xl font-semibold">24 / 7 Support</h3>
        <p className="text-sm text-gray-500">Dedicated support</p>
      </div>
    </div>
  );
};

export default Seals;

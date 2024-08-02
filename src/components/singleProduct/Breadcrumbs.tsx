import React from "react";
import ArrowRight from "../../assets/arrow-general.svg"; // Aponte para o SVG correto

const Breadcrumbs: React.FC<{ productTitle: string }> = ({ productTitle }) => {
  return (
    <div className="bg-[#f9f1e7] py-4">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center text-[#9f9f9f] text-sm font-normal">
        <span className="flex items-center">
          Home
          <img src={ArrowRight} alt=">" className="mx-2" />
        </span>
        <span className="flex items-center">
          Shop
          <img src={ArrowRight} alt=">" className="mx-2" />
        </span>
        <span className="mx-2">|</span>
        <span className="text-black">{productTitle}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;

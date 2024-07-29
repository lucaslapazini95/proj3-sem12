import { useNavigate } from "react-router-dom";
import GeneralButton from "../general/GeneralButton";

const HomeHero = () => {
  const navigate = useNavigate();

  function redirectShop() {
    navigate("/shop");
  }

  return (
    <section className="bg-cover bg-center h-[700px] flex items-center justify-center bg-[url('src/assets/home-hero.png')]">
      <div className="max-w-[1380px] w-full flex items-center justify-end px-4">
        <div className="bg-[#FFF3E3] max-w-[643px] w-full p-6 md:p-8 lg:p-12 rounded-xl ml-auto">
          <span className="text-[#333] text-base font-semibold tracking-wider mb-2">
            New Arrival
          </span>
          <h1 className="text-[#B88E2F] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-[#333] text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <GeneralButton onClick={redirectShop}>BUY NOW</GeneralButton>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

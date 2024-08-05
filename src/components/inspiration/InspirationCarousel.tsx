import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Carousel = ({ products }: { products: any[] }) => {
  const splideRef = useRef<Splide>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const handleNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("+1");
    }
  };

  const updateSlideHeight = () => {
    const splideInstance = splideRef.current?.splide;
    if (splideInstance) {
      setCurrentSlideIndex(splideInstance.index);
    }
  };

  useEffect(() => {
    updateSlideHeight();
  }, [currentSlideIndex]);

  return (
    <div className="flex flex-col lg:flex-row md:h-[670px] bg-[#FCF8F3] py-16">
      <div className="w-full lg:w-[661px] items-center flex flex-col justify-center text-[#3A3A3A]">
        <h1 className="text-[40px] font-bold mb-4">
          50+ Beautiful rooms <br />
          inspiration
        </h1>
        <p className="text-lg mb-8">
          Our designer already made a lot of beautiful
          <br />
          prototypes of rooms that inspire you.
        </p>
        <div className="lg:mr-[15rem]">
          <button className="bg-gold-500 text-white px-4 py-2 rounded transition w-[176px] h-[48px]">
            Explore more
          </button>
        </div>
      </div>

      <div className="relative w-full lg:w-[calc(100%-600px)] mt-8 lg:mt-0">
        <Splide
          options={{
            type: "slide",
            perPage: 1,
            perMove: 1,
            gap: "1rem",
            pagination: false,
            arrows: false,
            autoWidth: true,
            autoHeight: true,
            updateOnMove: true,
          }}
          ref={splideRef}
          onMoved={updateSlideHeight}
        >
          {products.map((product, index) => (
            <SplideSlide key={product.id}>
              <div
                className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
                  currentSlideIndex === index
                    ? "h-[20.375rem] md:h-[36.375rem]"
                    : "h-[15.375rem] md:h-[28rem]"
                }`}
              >
                <img
                  src={product.images.mainImage}
                  alt={product.title}
                  className={`object-cover w-[20.375rem] md:w-[36.375rem] h-full transition-transform duration-500 ease-in-out ${
                    currentSlideIndex === index
                      ? "transform scale-105 transform-origin-right translate-x-[5%]"
                      : "transform scale-100"
                  }`}
                />
                {currentSlideIndex === index && (
                  <div className="absolute bottom-4 right-4 flex">
                    <div className=" bg-white text-black px-4 py-2 rounded flex items-center justify-between w-auto">
                      <span>
                        {product.title.split(" ").slice(0, 3).join(" ")}
                      </span>
                    </div>
                    <button className="ml-1 bg-[#B88E2F] h-10 w-10 p-2 flex items-center justify-center rounded">
                      <img
                        src="src/assets/inspiration/arrow-go.svg"
                        alt="arrow-go"
                      />
                    </button>
                  </div>
                )}
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <button
          onClick={handleNextSlide}
          className="absolute bottom-1/3 right-4"
        >
          <img src="src/assets/inspiration/arrow-nav.svg" alt="arrow-nav" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

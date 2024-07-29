import SetupImg from "../../assets/home-setup.png";

const Setup = () => {
  return (
    <section className="mt-20 mb-12 text-center px-4">
      <p className="text-gray-600 text-base md:text-lg font-semibold leading-relaxed mb-2">
        Share your setup with
      </p>
      <h2 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-6 md:mb-8">
        #FurniroFurniture
      </h2>
      <img
        src={SetupImg}
        alt="setups"
        className="w-full max-w-full object-cover"
      />
    </section>
  );
};

export default Setup;

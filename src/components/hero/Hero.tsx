type HeroProps = {
  title: string;
  firstPath: string;
  secondPath: string;
};

const Hero = ({ title, firstPath, secondPath }: HeroProps) => {
  return (
    <section className="relative h-80 flex justify-center items-center flex-col w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('src/assets/hero-bg.jpeg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-medium text-white mb-1">{title}</h1>
        <p className="text-base font-medium text-white">
          {firstPath} {">"} <span className="font-normal">{secondPath}</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

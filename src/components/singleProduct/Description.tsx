type DescriptionProps = {
  text: string;
};
const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <section className="border-t border-[#9f9f9f] py-12 px-6 flex flex-col items-center">
      <h2 className="text-black text-2xl font-medium mb-9">Description</h2>
      <p className="text-base text-[#9f9f9f] font-normal mb-7 text-center">
        {text}
      </p>
    </section>
  );
};

export default Description;

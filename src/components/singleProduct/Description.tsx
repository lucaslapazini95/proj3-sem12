import React from "react";

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <section className="py-12 border-t border-gray-300">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl font-semibold text-black mb-6">Description</h2>
        <p className="text-base text-gray-600">{text}</p>
      </div>
    </section>
  );
};

export default Description;

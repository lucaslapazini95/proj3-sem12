import React, { useState } from "react";

interface DescriptionProps {
  longDescription: string;
}

const Description: React.FC<DescriptionProps> = ({ longDescription }) => {
  const [activeTab, setActiveTab] = useState<"description" | "additional">(
    "description"
  );

  return (
    <section className="py-12 border-t border-gray-300">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-center gap-8 mb-8">
          <button
            className={`text-2xl font-semibold ${
              activeTab === "description" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`text-2xl font-semibold ${
              activeTab === "additional" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
        </div>
        <div className="text-base text-gray-600 text-center">
          {activeTab === "description" && <p>{longDescription}</p>}
          {activeTab === "additional" && <p>This is additional information.</p>}
        </div>
      </div>
    </section>
  );
};

export default Description;

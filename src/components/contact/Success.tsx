import React from "react";

const Success = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="fixed p-4 max-w-lg w-full text-center left-1/2 z-50 transform -translate-x-1/2 rounded-xl font-medium bg-green-400 text-white animate-slide-in-top">
      <h1>{children}</h1>
    </div>
  );
};

export default Success;

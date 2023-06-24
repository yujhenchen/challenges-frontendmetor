import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full bg-white font-outfit duration-500 hover:shadow-lg">
      {children}
    </div>
  );
};

export default Card;

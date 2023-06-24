import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="h-full w-full bg-white font-outfit duration-500 hover:shadow-lg">
      {children}
    </div>
  );
};

export default Card;

import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function EmptyCard({ children }: Props) {
  return (
    <div className="h-full w-full bg-white duration-500 hover:shadow-lg">
      {children ? (
        children
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center">
          <span className="text-center text-sm text-slate-600">
            {`I am an empty card :)`}
          </span>
        </div>
      )}
    </div>
  );
}

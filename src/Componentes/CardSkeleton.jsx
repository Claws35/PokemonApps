import React from "react";

const CardSkeleton = () => {
  return (
    <div className="flex-col justify-center m-auto w-[240px] flex items-center bg-[#fff] drop-shadow-lg py-4 rounded-md">
      <div className="font-bold text-lg bg-gray-300 animate-pulse h-6 mb-2"></div>
      <div className="w-[200px] h-[200px] my-[2em] bg-gray-300 animate-pulse"></div>
      <div className="bg-gray-300 animate-pulse h-6 w-24 mb-2"></div>
      <div className="bg-gray-300 animate-pulse h-6 w-24"></div>
    </div>
  );
};

export default CardSkeleton;

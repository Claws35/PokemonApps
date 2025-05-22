import React from "react";
import { IoArrowBack } from "react-icons/io5";

const BontonIrAtras = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="bg-gray-50 p-4 rounded-full transition ease-in-out m-10"
    >
      <IoArrowBack className="text-[24px] text-neutral-600 transition ease-in-out" />
    </button>
  );
};
export default BontonIrAtras;

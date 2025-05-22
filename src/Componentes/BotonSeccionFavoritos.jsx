import React from "react";
import { FaStar } from "react-icons/fa";

const BotonSeccionFavoritos = ({ toggleSeccionFavorites }) => {
  return (
    <button
      className="bg-slate-50 hover:bg-yellow-400 p-4  text-neutral-600 hover:text-neutral-50 flex items-center rounded-full justify-center transition-all"
      onClick={toggleSeccionFavorites}
    >
      <FaStar className=" text-[24px] transition-all" />
    </button>
  );
};

export default BotonSeccionFavoritos;

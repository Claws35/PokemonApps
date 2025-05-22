import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const BotonStar = ({ isFavorite, toggleFavorite }) => {
  return (
    <button
      className={`p-2 w-[40px] h-[40px] text-slate-800 hover:text-neutral-50 flex items-center rounded-full justify-center transition-all ${
        isFavorite ? "bg-yellow-400" : "bg-slate-100"
      }`}
      onClick={toggleFavorite}
    >
      {isFavorite ? (
        <FaStar
          className={`text-[20px] hover:text-[30px] transition-all ${
            isFavorite ? "text-neutral-50" : "text-slate-800"
          }`}
        />
      ) : (
        <FaRegStar
          className={`text-[20px] hover:text-[30px] transition-all ${
            isFavorite ? "text-slate-50" : "text-slate-800"
          }`}
        />
      )}
    </button>
  );
};

export default BotonStar;

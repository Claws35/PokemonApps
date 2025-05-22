import React from "react";

const BotonGenerico = ({ text, action }) => {
  return (
    <div>
      <button
        className="px-2 py-1 bg-slate-200 rounded-xl hover:bg-slate-100 transition-all"
        onClick={action}
      >
        {text}
      </button>
    </div>
  );
};

export default BotonGenerico;

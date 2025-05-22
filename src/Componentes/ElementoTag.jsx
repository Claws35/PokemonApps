import React from "react";
function mayusculaPrimeraLetra(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const ElementoTag = ({ type }) => {
  const label = "normals";
  return (
    <div
      className={`bg-${type.type.name} rounded-full px-3 py-1.5 text-[#fff]`}
    >
      <p>{mayusculaPrimeraLetra(type.type.name)}</p>
    </div>
  );
};

export default ElementoTag;

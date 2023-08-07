import React from "react";
import PropTypes from "prop-types";

function ClimaCard({ cidade }) {
  
  if (!cidade) {
    return <div>Nenhum dado disponível. Tente novamente!</div>;
  }
  const { location, current } = cidade;

  return (
    <div className="bg-white p-6 rounded-lg mt-10 shadow-md min-w-[350px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-gray-700">
          {location.name}
        </span>
        <span className="text-gray-400 font-medium text-sm">{`${location.region}, ${location.country}`}</span>
      </div>

      <div className="font-bold text-gray-700 mt-4 mb-2 flex justify-center items-center">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-3xl mt-auto">ºC</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={current.condition.icon} alt="" />
        <span className="font-bold text-gray-700 mt-2">
          {current.condition.text}
        </span>
      </div>
    </div>
  );
}

export default ClimaCard;

ClimaCard.propTypes = {
  cidade: PropTypes.object,
}.isRequired;
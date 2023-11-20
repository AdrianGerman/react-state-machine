import React, { useState } from "react";

export const Search = ({ send }) => {
  const [flight, setFlight] = useState("");

  const goToPassengers = () => {
    send("CONTINUE");
  };

  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };

  const options = ["Mexico", "Guatemala", "Argentina"];

  return (
    <div className="Search">
      <p className="Search-title title">Busca tu destino</p>
      <select
        id="country"
        className="Search-select"
        value={flight}
        onChange={handleSelectChange}
      >
        <option value="" disabled defaultValue>
          Escoge el país
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        onClick={goToPassengers}
        disabled={flight === ""}
        className="Search-continue button"
      >
        Continuar
      </button>
    </div>
  );
};

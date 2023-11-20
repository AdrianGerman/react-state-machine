import React from "react";
import "./Tickets.css";

export const Tickets = ({ state, send }) => {
  const finish = () => {
    send("FINISH");
  };

  return (
    <div className="Tickets">
      <p className="Tickets-description description">
        Gracias por volar con nosotros
      </p>
      <div className="Tickets-ticket">
        <div className="Tickets-country">Mexico</div>
        <div className="Tickets-passengers">
          <span>✈</span>
        </div>
      </div>
      <button onClick={finish} className="Tickets-finalizer button">
        Finalizar
      </button>
    </div>
  );
};

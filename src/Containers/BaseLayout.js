import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine";
import "./BaseLayout.css";
import { StepsLayout } from "./StepsLayout";
import { Nav } from "../Components/Nav";

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log("nuestra maquina", state);
  console.log("matches true", state.matches("initial"));
  console.log("matches false", state.matches("tickets"));
  console.log("can", state.can("FINISH"));
  return (
    <div>
      <Nav />
      <StepsLayout />
    </div>
  );
};

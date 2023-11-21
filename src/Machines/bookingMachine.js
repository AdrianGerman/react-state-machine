import { createMachine } from "xstate";

const bookingMachine = createMachine(
  {
    predictableActionArguments: true,
    id: "Comprar boletos de avión",
    initial: "initial",
    states: {
      initial: {
        on: {
          START: {
            target: "search",
            actions: "imprimirInicio",
          },
        },
      },
      search: {
        entry: "imprimirEntrada",
        exit: "imprimirSalida",
        on: {
          CONTINUE: "passengers",
          CANCEL: "initial",
        },
      },
      passengers: {
        on: {
          DONE: "tickets",
          CANCEL: "initial",
        },
      },
      tickets: {
        on: {
          FINISH: "initial",
        },
      },
    },
  },
  {
    actions: {
      imprimirInicio: () => console.log("Imprimir inicio"),
      imprimirEntrada: () => console.log("Imprimir entrada a search"),
      imprimirSalida: () => console.log("Imprimir salida del search"),
    },
  }
);

export default bookingMachine;

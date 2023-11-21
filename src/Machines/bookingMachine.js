import { createMachine, assign } from "xstate";

const bookingMachine = createMachine(
  {
    predictableActionArguments: true,
    id: "Comprar boletos de avión",
    initial: "initial",
    context: {
      passengers: [],
      selectedCountry: "",
    },
    states: {
      initial: {
        on: {
          START: {
            target: "search",
          },
        },
      },
      search: {
        on: {
          CONTINUE: {
            target: "passengers",
            actions: assign({
              selectedCountry: (context, event) => event.selectedCountry,
            }),
          },
          CANCEL: "initial",
        },
      },
      passengers: {
        on: {
          DONE: "tickets",
          CANCEL: "initial",
          ADD: {
            target: "passengers",
            actions: assign((context, event) =>
              context.passengers.push(event.newPassenger)
            ),
          },
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

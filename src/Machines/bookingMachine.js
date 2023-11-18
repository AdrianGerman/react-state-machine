import { createMachine } from "xstate";

const bookingMachine = createMachine({
  predictableActionArguments: true,
  id: "Comprar boletos de avión",
  initial: "inicial",
  states: {
    inicial: {
      on: {
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUE: "passengers",
        CANCEL: "inicial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "inicial",
      },
    },
    tickets: {
      on: {
        FINISH: "inicial",
      },
    },
  },
});

export default bookingMachine;

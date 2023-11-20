import { createMachine } from "xstate";

const bookingMachine = createMachine({
  predictableActionArguments: true,
  id: "Comprar boletos de avión",
  initial: "initial",
  states: {
    initial: {
      on: {
        START: "search",
      },
    },
    search: {
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
});

export default bookingMachine;

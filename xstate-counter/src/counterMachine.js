import { createMachine, assign } from "xstate";

export const counterMachine = createMachine({
  context: {
    count: 0,
  },
  on: {
    INCREMENT: {
      actions: assign({
        count: (context) => context.count + 1,
      }),
    },
    DECREMENT: {
      actions: assign({
        count: (context) => context.count - 1,
      }),
    },
  },
});

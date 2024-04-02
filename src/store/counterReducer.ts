export const enum CounterActions {
  INCREMENT = 'counter/increment',
  DECREMENT = 'counter/decrement',
}

interface ICounter {
  count: number;
}

export type TypeCounterActions =
  | { type: CounterActions.INCREMENT; payload: number; count: number }
  | { type: CounterActions.DECREMENT; payload: number; count: number };

export const initialState: ICounter = { count: 0 };

export const counterReducer = (
  state = initialState,
  action: TypeCounterActions
) => {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case CounterActions.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

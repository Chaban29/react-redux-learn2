interface ICount {
  count: number;
}

const initialState: ICount = { count: 0 };

export const enum CounterActions {
  INCREMENT = 'counter/increment',
  DECREMENT = 'counter/decrement',
}

export type TypeCounterActions =
  | { type: CounterActions.INCREMENT; payload: number }
  | { type: CounterActions.DECREMENT; payload: number };

export const counterReducer = (
  state = initialState,
  action: TypeCounterActions
) => {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return { ...state, count: state.count + action.payload };
    case CounterActions.DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

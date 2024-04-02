import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer/rootReducer';
import { CounterActions } from '../../store/counterReducer/counterReducer';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const increment = (cash: number) => {
    dispatch({ type: CounterActions.INCREMENT, payload: cash });
  };

  const decrement = (cash: number) => {
    if (!count) return;
    dispatch({ type: CounterActions.DECREMENT, payload: cash });
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => increment(Number(prompt()))}>Increment</button>
      <button onClick={() => decrement(Number(prompt()))}>Decrement</button>
    </>
  );
};

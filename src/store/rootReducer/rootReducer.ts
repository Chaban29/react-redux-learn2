import { combineReducers } from 'redux';
import { counterReducer } from '../counterReducer/counterReducer';
import { customerReducer } from '../customerReducer/customerReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  customers: customerReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

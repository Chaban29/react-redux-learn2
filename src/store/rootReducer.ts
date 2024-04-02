import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { customersReducer } from './customersReducer';

export const rootReducer = combineReducers({
  count: counterReducer,
  customers: customersReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

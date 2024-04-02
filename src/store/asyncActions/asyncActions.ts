import { Dispatch } from 'redux';
import {
  TypeCustomersActions,
  CustomersActions,
} from '../customerReducer/customerReducer';

type TypeDispatch = Dispatch<TypeCustomersActions>;

export const fetchCustomers = () => {
  return (dispatch: TypeDispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json: string[]) =>
        dispatch({ type: CustomersActions.ADDMANYCUSTOMERS, customers: json })
      );
  };
};

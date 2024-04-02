import { Dispatch } from 'redux';
import { CustomersActions, TypeActions } from '../store/customersReducer';

export const customers = async (dispatch: Dispatch<TypeActions>) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch customers data');
    }
    const result = await response.json();

    dispatch({
      type: CustomersActions.ADDCUSTOMERS,
      customers: { customers: result },
    });
    return result;
  } catch (err) {
    console.error('Error fetching customers data:', err);
  }
};

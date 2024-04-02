import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer/rootReducer';
import { CustomersActions } from '../../store/customerReducer/customerReducer';

export const SortCustomers: FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );

  const handleSortCustomers = () => {
    const sortedCustomers = [...customers].sort((a, b) => {
      return a.localeCompare(b, 'en', { sensitivity: 'base' });
    });
    dispatch({
      type: CustomersActions.SORTEDCUSTOMERS,
      payload: sortedCustomers,
    });
  };

  return (
    <button onClick={handleSortCustomers}>Filter customers by name</button>
  );
};

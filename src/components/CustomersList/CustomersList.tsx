import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer/rootReducer';
import { CustomersActions } from '../../store/customerReducer/customerReducer';
import { Input } from '../Input/Input';
import { SortCustomers } from '../SortCustomers/SortCustomers';
import { fetchCustomers } from '../../store/asyncActions/asyncActions';
import { AnyAction } from 'redux';

export const CustomersList: FC = () => {
  const [currentCustomerName, setCurrentCustomerName] = useState<string>('');
  const dispatch = useDispatch();
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );

  const handleDeleteCustomer = (customerName: string) => {
    dispatch({ type: CustomersActions.DELETECUSTOMER, payload: customerName });
  };

  const addCustomer = (name: string) => {
    const customer = { name, id: Date.now() };
    dispatch({ type: CustomersActions.ADDCUSTOMER, payload: customer.name });
  };

  const handleAddCustomerName = () => {
    if (currentCustomerName.trim() !== '') {
      addCustomer(currentCustomerName);
      setCurrentCustomerName('');
    }
  };

  return (
    <div>
      <Input
        type='text'
        value={currentCustomerName}
        onChange={(event) => setCurrentCustomerName(event.target.value)}
      />
      <button onClick={handleAddCustomerName}>Add new customer</button>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer, i) => (
            <li key={i}>
              {customer}
              <button onClick={() => handleDeleteCustomer(customer)}>
                Delete customer
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h3>Customers is empty</h3>
      )}
      <SortCustomers />
      <button
        onClick={() => dispatch(fetchCustomers() as unknown as AnyAction)}
      >
        Show users
      </button>
    </div>
  );
};

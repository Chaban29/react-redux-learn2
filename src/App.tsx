import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';
import { CounterActions } from './store/counterReducer';
import { CustomersActions } from './store/customersReducer';
import { customers } from './asyncActions/customers';

export const App: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.count.count);
  const customersList = useSelector(
    (state: RootState) => state.customers.customers
  );
  const [customerName, setCustomerName] = useState<string>('');

  const increment = () => {
    dispatch({ type: CounterActions.INCREMENT, payload: 20 });
  };

  const decrement = () => {
    if (!count) return;
    dispatch({ type: CounterActions.DECREMENT, payload: 20 });
  };

  const addCustomer = (name: string) => {
    const customer = { name, id: Date.now() };
    dispatch({ type: CustomersActions.ADD, payload: customer.name });
  };

  const handleAddCustomerName = () => {
    if (customerName.trim() !== '') {
      addCustomer(customerName);
      setCustomerName('');
    }
  };

  const deleteCustomer = (customerName: string) => {
    dispatch({ type: CustomersActions.DELETE, payload: customerName });
  };

  const getCustomers = async () => {
    try {
      const result = await customers(dispatch);
      console.log('Customers fetched:', result);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <input
        type='text'
        value={customerName}
        onChange={(event) => setCustomerName(event.target.value)}
      />
      <button onClick={handleAddCustomerName}>Add customer</button>
      <button onClick={getCustomers}>Get customers</button>
      <div>
        {customersList.length > 0 ? (
          <div>
            {customersList.map((customer, index) => (
              <div key={index + 1}>
                {customer}
                <button onClick={() => deleteCustomer(customer)}>
                  Delete customer
                </button>
              </div>
            ))}
          </div>
        ) : (
          'Customers is empty'
        )}
      </div>
    </div>
  );
};

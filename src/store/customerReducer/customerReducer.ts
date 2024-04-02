export type TypeCustomers = Array<string>;

interface ICustomers {
  customers: TypeCustomers;
}

export const enum CustomersActions {
  ADDCUSTOMER = 'customers/add',
  DELETECUSTOMER = 'customers/delete',
  SORTEDCUSTOMERS = 'customers/sorted',
  ADDMANYCUSTOMERS = 'customers/addMany',
}

export type TypeCustomersActions =
  | { type: CustomersActions.ADDCUSTOMER; payload: string }
  | { type: CustomersActions.DELETECUSTOMER; payload: string }
  | { type: CustomersActions.SORTEDCUSTOMERS; payload: TypeCustomers }
  | { type: CustomersActions.ADDMANYCUSTOMERS; customers: Array<string> };

const customersState: ICustomers = { customers: ['Roman', 'Oleg'] };
export const customerReducer = (
  state = customersState,
  action: TypeCustomersActions
) => {
  switch (action.type) {
    case CustomersActions.ADDMANYCUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.customers],
      };
    case CustomersActions.ADDCUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case CustomersActions.DELETECUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer !== action.payload
        ),
      };
    case CustomersActions.SORTEDCUSTOMERS:
      return {
        ...state,
        customers: [...action.payload],
      };
    default:
      return state;
  }
};

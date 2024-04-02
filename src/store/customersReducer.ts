export interface ICustomers {
  customers: string[];
}

export const enum CustomersActions {
  ADD = 'customers/add',
  DELETE = 'customers/delete',
  ADDCUSTOMERS = 'customers/add/customers',
}

export type TypeActions =
  | { type: CustomersActions.ADD; customers: ICustomers; payload: string }
  | { type: CustomersActions.DELETE; customers: ICustomers; payload: string }
  | { type: CustomersActions.ADDCUSTOMERS; customers: ICustomers };

export const customersState: ICustomers = { customers: ['Roman'] };

export const customersReducer = (
  state = customersState,
  action: TypeActions
) => {
  switch (action.type) {
    case CustomersActions.ADDCUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.customers.customers],
      };
    case CustomersActions.ADD:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case CustomersActions.DELETE:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer !== action.payload
        ),
      };
    default:
      return state;
  }
};

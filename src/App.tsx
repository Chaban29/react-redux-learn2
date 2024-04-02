import { FC, Fragment } from 'react';
import { CustomersList } from './components/CustomersList/CustomersList';

export const App: FC = () => {
  return (
    <div>
      <Fragment>
        <CustomersList />
      </Fragment>
    </div>
  );
};

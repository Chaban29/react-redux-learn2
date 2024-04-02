import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

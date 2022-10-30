import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

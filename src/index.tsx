import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { eventReducer } from './store/eventReducer';

const store = createStore(eventReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


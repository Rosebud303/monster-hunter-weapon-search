import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import { BrowseRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const router = (
  <BrowseRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowseRouter>
)

ReactDOM.render(router, document.getElementById('root'));


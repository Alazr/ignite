import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer  from './reducers/combined'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  )
// console.log()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


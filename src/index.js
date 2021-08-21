import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from './Provider';
import reportWebVitals from './reportWebVitals';
import Timer from './Timer';
import { createStore } from "./constants";
import reducer from "./reducer";

//добавили начальное значение интервала
const initialState = 1;

ReactDOM.render(
  <Provider store={createStore(reducer, initialState)}>
    <Timer />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay';

import Environment from './graphql';
import App from './App';
import './style/reset.css';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <RelayEnvironmentProvider environment={Environment}>
    <App />
  </RelayEnvironmentProvider>,
  rootElement,
);

import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import Environment from './graphql';
import App from './App';
import './style/reset.css';
import AuthStoreProvider from './contexts/AuthStore';
import ThemeStoreProvider from './contexts/ThemeStore';
import RootElementProvider from './contexts/RootElement';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dns: process.env.SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
  });
}

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <RelayEnvironmentProvider environment={Environment}>
    <ThemeStoreProvider>
      <AuthStoreProvider>
        <RootElementProvider rootElement={rootElement}>
          <App />
        </RootElementProvider>
      </AuthStoreProvider>
    </ThemeStoreProvider>
  </RelayEnvironmentProvider>,
  rootElement,
);

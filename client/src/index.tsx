import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import Environment from './graphql';
import App from './App';
import './style/reset.css';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dns: process.env.SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
  });
}

if (process.env.NODE_ENV === 'production') {
  const tempDSN = 'https://06861ab796e04e7494fd47f3b8b5e5e3@o948125.ingest.sentry.io/5897330';

  Sentry.init({
    // dns: process.env.SENTRY_DSN,
    dsn: tempDSN, // TODO : CI/CD 구축 후 process.env.SENTRY_DSN 로 관리하기
    integrations: [new Integrations.BrowserTracing()],
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
  });
}

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <RelayEnvironmentProvider environment={Environment}>
    <App />
  </RelayEnvironmentProvider>,
  rootElement,
);

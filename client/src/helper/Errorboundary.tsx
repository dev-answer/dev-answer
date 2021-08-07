import { Component, ErrorInfo, ReactNode } from 'react';
import * as Sentry from '@sentry/react';

interface Props {
  readonly children?: ReactNode;
  readonly fallback?: (error: Error) => ReactNode;
}

interface State {
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      const { name, message } = error;
      const { componentStack } = errorInfo;

      console.error(
        `Error boundary caught error: (name : ${name}, message : ${message})`,
      );

      console.error(
        `Error boundary caught Info: ${componentStack}`,
      );

      return;
    }

    Sentry.captureException(error);
  }

  render() {
    const { error } = this.state;
    const { fallback, children } = this.props;

    if (error) {
      return fallback;
    }

    return children;
  }
}

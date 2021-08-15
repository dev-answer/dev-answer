import React, { Component, ErrorInfo, ReactNode } from 'react';

import * as Sentry from '@sentry/react';

interface Props {
  readonly children?: ReactNode;
  readonly fallback?: (error: Error) => ReactNode;
}

interface State {
  error?: Error;
}

// TODO : 현재 임시로 구현해 놓은 상태. 디자인 나오면 UI 수정 예정
const Fallback = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('홈화면으로 가자!');
  };

  return (
    <>
      <h1>예상치 못한 에러가 발생하였습니다!</h1>
      <button type="button" onClick={handleClick}>홈 화면으로</button>
    </>
  );
};

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
    const { children } = this.props;

    if (error) {
      return <Fallback />;
    }

    return children;
  }
}

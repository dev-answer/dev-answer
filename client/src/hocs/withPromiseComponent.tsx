import React, { ComponentType, Suspense } from 'react';

import ErrorBoundary from '../helper/Errorboundary';

const withPromiseComponent = (
  PenddingComponent: ComponentType,
  ResolveComponent: ComponentType,
  RejectComponent: ComponentType,
) => {
  const PromiseComponent = () => (
    <ErrorBoundary fallback={<RejectComponent />}>
      <Suspense fallback={<PenddingComponent />}>
        <ResolveComponent />
      </Suspense>
    </ErrorBoundary>
  );

  return PromiseComponent;
};

export default withPromiseComponent;

import React, { ComponentType, Suspense } from 'react';

const withSuspense = (Comp: ComponentType, Fallback: ComponentType) => {
  const WithSuspense = () => (
    <Suspense fallback={<Fallback />}>
      <Comp />
    </Suspense>
  );

  return WithSuspense;
};

export default withSuspense;

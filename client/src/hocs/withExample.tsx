import React, { ComponentType } from 'react';

const withExample = (Comp: ComponentType) => {
  const WithExample = () => {
    console.log('example HOC called');

    return <Comp />;
  };

  return WithExample;
};

export default withExample;

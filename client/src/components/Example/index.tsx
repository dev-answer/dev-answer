import React from 'react';
import { styled } from '@stitches/react';

import ExampleHeader from '../common/ExampleHeader';
import useExample from '../../hooks/useExample';

const Example: React.FC = () => {
  const [state, toggle] = useExample();

  const color = state ? 'blue' : 'red';

  return (
    <>
      <ExampleHeader />
      <div>이 컴포넌트는 예시 컴포넌트 입니다</div>
      <div>
        상태:
        &nbsp;
        {state.toString()}
      </div>
      <Button color={color} type="button" onClick={() => toggle()}>Click</Button>
    </>
  );
};

const Button = styled('button', {
  color: '#fff',
  border: 'none',
  borderRadius: '1em',
  padding: '1em',
  cursor: 'pointer',

  variants: {
    color: {
      red: {
        background: 'red',
      },
      blue: {
        background: 'blue',
      },
    },
  },
});

export default Example;

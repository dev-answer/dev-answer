import React from 'react';
import styled from '@emotion/styled';

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

const Button = styled.button<{ color: string}>`
  color: #fff;
  border: none;
  border-radius: 1em;
  padding: 1em;
  cursor: pointer;
  background: ${({ color }) => color};
`;

export default Example;

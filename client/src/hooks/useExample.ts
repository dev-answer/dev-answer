import { useState } from 'react';

const useExample = () => {
  const [state, setState] = useState(false);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle];
};

export default useExample;

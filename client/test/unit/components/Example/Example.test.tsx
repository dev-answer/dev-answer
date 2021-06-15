import React from 'react';
import { render } from '@testing-library/react';

import Example from '../../../../src/components/Example';

describe('Example', () => {
  it('renders example contents', () => {
    const { container } = render(<Example />);

    expect(container).toHaveTextContent('이 컴포넌트는 예시 컴포넌트');
  });
});

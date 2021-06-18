import React from 'react';

import Example from '../components/Example';
import withExample from '../hocs/withExample';

const ExamplePage: React.FC = () => <Example />;

export default withExample(ExamplePage);

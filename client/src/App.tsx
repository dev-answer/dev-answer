import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import ExamplePage from './page/ExamplePage';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExamplePage} />
    </Switch>
  </BrowserRouter>
);

export default App;

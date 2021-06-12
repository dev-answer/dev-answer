import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ExamplePage from './page/ExamplePage';

const App: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/example" component={ExamplePage} />
    </Switch>
  </HashRouter>
);

export default App;

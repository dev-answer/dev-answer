import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import LoginPage from './page/LoginPage';
import QuestionPage from './page/QuestionPage';
import LoginCallbackPage from './page/LoginCallbackPage';
import ExamplePage from './page/ExamplePage';
import CommentPage from './page/CommentPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExamplePage} />
      <Route exact path="/comment" component={CommentPage} />
      <Route path="/" component={QuestionPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/oauth" component={LoginCallbackPage} />
    </Switch>
  </BrowserRouter>
);

export default App;

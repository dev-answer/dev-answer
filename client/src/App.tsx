import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import LoginPage from './page/LoginPage';
import LoginCallbackPage from './page/LoginCallbackPage';
import ExamplePage from './page/ExamplePage';
import CommentPage from './page/CommentPage';
import BookmarksPage from './page/BookmarksPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExamplePage} />
      <Route exact path="/comment" component={CommentPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/oauth" component={LoginCallbackPage} />
      <Route path="/bookmarks" component={BookmarksPage} />
    </Switch>
  </BrowserRouter>
);

export default App;

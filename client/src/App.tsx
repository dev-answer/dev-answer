import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import Header from './components/common/Header';
import QuestionBoardPage from './page/QuestionBoardPage';
import LoginCallbackPage from './page/LoginCallbackPage';
import ExamplePage from './page/ExamplePage';
import CommentPage from './page/CommentPage';
import BookmarksPage from './page/BookmarksPage';

import ErrorBoundary from './helper/Errorboundary';
import useSubscribeLoginPostMessage from './hooks/useSubscribeLoginPostMessage';

const App: React.FC = () => {
  useSubscribeLoginPostMessage();

  return (
    <ErrorBoundary>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ExamplePage} />
          <Route exact path="/comment" component={CommentPage} />
          <Route path="/question/board" component={QuestionBoardPage} />
          <Route path="/oauth" component={LoginCallbackPage} />
          <Route path="/bookmarks" component={BookmarksPage} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;

import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import HomePage from './page/HomePage';
import QuestionBoardPage from './page/QuestionBoardPage';
import QuestionsPage from './page/QuestionsPage';
import LoginCallbackPage from './page/LoginCallbackPage';
import CommentPage from './page/CommentPage';
import BookmarksPage from './page/BookmarksPage';

import ErrorBoundary from './helper/Errorboundary';
import useSubscribeLoginPostMessage from './hooks/useSubscribeLoginPostMessage';

const App: React.FC = () => {
  useSubscribeLoginPostMessage();

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/comment" component={CommentPage} />
          <Route path="/question/board" component={QuestionBoardPage} />
          <Route path="/questions" component={QuestionsPage} />
          <Route path="/oauth" component={LoginCallbackPage} />
          <Route path="/bookmarks" component={BookmarksPage} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;

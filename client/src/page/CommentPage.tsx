import React from 'react';

import CommentList from '../components/Comment/CommentList';
import CommentInputForm from '../components/Comment/CommentInputForm';

const CommentPage: React.FC = () => (
  <section>
    <h2>
      댓글
    </h2>
    <CommentList />
    <CommentInputForm />
  </section>
);

export default CommentPage;

import React from 'react';

import CommentInputForm from '../components/Comment/CommentInputForm';
import CommentList from '../components/Comment/CommentList';

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

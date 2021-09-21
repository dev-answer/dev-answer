import React from 'react';

import CommentList from '../Comment/CommentList';
import CommentInputForm from '../Comment/CommentInputForm';

interface Props {
}

const QuestionDetailComment: React.FC<Props> = () => (
  <section>
    <h2>
      댓글
    </h2>
    <CommentList />
    <CommentInputForm />
  </section>
);

export default QuestionDetailComment;

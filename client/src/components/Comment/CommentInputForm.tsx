import React, { FormEvent, ChangeEvent } from 'react';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: FormEvent) => void;
    // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  commentInput: string;
}

const CommentInputForm: React.FC<Props> = ({ onSubmit, onChange, commentInput }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="commentInput">
      유저프로필
      <input
        type="text"
        id="commentInput"
        placeholder="제 생각에는..."
        value={commentInput}
        onChange={onChange}
      />
    </label>
    <button type="submit">
      등록
    </button>
  </form>
);

export default CommentInputForm;

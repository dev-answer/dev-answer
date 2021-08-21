export interface SubComment {
  id: string;
  createdAt: string;
  uid: string;
  content: string;
  like: [string];
  dislike: [string];
}

export interface Comment {
  id: string;
  questionId: number;
  createdAt: string;
  uid: string;
  content: string;
  like: [] | string[];
  dislike: [] | string[];
  subComments: [] | SubComment[]
}

export interface NewComment {
  questionId: number;
  uid: string;
  content: string;
}

export interface UpdateInfo {
  targetId: string;
  action: 'REVISE' | 'PUSH' | 'FILTER';
  updateField: keyof Comment;
  payload: string;
}

export interface AddLikeArgs {
  commentId: string;
  uid: string;
}

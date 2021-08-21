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
  like: [] | [string];
  dislike: [] | [string];
  subComments: [] | [SubComment]
}

export interface NewComment {
  questionId: number,
  uid: string,
  content: string,
}

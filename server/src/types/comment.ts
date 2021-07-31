export interface SubComment {
  id: number;
  createdAt: string;
  userEmail: string;
  content: string;
  like: [string];
  dislike: [string];
}

export interface Comment {
  id: number;
  questionId: number;
  createdAt: string;
  userEmail: string;
  content: string;
  like: [] | [string];
  dislike: [] | [string];
  subComments: [] | [SubComment]
}

export interface NewComment {
  questionId: number,
  userEmail: string,
  content: string,
}

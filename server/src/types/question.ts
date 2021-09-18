import { Comment } from '.';

export type QuestionCategory = 'React' | 'JavaScript' | 'HTML' | 'CSS'

export interface QuestionAuthor {
  id: string
  name: string
  gitHubURL: string
  profileImageURL: string
}

export interface Question {
  id: number,
  content: string,
  category: QuestionCategory,
  authorId: string
}

export interface QuestionResponse extends Question {
  author: QuestionAuthor
  comments: Comment[]
}

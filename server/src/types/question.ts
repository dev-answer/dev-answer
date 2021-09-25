import { Comment } from '.';

export interface QuestionCategory {
  id: string
  title: 'React' | 'JavaScript' | 'HTML' | 'CSS'
}

export interface QuestionAuthor {
  id: string
  name: string
  gitHubURL: string
  profileImageURL: string
}

export interface Question {
  id: number,
  content: string,
  categoryId: string,
  authorId: string
  infomations: string[]
}

export interface QuestionResponse extends Question {
  author: QuestionAuthor
  comments: Comment[]
  category: QuestionCategory
}

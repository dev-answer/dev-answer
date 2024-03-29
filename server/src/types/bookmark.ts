import { Document } from 'mongoose';

export interface Bookmark {
  id: number;
  userId: number;
  questionId: number;
  createdAt: string;
}

export interface BookmarkDB extends Document {
  id: number;
  userId: number;
  questionId: number;
  createdAt: string;
}

export interface BookmarkInput {
  userId: number;
  questionId: number;
}

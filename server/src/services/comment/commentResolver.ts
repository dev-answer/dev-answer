import CommentRepository from '../../repositories/commentRepository';

import { NewComment } from '../../types';

const commentRepo = new CommentRepository();

export default {
  Query: {
    comments: async (_:any, args: { questionId: number }) => {
      const comments = await commentRepo.findOne(args.questionId);
      return comments;
    },
  },
  Mutation: {
    addComment: async (_: any, args: NewComment) => {
      const result = await commentRepo.create(args);
      return result;
    },
  },
};

import CommentRepository from '../../repositories/commentRepository';

import { NewComment } from '../../types/comment';

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
      const result = await commentRepo.createOne(args);
      return result;
    },
  },
};

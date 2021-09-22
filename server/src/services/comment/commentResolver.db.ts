import CommentRepository from '../../repositories/commentRepository.db';

import { NewComment } from '../../types';

const commentRepo = new CommentRepository();

export default {
  Query: {
    commentsDB: async (_: any, args: { questionId: number }) => {
      const comments = await commentRepo.findOne(args.questionId);
      return comments;
    },
  },
  Mutation: {
    addCommentDB: async (_: any, args: NewComment) => {
      const result = await commentRepo.create(args);
      return result;
    },
  },
};

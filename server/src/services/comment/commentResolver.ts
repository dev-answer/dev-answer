import CommentRepository from '../../repositories/commentRepository';

import { NewComment, AddLikeArgs } from '../../types/comment';

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
    addLike: async (_: any, { commentId, uid }: AddLikeArgs) => {
      const result = await commentRepo.updateOne({
        targetId: commentId,
        action: 'PUSH',
        updateField: 'like',
        payload: uid,
      });

      return result;
    },
  },
};

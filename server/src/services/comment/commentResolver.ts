import CommentRepository from '../../repositories/commentRepository';

import { NewComment, ToggleLikeArgs, UpdateInfo } from '../../types/comment';

const commentRepo = new CommentRepository();

export default {
  Query: {
    comments: async (_:any, args: { questionId: number }) => {
      const comments = await commentRepo.findOneByQuestionId(args.questionId);
      return comments;
    },
  },
  Mutation: {
    addComment: async (_: any, args: NewComment) => {
      const result = await commentRepo.createOne(args);
      return result;
    },
    toggleLike: async (_: any, { commentId, uid }: ToggleLikeArgs) => {
      const comment = await commentRepo.findOneByCommentId(commentId);

      const isUserExist = comment.like.find((userId: string) => userId === uid);

      const updateInfo: UpdateInfo = isUserExist ? {
        targetId: commentId,
        action: 'FILTER',
        updateField: 'like',
        payload: uid,
      } : {
        targetId: commentId,
        action: 'PUSH',
        updateField: 'like',
        payload: uid,
      };

      const result = await commentRepo.updateOne(updateInfo);

      return result;
    },
  },
};

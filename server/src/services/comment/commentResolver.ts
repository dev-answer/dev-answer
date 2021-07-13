import CommentRepository from '../../repositories/commentRepository';

const commentRepo = new CommentRepository();

export default {
  Query: {
    commentsOfQuestion: async (_:any, args: { questionId: number }) => {
      const comments = await commentRepo.findOne(args.questionId);
      return comments;
    },
  },
};

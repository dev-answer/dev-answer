export default `

type SubCommentDB {
  id: ID!
  createdAt: String
  uid: String
  content: String
  like: [String]
  dislike: [String]
}

type CommentDB {
  id: ID!
  questionId: Int
  createdAt: String
  uid: String
  content: String
  like: [String]
  dislike: [String]
  subComments: [SubCommentDB]
}

type Query {
  commentsDB(questionId: Int): [CommentDB!]!
}

type Mutation {
  addCommentDB(questionId: Int, uid: String, content: String): CommentDB
  toggleLikeDB(commentId: String, uid: String): CommentDB
}
`;

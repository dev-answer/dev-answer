export default `

type SubCommentDB {
  id: ID!
  createdAt: String
  userEmail: String
  content: String
  like: [String]
  dislike: [String]
}

type CommentDB {
  id: ID!
  questionId: Int
  createdAt: String
  userEmail: String
  content: String
  like: [String]
  dislike: [String]
  subComments: [SubCommentDB]
}

type Query {
  commentsDB(questionId: Int): [CommentDB!]!
}

type Mutation {
  addCommentDB(questionId: Int, userEmail: String, content: String): CommentDB
}
`;

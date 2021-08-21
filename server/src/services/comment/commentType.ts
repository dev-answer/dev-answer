export default `

type SubComment {
  id: ID!
  createdAt: String
  uid: String
  content: String
  like: [String]
  dislike: [String]
}

type Comment {
  id: ID!
  questionId: Int
  createdAt: String
  uid: String
  content: String
  like: [String]
  dislike: [String]
  subComments: [SubComment]
}

type Query {
  comments(questionId: Int): [Comment!]!
}

type Mutation {
  addComment(questionId: Int, uid: String, content: String): Comment
  addLike(commentId: String, uid: String): Comment
}
`;

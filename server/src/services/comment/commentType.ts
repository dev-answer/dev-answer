export default `

type SubComment {
  id: ID!
  createdAt: String
  userEmail: String
  content: String
  like: [String]
  dislike: [String]
}

type Comment {
  id: ID!
  questionId: Int
  createdAt: String
  userEmail: String
  content: String
  like: [String]
  dislike: [String]
  subComments: [SubComment]
}

type Query {
  comments(questionId: Int): [Comment!]!
}

type Mutation {
  addComment(questionId: Int, userEmail: String, content: String): Comment
}
`;

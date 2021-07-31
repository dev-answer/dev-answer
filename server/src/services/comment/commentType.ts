export default `

type SubComments {
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
  subComments: [SubComments]
}

type Query {
  comments(questionId: Int): [Comment!]!
}

type Mutation {
  addComment(questionId: Int, userEmail: String, content: String): Int
}
`;

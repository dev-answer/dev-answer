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

type NewComment {
  questionId: Int
  userEmail: String
  content: String
}

type Query {
  comments(questionId: Int): [Comment!]!
}

type Mutation {
  addComment(args: NewComment): Int
}
`;

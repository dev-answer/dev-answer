export default `

type SubComments {
  id: ID!
  createdAt: String
  userEmail: String
  content: String
  like: [String]
  hate: [String]
}

type Comment {
  id: ID!
  questionId: Int
  createdAt: String
  userEmail: String
  content: String
  like: [String]
  hate: [String]
  subComments: [SubComments]
}

type Query {
  comments(questionId: Int): [Comment!]!
}
`;

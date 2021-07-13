export default `
type SubComments {
  id: ID!
  createAt: String
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
  commentsOfQuestion(questionId: Int): [Comment!]!
}
`;

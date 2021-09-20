export default `
type QuestionAuthor {
  id: String!
  name: String!
  gitHubURL: String!
  profileImageURL: String!
}

type Question {
  id: ID!,
  content: String!,
  categoryId: String!,
  category: QuestionCategory!,
  authorId: String!
  author: QuestionAuthor!
  comments: [Comment!]!
  infomations: [String!]!
}

type Query {
  allQuestions: [Question!]!
  questionDetail(questionId: Int!): Question
  questionsByCategoryId(categoryId: String!): [Question!]!
}
`;

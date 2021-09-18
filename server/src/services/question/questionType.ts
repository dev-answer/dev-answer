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
  categoryId: Int!,
  category: QuestionCategory!,
  authorId: String!
  author: QuestionAuthor!
  comments: [Comment!]!
}

type Query {
  allQuestions: [Question!]!
  questionDetail(questionId: Int!): Question
  questionsByCategoryId(categoryId: Int!): [Question!]!
}
`;

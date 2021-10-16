export default `
type QuestionCategory {
  id: ID!
  title: String!
  count: Int!
}

type Query {
  allQuestionCategories: [QuestionCategory!]!
}
`;

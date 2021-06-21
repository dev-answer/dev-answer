export default `
type QuestionCategory {
  id: ID!
  title: String! 
}

type Query {
  allQuestionCategories: [QuestionCategory!]!
}
`;

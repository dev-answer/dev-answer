export default `
type QuestionCategoryDB {
  id: ID!
  title: String! 
}

type Query {
  allQuestionCategoriesDB: [QuestionCategoryDB!]!
}
`;

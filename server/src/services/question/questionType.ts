export default `
type Question {
  title: String
  content: String
  category: Category
}

type Query {
  allQuestions: [Question!]!
}
`;

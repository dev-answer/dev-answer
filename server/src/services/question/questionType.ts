export default `
type Question {
  id: ID!
  title: String
  content: String
  category: String
  level: Int
}

type Query {
  allQuestions: [Question!]!
}
`;

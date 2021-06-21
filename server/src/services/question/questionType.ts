export default `
type Question {
  id: ID!
  title: String
  content: String
  category: String
  level: Int
  frequency: Boolean
}

type Query {
  allQuestions: [Question!]!
}
`;

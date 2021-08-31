export default `
type QuestionDB {
  id: ID!
  title: String
  content: String
  category: String
  level: Int
  frequency: Boolean
}

type Query {
  allQuestionsDB: [QuestionDB!]!
}
`;

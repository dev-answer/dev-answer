export default `
type User {
  id: ID!
  email: String!
  name: String
  bookMarks: [Int!]!
}

type Query {
  allUsers: [User!]!
}
`;

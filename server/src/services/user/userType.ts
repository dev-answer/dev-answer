export default `
type User {
  id: ID!
  email: String!
  name: String
  boomarks: [Int!]!
}

type Query {
  allUsers: [User!]!
}
`;

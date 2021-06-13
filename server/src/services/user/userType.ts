export default `
type User {
  email: String!
  name: String
}

type Query {
  allUsers: [User!]!
}
`;

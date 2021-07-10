export default `
type User {
  id: ID!
  email: String!
  name: String
  bookmarks: [Int]
}

type Auth {
  accessToken: String
}

type Query {
  allUsers: [User!]!
  login(code: String!): Auth!
}
`;

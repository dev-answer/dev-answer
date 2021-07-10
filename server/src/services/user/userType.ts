export default `
type User {
  id: ID!
  email: String!
  name: String
  bookmarks: [Int]
}

type Query {
  allUsers: [User!]!
}
`;

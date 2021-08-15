export default `
type User {
  id: ID!
  name: String!
  gitHubURL: String!
  profileImageURL: String!
}

type Query {
  allUsers: [User!]!
  oneUser(userId: String!): User
  myUser(accessToken: String!): User
}
`;

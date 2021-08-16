export default `
type User {
  id: ID!
  name: String!
  gitHubURL: String!
  profileImageURL: String!
}

type Query {
  allUsers: [User!]!
  userInfo(userId: String!): User
  myInfo(accessToken: String!): User
}
`;

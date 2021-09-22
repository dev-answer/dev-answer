export default `
type UserDB {
  id: ID!
  name: String!
  gitHubURL: String!
  profileImageURL: String!
}

type Query {
  allUsersDB: [UserDB!]!
  userInfoDB(userId: String!): UserDB
  myInfoDB(accessToken: String!): UserDB
}
`;

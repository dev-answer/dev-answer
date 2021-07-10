export default `
type Auth {
  accessToken: String
}

type Mutation {
  login(code: String!): Auth!
}
`;

export default `
  type Bookmark {
    id: ID!
    question: Question
    createdAt: String
  }

  type Query {
    bookmarks(userId: Int!): [Bookmark]
  }
`;

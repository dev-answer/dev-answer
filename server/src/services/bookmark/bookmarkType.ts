export default `
  type Bookmark {
    id: ID!
    question: Question
    createdAt: String
  }

  type Query {
    bookmarks(userId: Int!): [Bookmark]
  }

  type Mutation {
    addBookmark(userId: Int, questionId: Int): Bookmark
  }
`;

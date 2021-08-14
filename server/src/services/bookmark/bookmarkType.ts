export default `
  type Bookmark {
    id: ID!
    question: Question
    user: User
    createdAt: String
  }

  type Query {
    bookmarks(userId: Int!): [Bookmark]
  }

  type Mutation {
    addBookmark(userId: Int, questionId: Int): Bookmark
    removeBookmark(bookmarkId: Int!): Bookmark
  }
`;

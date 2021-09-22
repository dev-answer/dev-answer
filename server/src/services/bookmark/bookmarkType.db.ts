export default `
  type BookmarkDB {
    id: ID!
    question: Question
    user: User
    createdAt: String
  }

  type Query {
    bookmarksDB(userId: Int!): [BookmarkDB]
  }

  type Mutation {
    addBookmarkDB(userId: Int, questionId: Int): BookmarkDB
    removeBookmarkDB(bookmarkId: Int!): BookmarkDB
  }
`;

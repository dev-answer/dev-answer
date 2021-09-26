export default `
type QuestionAuthor {
  id: String!
  name: String!
  gitHubURL: String!
  profileImageURL: String!
}

type QuestionVote {
  userId: String!
  kind: String!
}

type QuestionVoteResult {
  easy: Int!
  normal: Int!
  hard: Int!
}

type Question {
  id: ID!,
  content: String!,
  categoryId: String!,
  category: QuestionCategory!,
  votes: [QuestionVote!]!
  authorId: String!
  author: QuestionAuthor!
  comments: [Comment!]!
  informations: [String!]!
}

type Query {
  allQuestionsDB: [Question!]!
  questionDetailDB(questionId: Int!): Question
  questionsByCategoryIdDB(categoryId: String!): [Question!]!
}

type Mutation {
  voteDB(questionId: Int!, userId: String!, kind: String!): QuestionVoteResult 
}
`;

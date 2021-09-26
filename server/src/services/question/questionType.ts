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
  vote: [QuestionVote!]!
  authorId: String!
  author: QuestionAuthor!
  comments: [Comment!]!
  informations: [String!]!
}

type Query {
  allQuestions: [Question!]!
  questionDetail(questionId: Int!): Question
  questionsByCategoryId(categoryId: String!): [Question!]!
}

type Mutation {
  vote(questionId: Int!, userId: String!, kind: String!): QuestionVoteResult 
}
`;
